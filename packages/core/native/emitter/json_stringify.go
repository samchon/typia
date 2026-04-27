package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitJsonStringifyArrowFunction returns `(input) => <json-string-expr>` — the
// Go port of typia v12's `JsonStringifyProgrammer` for the shape subset this
// phase covers (primitives, objects with required/optional properties,
// arrays, literals, unions of objects).
//
// The emit strategy matches typia v12: constant bits of the JSON (braces,
// keys, commas) are baked into a template literal, only the runtime value
// slots invoke `JSON.stringify`. That's where the "10×–200× faster than
// JSON.stringify" numbers come from — less dynamic traversal, more inlined
// string concatenation.
func EmitJsonStringifyArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if unsupported, ok := findUnsupportedJSONStringifyShape(schema); ok {
		return "", fmt.Errorf("%w: json stringify does not support %s", ErrUnsupportedSchema, unsupported)
	}
	state := newJSONStringifyState(schema)
	expr, err := buildJsonStringify("input", schema, state)
	if err != nil {
		return "", err
	}
	helpers, err := state.localHelpers()
	if err != nil {
		return "", err
	}
	if helpers != "" {
		return "(input) => { " + helpers + "return " + expr + "; }", nil
	}
	return "(input) => " + expr, nil
}

type jsonStringifyState struct {
	arrayTypes        map[*metadata.ArrayType]int
	tupleTypes        map[*metadata.TupleType]int
	objects           map[*metadata.ObjectType]int
	objectHelpers     map[*metadata.ObjectType]string
	arrayHelpers      map[*metadata.ArrayType]string
	tupleHelpers      map[*metadata.TupleType]string
	generatingObjects map[*metadata.ObjectType]bool
	generatingArrays  map[*metadata.ArrayType]bool
	generatingTuples  map[*metadata.TupleType]bool
}

func newJSONStringifyState(schema *metadata.Schema) *jsonStringifyState {
	objects, arrays, tuples := collectJsonStringifyHelpers(schema)
	return &jsonStringifyState{
		arrayTypes:        map[*metadata.ArrayType]int{},
		tupleTypes:        map[*metadata.TupleType]int{},
		objects:           map[*metadata.ObjectType]int{},
		objectHelpers:     objects,
		arrayHelpers:      arrays,
		tupleHelpers:      tuples,
		generatingObjects: map[*metadata.ObjectType]bool{},
		generatingArrays:  map[*metadata.ArrayType]bool{},
		generatingTuples:  map[*metadata.TupleType]bool{},
	}
}

