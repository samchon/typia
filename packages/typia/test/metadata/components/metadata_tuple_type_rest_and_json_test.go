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
//
// @evidence contracts/testing.md#behavioral-verification IsRest and ToJSON are called on a tuple whose final element carries rest metadata.
// @evidence contracts/testing.md#independent-expectations A tuple is a rest tuple exactly when its last element has rest metadata; the authored tuple and the two expected elements follow that definition.
// @evidence contracts/testing.md#distinguishing-cases Only the positive rest tuple is asserted; the non-rest negative is not asserted here.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It builds and converts the tuple in memory with no filesystem fixture, process or native command build.
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
}
