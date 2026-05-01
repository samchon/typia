package json

import (
	"fmt"
	"reflect"
	"sort"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type jsonSchemasProgrammerNamespace struct{}

var JsonSchemasProgrammer = jsonSchemasProgrammerNamespace{}

type JsonSchemasProgrammer_IWriteProps struct {
	Context   nativecontext.ITypiaContext
	Version   string
	Metadatas []*nativemetadata.MetadataSchema
}

type JsonSchemasProgrammer_IJsonSchemaCollection struct {
	Version    string
	Components *nativeiterate.OpenApi_IComponents
	Schemas    []nativeiterate.JsonSchema
}

func (jsonSchemasProgrammerNamespace) Validate(props struct {
	Metadata *nativemetadata.MetadataSchema
	Explore  nativefactories.MetadataFactory_IExplore
}) []string {
	output := []string{}
	for _, atomic := range props.Metadata.Atomics {
		if atomic.Type == "bigint" {
			output = append(output, "JSON schema does not support bigint type.")
			break
		}
	}
	for _, constant := range props.Metadata.Constants {
		if constant.Type == "bigint" {
			output = append(output, "JSON schema does not support bigint type.")
			break
		}
	}
	tupleInvalid := false
	for _, tuple := range props.Metadata.Tuples {
		for _, element := range tuple.Type.Elements {
			if element.IsRequired() == false {
				tupleInvalid = true
				break
			}
		}
		if tupleInvalid {
			break
		}
	}
	arrayInvalid := false
	for _, array := range props.Metadata.Arrays {
		if array.Type.Value.IsRequired() == false {
			arrayInvalid = true
			break
		}
	}
	if tupleInvalid || arrayInvalid {
		output = append(output, "JSON schema does not support undefined type in array.")
	}
	if len(props.Metadata.Maps) != 0 {
		output = append(output, "JSON schema does not support Map type.")
	}
	if len(props.Metadata.Sets) != 0 {
		output = append(output, "JSON schema does not support Set type.")
	}
	for _, native := range props.Metadata.Natives {
		if nativehelpers.AtomicPredicator.Native(native.Name) == false &&
			native.Name != "Date" &&
			native.Name != "Blob" &&
			native.Name != "File" {
			output = append(output, "JSON schema does not support "+native.Name+" type.")
		}
	}
	return output
}

func (jsonSchemasProgrammerNamespace) Write(props JsonSchemasProgrammer_IWriteProps) *shimast.Node {
	collection := JsonSchemasProgrammer.WriteSchemas(struct {
		Version   string
		Metadatas []*nativemetadata.MetadataSchema
	}{
		Version:   props.Version,
		Metadatas: props.Metadatas,
	})
	return nativefactories.LiteralFactory.Write(map[string]any{
		"version":    collection.Version,
		"components": collection.Components,
		"schemas":    collection.Schemas,
	})
}

func (jsonSchemasProgrammerNamespace) WriteSchemas(props struct {
	Version   string
	Metadatas []*nativemetadata.MetadataSchema
}) JsonSchemasProgrammer_IJsonSchemaCollection {
	if props.Version == "3.0" {
		return jsonSchemasProgrammer_writeV3_0(props.Metadatas)
	}
	return jsonSchemasProgrammer_writeV3_1(props.Metadatas)
}

func jsonSchemasProgrammer_writeV3_0(metadataList []*nativemetadata.MetadataSchema) JsonSchemasProgrammer_IJsonSchemaCollection {
	collection := jsonSchemasProgrammer_writeV3_1(metadataList)
	downgraded := &nativeiterate.OpenApi_IComponents{Schemas: map[string]nativeiterate.JsonSchema{}}
	downgrade := &jsonSchemasProgrammer_v30DowngradeCollection{
		Original:   collection.Components,
		Downgraded: downgraded,
	}
	if collection.Components != nil && collection.Components.Schemas != nil {
		keys := make([]string, 0, len(collection.Components.Schemas))
		for key := range collection.Components.Schemas {
			keys = append(keys, key)
		}
		sort.Strings(keys)
		for _, key := range keys {
			downgraded.Schemas[key] = jsonSchemasProgrammer_downgradeV30Schema(downgrade, collection.Components.Schemas[key])
		}
	}
	schemas := make([]nativeiterate.JsonSchema, 0, len(collection.Schemas))
	for _, schema := range collection.Schemas {
		schemas = append(schemas, jsonSchemasProgrammer_downgradeV30Schema(downgrade, schema))
	}
	return JsonSchemasProgrammer_IJsonSchemaCollection{
		Version:    "3.0",
		Components: downgraded,
		Schemas:    schemas,
	}
}

type jsonSchemasProgrammer_v30DowngradeCollection struct {
	Original   *nativeiterate.OpenApi_IComponents
	Downgraded *nativeiterate.OpenApi_IComponents
}

func jsonSchemasProgrammer_downgradeV30Schema(collection *jsonSchemasProgrammer_v30DowngradeCollection, input nativeiterate.JsonSchema) nativeiterate.JsonSchema {
	nullable := jsonSchemasProgrammer_v30IsNullable(map[string]bool{}, collection.Original, input)
	union := []nativeiterate.JsonSchema{}
	attribute := jsonSchemasProgrammer_v30Attribute(input)

	var visit func(nativeiterate.JsonSchema)
	visit = func(schema nativeiterate.JsonSchema) {
		if schema == nil {
			return
		}
		if schema["type"] == "boolean" {
			union = append(union, nativeiterate.JsonSchema{"type": "boolean"})
			return
		}
		if schema["type"] == "integer" || schema["type"] == "number" || schema["type"] == "string" {
			union = append(union, jsonSchemasProgrammer_v30Clone(schema))
			return
		}
		if _, ok := schema["$ref"].(string); ok {
			union = append(union, jsonSchemasProgrammer_v30Clone(schema))
			return
		}
		if schema["type"] == "array" {
			output := jsonSchemasProgrammer_v30Clone(schema)
			if prefixItems := jsonSchemasProgrammer_v30SchemaArray(schema["prefixItems"]); len(prefixItems) != 0 {
				elements := append([]nativeiterate.JsonSchema{}, prefixItems...)
				if additional, ok := jsonSchemasProgrammer_v30SchemaFromAny(schema["additionalItems"]); ok {
					elements = append(elements, additional)
				}
				items := nativeiterate.JsonSchema{}
				if len(elements) != 0 {
					oneOf := make([]any, 0, len(elements))
					for _, elem := range elements {
						oneOf = append(oneOf, jsonSchemasProgrammer_downgradeV30Schema(collection, elem))
					}
					items["oneOf"] = oneOf
				}
				output["items"] = items
				output["minItems"] = len(prefixItems)
				if additional, exists := schema["additionalItems"]; exists == false || additional == false {
					output["maxItems"] = len(prefixItems)
				} else {
					delete(output, "maxItems")
				}
				delete(output, "prefixItems")
				delete(output, "additionalItems")
				union = append(union, output)
				return
			}
			if items, ok := jsonSchemasProgrammer_v30SchemaFromAny(schema["items"]); ok {
				output["items"] = jsonSchemasProgrammer_downgradeV30Schema(collection, items)
			}
			union = append(union, output)
			return
		}
		if schema["type"] == "object" {
			output := jsonSchemasProgrammer_v30Clone(schema)
			if properties, ok := jsonSchemasProgrammer_v30SchemaMap(schema["properties"]); ok {
				next := nativeiterate.JsonSchema{}
				keys := make([]string, 0, len(properties))
				for key := range properties {
					keys = append(keys, key)
				}
				sort.Strings(keys)
				for _, key := range keys {
					if value, ok := jsonSchemasProgrammer_v30SchemaFromAny(properties[key]); ok {
						next[key] = jsonSchemasProgrammer_downgradeV30Schema(collection, value)
					}
				}
				output["properties"] = next
			}
			if additional, ok := jsonSchemasProgrammer_v30SchemaFromAny(schema["additionalProperties"]); ok {
				output["additionalProperties"] = jsonSchemasProgrammer_downgradeV30Schema(collection, additional)
			}
			union = append(union, output)
			return
		}
		if oneOf := jsonSchemasProgrammer_v30SchemaArray(schema["oneOf"]); len(oneOf) != 0 {
			for _, elem := range oneOf {
				visit(elem)
			}
		}
	}

	var visitConstant func(nativeiterate.JsonSchema)
	visitConstant = func(schema nativeiterate.JsonSchema) {
		if schema == nil {
			return
		}
		if value, ok := schema["const"]; ok {
			insert := nativeiterate.JsonSchema{
				"type": jsonSchemasProgrammer_v30ConstantType(value),
				"enum": []any{value},
			}
			for _, elem := range union {
				if elem["type"] == insert["type"] {
					elem["enum"] = append(jsonSchemasProgrammer_v30Array(elem["enum"]), value)
					return
				}
			}
			union = append(union, insert)
			return
		}
		for _, elem := range jsonSchemasProgrammer_v30SchemaArray(schema["oneOf"]) {
			if _, ok := elem["const"]; ok {
				visitConstant(elem)
			}
		}
	}

	visit(input)
	visitConstant(input)
	if nullable {
		for _, elem := range union {
			if _, ok := elem["$ref"].(string); ok {
				jsonSchemasProgrammer_v30DowngradeNullableReference(map[string]bool{}, collection, elem)
			} else {
				elem["nullable"] = true
			}
		}
	}
	if nullable && len(union) == 0 {
		output := nativeiterate.JsonSchema{"type": "null"}
		jsonSchemasProgrammer_v30Assign(output, attribute)
		return output
	}
	var output nativeiterate.JsonSchema
	if len(union) == 0 {
		output = nativeiterate.JsonSchema{"type": nil}
	} else if len(union) == 1 {
		output = jsonSchemasProgrammer_v30Clone(union[0])
	} else {
		oneOf := make([]any, 0, len(union))
		for _, elem := range union {
			oneOf = append(oneOf, elem)
		}
		output = nativeiterate.JsonSchema{"oneOf": oneOf}
	}
	jsonSchemasProgrammer_v30Assign(output, attribute)
	return output
}

func jsonSchemasProgrammer_v30DowngradeNullableReference(visited map[string]bool, collection *jsonSchemasProgrammer_v30DowngradeCollection, schema nativeiterate.JsonSchema) {
	ref, ok := schema["$ref"].(string)
	if ok == false {
		return
	}
	key := jsonSchemasProgrammer_v30RefKey(ref)
	if strings.HasSuffix(key, ".Nullable") {
		return
	}
	if collection.Original == nil || collection.Original.Schemas == nil {
		return
	}
	found, ok := collection.Original.Schemas[key]
	if ok == false {
		return
	}
	if jsonSchemasProgrammer_v30IsNullable(visited, collection.Original, found) {
		return
	}
	nullableKey := key + ".Nullable"
	if collection.Downgraded.Schemas == nil {
		collection.Downgraded.Schemas = map[string]nativeiterate.JsonSchema{}
	}
	if _, exists := collection.Downgraded.Schemas[nullableKey]; exists == false {
		collection.Downgraded.Schemas[nullableKey] = nativeiterate.JsonSchema{}
		wrapped := nativeiterate.JsonSchema{}
		if oneOf := jsonSchemasProgrammer_v30SchemaArray(found["oneOf"]); len(oneOf) != 0 {
			next := make([]any, 0, len(oneOf)+1)
			for _, elem := range oneOf {
				next = append(next, elem)
			}
			next = append(next, nativeiterate.JsonSchema{"type": "null"})
			wrapped = jsonSchemasProgrammer_v30Clone(found)
			wrapped["oneOf"] = next
		} else {
			wrapped["oneOf"] = []any{found, nativeiterate.JsonSchema{"type": "null"}}
			for _, key := range []string{"title", "description", "example", "examples"} {
				if value, ok := found[key]; ok {
					wrapped[key] = value
				}
			}
			for key, value := range found {
				if strings.HasPrefix(key, "x-") && jsonSchemasProgrammer_v30IsNilLike(value) == false {
					wrapped[key] = value
				}
			}
		}
		collection.Downgraded.Schemas[nullableKey] = jsonSchemasProgrammer_downgradeV30Schema(collection, wrapped)
	}
	schema["$ref"] = ref + ".Nullable"
}

func jsonSchemasProgrammer_v30IsNullable(visited map[string]bool, components *nativeiterate.OpenApi_IComponents, schema nativeiterate.JsonSchema) bool {
	if schema == nil {
		return false
	}
	if schema["type"] == "null" {
		return true
	}
	if ref, ok := schema["$ref"].(string); ok {
		if visited[ref] {
			return false
		}
		visited[ref] = true
		if components == nil || components.Schemas == nil {
			return false
		}
		if next, ok := components.Schemas[jsonSchemasProgrammer_v30RefKey(ref)]; ok {
			return jsonSchemasProgrammer_v30IsNullable(visited, components, next)
		}
		return false
	}
	for _, elem := range jsonSchemasProgrammer_v30SchemaArray(schema["oneOf"]) {
		if jsonSchemasProgrammer_v30IsNullable(visited, components, elem) {
			return true
		}
	}
	return false
}

func jsonSchemasProgrammer_v30Attribute(input nativeiterate.JsonSchema) nativeiterate.JsonSchema {
	output := nativeiterate.JsonSchema{}
	for _, key := range []string{"title", "description", "deprecated", "readOnly", "writeOnly", "example", "examples"} {
		if value, ok := input[key]; ok && jsonSchemasProgrammer_v30IsNilLike(value) == false {
			output[key] = value
		}
	}
	for key, value := range input {
		if strings.HasPrefix(key, "x-") && jsonSchemasProgrammer_v30IsNilLike(value) == false {
			output[key] = value
		}
	}
	return output
}

func jsonSchemasProgrammer_v30Clone(input nativeiterate.JsonSchema) nativeiterate.JsonSchema {
	output := nativeiterate.JsonSchema{}
	for key, value := range input {
		if jsonSchemasProgrammer_v30IsNilLike(value) {
			continue
		}
		output[key] = value
	}
	return output
}

func jsonSchemasProgrammer_v30Assign(target nativeiterate.JsonSchema, source nativeiterate.JsonSchema) {
	for key, value := range source {
		target[key] = value
	}
}

func jsonSchemasProgrammer_v30SchemaFromAny(value any) (nativeiterate.JsonSchema, bool) {
	switch v := value.(type) {
	case nativeiterate.JsonSchema:
		return v, true
	case map[string]any:
		return nativeiterate.JsonSchema(v), true
	default:
		return nil, false
	}
}

func jsonSchemasProgrammer_v30SchemaArray(value any) []nativeiterate.JsonSchema {
	switch v := value.(type) {
	case []nativeiterate.JsonSchema:
		return append([]nativeiterate.JsonSchema{}, v...)
	case []map[string]any:
		output := make([]nativeiterate.JsonSchema, 0, len(v))
		for _, elem := range v {
			output = append(output, nativeiterate.JsonSchema(elem))
		}
		return output
	case []any:
		output := make([]nativeiterate.JsonSchema, 0, len(v))
		for _, elem := range v {
			if schema, ok := jsonSchemasProgrammer_v30SchemaFromAny(elem); ok {
				output = append(output, schema)
			}
		}
		return output
	default:
		return nil
	}
}

func jsonSchemasProgrammer_v30SchemaMap(value any) (map[string]any, bool) {
	switch v := value.(type) {
	case nativeiterate.JsonSchema:
		output := map[string]any{}
		for key, elem := range v {
			output[key] = elem
		}
		return output, true
	case map[string]any:
		return v, true
	default:
		return nil, false
	}
}

func jsonSchemasProgrammer_v30Array(value any) []any {
	switch v := value.(type) {
	case []any:
		return append([]any{}, v...)
	case []string:
		output := make([]any, 0, len(v))
		for _, elem := range v {
			output = append(output, elem)
		}
		return output
	case []nativeiterate.JsonSchema:
		output := make([]any, 0, len(v))
		for _, elem := range v {
			output = append(output, elem)
		}
		return output
	default:
		return []any{}
	}
}

func jsonSchemasProgrammer_v30ConstantType(value any) string {
	reflected := reflect.ValueOf(value)
	if reflected.IsValid() {
		switch reflected.Kind() {
		case reflect.Bool:
			return "boolean"
		case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64,
			reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64, reflect.Uintptr,
			reflect.Float32, reflect.Float64:
			return "number"
		case reflect.String:
			return "string"
		}
	}
	switch value.(type) {
	case bool:
		return "boolean"
	case int, int64, float64:
		return "number"
	case string:
		return "string"
	default:
		return fmt.Sprintf("%T", value)
	}
}

func jsonSchemasProgrammer_v30RefKey(ref string) string {
	if index := strings.LastIndex(ref, "/"); index != -1 {
		return ref[index+1:]
	}
	return ref
}

func jsonSchemasProgrammer_v30IsNilLike(value any) bool {
	if value == nil {
		return true
	}
	reflected := reflect.ValueOf(value)
	switch reflected.Kind() {
	case reflect.Chan, reflect.Func, reflect.Interface, reflect.Map, reflect.Pointer, reflect.Slice:
		return reflected.IsNil()
	default:
		return false
	}
}

func jsonSchemasProgrammer_writeV3_1(metadataList []*nativemetadata.MetadataSchema) JsonSchemasProgrammer_IJsonSchemaCollection {
	components := &nativeiterate.OpenApi_IComponents{
		Schemas: map[string]nativeiterate.JsonSchema{},
	}
	generator := func(metadata *nativemetadata.MetadataSchema) nativeiterate.JsonSchema {
		return nativeiterate.Json_schema_station(nativeiterate.Json_schema_station_props{
			BlockNever: true,
			Components: components,
			Attribute:  nativeiterate.JsonSchema{},
			Metadata:   metadata,
		})
	}
	schemas := make([]nativeiterate.JsonSchema, 0, len(metadataList))
	for i, meta := range metadataList {
		schema := generator(meta)
		if schema == nil {
			panic(nativecontext.NewTransformerError(nativecontext.TransformerError_IProps{
				Code:    "typia.json.schemas",
				Message: fmt.Sprintf("invalid type on argument - (%s, %d)", meta.GetName(), i),
			}))
		}
		schemas = append(schemas, schema)
	}
	return JsonSchemasProgrammer_IJsonSchemaCollection{
		Version:    "3.1",
		Components: components,
		Schemas:    schemas,
	}
}
