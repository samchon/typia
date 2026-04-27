package emitter

import (
	"errors"
	"fmt"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitMiscLiteralsExpression returns a JS expression whose runtime value is
// an array of every literal in the given union type. Matches
// `typia.misc.literals<"a" | "b">()`.
func EmitMiscLiteralsExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if !schema.IsConstant() && !(schema.Bucket() == 1 && len(schema.Atomics) == 1 && schema.Atomics[0].Type == metadata.AtomicBoolean) {
		return "", fmt.Errorf("%w: misc.literals requires literal unions", ErrUnsupportedSchema)
	}
	values := make([]string, 0)
	for _, c := range schema.Constants {
		for _, v := range c.Values {
			values = append(values, jsLiteral(c.Type, v.Value))
		}
	}
	for _, a := range schema.Atomics {
		if a.Type == metadata.AtomicBoolean {
			values = append(values, "true", "false")
		}
	}
	if schema.Nullable {
		values = append(values, "null")
	}
	return "(" + "[" + strings.Join(values, ",") + "]" + ")", nil
}

// jsLiteral renders a literal value in JS source form.
func jsLiteral(k metadata.AtomicKind, v any) string {
	switch k {
	case metadata.AtomicString:
		if s, ok := v.(string); ok {
			return jsonQuote(s)
		}
	case metadata.AtomicNumber:
		return numberLiteral(v)
	case metadata.AtomicBigint:
		return numberLiteral(v) + "n"
	case metadata.AtomicBoolean:
		if b, ok := v.(bool); ok {
			if b {
				return "true"
			}
			return "false"
		}
	}
	return "null"
}

// EmitMiscCloneArrowFunction returns a runtime deep clone for values typia can
// validate, preserving non-JSON values that legacy misc.clone supports.
func EmitMiscCloneArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	state := newCloneState()
	expr, ok, err := state.cloneValue("input", schema)
	if err != nil {
		return "", err
	}
	if ok {
		if len(state.helpers) == 0 {
			return "(input) => " + expr, nil
		}
		var b strings.Builder
		b.WriteString("(input) => { ")
		for _, helper := range state.helpers {
			b.WriteString("const ")
			b.WriteString(helper.name)
			b.WriteString(" = (v) => ")
			b.WriteString(helper.body)
			b.WriteString("; ")
		}
		b.WriteString("return ")
		b.WriteString(expr)
		b.WriteString("; }")
		return b.String(), nil
	}
	return `(input) => { const __clone = (v) => { if (v === null || typeof v !== "object") return v; if (v instanceof Date) return new Date(v.getTime()); if (v instanceof RegExp) return new RegExp(v.source, v.flags); if (v instanceof ArrayBuffer) return v.slice(0); if (ArrayBuffer.isView(v)) return new v.constructor(v); if (v instanceof Set) return new Set(Array.from(v, __clone)); if (v instanceof Map) return new Map(Array.from(v, ([k, val]) => [__clone(k), __clone(val)])); if (Array.isArray(v)) return v.map(__clone); const out = {}; for (const key of Object.keys(v)) out[key] = __clone(v[key]); return out; }; return __clone(input); }`, nil
}

func miscCloneUsesAnyHelper(schema *metadata.Schema) bool {
	if schema.Any {
		return true
	}
	for _, array := range schema.Arrays {
		if array != nil && array.Type != nil && array.Type.Value != nil && array.Type.Value.Any {
			return true
		}
	}
	for _, tuple := range schema.Tuples {
		if tuple == nil || tuple.Type == nil || len(tuple.Type.Elements) == 0 {
			continue
		}
		allAny := true
		for _, elem := range tuple.Type.Elements {
			if elem == nil || !elem.Any {
				allAny = false
				break
			}
		}
		if allAny {
			return true
		}
	}
	return false
}

func miscCloneNativeExpression(input, name string) string {
	switch name {
	case "Boolean", "Number", "String":
		return input + ".valueOf()"
	case "Date", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array",
		"Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array", "RegExp":
		return "new " + name + "(" + input + ")"
	case "ArrayBuffer", "SharedArrayBuffer":
		return fmt.Sprintf(`(() => { const buffer = new %s(%s.byteLength); new Uint8Array(buffer).set(new Uint8Array(%s)); return buffer; })()`, name, input, input)
	case "DataView":
		return "new DataView(" + input + ".buffer)"
	default:
		return name + "()"
	}
}

