package typia_test

import (
  "testing"

  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaSoleLiteralAndSize verifies literal metadata accounting.
//
// Literal property keys are represented as one-value string constant metadata.
// That small shape is used by object plainness checks, protobuf static-object
// detection, and property access generation, so the size, bucket, requiredness,
// and sole-literal helpers must agree on the same interpretation.
//
// 1. Build metadata for one string literal.
// 2. Assert it occupies one metadata slot and one bucket.
// 3. Assert it stays required.
// 4. Assert the sole-literal accessor returns the original string.
//
// @evidence contracts/testing.md#behavioral-verification Size, Bucket, IsRequired and IsSoleLiteral are read on a one-value string literal schema.
// @evidence contracts/testing.md#independent-expectations A property-key literal has one slot, one bucket, is required and returns its value; these are authored from the key representation.
// @evidence contracts/testing.md#distinguishing-cases One literal schema; multi-value and non-string literals are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It constructs metadata and reads accessors directly, with no filesystem fixture, process or native command build.
func TestMetadataSchemaSoleLiteralAndSize(t *testing.T) {
  literal := testutil.StringLiteralMetadata("member_id")

  if literal.Size() != 1 {
    t.Fatalf("literal size must be 1: %d", literal.Size())
  }
  if literal.Bucket() != 1 {
    t.Fatalf("literal bucket must be 1: %d", literal.Bucket())
  }
  if !literal.IsRequired() {
    t.Fatal("literal metadata should be required")
  }
  if !literal.IsSoleLiteral() {
    t.Fatal("literal metadata should be recognized as sole literal")
  }
  if value := literal.GetSoleLiteral(); value == nil || *value != "member_id" {
    t.Fatalf("unexpected sole literal: %#v", value)
  }
}
