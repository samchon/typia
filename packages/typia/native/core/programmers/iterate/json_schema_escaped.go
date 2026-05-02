package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func json_schema_escaped(props struct {
  components *OpenApi_IComponents
  escaped    *nativemetadata.MetadataEscaped
}) []JsonSchema {
  output := json_schema_station(json_schema_station_props{
    blockNever: false,
    components: props.components,
    metadata:   props.escaped.Returns,
    attribute:  JsonSchema{},
  })
  if output == nil {
    return []JsonSchema{}
  }
  if json_schema_escaped_is_date(map[*nativemetadata.MetadataSchema]bool{}, props.escaped.Original) {
    if json_schema_is_string(output) {
      if output["format"] != "date" && output["format"] != "date-time" {
        output["format"] = "date-time"
      }
    } else if oneOf, ok := output["oneOf"].([]JsonSchema); ok {
      for _, schema := range oneOf {
        if json_schema_is_string(schema) {
          if schema["format"] != "date" && schema["format"] != "date-time" {
            schema["format"] = "date-time"
          }
          break
        }
      }
    }
  }
  if oneOf, ok := output["oneOf"].([]JsonSchema); ok {
    return oneOf
  }
  return []JsonSchema{output}
}

func json_schema_escaped_is_date(visited map[*nativemetadata.MetadataSchema]bool, metadata *nativemetadata.MetadataSchema) bool {
  if visited[metadata] {
    return false
  }
  visited[metadata] = true
  for _, native := range metadata.Natives {
    if native.Name == "Date" {
      return true
    }
  }
  for _, array := range metadata.Arrays {
    if json_schema_escaped_is_date(visited, array.Type.Value) {
      return true
    }
  }
  for _, tuple := range metadata.Tuples {
    for _, elem := range tuple.Type.Elements {
      if json_schema_escaped_is_date(visited, elem) {
        return true
      }
    }
  }
  for _, alias := range metadata.Aliases {
    if json_schema_escaped_is_date(visited, alias.Type.Value) {
      return true
    }
  }
  return false
}
