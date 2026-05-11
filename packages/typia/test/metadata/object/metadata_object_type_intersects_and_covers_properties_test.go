package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataObjectTypeIntersectsAndCoversProperties verifies property matching.
//
// Object union reduction uses property-name overlap to decide whether object
// branches intersect and whether one object property set covers another. The
// comparison is intentionally based on metadata key names rather than pointer
// identity.
//
// 1. Build two object types that share an `id` property.
// 2. Assert they intersect by property name.
// 3. Assert equal property sets cover each other.
// 4. Assert a smaller property set does not cover a larger one.
func TestMetadataObjectTypeIntersectsAndCoversProperties(t *testing.T) {
	left := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "Left",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("id", testutil.AtomicMetadata("string")),
			testutil.Property("name", testutil.AtomicMetadata("string")),
		},
	})
	same := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "Same",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("id", testutil.AtomicMetadata("number")),
			testutil.Property("name", testutil.AtomicMetadata("string")),
		},
	})
	smaller := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "Smaller",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("id", testutil.AtomicMetadata("string")),
		},
	})

	if !metadata.MetadataObjectType_intersects(left, smaller) {
		t.Fatal("objects sharing a property name should intersect")
	}
	if !metadata.MetadataObjectType_covers(left, same) {
		t.Fatal("equal property-name sets should cover each other")
	}
	if metadata.MetadataObjectType_covers(smaller, left) {
		t.Fatal("smaller property set should not cover larger object")
	}
}
