package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataApplicationJSONRoundTrip verifies application DTO conversion.
//
// Reflect-schema transformers return a metadata application made of root
// schemas and shared components. The application-level converter must preserve
// both sides even when the component set is empty.
//
// 1. Build an application DTO with one string schema and empty components.
// 2. Convert it into runtime metadata.
// 3. Convert it back to JSON.
// 4. Assert the root schema and empty component collections are preserved.
func TestMetadataApplicationJSONRoundTrip(t *testing.T) {
	app := metadata.MetadataApplication_from(metadata.IMetadataSchemaCollection{
		Schemas: []*metadata.IMetadataSchema{
			testutil.AtomicMetadata("string").ToJSON(),
		},
		Components: metadata.IMetadataComponents{},
	})

	json := app.ToJSON()
	if len(json.Schemas) != 1 || len(json.Schemas[0].Atomics) != 1 || json.Schemas[0].Atomics[0].Type != "string" {
		t.Fatalf("application schema was not preserved: %#v", json.Schemas)
	}
	if len(json.Components.Objects) != 0 || len(json.Components.Aliases) != 0 {
		t.Fatalf("empty components should stay empty: %#v", json.Components)
	}
}
