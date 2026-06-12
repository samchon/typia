//go:build typia_native_internal
// +build typia_native_internal

package misc

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimprinter "github.com/microsoft/typescript-go/shim/printer"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMiscPruneProgrammerBranchMatrix covers prune-specific recursive branches.
//
// The broad misc helper test drives shared clone/prune helpers, but recursive
// prune arrays, recursive prune tuples, and the prune configuration callbacks
// have their own branches. This test constructs metadata components directly
// so those branches run without a full TypeScript checker program.
//
// 1. Build recursive array and tuple metadata inside a metadata collection.
// 2. Generate recursive helper functions and recursive call expressions.
// 3. Exercise prune config type, generator, decoder, objector, and unionizer callbacks.
// 4. Verify statement normalization and object exploration branches.
func TestMiscPruneProgrammerBranchMatrix(t *testing.T) {
	emit := shimprinter.NewEmitContext()
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	input := factory.NewIdentifier("input")
	context := nativecontext.ITypiaContext{}
	functor := nativehelpers.NewFunctionProgrammer("misc.prune")
	objectMeta := miscObjectMeta("PruneBranchObject")
	collection := schemametadata.NewMetadataCollection()
	arrayType, _, setArray := collection.EmplaceArray(nil, nil)
	setArray(objectMeta)
	collection.SetArrayRecursive(arrayType, true)
	tupleType, _, setTuple := collection.EmplaceTuple(nil, nil)
	setTuple([]*schemametadata.MetadataSchema{objectMeta})
	collection.SetTupleRecursive(tupleType, true)

	config := miscPruneProgrammer_configure(struct {
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
	}{Context: context, Functor: functor})
	if len(miscPruneProgrammer_write_array_functions(struct {
		Context    nativecontext.ITypiaContext
		Config     nativeinternal.FeatureProgrammer_IConfig
		Functor    *nativehelpers.FunctionProgrammer
		Collection *schemametadata.MetadataCollection
	}{Context: context, Config: config, Functor: functor, Collection: collection})) != 1 {
		t.Fatal("recursive array helper should be generated")
	}
	if len(miscPruneProgrammer_write_tuple_functions(struct {
		Context    nativecontext.ITypiaContext
		Config     nativeinternal.FeatureProgrammer_IConfig
		Functor    *nativehelpers.FunctionProgrammer
		Collection *schemametadata.MetadataCollection
	}{Context: context, Config: config, Functor: functor, Collection: collection})) != 1 {
		t.Fatal("recursive tuple helper should be generated")
	}

	recursiveArray := schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: arrayType,
		Tags: [][]schemametadata.IMetadataTypeTag{},
	})
	recursiveTuple := schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: tupleType,
		Tags: [][]schemametadata.IMetadataTypeTag{},
	})
	explore := nativeinternal.FeatureProgrammer_IExplore{Tracable: true, Source: "top", From: "top", Postfix: "\"\""}
	if miscPruneProgrammer_decode_array(miscPruneProgrammer_decodeArrayProps{
		Config:  config,
		Functor: functor,
		Input:   input,
		Array:   recursiveArray,
		Explore: explore,
	}) == nil || miscPruneProgrammer_decode_tuple(miscPruneProgrammer_decodeTupleProps{
		Context: context,
		Config:  config,
		Functor: functor,
		Input:   input,
		Tuple:   recursiveTuple,
		Explore: explore,
	}) == nil {
		t.Fatal("recursive prune decoders should return call expressions")
	}

	if config.Types.Input(nil, nil) == nil || config.Types.Output(nil, nil) == nil {
		t.Fatal("prune config type callbacks returned nil")
	}
	if len(config.Generator.Arrays(collection)) != 1 || len(config.Generator.Tuples(collection)) != 1 {
		t.Fatal("prune config generator callbacks should reuse recursive helpers")
	}
	if config.Decoder(nativeinternal.FeatureProgrammer_DecoderProps{
		Input:    input,
		Metadata: objectMeta,
		Explore:  explore,
	}) == nil {
		t.Fatal("prune config decoder callback returned nil")
	}
	object := objectMeta.Objects[0].Type
	if config.Objector.Decoder(nativeinternal.FeatureProgrammer_ObjectorDecoderProps{
		Input:   input,
		Object:  object,
		Explore: explore,
	}) == nil || config.Objector.Joiner(nativeinternal.FeatureProgrammer_ObjectorJoinerProps{
		Input:   input,
		Entries: []nativehelpers.IExpressionEntry{},
		Object:  object,
	}) == nil || config.Objector.Failure(nativeinternal.FeatureProgrammer_ObjectorFailureProps{
		Expected: "object",
		Input:    input,
	}) == nil {
		t.Fatal("prune objector callbacks returned nil")
	}
	if config.Objector.Unionizer(nativeinternal.FeatureProgrammer_ObjectorUnionizerProps{
		Input:   input,
		Objects: []*schemametadata.MetadataObjectType{object},
		Explore: explore,
	}) == nil {
		t.Fatal("prune objector unionizer callback returned nil")
	}

	if miscPruneProgrammer_to_statement(nil, emit) != nil ||
		miscPruneProgrammer_to_statement(factory.NewBlock(factory.NewNodeList(nil), false), emit).Kind != shimast.KindBlock ||
		miscPruneProgrammer_to_statement(factory.NewReturnStatement(input), emit).Kind != shimast.KindReturnStatement {
		t.Fatal("prune statement normalizer should preserve nil, blocks, and returns")
	}
	if miscPruneProgrammer_top_level_body(factory.NewBlock(factory.NewNodeList([]*shimast.Node{
		factory.NewExpressionStatement(input),
	}), true), emit) == nil {
		t.Fatal("top-level prune body should unwrap block statements")
	}
	if miscPruneProgrammer_explore_objects(miscPruneProgrammer_exploreObjectsProps{
		Config:   config,
		Functor:  functor,
		Input:    input,
		Metadata: objectMeta,
		Explore:  explore,
	}) == nil {
		t.Fatal("single-object prune exploration should decode directly")
	}
}
