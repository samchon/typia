package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProtobufUtilStaticObjectRequiresLiteralKeys verifies static-object checks.
//
// Protobuf object emission can only use a static object path when every
// property key is a sole literal. Empty objects and dynamic keys must stay out of
// that path because protobuf field names and numbers need fixed properties.
//
// 1. Build an object with one literal property key.
// 2. Assert it is recognized as static.
// 3. Build an empty object and assert it is not static.
// 4. Replace the key with non-literal metadata and assert it is not static.
func TestProtobufUtilStaticObjectRequiresLiteralKeys(t *testing.T) {
	static := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "User",
		Properties: []*metadata.MetadataProperty{
			testutil.Property("id", testutil.AtomicMetadata("string")),
		},
	})
	if !helpers.ProtobufUtil.IsStaticObject(static) {
		t.Fatal("literal-key object should be static")
	}

	empty := metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "Empty"})
	if helpers.ProtobufUtil.IsStaticObject(empty) {
		t.Fatal("empty object should not be static")
	}

	dynamic := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
		Name: "Dynamic",
		Properties: []*metadata.MetadataProperty{
			metadata.MetadataProperty_create(metadata.MetadataProperty{
				Key:   testutil.AtomicMetadata("string"),
				Value: testutil.AtomicMetadata("number"),
			}),
		},
	})
	if helpers.ProtobufUtil.IsStaticObject(dynamic) {
		t.Fatal("dynamic-key object should not be static")
	}
}
