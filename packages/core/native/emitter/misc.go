package emitter

import (
	"errors"
	"fmt"
	"sort"
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
	if !schema.IsConstant() || len(schema.Constants) == 0 {
		return "", fmt.Errorf("%w: misc.literals requires literal unions", ErrUnsupportedSchema)
	}
	values := make([]string, 0)
	for _, c := range schema.Constants {
		if c.Type == metadata.AtomicBigint {
			return "", fmt.Errorf("%w: misc.literals does not support bigint literals", ErrUnsupportedSchema)
		}
		for _, v := range c.Values {
			values = append(values, jsLiteral(c.Type, v.Value))
		}
	}
	sort.Strings(values)
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

// EmitMiscCloneArrowFunction returns a naïve deep-clone that handles the
// shapes the current analyzer supports. Rather than structure the clone
// around MetadataSchema (which gives the fastest typia v12 output), we use
// structured-clone-equivalent semantics via JSON round-trip for primitives /
// arrays / objects. Users requiring protobuf / Map / Set etc. will fall back
// to `typia.misc.clone` typia-v12 in the interim.
func EmitMiscCloneArrowFunction(_ *metadata.Schema) (string, error) {
	return "(input) => JSON.parse(JSON.stringify(input))", nil
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
