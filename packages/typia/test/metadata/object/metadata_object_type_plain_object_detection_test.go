package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataObjectTypePlainObjectDetection verifies object plainness
// classification.
//
// Plain object detection is a low-level metadata decision used by downstream
// code generation paths. A plain object needs literal property keys, required
// values, non-nullable metadata, and a compact non-recursive shape. This test
// covers the happy path and then flips one property to optional to prove the
// same object no longer qualifies.
//
// 1. Build a literal `__type.*` object with required atomic properties.
// 2. Assert it is treated as both plain and literal.
// 3. Make one property optional.
// 4. Assert the object is no longer plain.
func TestMetadataObjectTypePlainObjectDetection(t *testing.T) {
	object := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "__type.member",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("id", testutil.AtomicMetadata("string")),
			testutil.Property("age", testutil.AtomicMetadata("number")),
		},
	})

	if !object.IsPlain() {
		t.Fatal("object with required literal atomic properties should be plain")
	}
	if !object.IsLiteral() {
		t.Fatal("__type.* object names should be treated as literal object types")
	}

	object.Properties[1].Value.Optional = true
	if object.IsPlain() {
		t.Fatal("optional property should make object non-plain")
	}
}
