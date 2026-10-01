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
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers compares plain, nullable, required and optional numbers in both directions, so a comparator that ignores nullability or optionality fails.
// @evidence contracts/testing.md#independent-expectations A value set including null or undefined is wider than the plain set; the four expectations follow from that inclusion order, not from the implementation.
// @evidence contracts/testing.md#distinguishing-cases Each axis (nullable, optional) has a positive direction and an adjacent negative direction, giving four one-axis cases.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported coverage function on constructed metadata with no filesystem fixture, process or native command build.
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
