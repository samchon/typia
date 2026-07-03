package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversNullability verifies null/undefined containment.
//
// Coverage ignored nullability and optionality entirely, so `number` covered
// `number | null` and vice versa — a non-antisymmetric comparator that made
// the union sort order of nullable-vs-plain pairs arbitrary.
//
// 1. Assert a non-nullable source does not cover a nullable target.
// 2. Assert a nullable source still covers the plain target.
// 3. Assert a required source does not cover an optional target.
// 4. Assert an optional source still covers the required target.
func TestMetadataSchemaCoversNullability(t *testing.T) {
  nullable := testutil.AtomicMetadata("number")
  nullable.Nullable = true
  if metadata.MetadataSchema_covers(testutil.AtomicMetadata("number"), nullable) {
    t.Fatal("plain number should not cover nullable number")
  }
  if !metadata.MetadataSchema_covers(nullable, testutil.AtomicMetadata("number")) {
    t.Fatal("nullable number should cover plain number")
  }
  optional := testutil.AtomicMetadata("number")
  optional.Optional = true
  if metadata.MetadataSchema_covers(testutil.AtomicMetadata("number"), optional) {
    t.Fatal("required number should not cover optional number")
  }
  if !metadata.MetadataSchema_covers(optional, testutil.AtomicMetadata("number")) {
    t.Fatal("optional number should cover required number")
  }
}
