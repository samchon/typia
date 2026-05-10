package metadata

import (
	"math"
	"testing"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestSortConstantsCoverage exercises metadata sort helpers.
//
// Metadata sorting is usually reached after TypeScript checker traversal, but
// the final constant ordering and numeric conversion logic are pure metadata
// operations. This test feeds each supported numeric representation directly.
//
// 1. Convert float, integer, unsigned, and unknown values into sort numbers.
// 2. Sort number, string, bigint, and boolean constant buckets.
// 3. Verify the metadata union index path runs with an empty collection.
// 4. Assert sorted values land in deterministic ascending order.
func TestSortConstantsCoverage(t *testing.T) {
	for _, value := range []any{float64(1.5), float32(2.5), int(3), int64(4), int32(5), uint(6), uint64(7), uint32(8)} {
		if iterate_metadata_sort_float(value) == 0 {
			t.Fatalf("numeric conversion failed for %T", value)
		}
	}
	if iterate_metadata_sort_float(struct{}{}) != 0 {
		t.Fatal("unknown numeric conversion should return zero")
	}
	meta := schemametadata.MetadataSchema_initialize()
	meta.Constants = append(meta.Constants,
		sortCoverageConstant("number", 3, float32(1.5), uint64(2)),
		sortCoverageConstant("string", "b", "a"),
		sortCoverageConstant("bigint", uint64(3), int64(-1)),
		sortCoverageConstant("boolean", true, false),
	)
	Iterate_metadata_sort(struct {
		Collection *schemametadata.MetadataCollection
		Metadata   *schemametadata.MetadataSchema
	}{
		Collection: schemametadata.NewMetadataCollection(),
		Metadata:   meta,
	})
	if math.Abs(iterate_metadata_sort_float(meta.Constants[0].Values[0].Value)-1.5) > 0.0001 ||
		meta.Constants[1].Values[0].Value != "a" ||
		meta.Constants[2].Values[0].Value != int64(-1) ||
		meta.Constants[3].Values[0].Value != false {
		t.Fatal("metadata constants were not sorted as expected")
	}
}

func sortCoverageConstant(kind string, values ...any) *schemametadata.MetadataConstant {
	output := make([]*schemametadata.MetadataConstantValue, 0, len(values))
	for _, value := range values {
		output = append(output, schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}))
	}
	return schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type:   kind,
		Values: output,
	})
}
