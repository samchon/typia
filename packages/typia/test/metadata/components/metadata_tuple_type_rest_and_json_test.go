package typia_test

import (
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTupleTypeRestAndJSON verifies tuple rest detection and DTOs.
//
// Tuple metadata uses a `Rest` child on the final element to represent rest
// tuples. The tuple type must detect that shape and preserve element metadata
// when serialized.
//
// 1. Build a tuple type whose final element contains rest metadata.
// 2. Assert the tuple is recognized as a rest tuple.
// 3. Convert it to JSON and assert both elements are serialized.
func TestMetadataTupleTypeRestAndJSON(t *testing.T) {
  tuple := metadata.MetadataTupleType_create(metadata.MetadataTupleType{
    Name: "PairRest",
    Elements: []*metadata.MetadataSchema{
      testutil.AtomicMetadata("string"),
      metadata.MetadataSchema_create(metadata.MetadataSchema{
        Required: true,
        Rest:     testutil.AtomicMetadata("number"),
      }),
    },
  })

  if !tuple.IsRest() {
    t.Fatal("tuple with rest metadata on final element should be rest tuple")
  }
  if json := tuple.ToJSON(); len(json.Elements) != 2 || json.Elements[1].Rest == nil {
    t.Fatalf("tuple JSON should preserve rest element: %#v", json.Elements)
  }

  plain := metadata.MetadataTupleType_create(metadata.MetadataTupleType{
    Name: "PlainPair",
    Elements: []*metadata.MetadataSchema{
      testutil.AtomicMetadata("string"),
      testutil.AtomicMetadata("number"),
    },
  })
  if plain.IsRest() {
    t.Fatal("tuple without rest element should not be a rest tuple")
  }
}
