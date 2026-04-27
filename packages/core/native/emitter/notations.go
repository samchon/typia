package emitter

import (
	"errors"
	"fmt"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitNotationArrowFunction returns a key-renamer matching
// `typia.notations.<case><T>(input)`. Case is one of "camel", "pascal",
// "snake" and controls how string identifiers are rewritten.
func EmitNotationArrowFunction(schema *metadata.Schema, kind string) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	helper, err := notationHelper(kind)
	if err != nil {
		return "", err
	}
	if notationUsesAnyHelper(schema) {
		return fmt.Sprintf(
			"(input) => %s._notationAny(%s)(input)",
			notationAnyImportAlias,
			notationInternalHelper(kind),
		), nil
	}
	state := newNotationState(kind)
	expr, ok, err := state.notationValue("input", schema)
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
	return fmt.Sprintf(`((__rename) => (input) => { const __walk = (v) => { if (Array.isArray(v)) return v.map(__walk); if (v instanceof Date) return new Date(v.getTime()); if (v instanceof RegExp) return new RegExp(v.source, v.flags); if (v instanceof Set) return new Set(Array.from(v, __walk)); if (v instanceof Map) return new Map(Array.from(v, ([k, val]) => [__walk(k), __walk(val)])); if (v && typeof v === "object") { const out = {}; for (const k of Object.keys(v)) out[__rename(k)] = __walk(v[k]); return out; } return v; }; return __walk(input); })(%s)`, helper), nil
}

