package testutil

import "testing"

// TestNamedTag verifies named metadata tag construction.
//
// Name formatting tests use named tags to emulate validation annotations
// without depending on the parser pipeline. A plain named tag should only carry
// its display name and leave kind-specific fields unset.
//
// 1. Build a named metadata tag.
// 2. Assert the requested name is preserved.
// 3. Assert the kind field remains empty.
// 4. Assert no tag value is attached.
func TestNamedTag(t *testing.T) {
	tag := NamedTag("Minimum")
	if tag.Name != "Minimum" || tag.Kind != "" || tag.Value != nil {
		t.Fatalf("unexpected named tag: %+v", tag)
	}
}