func collectJsonStringifyHelpers(root *metadata.Schema) (map[*metadata.ObjectType]string, map[*metadata.ArrayType]string, map[*metadata.TupleType]string) {
	objectHelpers := map[*metadata.ObjectType]string{}
	arrayHelpers := map[*metadata.ArrayType]string{}
	tupleHelpers := map[*metadata.TupleType]string{}
	seenSchemas := map[*metadata.Schema]bool{}
	seenObjects := map[*metadata.ObjectType]bool{}
	seenArrays := map[*metadata.ArrayType]bool{}
	seenTuples := map[*metadata.TupleType]bool{}
	walkingObjects := map[*metadata.ObjectType]bool{}
	walkingArrays := map[*metadata.ArrayType]bool{}
	walkingTuples := map[*metadata.TupleType]bool{}
	var walk func(*metadata.Schema)
	walk = func(schema *metadata.Schema) {
		if schema == nil || seenSchemas[schema] {
			return
		}
		seenSchemas[schema] = true
		if schema.Escaped != nil {
			walk(schema.Escaped.Returns)
		}
		if schema.Rest != nil {
			walk(schema.Rest)
		}
		for _, ref := range schema.Arrays {
			if ref != nil && ref.Type != nil {
				array := ref.Type
				if array.Recursive || walkingArrays[array] {
					if _, ok := arrayHelpers[array]; !ok {
						arrayHelpers[array] = fmt.Sprintf("_sa%d", len(arrayHelpers))
					}
				}
				if walkingArrays[array] {
					continue
				}
				if seenArrays[array] {
					continue
				}
				seenArrays[array] = true
				walkingArrays[array] = true
				walk(ref.Type.Value)
				delete(walkingArrays, array)
			}
		}
		for _, ref := range schema.Tuples {
			if ref != nil && ref.Type != nil {
				tuple := ref.Type
				if tuple.Recursive || walkingTuples[tuple] {
					if _, ok := tupleHelpers[tuple]; !ok {
						tupleHelpers[tuple] = fmt.Sprintf("_st%d", len(tupleHelpers))
					}
				}
				if walkingTuples[tuple] {
					continue
				}
				if seenTuples[tuple] {
					continue
				}
				seenTuples[tuple] = true
				walkingTuples[tuple] = true
				for _, elem := range ref.Type.Elements {
					walk(elem)
				}
				delete(walkingTuples, tuple)
			}
		}
		for _, ref := range schema.Objects {
			if ref == nil || ref.Type == nil {
				continue
			}
			obj := ref.Type
			if obj.Recursive || walkingObjects[obj] {
				if _, ok := objectHelpers[obj]; !ok {
					objectHelpers[obj] = fmt.Sprintf("_so%d", len(objectHelpers))
				}
			}
			if walkingObjects[obj] {
				continue
			}
			if seenObjects[obj] {
				continue
			}
			seenObjects[obj] = true
			walkingObjects[obj] = true
			for _, prop := range obj.Properties {
				if prop != nil {
					walk(prop.Key)
					walk(prop.Value)
				}
			}
			for _, prop := range obj.DynamicProperties {
				if prop != nil {
					walk(prop.Key)
					walk(prop.Value)
				}
			}
			walk(obj.AdditionalProperties)
			delete(walkingObjects, obj)
		}
		for _, ref := range schema.Aliases {
			if ref != nil && ref.Type != nil {
				walk(ref.Type.Value)
			}
		}
		for _, ref := range schema.Sets {
			if ref != nil {
				walk(ref.Value)
			}
		}
		for _, ref := range schema.Maps {
			if ref != nil {
				walk(ref.Key)
				walk(ref.Value)
			}
		}
	}
	walk(root)
	return objectHelpers, arrayHelpers, tupleHelpers
}

func (state *jsonStringifyState) localHelpers() (string, error) {
	if state == nil || (len(state.objectHelpers) == 0 && len(state.arrayHelpers) == 0 && len(state.tupleHelpers) == 0) {
		return "", nil
	}
	type entry struct {
		object *metadata.ObjectType
		name   string
	}
	entries := make([]entry, 0, len(state.objectHelpers))
	for obj, name := range state.objectHelpers {
		entries = append(entries, entry{object: obj, name: name})
	}
	sort.Slice(entries, func(i, j int) bool {
		return entries[i].name < entries[j].name
	})
	var b strings.Builder
	arrayEntries := make([]struct {
		array *metadata.ArrayType
		name  string
	}, 0, len(state.arrayHelpers))
	for array, name := range state.arrayHelpers {
		arrayEntries = append(arrayEntries, struct {
			array *metadata.ArrayType
			name  string
		}{array: array, name: name})
	}
	sort.Slice(arrayEntries, func(i, j int) bool {
		return arrayEntries[i].name < arrayEntries[j].name
	})
	for _, item := range arrayEntries {
		state.generatingArrays[item.array] = true
		body, err := arrayStringify("input", &metadata.ArrayRef{Type: item.array}, state)
		delete(state.generatingArrays, item.array)
		if err != nil {
			return "", err
		}
		b.WriteString("const ")
		b.WriteString(item.name)
		b.WriteString(" = (input) => ")
		b.WriteString(body)
		b.WriteString("; ")
	}
	tupleEntries := make([]struct {
		tuple *metadata.TupleType
		name  string
	}, 0, len(state.tupleHelpers))
	for tuple, name := range state.tupleHelpers {
		tupleEntries = append(tupleEntries, struct {
			tuple *metadata.TupleType
			name  string
		}{tuple: tuple, name: name})
	}
	sort.Slice(tupleEntries, func(i, j int) bool {
		return tupleEntries[i].name < tupleEntries[j].name
	})
	for _, item := range tupleEntries {
		state.generatingTuples[item.tuple] = true
		body, err := tupleStringify("input", &metadata.TupleRef{Type: item.tuple}, state)
		delete(state.generatingTuples, item.tuple)
		if err != nil {
			return "", err
		}
		b.WriteString("const ")
		b.WriteString(item.name)
		b.WriteString(" = (input) => ")
		b.WriteString(body)
		b.WriteString("; ")
	}
	for _, item := range entries {
		state.generatingObjects[item.object] = true
		body, err := objectStringify("input", &metadata.ObjectRef{Type: item.object}, state)
		delete(state.generatingObjects, item.object)
		if err != nil {
			return "", err
		}
		b.WriteString("const ")
		b.WriteString(item.name)
		b.WriteString(" = (input) => ")
		b.WriteString(body)
		b.WriteString("; ")
	}
	return b.String(), nil
}

