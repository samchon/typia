package emitter

import (
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitHttpParameterArrowFunction converts a single URL parameter string into
// the target type, matching the runtime `_httpParameterRead*` helpers.
func EmitHttpParameterArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	// Union / nullable wiring is still simplified here; we accept the first atomic.
	if kind, ok := schema.IsSoleAtomic(); ok {
		return "(input) => " + httpParameterReader("input", kind), nil
	}
	if kind, ok := httpConstantAtomicKind(schema); ok {
		return "(input) => " + httpParameterReader("input", kind), nil
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
	b.WriteString(`input = ` + httpQueryParseAlias + `._httpQueryParseURLSearchParams(input);`)
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

func EmitHttpFormDataObjectArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil || len(schema.Objects) != 1 {
		return "(input) => input", nil
	}
	obj := schema.Objects[0].Type
	if obj == nil {
		return "(input) => input", nil
	}

	var b strings.Builder
	b.WriteString(`(input) => {`)
	b.WriteString(`const __get = (key) => input.get(key);`)
	b.WriteString(`const __getAll = (key) => input.getAll(key);`)
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
		value, err := httpFormDataProperty(p.Value, name)
		if err != nil {
			return "", err
		}
		b.WriteString(value)
	}
	b.WriteString(`return out; }`)
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
			return fmt.Sprintf(` { const value = __getAll(%s).map((elem) => %s._httpQueryReadString(elem)); out[%s] = %s; }`, quoted, httpQueryReadStringAlias, quoted, httpQueryArrayWrapExpr("value", s)), nil
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
		return fmt.Sprintf(` { const value = %s._httpQueryReadString(__get(%s)); out[%s] = %s; }`, httpQueryReadStringAlias, quoted, quoted, httpQueryRequiredWrapExpr("value", name, s)), nil
	}
	if nativeExpr, ok := httpNativePassthroughExpr("v", s); ok {
		return fmt.Sprintf(` { const v = __get(%s); const value = %s; out[%s] = %s; }`, quoted, nativeExpr, quoted, httpQueryRequiredWrapExpr("value", name, s)), nil
	}
	return fmt.Sprintf(` { const value = __get(%s); out[%s] = %s; }`, quoted, quoted, httpQueryRequiredWrapExpr("value", name, s)), nil
}

func httpFormDataProperty(s *metadata.Schema, name string) (string, error) {
	quoted := jsonQuote(name)
	if len(s.Arrays) == 1 && s.Arrays[0].Type != nil && s.Arrays[0].Type.Value != nil {
		elemSchema := s.Arrays[0].Type.Value
		reader, err := httpFormDataReader("elem", elemSchema)
		if err != nil {
			return "", err
		}
		alternative := "undefined"
		if s.Nullable {
			alternative = "null"
		}
		valueExpr := "value"
		if s.Nullable || !s.IsRequired() {
			valueExpr = fmt.Sprintf(`%s._httpFormDataReadArray(value, %s)`, httpFormDataReadArrayAlias, alternative)
		}
		return fmt.Sprintf(` { const value = __getAll(%s).map((elem) => %s); out[%s] = %s; }`, quoted, reader, quoted, valueExpr), nil
	}
	reader, err := httpFormDataReader("__get("+quoted+")", s)
	if err != nil {
		return "", err
	}
	if !s.Nullable && !s.IsRequired() {
		reader = "(" + reader + " ?? undefined)"
	}
	return fmt.Sprintf(` { out[%s] = %s; }`, quoted, reader), nil
}

func httpFormDataReader(input string, s *metadata.Schema) (string, error) {
	if kind, ok := s.IsSoleAtomic(); ok {
		return httpFormDataReadExpr(input, kind), nil
	}
	if kind, ok := httpConstantAtomicKind(s); ok {
		return httpFormDataReadExpr(input, kind), nil
	}
	if httpTemplateLike(s) {
		return fmt.Sprintf(`%s._httpFormDataReadString(%s)`, httpFormDataReadStringAlias, input), nil
	}
	for _, native := range s.Natives {
		switch native.Name {
		case "Blob":
			return fmt.Sprintf(`%s._httpFormDataReadBlob(%s)`, httpFormDataReadBlobAlias, input), nil
		case "File":
			return fmt.Sprintf(`%s._httpFormDataReadFile(%s)`, httpFormDataReadFileAlias, input), nil
		}
	}
	return "", fmt.Errorf("%w: http formData property must be atomic, constant, template, Blob, File, or an array of them", ErrUnsupportedSchema)
}

func httpFormDataReadExpr(input string, kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicBoolean:
		return fmt.Sprintf(`%s._httpFormDataReadBoolean(%s)`, httpFormDataReadBooleanAlias, input)
	case metadata.AtomicNumber:
		return fmt.Sprintf(`%s._httpFormDataReadNumber(%s)`, httpFormDataReadNumberAlias, input)
	case metadata.AtomicBigint:
		return fmt.Sprintf(`%s._httpFormDataReadBigint(%s)`, httpFormDataReadBigintAlias, input)
	default:
		return fmt.Sprintf(`%s._httpFormDataReadString(%s)`, httpFormDataReadStringAlias, input)
	}
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

func httpParameterReader(ve string, kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicString:
		return httpParameterReadStringAlias + "._httpParameterReadString(" + ve + ")"
	case metadata.AtomicNumber:
		return httpParameterReadNumberAlias + "._httpParameterReadNumber(" + ve + ")"
	case metadata.AtomicBoolean:
		return httpParameterReadBooleanAlias + "._httpParameterReadBoolean(" + ve + ")"
	case metadata.AtomicBigint:
		return httpParameterReadBigintAlias + "._httpParameterReadBigint(" + ve + ")"
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
		return httpQueryReadStringAlias + "._httpQueryReadString(" + ve + ")"
	case metadata.AtomicNumber:
		return httpQueryReadNumberAlias + "._httpQueryReadNumber(" + ve + ")"
	case metadata.AtomicBoolean:
		return httpQueryReadBooleanAlias + "._httpQueryReadBoolean(" + ve + ")"
	case metadata.AtomicBigint:
		return httpQueryReadBigintAlias + "._httpQueryReadBigint(" + ve + ")"
	default:
		return ve
	}
}

func httpQueryArrayWrapExpr(ve string, schema *metadata.Schema) string {
	if schema == nil {
		return ve
	}
	if schema.Nullable {
		return httpQueryReadArrayAlias + "._httpQueryReadArray(" + ve + ", null)"
	}
	if !schema.IsRequired() {
		return httpQueryReadArrayAlias + "._httpQueryReadArray(" + ve + ", undefined)"
	}
	return ve
}

func httpQueryRequiredWrapExpr(ve string, name string, schema *metadata.Schema) string {
	return ve
}

func httpHeaderReader(kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicBoolean:
		return httpHeaderReadBooleanAlias + "._httpHeaderReadBoolean"
	case metadata.AtomicNumber:
		return httpHeaderReadNumberAlias + "._httpHeaderReadNumber"
	case metadata.AtomicBigint:
		return httpHeaderReadBigintAlias + "._httpHeaderReadBigint"
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
