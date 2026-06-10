package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversNestedCollectionEntries verifies recursive collection containment.
//
// Array and tuple containment must keep inspecting nested collection entries.
// Otherwise a nested collection-only element reaches the scalar checks with no
// mismatching bucket and is incorrectly treated as covered.
//
// 1. Assert nested arrays still cover compatible literal element schemas.
// 2. Assert nested arrays with incompatible elements are not covered.
// 3. Assert tuple elements containing arrays or tuples are also checked.
func TestMetadataSchemaCoversNestedCollectionEntries(t *testing.T) {
  if !metadata.MetadataSchema_covers(
    testutil.ArrayMetadata(testutil.ArrayMetadata(testutil.AtomicMetadata("number"))),
    testutil.ArrayMetadata(testutil.ArrayMetadata(testutil.NumberConstantMetadata(1))),
  ) {
    t.Fatal("nested array source should cover compatible literal element schema")
  }
  if metadata.MetadataSchema_covers(
    testutil.ArrayMetadata(testutil.ArrayMetadata(testutil.AtomicMetadata("number"))),
    testutil.ArrayMetadata(testutil.ArrayMetadata(testutil.AtomicMetadata("string"))),
  ) {
    t.Fatal("nested array source should not cover mismatched element schema")
  }
  if metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.ArrayMetadata(testutil.AtomicMetadata("number"))),
    testutil.TupleMetadata(testutil.ArrayMetadata(testutil.AtomicMetadata("string"))),
  ) {
    t.Fatal("tuple source should not cover mismatched nested array element schema")
  }
  if metadata.MetadataSchema_covers(
    testutil.TupleMetadata(testutil.TupleMetadata(testutil.AtomicMetadata("number"))),
    testutil.TupleMetadata(testutil.TupleMetadata(testutil.AtomicMetadata("string"))),
  ) {
    t.Fatal("tuple source should not cover mismatched nested tuple element schema")
  }
}
