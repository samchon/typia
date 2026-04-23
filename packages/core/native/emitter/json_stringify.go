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
	expr, err := buildJsonStringify("input", schema, newJSONStringifyState())
	if err != nil {
		return "", err
	}
	return "(input) => " + expr, nil
}

type jsonStringifyState struct {
	arrays  map[*metadata.ArrayRef]int
	objects map[*metadata.ObjectRef]int
}

func newJSONStringifyState() *jsonStringifyState {
	return &jsonStringifyState{
		arrays:  map[*metadata.ArrayRef]int{},
		objects: map[*metadata.ObjectRef]int{},
	}
}

func findUnsupportedJSONStringifyShape(schema *metadata.Schema) (string, bool) {
	return findUnsupportedJSONShape(schema)
}

// buildJsonStringify returns a JS expression whose runtime value is the JSON
// representation of the value held in `ve`. Unsupported shapes bubble up an
// ErrUnsupportedSchema so the caller can skip rather than emit nonsense.
func buildJsonStringify(ve string, s *metadata.Schema, state *jsonStringifyState) (string, error) {
	// `any` defers to the runtime — preserves typia v12's behavior of
	// letting JSON.stringify do the heavy lifting for unknown shapes.
	if s.Any {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	if s.Escaped != nil {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}

	// Sole atomic — hot path for scalar values.
	if kind, ok := s.IsSoleAtomic(); ok && !s.Nullable && s.IsRequired() {
		return atomicStringify(ve, kind), nil
	}

	// Sole object — most common non-scalar case.
	if s.Size() == 1 && len(s.Objects) == 1 && !s.Nullable && s.IsRequired() {
		return objectStringify(ve, s.Objects[0], state)
	}

	// Sole array — delegates element stringify to a nested call.
	if s.Size() == 1 && len(s.Arrays) == 1 && !s.Nullable && s.IsRequired() {
		return arrayStringify(ve, s.Arrays[0], state)
	}

	// Sole literal constant — emit the literal JSON directly.
	if s.IsConstant() && s.Size() == 1 {
		for _, c := range s.Constants {
			if len(c.Values) == 1 {
				return jsonQuote(jsonLiteral(c.Type, c.Values[0].Value)), nil
			}
		}
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
		return fmt.Sprintf("JSON.stringify(%s)", ve)
	case metadata.AtomicNumber:
		// Finite check protects against NaN / Infinity — both invalid JSON
		// numbers so we output null, matching JSON.stringify.
		return fmt.Sprintf("(Number.isFinite(%s) ? String(%s) : \"null\")", ve, ve)
	case metadata.AtomicBoolean:
		return fmt.Sprintf("((%s) ? \"true\" : \"false\")", ve)
	case metadata.AtomicBigint:
		// BigInt → typia emits `${x}` but we use toString() for clarity.
		return fmt.Sprintf("%s.toString()", ve)
	}
	return fmt.Sprintf("JSON.stringify(%s)", ve)
}

// objectStringify renders `{"k1":<v1>,"k2":<v2>}`. Known-required properties
// are baked into the template; optional properties emit a ternary that either
// contributes `,"k":<v>` or `""`.
func objectStringify(ve string, ref *metadata.ObjectRef, state *jsonStringifyState) (string, error) {
	obj := ref.Type
	if obj == nil {
		return "", fmt.Errorf("%w: nil object", ErrUnsupportedSchema)
	}
	if len(obj.DynamicProperties) != 0 {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	if state.objects[ref] > 0 {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	state.objects[ref] += 1
	defer func() {
		state.objects[ref] -= 1
		if state.objects[ref] == 0 {
			delete(state.objects, ref)
		}
	}()
	required := make([]*metadata.Property, 0, len(obj.Properties))
	optional := make([]*metadata.Property, 0)
	for _, p := range obj.Properties {
		if _, ok := p.Key.GetSoleLiteral(); !ok {
			return "", fmt.Errorf("%w: json stringify does not support dynamic object keys", ErrUnsupportedSchema)
		}
		if p.Value.IsRequired() {
			required = append(required, p)
		} else {
			optional = append(optional, p)
		}
	}
	sort.Slice(required, func(i, j int) bool {
		ki, _ := required[i].Key.GetSoleLiteral()
		kj, _ := required[j].Key.GetSoleLiteral()
		return ki < kj
	})
	sort.Slice(optional, func(i, j int) bool {
		ki, _ := optional[i].Key.GetSoleLiteral()
		kj, _ := optional[j].Key.GetSoleLiteral()
		return ki < kj
	})

	if obj.AdditionalProperties != nil {
		extraValue, err := buildJsonStringify("__value", obj.AdditionalProperties, state)
		if err != nil {
			return "", err
		}
		var b strings.Builder
		b.WriteString(`(() => { const __proto = Object.getPrototypeOf(`)
		b.WriteString(ve)
		b.WriteString(`); if ((null !== `)
		b.WriteString(ve)
		b.WriteString(` && "function" === typeof `)
		b.WriteString(ve)
		b.WriteString(`.toJSON) || (__proto !== Object.prototype && __proto !== null)) return JSON.stringify(`)
		b.WriteString(ve)
		b.WriteString(`); `)
		b.WriteString(`(() => { const __parts = []; const __allow = new Set([`)
		firstAllow := true
		for _, p := range required {
			key, _ := p.Key.GetSoleLiteral()
			if !firstAllow {
				b.WriteString(",")
			}
			firstAllow = false
			b.WriteString(jsonQuote(key))
		}
		for _, p := range optional {
			key, _ := p.Key.GetSoleLiteral()
			if !firstAllow {
				b.WriteString(",")
			}
			firstAllow = false
			b.WriteString(jsonQuote(key))
		}
		b.WriteString(`]); `)
		for _, p := range required {
			key, _ := p.Key.GetSoleLiteral()
			propExpr := accessProperty(ve, key)
			inner, err := buildJsonStringify(propExpr, p.Value, state)
			if err != nil {
				return "", err
			}
			b.WriteString(`__parts.push(`)
			b.WriteString(jsonQuote(jsonQuote(key) + `:`))
			b.WriteString(`+(`)
			b.WriteString(inner)
			b.WriteString(`)); `)
		}
		for _, p := range optional {
			key, _ := p.Key.GetSoleLiteral()
			propExpr := accessProperty(ve, key)
			inner, err := buildJsonStringify(propExpr, p.Value, state)
			if err != nil {
				return "", err
			}
			b.WriteString(`if ((`)
			b.WriteString(propExpr)
			b.WriteString(`) !== undefined) __parts.push(`)
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
		b.WriteString(`)); } return "{" + __parts.join(",") + "}"; })(); })()`)
		return b.String(), nil
	}
	if len(optional) != 0 {
		var b strings.Builder
		b.WriteString(`(() => { const __proto = Object.getPrototypeOf(`)
		b.WriteString(ve)
		b.WriteString(`); if ((null !== `)
		b.WriteString(ve)
		b.WriteString(` && "function" === typeof `)
		b.WriteString(ve)
		b.WriteString(`.toJSON) || (__proto !== Object.prototype && __proto !== null)) return JSON.stringify(`)
		b.WriteString(ve)
		b.WriteString(`); const __parts = []; `)
		for _, p := range required {
			key, _ := p.Key.GetSoleLiteral()
			propExpr := accessProperty(ve, key)
			inner, err := buildJsonStringify(propExpr, p.Value, state)
			if err != nil {
				return "", err
			}
			b.WriteString(`__parts.push(`)
			b.WriteString(jsonQuote(jsonQuote(key) + `:`))
			b.WriteString(`+(`)
			b.WriteString(inner)
			b.WriteString(`)); `)
		}
		for _, p := range optional {
			key, _ := p.Key.GetSoleLiteral()
			propExpr := accessProperty(ve, key)
			inner, err := buildJsonStringify(propExpr, p.Value, state)
			if err != nil {
				return "", err
			}
			b.WriteString(`if ((`)
			b.WriteString(propExpr)
			b.WriteString(`) !== undefined) __parts.push(`)
			b.WriteString(jsonQuote(jsonQuote(key) + `:`))
			b.WriteString(`+(`)
			b.WriteString(inner)
			b.WriteString(`)); `)
		}
		b.WriteString(`return "{" + __parts.join(",") + "}"; })()`)
		return b.String(), nil
	}

	var b strings.Builder
	b.WriteString(`(() => { const __proto = Object.getPrototypeOf(`)
	b.WriteString(ve)
	b.WriteString(`); if ((null !== `)
	b.WriteString(ve)
	b.WriteString(` && "function" === typeof `)
	b.WriteString(ve)
	b.WriteString(`.toJSON) || (__proto !== Object.prototype && __proto !== null)) return JSON.stringify(`)
	b.WriteString(ve)
	b.WriteString(`); return `)
	b.WriteString(`"{"`)
	first := true
	for _, p := range required {
		if !first {
			b.WriteString(`+","`)
		}
		first = false
		key, _ := p.Key.GetSoleLiteral()
		propExpr := accessProperty(ve, key)
		inner, err := buildJsonStringify(propExpr, p.Value, state)
		if err != nil {
			return "", err
		}
		b.WriteString(`+`)
		b.WriteString(jsonQuote(jsonQuote(key) + `:`))
		b.WriteString(`+(`)
		b.WriteString(inner)
		b.WriteString(`)`)
	}
	b.WriteString(`+"}"`)
	b.WriteString(`; })()`)
	return b.String(), nil
}

// arrayStringify renders `[<v1>,<v2>,...]`.
func arrayStringify(ve string, ref *metadata.ArrayRef, state *jsonStringifyState) (string, error) {
	if ref.Type == nil || ref.Type.Value == nil {
		return "", fmt.Errorf("%w: nil array", ErrUnsupportedSchema)
	}
	if state.arrays[ref] > 0 {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}
	state.arrays[ref] += 1
	defer func() {
		state.arrays[ref] -= 1
		if state.arrays[ref] == 0 {
			delete(state.arrays, ref)
		}
	}()
	inner, err := buildJsonStringify("elem", ref.Type.Value, state)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`("[" + %s.map((elem) => %s).join(",") + "]")`, ve, inner), nil
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
