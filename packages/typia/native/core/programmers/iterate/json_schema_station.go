package iterate

import (
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type json_schema_station_props struct {
	blockNever bool
	components *OpenApi_IComponents
	attribute  JsonSchema
	metadata   *nativemetadata.MetadataSchema
}

type Json_schema_station_props struct {
	BlockNever bool
	Components *OpenApi_IComponents
	Attribute  JsonSchema
	Metadata   *nativemetadata.MetadataSchema
}

func Json_schema_station(props Json_schema_station_props) JsonSchema {
	return json_schema_station(json_schema_station_props{
		blockNever: props.BlockNever,
		components: props.Components,
		attribute:  props.Attribute,
		metadata:   props.Metadata,
	})
}

func json_schema_station(props json_schema_station_props) JsonSchema {
	if props.metadata.Any {
		output := cloneJsonSchema(props.attribute)
		if _, ok := output["type"]; ok == false {
			output["type"] = nil
		}
		return output
	}

	union := []JsonSchema{}
	insert := func(schema JsonSchema) {
		if schema != nil {
			union = append(union, schema)
		}
	}

	if props.metadata.Nullable {
		insert(JsonSchema{"type": "null"})
	}
	if props.metadata.Escaped != nil {
		for _, schema := range json_schema_escaped(struct {
			components *OpenApi_IComponents
			escaped    *nativemetadata.MetadataEscaped
		}{components: props.components, escaped: props.metadata.Escaped}) {
			insert(schema)
		}
	}
	if len(props.metadata.Templates) != 0 && nativehelpers.AtomicPredicator.Template(props.metadata) {
		for _, schema := range json_schema_templates(props.metadata) {
			insert(schema)
		}
	}
	for _, constant := range props.metadata.Constants {
		if nativehelpers.AtomicPredicator.Constant(struct {
			Metadata *nativemetadata.MetadataSchema
			Name     string
		}{Metadata: props.metadata, Name: constant.Type}) == false {
			continue
		}
		for _, schema := range json_schema_constant(constant) {
			insert(schema)
		}
	}
	for _, atomic := range props.metadata.Atomics {
		if atomic.Type == "boolean" {
			for _, schema := range json_schema_boolean(atomic) {
				insert(schema)
			}
		} else if atomic.Type == "bigint" {
			for _, schema := range json_schema_bigint(atomic) {
				insert(schema)
			}
		} else if atomic.Type == "number" {
			for _, schema := range json_schema_number(atomic) {
				insert(schema)
			}
		} else if atomic.Type == "string" {
			for _, schema := range json_schema_string(atomic) {
				insert(schema)
			}
		}
	}
	for _, array := range props.metadata.Arrays {
		for _, schema := range json_schema_array(struct {
			components *OpenApi_IComponents
			array      *nativemetadata.MetadataArray
		}{components: props.components, array: array}) {
			insert(schema)
		}
	}
	for _, tuple := range props.metadata.Tuples {
		insert(json_schema_tuple(struct {
			components *OpenApi_IComponents
			tuple      *nativemetadata.MetadataTuple
		}{components: props.components, tuple: tuple}))
	}
	for _, native := range props.metadata.Natives {
		if nativehelpers.AtomicPredicator.Native(native.Name) {
			typ := lowerAscii(native.Name)
			if json_schema_station_has_atomic(props.metadata, typ) {
				continue
			}
			atomic := nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: typ, Tags: [][]nativemetadata.IMetadataTypeTag{}})
			if typ == "boolean" {
				for _, schema := range json_schema_boolean(atomic) {
					insert(schema)
				}
			} else if typ == "bigint" {
				for _, schema := range json_schema_bigint(atomic) {
					insert(schema)
				}
			} else if typ == "number" {
				for _, schema := range json_schema_number(atomic) {
					insert(schema)
				}
			} else if typ == "string" {
				for _, schema := range json_schema_string(atomic) {
					insert(schema)
				}
			}
		} else {
			for _, schema := range json_schema_native(struct {
				components *OpenApi_IComponents
				native     *nativemetadata.MetadataNative
			}{components: props.components, native: native}) {
				insert(schema)
			}
		}
	}
	if len(props.metadata.Sets) != 0 {
		for _, schema := range json_schema_native(struct {
			components *OpenApi_IComponents
			native     *nativemetadata.MetadataNative
		}{components: props.components, native: nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Set", Tags: [][]nativemetadata.IMetadataTypeTag{}})}) {
			insert(schema)
		}
	}
	if len(props.metadata.Maps) != 0 {
		for _, schema := range json_schema_native(struct {
			components *OpenApi_IComponents
			native     *nativemetadata.MetadataNative
		}{components: props.components, native: nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Map", Tags: [][]nativemetadata.IMetadataTypeTag{}})}) {
			insert(schema)
		}
	}
	for _, object := range props.metadata.Objects {
		for _, schema := range json_schema_object(struct {
			components *OpenApi_IComponents
			object     *nativemetadata.MetadataObject
		}{components: props.components, object: object}) {
			insert(schema)
		}
	}
	for _, alias := range props.metadata.Aliases {
		for _, schema := range json_schema_alias(struct {
			blockNever bool
			components *OpenApi_IComponents
			alias      *nativemetadata.MetadataAlias
		}{blockNever: props.blockNever, components: props.components, alias: alias}) {
			insert(schema)
		}
	}

	if len(union) == 0 && props.blockNever {
		return nil
	}
	var schema JsonSchema
	if len(union) == 0 {
		schema = JsonSchema{"type": nil}
	} else if len(union) == 1 {
		schema = union[0]
	} else {
		schema = JsonSchema{"oneOf": union}
		if discriminator := json_schema_discriminator(props.metadata); discriminator != nil {
			schema["discriminator"] = discriminator
		}
	}
	return json_schema_station_mergeAttribute(schema, props.attribute)
}

func json_schema_station_has_atomic(metadata *nativemetadata.MetadataSchema, typ string) bool {
	for _, atomic := range metadata.Atomics {
		if atomic.Type == typ {
			return true
		}
	}
	return false
}

func json_schema_station_mergeAttribute(schema JsonSchema, attribute JsonSchema) JsonSchema {
	output := cloneJsonSchema(schema)
	for key, value := range attribute {
		output[key] = value
	}
	for _, key := range []string{"title", "description", "deprecated"} {
		if _, ok := attribute[key]; ok == false {
			if value, ok := schema[key]; ok {
				output[key] = value
			}
		}
	}
	return output
}

func json_schema_assign(target JsonSchema, source JsonSchema) {
	for key, value := range source {
		target[key] = value
	}
}

func json_schema_is_string(schema JsonSchema) bool {
	return schema["type"] == "string"
}

func json_schema_has_tag(tags []nativemetadata.IJsDocTagInfo, name string) bool {
	for _, tag := range tags {
		if tag.Name == name {
			return true
		}
	}
	return false
}

func json_schema_has_any_tag(tags []nativemetadata.IJsDocTagInfo, names []string) bool {
	for _, name := range names {
		if json_schema_has_tag(tags, name) {
			return true
		}
	}
	return false
}

func lowerAscii(str string) string {
	bytes := []byte(str)
	for i, ch := range bytes {
		if 'A' <= ch && ch <= 'Z' {
			bytes[i] = ch + ('a' - 'A')
		}
	}
	return string(bytes)
}
