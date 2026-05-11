package typia_test

import (
	testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataFunctionParameterJSONRoundTrip verifies function metadata DTOs.
//
// Function metadata carries parameter metadata, output metadata, async state,
// and optional documentation. These fields are used by reflect metadata output
// and should round-trip without relying on checker-only fields.
//
// 1. Build function metadata with one documented parameter.
// 2. Convert the function metadata to JSON and back.
// 3. Assert parameter name, async flag, and output metadata are preserved.
func TestMetadataFunctionParameterJSONRoundTrip(t *testing.T) {
	description := "input value"
	fn := metadata.MetadataFunction_from(metadata.MetadataFunction_create(metadata.MetadataFunction{
		Async:  true,
		Output: testutil.AtomicMetadata("boolean"),
		Parameters: []*metadata.MetadataParameter{
			metadata.MetadataParameter_create(metadata.MetadataParameter{
				Name:        "input",
				Type:        testutil.AtomicMetadata("string"),
				Description: &description,
			}),
		},
	}).ToJSON(), testutil.EmptyMetadataDictionary())

	if !fn.Async || fn.Output.GetName() != "boolean" {
		t.Fatalf("function flags/output were not preserved: %#v", fn)
	}
	if len(fn.Parameters) != 1 || fn.Parameters[0].Name != "input" || fn.Parameters[0].Type.GetName() != "string" {
		t.Fatalf("function parameter was not preserved: %#v", fn.Parameters)
	}
	if fn.Parameters[0].Description == nil || *fn.Parameters[0].Description != description {
		t.Fatalf("parameter description was not preserved: %#v", fn.Parameters[0].Description)
	}
}
