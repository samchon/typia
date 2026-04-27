package emitter

import (
	"encoding/json"
	"errors"
	"fmt"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitReflectSchemaExpression returns a JS expression matching
// IMetadataSchemaUnit.
func EmitReflectSchemaExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	unit := map[string]any{
		"schema":     serializeSchema(schema),
		"components": collectComponents([]*metadata.Schema{schema}),
	}
	raw, err := json.Marshal(unit)
	if err != nil {
		return "", fmt.Errorf("reflect.schema: %w", err)
	}
	return "(" + string(raw) + ")", nil
}

// EmitReflectSchemasExpression returns a JS expression matching
// IMetadataSchemaCollection.
func EmitReflectSchemasExpression(schemas []*metadata.Schema) (string, error) {
	if len(schemas) == 0 {
		return "", errors.New("emitter: empty schemas")
	}
	items := make([]any, 0, len(schemas))
	for _, schema := range schemas {
		items = append(items, serializeSchema(schema))
	}
	unit := map[string]any{
		"schemas":    items,
		"components": collectComponents(schemas),
	}
	raw, err := json.Marshal(unit)
	if err != nil {
		return "", fmt.Errorf("reflect.schemas: %w", err)
	}
	return "(" + string(raw) + ")", nil
}

func EmitReflectSchemasFromSchema(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	return EmitReflectSchemasExpression(expandReflectCollectionInput(schema))
}

// EmitReflectNameExpression returns the display name of the schema — useful
// for error messages and debugging.
func EmitReflectNameExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	return jsonQuote(displayName(schema)), nil
}

func collectComponents(roots []*metadata.Schema) map[string]any {
	arrays := make([]any, 0)
	tuples := make([]any, 0)
	objects := make([]any, 0)
	aliases := make([]any, 0)
	seenSchemas := map[*metadata.Schema]struct{}{}
	seenArrays := map[*metadata.ArrayType]struct{}{}
	seenTuples := map[*metadata.TupleType]struct{}{}
	seenObjects := map[*metadata.ObjectType]struct{}{}
	seenAliases := map[*metadata.AliasType]struct{}{}

	var visit func(*metadata.Schema)
	visit = func(schema *metadata.Schema) {
		if schema == nil {
			return
		}
		if _, ok := seenSchemas[schema]; ok {
			return
		}
		seenSchemas[schema] = struct{}{}
		for _, ref := range schema.Arrays {
			if ref == nil || ref.Type == nil {
				continue
			}
			if _, ok := seenArrays[ref.Type]; !ok {
				seenArrays[ref.Type] = struct{}{}
				arrays = append(arrays, serializeArrayType(ref.Type))
				visit(ref.Type.Value)
			}
		}
		for _, ref := range schema.Tuples {
			if ref == nil || ref.Type == nil {
				continue
			}
			if _, ok := seenTuples[ref.Type]; !ok {
				seenTuples[ref.Type] = struct{}{}
				tuples = append(tuples, serializeTupleType(ref.Type))
				for _, element := range ref.Type.Elements {
					visit(element)
				}
			}
		}
		for _, ref := range schema.Objects {
			if ref == nil || ref.Type == nil {
				continue
			}
			if _, ok := seenObjects[ref.Type]; !ok {
				seenObjects[ref.Type] = struct{}{}
				objects = append(objects, serializeObjectType(ref.Type))
				for _, prop := range ref.Type.Properties {
					if prop == nil {
						continue
					}
					visit(prop.Key)
					visit(prop.Value)
				}
			}
		}
		for _, ref := range schema.Aliases {
			if ref == nil || ref.Type == nil {
				continue
			}
			if _, ok := seenAliases[ref.Type]; !ok {
				seenAliases[ref.Type] = struct{}{}
				aliases = append(aliases, serializeAliasType(ref.Type))
				visit(ref.Type.Value)
			}
		}
		if schema.Rest != nil {
			visit(schema.Rest)
		}
		if schema.Escaped != nil {
			visit(schema.Escaped.Original)
			visit(schema.Escaped.Returns)
		}
		for _, set := range schema.Sets {
			if set != nil {
				visit(set.Value)
			}
		}
		for _, m := range schema.Maps {
			if m != nil {
				visit(m.Key)
				visit(m.Value)
			}
		}
		for _, fn := range schema.Functions {
			if fn == nil {
				continue
			}
			for _, param := range fn.Parameters {
				if param != nil {
					visit(param.Type)
				}
			}
			visit(fn.Output)
		}
	}
	for _, root := range roots {
		visit(root)
	}
	return map[string]any{
		"objects": objects,
		"aliases": aliases,
		"arrays":  arrays,
		"tuples":  tuples,
	}
}