func findUnsupportedJSONStringifyShape(schema *metadata.Schema) (string, bool) {
	return findUnsupportedJSONShape(schema)
}

// buildJsonStringify returns a JS expression whose runtime value is the JSON
// representation of the value held in `ve`. Unsupported shapes bubble up an
// ErrUnsupportedSchema so the caller can skip rather than emit nonsense.
func buildJsonStringify(ve string, s *metadata.Schema, state *jsonStringifyState) (string, error) {
	if (s.Nullable || !s.IsRequired()) && s.Size() != 0 {
		core := *s
		core.Nullable = false
		core.Required = true
		core.Optional = false
		inner, err := buildJsonStringify(ve, &core, state)
		if err != nil {
			return "", err
		}
		if s.Nullable {
			inner = fmt.Sprintf("((null !== %s) ? (%s) : \"null\")", ve, inner)
		}
		if !s.IsRequired() {
			return fmt.Sprintf("((undefined !== %s) ? (%s) : undefined)", ve, inner), nil
		}
		return inner, nil
	}

	// `any` defers to the runtime — preserves typia v12's behavior of
	// letting JSON.stringify do the heavy lifting for unknown shapes.
	if s.Any {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	if s.Escaped != nil {
		if s.Escaped.Returns != nil {
			return buildJsonStringify(fmt.Sprintf("%s.toJSON()", ve), s.Escaped.Returns, state)
		}
		return fmt.Sprintf("JSON.stringify(%s.toJSON())", ve), nil
	}

	// Sole atomic — hot path for scalar values.
	if kind, ok := s.IsSoleAtomic(); ok && !s.Nullable && s.IsRequired() {
		return atomicStringify(ve, kind), nil
	}

	// Sole object — most common non-scalar case.
	if s.Size() == 1 && len(s.Objects) == 1 && !s.Nullable && s.IsRequired() {
		return objectStringify(ve, s.Objects[0], state)
	}

	// Sole tuple — fixed prefix plus optional rest-array tail.
	if s.Size() == 1 && len(s.Tuples) == 1 && !s.Nullable && s.IsRequired() {
		return tupleStringify(ve, s.Tuples[0], state)
	}

	// Sole array — delegates element stringify to a nested call.
	if s.Size() == 1 && len(s.Arrays) == 1 && !s.Nullable && s.IsRequired() {
		return arrayStringify(ve, s.Arrays[0], state)
	}

	// Built-in object-like containers stringify as `{}` in typia's legacy
	// generator, except atomic-like boxed primitives.
	if s.Size() == 1 && len(s.Sets) == 1 && !s.Nullable && s.IsRequired() {
		return `"{}"`, nil
	}
	if s.Size() == 1 && len(s.Maps) == 1 && !s.Nullable && s.IsRequired() {
		return `"{}"`, nil
	}
	if s.Size() == 1 && len(s.Natives) == 1 && !s.Nullable && s.IsRequired() {
		return nativeStringify(ve, s.Natives[0].Name), nil
	}

	// Sole literal constant — emit the literal JSON directly.
	if s.IsConstant() && s.Size() == 1 {
		for _, c := range s.Constants {
			if len(c.Values) == 1 {
				return constantStringify(ve, c.Type, c.Values[0].Value), nil
			}
		}
	}

	if expr, ok := atomicUnionStringify(ve, s); ok {
		return expr, nil
	}

	// Fallback for union / nullable / optional / complex combinations: lean
	// on JSON.stringify so behavior stays correct even when the fast path
	// can't apply.
	return fmt.Sprintf("JSON.stringify(%s)", ve), nil
}

// atomicStringify hand-rolls the fastest serializer per primitive. typia v12
// uses the same decisions (numbers via string coercion, bool via ternary,
// string via JSON.stringify because of escaping).
func atomicStringify(ve string, kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicString:
		return fmt.Sprintf("%s._jsonStringifyString(%s)", jsonStringifyStringAlias, ve)
	case metadata.AtomicNumber:
		return fmt.Sprintf("String(%s._jsonStringifyNumber(%s))", jsonStringifyNumberAlias, ve)
	case metadata.AtomicBoolean:
		return fmt.Sprintf("String(%s)", ve)
	case metadata.AtomicBigint:
		return fmt.Sprintf("String(%s)", ve)
	}
	return fmt.Sprintf("JSON.stringify(%s)", ve)
}

