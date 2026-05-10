package http

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestHttpProgrammerHelperCoverage exercises HTTP array helpers.
//
// Header and form-data array readers have separate branches for required,
// nullable, cookie-delimited, and string-trimming behavior. These helpers are
// pure AST builders, so direct calls cover them without an HTTP transform.
//
// 1. Return required non-null form-data arrays unchanged.
// 2. Build nullable and optional form-data array readers.
// 3. Build header array readers for string, number, and cookie delimiters.
// 4. Verify HTTP import, property-key, type decoding, and debug helpers.
func TestHttpProgrammerHelperCoverage(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	input := factory.NewIdentifier("input")
	required := httpMetadata("string", true, false)
	optional := httpMetadata("string", false, false)
	nullable := httpMetadata("string", true, true)
	if httpFormDataProgrammer_decode_array(struct {
		Context  nativecontext.ITypiaContext
		Metadata *schemametadata.MetadataSchema
		Input    *shimast.Node
	}{Metadata: required, Input: input}) != input {
		t.Fatal("required form-data array should return input unchanged")
	}
	if httpFormDataProgrammer_decode_array(struct {
		Context  nativecontext.ITypiaContext
		Metadata *schemametadata.MetadataSchema
		Input    *shimast.Node
	}{Metadata: optional, Input: input}) == nil ||
		httpFormDataProgrammer_decode_array(struct {
			Context  nativecontext.ITypiaContext
			Metadata *schemametadata.MetadataSchema
			Input    *shimast.Node
		}{Metadata: nullable, Input: input}) == nil {
		t.Fatal("form-data array reader returned nil")
	}
	if httpHeadersProgrammer_decode_array(struct {
		Context nativecontext.ITypiaContext
		Type    string
		Key     string
		Value   *schemametadata.MetadataSchema
		Input   *shimast.Node
	}{Type: "string", Key: "accept", Value: required, Input: input}) == nil ||
		httpHeadersProgrammer_decode_array(struct {
			Context nativecontext.ITypiaContext
			Type    string
			Key     string
			Value   *schemametadata.MetadataSchema
			Input   *shimast.Node
		}{Type: "number", Key: "cookie", Value: optional, Input: input}) == nil {
		t.Fatal("header array reader returned nil")
	}
	if httpProgrammer_debug([]string{"a", "b"}) == "" {
		t.Fatal("HTTP debug helper returned empty text")
	}
	if httpProgrammer_method_text(nil) != "" ||
		httpProgrammer_method_text(factory.NewIdentifier("method")) != "method" {
		t.Fatal("HTTP method text helper mismatch")
	}
	if httpProgrammer_import_type(nativecontext.ITypiaContext{}, nativeprogrammers.ImportProgrammer_TypeProps{Name: "Alias"}) == nil ||
		httpProgrammer_import_type(nativecontext.ITypiaContext{}, nativeprogrammers.ImportProgrammer_TypeProps{Name: factory.NewIdentifier("AliasNode")}) == nil ||
		httpProgrammer_import_type(nativecontext.ITypiaContext{Importer: httpProgrammerImporter{}}, nativeprogrammers.ImportProgrammer_TypeProps{Name: "Alias"}) == nil {
		t.Fatal("HTTP import type helper returned nil")
	}
	if httpProgrammer_property_key(nil) != "" ||
		httpProgrammer_property_key(schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: httpLiteral("field")})) != "field" {
		t.Fatal("HTTP property key helper mismatch")
	}
	nativeBlob := schemametadata.MetadataSchema_initialize()
	nativeBlob.Natives = append(nativeBlob.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Blob"}))
	nativeFile := schemametadata.MetadataSchema_initialize()
	nativeFile.Natives = append(nativeFile.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "File"}))
	array := schemametadata.MetadataSchema_initialize()
	array.Arrays = append(array.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "string[]", Value: required}),
	}))
	tuple := schemametadata.MetadataSchema_initialize()
	tuple.Tuples = append(tuple.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{Name: "[string]", Elements: []*schemametadata.MetadataSchema{required}}),
	}))
	constant := schemametadata.MetadataSchema_initialize()
	constant.Constants = append(constant.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{Type: "number"}))
	for _, meta := range []*schemametadata.MetadataSchema{nil, required, constant, nativeBlob, nativeFile, array, tuple} {
		if _, ok := httpProgrammer_decode_type_from_metadata(meta, true, false); meta != nil && !ok && len(meta.Arrays) != 0 {
			t.Fatal("HTTP array decode type should report array output")
		}
	}
}

func httpMetadata(kind string, required bool, nullable bool) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Required = required
	meta.Optional = !required
	meta.Nullable = nullable
	meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: kind}))
	return meta
}

type httpProgrammerImporter struct{}

func (httpProgrammerImporter) Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
	return httpFormDataProgrammer_factory.NewIdentifier("Imported")
}

func httpLiteral(value string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "string",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
		},
	}))
	return meta
}
