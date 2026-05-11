package typia_test

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaIsUnionBucketMergesAtomicConstants verifies bucket logic.
//
// Atomic and constant primitive buckets are treated as one union category when
// computing union-bucket status. Adding a separate native bucket, however,
// creates a true union bucket.
//
// 1. Build metadata with string atomic and string literal buckets.
// 2. Assert it is not treated as a union bucket.
// 3. Add a Date native bucket.
// 4. Assert the schema is now a union bucket.
func TestMetadataSchemaIsUnionBucketMergesAtomicConstants(t *testing.T) {
	meta := metadata.MetadataSchema_create(metadata.MetadataSchema{
		Required: true,
		Atomics: []*metadata.MetadataAtomic{
			metadata.MetadataAtomic_create(metadata.MetadataAtomic{Type: "string"}),
		},
		Constants: []*metadata.MetadataConstant{
			metadata.MetadataConstant_create(metadata.MetadataConstant{
				Type: "string",
				Values: []*metadata.MetadataConstantValue{
					metadata.MetadataConstantValue_create(metadata.MetadataConstantValue{Value: "x"}),
				},
			}),
		},
	})
	if meta.IsUnionBucket() {
		t.Fatal("atomic plus constant bucket should be emended to one union category")
	}

	meta.Natives = append(meta.Natives, metadata.MetadataNative_create(metadata.MetadataNative{Name: "Date"}))
	if !meta.IsUnionBucket() {
		t.Fatal("adding a native bucket should make the schema a union bucket")
	}
}
