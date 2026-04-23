package emitter

import (
	"encoding/json"
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitJsonSchemaExpression returns a JS expression whose runtime value is the
// OpenAPI v3.1-compatible JSON Schema representation of the supplied
// MetadataSchema.
func EmitJsonSchemaExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if unsupported, ok := findUnsupportedJSONShape(schema); ok {
		return "", fmt.Errorf("%w: json schema does not support %s", ErrUnsupportedSchema, unsupported)
	}
	encoder := newJSONSchemaEncoder(false)
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
	encoder := newJSONSchemaEncoder(false)
	items := expandSchemaCollectionInput(schema)
	schemas := make([]any, 0, len(items))
	for _, item := range items {
		converted, err := encoder.encodeCollectionItem(item)
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

// EmitRandomSchemaExpression returns the JSON-schema wrapper consumed by the
// native random emitter. This path keeps bigint intent through a custom
// extension field so runtime generation can still produce bigint values.
func EmitRandomSchemaExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	encoder := newJSONSchemaEncoder(true)
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

// EmitJsonSchemaArrowFunction wraps the expression in a factory-style arrow
// so typia.json.schema<T>() can return the schema on invocation.
func EmitJsonSchemaArrowFunction(schema *metadata.Schema) (string, error) {
	expr, err := EmitJsonSchemaExpression(schema)
	if err != nil {
		return "", err
	}
	return "() => " + expr, nil
}

func normalizeBigintJSONValue(value any) string {
	text := fmt.Sprint(value)
	return strings.TrimSuffix(text, "n")
}

type jsonSchemaEncoder struct {
	allowBigint bool
	components  map[string]any
}

func newJSONSchemaEncoder(allowBigint bool) *jsonSchemaEncoder {
	return &jsonSchemaEncoder{
		allowBigint: allowBigint,
		components:  map[string]any{},
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
		if atom.Type == metadata.AtomicBigint && e.allowBigint {
			alt = map[string]any{
				"type":           "integer",
				"x-typia-bigint": true,
			}
		}
		applyTagsToAtomic(alt, atom.Tags)
		alternatives = append(alternatives, alt)
	}
	for _, c := range s.Constants {
		for _, v := range c.Values {
			alt := map[string]any{"type": string(c.Type), "const": v.Value}
			if c.Type == metadata.AtomicBigint && e.allowBigint {
				alt = map[string]any{
					"type":           "integer",
					"const":          normalizeBigintJSONValue(v.Value),
					"x-typia-bigint": true,
				}
			}
			alternatives = append(alternatives, alt)
		}
	}
	for _, t := range s.Templates {
		alt := map[string]any{"type": "string"}
		if pattern, ok := templateLiteralPattern(t.RawName); ok {
			alt["pattern"] = pattern
		}
		applyTagsToAtomic(alt, t.Tags)
		alternatives = append(alternatives, alt)
	}
	for _, ref := range s.Arrays {
		if ref == nil || ref.Type == nil {
			continue
		}
		alt, err := e.encodeArrayRef(ref)
		if err != nil {
			return nil, err
		}
		if arrayMap, ok := alt.(map[string]any); ok {
			applyTagsToArray(arrayMap, ref.Tags)
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
	for _, ref := range s.Sets {
		if ref == nil {
			continue
		}
		alt, err := e.encodeSetRef(ref)
		if err != nil {
			return nil, err
		}
		alternatives = append(alternatives, alt)
	}
	for _, ref := range s.Maps {
		if ref == nil {
			continue
		}
		alt, err := e.encodeMapRef(ref)
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
	if discriminator := e.discriminatorForOneOf(alternatives); discriminator != nil {
		return map[string]any{
			"oneOf":         alternatives,
			"discriminator": discriminator,
		}, nil
	}
	return map[string]any{"oneOf": alternatives}, nil
}

func (e *jsonSchemaEncoder) encodeCollectionItem(s *metadata.Schema) (any, error) {
	if s == nil {
		return map[string]any{}, nil
	}
	if !s.Nullable && s.Bucket() == 1 && s.Size() == 1 {
		if len(s.Arrays) == 1 && s.Arrays[0] != nil && s.Arrays[0].Type != nil {
			encoded, err := e.encodeRootArray(s.Arrays[0].Type)
			if err != nil {
				return nil, err
			}
			if m, ok := encoded.(map[string]any); ok {
				applyTagsToArray(m, s.Arrays[0].Tags)
			}
			return encoded, nil
		}
		if len(s.Tuples) == 1 && s.Tuples[0] != nil && s.Tuples[0].Type != nil {
			encoded, err := e.encodeRootTuple(s.Tuples[0].Type)
			if err != nil {
				return nil, err
			}
			if m, ok := encoded.(map[string]any); ok {
				applyTagsToArray(m, s.Tuples[0].Tags)
			}
			return encoded, nil
		}
		if len(s.Objects) == 1 && s.Objects[0] != nil && s.Objects[0].Type != nil &&
			shouldInlineCollectionRoot(s.Objects[0].Type.Name) {
			return e.encodeRootObject(s.Objects[0].Type)
		}
		if len(s.Aliases) == 1 && s.Aliases[0] != nil && s.Aliases[0].Type != nil &&
			shouldInlineCollectionRoot(s.Aliases[0].Type.Name) {
			return e.encodeRootAlias(s.Aliases[0].Type)
		}
	}
	return e.encodeSchema(s)
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
			encoded, err := e.encodeRootArray(s.Arrays[0].Type)
			if err != nil {
				return nil, err
			}
			if m, ok := encoded.(map[string]any); ok {
				applyTagsToArray(m, s.Arrays[0].Tags)
			}
			return encoded, nil
		}
		if len(s.Tuples) == 1 && s.Tuples[0] != nil && s.Tuples[0].Type != nil {
			encoded, err := e.encodeRootTuple(s.Tuples[0].Type)
			if err != nil {
				return nil, err
			}
			if m, ok := encoded.(map[string]any); ok {
				applyTagsToArray(m, s.Tuples[0].Tags)
			}
			return encoded, nil
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
	if shouldInlineSyntheticComponent(ref.Type.Name, ref.Type.Recursive) {
		return e.buildArrayType(ref.Type)
	}
	return e.ensureComponent(ref.Type.Name, func() (map[string]any, error) {
		return e.buildArrayType(ref.Type)
	})
}

func (e *jsonSchemaEncoder) encodeTupleRef(ref *metadata.TupleRef) (any, error) {
	if ref == nil || ref.Type == nil {
		return map[string]any{}, nil
	}
	if shouldInlineSyntheticComponent(ref.Type.Name, ref.Type.Recursive) {
		return e.buildTupleType(ref.Type)
	}
	return e.ensureComponent(ref.Type.Name, func() (map[string]any, error) {
		return e.buildTupleType(ref.Type)
	})
}

func (e *jsonSchemaEncoder) encodeObjectRef(ref *metadata.ObjectRef) (any, error) {
	if ref == nil || ref.Type == nil {
		return map[string]any{}, nil
	}
	if shouldInlineSyntheticComponent(ref.Type.Name, ref.Type.Recursive) {
		return e.buildObjectType(ref.Type)
	}
	return e.ensureComponent(ref.Type.Name, func() (map[string]any, error) {
		return e.buildObjectType(ref.Type)
	})
}

func (e *jsonSchemaEncoder) encodeAliasRef(ref *metadata.AliasRef) (any, error) {
	if ref == nil || ref.Type == nil {
		return map[string]any{}, nil
	}
	if shouldInlineSyntheticComponent(ref.Type.Name, ref.Type.Recursive) {
		return e.buildAliasType(ref.Type)
	}
	return e.ensureComponent(ref.Type.Name, func() (map[string]any, error) {
		return e.buildAliasType(ref.Type)
	})
}

func (e *jsonSchemaEncoder) encodeSetRef(ref *metadata.SetRef) (map[string]any, error) {
	items := map[string]any{}
	if ref != nil && ref.Value != nil {
		inner, err := e.encodeSchema(ref.Value)
		if err != nil {
			return nil, err
		}
		items = toMap(inner)
	}
	out := map[string]any{
		"type":           "array",
		"items":          items,
		"uniqueItems":    true,
		"x-typia-native": "Set",
	}
	applyTagsToArray(out, ref.Tags)
	return out, nil
}

func (e *jsonSchemaEncoder) encodeMapRef(ref *metadata.MapRef) (map[string]any, error) {
	key := map[string]any{}
	if ref != nil && ref.Key != nil {
		inner, err := e.encodeSchema(ref.Key)
		if err != nil {
			return nil, err
		}
		key = toMap(inner)
	}
	value := map[string]any{}
	if ref != nil && ref.Value != nil {
		inner, err := e.encodeSchema(ref.Value)
		if err != nil {
			return nil, err
		}
		value = toMap(inner)
	}
	return map[string]any{
		"type":           "array",
		"x-typia-native": "Map",
		"items": map[string]any{
			"type":        "array",
			"prefixItems": []any{key, value},
			"minItems":    2,
			"maxItems":    2,
		},
	}, nil
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

func shouldInlineSyntheticComponent(name string, recursive bool) bool {
	if name == "" {
		return true
	}
	if recursive {
		return false
	}
	return name == "Tuple" ||
		strings.HasPrefix(name, "TypeLiteral#") ||
		strings.HasPrefix(name, "Interface#")
}

func (e *jsonSchemaEncoder) buildArrayType(arr *metadata.ArrayType) (map[string]any, error) {
	items := map[string]any{}
	if arr != nil && arr.Value != nil {
		inner, err := e.encodeObjectProperty(arr.Value)
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
	required := 0
	var restSchema *metadata.Schema
	if tuple != nil {
		prefix = make([]any, 0, len(tuple.Elements))
		for _, el := range tuple.Elements {
			if el != nil && el.Rest != nil {
				restSchema = el.Rest
				continue
			}
			inner, err := e.encodeObjectProperty(el)
			if err != nil {
				return nil, err
			}
			prefix = append(prefix, inner)
			if el != nil && !el.Optional {
				required++
			}
		}
	}
	out := map[string]any{
		"type":        "array",
		"prefixItems": prefix,
		"minItems":    required,
	}
	if restSchema == nil {
		out["maxItems"] = len(prefix)
		return out, nil
	}
	items, err := e.encodeObjectProperty(restSchema)
	if err != nil {
		return nil, err
	}
	out["items"] = items
	return out, nil
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
			inner, err := e.encodeObjectProperty(p.Value)
			if err != nil {
				return nil, err
			}
			if p.Description != nil {
				if property, ok := inner.(map[string]any); ok {
					property["description"] = *p.Description
				}
			}
			properties[name] = inner
			if p.Value != nil && p.Value.IsRequired() {
				required = append(required, name)
			}
		}
	}
	additionalProperties := any(false)
	if obj != nil && obj.AdditionalProperties != nil {
		inner, err := e.encodeObjectProperty(obj.AdditionalProperties)
		if err != nil {
			return nil, err
		}
		additionalProperties = inner
	}
	sort.Strings(required)
	out := map[string]any{
		"type":                 "object",
		"properties":           properties,
		"required":             required,
		"additionalProperties": additionalProperties,
	}
	if obj != nil && obj.Description != nil {
		out["description"] = *obj.Description
	}
	return out, nil
}

func (e *jsonSchemaEncoder) buildAliasType(alias *metadata.AliasType) (map[string]any, error) {
	if alias == nil || alias.Value == nil {
		return map[string]any{}, nil
	}
	inner, err := e.encodeSchema(alias.Value)
	if err != nil {
		return nil, err
	}
	out := toMap(inner)
	if alias.Description != nil {
		out["description"] = *alias.Description
	}
	return out, nil
}

func (e *jsonSchemaEncoder) encodeObjectProperty(s *metadata.Schema) (any, error) {
	if s == nil {
		return map[string]any{}, nil
	}
	if !s.Nullable && s.Bucket() == 1 && s.Size() == 1 {
		if len(s.Objects) == 1 && s.Objects[0] != nil && s.Objects[0].Type != nil &&
			shouldInlineCollectionRoot(s.Objects[0].Type.Name) {
			return e.buildObjectType(s.Objects[0].Type)
		}
		if len(s.Aliases) == 1 && s.Aliases[0] != nil && s.Aliases[0].Type != nil &&
			shouldInlineCollectionRoot(s.Aliases[0].Type.Name) {
			return e.buildAliasType(s.Aliases[0].Type)
		}
		if len(s.Arrays) == 1 && s.Arrays[0] != nil && s.Arrays[0].Type != nil {
			alt, err := e.buildArrayType(s.Arrays[0].Type)
			if err != nil {
				return nil, err
			}
			applyTagsToArray(alt, s.Arrays[0].Tags)
			return alt, nil
		}
		if len(s.Tuples) == 1 && s.Tuples[0] != nil && s.Tuples[0].Type != nil {
			alt, err := e.buildTupleType(s.Tuples[0].Type)
			if err != nil {
				return nil, err
			}
			applyTagsToArray(alt, s.Tuples[0].Tags)
			return alt, nil
		}
	}
	return e.encodeSchema(s)
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
		if schema, ok := tag.Schema.(map[string]any); ok {
			for key, value := range schema {
				out[key] = value
			}
		}
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
		case "type":
			if v, ok := tag.Value.(string); ok {
				switch v {
				case "int32", "uint32", "int64", "uint64":
					out["type"] = "integer"
					out["format"] = v
				case "float", "double":
					out["type"] = "number"
					out["format"] = v
				}
			}
		}
	}
}

func applyTagsToArray(out map[string]any, matrix metadata.TagMatrix) {
	if len(matrix) == 0 {
		return
	}
	for _, tag := range matrix[0] {
		switch tag.Kind {
		case "minItems":
			out["minItems"] = tag.Value
		case "maxItems":
			out["maxItems"] = tag.Value
		case "uniqueItems":
			out["uniqueItems"] = tag.Value
		}
	}
}

func shouldInlineCollectionRoot(name string) bool {
	name = strings.TrimSpace(name)
	if name == "" || name == "Tuple" {
		return true
	}
	if strings.HasSuffix(name, "[]") {
		return shouldInlineCollectionRoot(strings.TrimSuffix(name, "[]"))
	}
	return strings.HasPrefix(name, "TypeLiteral#") ||
		strings.HasPrefix(name, "Interface#") ||
		strings.HasPrefix(name, "Type#") ||
		strings.HasPrefix(name, "Intersection<")
}

func (e *jsonSchemaEncoder) discriminatorForOneOf(alternatives []any) map[string]any {
	property := ""
	for _, candidate := range alternatives {
		schema, ok := candidate.(map[string]any)
		if !ok {
			return nil
		}
		resolved := schema
		if ref, ok := schema["$ref"].(string); ok {
			key := strings.TrimPrefix(ref, "#/components/schemas/")
			component, ok := e.components[key].(map[string]any)
			if !ok {
				return nil
			}
			resolved = component
		}
		props, ok := resolved["properties"].(map[string]any)
		if !ok {
			return nil
		}
		for key, value := range props {
			prop, ok := value.(map[string]any)
			if !ok {
				continue
			}
			if _, ok := prop["const"]; ok {
				if property == "" {
					property = key
				} else if property != key {
					return nil
				}
				goto matched
			}
		}
		return nil
	matched:
	}
	if property == "" {
		return nil
	}
	return map[string]any{"propertyName": property}
}

// nativeToJSONSchema maps a native JS class name to its OpenAPI 3.1 encoding.
func nativeToJSONSchema(name string) map[string]any {
	switch name {
	case "Boolean":
		return map[string]any{"type": "boolean", "x-typia-native": "Boolean"}
	case "Number":
		return map[string]any{"type": "number", "x-typia-native": "Number"}
	case "String":
		return map[string]any{"type": "string", "x-typia-native": "String"}
	case "Date":
		return map[string]any{"type": "string", "format": "date-time", "x-typia-native": "Date"}
	case "Blob":
		return map[string]any{"type": "string", "format": "binary", "x-typia-native": "Blob"}
	case "File":
		return map[string]any{"type": "string", "format": "binary", "x-typia-native": "File"}
	case "Uint8Array", "Buffer":
		return map[string]any{"type": "string", "format": "byte", "x-typia-native": name}
	case "URL":
		return map[string]any{"type": "string", "format": "uri", "x-typia-native": "URL"}
	case "RegExp":
		return map[string]any{"type": "string", "format": "regex", "x-typia-native": "RegExp"}
	case "Set":
		return map[string]any{"type": "array", "items": map[string]any{}, "uniqueItems": true, "x-typia-native": "Set"}
	case "Map":
		return map[string]any{"type": "array", "items": map[string]any{}, "x-typia-native": "Map"}
	case "Int8Array", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array",
		"Float32Array", "Float64Array", "Uint8ClampedArray":
		return map[string]any{"type": "array", "items": map[string]any{"type": "number"}, "x-typia-native": name}
	case "BigInt64Array", "BigUint64Array":
		return map[string]any{"type": "array", "items": map[string]any{"type": "integer", "x-typia-bigint": true}, "x-typia-native": name}
	case "ArrayBuffer", "SharedArrayBuffer", "DataView":
		return map[string]any{"type": "object", "x-typia-native": name}
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
