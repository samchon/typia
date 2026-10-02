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
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers compares Set buckets: compatible literal values, mismatched values, a source with no Set bucket and nested tuple values.
// @evidence contracts/testing.md#independent-expectations Set containment follows value-schema containment and a bucketless source accepts no Set; operands and verdicts are authored.
// @evidence contracts/testing.md#distinguishing-cases One positive and three negatives (value mismatch, missing bucket, nested tuple mismatch) isolate the recursion into the Set value.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported coverage function on constructed metadata with no filesystem fixture, process or native command build.
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
