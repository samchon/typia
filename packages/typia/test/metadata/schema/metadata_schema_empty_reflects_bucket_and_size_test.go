package typia_test

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataSchemaEmptyReflectsBucketAndSize verifies empty-schema detection.
//
// Empty metadata is defined by both bucket count and total size. This prevents
// flag-only metadata from masquerading as a real type bucket and keeps unknown
// metadata distinct from `any`.
//
// 1. Create default metadata with no buckets.
// 2. Assert it is empty and has no size.
// 3. Create `any` metadata.
// 4. Assert `any` is not empty because it occupies one bucket.
func TestMetadataSchemaEmptyReflectsBucketAndSize(t *testing.T) {
	empty := metadata.MetadataSchema_create(metadata.MetadataSchema{Required: true})
	if !empty.Empty() || empty.Size() != 0 || empty.Bucket() != 0 {
		t.Fatalf("bucketless metadata should be empty: size=%d bucket=%d", empty.Size(), empty.Bucket())
	}

	anyMeta := metadata.MetadataSchema_create(metadata.MetadataSchema{Any: true, Required: true})
	if anyMeta.Empty() || anyMeta.Size() != 1 || anyMeta.Bucket() != 1 {
		t.Fatalf("any metadata should occupy one bucket: size=%d bucket=%d", anyMeta.Size(), anyMeta.Bucket())
	}
}
