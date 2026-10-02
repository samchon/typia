package iterate

import (
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// OpenApi_IComponents is the `components` of a JSON schema document being built:
// the named schemas and the order in which they were first registered.
//
// @evidence contracts/common.md#principled-implementation It is the `components` of a JSON schema document being built: the named schemas and the order in which they were first registered; its 2 fields (Schemas, Order) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design The schema map owns lookup while Order owns discovery sequence; registration and literal rendering are methods on that shared store.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Registration records new keys before insertion and rendering follows the recorded sequence rather than relying on Go map iteration.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type OpenApi_IComponents struct {
  Schemas map[string]JsonSchema
  // Order records the insertion sequence of Schemas keys so the emitted
  // `components.schemas` object literal preserves the order the schemas were
  // discovered, exactly like the legacy TS implementation where the schema
  // collection was a plain object keyed in insertion order. A Go map is
  // unordered, so the bare map alone would scramble the keys.
  Order []string
}

// ToLiteral renders the components as an order-preserving object literal input
// for LiteralFactory. The `schemas` member keeps the insertion order recorded
// in Order so the emitted `components.schemas` matches the legacy TS output.
//
// @evidence contracts/common.md#principled-implementation A Go map has no order, so the schemas are written as an ordered object in the discovery order that Order recorded, which keeps the emitted `components.schemas` as the TypeScript implementation emitted it.
// @evidence contracts/common.md#clear-and-simple-design One method over Order and Schemas.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Order is recorded data and nothing is sorted; an ordered key without a schema is skipped.
// @evidence contracts/common.md#meaningful-documentation The doc states the order preservation.
func (components *OpenApi_IComponents) ToLiteral() nativefactories.LiteralFactory_OrderedObject {
  schemas := make(map[string]any, len(components.Schemas))
  keys := make([]string, 0, len(components.Order))
  for _, key := range components.Order {
    if schema, ok := components.Schemas[key]; ok {
      schemas[key] = schema
      keys = append(keys, key)
    }
  }
  return nativefactories.LiteralFactory_OrderedObject{
    Keys: []string{"schemas"},
    Values: map[string]any{
      "schemas": nativefactories.LiteralFactory_OrderedObject{
        Keys:   keys,
        Values: schemas,
      },
    },
  }
}

// emplaceSchemaKey registers a freshly created schema key in insertion order.
// It must be called right before assigning components.Schemas[key] for the
// first time. Re-registering an existing key is a no-op so callers that guard
// with an existence check stay correct.
func (components *OpenApi_IComponents) emplaceSchemaKey(key string) {
  if components.Schemas == nil {
    components.Schemas = map[string]JsonSchema{}
  }
  if _, ok := components.Schemas[key]; ok {
    return
  }
  components.Order = append(components.Order, key)
}

// Json_schema_native_export_props is the argument record of
// Json_schema_native_export, which converts a built-in class to JSON schemas.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Json_schema_native_export, which converts a built-in class to JSON schemas; its 2 fields (Components, Native) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 2-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
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
    props.components.emplaceSchemaKey(props.native.Name)
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

// Json_schema_native_export converts a built-in class to its JSON schemas: a
// binary string for Blob and File, and otherwise a reference to an empty object
// component that is registered the first time it is met.
//
// @evidence contracts/common.md#principled-implementation It converts a built-in class to its JSON schemas: a binary string for Blob and File, and otherwise a reference to an empty object component that is registered the first time it is met.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The only state it changes is the components record it is given.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Json_schema_native_export(props Json_schema_native_export_props) []JsonSchema {
  return json_schema_native(struct {
    components *OpenApi_IComponents
    native     *nativemetadata.MetadataNative
  }{
    components: props.Components,
    native:     props.Native,
  })
}
