package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataConstantValueGetNameQuotesAndTags verifies literal formatting.
//
// Constant-value names are the display form for literal metadata. String values
// must use JSON quoting rules, and tags must be retained as intersections so
// literal constraints remain visible in merged names.
//
// 1. Build a string constant containing quote and newline characters.
// 2. Assert its name uses JSON string escaping.
// 3. Build a tagged constant value.
// 4. Assert the tag name is appended to the literal display name.
func TestMetadataConstantValueGetNameQuotesAndTags(t *testing.T) {
	quoted := metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{Value: "a\"\n"})
	if got := quoted.GetName(); got != "\"a\\\"\\n\"" {
		t.Fatalf("unexpected quoted constant name: %q", got)
	}

	tagged := metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{
		Value: "id",
		Tags:  [][]metadata.IMetadataTypeTag{{testutil.NamedTag("Uuid")}},
	})
	if got := tagged.GetName(); got != "(\"id\" & (Uuid))" {
		t.Fatalf("unexpected tagged constant name: %q", got)
	}
}
