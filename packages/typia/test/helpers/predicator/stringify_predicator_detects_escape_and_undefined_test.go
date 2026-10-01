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
//
// @evidence contracts/testing.md#behavioral-verification The escape predicate runs on plain, newline, quote and backslash strings and the undefined predicate on non-required and escaped-return metadata.
// @evidence contracts/testing.md#independent-expectations JSON string escaping rules define which strings need escaping and optionality defines undefinability; inputs and verdicts are authored.
// @evidence contracts/testing.md#distinguishing-cases A plain string is the negative against three escape characters; non-required and escaped-return metadata are the positive undefined cases.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported predicates with no filesystem fixture, process or native command build.
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
