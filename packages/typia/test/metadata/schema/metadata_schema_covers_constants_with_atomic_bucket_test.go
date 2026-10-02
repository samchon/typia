package typia_test

import (
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaCoversConstantsWithAtomicBucket verifies coverage rules.
//
// A broad atomic bucket should cover literal constants of the same primitive
// type, while a constant bucket only covers the literal values it contains. This
// distinction is used when union branches are reduced during metadata analysis.
//
// 1. Build broad string atomic metadata and a string literal metadata target.
// 2. Assert the atomic bucket covers the literal target.
// 3. Build a constant set containing `a` and `b`.
// 4. Assert it covers `b` but not an unrelated `c` literal.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_covers checks an atomic string against a literal and a two-value constant set against included and unrelated literals; over-wide or over-narrow constant containment changes a result.
// @evidence contracts/testing.md#independent-expectations A string atomic accepts every string literal and a constant set accepts only its members; the authored literals a, b, c and hello make each expected boolean independent of the function.
// @evidence contracts/testing.md#distinguishing-cases The atomic-over-literal case is positive; the constant set covering b is positive and covering c is the adjacent negative. Numeric and boolean constants are owned by sibling cases.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported coverage function on constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataSchemaCoversConstantsWithAtomicBucket(t *testing.T) {
  if !metadata.MetadataSchema_covers(testutil.AtomicMetadata("string"), testutil.StringConstantMetadata("hello")) {
    t.Fatal("string atomic bucket should cover string literal metadata")
  }

  source := testutil.StringConstantMetadata("a", "b")
  if !metadata.MetadataSchema_covers(source, testutil.StringConstantMetadata("b")) {
    t.Fatal("constant bucket should cover included literal")
  }
  if metadata.MetadataSchema_covers(source, testutil.StringConstantMetadata("c")) {
    t.Fatal("constant bucket should not cover unrelated literal")
  }
}
