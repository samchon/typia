//go:build typia_native_internal
// +build typia_native_internal

package notations

import (
	"strings"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestNotationGeneralHelpers exercises notation helper branches.
//
// The integration transform path covers the main notation programmers, but
// several helper branches are pure string or AST construction utilities. They
// are tested directly here so tuple/native/error helper behavior is not left to
// incidental fixture coverage.
//
// 1. Verify camel, pascal, snake, and shared unsnake edge cases.
// 2. Exercise tuple, native, binary, internal, and import fallback builders.
// 3. Cover importer overrides, explore conversion helpers, and schema predicates.
// 4. Explore notation set, map, and object-union metadata.
// 5. Format metadata factory errors through the notation error adapter.
// 6. Trigger multi-union predicates, recursive generators, and rest tuple joins.
func TestNotationGeneralHelpers(t *testing.T) {
	cases := []struct {
		actual   string
		expected string
	}{
		{NotationGeneralProgrammer_Camel.Func("HELLO_WORLD"), "helloWorld"},
		{NotationGeneralProgrammer_Camel.Func(""), ""},
		{NotationGeneralProgrammer_Camel.Func("_HELLO"), "_hello"},
		{NotationGeneralProgrammer_Pascal.Func("hello_world"), "HelloWorld"},
		{NotationGeneralProgrammer_Pascal.Func("_x"), "_X"},
		{NotationGeneralProgrammer_Snake.Func(""), ""},
		{NotationGeneralProgrammer_Snake.Func("helloWorld"), "hello_world"},
		{NotationGeneralProgrammer_Snake.Func("helloWorldAgain"), "hello_world_again"},
		{NotationGeneralProgrammer_Snake.Func("XMLHttp"), "xmlhttp"},
		{NotationGeneralProgrammer_Snake.Func("__"), ""},
		{notationGeneralProgrammer_unsnake("__", strings.ToLower, func(value string, _ int) string {
			return strings.ToUpper(value)
		}), "__"},
	}
	for _, c := range cases {
		if c.actual != c.expected {
			t.Fatalf("notation rename mismatch: expected %q, got %q", c.expected, c.actual)
		}
	}
	if notationGeneralProgrammer_capitalize("") != "" ||
		notationGeneralProgrammer_capitalize("word") != "Word" {
		t.Fatal("capitalize helper returned unexpected output")
	}

	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	input := factory.NewIdentifier("input")
	functor := nativehelpers.NewFunctionProgrammer("notation")
	atomic := schemametadata.MetadataSchema_initialize()
	atomic.Atomics = append(atomic.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}))
	tupleType := schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
		Name:     "Tuple",
		Elements: []*schemametadata.MetadataSchema{atomic},
	})
	tuple := schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{Type: tupleType})
	array := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
			Name:      "string[]",
			Value:     atomic,
			Nullables: []bool{},
		}),
	})
	arrayConfig := nativeinternal.FeatureProgrammer_IConfig{
		Prefix: "_n",
		Decoder: func(props nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
			return props.Input
		},
	}
	if notationGeneralProgrammer_decode_array(notationGeneralProgrammer_decodeArrayProps{
		Config:  arrayConfig,
		Functor: functor,
		Array:   array,
		Input:   input,
	}) == nil {
		t.Fatal("array decoder returned nil")
	}
	array.Type.Recursive = true
	arrayIndex := 3
	array.Type.Index = &arrayIndex
	if notationGeneralProgrammer_decode_array(notationGeneralProgrammer_decodeArrayProps{
		Config:  arrayConfig,
		Functor: functor,
		Array:   array,
		Input:   input,
	}) == nil {
		t.Fatal("recursive array decoder returned nil")
	}
	if notationGeneralProgrammer_decode_tuple(notationGeneralProgrammer_decodeTupleProps{
		Config:  nativeinternal.FeatureProgrammer_IConfig{Prefix: "_n"},
		Rename:  NotationGeneralProgrammer_Camel,
		Functor: functor,
		Tuple:   tuple,
		Input:   input,
	}) == nil {
		t.Fatal("tuple decoder returned nil")
	}
	if notationGeneralProgrammer_decode_tuple_inline(notationGeneralProgrammer_decodeTupleInlineProps{
		Rename:  NotationGeneralProgrammer_Camel,
		Config:  nativeinternal.FeatureProgrammer_IConfig{Prefix: "_n"},
		Functor: functor,
		Tuple:   tupleType,
		Input:   input,
	}) == nil {
		t.Fatal("tuple inline decoder returned nil")
	}
	restElement := schemametadata.MetadataSchema_initialize()
	restElement.Rest = atomic
	restTuple := schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
		Name:     "RestTuple",
		Elements: []*schemametadata.MetadataSchema{atomic, restElement},
	})
	if notationGeneralProgrammer_decode_tuple_inline(notationGeneralProgrammer_decodeTupleInlineProps{
		Rename:  NotationGeneralProgrammer_Camel,
		Config:  arrayConfig,
		Functor: functor,
		Tuple:   restTuple,
		Input:   input,
		Explore: nativeinternal.FeatureProgrammer_IExplore{Postfix: "$input"},
	}) == nil {
		t.Fatal("rest tuple inline decoder returned nil")
	}
	tuple.Type.Recursive = true
	index := 1
	tuple.Type.Index = &index
	if notationGeneralProgrammer_decode_tuple(notationGeneralProgrammer_decodeTupleProps{
		Config:  nativeinternal.FeatureProgrammer_IConfig{Prefix: "_n"},
		Functor: functor,
		Tuple:   tuple,
		Input:   input,
	}) == nil {
		t.Fatal("recursive tuple decoder returned nil")
	}
	if notationGeneralProgrammer_decode_native(struct {
		Name  string
		Input *shimast.Node
	}{Name: "Date", Input: input}) == nil {
		t.Fatal("date native decoder returned nil")
	}
	if notationGeneralProgrammer_decode_native(struct {
		Name  string
		Input *shimast.Node
	}{Name: "Uint8Array", Input: input}) != input {
		t.Fatal("non-date native decoder should return input")
	}
	if notationGeneralProgrammer_binary(input, shimast.KindEqualsEqualsEqualsToken, input) == nil {
		t.Fatal("binary helper returned nil")
	}
	importerContext := nativecontext.ITypiaContext{Importer: notationGeneralImporter{}}
	if notationGeneralProgrammer_internal(nativecontext.ITypiaContext{}, "helper") == nil ||
		notationGeneralProgrammer_internal(importerContext, "helper").Text() != "helper" {
		t.Fatal("internal fallback returned nil")
	}
	if notationGeneralProgrammer_import_type(nativecontext.ITypiaContext{}, nativeprogrammers.ImportProgrammer_TypeProps{Name: "Alias"}) == nil {
		t.Fatal("string import type fallback returned nil")
	}
	if notationGeneralProgrammer_import_type(nativecontext.ITypiaContext{}, nativeprogrammers.ImportProgrammer_TypeProps{Name: factory.NewIdentifier("AliasNode")}) == nil {
		t.Fatal("node import type fallback returned nil")
	}
	if notationGeneralProgrammer_import_type(importerContext, nativeprogrammers.ImportProgrammer_TypeProps{Name: "Imported"}).Text() != "Imported" {
		t.Fatal("importer type override returned unexpected node")
	}
	name := "Named"
	if notationGeneralProgrammer_type_name(nativecontext.ITypiaContext{}, nil, &name) != "Named" {
		t.Fatal("explicit type name should be returned")
	}
	_ = notationGeneralProgrammer_type_name(nativecontext.ITypiaContext{}, nil, nil)
	if notationGeneralProgrammer_method_text(nil) != "" ||
		notationGeneralProgrammer_method_text(factory.NewIdentifier("method")) != "method" {
		t.Fatal("method text helper returned unexpected output")
	}

	explore := nativeinternal.FeatureProgrammer_IExplore{Postfix: "$input"}
	if notationGeneralProgrammer_feature_explore(&explore).Postfix != "$input" {
		t.Fatal("pointer feature explore was not copied")
	}
	if notationGeneralProgrammer_feature_explore("x").Postfix != "" {
		t.Fatal("unknown feature explore should return empty value")
	}
	if notationGeneralProgrammer_checker_explore(explore).Postfix != "$input" {
		t.Fatal("checker explore conversion lost postfix")
	}
	if notationGeneralProgrammer_checker_explore_with_postfix(explore, ".x").Postfix != "$input.x" {
		t.Fatal("checker postfix helper failed")
	}
	if notationGeneralProgrammer_explore_with(explore, "source", "array").Source != "source" {
		t.Fatal("explore source helper failed")
	}
	if notationGeneralProgrammer_every_schema(nil, func(*schemametadata.MetadataSchema) bool { return true }) {
		t.Fatal("empty schema slice should not satisfy every")
	}
	if notationGeneralProgrammer_every_schema([]*schemametadata.MetadataSchema{atomic}, func(*schemametadata.MetadataSchema) bool { return true }) == false {
		t.Fatal("single true schema should satisfy every")
	}
	if notationGeneralProgrammer_every_schema([]*schemametadata.MetadataSchema{atomic}, func(*schemametadata.MetadataSchema) bool { return false }) {
		t.Fatal("single false schema should not satisfy every")
	}
	if !notationGeneralProgrammer_some_arrays([]*schemametadata.MetadataArray{array}, func(*schemametadata.MetadataArray) bool { return true }) ||
		notationGeneralProgrammer_some_arrays([]*schemametadata.MetadataArray{array}, func(*schemametadata.MetadataArray) bool { return false }) ||
		!notationGeneralProgrammer_some_tuples([]*schemametadata.MetadataTuple{tuple}, func(*schemametadata.MetadataTuple) bool { return true }) ||
		notationGeneralProgrammer_some_tuples([]*schemametadata.MetadataTuple{tuple}, func(*schemametadata.MetadataTuple) bool { return false }) ||
		notationGeneralProgrammer_array_like_names([]*schemametadata.MetadataArray{array}) != "string[]" ||
		notationGeneralProgrammer_array_like_names([]*schemametadata.MetadataTuple{tuple}) != "Tuple" {
		t.Fatal("notation collection helper predicate mismatch")
	}
	if notationGeneralProgrammer_create_throw_error(notationGeneralProgrammer_throwProps{
		Functor:  functor,
		Expected: "string",
		Input:    input,
	}) == nil {
		t.Fatal("throw error helper returned nil")
	}
	notationConfig := nativeinternal.FeatureProgrammer_IConfig{
		Prefix: "_n",
		Decoder: func(props nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
			return props.Input
		},
	}
	decode := func(meta *schemametadata.MetadataSchema) *shimast.Node {
		return notationGeneralProgrammer_decode(struct {
			Config   nativeinternal.FeatureProgrammer_IConfig
			Rename   NotationGeneralProgrammer_IRename
			Context  nativecontext.ITypiaContext
			Functor  *nativehelpers.FunctionProgrammer
			Metadata *schemametadata.MetadataSchema
			Explore  nativeinternal.FeatureProgrammer_IExplore
			Input    *shimast.Node
		}{
			Config:   notationConfig,
			Rename:   NotationGeneralProgrammer_Camel,
			Context:  nativecontext.ITypiaContext{},
			Functor:  functor,
			Metadata: meta,
			Explore:  explore,
			Input:    input,
		})
	}
	anyMeta := schemametadata.MetadataSchema_initialize()
	anyMeta.Any = true
	arrayAnyMeta := schemametadata.MetadataSchema_initialize()
	anyElement := schemametadata.MetadataSchema_initialize()
	anyElement.Any = true
	arrayAnyMeta.Arrays = append(arrayAnyMeta.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "any[]", Value: anyElement}),
	}))
	tupleAnyMeta := schemametadata.MetadataSchema_initialize()
	tupleAnyMeta.Tuples = append(tupleAnyMeta.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{Name: "AnyTuple", Elements: []*schemametadata.MetadataSchema{anyElement}}),
	}))
	functionMeta := schemametadata.MetadataSchema_initialize()
	functionMeta.Functions = append(functionMeta.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{Output: atomic}))
	tupleMeta := schemametadata.MetadataSchema_initialize()
	tupleMeta.Tuples = append(tupleMeta.Tuples, tuple)
	arrayMeta := schemametadata.MetadataSchema_initialize()
	arrayMeta.Arrays = append(arrayMeta.Arrays, array)
	setMeta := schemametadata.MetadataSchema_initialize()
	setMeta.Sets = append(setMeta.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: atomic}))
	mapMeta := schemametadata.MetadataSchema_initialize()
	mapMeta.Maps = append(mapMeta.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: atomic, Value: atomic}))
	nativeMeta := schemametadata.MetadataSchema_initialize()
	nativeMeta.Natives = append(nativeMeta.Natives,
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "WeakMap"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Boolean"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Date"}),
	)
	nullableNative := schemametadata.MetadataSchema_initialize()
	nullableNative.Nullable = true
	nullableNative.Natives = append(nullableNative.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Date"}))
	objectMeta := schemametadata.MetadataSchema_initialize()
	objectMeta.Objects = append(objectMeta.Objects,
		schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "NotationA"})}),
		schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "NotationB"})}),
	)
	objectMeta.Union_index = &index
	plainMeta := schemametadata.MetadataSchema_initialize()
	multiMeta := schemametadata.MetadataSchema_initialize()
	multiMeta.Functions = append(multiMeta.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{Output: atomic}))
	multiMeta.Tuples = append(multiMeta.Tuples, tuple)
	multiMeta.Arrays = append(multiMeta.Arrays, array)
	multiMeta.Sets = append(multiMeta.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: atomic}))
	multiMeta.Maps = append(multiMeta.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: atomic, Value: atomic}))
	multiMeta.Natives = append(multiMeta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Date"}))
	multiMeta.Objects = append(multiMeta.Objects, objectMeta.Objects...)
	for _, meta := range []*schemametadata.MetadataSchema{
		anyMeta,
		arrayAnyMeta,
		tupleAnyMeta,
		functionMeta,
		tupleMeta,
		arrayMeta,
		setMeta,
		mapMeta,
		nativeMeta,
		nullableNative,
		objectMeta,
		plainMeta,
		multiMeta,
	} {
		if decode(meta) == nil {
			t.Fatal("notation top-level decoder returned nil")
		}
	}
	if notationGeneralProgrammer_explore_sets(notationGeneralProgrammer_exploreSetsProps{
		Context: nativecontext.ITypiaContext{},
		Config:  notationConfig,
		Functor: functor,
		Input:   input,
		Sets: []*schemametadata.MetadataSet{
			schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: atomic}),
			schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Required: true, Atomics: []*schemametadata.MetadataAtomic{
				schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}),
			}})}),
		},
	}) == nil {
		t.Fatal("set explorer returned nil")
	}
	if notationGeneralProgrammer_explore_maps(notationGeneralProgrammer_exploreMapsProps{
		Context: nativecontext.ITypiaContext{},
		Config:  notationConfig,
		Functor: functor,
		Input:   input,
		Maps: []*schemametadata.MetadataMap{
			schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: atomic, Value: atomic}),
			schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: atomic, Value: schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{Required: true, Atomics: []*schemametadata.MetadataAtomic{
				schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}),
			}})}),
		},
	}) == nil {
		t.Fatal("map explorer returned nil")
	}
	if notationGeneralProgrammer_explore_objects(notationGeneralProgrammer_exploreObjectsProps{
		Config:   notationConfig,
		Functor:  functor,
		Input:    input,
		Metadata: objectMeta,
		Explore:  explore,
	}) == nil {
		t.Fatal("object explorer returned nil")
	}
	collection := schemametadata.NewMetadataCollection()
	recursiveArray, _, setRecursiveArray := collection.EmplaceArray(nil, nil)
	setRecursiveArray(atomic)
	collection.SetArrayRecursive(recursiveArray, true)
	recursiveTuple, _, setRecursiveTuple := collection.EmplaceTuple(nil, nil)
	setRecursiveTuple([]*schemametadata.MetadataSchema{atomic})
	collection.SetTupleRecursive(recursiveTuple, true)
	if len(notationGeneralProgrammer_write_array_functions(struct {
		Config     nativeinternal.FeatureProgrammer_IConfig
		Functor    *nativehelpers.FunctionProgrammer
		Collection *schemametadata.MetadataCollection
	}{Config: notationConfig, Functor: functor, Collection: collection})) == 0 {
		t.Fatal("recursive array generator should emit helper functions")
	}
	if len(notationGeneralProgrammer_write_tuple_functions(struct {
		Config     nativeinternal.FeatureProgrammer_IConfig
		Rename     NotationGeneralProgrammer_IRename
		Context    nativecontext.ITypiaContext
		Functor    *nativehelpers.FunctionProgrammer
		Collection *schemametadata.MetadataCollection
	}{Config: notationConfig, Rename: NotationGeneralProgrammer_Camel, Functor: functor, Collection: collection})) == 0 {
		t.Fatal("recursive tuple generator should emit helper functions")
	}
	configured := notationGeneralProgrammer_configure(struct {
		Rename  NotationGeneralProgrammer_IRename
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
	}{Rename: NotationGeneralProgrammer_Camel, Functor: functor})
	if configured.Objector.Checker(nativeinternal.FeatureProgrammer_ObjectorCheckerProps{Metadata: atomic, Input: input, Explore: explore}) == nil ||
		configured.Objector.Decoder(nativeinternal.FeatureProgrammer_ObjectorDecoderProps{Object: objectMeta.Objects[0].Type, Input: input, Explore: explore}) == nil ||
		configured.Objector.Joiner(nativeinternal.FeatureProgrammer_ObjectorJoinerProps{Input: input, Object: objectMeta.Objects[0].Type}) == nil ||
		configured.Objector.Unionizer(nativeinternal.FeatureProgrammer_ObjectorUnionizerProps{Objects: []*schemametadata.MetadataObjectType{objectMeta.Objects[0].Type, objectMeta.Objects[1].Type}, Input: input, Explore: explore}) == nil ||
		configured.Objector.Failure(nativeinternal.FeatureProgrammer_ObjectorFailureProps{Input: input, Expected: "Object"}) == nil {
		t.Fatal("configured objector closures should return nodes")
	}
	errors := notationGeneralProgrammer_errors([]nativefactories.MetadataFactory_IError{
		{Name: "T", Messages: []string{"message"}},
	})
	if len(errors) != 1 || errors[0].Name != "T" || len(errors[0].Messages) != 1 {
		t.Fatalf("notation errors were not converted: %+v", errors)
	}
}

type notationGeneralImporter struct{}

func (notationGeneralImporter) Internal(name string) *shimast.Node {
	return shimast.NewNodeFactory(shimast.NodeFactoryHooks{}).NewIdentifier(name)
}

func (notationGeneralImporter) Type(props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
	if name, ok := props.Name.(string); ok {
		return shimast.NewNodeFactory(shimast.NodeFactoryHooks{}).NewIdentifier(name)
	}
	return props.Name.(*shimast.Node)
}