func expandReflectCollectionInput(schema *metadata.Schema) []*metadata.Schema {
	if schema == nil {
		return nil
	}
	if len(schema.Tuples) == 1 && schema.Bucket() == 1 && schema.Size() == 1 {
		if tuple := schema.Tuples[0]; tuple != nil && tuple.Type != nil && len(tuple.Type.Elements) != 0 {
			return tuple.Type.Elements
		}
	}
	return []*metadata.Schema{schema}
}

func serializeSchema(schema *metadata.Schema) map[string]any {
	if schema == nil {
		return map[string]any{}
	}
	return map[string]any{
		"any":       schema.Any,
		"required":  schema.Required,
		"optional":  schema.Optional,
		"nullable":  schema.Nullable,
		"functions": serializeFunctions(schema.Functions),
		"atomics":   serializeAtomics(schema.Atomics),
		"constants": serializeConstants(schema.Constants),
		"templates": serializeTemplates(schema.Templates),
		"escaped":   serializeEscaped(schema.Escaped),
		"rest":      serializeSchemaOrNil(schema.Rest),
		"arrays":    serializeArrayRefs(schema.Arrays),
		"tuples":    serializeTupleRefs(schema.Tuples),
		"objects":   serializeObjectRefs(schema.Objects),
		"aliases":   serializeAliasRefs(schema.Aliases),
		"natives":   serializeNatives(schema.Natives),
		"sets":      serializeSets(schema.Sets),
		"maps":      serializeMaps(schema.Maps),
	}
}

func serializeSchemaOrNil(schema *metadata.Schema) any {
	if schema == nil {
		return nil
	}
	return serializeSchema(schema)
}

func serializeAtomics(values []metadata.Atomic) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		out = append(out, map[string]any{
			"type": value.Type,
			"tags": serializeTags(value.Tags),
		})
	}
	return out
}

func serializeConstants(values []metadata.Constant) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		items := make([]any, 0, len(value.Values))
		for _, item := range value.Values {
			items = append(items, map[string]any{
				"value": item.Value,
				"tags":  serializeTags(item.Tags),
			})
		}
		out = append(out, map[string]any{
			"type":   value.Type,
			"values": items,
		})
	}
	return out
}

func serializeTemplates(values []metadata.Template) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		out = append(out, map[string]any{
			"row":  serializeTemplateRow(value.RawName),
			"tags": serializeTags(value.Tags),
		})
	}
	return out
}

func serializeTemplateRow(raw string) []any {
	text := strings.TrimSpace(raw)
	if len(text) >= 2 && text[0] == '`' && text[len(text)-1] == '`' {
		text = text[1 : len(text)-1]
	}
	row := make([]any, 0)
	for len(text) != 0 {
		start := strings.Index(text, "${")
		if start < 0 {
			if text != "" {
				row = append(row, serializeStringConstantSchema(text))
			}
			break
		}
		if start != 0 {
			row = append(row, serializeStringConstantSchema(text[:start]))
		}
		rest := text[start+2:]
		end := strings.Index(rest, "}")
		if end < 0 {
			row = append(row, serializeStringConstantSchema(text[start:]))
			break
		}
		row = append(row, serializeTemplatePlaceholder(strings.TrimSpace(rest[:end])))
		text = rest[end+1:]
	}
	if len(row) == 0 {
		row = append(row, serializeStringConstantSchema(""))
	}
	return row
}

func serializeTemplatePlaceholder(name string) any {
	schema := metadata.NewSchema()
	switch name {
	case "string":
		schema.AddAtomic(metadata.AtomicString)
	case "number":
		schema.AddAtomic(metadata.AtomicNumber)
	case "bigint":
		schema.AddAtomic(metadata.AtomicBigint)
	case "boolean":
		schema.AddAtomic(metadata.AtomicBoolean)
	default:
		schema.Any = true
	}
	return serializeSchema(schema)
}

func serializeStringConstantSchema(value string) any {
	schema := metadata.NewSchema()
	schema.AddConstant(metadata.AtomicString, value)
	return serializeSchema(schema)
}

