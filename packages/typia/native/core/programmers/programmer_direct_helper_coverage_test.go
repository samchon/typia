//go:build typia_native_internal
// +build typia_native_internal

package programmers

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProgrammerDirectHelperCoverage covers direct programmer helpers.
//
// Several programmer helpers only assemble TypeScript AST expressions and are
// usually reached through larger transform scenarios. This unit test calls them
// directly with a minimal context so their deterministic AST construction stays
// covered without needing a TypeScript program.
//
// 1. Build is-check expressions for toJSON and function values.
// 2. Generate random Blob and File expressions through native decoders.
// 3. Build ranged string generation used by File name synthesis.
// 4. Verify tuple local-name prefix formatting.
func TestProgrammerDirectHelperCoverage(t *testing.T) {
	input := isProgrammer_factory.NewIdentifier("input")
	if IsProgrammer.Decode_to_json(struct {
		Input     *shimast.Expression
		CheckNull bool
	}{Input: input, CheckNull: true}) == nil {
		t.Fatal("toJSON is-check expression returned nil")
	}
	if IsProgrammer.Decode_functional(input) == nil {
		t.Fatal("functional is-check expression returned nil")
	}

	context := nativecontext.ITypiaContext{}
	functor := nativehelpers.NewFunctionProgrammer("random")
	if IsProgrammer.Decode_object(IsProgrammer_DecodeObjectProps{
		Context: context,
		Functor: functor,
		Object: nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{
			Name:       "Empty",
			Properties: []*nativemetadata.MetadataProperty{},
		}),
		Input: input,
	}) == nil {
		t.Fatal("object is-check decoder returned nil")
	}
	props := struct {
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
		Explore randomProgrammer_IExplore
		Name    string
	}{Context: context, Functor: functor}
	if randomProgrammer_decode_native_blob(props) == nil {
		t.Fatal("random blob decoder returned nil")
	}
	props.Name = "File"
	if randomProgrammer_decode_native_file(props) == nil {
		t.Fatal("random file decoder returned nil")
	}
	if randomProgrammer_write_ranged_string(context, 1, 8) == nil {
		t.Fatal("ranged string writer returned nil")
	}
	if randomProgrammer_prefix_tuple(4) != "_rt4" {
		t.Fatal("tuple prefix formatting mismatch")
	}
}