func notationUsesAnyHelper(schema *metadata.Schema) bool {
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

func notationInternalHelper(kind string) string {
	switch kind {
	case "camel":
		return notationCamelImportAlias + "._notationCamel"
	case "pascal":
		return notationPascalImportAlias + "._notationPascal"
	case "snake":
		return notationSnakeImportAlias + "._notationSnake"
	}
	return "undefined"
}

type notationState struct {
	kind          string
	objects       map[*metadata.ObjectType]bool
	objectBuilt   map[*metadata.ObjectType]bool
	objectHelpers map[*metadata.ObjectType]string
	objectNeeds   map[*metadata.ObjectType]bool
	arrays        map[*metadata.ArrayType]bool
	tuples        map[*metadata.TupleType]bool
	helpers       []notationHelperDef
}

type notationHelperDef struct {
	name string
	body string
}

func newNotationState(kind string) *notationState {
	return &notationState{
		kind:          kind,
		objects:       map[*metadata.ObjectType]bool{},
		objectBuilt:   map[*metadata.ObjectType]bool{},
		objectHelpers: map[*metadata.ObjectType]string{},
		objectNeeds:   map[*metadata.ObjectType]bool{},
		arrays:        map[*metadata.ArrayType]bool{},
		tuples:        map[*metadata.TupleType]bool{},
	}
}

func (s *notationState) notationValue(ve string, schema *metadata.Schema) (string, bool, error) {
	if schema == nil {
		return "undefined", true, nil
	}
	if notationUsesAnyHelper(schema) {
		return fmt.Sprintf(
			"%s._notationAny(%s)(%s)",
			notationAnyImportAlias,
			notationInternalHelper(s.kind),
			ve,
		), true, nil
	}
	if schema.Size() == 0 {
		return ve, true, nil
	}
	if schema.Size() != 1 {
		return s.notationUnion(ve, schema)
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
		expr, ok = notationNativeExpression(ve, schema.Natives[0].Name), true
	case len(schema.Arrays) == 1:
		expr, ok, err = s.notationArray(ve, schema.Arrays[0])
	case len(schema.Tuples) == 1:
		expr, ok, err = s.notationTuple(ve, schema.Tuples[0])
	case len(schema.Objects) == 1:
		expr, ok, err = s.notationObject(ve, schema.Objects[0])
	case len(schema.Sets) == 1:
		expr, ok, err = s.notationSet(ve, schema.Sets[0])
	case len(schema.Maps) == 1:
		expr, ok, err = s.notationMap(ve, schema.Maps[0])
	case len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil:
		expr, ok, err = s.notationValue(ve, schema.Aliases[0].Type.Value)
	default:
		return "", false, nil
	}
	if err != nil || !ok {
		return expr, ok, err
	}
	if (schema.Nullable || !schema.IsRequired()) && notationIsInstance(schema) {
		return "((" + ve + ") ? " + expr + " : " + ve + ")", true, nil
	}
	return expr, true, nil
}

type notationBranch struct {
	check string
	value string
}

func (s *notationState) notationUnion(ve string, schema *metadata.Schema) (string, bool, error) {
	branches := make([]notationBranch, 0)
	for range schema.Functions {
		branches = append(branches, notationBranch{
			check: `"function" === typeof ` + ve,
			value: "undefined",
		})
	}
	for _, ref := range schema.Tuples {
		partial := metadata.NewSchema()
		partial.Tuples = append(partial.Tuples, ref)
		value, ok, err := s.notationTuple(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, notationBranch{check: check, value: value})
	}
	for _, ref := range schema.Arrays {
		partial := metadata.NewSchema()
		partial.Arrays = append(partial.Arrays, ref)
		value, ok, err := s.notationArray(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, notationBranch{check: check, value: value})
	}
	for _, ref := range schema.Sets {
		partial := metadata.NewSchema()
		partial.Sets = append(partial.Sets, ref)
		value, ok, err := s.notationSet(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, notationBranch{check: check, value: value})
	}
	for _, ref := range schema.Maps {
		partial := metadata.NewSchema()
		partial.Maps = append(partial.Maps, ref)
		value, ok, err := s.notationMap(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, notationBranch{check: check, value: value})
	}
	for _, native := range schema.Natives {
		if native.Name == "WeakSet" || native.Name == "WeakMap" {
			continue
		}
		branches = append(branches, notationBranch{
			check: nativeCheckExpr(ve, native.Name),
			value: notationNativeExpression(ve, native.Name),
		})
	}
	for _, ref := range schema.Objects {
		partial := metadata.NewSchema()
		partial.Objects = append(partial.Objects, ref)
		value, ok, err := s.notationObject(ve, ref)
		if err != nil || !ok {
			return "", ok, err
		}
		check, err := EmitIs(ve, partial)
		if err != nil {
			return "", false, err
		}
		branches = append(branches, notationBranch{check: check, value: value})
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

func notationIsInstance(schema *metadata.Schema) bool {
	return len(schema.Objects) != 0 ||
		len(schema.Arrays) != 0 ||
		len(schema.Tuples) != 0 ||
		len(schema.Sets) != 0 ||
		len(schema.Maps) != 0 ||
		len(schema.Natives) != 0 ||
		(schema.Rest != nil && notationIsInstance(schema.Rest))
}

func notationNativeExpression(input, name string) string {
	switch name {
	case "Boolean", "Number", "String":
		return input + ".valueOf()"
	case "Date":
		return "new Date(" + input + ")"
	default:
		return input
	}
}

func (s *notationState) notationArray(ve string, ref *metadata.ArrayRef) (string, bool, error) {
	if ref == nil || ref.Type == nil {
		return "", false, nil
	}
	if s.arrays[ref.Type] || ref.Type.Recursive {
		return "", false, nil
	}
	s.arrays[ref.Type] = true
	defer delete(s.arrays, ref.Type)
	elem, ok, err := s.notationValue("elem", ref.Type.Value)
	if err != nil || !ok {
		return "", ok, err
	}
	return ve + ".map((elem) => " + elem + ")", true, nil
}

func (s *notationState) notationTuple(ve string, ref *metadata.TupleRef) (string, bool, error) {
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
			rest, ok, err := s.notationValue(ve+".slice("+fmt.Sprint(i)+")", wrapCloneRestSchema(elem.Rest))
			if err != nil || !ok {
				return "", ok, err
			}
			parts = append(parts, "..."+rest)
			continue
		}
		item, ok, err := s.notationValue(ve+"["+fmt.Sprint(i)+"]", elem)
		if err != nil || !ok {
			return "", ok, err
		}
		parts = append(parts, item)
	}
	return "([" + strings.Join(parts, ", ") + "])", true, nil
}

func (s *notationState) notationObject(ve string, ref *metadata.ObjectRef) (string, bool, error) {
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
	body, ok, err := s.notationObjectInline(ve, obj)
	delete(s.objects, obj)
	if err != nil || !ok {
		return "", ok, err
	}
	if obj.Recursive || s.objectNeeds[obj] {
		name := s.reserveObjectHelper(obj)
		if !s.objectBuilt[obj] {
			s.objects[obj] = true
			helperBody, ok, err := s.notationObjectInline("v", obj)
			delete(s.objects, obj)
			if err != nil || !ok {
				return "", ok, err
			}
			s.helpers = append(s.helpers, notationHelperDef{name: name, body: helperBody})
			s.objectBuilt[obj] = true
		}
		return name + "(" + ve + ")", true, nil
	}
	return body, true, nil
}

func (s *notationState) reserveObjectHelper(obj *metadata.ObjectType) string {
	if name, ok := s.objectHelpers[obj]; ok {
		return name
	}
	name := "__notation_obj_" + intString(int64(len(s.objectHelpers)))
	s.objectHelpers[obj] = name
	return name
}

func (s *notationState) notationObjectInline(ve string, obj *metadata.ObjectType) (string, bool, error) {
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
		value, ok, err := s.notationValue(accessProperty(ve, key), prop.Value)
		if err != nil || !ok {
			return "", ok, err
		}
		entries = append(entries, randomPropertyKey(renameNotationKey(s.kind, key))+": "+value)
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
		value, ok, err := s.notationValue("value", prop.Value)
		if err != nil || !ok {
			return "", ok, err
		}
		b.WriteString(`if (`)
		b.WriteString(check)
		b.WriteString(`) { output[key] = `)
		b.WriteString(value)
		b.WriteString(`; continue; } `)
	}
	if additional != nil {
		value, ok, err := s.notationValue("value", additional)
		if err != nil || !ok {
			return "", ok, err
		}
		b.WriteString(`output[key] = `)
		b.WriteString(value)
		b.WriteString(`; `)
	}
	b.WriteString(`} return output; })()`)
	return b.String(), true, nil
}