func nativeStringify(ve string, name string) string {
	switch strings.ToLower(name) {
	case "date":
		return fmt.Sprintf("%s._jsonStringifyString(%s.toJSON())", jsonStringifyStringAlias, ve)
	case "string":
		return atomicStringify(ve, metadata.AtomicString)
	case "number":
		return atomicStringify(ve, metadata.AtomicNumber)
	case "boolean":
		return atomicStringify(ve, metadata.AtomicBoolean)
	}
	return `"{}"`
}

func atomicUnionStringify(ve string, s *metadata.Schema) (string, bool) {
	if s == nil || !s.IsRequired() || s.Nullable || s.Any || s.Size() != len(s.Atomics) || len(s.Atomics) < 2 {
		return "", false
	}
	var b strings.Builder
	b.WriteString(`(() => { `)
	for _, atom := range s.Atomics {
		switch atom.Type {
		case metadata.AtomicString:
			b.WriteString(`if ("string" === typeof `)
			b.WriteString(ve)
			b.WriteString(`) return `)
			b.WriteString(atomicStringify(ve, metadata.AtomicString))
			b.WriteString(`; `)
		case metadata.AtomicNumber:
			b.WriteString(`if ("number" === typeof `)
			b.WriteString(ve)
			b.WriteString(`) return `)
			b.WriteString(atomicStringify(ve, metadata.AtomicNumber))
			b.WriteString(`; `)
		case metadata.AtomicBoolean:
			b.WriteString(`if ("boolean" === typeof `)
			b.WriteString(ve)
			b.WriteString(`) return `)
			b.WriteString(atomicStringify(ve, metadata.AtomicBoolean))
			b.WriteString(`; `)
		default:
			return "", false
		}
	}
	b.WriteString(`return JSON.stringify(`)
	b.WriteString(ve)
	b.WriteString(`); })()`)
	return b.String(), true
}

func constantStringify(ve string, kind metadata.AtomicKind, value any) string {
	if kind == metadata.AtomicString {
		literal, _ := value.(string)
		if !stringRequiresJSONEscape(literal) {
			return fmt.Sprintf(`("\"" + %s + "\"")`, ve)
		}
	}
	return atomicStringify(ve, kind)
}

func stringRequiresJSONEscape(value string) bool {
	return strings.ContainsAny(value, "\"\\\b\f\n\r\t")
}

