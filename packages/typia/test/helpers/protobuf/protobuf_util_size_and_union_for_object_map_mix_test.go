package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProtobufUtilSizeAndUnionForObjectMapMix verifies structural bucket count.
//
// Protobuf generation treats objects, maps, arrays, tuples, natives, and atomic
// scalar buckets as independent choices. Mixing a structural object with a map
// should therefore increase size and be classified as a union.
//
// 1. Build metadata containing one object reference and one map bucket.
// 2. Ask protobuf utility for its bucket size.
// 3. Assert both buckets are counted.
// 4. Assert the mixed shape is considered a union.
func TestProtobufUtilSizeAndUnionForObjectMapMix(t *testing.T) {
	meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Objects: []*metadata.MetadataObject{
			metadata.MetadataObject_create(metadata.MetadataObject{
				Type: metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "User"}),
			}),
		},
		Maps: []*metadata.MetadataMap{
			metadata.MetadataMap_create(metadata.MetadataMap{
				Key:   testutil.AtomicMetadata("string"),
				Value: testutil.AtomicMetadata("number"),
			}),
		},
	})

	if size := helpers.ProtobufUtil.Size(meta); size != 2 {
		t.Fatalf("object and map buckets should count as size 2: %d", size)
	}
	if !helpers.ProtobufUtil.IsUnion(meta) {
		t.Fatal("object/map mix should be a protobuf union")
	}
}
