package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversEscapedBuckets verifies toJSON-escaped containment.
//
// Escaped metadata pairs an original schema with its toJSON return schema, and
// containment must compare both sides. No production caller passes the variadic
// flag (escaped recursion uses the private metadataSchema_covers); the public
// `(level, escaped)` shape is kept for legacy signature compatibility and must
// keep skipping the escaped-bucket comparison.
//
//  1. Assert matching escaped pairs cover each other.
//  2. Assert mismatched original schemas are not covered.
//  3. Assert mismatched return schemas are not covered.
//  4. Assert a source without an escaped bucket does not cover an escaped target.
//  5. Assert the escaped flag (with and without a leading level) skips the
//     escaped-bucket comparison.
func TestMetadataSchemaCoversEscapedBuckets(t *testing.T) {
  escaped := func(original *metadata.MetadataSchema, returns *metadata.MetadataSchema) *metadata.MetadataSchema {
    return metadata.MetadataSchema_create(metadata.MetadataSchema{
      Required: true,
      Escaped: metadata.MetadataEscaped_create(metadata.MetadataEscaped{
        Original: original,
        Returns:  returns,
      }),
    })
  }
  source := escaped(testutil.NativeMetadata("Date"), testutil.AtomicMetadata("string"))
  if !metadata.MetadataSchema_covers(
    source,
    escaped(testutil.NativeMetadata("Date"), testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("matching escaped pair should be covered")
  }
  if metadata.MetadataSchema_covers(
    source,
    escaped(testutil.NativeMetadata("Uint8Array"), testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("mismatched escaped original should not be covered")
  }
  if metadata.MetadataSchema_covers(
    source,
    escaped(testutil.NativeMetadata("Date"), testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("mismatched escaped returns should not be covered")
  }
  target := escaped(testutil.NativeMetadata("Date"), testutil.AtomicMetadata("string"))
  if metadata.MetadataSchema_covers(testutil.AtomicMetadata("string"), target) {
    t.Fatal("source without escaped bucket should not cover an escaped target")
  }
  if !metadata.MetadataSchema_covers(testutil.AtomicMetadata("string"), target, true) {
    t.Fatal("escaped flag should skip the escaped-bucket comparison")
  }
  if !metadata.MetadataSchema_covers(testutil.AtomicMetadata("string"), target, 0, true) {
    t.Fatal("legacy (level, escaped) arguments should still set the escaped flag")
  }
}
