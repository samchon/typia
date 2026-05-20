package typia_test

import (
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataComponentsFromResolvesReferences verifies component dictionaries.
//
// Component DTOs are loaded in two passes: first names are registered in a
// dictionary, then properties, alias values, array values, and tuple elements
// are resolved against that dictionary. This test covers that reference
// restoration path without involving TypeScript checker state.
//
// 1. Build component DTOs for one object, alias, array, and tuple.
// 2. Convert them into runtime components.
// 3. Assert every named component is present in the dictionary.
// 4. Assert JSON conversion preserves the same component counts.
func TestMetadataComponentsFromResolvesReferences(t *testing.T) {
  components := metadata.MetadataComponents_from(metadata.IMetadataComponents{
    Objects: []metadata.IMetadataSchema_IObjectType{{
      Name: "User",
      Properties: []*metadata.IMetadataSchema_IProperty{{
        Key:   testutil.StringLiteralMetadata("id").ToJSON(),
        Value: testutil.AtomicMetadata("string").ToJSON(),
      }},
    }},
    Aliases: []metadata.IMetadataSchema_IAliasType{{
      Name:  "UserId",
      Value: testutil.AtomicMetadata("string").ToJSON(),
    }},
    Arrays: []metadata.IMetadataSchema_IArrayType{{
      Name:  "UserIds",
      Value: testutil.AtomicMetadata("string").ToJSON(),
    }},
    Tuples: []metadata.IMetadataSchema_ITupleType{{
      Name: "Pair",
      Elements: []*metadata.IMetadataSchema{
        testutil.AtomicMetadata("string").ToJSON(),
        testutil.AtomicMetadata("number").ToJSON(),
      },
    }},
  })

  if components.Dictionary.Objects["User"] == nil ||
    components.Dictionary.Aliases["UserId"] == nil ||
    components.Dictionary.Arrays["UserIds"] == nil ||
    components.Dictionary.Tuples["Pair"] == nil {
    t.Fatalf("component dictionary was not populated: %#v", components.Dictionary)
  }
  if len(components.Dictionary.Objects["User"].Properties) != 1 {
    t.Fatalf("object properties were not resolved in second pass: %#v", components.Dictionary.Objects["User"])
  }
  if components.Dictionary.Aliases["UserId"].Value == nil {
    t.Fatal("alias value was not resolved in second pass")
  }
  if components.Dictionary.Arrays["UserIds"].Value == nil {
    t.Fatal("array value was not resolved in second pass")
  }
  if len(components.Dictionary.Tuples["Pair"].Elements) != 2 {
    t.Fatalf("tuple elements were not resolved in second pass: %#v", components.Dictionary.Tuples["Pair"])
  }
  json := components.ToJSON()
  if len(json.Objects) != 1 || len(json.Aliases) != 1 || len(json.Arrays) != 1 || len(json.Tuples) != 1 {
    t.Fatalf("component counts were not preserved: %#v", json)
  }
}
