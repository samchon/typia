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
//
// @evidence contracts/testing.md#behavioral-verification Size and Bucket are read on default metadata and on any metadata, and bucketless metadata must report zero for both.
// @evidence contracts/testing.md#independent-expectations A schema with no buckets has size and bucket count zero and any occupies one bucket; both literals follow the definition of the accessors.
// @evidence contracts/testing.md#distinguishing-cases Bucketless metadata is the empty case and any is the adjacent non-empty case; multi-bucket accounting is owned by the sole-literal case.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It constructs metadata and reads accessors directly, with no filesystem fixture, process or native command build.
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