// objectStringify renders `{"k1":<v1>,"k2":<v2>}`. Known-required properties
// are baked into the template; optional properties emit a ternary that either
// contributes `,"k":<v>` or `""`.
func objectStringify(ve string, ref *metadata.ObjectRef, state *jsonStringifyState) (string, error) {
	obj := ref.Type
	if obj == nil {
		return "", fmt.Errorf("%w: nil object", ErrUnsupportedSchema)
	}
	if state.objects[obj] > 0 {
		if name, ok := state.objectHelpers[obj]; ok {
			return fmt.Sprintf("%s(%s)", name, ve), nil
		}
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	if name, ok := state.objectHelpers[obj]; ok && !state.generatingObjects[obj] {
		return fmt.Sprintf("%s(%s)", name, ve), nil
	}
	state.objects[obj] += 1
	defer func() {
		state.objects[obj] -= 1
		if state.objects[obj] == 0 {
			delete(state.objects, obj)
		}
	}()
	literalProps := make([]*metadata.Property, 0, len(obj.Properties))
	dynamicProps := make([]*metadata.Property, 0, len(obj.DynamicProperties))
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil {
			continue
		}
		if _, ok := prop.Key.GetSoleLiteral(); ok {
			literalProps = append(literalProps, prop)
		} else {
			dynamicProps = append(dynamicProps, prop)
		}
	}
	dynamicProps = append(dynamicProps, obj.DynamicProperties...)
	regular := make([]*metadata.Property, 0, len(literalProps))
	for _, p := range literalProps {
		if _, ok := p.Key.GetSoleLiteral(); !ok {
			return "", fmt.Errorf("%w: json stringify does not support dynamic object keys", ErrUnsupportedSchema)
		}
		if shouldSkipJSONStringifyObjectEntry(p.Value) {
			continue
		}
		regular = append(regular, p)
	}
	sort.SliceStable(regular, func(i, j int) bool {
		return jsonStringifyObjectEntrySequence(regular[i].Value) < jsonStringifyObjectEntrySequence(regular[j].Value)
	})

	if len(dynamicProps) != 0 {
		regularExpr, err := buildJsonRegularObjectEntries(ve, regular, true, state)
		if err != nil {
			return "", err
		}
		dynamicExpr, err := buildJsonDynamicObjectEntries(ve, regular, dynamicProps, state)
		if err != nil {
			return "", err
		}
		if len(regular) == 0 {
			return `"{" + ` + dynamicExpr + ` + "}"`, nil
		}
		combined := regularExpr + `+` + dynamicExpr
		return `"{" + ` + jsonStringifyTailAlias + `._jsonStringifyTail(` + combined + `) + "}"`, nil
	}

	if obj.AdditionalProperties != nil {
		extraValue, err := buildJsonStringify("__value", obj.AdditionalProperties, state)
		if err != nil {
			return "", err
		}
		var b strings.Builder
		b.WriteString(`(() => { const __parts = []; const __allow = new Set([`)
		firstAllow := true
		for _, p := range regular {
			key, _ := p.Key.GetSoleLiteral()
			if !firstAllow {
				b.WriteString(",")
			}
			firstAllow = false
			b.WriteString(jsonQuote(key))
		}
		b.WriteString(`]); `)
		for _, p := range regular {
			key, _ := p.Key.GetSoleLiteral()
			propExpr := accessProperty(ve, key)
			inner, err := buildJsonObjectPropertyStringify(propExpr, p.Value, state)
			if err != nil {
				return "", err
			}
			if jsonStringifyObjectEntryCanOmit(p.Value) {
				b.WriteString(`if ((`)
				b.WriteString(propExpr)
				b.WriteString(`) !== undefined`)
				if len(p.Value.Functions) != 0 || p.Value.Any {
					b.WriteString(` && "function" !== typeof `)
					b.WriteString(propExpr)
				}
				b.WriteString(`) `)
			}
			b.WriteString(`__parts.push(`)
			b.WriteString(jsonQuote(jsonQuote(key) + `:`))
			b.WriteString(`+(`)
			b.WriteString(inner)
			b.WriteString(`)); `)
		}
		b.WriteString(`for (const __key of Object.keys(`)
		b.WriteString(ve)
		b.WriteString(`)) { if (__allow.has(__key)) continue; const __value = `)
		b.WriteString(ve)
		b.WriteString(`[__key]; if (__value === undefined) continue; __parts.push(JSON.stringify(__key)+":" + (`)
		b.WriteString(extraValue)
		b.WriteString(`)); } return "{" + __parts.join(",") + "}"; })()`)
		return b.String(), nil
	}
	if len(regular) == 0 {
		return `"{}"`, nil
	}
	if jsonStringifyObjectNeedsTail(regular, false) {
		expr, err := buildJsonRegularObjectEntries(ve, regular, false, state)
		if err != nil {
			return "", err
		}
		return `"{" + ` + jsonStringifyTailAlias + `._jsonStringifyTail(` + expr + `) + "}"`, nil
	}

	expr, err := buildJsonRegularObjectEntries(ve, regular, false, state)
	if err != nil {
		return "", err
	}
	return `"{" + ` + expr + ` + "}"`, nil
}

