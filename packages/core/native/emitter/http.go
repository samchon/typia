package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitHttpParameterArrowFunction converts a single URL parameter string into
// the target type. Strings pass straight through; numbers go via Number();
// booleans recognize `"true"`. Matches `typia.http.parameter<T>`.
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

func EmitHttpHeadersObjectArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil || len(schema.Objects) != 1 {
		return "(input) => input", nil
	}
	obj := schema.Objects[0].Type
	if obj == nil {
		return "(input) => input", nil
	}

	var b strings.Builder
	b.WriteString(`(input) => {`)
	b.WriteString(`const __headerReadBoolean = (value) => value !== undefined ? (value === "true" ? true : value === "false" ? false : value) : undefined;`)
	b.WriteString(`const __headerToNumber = (str) => { const value = Number(str); return Number.isNaN(value) ? str : value; };`)
	b.WriteString(`const __headerReadNumber = (value) => value !== undefined ? __headerToNumber(value) : undefined;`)
	b.WriteString(`const __headerToBigint = (str) => { try { return BigInt(str); } catch { return str; } };`)
	b.WriteString(`const __headerReadBigint = (value) => value !== undefined ? __headerToBigint(value) : undefined;`)
	b.WriteString(`const __get = (key) => { if (!input) return undefined; return input[key]; };`)
	b.WriteString(`const out = {};`)

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
		value, err := httpHeadersProperty(p.Value, name)
		if err != nil {
			return "", err
		}
		b.WriteString(value)
	}
	b.WriteString(`return out; }`)
	return b.String(), nil
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

	var b strings.Builder
	b.WriteString(`(input) => {`)
	b.WriteString(`const __parse = (input) => { if (typeof input === "string") { const index = input.indexOf("?"); input = index === -1 ? "" : input.substring(index + 1); return new URLSearchParams(input); } return input; };`)
	b.WriteString(`const __queryReadString = (str) => str === null ? undefined : str === "null" ? null : str;`)
	b.WriteString(`const __queryReadBoolean = (str) => str === null ? undefined : str === "null" ? null : str.length === 0 ? true : str === "true" || str === "1" ? true : str === "false" || str === "0" ? false : str;`)
	b.WriteString(`const __queryToNumber = (str) => { const value = Number(str); return Number.isNaN(value) ? str : value; };`)
	b.WriteString(`const __queryReadNumber = (str) => str && str.length ? (str === "null" ? null : __queryToNumber(str)) : undefined;`)
	b.WriteString(`const __queryToBigint = (str) => { try { return BigInt(str); } catch { return str; } };`)
	b.WriteString(`const __queryReadBigint = (str) => str && str.length ? (str === "null" ? null : __queryToBigint(str)) : undefined;`)
	b.WriteString(`const __queryReadArray = (input, alternative) => input.length ? input : alternative;`)
	b.WriteString(`input = __parse(input);`)
	b.WriteString(`const __get = (k) => { if (!input) return null; if (typeof input.get === "function") return input.get(k); const v = input[k]; return Array.isArray(v) ? (v.length ? v[0] : null) : (v === undefined ? null : v); };`)
	b.WriteString(`const __getAll = (k) => { if (!input) return []; if (typeof input.getAll === "function") return input.getAll(k); const v = input[k]; if (Array.isArray(v)) return v; return v === undefined ? [] : [v]; };`)
	b.WriteString(`const out = {};`)

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
		elemSchema := s.Arrays[0].Type.Value
		if elem, ok := elemSchema.IsSoleAtomic(); ok {
			return fmt.Sprintf(` { const value = __getAll(%s).map((elem) => %s); out[%s] = %s; }`, quoted, httpQueryReadExpr("elem", elem), quoted, httpQueryArrayWrapExpr("value", s)), nil
		}
		if kind, ok := httpConstantAtomicKind(elemSchema); ok {
			return fmt.Sprintf(` { const value = __getAll(%s).map((elem) => %s); out[%s] = %s; }`, quoted, httpQueryReadExpr("elem", kind), quoted, httpQueryArrayWrapExpr("value", s)), nil
		}
		if httpTemplateLike(elemSchema) {
			return fmt.Sprintf(` { const value = __getAll(%s).map((elem) => __queryReadString(elem)); out[%s] = %s; }`, quoted, quoted, httpQueryArrayWrapExpr("value", s)), nil
		}
		if nativeExpr, ok := httpNativePassthroughExpr("v", elemSchema); ok {
			return fmt.Sprintf(` { const value = __getAll(%s).map((v) => %s); out[%s] = %s; }`, quoted, nativeExpr, quoted, httpQueryArrayWrapExpr("value", s)), nil
		}
		return "", fmt.Errorf("%w: http.query array element must be atomic or native", ErrUnsupportedSchema)
	}
	kind, ok := s.IsSoleAtomic()
	if ok {
		return fmt.Sprintf(` { const value = %s; out[%s] = %s; }`, httpQueryReadExpr("__get("+quoted+")", kind), quoted, httpQueryRequiredWrapExpr("value", name, s)), nil
	}
	if kind, ok := httpConstantAtomicKind(s); ok {
		return fmt.Sprintf(` { const value = %s; out[%s] = %s; }`, httpQueryReadExpr("__get("+quoted+")", kind), quoted, httpQueryRequiredWrapExpr("value", name, s)), nil
	}
	if httpTemplateLike(s) {
		return fmt.Sprintf(` { const value = __queryReadString(__get(%s)); out[%s] = %s; }`, quoted, quoted, httpQueryRequiredWrapExpr("value", name, s)), nil
	}
	if nativeExpr, ok := httpNativePassthroughExpr("v", s); ok {
		return fmt.Sprintf(` { const v = __get(%s); const value = %s; out[%s] = %s; }`, quoted, nativeExpr, quoted, httpQueryRequiredWrapExpr("value", name, s)), nil
	}
	return fmt.Sprintf(` { const value = __get(%s); out[%s] = %s; }`, quoted, quoted, httpQueryRequiredWrapExpr("value", name, s)), nil
}

