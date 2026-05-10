package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaMergeDeduplicatesConstants verifies literal merge behavior.
//
// Metadata merge combines constant buckets by primitive type and should append
// only new literal values. This prevents duplicate literal branches while still
// preserving additional values discovered from another metadata path.
//
// 1. Build two string constant schemas with one overlapping literal.
// 2. Merge them.
// 3. Assert the merged schema has one string constant bucket.
// 4. Assert the bucket contains the two unique literal values.
func TestMetadataSchemaMergeDeduplicatesConstants(t *testing.T) {
	merged := metadata.MetadataSchema_merge(
		testutil.StringConstantMetadata("a", "b"),
		testutil.StringConstantMetadata("b", "c"),
	)

	if len(merged.Constants) != 1 {
		t.Fatalf("merged constants should stay in one bucket: %#v", merged.Constants)
	}
	values := merged.Constants[0].Values
	if len(values) != 3 {
		t.Fatalf("merged constants should contain three unique values: %#v", values)
	}
	seen := map[any]bool{}
	for _, value := range values {
		seen[value.Value] = true
	}
	for _, expected := range []string{"a", "b", "c"} {
		if !seen[expected] {
			t.Fatalf("missing merged literal %q in %#v", expected, values)
		}
	}
}
