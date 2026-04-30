package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func json_schema_alias(props struct {
	blockNever bool
	components *OpenApi_IComponents
	alias      *nativemetadata.MetadataAlias
}) []JsonSchema {
	if props.alias.Type.Value.Size() == 1 && len(props.alias.Type.Value.Objects) == 1 {
		return json_schema_object(struct {
			components *OpenApi_IComponents
			object     *nativemetadata.MetadataObject
		}{
			components: props.components,
			object:     props.alias.Type.Value.Objects[0],
		})
	}

	ref := "#/components/schemas/" + props.alias.Type.Name
	if props.components.Schemas == nil {
		props.components.Schemas = map[string]JsonSchema{}
	}
	if _, ok := props.components.Schemas[props.alias.Type.Name]; ok == false {
		props.components.Schemas[props.alias.Type.Name] = JsonSchema{}

		attribute := JsonSchema{}
		if json_schema_has_tag(props.alias.Type.JsDocTags, "deprecated") {
			attribute["deprecated"] = true
		}
		if title := json_schema_title(struct {
			description *string
			jsDocTags   []nativemetadata.IJsDocTagInfo
		}{
			description: props.alias.Type.Description,
			jsDocTags:   props.alias.Type.JsDocTags,
		}); title != nil {
			attribute["title"] = *title
		}
		if description := json_schema_description(struct {
			description *string
			jsDocTags   []nativemetadata.IJsDocTagInfo
		}{
			description: props.alias.Type.Description,
			jsDocTags:   props.alias.Type.JsDocTags,
		}); description != nil {
			attribute["description"] = *description
		}
		schema := json_schema_station(json_schema_station_props{
			blockNever: props.blockNever,
			components: props.components,
			attribute:  attribute,
			metadata:   props.alias.Type.Value,
		})
		if schema != nil {
			json_schema_jsDocTags(schema, props.alias.Type.JsDocTags)
			json_schema_assign(props.components.Schemas[props.alias.Type.Name], schema)
		}
	}
	return []JsonSchema{{"$ref": ref}}
}
