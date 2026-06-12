//go:build typia_native_internal
// +build typia_native_internal

package misc

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimprinter "github.com/microsoft/typescript-go/shim/printer"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMiscProgrammerHelperCoverage exercises clone and prune helpers.
//
// Misc clone and prune programmers share helper functions for throw statements,
// explore conversion, tuple handling, and name joining. Direct metadata-driven
// calls cover these branches without needing a full transform.
//
// 1. Build clone throw statements and internal helper references.
// 2. Convert feature explores into checker explores with postfix updates.
// 3. Decode clone and prune tuple metadata through inline tuple builders.
// 4. Explore clone array, set, map, and object-union metadata.
// 5. Drive top-level clone and prune union decoders across rich metadata.
// 6. Verify prune tuple filters and generic name joiners.
func TestMiscProgrammerHelperCoverage(t *testing.T) {
	emit := shimprinter.NewEmitContext()
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	input := factory.NewIdentifier("input")
	context := nativecontext.ITypiaContext{}
	functor := nativehelpers.NewFunctionProgrammer("misc")
	explore := nativeinternal.FeatureProgrammer_IExplore{Tracable: true, Source: "top", From: "top", Postfix: "\"\""}
	stringMeta := miscAtomic("string")
	tuple := schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
			Name:      "[string]",
			Elements:  []*schemametadata.MetadataSchema{stringMeta},
			Nullables: []bool{},
		}),
	})
	config := nativeinternal.FeatureProgrammer_IConfig{
		Prefix: "_m",
		Decoder: func(props nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
			return props.Input
		},
	}
	if miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
		Context:  context,
		Functor:  functor,
		Expected: "string",
		Input:    input,
	}) == nil || miscCloneProgrammer_internal(context, "helper") == nil {
		t.Fatal("misc clone throw or internal helper returned nil")
	}
	if miscCloneProgrammer_checker_explore(explore).Postfix != "\"\"" ||
		miscCloneProgrammer_checker_explore_with_postfix(&explore, ".x").Postfix != "\"\".x" ||
		miscCloneProgrammer_explore_with(explore, "function", "array").From != "array" {
		t.Fatal("misc clone explore conversion mismatch")
	}
	if miscCloneProgrammer_decode_tuple(miscCloneProgrammer_decodeTupleProps{
		Context: context,
		Config:  config,
		Functor: functor,
		Input:   input,
		Tuple:   tuple,
		Explore: explore,
	}) == nil || miscPruneProgrammer_decode_tuple(miscPruneProgrammer_decodeTupleProps{
		Context: context,
		Config:  config,
		Functor: functor,
		Input:   input,
		Tuple:   tuple,
		Explore: explore,
	}) == nil {
		t.Fatal("misc tuple decoder returned nil")
	}
	array := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
			Name:      "string[]",
			Value:     stringMeta,
			Nullables: []bool{},
		}),
	})
	numberMeta := miscAtomic("number")
	objectA := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "ObjectA"})
	objectB := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "ObjectB"})
	objectMeta := schemametadata.MetadataSchema_initialize()
	objectMeta.Objects = append(objectMeta.Objects,
		schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectA}),
		schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectB}),
	)
	unionIndex := 1
	objectMeta.Union_index = &unionIndex
	if miscCloneProgrammer_explore_arrays(miscCloneProgrammer_exploreArraysProps{
		Context: context,
		Config:  config,
		Functor: functor,
		Input:   input,
		Arrays:  []*schemametadata.MetadataArray{array},
		Explore: explore,
	}) == nil || miscCloneProgrammer_explore_sets(miscCloneProgrammer_exploreSetsProps{
		Context: context,
		Config:  config,
		Functor: functor,
		Input:   input,
		Sets: []*schemametadata.MetadataSet{
			schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: stringMeta}),
			schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: numberMeta}),
		},
		Explore: explore,
	}) == nil || miscCloneProgrammer_explore_maps(miscCloneProgrammer_exploreMapsProps{
		Context: context,
		Config:  config,
		Functor: functor,
		Input:   input,
		Maps: []*schemametadata.MetadataMap{
			schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: stringMeta, Value: stringMeta}),
			schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: stringMeta, Value: numberMeta}),
		},
		Explore: explore,
	}) == nil || miscCloneProgrammer_explore_objects(miscCloneProgrammer_exploreObjectsProps{
		Config:   config,
		Functor:  functor,
		Input:    input,
		Metadata: objectMeta,
		Explore:  explore,
	}) == nil {
		t.Fatal("misc clone explorer returned nil")
	}
	anyMeta := schemametadata.MetadataSchema_initialize()
	anyMeta.Any = true
	anyTuple := schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
			Name:      "[any]",
			Elements:  []*schemametadata.MetadataSchema{anyMeta},
			Nullables: []bool{},
		}),
	})
	anyTupleMeta := schemametadata.MetadataSchema_initialize()
	anyTupleMeta.Tuples = append(anyTupleMeta.Tuples, anyTuple)
	anyArrayMeta := schemametadata.MetadataSchema_initialize()
	anyArrayMeta.Arrays = append(anyArrayMeta.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
			Name:      "any[]",
			Value:     anyMeta,
			Nullables: []bool{},
		}),
	}))
	plainMeta := schemametadata.MetadataSchema_initialize()
	objectOnlyMeta := miscObjectMeta("PruneObject")
	restElem := schemametadata.MetadataSchema_initialize()
	restElem.Rest = objectOnlyMeta
	restTuple := schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
			Name:      "[object, ...object[]]",
			Elements:  []*schemametadata.MetadataSchema{objectOnlyMeta, restElem},
			Nullables: []bool{},
		}),
	})
	richClone := schemametadata.MetadataSchema_initialize()
	richClone.Functions = append(richClone.Functions, schemametadata.MetadataFunction_create(schemametadata.MetadataFunction{Output: stringMeta}))
	richClone.Tuples = append(richClone.Tuples, restTuple)
	richClone.Arrays = append(richClone.Arrays, array)
	richClone.Sets = append(richClone.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: stringMeta}))
	richClone.Maps = append(richClone.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: stringMeta, Value: numberMeta}))
	richClone.Natives = append(richClone.Natives,
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Boolean"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "ArrayBuffer"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "DataView"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Date"}),
		schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "CustomNative"}),
	)
	richClone.Objects = append(richClone.Objects, objectMeta.Objects...)
	nullableNative := schemametadata.MetadataSchema_initialize()
	nullableNative.Nullable = true
	nullableNative.Natives = append(nullableNative.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Date"}))
	for _, meta := range []*schemametadata.MetadataSchema{anyMeta, anyTupleMeta, anyArrayMeta, richClone, nullableNative, plainMeta} {
		if miscCloneProgrammer_decode(struct {
			Context  nativecontext.ITypiaContext
			Config   nativeinternal.FeatureProgrammer_IConfig
			Functor  *nativehelpers.FunctionProgrammer
			Input    *shimast.Node
			Metadata *schemametadata.MetadataSchema
			Explore  nativeinternal.FeatureProgrammer_IExplore
		}{Context: context, Config: config, Functor: functor, Input: input, Metadata: meta, Explore: explore}) == nil {
			t.Fatal("top-level misc clone decoder returned nil")
		}
	}
	richPrune := schemametadata.MetadataSchema_initialize()
	richPrune.Tuples = append(richPrune.Tuples, restTuple)
	richPrune.Arrays = append(richPrune.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
			Name:      "PruneObject[]",
			Value:     objectOnlyMeta,
			Nullables: []bool{},
		}),
	}))
	richPrune.Natives = append(richPrune.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Date"}))
	richPrune.Sets = append(richPrune.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: stringMeta}))
	richPrune.Maps = append(richPrune.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: stringMeta, Value: objectOnlyMeta}))
	richPrune.Objects = append(richPrune.Objects, objectMeta.Objects...)
	for _, meta := range []*schemametadata.MetadataSchema{anyMeta, richPrune} {
		if miscPruneProgrammer_decode(struct {
			Context  nativecontext.ITypiaContext
			Config   nativeinternal.FeatureProgrammer_IConfig
			Functor  *nativehelpers.FunctionProgrammer
			Input    *shimast.Node
			Metadata *schemametadata.MetadataSchema
			Explore  nativeinternal.FeatureProgrammer_IExplore
		}{Context: context, Config: config, Functor: functor, Input: input, Metadata: meta, Explore: explore}) == nil {
			t.Fatal("top-level misc prune decoder returned nil")
		}
	}
	if miscPruneProgrammer_to_statement(input, emit) == nil ||
		miscPruneProgrammer_top_level_body(input, emit) == nil ||
		!miscPruneProgrammer_filter(objectOnlyMeta) ||
		miscPruneProgrammer_filter(anyMeta) ||
		!miscCloneProgrammer_is_instance(restElem) {
		t.Fatal("misc top-level helper branch mismatch")
	}
	if miscPruneProgrammer_explore_arrays(miscPruneProgrammer_exploreArraysProps{
		Context: context,
		Config:  config,
		Functor: functor,
		Input:   input,
		Arrays:  []*schemametadata.MetadataArray{array},
		Explore: explore,
	}) == nil || miscPruneProgrammer_explore_objects(miscPruneProgrammer_exploreObjectsProps{
		Config:   config,
		Functor:  functor,
		Input:    input,
		Metadata: objectMeta,
		Explore:  explore,
	}) == nil {
		t.Fatal("misc prune explorer returned nil")
	}
	if miscPruneProgrammer_tuple_filter(tuple) ||
		miscPruneProgrammer_some_schema([]*schemametadata.MetadataSchema{stringMeta}, func(*schemametadata.MetadataSchema) bool { return true }) == false {
		t.Fatal("misc prune tuple or schema filter mismatch")
	}
	name := "Named"
	if miscCloneProgrammer_internal(nativecontext.ITypiaContext{Importer: nativecontext.NewImportProgrammer()}, "helper") == nil ||
		miscCloneProgrammer_import_type(nativecontext.ITypiaContext{Importer: nativecontext.NewImportProgrammer()}, nativecontext.ImportProgrammer_TypeProps{Name: "Resolved"}) == nil ||
		miscCloneProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{Name: "Resolved"}) == nil ||
		miscCloneProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{Name: input}) != input ||
		miscCloneProgrammer_type_name(context, nil, &name) != "Named" ||
		miscCloneProgrammer_method_text(nil) != "" ||
		miscCloneProgrammer_method_text(factory.NewIdentifier("misc")) != "misc" ||
		len(miscCloneProgrammer_errors([]nativefactories.MetadataFactory_IError{{
			Name:     "Failure",
			Messages: []string{"bad"},
		}})) != 1 ||
		miscCloneProgrammer_feature_explore("unknown").Postfix != "" ||
		!miscCloneProgrammer_some_arrays([]*schemametadata.MetadataArray{array}, func(*schemametadata.MetadataArray) bool { return true }) ||
		miscCloneProgrammer_some_arrays([]*schemametadata.MetadataArray{array}, func(*schemametadata.MetadataArray) bool { return false }) ||
		!miscCloneProgrammer_some_tuples([]*schemametadata.MetadataTuple{tuple}, func(*schemametadata.MetadataTuple) bool { return true }) ||
		miscCloneProgrammer_some_tuples([]*schemametadata.MetadataTuple{tuple}, func(*schemametadata.MetadataTuple) bool { return false }) ||
		!miscCloneProgrammer_every_schema([]*schemametadata.MetadataSchema{stringMeta}, func(*schemametadata.MetadataSchema) bool { return true }) ||
		miscCloneProgrammer_every_schema([]*schemametadata.MetadataSchema{}, func(*schemametadata.MetadataSchema) bool { return true }) ||
		miscCloneProgrammer_every_schema([]*schemametadata.MetadataSchema{stringMeta}, func(*schemametadata.MetadataSchema) bool { return false }) {
		t.Fatal("misc clone utility helper mismatch")
	}
	if miscCloneProgrammer_join_names([]string{"a", "b"}, func(value string) string { return value }) != "a | b" ||
		miscPruneProgrammer_join_names([]string{"a", "b"}, func(value string) string { return value }) != "a | b" {
		t.Fatal("misc join name helper mismatch")
	}
}
func miscAtomic(kind string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: kind}))
	return meta
}

func miscObjectMeta(name string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Objects = append(meta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: name}),
	}))
	return meta
}