type cloneState struct {
	objects       map[*metadata.ObjectType]bool
	objectBuilt   map[*metadata.ObjectType]bool
	objectHelpers map[*metadata.ObjectType]string
	objectNeeds   map[*metadata.ObjectType]bool
	arrays        map[*metadata.ArrayType]bool
	tuples        map[*metadata.TupleType]bool
	helpers       []cloneHelper
	disableWalker bool
}

type cloneHelper struct {
	name string
	body string
}

func newCloneState() *cloneState {
	return &cloneState{
		objects:       map[*metadata.ObjectType]bool{},
		objectBuilt:   map[*metadata.ObjectType]bool{},
		objectHelpers: map[*metadata.ObjectType]string{},
		objectNeeds:   map[*metadata.ObjectType]bool{},
		arrays:        map[*metadata.ArrayType]bool{},
		tuples:        map[*metadata.TupleType]bool{},
	}
}

func (s *cloneState) cloneValue(ve string, schema *metadata.Schema) (string, bool, error) {
	if schema == nil {
		return "undefined", true, nil
	}
	if miscCloneUsesAnyHelper(schema) {
		return miscCloneAnyImportAlias + "._miscCloneAny(" + ve + ")", true, nil
	}
	if schema.Size() == 0 {
		return ve, true, nil
	}
	if schema.Size() != 1 {
		return s.cloneUnion(ve, schema)
	}
	var expr string
	var ok bool
	var err error
	switch {
	case len(schema.Atomics) == 1 || len(schema.Constants) == 1 || len(schema.Templates) == 1:
		expr, ok = ve, true
	case len(schema.Functions) == 1:
		expr, ok = "undefined", true
	case len(schema.Natives) == 1:
		expr, ok = miscCloneNativeExpression(ve, schema.Natives[0].Name), true
	case len(schema.Arrays) == 1:
		expr, ok, err = s.cloneArray(ve, schema.Arrays[0])
	case len(schema.Tuples) == 1:
		expr, ok, err = s.cloneTuple(ve, schema.Tuples[0])
	case len(schema.Objects) == 1:
		expr, ok, err = s.cloneObject(ve, schema.Objects[0])
	case len(schema.Sets) == 1:
		expr, ok, err = s.cloneSet(ve, schema.Sets[0])
	case len(schema.Maps) == 1:
		expr, ok, err = s.cloneMap(ve, schema.Maps[0])
	case len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil:
		expr, ok, err = s.cloneValue(ve, schema.Aliases[0].Type.Value)
	default:
		return "", false, nil
	}
	if err != nil || !ok {
		return expr, ok, err
	}
	if (schema.Nullable || !schema.IsRequired()) && miscCloneIsInstance(schema) {
		return "((" + ve + ") ? " + expr + " : " + ve + ")", true, nil
	}
	return expr, true, nil
}

type cloneBranch struct {
	check string
	value string
}

func (s *cloneState) cloneUnion(ve string, schema *metadata.Schema) (string, bool, error) {
	branches := make([]cloneBranch, 0)
	for range schema.Functions {
		branches = append(branches, cloneBranch{
			check: `"function" === typeof ` + ve,
			value: "undefined",
		})
	}
	for _, ref := range schema.Tuples {
		partial := metadata.NewSchema()
		partial.Tuples = append(partial.Tuples, ref)
		value, ok, err := s.cloneTuple(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, cloneBranch{check: check, value: value})
	}
	for _, ref := range schema.Arrays {
		partial := metadata.NewSchema()
		partial.Arrays = append(partial.Arrays, ref)
		value, ok, err := s.cloneArray(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, cloneBranch{check: check, value: value})
	}
	for _, ref := range schema.Sets {
		partial := metadata.NewSchema()
		partial.Sets = append(partial.Sets, ref)
		value, ok, err := s.cloneSet(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, cloneBranch{check: check, value: value})
	}
	for _, ref := range schema.Maps {
		partial := metadata.NewSchema()
		partial.Maps = append(partial.Maps, ref)
		value, ok, err := s.cloneMap(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, cloneBranch{check: check, value: value})
	}
	for _, native := range schema.Natives {
		branches = append(branches, cloneBranch{
			check: nativeCheckExpr(ve, native.Name),
			value: miscCloneNativeExpression(ve, native.Name),
		})
	}
	for _, ref := range schema.Objects {
		partial := metadata.NewSchema()
		partial.Objects = append(partial.Objects, ref)
		value, ok, err := s.cloneObject(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, cloneBranch{check: check, value: value})
	}
	if len(branches) == 0 {
		return ve, true, nil
	}
	out := ve
	for i := len(branches) - 1; i >= 0; i-- {
		out = "(" + branches[i].check + " ? " + branches[i].value + " : " + out + ")"
	}
	return out, true, nil
}