func (s *notationState) notationSet(ve string, ref *metadata.SetRef) (string, bool, error) {
	if ref == nil {
		return "", false, nil
	}
	array := &metadata.ArrayRef{Type: &metadata.ArrayType{Value: ref.Value}}
	values, ok, err := s.notationArray("Array.from("+ve+")", array)
	if err != nil || !ok {
		return "", ok, err
	}
	return "new Set(" + values + ")", true, nil
}

func (s *notationState) notationMap(ve string, ref *metadata.MapRef) (string, bool, error) {
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
	entries, ok, err := s.notationArray("Array.from("+ve+")", array)
	if err != nil || !ok {
		return "", ok, err
	}
	return "new Map(" + entries + ")", true, nil
}

func renameNotationKey(kind, key string) string {
	switch kind {
	case "camel":
		return notationCamelName(key)
	case "pascal":
		return notationPascalName(key)
	case "snake":
		return notationSnakeName(key)
	default:
		return key
	}
}

func notationCamelName(key string) string {
	return notationUnsnakeName(key, func(str string) string {
		if str == "" {
			return str
		}
		if str == strings.ToUpper(str) {
			return strings.ToLower(str)
		}
		return strings.ToLower(str[:1]) + str[1:]
	}, func(str string, index int) string {
		if index == 0 {
			return strings.ToLower(str)
		}
		return notationCapitalizeName(strings.ToLower(str))
	})
}

func notationPascalName(key string) string {
	return notationUnsnakeName(key, func(str string) string {
		if str == "" {
			return str
		}
		return strings.ToUpper(str[:1]) + str[1:]
	}, func(str string, _ int) string {
		return notationCapitalizeName(str)
	})
}

