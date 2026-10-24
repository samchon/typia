package iterate

import (
  "reflect"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonSchemaRecursiveArrayOwnership verifies aliases define their array body
// and array constraints belong to each use rather than the shared component.
//
// A reserved component is a recursion anchor, not evidence that its structural
// body has already been generated. Array tags describe a use of that anchor.
//
// 1. Generate an alias and its same-named recursive array in both visit orders.
// 2. Generate two differently tagged uses of a shared recursive array.
// 3. Compare complete definitions and references with authored array semantics.
//
// @evidence contracts/testing.md#behavioral-verification Calls the schema station on cyclic metadata and compares complete component bodies, returned references, tag rows and registration order.
// @evidence contracts/testing.md#independent-expectations An array definition has type array and an items schema; a recursive reference alone cannot define it. Min/max item constraints are per-use intersections, independently of traversal order.
// @evidence contracts/testing.md#distinguishing-cases Alias-first and array-first roots retain the alias description; tagged and untagged uses, one and multiple tag rows and nonrecursive controls are separate subcases. Nullable and distinct-name declarations are covered by the TypeScript producer matrix.
// @evidence contracts/testing.md#execution-ownership pnpm test:go:native discovers this in-process unit test; constructed metadata exercises the owning schema writer without a compiler or subprocess.
func TestJsonSchemaRecursiveArrayOwnership(t *testing.T) {
  for _, arrayFirst := range []bool{false, true} {
    t.Run(map[bool]string{false: "alias-first", true: "array-first"}[arrayFirst], func(t *testing.T) {
      description := "Recursive tree."
      alias := &metadata.MetadataAliasType{Name: "Tree", Description: &description}
      reference := metadata.MetadataSchema_initialize()
      reference.Aliases = []*metadata.MetadataAlias{{Type: alias}}
      array := &metadata.MetadataArrayType{Name: "Tree", Recursive: true, Value: reference}
      body := metadata.MetadataSchema_initialize()
      body.Arrays = []*metadata.MetadataArray{{Type: array}}
      alias.Value = body
      components := &OpenApi_IComponents{}
      roots := []*metadata.MetadataSchema{reference, body}
      if arrayFirst {
        roots[0], roots[1] = roots[1], roots[0]
      }
      for _, root := range roots {
        actual := Json_schema_station(Json_schema_station_props{Components: components, Metadata: root})
        if !reflect.DeepEqual(actual, JsonSchema{"$ref": "#/components/schemas/Tree"}) {
          t.Errorf("root: %#v", actual)
        }
      }
      expected := JsonSchema{"type": "array", "items": JsonSchema{"$ref": "#/components/schemas/Tree"}, "description": description}
      if !reflect.DeepEqual(components.Schemas["Tree"], expected) {
        t.Errorf("definition: %#v, want %#v", components.Schemas["Tree"], expected)
      }
      if !reflect.DeepEqual(components.Order, []string{"Tree"}) {
        t.Errorf("registration order: %#v", components.Order)
      }
    })
  }
  for _, recursive := range []bool{false, true} {
    t.Run(map[bool]string{false: "inline-tags", true: "recursive-tags"}[recursive], func(t *testing.T) {
      value := metadata.MetadataSchema_initialize()
      array := &metadata.MetadataArrayType{Name: "Nested", Recursive: recursive, Value: value}
      if recursive {
        value.Arrays = []*metadata.MetadataArray{{Type: array}}
      } else {
        value.Atomics = []*metadata.MetadataAtomic{{Type: "string"}}
      }
      components := &OpenApi_IComponents{}
      for _, sample := range []struct {
        tags        [][]metadata.IMetadataTypeTag
        constraints []JsonSchema
      }{
        {[][]metadata.IMetadataTypeTag{{{Schema: map[string]any{"minItems": 1}}}}, []JsonSchema{{"minItems": 1}}},
        {[][]metadata.IMetadataTypeTag{{{Schema: map[string]any{"maxItems": 2}}}, {{Schema: map[string]any{"minItems": 3}}}}, []JsonSchema{{"maxItems": 2}, {"minItems": 3}}},
        {nil, []JsonSchema{{}}},
      } {
        actual := Json_schema_array_export(Json_schema_array_export_props{Components: components, Array: &metadata.MetadataArray{Type: array, Tags: sample.tags}})
        base := JsonSchema{"type": "array", "items": JsonSchema{"type": "string"}}
        if recursive {
          if len(actual) != 1 {
            t.Fatalf("expected one component reference: %#v", actual)
          }
          ref, ok := actual[0]["$ref"].(string)
          if !ok {
            t.Fatalf("expected a component reference: %#v", actual)
          }
          base = JsonSchema{"type": "array", "items": JsonSchema{"$ref": "#/components/schemas/Nested"}}
          key := ref[len("#/components/schemas/"):]
          actual = []JsonSchema{components.Schemas[key]}
          if branches, ok := actual[0]["oneOf"].([]JsonSchema); ok {
            actual = branches
          }
        }
        expected := []JsonSchema{}
        for _, constraint := range sample.constraints {
          schema := cloneJsonSchema(base)
          for key, value := range constraint {
            schema[key] = value
          }
          expected = append(expected, schema)
        }
        if !reflect.DeepEqual(actual, expected) {
          t.Errorf("uses: %#v, want %#v", actual, expected)
        }
      }
      if recursive {
        expected := JsonSchema{"type": "array", "items": JsonSchema{"$ref": "#/components/schemas/Nested"}}
        if !reflect.DeepEqual(components.Schemas["Nested"], expected) {
          t.Errorf("tags polluted definition: %#v", components.Schemas["Nested"])
        }
      } else if len(components.Schemas) != 0 {
        t.Errorf("nonrecursive array registered components: %#v", components.Schemas)
      }
    })
  }
}
