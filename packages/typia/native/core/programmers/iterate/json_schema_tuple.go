package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func json_schema_tuple(props struct {
  components *OpenApi_IComponents
  tuple      *nativemetadata.MetadataTuple
}) JsonSchema {
  var tail *nativemetadata.MetadataSchema
  if len(props.tuple.Type.Elements) != 0 {
    tail = props.tuple.Type.Elements[len(props.tuple.Type.Elements)-1].Rest
  }
  prefixItems := props.tuple.Type.Elements
  if props.tuple.Type.IsRest() && len(prefixItems) != 0 {
    prefixItems = prefixItems[:len(prefixItems)-1]
  }
  items := []JsonSchema{}
  for _, metadata := range prefixItems {
    items = append(items, json_schema_station(json_schema_station_props{
      blockNever: false,
      components: props.components,
      metadata:   metadata,
      attribute:  JsonSchema{},
    }))
  }
  schema := JsonSchema{
    "type":        "array",
    "prefixItems": items,
  }
  if tail != nil {
    schema["additionalItems"] = json_schema_station(json_schema_station_props{
      blockNever: false,
      components: props.components,
      metadata:   tail,
      attribute:  JsonSchema{},
    })
  } else {
    schema["additionalItems"] = false
  }
  return schema
}
