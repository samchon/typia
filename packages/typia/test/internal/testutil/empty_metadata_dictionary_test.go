package testutil

import "testing"

// TestEmptyMetadataDictionary verifies dictionary initialization.
//
// Metadata JSON round-trip tests pass dictionaries through many constructors,
// and nil maps would force each caller to guard before inserting references.
// The helper should therefore return an empty dictionary with all maps ready.
//
// 1. Build an empty metadata dictionary.
// 2. Assert object references map is initialized.
// 3. Assert alias references map is initialized.
// 4. Assert array and tuple references maps are initialized.
func TestEmptyMetadataDictionary(t *testing.T) {
	dict := EmptyMetadataDictionary()
	if dict.Objects == nil || dict.Aliases == nil || dict.Arrays == nil || dict.Tuples == nil {
		t.Fatalf("expected dictionary maps to be initialized: %+v", dict)
	}
}
