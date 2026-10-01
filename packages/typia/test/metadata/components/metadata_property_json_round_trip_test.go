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
//
// @evidence contracts/testing.md#behavioral-verification A property with a literal key, number value and readonly mutability is converted to JSON and back; key, value and mutability are compared.
// @evidence contracts/testing.md#independent-expectations The authored property is the expectation for the round trip.
// @evidence contracts/testing.md#distinguishing-cases One property with every field set; the absent-mutability case is not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It converts in memory with no filesystem fixture, process or native command build.
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
