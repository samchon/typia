package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type Json_schema_array_export_props struct {
	Components *OpenApi_IComponents
	Array      *nativemetadata.MetadataArray
}

func json_schema_array(props struct {
	components *OpenApi_IComponents
	array      *nativemetadata.MetadataArray
}) []JsonSchema {
	factory := func() []JsonSchema {
		return json_schema_plugin(struct {
			schema JsonSchema
			tags   [][]nativemetadata.IMetadataTypeTag
		}{
			schema: JsonSchema{
				"type": "array",
				"items": json_schema_station(json_schema_station_props{
					blockNever: false,
					components: props.components,
					metadata:   props.array.Type.Value,
					attribute:  JsonSchema{},
				}),
			},
			tags: props.array.Tags,
		})
	}
	if props.array.Type.Recursive {
		out := func() []JsonSchema {
			return []JsonSchema{{"$ref": "#/components/schemas/" + props.array.Type.Name}}
		}
		if props.components.Schemas != nil {
			if _, ok := props.components.Schemas[props.array.Type.Name]; ok {
				return out()
			}
		}
		if props.components.Schemas == nil {
			props.components.Schemas = map[string]JsonSchema{}
		}
		if _, ok := props.components.Schemas[props.array.Type.Name]; ok == false {
			props.components.Schemas[props.array.Type.Name] = JsonSchema{}
		}
		oneOf := factory()
		if len(oneOf) == 1 {
			json_schema_assign(props.components.Schemas[props.array.Type.Name], oneOf[0])
		} else {
			props.components.Schemas[props.array.Type.Name]["oneOf"] = oneOf
		}
		return out()
	}
	return factory()
}

func Json_schema_array_export(props Json_schema_array_export_props) []JsonSchema {
	return json_schema_array(struct {
		components *OpenApi_IComponents
		array      *nativemetadata.MetadataArray
	}{
		components: props.Components,
		array:      props.Array,
	})
}
