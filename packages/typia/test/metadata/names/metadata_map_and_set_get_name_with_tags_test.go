package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataMapAndSetGetNameWithTags verifies container display names.
//
// Map and Set metadata names compose child metadata names and then apply tag
// formatting. These names are used by schema merge and codegen helper caches, so
// both child names and tags must be stable.
//
// 1. Build tagged Set metadata with a string value schema.
// 2. Build tagged Map metadata with string keys and number values.
// 3. Assert both names include composed child schemas and tag names.
func TestMetadataMapAndSetGetNameWithTags(t *testing.T) {
	set := metadata.MetadataSet_create(metadata.MetadataSet{
		Value: testutil.AtomicMetadata("string"),
		Tags:  [][]metadata.IMetadataTypeTag{{testutil.NamedTag("Unique")}},
	})
	if got := set.GetName(); got != "(Set<string> & Unique)" {
		t.Fatalf("unexpected set name: %q", got)
	}

	m := metadata.MetadataMap_create(metadata.MetadataMap{
		Key:   testutil.AtomicMetadata("string"),
		Value: testutil.AtomicMetadata("number"),
		Tags:  [][]metadata.IMetadataTypeTag{{testutil.NamedTag("Entries")}},
	})
	if got := m.GetName(); got != "(Map<string, number> & Entries)" {
		t.Fatalf("unexpected map name: %q", got)
	}
}
