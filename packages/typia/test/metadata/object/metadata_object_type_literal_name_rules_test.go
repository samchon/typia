package typia_test

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataObjectTypeLiteralNameRules verifies literal-object naming rules.
//
// Literal object metadata is detected from TypeScript's synthetic object type
// names. A second anonymous type duplicates the first, so its allocated id
// carries the collection's disambiguating counter and the bare marker alone
// cannot recognize it. Recursive objects must never be classified as literals,
// even when their name uses the same synthetic marker.
//
// 1. Build object types named by the bare synthetic marker, by the marker plus
//    a disambiguating counter, and by a readonly tuple-style rendering.
// 2. Assert all three are classified as literal object types.
// 3. Build a qualified name that merely starts with the marker.
// 4. Assert it is not a literal, since the marker is not a namespace.
// 5. Build a recursive anonymous object and assert recursion disables literal
//    classification.
func TestMetadataObjectTypeLiteralNameRules(t *testing.T) {
	for _, name := range []string{"__type", "__type-o1", "__object-o2", "readonly [string]"} {
		if !metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: name}).IsLiteral() {
			t.Fatalf("anonymous object name should be literal: name=%q", name)
		}
	}
	if metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "__type.member"}).IsLiteral() {
		t.Fatal("a qualified member of a namespace named __type is not an anonymous literal")
	}
	if metadata.MetadataObjectType_create(metadata.MetadataObjectType{Name: "__type-o1", Recursive: true}).IsLiteral() {
		t.Fatal("recursive object should not be literal")
	}
}