func buildJsonDynamicObjectEntries(ve string, regular []*metadata.Property, dynamic []*metadata.Property, state *jsonStringifyState) (string, error) {
	var b strings.Builder
	b.WriteString(`Object.entries(`)
	b.WriteString(ve)
	b.WriteString(`).map(([key, value]) => { if (undefined === value) return ""; `)
	if len(regular) != 0 {
		b.WriteString(`if ([`)
		for i, prop := range regular {
			if i != 0 {
				b.WriteString(",")
			}
			key, _ := prop.Key.GetSoleLiteral()
			b.WriteString(jsonQuote(key))
		}
		b.WriteString(`].some((regular) => regular === key)) return ""; `)
	}
	for _, prop := range dynamic {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		check, err := dynamicKeyCheck("key", prop.Key)
		if err != nil {
			return "", err
		}
		value, err := buildJsonObjectPropertyStringify("value", prop.Value, state)
		if err != nil {
			return "", err
		}
		b.WriteString(`if (`)
		b.WriteString(check)
		b.WriteString(`) return JSON.stringify(key) + ":" + (`)
		b.WriteString(value)
		b.WriteString(`); `)
	}
	b.WriteString(`return ""; }).filter((str) => "" !== str).join(",")`)
	return b.String(), nil
}

func buildJsonRegularObjectEntries(ve string, entries []*metadata.Property, hasDynamic bool, state *jsonStringifyState) (string, error) {
	parts := make([]string, 0, len(entries))
	for i, p := range entries {
		key, _ := p.Key.GetSoleLiteral()
		propExpr := accessProperty(ve, key)
		inner, err := buildJsonObjectPropertyStringify(propExpr, p.Value, state)
		if err != nil {
			return "", err
		}
		base := jsonQuote(jsonQuote(key)+":") + `+(` + inner + `)`
		if i != len(entries)-1 || hasDynamic {
			base += `+","`
		}
		if jsonStringifyObjectEntryCanOmit(p.Value) {
			var condition strings.Builder
			condition.WriteString(`undefined === `)
			condition.WriteString(propExpr)
			if len(p.Value.Functions) != 0 || p.Value.Any {
				condition.WriteString(` || "function" === typeof `)
				condition.WriteString(propExpr)
			}
			parts = append(parts, `((`+condition.String()+`) ? "" : (`+base+`))`)
		} else {
			parts = append(parts, base)
		}
	}
	if len(parts) == 0 {
		return `""`, nil
	}
	return strings.Join(parts, "+"), nil
}

func jsonStringifyObjectEntrySequence(s *metadata.Schema) int {
	if s == nil || s.Any || !s.IsRequired() || len(s.Functions) != 0 {
		return 0
	}
	return 1
}

func shouldSkipJSONStringifyObjectEntry(s *metadata.Schema) bool {
	if s == nil {
		return false
	}
	return (!s.IsRequired() && !s.Nullable && s.Size() == 0) ||
		(len(s.Functions) != 0 && !s.Nullable && s.Size() == 1)
}

func jsonStringifyObjectEntryCanOmit(s *metadata.Schema) bool {
	return s != nil && (!s.IsRequired() || len(s.Functions) != 0 || s.Any)
}

func jsonStringifyObjectNeedsTail(entries []*metadata.Property, hasDynamic bool) bool {
	if len(entries) == 0 {
		return false
	}
	if hasDynamic {
		return true
	}
	return jsonStringifyObjectEntrySequence(entries[len(entries)-1].Value) == 0
}

