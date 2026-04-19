package emitter

import (
	"encoding/json"
	"errors"
	"fmt"
	"sort"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// EmitJsonSchemaExpression returns a JS expression whose runtime value is the
// OpenAPI v3.1-compatible JSON Schema representation of the supplied
// MetadataSchema.
//
// typia v12 emits a literal object with `$defs` for recursive shapes and
// `schema` plus `components` for simple ones. Phase 0 mirrors the simple
// layout — enough for non-recursive types the existing fixtures exercise.
func EmitJsonSchemaExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	converted, err := convertToJSONSchema(schema)
	if err != nil {
		return "", err
	}
	wrapper := map[string]any{
		"version":    "3.1",
		"components": map[string]any{},
		"schema":     converted,
	}
	raw, err := json.Marshal(wrapper)
	if err != nil {
		return "", fmt.Errorf("json schema: marshal wrapper: %w", err)
	}
	// Return a parenthesised object literal so tsgo's emit treats it as an
	// expression in position. The string is already valid JSON, which is a
	// subset of JS object literals.
	return "(" + string(raw) + ")", nil
}

// EmitJsonSchemaArrowFunction wraps the expression in a factory-style arrow
// so typia.json.schema<T>() can return the schema on invocation. Kept as a
// helper even though the call is parameter-free — matches typia v12's shape.
func EmitJsonSchemaArrowFunction(schema *metadata.Schema) (string, error) {
	expr, err := EmitJsonSchemaExpression(schema)
	if err != nil {
		return "", err
	}
	return "() => " + expr, nil
}

// convertToJSONSchema implements the Phase 0 subset of typia's
// `JsonSchemaProgrammer`. Supported: atomics, literals, objects, arrays,
// tuples, unions, nullable/optional. Everything else falls back to
// `{"type":"unknown"}` with a TODO marker so downstream callers can surface
// a helpful diagnostic.
func convertToJSONSchema(s *metadata.Schema) (any, error) {
	if s == nil {
		return map[string]any{}, nil
	}
	if s.Any {
		return map[string]any{}, nil
	}

	alternatives := make([]any, 0, s.Bucket()+2)
	if s.Nullable {
		alternatives = append(alternatives, map[string]any{"type": "null"})
	}

	for _, atom := range s.Atomics {
		alt := map[string]any{"type": string(atom.Type)}
		applyTagsToAtomic(alt, atom.Tags)
		alternatives = append(alternatives, alt)
	}
	for _, c := range s.Constants {
		for _, v := range c.Values {
			alt := map[string]any{"type": string(c.Type), "const": v.Value}
			alternatives = append(alternatives, alt)
		}
	}
	for _, ref := range s.Arrays {
		if ref.Type == nil {
			continue
		}
		items := map[string]any{}
		if ref.Type.Value != nil {
			inner, err := convertToJSONSchema(ref.Type.Value)
			if err != nil {
				return nil, err
			}
			items = toMap(inner)
		}
		alternatives = append(alternatives, map[string]any{"type": "array", "items": items})
	}
	for _, ref := range s.Tuples {
		if ref.Type == nil {
			continue
		}
		prefix := make([]any, 0, len(ref.Type.Elements))
		for _, el := range ref.Type.Elements {
			inner, err := convertToJSONSchema(el)
			if err != nil {
				return nil, err
			}
			prefix = append(prefix, inner)
		}
		alternatives = append(alternatives, map[string]any{
			"type":        "array",
			"prefixItems": prefix,
			"minItems":    len(prefix),
			"maxItems":    len(prefix),
		})
	}
	for _, ref := range s.Objects {
		if ref.Type == nil {
			continue
		}
		obj, err := objectToJSONSchema(ref.Type)
		if err != nil {
			return nil, err
		}
		alternatives = append(alternatives, obj)
	}
	for _, n := range s.Natives {
		alternatives = append(alternatives, nativeToJSONSchema(n.Name))
	}
	for _, ref := range s.Aliases {
		if ref == nil || ref.Type == nil || ref.Type.Value == nil {
			continue
		}
		inner, err := convertToJSONSchema(ref.Type.Value)
		if err != nil {
			return nil, err
		}
		alternatives = append(alternatives, inner)
	}
	if s.Escaped != nil && s.Escaped.Returns != nil {
		inner, err := convertToJSONSchema(s.Escaped.Returns)
		if err != nil {
			return nil, err
		}
		alternatives = append(alternatives, inner)
	}

	if len(alternatives) == 0 {
		return map[string]any{}, nil
	}
	if len(alternatives) == 1 {
		return alternatives[0], nil
	}
	return map[string]any{"oneOf": alternatives}, nil
}