func miscCloneIsInstance(schema *metadata.Schema) bool {
	return len(schema.Objects) != 0 ||
		len(schema.Arrays) != 0 ||
		len(schema.Tuples) != 0 ||
		len(schema.Sets) != 0 ||
		len(schema.Maps) != 0 ||
		len(schema.Natives) != 0 ||
		(schema.Rest != nil && miscCloneIsInstance(schema.Rest))
}

func (s *cloneState) cloneArray(ve string, ref *metadata.ArrayRef) (string, bool, error) {
	if ref == nil || ref.Type == nil {
		return "", false, nil
	}
	if s.arrays[ref.Type] || ref.Type.Recursive {
		return "", false, nil
	}
	s.arrays[ref.Type] = true
	defer delete(s.arrays, ref.Type)
	elem, ok, err := s.cloneValue("elem", ref.Type.Value)
	if err != nil || !ok {
		return "", ok, err
	}
	return ve + ".map((elem) => " + elem + ")", true, nil
}

func (s *cloneState) cloneTuple(ve string, ref *metadata.TupleRef) (string, bool, error) {
	if ref == nil || ref.Type == nil {
		return "", false, nil
	}
	if s.tuples[ref.Type] || ref.Type.Recursive {
		return "", false, nil
	}
	s.tuples[ref.Type] = true
	defer delete(s.tuples, ref.Type)
	parts := make([]string, 0, len(ref.Type.Elements))
	for i, elem := range ref.Type.Elements {
		if elem == nil {
			parts = append(parts, "undefined")
			continue
		}
		if elem.Rest != nil {
			rest, ok, err := s.cloneValue(ve+".slice("+fmt.Sprint(i)+")", wrapCloneRestSchema(elem.Rest))
			if err != nil || !ok {
				return "", ok, err
			}
			parts = append(parts, "..."+rest)
			continue
		}
		cloned, ok, err := s.cloneValue(ve+"["+fmt.Sprint(i)+"]", elem)
		if err != nil || !ok {
			return "", ok, err
		}
		parts = append(parts, cloned)
	}
	return "([" + strings.Join(parts, ", ") + "])", true, nil
}

func wrapCloneRestSchema(rest *metadata.Schema) *metadata.Schema {
	array := metadata.NewSchema()
	array.Arrays = append(array.Arrays, &metadata.ArrayRef{
		Type: &metadata.ArrayType{Value: rest},
	})
	return array
}

func (s *cloneState) cloneObject(ve string, ref *metadata.ObjectRef) (string, bool, error) {
	if ref == nil || ref.Type == nil {
		return "", false, nil
	}
	obj := ref.Type
	if s.objects[obj] {
		name := s.reserveObjectHelper(obj)
		s.objectNeeds[obj] = true
		return name + "(" + ve + ")", true, nil
	}
	s.objects[obj] = true
	body, ok, err := s.cloneObjectInline(ve, obj)
	delete(s.objects, obj)
	if err != nil || !ok {
		return "", ok, err
	}
	if obj.Recursive || s.objectNeeds[obj] {
		name := s.reserveObjectHelper(obj)
		if !s.objectBuilt[obj] {
			s.objects[obj] = true
			helperBody, ok, err := s.cloneObjectInline("v", obj)
			delete(s.objects, obj)
			if err != nil || !ok {
				return "", ok, err
			}
			s.helpers = append(s.helpers, cloneHelper{name: name, body: helperBody})
			s.objectBuilt[obj] = true
		}
		return name + "(" + ve + ")", true, nil
	}
	return body, true, nil
}

func (s *cloneState) reserveObjectHelper(obj *metadata.ObjectType) string {
	if name, ok := s.objectHelpers[obj]; ok {
		return name
	}
	name := "__clone_obj_" + intString(int64(len(s.objectHelpers)))
	s.objectHelpers[obj] = name
	return name
}

