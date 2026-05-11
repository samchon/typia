package testutil

import "testing"

// TestContains verifies string slice membership checks.
//
// Several table-free tests use Contains to keep assertions readable when they
// only need to check whether a generated name appears in a small string list.
// This test pins both outcomes so callers can rely on exact membership checks.
//
// 1. Build a representative string slice.
// 2. Assert an existing value is found.
// 3. Assert a missing value is not found.
// 4. Keep the helper scoped to exact string equality.
func TestContains(t *testing.T) {
	values := []string{"alpha", "beta", "gamma"}
	if !Contains(values, "beta") {
		t.Fatal("expected slice to contain beta")
	}
	if Contains(values, "delta") {
		t.Fatal("did not expect slice to contain delta")
	}
}
