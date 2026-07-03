package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversSetEntries verifies Set value containment.
//
// Set coverage must recurse into the value schema with the shared visited-pair
// guard. Otherwise a source without any Set bucket, or with an incompatible
// value schema, would fall through the loop and be treated as covering.
//
// 1. Assert a Set with atomic value coverage covers a matching literal value.
// 2. Assert mismatched value schemas are not covered.
// 3. Assert a source without Set buckets does not cover a Set target.
// 4. Assert nested tuple value schemas are checked.
func TestMetadataSchemaCoversSetEntries(t *testing.T) {
  if !metadata.MetadataSchema_covers(
    testutil.SetMetadata(testutil.AtomicMetadata("string")),
    testutil.SetMetadata(testutil.StringConstantMetadata("id")),
  ) {
    t.Fatal("set source should cover compatible literal value schema")
  }
  if metadata.MetadataSchema_covers(
    testutil.SetMetadata(testutil.AtomicMetadata("string")),
    testutil.SetMetadata(testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("set source should not cover mismatched value schema")
  }
  if metadata.MetadataSchema_covers(
    testutil.AtomicMetadata("string"),
    testutil.SetMetadata(testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("source without set buckets should not cover a set target")
  }
  if metadata.MetadataSchema_covers(
    testutil.SetMetadata(testutil.TupleMetadata(testutil.AtomicMetadata("number"))),
    testutil.SetMetadata(testutil.TupleMetadata(testutil.AtomicMetadata("string"))),
  ) {
    t.Fatal("set source should not cover mismatched nested tuple value schema")
  }
}
