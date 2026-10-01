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
//
// @evidence contracts/testing.md#behavioral-verification Function metadata with an async flag, boolean output and one documented parameter is converted to JSON and back; the flag, output name, parameter name, type and description are compared.
// @evidence contracts/testing.md#independent-expectations The authored construction values are the expectation, so a dropped field fails independently of the converter.
// @evidence contracts/testing.md#distinguishing-cases One function with one parameter; functions without parameters or descriptions are not covered.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It converts in memory with no filesystem fixture, process or native command build.
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
