//go:build typia_native_internal
// +build typia_native_internal

package json

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestJsonStringifyProgrammerCoverage exercises stringify helper branches.
//
// JSON stringify helpers choose different output for function values, arrays,
// and array-like unions. This test supplies small metadata and a decoder config
// directly so those choices are covered without depending on emitted code text.
//
// 1. Verify function fallback differs between array and object contexts.
// 2. Wrap functional metadata around a normal stringify expression.
// 3. Decode recursive and inline array, tuple, and object stringify branches.
// 4. Explore array stringify union paths with a direct decoder config.
// 5. Verify predicate helpers, importer overrides, method text, and tuple names.
func TestJsonStringifyProgrammerCoverage(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	input := factory.NewIdentifier("input")
	value := factory.NewStringLiteral("{}", shimast.TokenFlagsNone)
	functor := nativehelpers.NewFunctionProgrammer("stringify")
	stringMeta := jsonSchemaAtomic("string")
	functional := schemametadata.MetadataSchema_initialize()
	functional.Functions = append(functional.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{
		Output: stringMeta,
	}))
	array := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
			Name:      "string[]",
			Value:     stringMeta,
			Nullables: []bool{},
		}),
	})
	explore := nativeinternal.FeatureProgrammer_IExplore{Source: "top", From: "top", Postfix: "\"\""}
	if jsonStringifyProgrammer_decode_functional(nativeinternal.FeatureProgrammer_IExplore{From: "array"}).Text() != "null" ||
		jsonStringifyProgrammer_decode_functional(explore).Text() != "undefined" {
		t.Fatal("functional stringify fallback mismatch")
	}
	if jsonStringifyProgrammer_wrap_functional(struct {
		Input      *shimast.Node
		Metadata   *schemametadata.MetadataSchema
		Explore    nativeinternal.FeatureProgrammer_IExplore
		Expression *shimast.Node
	}{Input: input, Metadata: functional, Explore: explore, Expression: value}) == nil {
		t.Fatal("functional stringify wrapper returned nil")
	}
	config := nativeinternal.FeatureProgrammer_IConfig{
		Prefix: "_s",
		Decoder: func(props nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
			return props.Input
		},
	}
	decode := func(meta *schemametadata.MetadataSchema, from string) *shimast.Node {
		nextExplore := explore
		nextExplore.From = from
		return jsonStringifyProgrammer_decode(struct {
			Context   nativecontext.ITypiaContext
			Config    nativeinternal.FeatureProgrammer_IConfig
			Functor   *nativehelpers.FunctionProgrammer
			Input     *shimast.Node
			Metadata  *schemametadata.MetadataSchema
			Explore   nativeinternal.FeatureProgrammer_IExplore
			Validated bool
		}{
			Context:   nativecontext.ITypiaContext{},
			Config:    config,
			Functor:   functor,
			Input:     input,
			Metadata:  meta,
			Explore:   nextExplore,
			Validated: true,
		})
	}
	anyMeta := schemametadata.MetadataSchema_initialize()
	anyMeta.Any = true
	emptyOptionalNullable := schemametadata.MetadataSchema_initialize()
	emptyOptionalNullable.Required = false
	emptyOptionalNullable.Optional = true
	emptyOptionalNullable.Nullable = true
	emptyOptional := schemametadata.MetadataSchema_initialize()
	emptyOptional.Required = false
	emptyOptional.Optional = true
	emptyNullable := schemametadata.MetadataSchema_initialize()
	emptyNullable.Nullable = true
	escapedDate := schemametadata.MetadataSchema_initialize()
	escapedDate.Escaped = schemametadata.MetadataEscaped_create(schemametadata.MetadataEscaped{
		Original: func() *schemametadata.MetadataSchema {
			meta := schemametadata.MetadataSchema_initialize()
			meta.Natives = append(meta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Date"}))
			return meta
		}(),
		Returns: stringMeta,
	})
	templateMeta := schemametadata.MetadataSchema_initialize()
	templateMeta.Templates = append(templateMeta.Templates, schemametadata.MetadataTemplate_create(schemametadata.MetadataTemplate{
		Row: []*schemametadata.MetadataSchema{stringMeta},
	}))
	constantMeta := schemametadata.MetadataSchema_initialize()
	constantMeta.Constants = append(constantMeta.Constants,
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type: "boolean",
			Values: []*schemametadata.MetadataConstantValue{
				schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: true}),
			},
		}),
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type: "string",
			Values: []*schemametadata.MetadataConstantValue{
				schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: "alpha"}),
			},
		}),
	)
	multiArrayMeta := schemametadata.MetadataSchema_initialize()
	anyArrayValue := schemametadata.MetadataSchema_initialize()
	anyArrayValue.Any = true
	multiArrayMeta.Arrays = append(multiArrayMeta.Arrays,
		schemametadata.MetadataArray_create(schemametadata.MetadataArray{Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "any[]", Value: anyArrayValue})}),
		schemametadata.MetadataArray_create(schemametadata.MetadataArray{Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "string[]", Value: stringMeta})}),
	)
	nativeSetMapMeta := schemametadata.MetadataSchema_initialize()
	nativeSetMapMeta.Natives = append(nativeSetMapMeta.Natives,
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Boolean"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Uint8Array"}),
	)
	nativeSetMapMeta.Sets = append(nativeSetMapMeta.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: stringMeta}))
	nativeSetMapMeta.Maps = append(nativeSetMapMeta.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: stringMeta, Value: stringMeta}))
	emptyKnown := schemametadata.MetadataSchema_initialize()
	for _, meta := range []*schemametadata.MetadataSchema{
		anyMeta,
		emptyOptionalNullable,
		emptyOptional,
		emptyNullable,
		escapedDate,
		functional,
		templateMeta,
		constantMeta,
		stringMeta,
		multiArrayMeta,
		nativeSetMapMeta,
		emptyKnown,
	} {
		if decode(meta, "") == nil {
			t.Fatal("top-level stringify decoder returned nil")
		}
	}
	if decode(emptyOptionalNullable, "array") == nil || decode(emptyOptional, "array") == nil {
		t.Fatal("array fallback stringify decoder returned nil")
	}
	escapedDateMixed := schemametadata.MetadataSchema_initialize()
	escapedDateMixed.Escaped = escapedDate.Escaped
	escapedDateMixed.Atomics = append(escapedDateMixed.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}))
	escapedObjectMixed := schemametadata.MetadataSchema_initialize()
	escapedObjectOriginal := schemametadata.MetadataSchema_initialize()
	escapedObjectOriginal.Objects = append(escapedObjectOriginal.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "JsonValue"}),
	}))
	escapedObjectMixed.Escaped = schemametadata.MetadataEscaped_create(schemametadata.MetadataEscaped{
		Original: escapedObjectOriginal,
		Returns:  stringMeta,
	})
	escapedObjectMixed.Atomics = append(escapedObjectMixed.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "boolean"}))
	functionalMixed := schemametadata.MetadataSchema_initialize()
	functionalMixed.Functions = append(functionalMixed.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{Output: stringMeta}))
	functionalMixed.Atomics = append(functionalMixed.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}))
	templateMixed := schemametadata.MetadataSchema_initialize()
	templateMixed.Templates = append(templateMixed.Templates, templateMeta.Templates...)
	templateMixed.Atomics = append(templateMixed.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}))
	tuple := schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
			Name:      "[string]",
			Elements:  []*schemametadata.MetadataSchema{stringMeta},
			Nullables: []bool{},
		}),
	})
	tupleMeta := schemametadata.MetadataSchema_initialize()
	tupleMeta.Tuples = append(tupleMeta.Tuples, tuple)
	singleArrayMeta := schemametadata.MetadataSchema_initialize()
	singleArrayMeta.Arrays = append(singleArrayMeta.Arrays, array)
	multiStrictArrayMeta := schemametadata.MetadataSchema_initialize()
	multiStrictArrayMeta.Arrays = append(multiStrictArrayMeta.Arrays,
		schemametadata.MetadataArray_create(schemametadata.MetadataArray{Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "string[]", Value: stringMeta})}),
		schemametadata.MetadataArray_create(schemametadata.MetadataArray{Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "number[]", Value: jsonSchemaAtomic("number")})}),
	)
	nullableString := jsonSchemaAtomic("string")
	nullableString.Nullable = true
	objectDecodeMeta := schemametadata.MetadataSchema_initialize()
	objectDecodeType := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "JsonObject",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: jsonSchemaConstant("id"), Value: stringMeta}),
		},
	})
	objectDecodeMeta.Objects = append(objectDecodeMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectDecodeType}))
	for _, meta := range []*schemametadata.MetadataSchema{
		escapedDateMixed,
		escapedObjectMixed,
		functionalMixed,
		templateMixed,
		tupleMeta,
		singleArrayMeta,
		multiStrictArrayMeta,
		nullableString,
		objectDecodeMeta,
	} {
		if decode(meta, "top") == nil {
			t.Fatal("mixed top-level stringify decoder returned nil")
		}
	}
	unvalidatedNumber := jsonSchemaAtomic("number")
	if jsonStringifyProgrammer_decode(struct {
		Context   nativecontext.ITypiaContext
		Config    nativeinternal.FeatureProgrammer_IConfig
		Functor   *nativehelpers.FunctionProgrammer
		Input     *shimast.Node
		Metadata  *schemametadata.MetadataSchema
		Explore   nativeinternal.FeatureProgrammer_IExplore
		Validated bool
	}{
		Context:   nativecontext.ITypiaContext{},
		Config:    config,
		Functor:   functor,
		Input:     input,
		Metadata:  unvalidatedNumber,
		Explore:   explore,
		Validated: false,
	}) == nil {
		t.Fatal("unvalidated number stringify decoder returned nil")
	}
	if jsonStringifyProgrammer_decode_array(jsonStringifyProgrammer_decodeArrayProps{
		Config:  config,
		Functor: functor,
		Input:   input,
		Array:   array,
		Explore: explore,
	}) == nil {
		t.Fatal("inline array stringify decoder returned nil")
	}
	array.Type.Recursive = true
	arrayIndex := 2
	array.Type.Index = &arrayIndex
	if jsonStringifyProgrammer_decode_array(jsonStringifyProgrammer_decodeArrayProps{
		Config:  config,
		Functor: functor,
		Input:   input,
		Array:   array,
		Explore: explore,
	}) == nil {
		t.Fatal("recursive array stringify decoder returned nil")
	}
	array.Type.Recursive = false
	if jsonStringifyProgrammer_decode_tuple(jsonStringifyProgrammer_decodeTupleProps{
		Context: nativecontext.ITypiaContext{},
		Config:  config,
		Functor: functor,
		Input:   input,
		Tuple:   tuple,
		Explore: explore,
	}) == nil {
		t.Fatal("inline tuple stringify decoder returned nil")
	}
	tuple.Type.Recursive = true
	tuple.Type.Index = &arrayIndex
	if jsonStringifyProgrammer_decode_tuple(jsonStringifyProgrammer_decodeTupleProps{
		Context: nativecontext.ITypiaContext{},
		Config:  config,
		Functor: functor,
		Input:   input,
		Tuple:   tuple,
		Explore: explore,
	}) == nil {
		t.Fatal("recursive tuple stringify decoder returned nil")
	}
	restTuple := schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
			Name: "[string, ...string[]]",
			Elements: []*schemametadata.MetadataSchema{
				stringMeta,
				func() *schemametadata.MetadataSchema {
					meta := schemametadata.MetadataSchema_initialize()
					meta.Rest = stringMeta
					return meta
				}(),
			},
			Nullables: []bool{},
		}),
	})
	if jsonStringifyProgrammer_decode_tuple(jsonStringifyProgrammer_decodeTupleProps{
		Context:   nativecontext.ITypiaContext{},
		Config:    config,
		Functor:   functor,
		Input:     input,
		Tuple:     restTuple,
		Explore:   nativeinternal.FeatureProgrammer_IExplore{},
		Validated: true,
	}) == nil {
		t.Fatal("rest tuple stringify decoder returned nil")
	}
	optional := jsonSchemaAtomic("string")
	optional.Required = false
	optional.Optional = true
	if jsonStringifyProgrammer_wrap_required(struct {
		Input      *shimast.Node
		Metadata   *schemametadata.MetadataSchema
		Explore    nativeinternal.FeatureProgrammer_IExplore
		Expression *shimast.Node
	}{Input: input, Metadata: stringMeta, Explore: explore, Expression: value}) != value ||
		jsonStringifyProgrammer_wrap_required(struct {
			Input      *shimast.Node
			Metadata   *schemametadata.MetadataSchema
			Explore    nativeinternal.FeatureProgrammer_IExplore
			Expression *shimast.Node
		}{Input: input, Metadata: optional, Explore: nativeinternal.FeatureProgrammer_IExplore{From: "array"}, Expression: value}) == nil {
		t.Fatal("required stringify wrapper branch failed")
	}
	if jsonStringifyProgrammer_explore_arrays(jsonStringifyProgrammer_exploreArraysProps{
		Context: nativecontext.ITypiaContext{},
		Config:  config,
		Functor: functor,
		Input:   input,
		Arrays:  []*schemametadata.MetadataArray{array},
		Explore: explore,
	}) == nil {
		t.Fatal("array stringify explorer returned nil")
	}
	objectType := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "Object"})
	object := schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectType})
	objectMeta := schemametadata.MetadataSchema_initialize()
	objectMeta.Objects = append(objectMeta.Objects, object)
	if jsonStringifyProgrammer_explore_objects(jsonStringifyProgrammer_exploreObjectsProps{
		Config:   config,
		Functor:  functor,
		Input:    input,
		Metadata: objectMeta,
		Explore:  explore,
	}) == nil {
		t.Fatal("single object stringify explorer returned nil")
	}
	objectMeta.Objects = append(objectMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "Other"}),
	}))
	objectMeta.Union_index = &arrayIndex
	if jsonStringifyProgrammer_explore_objects(jsonStringifyProgrammer_exploreObjectsProps{
		Config:   config,
		Functor:  functor,
		Input:    input,
		Metadata: objectMeta,
		Explore:  explore,
	}) == nil {
		t.Fatal("union object stringify explorer returned nil")
	}
	property := schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Value: stringMeta})
	if !jsonStringifyProgrammer_some_arrays([]*schemametadata.MetadataArray{array}, func(*schemametadata.MetadataArray) bool { return true }) ||
		!jsonStringifyProgrammer_some_objects([]*schemametadata.MetadataObject{object}, func(*schemametadata.MetadataObject) bool { return true }) ||
		!jsonStringifyProgrammer_every_properties([]*schemametadata.MetadataProperty{property}, func(*schemametadata.MetadataProperty) bool { return true }) ||
		jsonStringifyProgrammer_some_arrays([]*schemametadata.MetadataArray{array}, func(*schemametadata.MetadataArray) bool { return false }) ||
		jsonStringifyProgrammer_some_objects([]*schemametadata.MetadataObject{object}, func(*schemametadata.MetadataObject) bool { return false }) ||
		jsonStringifyProgrammer_every_properties([]*schemametadata.MetadataProperty{property}, func(*schemametadata.MetadataProperty) bool { return false }) ||
		jsonStringifyProgrammer_every_strings([]string{"a"}, func(string) bool { return false }) ||
		jsonStringifyProgrammer_array_like_names([]*schemametadata.MetadataArray{array}) != "string[]" ||
		jsonStringifyProgrammer_array_like_names([]*schemametadata.MetadataTuple{tuple}) != "[string]" ||
		jsonStringifyProgrammer_explore_with(explore, "function", "array").From != "array" {
		t.Fatal("json stringify helper predicate mismatch")
	}
	if jsonStringifyProgrammer_internal(nativecontext.ITypiaContext{Importer: jsonStringifyImporter{}}, "helper").Text() != "helper" ||
		jsonStringifyProgrammer_method_text(nil) != "" ||
		jsonStringifyProgrammer_method_text(factory.NewIdentifier("method")) != "method" ||
		jsonStringifyProgrammer_feature_explore(explore).Postfix != "\"\"" ||
		jsonStringifyProgrammer_feature_explore(&explore).Postfix != "\"\"" ||
		jsonStringifyProgrammer_feature_explore("unknown").Postfix != "" {
		t.Fatal("json stringify importer or explore helper mismatch")
	}
	configured := jsonStringifyProgrammer_configure(struct {
		Context   nativecontext.ITypiaContext
		Functor   *nativehelpers.FunctionProgrammer
		Validated bool
	}{Context: nativecontext.ITypiaContext{}, Functor: functor, Validated: true})
	name := "Input"
	if configured.Types.Input(nil, &name) == nil ||
		configured.Types.Output(nil, nil) == nil ||
		configured.Decoder(nativeinternal.FeatureProgrammer_DecoderProps{Metadata: stringMeta, Input: input, Explore: explore}) == nil ||
		configured.Objector.Checker(nativeinternal.FeatureProgrammer_ObjectorCheckerProps{Metadata: stringMeta, Input: input, Explore: explore}) == nil ||
		configured.Objector.Decoder(nativeinternal.FeatureProgrammer_ObjectorDecoderProps{Input: input, Object: objectDecodeType, Explore: explore}) == nil ||
		configured.Objector.Joiner(nativeinternal.FeatureProgrammer_ObjectorJoinerProps{Input: input, Object: objectDecodeType}) == nil ||
		configured.Objector.Unionizer(nativeinternal.FeatureProgrammer_ObjectorUnionizerProps{Objects: []*schemametadata.MetadataObjectType{objectDecodeType}, Input: input, Explore: explore}) == nil ||
		configured.Objector.Failure(nativeinternal.FeatureProgrammer_ObjectorFailureProps{Input: input, Expected: "string", Explore: &explore}) == nil ||
		len(configured.Generator.Arrays(schemametadata.NewMetadataCollection())) != 0 ||
		len(configured.Generator.Tuples(schemametadata.NewMetadataCollection())) != 0 {
		t.Fatal("configured stringify programmer helpers returned nil")
	}
	merged := jsonStringifyProgrammer_merge_functions(
		map[string]*shimast.Node{"a": input},
		map[string]*shimast.Node{"b": value},
	)
	if len(merged) != 2 || merged["a"] != input || merged["b"] != value {
		t.Fatal("json stringify merge function helper mismatch")
	}
}

func jsonSchemaConstant(value string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "string",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
		},
	}))
	return meta
}

type jsonStringifyImporter struct{}

func (jsonStringifyImporter) Internal(name string) *shimast.Node {
	return shimast.NewNodeFactory(shimast.NodeFactoryHooks{}).NewIdentifier(name)
}