func serializeEscaped(value *metadata.Escaped) any {
	if value == nil {
		return nil
	}
	return map[string]any{
		"original": serializeSchema(value.Original),
		"returns":  serializeSchema(value.Returns),
	}
}

func serializeArrayRefs(values []*metadata.ArrayRef) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		if value == nil || value.Type == nil {
			continue
		}
		out = append(out, map[string]any{
			"name": reflectArrayTypeName(value.Type),
			"tags": serializeTags(value.Tags),
		})
	}
	return out
}

func serializeTupleRefs(values []*metadata.TupleRef) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		if value == nil || value.Type == nil {
			continue
		}
		out = append(out, map[string]any{
			"name": reflectTupleTypeName(value.Type),
			"tags": serializeTags(value.Tags),
		})
	}
	return out
}

func serializeObjectRefs(values []*metadata.ObjectRef) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		if value == nil || value.Type == nil {
			continue
		}
		out = append(out, map[string]any{
			"name": value.Type.Name,
			"tags": serializeTags(value.Tags),
		})
	}
	return out
}

func serializeAliasRefs(values []*metadata.AliasRef) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		if value == nil || value.Type == nil {
			continue
		}
		out = append(out, map[string]any{
			"name": value.Type.Name,
			"tags": serializeTags(value.Tags),
		})
	}
	return out
}

func serializeNatives(values []metadata.Native) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		out = append(out, map[string]any{
			"name": value.Name,
			"tags": serializeTags(value.Tags),
		})
	}
	return out
}

func serializeSets(values []*metadata.SetRef) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		if value == nil {
			continue
		}
		out = append(out, map[string]any{
			"value": serializeSchema(value.Value),
			"tags":  serializeTags(value.Tags),
		})
	}
	return out
}

func serializeMaps(values []*metadata.MapRef) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		if value == nil {
			continue
		}
		out = append(out, map[string]any{
			"key":   serializeSchema(value.Key),
			"value": serializeSchema(value.Value),
			"tags":  serializeTags(value.Tags),
		})
	}
	return out
}

func serializeFunctions(values []*metadata.Function) []any {
	out := make([]any, 0, len(values))
	for _, value := range values {
		if value == nil {
			continue
		}
		params := make([]any, 0, len(value.Parameters))
		for _, param := range value.Parameters {
			if param == nil {
				continue
			}
			params = append(params, map[string]any{
				"name":        param.Name,
				"type":        serializeSchema(param.Type),
				"description": nullableString(param.Description),
				"jsDocTags":   serializeJsDocTags(param.JsDocTagInfos, param.JsDocTags, param.JsDocTexts),
			})
		}
		out = append(out, map[string]any{
			"async":      value.Async,
			"parameters": params,
			"output":     serializeSchemaOrNil(value.Output),
		})
	}
	return out
}

func serializeArrayType(value *metadata.ArrayType) any {
	if value == nil {
		return nil
	}
	return map[string]any{
		"name":      reflectArrayTypeName(value),
		"value":     serializeSchema(value.Value),
		"nullables": value.Nullables,
		"recursive": value.Recursive,
		"index":     value.Index,
	}
}

func serializeTupleType(value *metadata.TupleType) any {
	if value == nil {
		return nil
	}
	elements := make([]any, 0, len(value.Elements))
	for _, element := range value.Elements {
		elements = append(elements, serializeSchema(element))
	}
	return map[string]any{
		"name":      reflectTupleTypeName(value),
		"elements":  elements,
		"index":     value.Index,
		"recursive": value.Recursive,
		"nullables": value.Nullables,
	}
}

func serializeObjectType(value *metadata.ObjectType) any {
	if value == nil {
		return nil
	}
	properties := make([]any, 0, len(value.Properties))
	for _, property := range value.Properties {
		if property == nil {
			continue
		}
		item := map[string]any{
			"key":         serializeSchema(property.Key),
			"value":       serializeSchema(property.Value),
			"description": nullableString(property.Description),
			"jsDocTags":   serializeJsDocTags(property.JsDocTagInfos, property.JsDocTags, property.JsDocTexts),
		}
		if property.Mutability != nil {
			item["mutability"] = *property.Mutability
		}
		properties = append(properties, item)
	}
	out := map[string]any{
		"name":       value.Name,
		"properties": properties,
		"jsDocTags":  serializeJsDocTags(value.JsDocTagInfos, value.JsDocTags, nil),
		"index":      value.Index,
		"recursive":  value.Recursive || objectTypeSelfRecursive(value),
		"nullables":  value.Nullables,
	}
	if value.Description != nil {
		out["description"] = *value.Description
	}
	return out
}

