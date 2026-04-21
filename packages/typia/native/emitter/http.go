package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/typia/native/metadata"
)

// EmitHttpParameterArrowFunction converts a single URL parameter string into
// the target type. Strings pass straight through; numbers go via Number();
// booleans recognise `"true"`. Matches `typia.http.parameter<T>`.
func EmitHttpParameterArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	// Union / nullable wiring is still simplified here; we accept the first atomic.
	if kind, ok := schema.IsSoleAtomic(); ok {
		return "(input) => " + coerceAtomic("input", kind), nil
	}
	// Literal single-value parameter.
	if lit, ok := schema.GetSoleLiteral(); ok {
		return fmt.Sprintf(`(input) => (input === %s ? input : (() => { throw new Error("typia.http.parameter: expected %s") })())`, jsonQuote(lit), jsEscape(lit)), nil
	}
	// Fallback: return input as-is (user receives the raw string).
	return "(input) => input", nil
}

// EmitHttpQueryObjectArrowFunction maps a `URLSearchParams`-like object of
// `string => string[]` (or `string => string`) into the structured target
// type, coercing each property. Matches `typia.http.query<T>`.
//
// The current emitter supports top-level object shapes with atomic or
// array-of-atomic property values — the common HTTP-query case.
func EmitHttpQueryObjectArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil || len(schema.Objects) != 1 {
		return "(input) => input", nil
	}
	obj := schema.Objects[0].Type
	if obj == nil {
		return "(input) => input", nil
	}

	// Build a mapper of (prop) => coerce(input.get(prop))
	var b strings.Builder
	b.WriteString("(input) => { const __get = (k) => { if (!input) return undefined; if (typeof input.get === \"function\") return input.get(k); return input[k]; }; const __getAll = (k) => { if (!input) return []; if (typeof input.getAll === \"function\") return input.getAll(k); const v = input[k]; if (Array.isArray(v)) return v; return v === undefined ? [] : [v]; }; const out = {};")

	props := append([]*metadata.Property{}, obj.Properties...)
	sort.Slice(props, func(i, j int) bool {
		ki, _ := props[i].Key.GetSoleLiteral()
		kj, _ := props[j].Key.GetSoleLiteral()
		return ki < kj
	})
	for _, p := range props {
		name, ok := p.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		value, err := httpQueryProperty(p.Value, name)
		if err != nil {
			return "", err
		}
		b.WriteString(value)
	}
	b.WriteString(" return out; }")
	return b.String(), nil
}

func httpQueryProperty(s *metadata.Schema, name string) (string, error) {
	quoted := jsonQuote(name)
	if len(s.Arrays) == 1 && s.Arrays[0].Type != nil && s.Arrays[0].Type.Value != nil {
		elem, ok := s.Arrays[0].Type.Value.IsSoleAtomic()
		if !ok {
			return "", fmt.Errorf("%w: http.query array element must be atomic", ErrUnsupportedSchema)
		}
		return fmt.Sprintf(` out[%s] = __getAll(%s).map((v) => %s);`, quoted, quoted, coerceAtomic("v", elem)), nil
	}
	kind, ok := s.IsSoleAtomic()
	if !ok {
		// Fallback: pass through.
		return fmt.Sprintf(` out[%s] = __get(%s);`, quoted, quoted), nil
	}
	if s.IsRequired() {
		return fmt.Sprintf(
			` { const v = __get(%s); if (v == null) throw new Error("typia.http.query: missing %s"); out[%s] = %s; }`,
			quoted, jsEscape(name), quoted, coerceAtomic("v", kind),
		), nil
	}
	return fmt.Sprintf(
		` { const v = __get(%s); if (v != null) out[%s] = %s; }`,
		quoted, quoted, coerceAtomic("v", kind),
	), nil
}

// coerceAtomic picks the JS snippet that converts a raw HTTP string `ve` to
// the target atomic kind.
func coerceAtomic(ve string, kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicString:
		return "String(" + ve + ")"
	case metadata.AtomicNumber:
		return "Number(" + ve + ")"
	case metadata.AtomicBoolean:
		return "(" + ve + ` === "true" || ` + ve + " === true)"
	case metadata.AtomicBigint:
		return "BigInt(" + ve + ")"
	}
	return ve
}