func notationUnsnakeName(key string, plain func(string) string, snake func(string, int) string) string {
	prefixLen := 0
	for prefixLen < len(key) && key[prefixLen] == '_' {
		prefixLen++
	}
	prefix := key[:prefixLen]
	str := key[prefixLen:]
	out := func(value string) string { return prefix + value }
	if str == "" {
		return out("")
	}
	raw := strings.Split(str, "_")
	items := make([]string, 0, len(raw))
	for _, item := range raw {
		if item != "" {
			items = append(items, item)
		}
	}
	if len(items) == 0 {
		return out("")
	}
	if len(items) == 1 {
		return out(plain(items[0]))
	}
	var b strings.Builder
	for i, item := range items {
		b.WriteString(snake(item, i))
	}
	return out(b.String())
}

func notationCapitalizeName(str string) string {
	if str == "" {
		return str
	}
	return strings.ToUpper(str[:1]) + strings.ToLower(str[1:])
}

func notationSnakeName(key string) string {
	if key == "" {
		return key
	}
	prefixLen := 0
	for prefixLen < len(key) && key[prefixLen] == '_' {
		prefixLen++
	}
	prefix := key[:prefixLen]
	str := key[prefixLen:]
	out := func(value string) string { return prefix + value }
	items := strings.Split(str, "_")
	if len(items) > 1 {
		for i, item := range items {
			items[i] = strings.ToLower(item)
		}
		return out(strings.Join(items, "_"))
	}
	indexes := make([]int, 0)
	for i := 0; i < len(str); i++ {
		if 'A' <= str[i] && str[i] <= 'Z' {
			indexes = append(indexes, i)
		}
	}
	for i := len(indexes) - 1; i > 0; i-- {
		if indexes[i]-indexes[i-1] == 1 {
			indexes = append(indexes[:i], indexes[i+1:]...)
		}
	}
	if len(indexes) != 0 && indexes[0] == 0 {
		indexes = indexes[1:]
	}
	if len(indexes) == 0 {
		return strings.ToLower(str)
	}
	var b strings.Builder
	for i, index := range indexes {
		first := 0
		if i != 0 {
			first = indexes[i-1]
		}
		b.WriteString(strings.ToLower(str[first:index]))
		b.WriteString("_")
	}
	b.WriteString(strings.ToLower(str[indexes[len(indexes)-1]:]))
	return out(b.String())
}

// notationHelper returns the inline JS function that performs the per-key
// rename. Kept tiny so the emitted .js doesn't explode in size — the logic
// mirrors typia v12's `NamingConvention.camel/pascal/snake`.
func notationHelper(kind string) (string, error) {
	switch kind {
	case "camel":
		return `((s) => s.replace(/[_\-\s]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toLowerCase()))`, nil
	case "pascal":
		return `((s) => { const camel = s.replace(/[_\-\s]+(.)/g, (_, c) => c.toUpperCase()); return camel.charAt(0).toUpperCase() + camel.slice(1); })`, nil
	case "snake":
		return `((s) => { if (s.length === 0) return s; let prefix = ""; for (let i = 0; i < s.length; i++) { if (s[i] === "_") prefix += "_"; else break; } if (prefix.length) s = s.substring(prefix.length); const out = (v) => prefix + v; const items = s.split("_"); if (items.length > 1) return out(items.map((x) => x.toLowerCase()).join("_")); const indexes = []; for (let i = 0; i < s.length; i++) { const code = s.charCodeAt(i); if (65 <= code && code <= 90) indexes.push(i); } for (let i = indexes.length - 1; i > 0; --i) { const now = indexes[i], prev = indexes[i - 1]; if (now - prev === 1) indexes.splice(i, 1); } if (indexes.length && indexes[0] === 0) indexes.splice(0, 1); if (indexes.length === 0) return s.toLowerCase(); let ret = ""; for (let i = 0; i < indexes.length; i++) { const first = i === 0 ? 0 : indexes[i - 1]; const last = indexes[i]; ret += s.substring(first, last).toLowerCase(); ret += "_"; } ret += s.substring(indexes[indexes.length - 1]).toLowerCase(); return out(ret); })`, nil
	}
	return "", errors.New("notationHelper: unknown kind " + kind)
}
