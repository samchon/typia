package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTemplateBaseNameEscapesLiterals verifies template display text.
//
// Template metadata combines string-literal rows directly and wraps dynamic
// rows in `${...}` placeholders. Backticks inside literal rows must be escaped
// so the display name remains a valid template-literal representation.
//
// 1. Build template metadata from one literal row and one atomic row.
// 2. Include a backtick in the literal row.
// 3. Assert the base name escapes the backtick and wraps the atomic row.
//
// @evidence contracts/testing.md#behavioral-verification GetBaseName on template metadata with a backtick in a literal row and an atomic row returns an exact template-literal string.
// @evidence contracts/testing.md#independent-expectations The expected `a\`b${number}` is authored from template-literal escaping rules.
// @evidence contracts/testing.md#distinguishing-cases One template with an escape and a placeholder; templates without literals are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It reads a name from constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataTemplateBaseNameEscapesLiterals(t *testing.T) {
	template := metadata.MetadataTemplate_create(metadata.MetadataTemplate{
		Row: []*metadata.MetadataSchema{
			testutil.StringLiteralMetadata("a`b"),
			testutil.AtomicMetadata("number"),
		},
	})

	if got := template.GetBaseName(); got != "`a\\`b${number}`" {
		t.Fatalf("unexpected template base name: %q", got)
	}
}
