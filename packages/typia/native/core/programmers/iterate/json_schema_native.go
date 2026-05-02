package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type OpenApi_IComponents struct {
  Schemas map[string]JsonSchema
}

type Json_schema_native_export_props struct {
  Components *OpenApi_IComponents
  Native     *nativemetadata.MetadataNative
}

func json_schema_native(props struct {
  components *OpenApi_IComponents
  native     *nativemetadata.MetadataNative
}) []JsonSchema {
  if props.native.Name == "Blob" || props.native.Name == "File" {
    return json_schema_plugin(struct {
      schema JsonSchema
      tags   [][]nativemetadata.IMetadataTypeTag
    }{
      schema: JsonSchema{
        "type":   "string",
        "format": "binary",
      },
      tags: props.native.Tags,
    })
  }
  if props.components.Schemas == nil {
    props.components.Schemas = map[string]JsonSchema{}
  }
  if _, ok := props.components.Schemas[props.native.Name]; ok == false {
    props.components.Schemas[props.native.Name] = JsonSchema{
      "type":       "object",
      "properties": JsonSchema{},
      "required":   []string{},
    }
  }
  return json_schema_plugin(struct {
    schema JsonSchema
    tags   [][]nativemetadata.IMetadataTypeTag
  }{
    schema: JsonSchema{
      "$ref": "#/components/schemas/" + props.native.Name,
    },
    tags: props.native.Tags,
  })
}

func Json_schema_native_export(props Json_schema_native_export_props) []JsonSchema {
  return json_schema_native(struct {
    components *OpenApi_IComponents
    native     *nativemetadata.MetadataNative
  }{
    components: props.Components,
    native:     props.Native,
  })
}
