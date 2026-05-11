package testutil

import "testing"

// TestStringLiteralMetadata verifies string literal schema construction.
//
// Literal-name and object-key tests use this helper to create a required schema
// containing one string constant bucket. This test pins the bucket shape and the
// literal value stored inside it.
//
// 1. Build metadata for one string literal.
// 2. Assert the resulting schema is required.
// 3. Assert exactly one string constant bucket exists.
// 4. Assert the bucket stores the requested literal value.
func TestStringLiteralMetadata(t *testing.T) {
	literal := StringLiteralMetadata("id")
	if !literal.Required || len(literal.Constants) != 1 {
		t.Fatalf("unexpected literal metadata: %+v", literal)
	}
	if constant := literal.Constants[0]; constant.Type != "string" || len(constant.Values) != 1 || constant.Values[0].Value != "id" {
		t.Fatalf("unexpected literal constant: %+v", constant)
	}
}
