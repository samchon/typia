//go:build typia_native_internal
// +build typia_native_internal

package llm

import (
	"strings"
	"testing"

	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestLlmApplicationProgrammerCoverage exercises application validation helpers.
//
// TypeScript fixture transforms cover the public LLM application entrypoint, but
// most validation branches are determined by metadata shape rather than emitted
// JavaScript. This test feeds those shapes directly so function naming, object
// schema, hidden JSDoc, and parameter conversion behavior stays covered.
//
// 1. Validate top-level and nested LLM application metadata failures.
// 2. Convert empty, native, map-backed, and output-backed parameter schemas.
// 3. Check object schema, function schema, hidden tag, and equals helpers.
// 4. Merge property descriptions from summary and JSDoc description tags.
func TestLlmApplicationProgrammerCoverage(t *testing.T) {
	fn := schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
		Parameters: []*schemametadata.MetadataParameter{
			schemametadata.MetadataParameter_create(schemametadata.MetadataParameter{Name: "first", Type: llmSchemaAtomic("string")}),
			schemametadata.MetadataParameter_create(schemametadata.MetadataParameter{Name: "second", Type: llmSchemaAtomic("number")}),
		},
		Output: schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Optional: true, Nullable: true}),
	})
	functionValue := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
		Optional:  true,
		Nullable:  true,
		Atomics:   []*schemametadata.MetadataAtomic{schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"})},
		Functions: []*schemametadata.MetadataFunction{fn, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{})},
	})
	longDescription := strings.Repeat("x", 1025)
	objectType := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "Application",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: llmSchemaAtomic("string"), Value: llmSchemaAtomic("number")}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:         llmSchemaLiteral("1 bad"),
				Value:       functionValue,
				Description: &longDescription,
			}),
		},
	})
	invalid := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
		Required: true,
		Objects:  []*schemametadata.MetadataObject{schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectType})},
		Atomics:  []*schemametadata.MetadataAtomic{schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"})},
	})
	topMessages := LlmApplicationProgrammer.Validate(struct {
		Config   map[string]any
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
		Top      *schemametadata.MetadataSchema
	}{Metadata: invalid, Explore: nativefactories.MetadataFactory_IExplore{Top: true}})
	if len(topMessages) < 6 {
		t.Fatalf("top-level application validation should report shape, dynamic key, and function errors: %v", topMessages)
	}

	nestedMessages := LlmApplicationProgrammer.Validate(struct {
		Config   map[string]any
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
		Top      *schemametadata.MetadataSchema
	}{
		Metadata: schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Required: true, Functions: []*schemametadata.MetadataFunction{fn}}),
		Explore:  nativefactories.MetadataFactory_IExplore{Object: objectType, Property: "bad nested name"},
		Top:      schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Required: true, Objects: []*schemametadata.MetadataObject{schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectType})}}),
	})
	if len(nestedMessages) == 0 {
		t.Fatal("nested function validation should report function metadata errors")
	}
	delegatedMessages := LlmApplicationProgrammer.Validate(struct {
		Config   map[string]any
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
		Top      *schemametadata.MetadataSchema
	}{Metadata: schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
		Required: true,
		Atomics:  []*schemametadata.MetadataAtomic{schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint"})},
	})})
	if len(delegatedMessages) == 0 {
		t.Fatal("nested non-function metadata should delegate to LLM schema validation")
	}

	components := &nativeiterate.OpenApi_IComponents{Schemas: map[string]nativeiterate.JsonSchema{
		"Params": {"type": "object", "properties": map[string]any{"id": nativeiterate.JsonSchema{"type": "string"}}, "required": []any{"id"}},
	}}
	emptyParameters := llmApplicationProgrammer_writeParameters(struct {
		Context    nativecontext.ITypiaContext
		Components *nativeiterate.OpenApi_IComponents
		Function   map[string]any
		Config     map[string]any
	}{Components: components, Function: map[string]any{}, Config: map[string]any{"strict": true}})
	if emptyParameters == nil {
		t.Fatal("empty parameter list should still produce object parameters")
	}
	nativeParameters := llmApplicationProgrammer_writeParameters(struct {
		Context    nativecontext.ITypiaContext
		Components *nativeiterate.OpenApi_IComponents
		Function   map[string]any
		Config     map[string]any
	}{Components: components, Function: map[string]any{"parameters": []any{map[string]any{
		"schema":      nativeiterate.JsonSchema{"$ref": "#/components/schemas/Params"},
		"title":       "Params title",
		"description": "Params description",
	}}}})
	if nativeParameters == nil {
		t.Fatal("native parameter schema should convert through components")
	}
	mapParameters := llmApplicationProgrammer_writeParameters(struct {
		Context    nativecontext.ITypiaContext
		Components *nativeiterate.OpenApi_IComponents
		Function   map[string]any
		Config     map[string]any
	}{Components: components, Function: map[string]any{"parameters": []any{map[string]any{
		"schema": map[string]any{"type": "object", "properties": map[string]any{"name": nativeiterate.JsonSchema{"type": "string"}}},
	}}}})
	if mapParameters == nil {
		t.Fatal("map parameter schema should convert")
	}
	output := llmApplicationProgrammer_writeOutput(struct {
		Context    nativecontext.ITypiaContext
		Components *nativeiterate.OpenApi_IComponents
		Schema     nativeiterate.JsonSchema
		Output     map[string]any
		Config     map[string]any
	}{Components: components, Schema: nativeiterate.JsonSchema{"type": "object"}, Output: map[string]any{"description": "Output description"}})
	if output == nil {
		t.Fatal("output schema should convert")
	}

	objectErrors := llmApplicationProgrammer_validateObjectSchema("prefix", "parameter", schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
		Optional: true,
		Nullable: true,
		Objects:  []*schemametadata.MetadataObject{schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectType})},
	}))
	if len(objectErrors) < 3 {
		t.Fatalf("object validation should report optional, nullable, and union/dynamic errors: %v", objectErrors)
	}
	if len(llmApplicationProgrammer_validateFunction("bad fn", fn)) == 0 {
		t.Fatal("function validation should report bad name, parameter, and output errors")
	}
	if !llmApplicationProgrammer_hidden([]schemametadata.IJsDocTagInfo{{Name: "internal"}}) || llmApplicationProgrammer_hidden(nil) {
		t.Fatal("hidden helper should detect internal tags only")
	}
	if llmApplicationProgrammer_equals(nil) || !llmApplicationProgrammer_equals(map[string]any{"equals": true}) {
		t.Fatal("equals helper should read boolean config")
	}
	tagDescription := schemametadata.IJsDocTagInfo{Name: "description", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "Detailed text"}}}
	summaryTag := schemametadata.IJsDocTagInfo{Name: "summary", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "Short summary."}}}
	description := llmApplicationProgrammer_propertyDescription(schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
		JsDocTags: []schemametadata.IJsDocTagInfo{tagDescription, summaryTag},
	}))
	if description == nil || !strings.Contains(*description, "Detailed text") {
		t.Fatalf("property description should merge JSDoc description text, got %v", description)
	}
}
