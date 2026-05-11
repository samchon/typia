package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestStringifyPredicatorDetectsEscapeAndUndefined verifies stringify guards.
//
// Stringify codegen has two early decisions: whether a literal needs JSON
// escaping and whether metadata can produce undefined. Both decisions are small
// but feed directly into emitted JSON string assembly.
//
// 1. Assert plain strings do not require escaping.
// 2. Assert newline, quote, and backslash characters require escaping.
// 3. Assert non-required metadata is undefindable.
// 4. Assert escaped return metadata can also make a required schema undefindable.
func TestStringifyPredicatorDetectsEscapeAndUndefined(t *testing.T) {
	if helpers.StringifyPredicator.Require_escape("plain") {
		t.Fatal("plain string should not require escaping")
	}
	for _, value := range []string{"line\nbreak", `"quoted"`, `path\to`} {
		if !helpers.StringifyPredicator.Require_escape(value) {
			t.Fatalf("string should require escaping: %q", value)
		}
	}

	if !helpers.StringifyPredicator.Undefindable(metadata.MetadataSchema_create(metadata.MetadataSchema{})) {
		t.Fatal("non-required metadata should be undefindable")
	}
	escaped := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Required: true,
		Escaped: metadata.MetadataEscaped_create(metadata.MetadataEscaped{
			Original: testutil.AtomicMetadata("string"),
			Returns:  metadata.MetadataSchema_create(metadata.MetadataSchema{}),
		}),
	})
	if !helpers.StringifyPredicator.Undefindable(escaped) {
		t.Fatal("escaped metadata with non-required returns should be undefindable")
	}
}
