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
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema merge of two string constant schemas with one overlapping literal yields one bucket holding the unique values.
// @evidence contracts/testing.md#independent-expectations Set union of the authored literals gives the three unique values; the expected set is stated in the test, not read from the merge.
// @evidence contracts/testing.md#distinguishing-cases One overlapping literal separates deduplication from concatenation; merging different primitive types is not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It merges constructed metadata in memory with no filesystem fixture, process or native command build.
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
