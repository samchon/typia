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
func EmitJsonSchemaExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	encoder := newJSONSchemaEncoder()
	converted, err := encoder.encodeRootSchema(schema)
	if err != nil {
		return "", err
	}
	wrapper := map[string]any{
		"version":    "3.1",
		"components": map[string]any{"schemas": encoder.components},
		"schema":     converted,
	}
	raw, err := json.Marshal(wrapper)
	if err != nil {
		return "", fmt.Errorf("json schema: marshal wrapper: %w", err)
	}
	return "(" + string(raw) + ")", nil
}

// EmitJsonSchemasExpression returns a JS expression whose runtime value is the
// collection form used by typia.json.schemas<[A, B, ...]>(). The input schema
// is either the tuple type argument itself or a single type.
func EmitJsonSchemasExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	encoder := newJSONSchemaEncoder()
	items := expandSchemaCollectionInput(schema)
	schemas := make([]any, 0, len(items))
	for _, item := range items {
		converted, err := encoder.encodeRootSchema(item)
		if err != nil {
			return "", err
		}
		schemas = append(schemas, converted)
	}
	wrapper := map[string]any{
		"version":    "3.1",
		"components": map[string]any{"schemas": encoder.components},
		"schemas":    schemas,
	}
	raw, err := json.Marshal(wrapper)
	if err != nil {
		return "", fmt.Errorf("json schemas: marshal wrapper: %w", err)
	}
	return "(" + string(raw) + ")", nil
}

// EmitJsonSchemaArrowFunction wraps the expression in a factory-style arrow
// so typia.json.schema<T>() can return the schema on invocation.
func EmitJsonSchemaArrowFunction(schema *metadata.Schema) (string, error) {
	expr, err := EmitJsonSchemaExpression(schema)
	if err != nil {
		return "", err
	}
	return "() => " + expr, nil
}

type jsonSchemaEncoder struct {
	components map[string]any
}

func newJSONSchemaEncoder() *jsonSchemaEncoder {
	return &jsonSchemaEncoder{
		components: map[string]any{},
	}
}