func buildJsonObjectPropertyStringify(ve string, s *metadata.Schema, state *jsonStringifyState) (string, error) {
	if s == nil {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	core := *s
	core.Required = true
	core.Optional = false
	core.Nullable = false
	inner, err := buildJsonStringify(ve, &core, state)
	if err != nil {
		return "", err
	}
	if s.Nullable {
		return fmt.Sprintf("((null !== %s) ? (%s) : \"null\")", ve, inner), nil
	}
	return inner, nil
}

// arrayStringify renders `[<v1>,<v2>,...]`.
func arrayStringify(ve string, ref *metadata.ArrayRef, state *jsonStringifyState) (string, error) {
	if ref.Type == nil || ref.Type.Value == nil {
		return "", fmt.Errorf("%w: nil array", ErrUnsupportedSchema)
	}
	array := ref.Type
	if state.arrayTypes[array] > 0 {
		if name, ok := state.arrayHelpers[array]; ok {
			return fmt.Sprintf("%s(%s)", name, ve), nil
		}
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	if name, ok := state.arrayHelpers[array]; ok && !state.generatingArrays[array] {
		return fmt.Sprintf("%s(%s)", name, ve), nil
	}
	state.arrayTypes[array] += 1
	defer func() {
		state.arrayTypes[array] -= 1
		if state.arrayTypes[array] == 0 {
			delete(state.arrayTypes, array)
		}
	}()
	inner, err := buildJsonArrayElementStringify("elem", ref.Type.Value, state)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`("[" + %s.map((elem) => %s).join(",") + "]")`, ve, inner), nil
}

func buildJsonArrayElementStringify(ve string, s *metadata.Schema, state *jsonStringifyState) (string, error) {
	if s == nil {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	core := *s
	core.Required = true
	core.Optional = false
	core.Nullable = false
	inner, err := buildJsonStringify(ve, &core, state)
	if err != nil {
		return "", err
	}

	conditions := []string{}
	if !s.IsRequired() || s.Any {
		conditions = append(conditions, "undefined === "+ve)
	}
	if s.Nullable {
		conditions = append(conditions, "null === "+ve)
	}
	if len(s.Functions) != 0 || s.Any {
		conditions = append(conditions, `"function" === typeof `+ve)
	}
	if len(conditions) == 0 {
		return inner, nil
	}
	return fmt.Sprintf("((%s) ? \"null\" : (%s))", strings.Join(conditions, " || "), inner), nil
}

func tupleStringify(ve string, ref *metadata.TupleRef, state *jsonStringifyState) (string, error) {
	if ref == nil || ref.Type == nil {
		return "", fmt.Errorf("%w: nil tuple", ErrUnsupportedSchema)
	}
	tuple := ref.Type
	if state.tupleTypes[tuple] > 0 {
		if name, ok := state.tupleHelpers[tuple]; ok {
			return fmt.Sprintf("%s(%s)", name, ve), nil
		}
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	if name, ok := state.tupleHelpers[tuple]; ok && !state.generatingTuples[tuple] {
		return fmt.Sprintf("%s(%s)", name, ve), nil
	}
	state.tupleTypes[tuple] += 1
	defer func() {
		state.tupleTypes[tuple] -= 1
		if state.tupleTypes[tuple] == 0 {
			delete(state.tupleTypes, tuple)
		}
	}()
	if len(tuple.Elements) == 0 {
		return `"[]"`, nil
	}
	parts := []string{`"["`}
	for i, elem := range tuple.Elements {
		if elem == nil {
			continue
		}
		if elem.Rest != nil {
			restExpr, err := tupleRestStringify(ve, i, elem.Rest, state)
			if err != nil {
				return "", err
			}
			parts = append(parts, restExpr)
			continue
		}
		inner, err := buildJsonArrayElementStringify(fmt.Sprintf("%s[%d]", ve, i), elem, state)
		if err != nil {
			return "", err
		}
		parts = append(parts, "("+inner+")")
		if tupleHasFollowingFixedElement(tuple.Elements, i) {
			parts = append(parts, `","`)
		}
	}
	parts = append(parts, `"]"`)
	return "(" + strings.Join(parts, " + ") + ")", nil
}

func tupleHasFollowingFixedElement(elements []*metadata.Schema, index int) bool {
	for i := index + 1; i < len(elements); i++ {
		if elements[i] != nil && elements[i].Rest == nil {
			return true
		}
	}
	return false
}

func tupleRestStringify(ve string, start int, rest *metadata.Schema, state *jsonStringifyState) (string, error) {
	array := &metadata.ArrayRef{
		Type: &metadata.ArrayType{
			Name:  "Array<" + rest.Name() + ">",
			Value: rest,
		},
	}
	inner, err := arrayStringify(fmt.Sprintf("%s.slice(%d)", ve, start), array, state)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("%s._jsonStringifyRest(%s)", jsonStringifyRestAlias, inner), nil
}

// jsonLiteral renders a constant JS value as JSON text.
func jsonLiteral(k metadata.AtomicKind, v any) string {
	switch k {
	case metadata.AtomicString:
		if s, ok := v.(string); ok {
			return `"` + s + `"`
		}
	case metadata.AtomicBoolean:
		if b, ok := v.(bool); ok {
			if b {
				return "true"
			}
			return "false"
		}
	case metadata.AtomicNumber:
		return numberLiteral(v)
	case metadata.AtomicBigint:
		return numberLiteral(v) // bigints serialize as plain numbers for JSON
	}
	return "null"
}
