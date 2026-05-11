//go:build typia_native_internal
// +build typia_native_internal

package json

import (
	"testing"

	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonSchemaProgrammerCoverage exercises schema validation and writing.
//
// JSON schema programmer validation rejects several metadata shapes before the
// actual schema emission path runs. This test builds those shapes directly and
// also verifies the OpenAPI 3.0 writer path delegates through the 3.1 writer.
//
// 1. Report unsupported bigint atomic and constant metadata.
// 2. Report undefined array elements, Map, Set, and unsupported native metadata.
// 3. Emit OpenAPI 3.0 schema collections for a valid string metadata schema.
// 4. Emit single-schema AST literals through JsonSchemaProgrammer.Write.
// 5. Validate and emit JSON application metadata for function properties.
func TestJsonSchemaProgrammerCoverage(t *testing.T) {
	invalid := schemametadata.MetadataSchema_initialize()
	invalid.Atomics = append(invalid.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint"}))
	invalid.Constants = append(invalid.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "bigint",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: int64(1)}),
		},
	}))
	optional := jsonSchemaAtomic("string")
	optional.Required = false
	optional.Optional = true
	invalid.Arrays = append(invalid.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
			Name:  "OptionalArray",
			Value: optional,
		}),
	}))
	invalid.Maps = append(invalid.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{
		Key:   jsonSchemaAtomic("string"),
		Value: jsonSchemaAtomic("string"),
	}))
	invalid.Sets = append(invalid.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{
		Value: jsonSchemaAtomic("string"),
	}))
	invalid.Natives = append(invalid.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "CustomNative"}))
	if messages := JsonSchemaProgrammer.Validate(struct {
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
	}{Metadata: invalid}); len(messages) < 5 {
		t.Fatalf("expected JSON schema validation messages, got %v", messages)
	}

	valid := jsonSchemaAtomic("string")
	collection := JsonSchemasProgrammer.WriteSchemas(struct {
		Version   string
		Metadatas []*schemametadata.MetadataSchema
	}{Version: "3.0", Metadatas: []*schemametadata.MetadataSchema{valid}})
	if collection.Version != "3.0" || len(collection.Schemas) != 1 {
		t.Fatal("OpenAPI 3.0 schema collection was not emitted")
	}
	if JsonSchemasProgrammer.Write(JsonSchemasProgrammer_IWriteProps{
		Context:   nativecontext.ITypiaContext{},
		Version:   "3.0",
		Metadatas: []*schemametadata.MetadataSchema{valid},
	}) == nil || JsonSchemaProgrammer.Write(JsonSchemaProgrammer_IWriteProps{
		Context:  nativecontext.ITypiaContext{},
		Version:  "3.1",
		Metadata: valid,
	}) == nil {
		t.Fatal("JSON schema AST writer returned nil")
	}

	_ = JsonApplicationProgrammer.Validate(struct {
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
	}{Metadata: valid, Explore: nativefactories.MetadataFactory_IExplore{Top: false}})
	appObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "Application"})
	appMeta := schemametadata.MetadataSchema_initialize()
	appMeta.Objects = append(appMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: appObject}))
	if messages := JsonApplicationProgrammer.Validate(struct {
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
	}{Metadata: appMeta, Explore: nativefactories.MetadataFactory_IExplore{Top: true}}); len(messages) != 1 {
		t.Fatalf("application without functions should report one message, got %v", messages)
	}
	dynamicObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "DynamicApplication",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: jsonSchemaAtomic("string"), Value: jsonSchemaAtomic("string")}),
		},
	})
	dynamicMeta := schemametadata.MetadataSchema_initialize()
	dynamicMeta.Objects = append(dynamicMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: dynamicObject}))
	if messages := JsonApplicationProgrammer.Validate(struct {
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
	}{Metadata: dynamicMeta, Explore: nativefactories.MetadataFactory_IExplore{Top: true}}); len(messages) < 2 {
		t.Fatalf("dynamic application should report dynamic key and function messages, got %v", messages)
	}
	paramDescription := "inline parameter"
	outputDescription := "numeric result"
	functionValue := schemametadata.MetadataSchema_initialize()
	functionValue.Functions = append(functionValue.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
		Parameters: []*schemametadata.MetadataParameter{
			schemametadata.MetadataParameter_create(schemametadata.MetadataParameter{
				Name:        "name",
				Type:        jsonSchemaAtomic("string"),
				Description: &paramDescription,
			}),
			schemametadata.MetadataParameter_create(schemametadata.MetadataParameter{
				Name: "count",
				Type: jsonSchemaAtomic("number"),
			}),
		},
		Output: jsonSchemaAtomic("number"),
		Async:  true,
	}))
	description := "Run application.\nLonger body."
	functionTags := []schemametadata.IJsDocTagInfo{
		{Name: "deprecated"},
		{Name: "tag", Text: []schemametadata.IJsDocTagInfo_IText{{Kind: "text", Text: "alpha beta"}}},
		{Name: "param", Text: []schemametadata.IJsDocTagInfo_IText{{Kind: "parameterName", Text: "count"}, {Kind: "text", Text: " count parameter"}}},
		{Name: "returns", Text: []schemametadata.IJsDocTagInfo_IText{{Kind: "text", Text: outputDescription}}},
	}
	hiddenValue := schemametadata.MetadataSchema_initialize()
	hiddenValue.Functions = append(hiddenValue.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{Output: jsonSchemaAtomic("string")}))
	filteredValue := schemametadata.MetadataSchema_initialize()
	filteredValue.Functions = append(filteredValue.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{Output: jsonSchemaAtomic("string")}))
	appObject.Properties = []*schemametadata.MetadataProperty{
		schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
			Key:         nativefactories.MetadataFactory.SoleLiteral("run"),
			Value:       functionValue,
			Description: &description,
			JsDocTags:   functionTags,
		}),
		schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
			Key:       nativefactories.MetadataFactory.SoleLiteral("hidden"),
			Value:     hiddenValue,
			JsDocTags: []schemametadata.IJsDocTagInfo{{Name: "hidden"}},
		}),
		schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
			Key:   nativefactories.MetadataFactory.SoleLiteral("filtered"),
			Value: filteredValue,
		}),
	}
	if messages := JsonApplicationProgrammer.Validate(struct {
		Metadata *schemametadata.MetadataSchema
		Explore  nativefactories.MetadataFactory_IExplore
	}{Metadata: appMeta, Explore: nativefactories.MetadataFactory_IExplore{Top: true}}); len(messages) != 0 {
		t.Fatalf("valid application should not report messages: %v", messages)
	}
	app := JsonApplicationProgrammer.WriteApplication(struct {
		Version  string
		Metadata *schemametadata.MetadataSchema
		Filter   func(prop *schemametadata.MetadataProperty) bool
	}{
		Version:  "3.1",
		Metadata: appMeta,
		Filter: func(prop *schemametadata.MetadataProperty) bool {
			return prop.Key.GetSoleLiteral() == nil || *prop.Key.GetSoleLiteral() != "filtered"
		},
	})
	if app["version"] != "3.1" || len(app["functions"].([]any)) != 1 {
		t.Fatalf("JSON application output mismatch: %+v", app)
	}
	if JsonApplicationProgrammer.Write(JsonApplicationProgrammer_IWriteProps{
		Context:  nativecontext.ITypiaContext{},
		Version:  "3.1",
		Metadata: appMeta,
		Filter:   nil,
	}) == nil {
		t.Fatal("JSON application AST writer returned nil")
	}
	titleDescription := "Title line.\nBody line"
	if JsonApplicationProgrammer.WriteDescription(struct {
		Description *string
		JsDocTags   []schemametadata.IJsDocTagInfo
		Kind        string
	}{Description: &titleDescription, Kind: "summary"})["summary"] != "Title line" ||
		JsonApplicationProgrammer.WriteDescription(struct {
			Description *string
			JsDocTags   []schemametadata.IJsDocTagInfo
			Kind        string
		}{JsDocTags: []schemametadata.IJsDocTagInfo{{Name: "summary", Text: []schemametadata.IJsDocTagInfo_IText{{Kind: "text", Text: "Tagged title"}}}}, Kind: "summary"})["summary"] != "Tagged title" {
		t.Fatal("JSON application description helper mismatch")
	}
}

func jsonSchemaAtomic(kind string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: kind}))
	return meta
}
