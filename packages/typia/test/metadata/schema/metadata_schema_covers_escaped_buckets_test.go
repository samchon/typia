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
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers runs on escaped (toJSON) pairs built in the test: matching pairs, a different original, a different return schema, a source with no escaped bucket and both forms of the escaped flag decide the Fatal calls.
// @evidence contracts/testing.md#independent-expectations A toJSON schema is contained only when both its original and returned shapes are; the pair literals are authored. The legacy variadic flag expectations are the documented compatibility behavior of the public signature rather than outputs of the function.
// @evidence contracts/testing.md#distinguishing-cases The matching pair is positive; changing only the original or only the return schema is the negative twin on each side; the unescaped source and the two flag spellings pin the compatibility boundary.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported coverage function on constructed metadata with no filesystem fixture, process or native command build.
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
