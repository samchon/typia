package typia_test

import (
  "testing"

  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonSchemaNativeExportOmitsEmptyRequired verifies custom native schema
// components do not serialize an empty required array.
//
// Custom native components synthesize an object schema with no properties.
// JSON Schema draft-04 rejects `required: []`, so the component must retain its
// object shape while omitting `required` entirely.
//
// 1. Export a non-built-in native metadata component.
// 2. Read the generated component schema.
// 3. Assert it is an empty object without an owned `required` key.
func TestJsonSchemaNativeExportOmitsEmptyRequired(t *testing.T) {
  components := &nativeiterate.OpenApi_IComponents{}

  schemas := nativeiterate.Json_schema_native_export(nativeiterate.Json_schema_native_export_props{
    Components: components,
    Native: nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{
      Name: "CustomNative",
    }),
  })
  if len(schemas) == 0 {
    t.Fatal("native schema export returned no reference schema")
  }

  component := components.Schemas["CustomNative"]
  if component == nil {
    t.Fatal("custom native component was not registered")
  }
  if component["type"] != "object" {
    t.Fatalf("custom native component type mismatch: %v", component["type"])
  }
  properties, ok := component["properties"].(nativeiterate.JsonSchema)
  if !ok {
    t.Fatalf("custom native component properties mismatch: %#v", component["properties"])
  }
  if len(properties) != 0 {
    t.Fatalf("custom native component should have no properties: %#v", properties)
  }
  if _, ok := component["required"]; ok {
    t.Fatalf("custom native component must omit empty required: %#v", component)
  }
}
