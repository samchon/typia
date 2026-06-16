//go:build typia_native_internal
// +build typia_native_internal

package plain

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

// TestPlainProgrammerHelperCoverage exercises clone and prune helpers.
//
// Plain clone and prune programmers share helper functions for throw statements,
// explore conversion, tuple handling, and name joining. Direct metadata-driven
// calls cover these branches without needing a full transform.
//
// 1. Build clone throw statements and internal helper references.
// 2. Convert feature explores into checker explores with postfix updates.
// 3. Decode clone and prune tuple metadata through inline tuple builders.
// 4. Explore clone array, set, map, and object-union metadata.
// 5. Drive top-level clone and prune union decoders across rich metadata.
// 6. Verify prune tuple filters and generic name joiners.
func TestPlainProgrammerHelperCoverage(t *testing.T) {
  emit := shimprinter.NewEmitContext()
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  input := factory.NewIdentifier("input")
  context := nativecontext.ITypiaContext{}
  functor := nativehelpers.NewFunctionProgrammer("plain")
  explore := nativeinternal.FeatureProgrammer_IExplore{Tracable: true, Source: "top", From: "top", Postfix: "\"\""}
  stringMeta := plainAtomic("string")
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
  if plainCloneProgrammer_create_throw_error(plainCloneProgrammer_throwProps{
    Context:  context,
    Functor:  functor,
    Expected: "string",
    Input:    input,
  }) == nil || plainCloneProgrammer_internal(context, "helper") == nil {
    t.Fatal("plain clone throw or internal helper returned nil")
  }
  if plainCloneProgrammer_checker_explore(explore).Postfix != "\"\"" ||
    plainCloneProgrammer_checker_explore_with_postfix(&explore, ".x").Postfix != "\"\".x" ||
    plainCloneProgrammer_explore_with(explore, "function", "array").From != "array" {
    t.Fatal("plain clone explore conversion mismatch")
  }
  if plainCloneProgrammer_decode_tuple(plainCloneProgrammer_decodeTupleProps{
    Context: context,
    Config:  config,
    Functor: functor,
    Input:   input,
    Tuple:   tuple,
    Explore: explore,
  }) == nil || plainPruneProgrammer_decode_tuple(plainPruneProgrammer_decodeTupleProps{
    Context: context,
    Config:  config,
    Functor: functor,
    Input:   input,
    Tuple:   tuple,
    Explore: explore,
  }) == nil {
    t.Fatal("plain tuple decoder returned nil")
  }
  array := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
    Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
      Name:      "string[]",
      Value:     stringMeta,
      Nullables: []bool{},
    }),
  })
  numberMeta := plainAtomic("number")
  objectA := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "ObjectA"})
  objectB := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "ObjectB"})
  objectMeta := schemametadata.MetadataSchema_initialize()
  objectMeta.Objects = append(objectMeta.Objects,
    schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectA}),
    schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: objectB}),
  )
  unionIndex := 1
  objectMeta.Union_index = &unionIndex
  if plainCloneProgrammer_explore_arrays(plainCloneProgrammer_exploreArraysProps{
    Context: context,
    Config:  config,
    Functor: functor,
    Input:   input,
    Arrays:  []*schemametadata.MetadataArray{array},
    Explore: explore,
  }) == nil || plainCloneProgrammer_explore_sets(plainCloneProgrammer_exploreSetsProps{
    Context: context,
    Config:  config,
    Functor: functor,
    Input:   input,
    Sets: []*schemametadata.MetadataSet{
      schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: stringMeta}),
      schemametadata.MetadataSet_create(schemametadata.MetadataSet{Value: numberMeta}),
    },
    Explore: explore,
  }) == nil || plainCloneProgrammer_explore_maps(plainCloneProgrammer_exploreMapsProps{
    Context: context,
    Config:  config,
    Functor: functor,
    Input:   input,
    Maps: []*schemametadata.MetadataMap{
      schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: stringMeta, Value: stringMeta}),
      schemametadata.MetadataMap_create(schemametadata.MetadataMap{Key: stringMeta, Value: numberMeta}),
    },
    Explore: explore,
  }) == nil || plainCloneProgrammer_explore_objects(plainCloneProgrammer_exploreObjectsProps{
    Config:   config,
    Functor:  functor,
    Input:    input,
    Metadata: objectMeta,
    Explore:  explore,
  }) == nil {
    t.Fatal("plain clone explorer returned nil")
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
  objectOnlyMeta := plainObjectMeta("PruneObject")
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
    if plainCloneProgrammer_decode(struct {
      Context  nativecontext.ITypiaContext
      Config   nativeinternal.FeatureProgrammer_IConfig
      Functor  *nativehelpers.FunctionProgrammer
      Input    *shimast.Node
      Metadata *schemametadata.MetadataSchema
      Explore  nativeinternal.FeatureProgrammer_IExplore
    }{Context: context, Config: config, Functor: functor, Input: input, Metadata: meta, Explore: explore}) == nil {
      t.Fatal("top-level plain clone decoder returned nil")
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
    if plainPruneProgrammer_decode(struct {
      Context  nativecontext.ITypiaContext
      Config   nativeinternal.FeatureProgrammer_IConfig
      Functor  *nativehelpers.FunctionProgrammer
      Input    *shimast.Node
      Metadata *schemametadata.MetadataSchema
      Explore  nativeinternal.FeatureProgrammer_IExplore
    }{Context: context, Config: config, Functor: functor, Input: input, Metadata: meta, Explore: explore}) == nil {
      t.Fatal("top-level plain prune decoder returned nil")
    }
  }
  if plainPruneProgrammer_to_statement(input, emit) == nil ||
    plainPruneProgrammer_top_level_body(input, emit) == nil ||
    !plainPruneProgrammer_filter(objectOnlyMeta) ||
    plainPruneProgrammer_filter(anyMeta) ||
    !plainCloneProgrammer_is_instance(restElem) {
    t.Fatal("plain top-level helper branch mismatch")
  }
  if plainPruneProgrammer_explore_arrays(plainPruneProgrammer_exploreArraysProps{
    Context: context,
    Config:  config,
    Functor: functor,
    Input:   input,
    Arrays:  []*schemametadata.MetadataArray{array},
    Explore: explore,
  }) == nil || plainPruneProgrammer_explore_objects(plainPruneProgrammer_exploreObjectsProps{
    Config:   config,
    Functor:  functor,
    Input:    input,
    Metadata: objectMeta,
    Explore:  explore,
  }) == nil {
    t.Fatal("plain prune explorer returned nil")
  }
  if plainPruneProgrammer_tuple_filter(tuple) ||
    plainPruneProgrammer_some_schema([]*schemametadata.MetadataSchema{stringMeta}, func(*schemametadata.MetadataSchema) bool { return true }) == false {
    t.Fatal("plain prune tuple or schema filter mismatch")
  }
  name := "Named"
  if plainCloneProgrammer_internal(nativecontext.ITypiaContext{Importer: nativecontext.NewImportProgrammer()}, "helper") == nil ||
    plainCloneProgrammer_import_type(nativecontext.ITypiaContext{Importer: nativecontext.NewImportProgrammer()}, nativecontext.ImportProgrammer_TypeProps{Name: "Resolved"}) == nil ||
    plainCloneProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{Name: "Resolved"}) == nil ||
    plainCloneProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{Name: input}) != input ||
    plainCloneProgrammer_type_name(context, nil, &name) != "Named" ||
    plainCloneProgrammer_method_text(nil) != "" ||
    plainCloneProgrammer_method_text(factory.NewIdentifier("plain")) != "plain" ||
    len(plainCloneProgrammer_errors([]nativefactories.MetadataFactory_IError{{
      Name:     "Failure",
      Messages: []string{"bad"},
    }})) != 1 ||
    plainCloneProgrammer_feature_explore("unknown").Postfix != "" ||
    !plainCloneProgrammer_some_arrays([]*schemametadata.MetadataArray{array}, func(*schemametadata.MetadataArray) bool { return true }) ||
    plainCloneProgrammer_some_arrays([]*schemametadata.MetadataArray{array}, func(*schemametadata.MetadataArray) bool { return false }) ||
    !plainCloneProgrammer_some_tuples([]*schemametadata.MetadataTuple{tuple}, func(*schemametadata.MetadataTuple) bool { return true }) ||
    plainCloneProgrammer_some_tuples([]*schemametadata.MetadataTuple{tuple}, func(*schemametadata.MetadataTuple) bool { return false }) ||
    !plainCloneProgrammer_every_schema([]*schemametadata.MetadataSchema{stringMeta}, func(*schemametadata.MetadataSchema) bool { return true }) ||
    plainCloneProgrammer_every_schema([]*schemametadata.MetadataSchema{}, func(*schemametadata.MetadataSchema) bool { return true }) ||
    plainCloneProgrammer_every_schema([]*schemametadata.MetadataSchema{stringMeta}, func(*schemametadata.MetadataSchema) bool { return false }) {
    t.Fatal("plain clone utility helper mismatch")
  }
  if plainCloneProgrammer_join_names([]string{"a", "b"}, func(value string) string { return value }) != "a | b" ||
    plainPruneProgrammer_join_names([]string{"a", "b"}, func(value string) string { return value }) != "a | b" {
    t.Fatal("plain join name helper mismatch")
  }
}
func plainAtomic(kind string) *schemametadata.MetadataSchema {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: kind}))
  return meta
}

func plainObjectMeta(name string) *schemametadata.MetadataSchema {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Objects = append(meta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
    Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: name}),
  }))
  return meta
}