func (e *jsonSchemaEncoder) encodeSchema(s *metadata.Schema) (any, error) {
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
		if ref == nil || ref.Type == nil {
			continue
		}
		alt, err := e.encodeArrayRef(ref)
		if err != nil {
			return nil, err
		}
		alternatives = append(alternatives, alt)
	}
	for _, ref := range s.Tuples {
		if ref == nil || ref.Type == nil {
			continue
		}
		alt, err := e.encodeTupleRef(ref)
		if err != nil {
			return nil, err
		}
		alternatives = append(alternatives, alt)
	}
	for _, ref := range s.Objects {
		if ref == nil || ref.Type == nil {
			continue
		}
		alt, err := e.encodeObjectRef(ref)
		if err != nil {
			return nil, err
		}
		alternatives = append(alternatives, alt)
	}
	for _, n := range s.Natives {
		alternatives = append(alternatives, nativeToJSONSchema(n.Name))
	}
	for _, ref := range s.Aliases {
		if ref == nil || ref.Type == nil {
			continue
		}
		alt, err := e.encodeAliasRef(ref)
		if err != nil {
			return nil, err
		}
		alternatives = append(alternatives, alt)
	}
	if s.Escaped != nil && s.Escaped.Returns != nil {
		inner, err := e.encodeSchema(s.Escaped.Returns)
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

func (e *jsonSchemaEncoder) encodeRootSchema(s *metadata.Schema) (any, error) {
	if s == nil {
		return map[string]any{}, nil
	}
	if !s.Nullable && s.Bucket() == 1 && s.Size() == 1 {
		if len(s.Objects) == 1 && s.Objects[0] != nil && s.Objects[0].Type != nil {
			return e.encodeRootObject(s.Objects[0].Type)
		}
		if len(s.Arrays) == 1 && s.Arrays[0] != nil && s.Arrays[0].Type != nil {
			return e.encodeRootArray(s.Arrays[0].Type)
		}
		if len(s.Tuples) == 1 && s.Tuples[0] != nil && s.Tuples[0].Type != nil {
			return e.encodeRootTuple(s.Tuples[0].Type)
		}
		if len(s.Aliases) == 1 && s.Aliases[0] != nil && s.Aliases[0].Type != nil {
			return e.encodeRootAlias(s.Aliases[0].Type)
		}
	}
	return e.encodeSchema(s)
}

func (e *jsonSchemaEncoder) encodeArrayRef(ref *metadata.ArrayRef) (any, error) {
	if ref == nil || ref.Type == nil {
		return map[string]any{}, nil
	}
	return e.ensureComponent(ref.Type.Name, func() (map[string]any, error) {
		return e.buildArrayType(ref.Type)
	})
}

func (e *jsonSchemaEncoder) encodeTupleRef(ref *metadata.TupleRef) (any, error) {
	if ref == nil || ref.Type == nil {
		return map[string]any{}, nil
	}
	return e.ensureComponent(ref.Type.Name, func() (map[string]any, error) {
		return e.buildTupleType(ref.Type)
	})
}

func (e *jsonSchemaEncoder) encodeObjectRef(ref *metadata.ObjectRef) (any, error) {
	if ref == nil || ref.Type == nil {
		return map[string]any{}, nil
	}
	return e.ensureComponent(ref.Type.Name, func() (map[string]any, error) {
		return e.buildObjectType(ref.Type)
	})
}

func (e *jsonSchemaEncoder) encodeAliasRef(ref *metadata.AliasRef) (any, error) {
	if ref == nil || ref.Type == nil {
		return map[string]any{}, nil
	}
	return e.ensureComponent(ref.Type.Name, func() (map[string]any, error) {
		return e.buildAliasType(ref.Type)
	})
}

func (e *jsonSchemaEncoder) ensureComponent(name string, build func() (map[string]any, error)) (map[string]any, error) {
	if name == "" {
		return build()
	}
	if _, ok := e.components[name]; ok {
		return map[string]any{"$ref": "#/components/schemas/" + name}, nil
	}
	e.components[name] = map[string]any{}
	encoded, err := build()
	if err != nil {
		delete(e.components, name)
		return nil, err
	}
	e.components[name] = encoded
	return map[string]any{"$ref": "#/components/schemas/" + name}, nil
}

func (e *jsonSchemaEncoder) encodeRootArray(arr *metadata.ArrayType) (any, error) {
	return e.ensureRootComponent(arr.Name, func() (map[string]any, error) {
		return e.buildArrayType(arr)
	})
}

func (e *jsonSchemaEncoder) encodeRootTuple(tuple *metadata.TupleType) (any, error) {
	return e.ensureRootComponent(tuple.Name, func() (map[string]any, error) {
		return e.buildTupleType(tuple)
	})
}

func (e *jsonSchemaEncoder) encodeRootObject(obj *metadata.ObjectType) (any, error) {
	return e.ensureRootComponent(obj.Name, func() (map[string]any, error) {
		return e.buildObjectType(obj)
	})
}

func (e *jsonSchemaEncoder) encodeRootAlias(alias *metadata.AliasType) (any, error) {
	return e.ensureRootComponent(alias.Name, func() (map[string]any, error) {
		return e.buildAliasType(alias)
	})
}

func (e *jsonSchemaEncoder) ensureRootComponent(name string, build func() (map[string]any, error)) (map[string]any, error) {
	if name == "" {
		return build()
	}
	if _, ok := e.components[name]; ok {
		component, ok := e.components[name].(map[string]any)
		if ok {
			return component, nil
		}
	}
	e.components[name] = map[string]any{}
	encoded, err := build()
	if err != nil {
		delete(e.components, name)
		return nil, err
	}
	e.components[name] = encoded
	return encoded, nil
}

func (e *jsonSchemaEncoder) buildArrayType(arr *metadata.ArrayType) (map[string]any, error) {
	items := map[string]any{}
	if arr != nil && arr.Value != nil {
		inner, err := e.encodeSchema(arr.Value)
		if err != nil {
			return nil, err
		}
		items = toMap(inner)
	}
	return map[string]any{
		"type":  "array",
		"items": items,
	}, nil
}

func (e *jsonSchemaEncoder) buildTupleType(tuple *metadata.TupleType) (map[string]any, error) {
	prefix := make([]any, 0)
	if tuple != nil {
		prefix = make([]any, 0, len(tuple.Elements))
		for _, el := range tuple.Elements {
			inner, err := e.encodeSchema(el)
			if err != nil {
				return nil, err
			}
			prefix = append(prefix, inner)
		}
	}
	return map[string]any{
		"type":        "array",
		"prefixItems": prefix,
		"minItems":    len(prefix),
		"maxItems":    len(prefix),
	}, nil
}

func (e *jsonSchemaEncoder) buildObjectType(obj *metadata.ObjectType) (map[string]any, error) {
	properties := map[string]any{}
	required := make([]string, 0)
	if obj != nil {
		required = make([]string, 0, len(obj.Properties))
		for _, p := range obj.Properties {
			if p == nil || p.Key == nil {
				continue
			}
			name, ok := p.Key.GetSoleLiteral()
			if !ok {
				return nil, fmt.Errorf("%w: json schema does not support dynamic object keys", ErrUnsupportedSchema)
			}
			inner, err := e.encodeSchema(p.Value)
			if err != nil {
				return nil, err
			}
			properties[name] = inner
			if p.Value != nil && p.Value.IsRequired() {
				required = append(required, name)
			}
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

func (e *jsonSchemaEncoder) buildAliasType(alias *metadata.AliasType) (map[string]any, error) {
	if alias == nil || alias.Value == nil {
		return map[string]any{}, nil
	}
	inner, err := e.encodeSchema(alias.Value)
	if err != nil {
		return nil, err
	}
	return toMap(inner), nil
}

func expandSchemaCollectionInput(s *metadata.Schema) []*metadata.Schema {
	if s == nil {
		return nil
	}
	if len(s.Tuples) == 1 && s.Bucket() == 1 && s.Size() == 1 {
		tuple := s.Tuples[0]
		if tuple != nil && tuple.Type != nil && len(tuple.Type.Elements) != 0 {
			return tuple.Type.Elements
		}
	}
	return []*metadata.Schema{s}
}

// applyTagsToAtomic folds typia tags into OpenAPI-flavoured constraints on
// the atomic schema map.
func applyTagsToAtomic(out map[string]any, matrix metadata.TagMatrix) {
	if len(matrix) == 0 {
		return
	}
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

// toMap coerces the any produced by encodeSchema into a map so nested
// fields can be added by callers. Non-maps get wrapped in `{ "allOf": [...] }`.
func toMap(v any) map[string]any {
	if m, ok := v.(map[string]any); ok {
		return m
	}
	return map[string]any{"allOf": []any{v}}
}
