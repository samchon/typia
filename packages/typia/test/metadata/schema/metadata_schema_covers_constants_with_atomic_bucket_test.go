package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaCoversConstantsWithAtomicBucket verifies coverage rules.
//
// A broad atomic bucket should cover literal constants of the same primitive
// type, while a constant bucket only covers the literal values it contains. This
// distinction is used when union branches are reduced during metadata analysis.
//
// 1. Build broad string atomic metadata and a string literal metadata target.
// 2. Assert the atomic bucket covers the literal target.
// 3. Build a constant set containing `a` and `b`.
// 4. Assert it covers `b` but not an unrelated `c` literal.
func TestMetadataSchemaCoversConstantsWithAtomicBucket(t *testing.T) {
	if !metadata.MetadataSchema_covers(testutil.AtomicMetadata("string"), testutil.StringConstantMetadata("hello")) {
		t.Fatal("string atomic bucket should cover string literal metadata")
	}

	source := testutil.StringConstantMetadata("a", "b")
	if !metadata.MetadataSchema_covers(source, testutil.StringConstantMetadata("b")) {
		t.Fatal("constant bucket should cover included literal")
	}
	if metadata.MetadataSchema_covers(source, testutil.StringConstantMetadata("c")) {
		t.Fatal("constant bucket should not cover unrelated literal")
	}
}