func (s *cloneState) cloneObjectInline(ve string, obj *metadata.ObjectType) (string, bool, error) {
	literalProps, dynamicProps := splitObjectProperties(obj)
	additional := obj.AdditionalProperties
	if len(dynamicProps) != 0 {
		additional = nil
	}
	if len(literalProps) == 0 && len(dynamicProps) == 0 && additional == nil {
		return "{}", true, nil
	}
	entries := make([]string, 0, len(literalProps))
	allowed := make([]string, 0, len(literalProps))
	for _, prop := range literalProps {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		key, ok := prop.Key.GetSoleLiteral()
		if !ok {
			return "", false, nil
		}
		allowed = append(allowed, jsonQuote(key))
		cloned, ok, err := s.cloneValue(accessProperty(ve, key), prop.Value)
		if err != nil || !ok {
			return "", ok, err
		}
		entries = append(entries, randomPropertyKey(key)+": "+cloned)
	}
	literal := "({" + strings.Join(entries, ", ") + "})"
	if len(dynamicProps) == 0 && additional == nil {
		return literal, true, nil
	}
	var b strings.Builder
	b.WriteString(`(() => { const output = `)
	b.WriteString(literal)
	b.WriteString(`; const __regular = new Set([`)
	b.WriteString(strings.Join(allowed, ","))
	b.WriteString(`]); for (const [key, value] of Object.entries(`)
	b.WriteString(ve)
	b.WriteString(`)) { if (__regular.has(key)) continue; `)
	for _, prop := range dynamicProps {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		check, err := dynamicKeyCheck("key", prop.Key)
		if err != nil {
			return "", false, err
		}
		cloned, ok, err := s.cloneValue("value", prop.Value)
		if err != nil || !ok {
			return "", ok, err
		}
		b.WriteString(`if (`)
		b.WriteString(check)
		b.WriteString(`) { output[key] = `)
		b.WriteString(cloned)
		b.WriteString(`; continue; } `)
	}
	if additional != nil {
		cloned, ok, err := s.cloneValue("value", additional)
		if err != nil || !ok {
			return "", ok, err
		}
		b.WriteString(`output[key] = `)
		b.WriteString(cloned)
		b.WriteString(`; `)
	}
	b.WriteString(`} return output; })()`)
	return b.String(), true, nil
}

func (s *cloneState) cloneSet(ve string, ref *metadata.SetRef) (string, bool, error) {
	if ref == nil {
		return "", false, nil
	}
	array := &metadata.ArrayRef{Type: &metadata.ArrayType{Value: ref.Value}}
	cloned, ok, err := s.cloneArray("Array.from("+ve+")", array)
	if err != nil || !ok {
		return "", ok, err
	}
	return "new Set(" + cloned + ")", true, nil
}

func (s *cloneState) cloneMap(ve string, ref *metadata.MapRef) (string, bool, error) {
	if ref == nil {
		return "", false, nil
	}
	tuple := &metadata.TupleRef{Type: &metadata.TupleType{
		Elements: []*metadata.Schema{ref.Key, ref.Value},
	}}
	array := &metadata.ArrayRef{Type: &metadata.ArrayType{
		Value: &metadata.Schema{
			Required: true,
			Tuples:   []*metadata.TupleRef{tuple},
		},
	}}
	cloned, ok, err := s.cloneArray("Array.from("+ve+")", array)
	if err != nil || !ok {
		return "", ok, err
	}
	return "new Map(" + cloned + ")", true, nil
}

// EmitMiscPruneArrowFunction returns an in-place prune that walks a schema
// and deletes properties not declared in the TS type. The current emitter supports
// objects with a fixed property set.
func EmitMiscPruneArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	state := newPruneState()
	body, err := state.pruneValue("input", schema)
	if err != nil {
		return "", err
	}
	if body == "" {
		return "(input) => input", nil
	}
	var b strings.Builder
	b.WriteString("(input) => { ")
	for _, name := range state.order {
		b.WriteString("const ")
		b.WriteString(name)
		b.WriteString(" = ")
		b.WriteString(state.helpers[name])
		b.WriteString("; ")
	}
	b.WriteString(body)
	b.WriteString("; return input; }")
	return b.String(), nil
}

