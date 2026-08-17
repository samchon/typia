package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type JsonSchema map[string]any

func json_schema_plugin(props struct {
  schema JsonSchema
  tags   [][]nativemetadata.IMetadataTypeTag
}) []JsonSchema {
  plugins := make([][]nativemetadata.IMetadataTypeTag, 0)
  for _, row := range props.tags {
    filtered := make([]nativemetadata.IMetadataTypeTag, 0)
    for _, tag := range row {
      if tag.Schema != nil {
        filtered = append(filtered, tag)
      }
    }
    if len(filtered) != 0 {
      plugins = append(plugins, filtered)
    }
  }
  if len(plugins) == 0 {
    return []JsonSchema{props.schema}
  }
  output := make([]JsonSchema, 0, len(plugins))
  for _, row := range plugins {
    base := cloneJsonSchema(props.schema)
    for _, tag := range row {
      if schema, ok := tag.Schema.(map[string]any); ok {
        for key, value := range schema {
          base[key] = value
        }
      }
    }
    output = append(output, base)
  }
  return output
}

func cloneJsonSchema(input JsonSchema) JsonSchema {
  output := JsonSchema{}
  for key, value := range input {
    output[key] = value
  }
  return output
}
