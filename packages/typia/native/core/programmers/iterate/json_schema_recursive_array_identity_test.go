package iterate

import (
  "reflect"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonSchemaRecursiveArrayIdentity verifies variant names cannot capture
// later declared names and recursive tagged edges reach their own definition.
//
// Type names alone cannot distinguish constraints, while generated names must
// coexist with every declared root regardless of its traversal order.
//
// 1. Reserve a later alias with the preferred generated variant name.
// 2. Build self-tagged arrays with equivalent and different schema tag maps.
// 3. Check reuse, separation, recursive targets and the untouched later alias.
//
// @evidence contracts/testing.md#behavioral-verification Exercises the array component allocator and writer on a cyclic tagged graph; checks name collision avoidance, exact tagged self-reference, equivalent-map reuse and constraint separation.
// @evidence contracts/testing.md#independent-expectations A tagged recursive element must reference the same constrained component at every depth. A separately declared string alias must remain a string even if its name matches a generated candidate.
// @evidence contracts/testing.md#distinguishing-cases Equivalent maps in opposite insertion order share a component, different constraints do not, a later declared name wins its reservation and an untagged component remains separate.
// @evidence contracts/testing.md#execution-ownership pnpm test:go:native discovers this unit test and executes the owning writer in process with authored metadata and no product subprocess.
func TestJsonSchemaRecursiveArrayIdentity(t *testing.T) {
  value := metadata.MetadataSchema_initialize()
  array := &metadata.MetadataArrayType{Name: "Tree", Recursive: true, Value: value}
  first := map[string]any{"minItems": 1, "maxItems": 3}
  second := map[string]any{}
  second["maxItems"] = 3
  second["minItems"] = 1
  tagged := &metadata.MetadataArray{Type: array, Tags: [][]metadata.IMetadataTypeTag{{{Schema: first}}}}
  value.Arrays = []*metadata.MetadataArray{tagged}
  root := metadata.MetadataSchema_initialize()
  root.Arrays = []*metadata.MetadataArray{tagged}
  later := metadata.MetadataSchema_initialize()
  later.Aliases = []*metadata.MetadataAlias{{Type: &metadata.MetadataAliasType{
    Name: "Tree-array", Value: &metadata.MetadataSchema{Atomics: []*metadata.MetadataAtomic{{Type: "string"}}},
  }}}
  components := &OpenApi_IComponents{}
  components.ReserveSchemaNames([]*metadata.MetadataSchema{root, later})
  output := Json_schema_station(Json_schema_station_props{Components: components, Metadata: root})
  ref := output["$ref"].(string)
  key := ref[len("#/components/schemas/"):]
  if key == "Tree-array" {
    t.Fatal("variant captured a later declaration")
  }
  expected := JsonSchema{"type": "array", "minItems": 1, "maxItems": 3, "items": JsonSchema{"$ref": ref}}
  if !reflect.DeepEqual(components.Schemas[key], expected) {
    t.Errorf("recursive tagged body: %#v", components.Schemas[key])
  }
  equivalent := Json_schema_array_export(Json_schema_array_export_props{Components: components, Array: &metadata.MetadataArray{
    Type: array, Tags: [][]metadata.IMetadataTypeTag{{{Schema: second}}},
  }})
  if !reflect.DeepEqual(equivalent, []JsonSchema{output}) {
    t.Errorf("equivalent tags changed identity: %#v", equivalent)
  }
  other := Json_schema_array_export(Json_schema_array_export_props{Components: components, Array: &metadata.MetadataArray{
    Type: array, Tags: [][]metadata.IMetadataTypeTag{{{Schema: map[string]any{"minItems": 2}}}},
  }})
  if reflect.DeepEqual(other, equivalent) {
    t.Fatal("different constraints shared one identity")
  }
  Json_schema_station(Json_schema_station_props{Components: components, Metadata: later})
  if !reflect.DeepEqual(components.Schemas["Tree-array"], JsonSchema{"type": "string"}) {
    t.Errorf("later alias was overwritten: %#v", components.Schemas["Tree-array"])
  }
  plain := Json_schema_array_export(Json_schema_array_export_props{Components: components, Array: &metadata.MetadataArray{Type: array}})
  if !reflect.DeepEqual(plain, []JsonSchema{{"$ref": "#/components/schemas/Tree"}}) {
    t.Errorf("plain identity changed: %#v", plain)
  }
  expectedPlain := JsonSchema{"type": "array", "items": JsonSchema{"$ref": ref}}
  if !reflect.DeepEqual(components.Schemas["Tree"], expectedPlain) {
    t.Errorf("plain use inherited tags: %#v", components.Schemas["Tree"])
  }
}
