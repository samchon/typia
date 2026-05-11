package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataPropertyJSONRoundTrip verifies property DTO conversion.
//
// Object properties contain separate key and value metadata plus optional
// mutability and documentation. The key/value metadata must round-trip through
// DTO conversion because object component restoration depends on it.
//
// 1. Build a property with literal key metadata and number value metadata.
// 2. Convert it to JSON and back.
// 3. Assert key, value, and mutability are preserved.
func TestMetadataPropertyJSONRoundTrip(t *testing.T) {
	mutability := "readonly"
	prop := metadata.MetadataProperty_from(metadata.MetadataProperty_create(metadata.MetadataProperty{
		Key:        testutil.StringLiteralMetadata("count"),
		Value:      testutil.AtomicMetadata("number"),
		Mutability: &mutability,
	}).ToJSON(), testutil.EmptyMetadataDictionary())

	if key := prop.Key.GetSoleLiteral(); key == nil || *key != "count" {
		t.Fatalf("property key was not preserved: %#v", prop.Key)
	}
	if prop.Value.GetName() != "number" {
		t.Fatalf("property value was not preserved: %#v", prop.Value)
	}
	if prop.Mutability == nil || *prop.Mutability != "readonly" {
		t.Fatalf("property mutability was not preserved: %#v", prop.Mutability)
	}
}
