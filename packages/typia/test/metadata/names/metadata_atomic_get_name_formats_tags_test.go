package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataAtomicGetNameFormatsTags verifies atomic tag display names.
//
// Atomic metadata names are reused for diagnostics, map keys, and schema merge
// comparisons. Single-row tags should append as intersections, while multiple
// rows should format as a union of tag intersections.
//
// 1. Build untagged atomic metadata and assert its bare name.
// 2. Build a one-row tagged atomic and assert intersection formatting.
// 3. Build a multi-row tagged atomic and assert union formatting.
//
// @evidence contracts/testing.md#behavioral-verification GetName on bare, one-row tagged and multi-row tagged atomic metadata returns exact strings.
// @evidence contracts/testing.md#independent-expectations The expected formats (number & Minimum & Maximum) and the union of intersections are authored literals following the tag-name rule.
// @evidence contracts/testing.md#distinguishing-cases Bare, single-row and multi-row cases flip the intersection versus union formatting.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It reads names from constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataAtomicGetNameFormatsTags(t *testing.T) {
	if got := metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "string"}).GetName(); got != "string" {
		t.Fatalf("unexpected bare atomic name: %q", got)
	}

	oneRow := metadata.MetadataAtomic_create(metadata.MetadataAtomic{
		Type: "number",
		Tags: [][]metadata.IMetadataTypeTag{{testutil.NamedTag("Minimum"), testutil.NamedTag("Maximum")}},
	})
	if got := oneRow.GetName(); got != "(number & Minimum & Maximum)" {
		t.Fatalf("unexpected one-row atomic name: %q", got)
	}

	multiRow := metadata.MetadataAtomic_create(metadata.MetadataAtomic{
		Type: "number",
		Tags: [][]metadata.IMetadataTypeTag{
			{testutil.NamedTag("Int32")},
			{testutil.NamedTag("Minimum"), testutil.NamedTag("Maximum")},
		},
	})
	if got := multiRow.GetName(); got != "(number & (Int32 | (Minimum & Maximum)))" {
		t.Fatalf("unexpected multi-row atomic name: %q", got)
	}
}
