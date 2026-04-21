package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
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
	expr, err := buildJsonStringify("input", schema)
	if err != nil {
		return "", err
	}
	return "(input) => " + expr, nil
}

func findUnsupportedJSONStringifyShape(schema *metadata.Schema) (string, bool) {
	var found string
	ok := newSchemaWalker().walkSchema(schema, func(s *metadata.Schema) bool {
		for _, atom := range s.Atomics {
			if atom.Type == metadata.AtomicBigint {
				found = "bigint"
				return true
			}
		}
		for _, c := range s.Constants {
			if c.Type == metadata.AtomicBigint {
				found = "bigint"
				return true
			}
		}
		if len(s.Maps) != 0 {
			found = "Map"
			return true
		}
		if len(s.Sets) != 0 {
			found = "Set"
			return true
		}
		for _, native := range s.Natives {
			if native.Name == "Date" {
				continue
			}
			found = native.Name
			return true
		}
		return false
	})
	return found, ok
}

// buildJsonStringify returns a JS expression whose runtime value is the JSON
// representation of the value held in `ve`. Unsupported shapes bubble up an
// ErrUnsupportedSchema so the caller can skip rather than emit nonsense.
func buildJsonStringify(ve string, s *metadata.Schema) (string, error) {
	// `any` defers to the runtime — preserves typia v12's behaviour of
	// letting JSON.stringify do the heavy lifting for unknown shapes.
	if s.Any {
		return fmt.Sprintf("JSON.stringify(%s)", ve), nil
	}

	// Sole atomic — hot path for scalar values.
	if kind, ok := s.IsSoleAtomic(); ok && !s.Nullable && s.IsRequired() {
		return atomicStringify(ve, kind), nil
	}

	// Sole object — most common non-scalar case.
	if s.Size() == 1 && len(s.Objects) == 1 && !s.Nullable && s.IsRequired() {
		return objectStringify(ve, s.Objects[0])
	}

	// Sole array — delegates element stringify to a nested call.
	if s.Size() == 1 && len(s.Arrays) == 1 && !s.Nullable && s.IsRequired() {
		return arrayStringify(ve, s.Arrays[0])
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
	// on JSON.stringify so behaviour stays correct even when the fast path
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
func objectStringify(ve string, ref *metadata.ObjectRef) (string, error) {
	obj := ref.Type
	if obj == nil {
		return "", fmt.Errorf("%w: nil object", ErrUnsupportedSchema)
	}
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

	var b strings.Builder
	b.WriteString(`"{"`)
	first := true
	for _, p := range required {
		if !first {
			b.WriteString(`+","`)
		}
		first = false
		key, _ := p.Key.GetSoleLiteral()
		propExpr := accessProperty(ve, key)
		inner, err := buildJsonStringify(propExpr, p.Value)
		if err != nil {
			return "", err
		}
		b.WriteString(`+`)
		b.WriteString(jsonQuote(jsonQuote(key) + `:`))
		b.WriteString(`+(`)
		b.WriteString(inner)
		b.WriteString(`)`)
	}
	for _, p := range optional {
		key, _ := p.Key.GetSoleLiteral()
		propExpr := accessProperty(ve, key)
		inner, err := buildJsonStringify(propExpr, p.Value)
		if err != nil {
			return "", err
		}
		// `undefined` → omit property entirely. If the first required item
		// hasn't been emitted yet (pathologically all-optional struct), we
		// still need to avoid a leading comma on the very first non-empty
		// optional — typia v12 defers this decision to runtime; we do too.
		prefix := `","`
		if first {
			prefix = `""`
		}
		b.WriteString(`+((`)
		b.WriteString(propExpr)
		b.WriteString(`) === undefined ? "" : `)
		b.WriteString(prefix)
		b.WriteString(`+`)
		b.WriteString(jsonQuote(jsonQuote(key) + `:`))
		b.WriteString(`+(`)
		b.WriteString(inner)
		b.WriteString(`))`)
		first = false
	}
	b.WriteString(`+"}"`)
	return b.String(), nil
}

// arrayStringify renders `[<v1>,<v2>,...]`.
func arrayStringify(ve string, ref *metadata.ArrayRef) (string, error) {
	if ref.Type == nil || ref.Type.Value == nil {
		return "", fmt.Errorf("%w: nil array", ErrUnsupportedSchema)
	}
	inner, err := buildJsonStringify("elem", ref.Type.Value)
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
		return numberLiteral(v) // bigints serialise as plain numbers for JSON
	}
	return "null"
}
