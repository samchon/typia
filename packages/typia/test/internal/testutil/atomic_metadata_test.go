package testutil

import "testing"

// TestAtomicMetadata verifies primitive atomic schema construction.
//
// Many metadata tests need a compact required primitive schema without building
// every metadata bucket manually. This test ensures the helper creates exactly
// one atomic bucket for the requested primitive kind.
//
// 1. Build metadata for the string atomic type.
// 2. Assert the resulting schema is required.
// 3. Assert exactly one atomic bucket exists.
// 4. Assert the bucket records the requested primitive type.
func TestAtomicMetadata(t *testing.T) {
	atomic := AtomicMetadata("string")
	if !atomic.Required || len(atomic.Atomics) != 1 || atomic.Atomics[0].Type != "string" {
		t.Fatalf("unexpected atomic metadata: %+v", atomic)
	}
}
