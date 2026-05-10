package typia_test

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataObjectTypeLiteralNameRules verifies literal-object naming rules.
//
// Literal object metadata is detected from TypeScript's synthetic object type
// names. Recursive objects must never be classified as literals, even if their
// name uses the same synthetic prefix.
//
// 1. Build object types with `__type.*` and readonly tuple-style names.
// 2. Assert both are classified as literal object types.
// 3. Build a recursive `__type.*` object.
// 4. Assert recursion disables literal classification.
func TestMetadataObjectTypeLiteralNameRules(t *testing.T) {
	if !metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "__type.member"}).IsLiteral() {
		t.Fatal("__type.* name should be literal")
	}
	if !metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "readonly [string]"}).IsLiteral() {
		t.Fatal("readonly tuple-like name should be literal")
	}
	if metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "__type.loop", Recursive: true}).IsLiteral() {
		t.Fatal("recursive object should not be literal")
	}
}
