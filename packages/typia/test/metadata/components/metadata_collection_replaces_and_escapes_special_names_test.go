package typia_test

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataCollectionReplacesAndEscapesSpecialNames verifies name encoding.
//
// Metadata collection names can contain TypeScript punctuation that is unsafe
// for generated helper identifiers. Replacement strips punctuation when a name
// still has ordinary text and falls back to encoded tokens when the whole name
// would otherwise disappear.
//
// 1. Build a mixed text-and-punctuation name.
// 2. Assert replacement strips unsafe punctuation from the mixed name.
// 3. Build a punctuation-only name and replace it.
// 4. Escape the encoded fallback and assert punctuation is recovered.
func TestMetadataCollectionReplacesAndEscapesSpecialNames(t *testing.T) {
	mixed := `$A & B | {C}<D>[0], "E" 'F' ? : ;`
	if replaced := metadata.MetadataCollection_replace(mixed); replaced != "ABCD0EF" {
		t.Fatalf("mixed metadata name should strip punctuation: %q", replaced)
	}

	punctuation := "$&|{}<[]> ,`'\"?:;"
	replaced := metadata.MetadataCollection_replace(punctuation)
	if replaced == punctuation || replaced == "" {
		t.Fatalf("punctuation-only name should be encoded: %q", replaced)
	}
	if got := metadata.MetadataCollection_escape(replaced); got != punctuation {
		t.Fatalf("escaped metadata name mismatch:\nexpected %q\nactual   %q", punctuation, got)
	}
}
