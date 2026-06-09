package iterate

import (
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

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