type pruneState struct {
	order         []string
	helpers       map[string]string
	objectHelpers map[*metadata.ObjectType]string
	arrayHelpers  map[*metadata.ArrayType]string
	tupleHelpers  map[*metadata.TupleType]string
	visitingObj   map[*metadata.ObjectType]bool
	visitingArr   map[*metadata.ArrayType]bool
	visitingTup   map[*metadata.TupleType]bool
}

func newPruneState() *pruneState {
	return &pruneState{
		helpers:       map[string]string{},
		objectHelpers: map[*metadata.ObjectType]string{},
		arrayHelpers:  map[*metadata.ArrayType]string{},
		tupleHelpers:  map[*metadata.TupleType]string{},
		visitingObj:   map[*metadata.ObjectType]bool{},
		visitingArr:   map[*metadata.ArrayType]bool{},
		visitingTup:   map[*metadata.TupleType]bool{},
	}
}

func (s *pruneState) reserveHelperName(prefix string) string {
	name := fmt.Sprintf("__prune_%s_%d", prefix, len(s.order))
	s.order = append(s.order, name)
	return name
}

func (s *pruneState) pruneValue(valueExpr string, schema *metadata.Schema) (string, error) {
	if schema == nil || schema.Any {
		return "", nil
	}
	if len(schema.Objects) == 1 && schema.Objects[0] != nil && schema.Objects[0].Type != nil {
		return s.emitObjectPrune(valueExpr, schema.Objects[0])
	}
	if len(schema.Objects) > 1 {
		return s.emitObjectUnionPrune(valueExpr, schema.Objects)
	}
	if len(schema.Arrays) == 1 && schema.Arrays[0] != nil && schema.Arrays[0].Type != nil {
		return s.emitArrayPrune(valueExpr, schema.Arrays[0])
	}
	if len(schema.Tuples) == 1 && schema.Tuples[0] != nil && schema.Tuples[0].Type != nil {
		return s.emitTuplePrune(valueExpr, schema.Tuples[0])
	}
	return "", nil
}

func (s *pruneState) emitObjectPrune(valueExpr string, ref *metadata.ObjectRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", nil
	}
	obj := ref.Type
	name, ok := s.objectHelpers[obj]
	if ok {
		return name + "(" + valueExpr + ")", nil
	}
	name = s.reserveHelperName("obj")
	s.objectHelpers[obj] = name
	if s.visitingObj[obj] {
		return name + "(" + valueExpr + ")", nil
	}
	s.visitingObj[obj] = true
	defer delete(s.visitingObj, obj)

	body, err := s.objectBody(obj)
	if err != nil {
		return "", err
	}
	s.helpers[name] = "(v) => " + body
	return name + "(" + valueExpr + ")", nil
}

func (s *pruneState) emitObjectUnionPrune(valueExpr string, refs []*metadata.ObjectRef) (string, error) {
	ordered := make([]*metadata.ObjectRef, 0, len(refs))
	specialized, remained := objectUnionSpecializers(refs)
	for _, group := range objectUnionSpecializerGroups(specialized) {
		for _, spec := range group {
			if spec.ref != nil && spec.ref.Type != nil {
				ordered = append(ordered, spec.ref)
			}
		}
	}
	ordered = append(ordered, remained...)
	if len(ordered) == 0 {
		return "", nil
	}

	var b strings.Builder
	b.WriteString(`(("object" === typeof `)
	b.WriteString(valueExpr)
	b.WriteString(` && null !== `)
	b.WriteString(valueExpr)
	b.WriteString(` && false === Array.isArray(`)
	b.WriteString(valueExpr)
	b.WriteString(`)) ? (() => { `)
	for _, ref := range ordered {
		if ref == nil || ref.Type == nil {
			continue
		}
		checkState := newIsState(false)
		check, err := checkState.emitObjectCheck(valueExpr, ref)
		if err != nil {
			return "", err
		}
		check = checkState.wrap(check)
		body, err := s.emitObjectPrune(valueExpr, ref)
		if err != nil {
			return "", err
		}
		if body == "" {
			continue
		}
		b.WriteString("if (")
		b.WriteString(check)
		b.WriteString(") { ")
		b.WriteString(body)
		b.WriteString("; return; } ")
	}
	b.WriteString(`})() : undefined)`)
	return b.String(), nil
}

