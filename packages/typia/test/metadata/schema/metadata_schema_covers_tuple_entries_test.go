package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversTupleEntries verifies tuple element containment.
//
// Tuple coverage must inspect each covered element. Otherwise same-length
// tuples with incompatible element schemas incorrectly cover each other.
//
// 1. Assert a tuple covers another tuple with compatible elements.
// 2. Assert same-length tuples with incompatible elements are not covered.
// 3. Assert the existing repeated-extra-element behavior stays pinned.
// 4. Assert repeated-extra coverage can wrap across multiple extra elements.
// 5. Assert repeated-extra coverage also works for reused element pointers.
func TestMetadataSchemaCoversTupleEntries(t *testing.T) {
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.AtomicMetadata("number")),
    testutil.TupleMetadata(testutil.NumberConstantMetadata(1)),
  ) {
    t.Fatal("tuple source should cover compatible literal element schema")
  }
  if metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.AtomicMetadata("number")),
    testutil.TupleMetadata(testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("tuple source should not cover mismatched element schema")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("string")),
    testutil.TupleMetadata(testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("tuple source should preserve repeated-extra-element coverage")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(
      testutil.AtomicMetadata("string"),
      testutil.AtomicMetadata("string"),
      testutil.AtomicMetadata("string"),
    ),
    testutil.TupleMetadata(testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("tuple source should preserve repeated-extra-element coverage across multiple extra elements")
  }
  shared := testutil.ArrayMetadata(testutil.AtomicMetadata("string"))
  if !metadata.MetadataSchema_covers(
    testutil.TupleMetadata(shared, shared),
    testutil.TupleMetadata(shared),
  ) {
    t.Fatal("tuple source should preserve repeated-extra-element coverage for reused element schemas")
  }
}