// applyTagsToAtomic folds typia tags into OpenAPI-flavoured constraints on
// the atomic schema map.
func applyTagsToAtomic(out map[string]any, matrix metadata.TagMatrix) {
	if len(matrix) == 0 {
		return
	}
	// For Phase 0 we flatten: just take the first row (most common single-row
	// case) and translate kinds we recognise. Multi-row (union-of-tags) would
	// require oneOf expansion, deferred to Phase 1.
	for _, tag := range matrix[0] {
		switch tag.Kind {
		case "format":
			if v, ok := tag.Value.(string); ok {
				out["format"] = v
			}
		case "pattern":
			if v, ok := tag.Value.(string); ok {
				out["pattern"] = v
			}
		case "minimum":
			out["minimum"] = tag.Value
		case "maximum":
			out["maximum"] = tag.Value
		case "exclusiveMinimum":
			out["exclusiveMinimum"] = tag.Value
		case "exclusiveMaximum":
			out["exclusiveMaximum"] = tag.Value
		case "multipleOf":
			out["multipleOf"] = tag.Value
		case "minLength":
			out["minLength"] = tag.Value
		case "maxLength":
			out["maxLength"] = tag.Value
		case "minItems":
			out["minItems"] = tag.Value
		case "maxItems":
			out["maxItems"] = tag.Value
		case "uniqueItems":
			out["uniqueItems"] = tag.Value
		}
	}
}

// nativeToJSONSchema maps a native JS class name to its OpenAPI 3.1 encoding.
// Date → date-time; Uint8Array/Buffer → base64-encoded byte string;
// URL → URI; RegExp/Set/Map → best-effort object shape.
//
// Mirrors typia v12's `json_schema_native` special-casing: for classes whose
// `toJSON` yields a primitive, we emit that primitive's schema instead of
// an opaque `{}`.
func nativeToJSONSchema(name string) map[string]any {
	switch name {
	case "Date":
		return map[string]any{"type": "string", "format": "date-time"}
	case "Uint8Array", "Buffer":
		return map[string]any{"type": "string", "format": "byte"}
	case "URL":
		return map[string]any{"type": "string", "format": "uri"}
	case "RegExp":
		return map[string]any{"type": "string", "format": "regex"}
	case "Set":
		return map[string]any{"type": "array", "items": map[string]any{}, "uniqueItems": true}
	case "Map":
		return map[string]any{"type": "object", "additionalProperties": map[string]any{}}
	case "Int8Array", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array",
		"Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array", "Uint8ClampedArray":
		return map[string]any{"type": "array", "items": map[string]any{"type": "number"}}
	}
	return map[string]any{"type": "object"}
}

func objectToJSONSchema(obj *metadata.ObjectType) (map[string]any, error) {
	properties := map[string]any{}
	required := make([]string, 0, len(obj.Properties))
	for _, p := range obj.Properties {
		name, ok := p.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		inner, err := convertToJSONSchema(p.Value)
		if err != nil {
			return nil, err
		}
		properties[name] = inner
		if p.Value.IsRequired() {
			required = append(required, name)
		}
	}
	sort.Strings(required)
	return map[string]any{
		"type":                 "object",
		"properties":           properties,
		"required":             required,
		"additionalProperties": false,
	}, nil
}

// toMap coerces the any produced by convertToJSONSchema into a map so nested
// fields can be added by callers. Non-maps get wrapped in `{ "allOf": [...] }`.
func toMap(v any) map[string]any {
	if m, ok := v.(map[string]any); ok {
		return m
	}
	return map[string]any{"allOf": []any{v}}
}
