package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestHttpMetadataUtilAtomicsAndUnion verifies HTTP metadata bucket
// aggregation.
//
// HTTP query, parameter, and header generation reduce metadata to atomic input
// categories. Constants contribute their declared atomic type, and templates
// behave as strings. This test pins those bucket rules and the union decision
// that follows from mixing multiple HTTP input categories.
//
// 1. Build metadata with a boolean atomic, number constant, and template row.
// 2. Collect HTTP atomic buckets.
// 3. Assert boolean, number, and string buckets are present.
// 4. Assert the mixed shape is considered a union.
func TestHttpMetadataUtilAtomicsAndUnion(t *testing.T) {
	meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Atomics: []*metadata.MetadataAtomic{
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "boolean"}),
		},
		Constants: []*metadata.MetadataConstant{
			metadata.MetadataConstant_create(metadata.MetadataConstant{
				Type: "number",
				Values: []*metadata.MetadataConstantValue{
					metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{Value: 1}),
				},
			}),
		},
		Templates: []*metadata.MetadataTemplate{
			metadata.MetadataTemplate_create(metadata.MetadataTemplate{
				Row: []*metadata.MetadataSchema{testutil.StringLiteralMetadata("prefix")},
			}),
		},
	})

	atomics := helpers.HttpMetadataUtil.Atomics(meta)
	for _, key := range []string{"boolean", "number", "string"} {
		if _, ok := atomics[key]; !ok {
			t.Fatalf("missing HTTP atomic bucket %q in %#v", key, atomics)
		}
	}
	if !helpers.HttpMetadataUtil.IsUnion(meta) {
		t.Fatal("mixed atomic/template metadata should be treated as an HTTP union")
	}
}
