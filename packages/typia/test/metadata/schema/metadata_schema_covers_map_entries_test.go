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
}