func serializeAliasType(value *metadata.AliasType) any {
	if value == nil {
		return nil
	}
	return map[string]any{
		"name":        value.Name,
		"value":       serializeSchema(value.Value),
		"nullables":   value.Nullables,
		"description": nullableString(value.Description),
		"jsDocTags":   serializeJsDocTags(value.JsDocTagInfos, value.JsDocTags, nil),
		"recursive":   value.Recursive,
	}
}

func nullableString(value *string) any {
	if value == nil {
		return nil
	}
	return *value
}

func serializeJsDocTags(infos []metadata.JsDocTagInfo, tags []string, texts map[string][]string) []any {
	if len(infos) != 0 {
		out := make([]any, 0, len(infos))
		for _, info := range infos {
			if strings.TrimSpace(info.Name) == "" {
				continue
			}
			item := map[string]any{"name": info.Name}
			if len(info.Text) != 0 {
				segments := make([]any, 0, len(info.Text))
				for _, segment := range info.Text {
					if strings.TrimSpace(segment.Text) == "" {
						continue
					}
					kind := segment.Kind
					if kind == "" {
						kind = "text"
					}
					segments = append(segments, map[string]any{
						"text": segment.Text,
						"kind": kind,
					})
				}
				if len(segments) != 0 {
					item["text"] = segments
				}
			}
			out = append(out, item)
		}
		return out
	}
	out := make([]any, 0, len(tags))
	for _, tag := range tags {
		item := map[string]any{"name": tag}
		if values := texts[tag]; len(values) != 0 {
			segments := make([]any, 0, len(values))
			for _, value := range values {
				if strings.TrimSpace(value) == "" {
					continue
				}
				segments = append(segments, map[string]any{
					"text": value,
					"kind": "text",
				})
			}
			if len(segments) != 0 {
				item["text"] = segments
			}
		}
		out = append(out, item)
	}
	return out
}

func serializeTags(matrix metadata.TagMatrix) []any {
	out := make([]any, 0, len(matrix))
	for _, row := range matrix {
		serialized := make([]any, 0, len(row))
		for _, tag := range row {
			serialized = append(serialized, map[string]any{
				"name":      tag.Name,
				"target":    tag.Target,
				"kind":      tag.Kind,
				"value":     tag.Value,
				"validate":  tag.Validate,
				"exclusive": tag.Exclusive,
				"schema":    tag.Schema,
			})
		}
		out = append(out, serialized)
	}
	return out
}

func reflectArrayTypeName(value *metadata.ArrayType) string {
	if value == nil {
		return "unknown[]"
	}
	if value.Name != "" && !strings.HasPrefix(value.Name, "Array") {
		return value.Name
	}
	return reflectSchemaName(value.Value) + "[]"
}

func reflectTupleTypeName(value *metadata.TupleType) string {
	if value == nil {
		return "[]"
	}
	if value.Name != "" &&
		value.Name != "Array" &&
		value.Name != "Tuple" &&
		!strings.HasPrefix(value.Name, "Type#") {
		return value.Name
	}
	parts := make([]string, 0, len(value.Elements))
	for _, element := range value.Elements {
		parts = append(parts, reflectSchemaName(element))
	}
	return "[" + join(parts, ", ") + "]"
}

func reflectSchemaName(schema *metadata.Schema) string {
	if schema == nil {
		return "unknown"
	}
	return displayName(schema)
}

func join(items []string, sep string) string {
	switch len(items) {
	case 0:
		return ""
	case 1:
		return items[0]
	}
	out := items[0]
	for _, item := range items[1:] {
		out += sep + item
	}
	return out
}

