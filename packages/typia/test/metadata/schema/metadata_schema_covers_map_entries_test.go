package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversMapEntries verifies Map key and value containment.
//
// Map coverage must check both the key and value schemas. Otherwise any source
// Map bucket falls through as covering every target Map bucket, which can hide
// invalid branch specialization and schema containment decisions.
//
// 1. Assert a Map with atomic value coverage covers a matching literal value.
// 2. Assert mismatched key schemas are not covered.
// 3. Assert mismatched value schemas are not covered.
// 4. Assert nested tuple value schemas are checked.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers compares Map buckets: matching key and value schemas cover, while a changed key, a changed value or a changed nested tuple value must not.
// @evidence contracts/testing.md#independent-expectations A Map schema contains another only when both key and value schemas contain; the atomic and literal operands are authored from that rule.
// @evidence contracts/testing.md#distinguishing-cases The literal-key/literal-value target is the positive case and each of three one-axis mismatches (key, value, nested tuple value) is a negative; Set buckets are owned by the set case.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported coverage function on constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataSchemaCoversMapEntries(t *testing.T) {
  source := testutil.MapMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("number"))
  if !metadata.MetadataSchema_covers(
    source,
    testutil.MapMetadata(testutil.StringConstantMetadata("id"), testutil.NumberConstantMetadata(1)),
  ) {
    t.Fatal("map source should cover matching key and value schemas")
  }
  if metadata.MetadataSchema_covers(
    source,
    testutil.MapMetadata(testutil.AtomicMetadata("number"), testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("map source should not cover mismatched key schema")
  }
  if metadata.MetadataSchema_covers(
    source,
    testutil.MapMetadata(testutil.AtomicMetadata("string"), testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("map source should not cover mismatched value schema")
  }
  if metadata.MetadataSchema_covers(
    testutil.MapMetadata(
      testutil.AtomicMetadata("string"),
      testutil.TupleMetadata(testutil.AtomicMetadata("number")),
    ),
    testutil.MapMetadata(
      testutil.AtomicMetadata("string"),
      testutil.TupleMetadata(testutil.AtomicMetadata("string")),
    ),
  ) {
    t.Fatal("map source should not cover mismatched nested tuple value schema")
  }
}