func (s *pruneState) emitArrayPrune(valueExpr string, ref *metadata.ArrayRef) (string, error) {
	if ref == nil || ref.Type == nil || ref.Type.Value == nil {
		return "", nil
	}
	arr := ref.Type
	name, ok := s.arrayHelpers[arr]
	if ok {
		return name + "(" + valueExpr + ")", nil
	}
	name = s.reserveHelperName("arr")
	s.arrayHelpers[arr] = name
	if s.visitingArr[arr] {
		return name + "(" + valueExpr + ")", nil
	}
	s.visitingArr[arr] = true
	defer delete(s.visitingArr, arr)

	itemBody, err := s.pruneValue("__elem", arr.Value)
	if err != nil {
		return "", err
	}
	body := `((Array.isArray(v)) ? (() => { for (const __elem of v) { ` + itemBody + `; } })() : undefined)`
	s.helpers[name] = "(v) => " + body
	return name + "(" + valueExpr + ")", nil
}

func (s *pruneState) emitTuplePrune(valueExpr string, ref *metadata.TupleRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", nil
	}
	tuple := ref.Type
	name, ok := s.tupleHelpers[tuple]
	if ok {
		return name + "(" + valueExpr + ")", nil
	}
	name = s.reserveHelperName("tuple")
	s.tupleHelpers[tuple] = name
	if s.visitingTup[tuple] {
		return name + "(" + valueExpr + ")", nil
	}
	s.visitingTup[tuple] = true
	defer delete(s.visitingTup, tuple)

	var b strings.Builder
	b.WriteString(`((Array.isArray(v)) ? (() => { `)
	restIndex := len(tuple.Elements)
	if tupleHasRest(tuple.Elements) {
		restIndex -= 1
	}
	for i, elem := range tuple.Elements {
		if elem == nil {
			continue
		}
		if elem.Rest != nil {
			restBody, err := s.pruneValue("__rest", elem.Rest)
			if err != nil {
				return "", err
			}
			b.WriteString(`for (let __index = `)
			b.WriteString(intString(int64(restIndex)))
			b.WriteString(`; __index < v.length; ++__index) { const __rest = v[__index]; `)
			b.WriteString(restBody)
			b.WriteString(`; } `)
			break
		}
		body, err := s.pruneValue("v["+intString(int64(i))+"]", elem)
		if err != nil {
			return "", err
		}
		b.WriteString(body)
		b.WriteString(`; `)
	}
	b.WriteString(`})() : undefined)`)
	s.helpers[name] = "(v) => " + b.String()
	return name + "(" + valueExpr + ")", nil
}

func (s *pruneState) objectBody(obj *metadata.ObjectType) (string, error) {
	var b strings.Builder
	b.WriteString(`(("object" === typeof v && null !== v && false === Array.isArray(v)) ? (() => { `)
	literalProps, dynamicProps := splitObjectProperties(obj)
	allowed := make([]string, 0, len(literalProps))
	for _, prop := range literalProps {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		allowed = append(allowed, jsonQuote(name))
		body, err := s.pruneValue(accessProperty("v", name), prop.Value)
		if err != nil {
			return "", err
		}
		if body == "" {
			continue
		}
		b.WriteString(`if (undefined !== `)
		b.WriteString(accessProperty("v", name))
		b.WriteString(`) { `)
		b.WriteString(body)
		b.WriteString(`; } `)
	}
	b.WriteString(`const __allow = new Set([`)
	b.WriteString(strings.Join(allowed, ","))
	b.WriteString(`]); for (const __k of Object.keys(v)) { if (__allow.has(__k)) continue; `)
	for _, prop := range dynamicProps {
		if prop == nil || prop.Key == nil {
			continue
		}
		check, err := dynamicKeyCheck("__k", prop.Key)
		if err != nil {
			return "", err
		}
		b.WriteString(`if (`)
		b.WriteString(check)
		b.WriteString(`) { `)
		if prop.Value != nil {
			body, err := s.pruneValue(`v[__k]`, prop.Value)
			if err != nil {
				return "", err
			}
			if body != "" {
				b.WriteString(body)
				b.WriteString(`; `)
			}
		}
		b.WriteString(`continue; } `)
	}
	b.WriteString(`delete v[__k]; } })() : undefined)`)
	return b.String(), nil
}
