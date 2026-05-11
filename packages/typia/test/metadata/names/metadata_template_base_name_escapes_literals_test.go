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
