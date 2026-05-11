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
