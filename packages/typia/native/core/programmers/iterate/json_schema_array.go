package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

// Json_schema_array_export_props is the argument record of
// Json_schema_array_export, which converts an array type to JSON schemas.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Json_schema_array_export, which converts an array type to JSON schemas; its 2 fields (Components, Array) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 2-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Json_schema_array_export_props struct {
  Components *OpenApi_IComponents
  Array      *nativemetadata.MetadataArray
}

func json_schema_array(props struct {
  components *OpenApi_IComponents
  array      *nativemetadata.MetadataArray
  definition string
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
  key := props.components.arraySchemaName(props.array)
  if props.array.Type.Recursive && key != props.definition {
    out := func() []JsonSchema {
      return []JsonSchema{{"$ref": "#/components/schemas/" + key}}
    }
    if props.components.Schemas != nil {
      if _, ok := props.components.Schemas[key]; ok {
        return out()
      }
    }
    if props.components.Schemas == nil {
      props.components.Schemas = map[string]JsonSchema{}
    }
    if _, ok := props.components.Schemas[key]; ok == false {
      props.components.emplaceSchemaKey(key)
      props.components.Schemas[key] = JsonSchema{}
    }
    oneOf := factory()
    if len(oneOf) == 1 {
      json_schema_assign(props.components.Schemas[key], oneOf[0])
    } else {
      props.components.Schemas[key]["oneOf"] = oneOf
    }
    return out()
  }
  return factory()
}

// Json_schema_array_export converts an array type to its JSON schemas: an
// `array` schema whose items come from the element metadata, or a reference to
// the component of a recursive array type, which is registered the first time it
// is met. Recursive uses with different schema tags get distinct components,
// so a length constraint cannot leak into another use of the same array type.
//
// @evidence contracts/common.md#principled-implementation A recursive array reserves its component before descending into items. Schema-bearing tags participate in component identity, and a same-named alias body is built inline instead of becoming its own reference. Nested stations retain references, terminating recursive expansion.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The only state it changes is the components record it is given.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Json_schema_array_export(props Json_schema_array_export_props) []JsonSchema {
  return json_schema_array(struct {
    components *OpenApi_IComponents
    array      *nativemetadata.MetadataArray
    definition string
  }{
    components: props.Components,
    array:      props.Array,
  })
}