func httpHeadersProperty(s *metadata.Schema, name string) (string, error) {
	quoted := jsonQuote(name)
	lower := jsonQuote(strings.ToLower(name))
	if len(s.Arrays) == 1 && s.Arrays[0].Type != nil && s.Arrays[0].Type.Value != nil {
		elemSchema := s.Arrays[0].Type.Value
		reader := `((str) => str.trim())`
		switch {
		case len(name) != 0 && strings.EqualFold(name, "set-cookie"):
			return fmt.Sprintf(` { const value = __get(%s); out[%s] = Array.isArray(value) ? value.slice() : value; }`, lower, quoted), nil
		case func() bool { _, ok := elemSchema.IsSoleAtomic(); return ok }():
			kind, _ := elemSchema.IsSoleAtomic()
			reader = httpHeaderReader(kind)
		case func() bool { _, ok := httpConstantAtomicKind(elemSchema); return ok }():
			kind, _ := httpConstantAtomicKind(elemSchema)
			reader = httpHeaderReader(kind)
		case httpTemplateLike(elemSchema):
			reader = `((str) => str.trim())`
		default:
			return "", fmt.Errorf("%w: http headers array elements must be atomic or constant", ErrUnsupportedSchema)
		}
		delim := ", "
		if strings.EqualFold(name, "cookie") {
			delim = "; "
		}
		return fmt.Sprintf(` { const value = __get(%s); const split = Array.isArray(value) ? value.map(%s) : value?.split(%s)?.map(%s); out[%s] = %s; }`,
			lower, reader, jsonQuote(delim), reader, quoted, httpHeadersArrayWrapExpr("split", s),
		), nil
	}
	if kind, ok := s.IsSoleAtomic(); ok {
		return fmt.Sprintf(` out[%s] = %s(__get(%s));`, quoted, httpHeaderReader(kind), lower), nil
	}
	if kind, ok := httpConstantAtomicKind(s); ok {
		return fmt.Sprintf(` out[%s] = %s(__get(%s));`, quoted, httpHeaderReader(kind), lower), nil
	}
	if httpTemplateLike(s) {
		return fmt.Sprintf(` out[%s] = __get(%s);`, quoted, lower), nil
	}
	return fmt.Sprintf(` out[%s] = __get(%s);`, quoted, lower), nil
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

func httpNativePassthroughExpr(ve string, schema *metadata.Schema) (string, bool) {
	if schema == nil || len(schema.Natives) != 1 || schema.Size() != 1 {
		return "", false
	}
	name := schema.Natives[0].Name
	switch name {
	case "Blob", "File":
		return ve, true
	default:
		return "", false
	}
}

func httpConstantAtomicKind(schema *metadata.Schema) (metadata.AtomicKind, bool) {
	if schema == nil || len(schema.Constants) != 1 {
		return "", false
	}
	if len(schema.Atomics) != 0 ||
		len(schema.Templates) != 0 ||
		len(schema.Arrays) != 0 ||
		len(schema.Tuples) != 0 ||
		len(schema.Objects) != 0 ||
		len(schema.Aliases) != 0 ||
		len(schema.Natives) != 0 ||
		len(schema.Functions) != 0 ||
		len(schema.Sets) != 0 ||
		len(schema.Maps) != 0 ||
		schema.Any {
		return "", false
	}
	return schema.Constants[0].Type, true
}

func httpTemplateLike(schema *metadata.Schema) bool {
	return schema != nil && len(schema.Templates) != 0 && schema.Size() == 1
}

func httpQueryReadExpr(ve string, kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicString:
		return "__queryReadString(" + ve + ")"
	case metadata.AtomicNumber:
		return "__queryReadNumber(" + ve + ")"
	case metadata.AtomicBoolean:
		return "__queryReadBoolean(" + ve + ")"
	case metadata.AtomicBigint:
		return "__queryReadBigint(" + ve + ")"
	default:
		return ve
	}
}

func httpQueryArrayWrapExpr(ve string, schema *metadata.Schema) string {
	if schema == nil {
		return ve
	}
	if schema.Nullable {
		return "__queryReadArray(" + ve + ", null)"
	}
	if !schema.IsRequired() {
		return "__queryReadArray(" + ve + ", undefined)"
	}
	return ve
}

func httpQueryRequiredWrapExpr(ve string, name string, schema *metadata.Schema) string {
	if schema == nil || !schema.IsRequired() {
		return ve
	}
	return fmt.Sprintf(`(%s !== undefined ? %s : (() => { throw new Error("typia.http.query: missing %s"); })())`, ve, ve, jsEscape(name))
}

func httpHeaderReader(kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicBoolean:
		return "__headerReadBoolean"
	case metadata.AtomicNumber:
		return "__headerReadNumber"
	case metadata.AtomicBigint:
		return "__headerReadBigint"
	default:
		return "((str) => str)"
	}
}

func httpHeadersArrayWrapExpr(ve string, schema *metadata.Schema) string {
	if schema == nil {
		return ve
	}
	if schema.IsRequired() {
		return "(" + ve + " ?? [])"
	}
	return ve
}
