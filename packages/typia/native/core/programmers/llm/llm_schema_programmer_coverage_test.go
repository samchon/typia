package llm

import (
	"strings"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestLlmSchemaProgrammerCoverage exercises schema sizing and conversion.
//
// LLM schema conversion mostly runs after JSON schema generation, so the small
// conversion helpers are easiest to cover by feeding representative JSON schema
// fragments directly. The metadata size helper is also covered with mixed
// atomic, constant, and native metadata.
//
// 1. Count LLM schema size for atomic, constant, and native metadata.
// 2. Convert object, array, string, number, constant, and reference schemas.
// 3. Verify strict mode moves unsupported JSON schema tags into descriptions.
// 4. Verify referenced schemas are copied into LLM `$defs`.
// 5. Cover validation failures and fallback helper branches directly.
func TestLlmSchemaProgrammerCoverage(t *testing.T) {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Atomics = append(meta.Atomics,
		schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}),
		schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}),
		schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "boolean"}),
		schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint"}),
	)
	meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "boolean",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: true}),
		},
	}), schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "LiteralNative",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: "literal"}),
		},
	}))
	meta.Escaped = schemametadata.MetadataEscaped_create(schemametadata.MetadataEscaped{
		Returns: llmSchemaAtomic("string"),
	})
	meta.Arrays = append(meta.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "Array", Value: llmSchemaAtomic("string")}),
	}))
	meta.Tuples = append(meta.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{Name: "Tuple", Elements: []*schemametadata.MetadataSchema{llmSchemaAtomic("number")}}),
	}))
	meta.Maps = append(meta.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: llmSchemaAtomic("string"), Value: llmSchemaAtomic("number")}))
	meta.Sets = append(meta.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: llmSchemaAtomic("string")}))
	meta.Natives = append(meta.Natives,
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Blob"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Custom"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "number"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "LiteralNative"}),
	)
	if llmSchemaProgrammer_size(meta) == 0 {
		t.Fatal("LLM schema size should count mixed metadata")
	}
	writeMeta := schemametadata.MetadataSchema_initialize()
	writeMeta.Atomics = append(writeMeta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}))
	if LlmSchemaProgrammer.Write(LlmSchemaProgrammer_IWriteProps{
		Context:  nativecontext.ITypiaContext{},
		Metadata: writeMeta,
		Config:   map[string]any{"strict": true},
	}) == nil {
		t.Fatal("LLM schema write returned nil")
	}

	components := &nativeiterate.OpenApi_IComponents{Schemas: map[string]nativeiterate.JsonSchema{
		"User": {
			"type":        "object",
			"description": "User object",
			"properties": map[string]any{
				"id": nativeiterate.JsonSchema{
					"type":        "string",
					"format":      "uuid",
					"description": "Identifier",
				},
				"scores": nativeiterate.JsonSchema{
					"type":     "array",
					"minItems": 1,
					"items": nativeiterate.JsonSchema{
						"type":             "number",
						"minimum":          0,
						"exclusiveMinimum": -1,
					},
				},
			},
		},
	}}
	defs := map[string]any{}
	converted := llmSchemaProgrammer_convert_schema(nativeiterate.JsonSchema{
		"description": "Union",
		"oneOf": []any{
			nativeiterate.JsonSchema{"$ref": "#/components/schemas/User", "description": "User ref"},
			nativeiterate.JsonSchema{"const": "ready"},
			nativeiterate.JsonSchema{"type": "null"},
		},
		"discriminator": map[string]any{
			"propertyName": "kind",
			"mapping": map[string]any{
				"user": "#/components/schemas/User",
			},
		},
	}, components, defs)
	if converted["anyOf"] == nil || defs["User"] == nil {
		t.Fatal("LLM schema conversion missed union or referenced definitions")
	}
	strict := llmSchemaProgrammer_convert_schema_config(nativeiterate.JsonSchema{
		"type":        "string",
		"description": "String value",
		"minLength":   2,
		"pattern":     "^x",
	}, components, map[string]any{}, map[string]any{"strict": true})
	if strict["minLength"] != nil || strict["description"] == nil {
		t.Fatal("strict LLM schema should move string tags into description")
	}
	if len(llmSchemaProgrammer_array([]string{"a"})) != 1 ||
		len(llmSchemaProgrammer_array([]nativeiterate.JsonSchema{{"type": "string"}})) != 1 ||
		len(llmSchemaProgrammer_array(1)) != 0 {
		t.Fatal("LLM array normalization mismatch")
	}
	if llmSchemaProgrammer_ref_key("#/components/schemas/User") != "User" ||
		llmSchemaProgrammer_ref_key("plain") != "plain" {
		t.Fatal("LLM ref key extraction mismatch")
	}
	numericA := map[string]any{"minimum": 5, "exclusiveMinimum": 3, "maximum": 10, "exclusiveMaximum": 12}
	llmSchemaProgrammer_emend_exclusive(numericA)
	if numericA["exclusiveMinimum"] != nil || numericA["exclusiveMaximum"] != nil {
		t.Fatal("LLM exclusive numeric bounds should prefer tighter inclusive bounds")
	}
	numericB := map[string]any{"minimum": 1, "exclusiveMinimum": 3, "maximum": 15, "exclusiveMaximum": 12}
	llmSchemaProgrammer_emend_exclusive(numericB)
	if numericB["minimum"] != nil || numericB["maximum"] != nil {
		t.Fatal("LLM exclusive numeric bounds should replace looser inclusive bounds")
	}

	validationMeta := schemametadata.MetadataSchema_initialize()
	validationMeta.Atomics = append(validationMeta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint"}))
	validationMeta.Constants = append(validationMeta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "bigint",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: int64(1)}),
		},
	}))
	validationMeta.Tuples = append(validationMeta.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{Name: "Tuple"}),
	}))
	validationMeta.Arrays = append(validationMeta.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "MaybeArray", Value: schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Optional: true})}),
	}))
	validationMeta.Maps = append(validationMeta.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: llmSchemaAtomic("string"), Value: llmSchemaAtomic("number")}))
	validationMeta.Sets = append(validationMeta.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: llmSchemaAtomic("string")}))
	validationMeta.Natives = append(validationMeta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "CustomNative"}))
	validationMeta.Objects = append(validationMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
			Name: "Validation",
			Properties: []*schemametadata.MetadataProperty{
				schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: llmSchemaAtomic("string"), Value: llmSchemaAtomic("number")}),
				schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: llmSchemaLiteral("optional"), Value: schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Optional: true})}),
			},
		}),
	}))
	messages := LlmSchemaProgrammer.Validate(struct {
		Config   map[string]any
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
	}{Config: map[string]any{"strict": true}, Metadata: validationMeta})
	if len(messages) < 8 {
		t.Fatalf("LLM schema validation should report broad unsupported metadata, got %v", messages)
	}

	attributeOnly := llmSchemaProgrammer_convert_schema_config(nativeiterate.JsonSchema{
		"description": "Attribute description",
		"x-note":      "kept",
		"oneOf": []any{
			nativeiterate.JsonSchema{"type": "boolean"},
		},
	}, components, map[string]any{}, nil)
	if attributeOnly["description"] != "Attribute description" || attributeOnly["x-note"] != "kept" {
		t.Fatalf("single union should inherit schema attributes: %+v", attributeOnly)
	}
	if out := llmSchemaProgrammer_schema_array([]map[string]any{{"type": "string"}}); len(out) != 1 {
		t.Fatalf("map schema array should normalize, got %+v", out)
	}
	if _, ok := llmSchemaProgrammer_schema_from_any(map[string]any{"type": "number"}); !ok {
		t.Fatal("map schema should convert to JsonSchema")
	}
	if llmSchemaProgrammer_constant_type(nil) == "" || llmSchemaProgrammer_constant_type(struct{}{}) == "" {
		t.Fatal("constant type fallback should describe nil and struct values")
	}
	if llmSchemaProgrammer_ref_key("a/b") != "b" {
		t.Fatal("plain slash ref should keep the last path segment")
	}
	if _, ok := llmSchemaProgrammer_component(nil, "Missing"); ok {
		t.Fatal("nil components should not resolve schemas")
	}
	if llmSchemaProgrammer_discriminator(nativeiterate.JsonSchema{
		"oneOf":         []any{nativeiterate.JsonSchema{"type": "null"}},
		"discriminator": map[string]any{},
	}, []map[string]any{{"type": "null"}}) != nil {
		t.Fatal("empty discriminator should not be emitted")
	}
	if _, ok := llmSchemaProgrammer_number(uint(1)); !ok {
		t.Fatal("unsigned number should be accepted")
	}
	if _, ok := llmSchemaProgrammer_number("x"); ok {
		t.Fatal("string should not be accepted as a number")
	}
	if description := llmSchemaProgrammer_json_descriptor_take(nativeiterate.JsonSchema{"description": "Only description"}); description == nil {
		t.Fatal("descriptor should keep direct descriptions")
	}
	quotedDescriptor := llmSchemaProgrammer_json_descriptor_take(nativeiterate.JsonSchema{
		"properties": map[string]any{
			"not-valid": nativeiterate.JsonSchema{"$ref": "#/x", "description": "Reference description"},
		},
	})
	if quotedDescriptor == nil || !strings.Contains(*quotedDescriptor, "{@link \"not-valid\"}") {
		t.Fatalf("descriptor should quote invalid property names: %v", quotedDescriptor)
	}
	for _, name := range []string{"", "1bad", "bad-name"} {
		if llmSchemaProgrammer_is_variable_name(name) {
			t.Fatalf("%q should not be a valid variable name", name)
		}
	}
	if llmProgrammer_internal(nativecontext.ITypiaContext{}, "fallback") == nil {
		t.Fatal("internal fallback should create an identifier")
	}
	nodeName := llmSchemaProgrammer_factory.NewIdentifier("DirectName")
	if llmProgrammer_import_type(nativecontext.ITypiaContext{}, nativeprogrammers.ImportProgrammer_TypeProps{Name: nodeName}) != nodeName {
		t.Fatal("node type imports should be returned directly")
	}
	if llmProgrammer_type_reference("") == nil || llmProgrammer_method_text(nil) != "" {
		t.Fatal("LLM programmer fallback helpers should return stable defaults")
	}
	summary := "Summary."
	description := "Body"
	if merged := llmProgrammer_concat_description(&summary, &description); merged == nil || !strings.Contains(*merged, "Summary.\n\nBody") {
		t.Fatalf("summary and description should merge, got %v", merged)
	}
	if llmProgrammer_concat_description(&summary, nil) != &summary {
		t.Fatal("summary-only description should be preserved")
	}
	if llmProgrammer_import_type(nativecontext.ITypiaContext{}, nativeprogrammers.ImportProgrammer_TypeProps{
		Name:      "GenericName",
		Arguments: []*shimast.Node{llmProgrammer_type_reference("T")},
	}) == nil {
		t.Fatal("string type imports should create a type reference")
	}
}

func llmSchemaAtomic(typ string) *schemametadata.MetadataSchema {
	return schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
		Required: true,
		Atomics: []*schemametadata.MetadataAtomic{
			schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: typ}),
		},
	})
}

func llmSchemaLiteral(value string) *schemametadata.MetadataSchema {
	return schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
		Required: true,
		Constants: []*schemametadata.MetadataConstant{
			schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
				Type: "string",
				Values: []*schemametadata.MetadataConstantValue{
					schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
				},
			}),
		},
	})
}
