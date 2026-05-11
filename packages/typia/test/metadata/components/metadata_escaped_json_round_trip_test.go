package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataEscapedJSONRoundTrip verifies escaped metadata conversion.
//
// Escaped metadata stores both the original input shape and the return shape
// used after JSON/stringify escaping. Both sides must survive DTO conversion,
// and the public name should follow the return metadata.
//
// 1. Build escaped metadata from string original and number returns schemas.
// 2. Convert it to JSON and back.
// 3. Assert original and return schemas are preserved.
// 4. Assert escaped metadata name follows the return schema name.
func TestMetadataEscapedJSONRoundTrip(t *testing.T) {
	escaped := metadata.MetadataEscaped_from(metadata.MetadataEscaped_create(metadata.MetadataEscaped{
		Original: testutil.AtomicMetadata("string"),
		Returns:  testutil.AtomicMetadata("number"),
	}).ToJSON(), testutil.EmptyMetadataDictionary())

	if escaped.Original.GetName() != "string" || escaped.Returns.GetName() != "number" {
		t.Fatalf("escaped schemas were not preserved: %#v", escaped)
	}
	if escaped.GetName() != "number" {
		t.Fatalf("escaped name should follow return schema: %q", escaped.GetName())
	}
}