func displayName(schema *metadata.Schema) string {
	if schema == nil {
		return "unknown"
	}
	if schema.Any {
		return "any"
	}
	parts := make([]string, 0, schema.Size()+2)
	for _, atom := range schema.Atomics {
		parts = append(parts, string(atom.Type))
	}
	for _, constant := range schema.Constants {
		for _, value := range constant.Values {
			switch v := value.Value.(type) {
			case string:
				parts = append(parts, jsonQuote(v))
			case nil:
				parts = append(parts, "null")
			default:
				parts = append(parts, fmt.Sprintf("%v", v))
			}
		}
	}
	for _, tuple := range schema.Tuples {
		if tuple != nil && tuple.Type != nil {
			parts = append(parts, reflectTupleTypeName(tuple.Type))
		}
	}
	for _, array := range schema.Arrays {
		if array != nil && array.Type != nil {
			parts = append(parts, reflectArrayTypeName(array.Type))
		}
	}
	for _, object := range schema.Objects {
		if object != nil && object.Type != nil {
			parts = append(parts, object.Type.Name)
		}
	}
	for _, alias := range schema.Aliases {
		if alias != nil && alias.Type != nil {
			parts = append(parts, alias.Type.Name)
		}
	}
	for _, native := range schema.Natives {
		parts = append(parts, native.Name)
	}
	for _, set := range schema.Sets {
		if set != nil {
			parts = append(parts, "Set<"+displayName(set.Value)+">")
		}
	}
	for _, m := range schema.Maps {
		if m != nil {
			parts = append(parts, "Map<"+displayName(m.Key)+", "+displayName(m.Value)+">")
		}
	}
	if schema.Nullable {
		parts = append(parts, "null")
	}
	if !schema.IsRequired() {
		parts = append(parts, "undefined")
	}
	switch len(parts) {
	case 0:
		return "unknown"
	case 1:
		return parts[0]
	default:
		return join(parts, " | ")
	}
}

func objectTypeSelfRecursive(target *metadata.ObjectType) bool {
	if target == nil {
		return false
	}
	for _, property := range target.Properties {
		if property != nil && schemaReferencesObjectType(property.Value, target, map[*metadata.Schema]struct{}{}) {
			return true
		}
	}
	for _, property := range target.DynamicProperties {
		if property != nil && schemaReferencesObjectType(property.Value, target, map[*metadata.Schema]struct{}{}) {
			return true
		}
	}
	return schemaReferencesObjectType(target.AdditionalProperties, target, map[*metadata.Schema]struct{}{})
}

func schemaReferencesObjectType(
	schema *metadata.Schema,
	target *metadata.ObjectType,
	visited map[*metadata.Schema]struct{},
) bool {
	if schema == nil || target == nil {
		return false
	}
	if _, ok := visited[schema]; ok {
		return false
	}
	visited[schema] = struct{}{}
	for _, object := range schema.Objects {
		if object == nil || object.Type == nil {
			continue
		}
		if object.Type == target {
			return true
		}
		for _, property := range object.Type.Properties {
			if property != nil && schemaReferencesObjectType(property.Value, target, visited) {
				return true
			}
		}
		for _, property := range object.Type.DynamicProperties {
			if property != nil && schemaReferencesObjectType(property.Value, target, visited) {
				return true
			}
		}
		if schemaReferencesObjectType(object.Type.AdditionalProperties, target, visited) {
			return true
		}
	}
	for _, array := range schema.Arrays {
		if array != nil && array.Type != nil && schemaReferencesObjectType(array.Type.Value, target, visited) {
			return true
		}
	}
	for _, tuple := range schema.Tuples {
		if tuple == nil || tuple.Type == nil {
			continue
		}
		for _, element := range tuple.Type.Elements {
			if schemaReferencesObjectType(element, target, visited) {
				return true
			}
		}
	}
	for _, alias := range schema.Aliases {
		if alias != nil && alias.Type != nil && schemaReferencesObjectType(alias.Type.Value, target, visited) {
			return true
		}
	}
	for _, set := range schema.Sets {
		if set != nil && schemaReferencesObjectType(set.Value, target, visited) {
			return true
		}
	}
	for _, m := range schema.Maps {
		if m != nil && (schemaReferencesObjectType(m.Key, target, visited) || schemaReferencesObjectType(m.Value, target, visited)) {
			return true
		}
	}
	if schemaReferencesObjectType(schema.Rest, target, visited) {
		return true
	}
	if schema.Escaped != nil &&
		(schemaReferencesObjectType(schema.Escaped.Original, target, visited) ||
			schemaReferencesObjectType(schema.Escaped.Returns, target, visited)) {
		return true
	}
	for _, fn := range schema.Functions {
		if fn == nil {
			continue
		}
		for _, param := range fn.Parameters {
			if param != nil && schemaReferencesObjectType(param.Type, target, visited) {
				return true
			}
		}
		if schemaReferencesObjectType(fn.Output, target, visited) {
			return true
		}
	}
	return false
}
