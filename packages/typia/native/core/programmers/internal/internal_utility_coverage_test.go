package internal

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestInternalUtilityCoverage exercises internal programmer helpers.
//
// Checker and feature programmers normally receive metadata from the TypeScript
// checker. This test supplies small metadata graphs directly so helper branches
// around array-like unions, escaped toJSON checks, and feature writer assembly
// are covered without needing checker state.
//
// 1. Build a minimal feature writer with injected initializer and decoder.
// 2. Exercise checker escaped, toJSON, union name, and array-like config helpers.
// 3. Build tuple, array, and mixed array-like union explorers.
// 4. Decode checker array and tuple helpers in inline and recursive modes.
// 5. Verify map, set, and object-like union exploration helpers.
// 6. Verify helper functions for binary joins, definition naming, and explore conversion.
// 7. Cover configured checker objectors, recursive writers, and direct decode branches.
func TestInternalUtilityCoverage(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	input := factory.NewIdentifier("input")
	success := factory.NewKeywordExpression(shimast.KindTrueKeyword)
	context := nativecontext.ITypiaContext{}
	functor := nativehelpers.NewFunctionProgrammer("internal")
	stringMeta := internalAtomic("string")
	array := internalArray("string[]", stringMeta)
	tuple := internalTuple("[string]", stringMeta)

	featureConfig := FeatureProgrammer_IConfig{
		Types: FeatureProgrammer_IConfig_ITypes{
			Input: func(_ *shimchecker.Type, _ *string) *shimast.TypeNode {
				return nativefactories.TypeFactory.Keyword("any")
			},
			Output: func(_ *shimchecker.Type, _ *string) *shimast.TypeNode {
				return nativefactories.TypeFactory.Keyword("any")
			},
		},
		Prefix: "_f",
		Initializer: func(props FeatureProgrammer_InitializerProps) FeatureProgrammer_InitializerOutput {
			return FeatureProgrammer_InitializerOutput{
				Collection: nativemetadata.NewMetadataCollection(),
				Metadata:   stringMeta,
			}
		},
		Decoder: func(props FeatureProgrammer_DecoderProps) *shimast.Node {
			if props.Input == nil || props.Metadata == nil {
				t.Fatal("feature decoder received incomplete props")
			}
			return props.Input
		},
		Objector: FeatureProgrammer_IConfig_IObjector{
			Joiner: func(props FeatureProgrammer_ObjectorJoinerProps) *shimast.Node { return success },
		},
		Generator: FeatureProgrammer_IConfig_IGenerator{
			Arrays: func(collection *nativemetadata.MetadataCollection) []*shimast.Node { return nil },
			Tuples: func(collection *nativemetadata.MetadataCollection) []*shimast.Node { return nil },
		},
	}
	if FeatureProgrammer.Write(FeatureProgrammer_WriteProps{
		Context: context,
		Config:  featureConfig,
		Functor: functor,
	}) == nil {
		t.Fatal("feature programmer write returned nil")
	}

	checkerConfig := CheckerProgrammer_IConfig{
		Prefix:  "_c",
		Success: success,
		Decoder: func(props CheckerProgrammer_DecoderProps) *shimast.Node {
			return success
		},
		Combiner: func(props CheckerProgrammer_CombinerProps) *shimast.Node {
			if props.Expected == "" {
				t.Fatal("checker combiner should receive expected text")
			}
			return success
		},
		Atomist: func(props CheckerProgrammer_AtomistProps) *shimast.Node {
			return success
		},
		Joiner: CheckerProgrammer_IConfig_IJoiner{
			Object: func(props CheckerProgrammer_JoinerObjectProps) *shimast.Node { return success },
			Array:  func(props CheckerProgrammer_JoinerArrayProps) *shimast.Node { return success },
			Tuple:  func(exprs []*shimast.Node) *shimast.Node { return success },
			Failure: func(props CheckerProgrammer_JoinerFailureProps) *shimast.Node {
				if props.Expected == "" {
					t.Fatal("checker failure should receive expected text")
				}
				return factory.NewKeywordExpression(shimast.KindFalseKeyword)
			},
			Is:       func(expression *shimast.Expression) *shimast.Node { return expression },
			Required: func(exp *shimast.Expression) *shimast.Node { return exp },
			Full: func(props CheckerProgrammer_JoinerFullProps) *shimast.Node {
				if props.Expected == "" {
					t.Fatal("checker full joiner should receive expected text")
				}
				return props.Condition
			},
		},
	}
	if checkerProgrammer_decode_escaped(checkerProgrammer_decodeEscapedProps{
		Config:   checkerConfig,
		Context:  context,
		Functor:  functor,
		Metadata: nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{Any: true, Required: true}),
		Input:    input,
	}) == nil || checkerProgrammer_decode_to_json(struct {
		Input     *shimast.Expression
		CheckNull bool
	}{Input: input, CheckNull: true}) == nil {
		t.Fatal("checker escaped or toJSON helper returned nil")
	}
	if checkerProgrammer_or(input, success) == nil ||
		len(checkerProgrammer_array_tuple_definitions([]*nativemetadata.MetadataArray{array}, []*nativemetadata.MetadataTuple{tuple})) != 2 ||
		len(checkerProgrammer_definition_names([]any{array, tuple})) != 2 {
		t.Fatal("checker binary or definition helper failed")
	}
	if checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{
		Config:  checkerConfig,
		Context: context,
		Functor: functor,
		Array:   array,
		Input:   input,
	}) == nil || checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{
		Config:  checkerConfig,
		Context: context,
		Functor: functor,
		Tuple:   tuple,
		Input:   input,
	}) == nil {
		t.Fatal("checker inline array or tuple decoder returned nil")
	}
	recursiveIndex := 2
	array.Type.Recursive = true
	array.Type.Index = &recursiveIndex
	tuple.Type.Recursive = true
	tuple.Type.Index = &recursiveIndex
	if checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{
		Config:  checkerConfig,
		Context: context,
		Functor: functor,
		Array:   array,
		Input:   input,
	}) == nil || checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{
		Config:  checkerConfig,
		Context: context,
		Functor: functor,
		Tuple:   tuple,
		Input:   input,
	}) == nil {
		t.Fatal("checker recursive array or tuple decoder returned nil")
	}
	array.Type.Recursive = false
	tuple.Type.Recursive = false

	collection := nativemetadata.NewMetadataCollection()
	recursiveArrayType, _, setRecursiveArray := collection.EmplaceArray(nil, nil)
	setRecursiveArray(stringMeta)
	collection.SetArrayRecursive(recursiveArrayType, true)
	recursiveTupleType, _, setRecursiveTuple := collection.EmplaceTuple(nil, nil)
	setRecursiveTuple([]*nativemetadata.MetadataSchema{stringMeta})
	collection.SetTupleRecursive(recursiveTupleType, true)
	if len(CheckerProgrammer.Write_array_functions(CheckerProgrammer_WriteArrayFunctionsProps{
		Config:     checkerConfig,
		Context:    context,
		Functor:    functor,
		Collection: collection,
	})) != 1 || len(CheckerProgrammer.Write_tuple_functions(CheckerProgrammer_WriteTupleFunctionsProps{
		Config:     checkerConfig,
		Context:    context,
		Functor:    functor,
		Collection: collection,
	})) != 1 {
		t.Fatal("recursive checker writers did not emit expected functions")
	}

	configWithAddition := checkerConfig
	configWithAddition.Addition = func() []*shimast.Node {
		return []*shimast.Node{factory.NewReturnStatement(success)}
	}
	configured := checkerProgrammer_configure(context, configWithAddition, functor)
	if len(configured.Addition(collection)) != 1 ||
		configured.Objector.Checker(FeatureProgrammer_ObjectorCheckerProps{Metadata: stringMeta, Input: input}) == nil ||
		configured.Objector.Full(FeatureProgrammer_ObjectorFullProps{Condition: success, Input: input, Expected: "full"}) == nil {
		t.Fatal("configured checker objector returned an incomplete branch")
	}
	leftObject := nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{Name: "Left", Properties: []*nativemetadata.MetadataProperty{}, Index: 0})
	rightObject := nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{Name: "Right", Properties: []*nativemetadata.MetadataProperty{}, Index: 1})
	equalsConfig := checkerConfig
	equalsConfig.Equals = true
	equalsConfigured := checkerProgrammer_configure(context, equalsConfig, functor)
	if equalsConfigured.Objector.Unionizer(FeatureProgrammer_ObjectorUnionizerProps{
		Objects: []*nativemetadata.MetadataObjectType{leftObject, rightObject},
		Input:   input,
	}) == nil {
		t.Fatal("configured checker unionizer returned nil")
	}

	shortConstants := nativemetadata.MetadataSchema_initialize()
	shortConstants.Constants = []*nativemetadata.MetadataConstant{
		nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{Type: "number", Values: []*nativemetadata.MetadataConstantValue{
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: int64(1)}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: uint64(2)}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: struct{ Name string }{Name: "fallback"}}),
		}}),
	}
	largeConstants := nativemetadata.MetadataSchema_initialize()
	largeConstants.Constants = []*nativemetadata.MetadataConstant{
		nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{Type: "mixed", Values: []*nativemetadata.MetadataConstantValue{
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: true}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: false}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: int64(3)}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: uint64(4)}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: 5}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: 6.5}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "seven"}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "eight"}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "nine"}),
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "ten"}),
		}}),
	}
	functional := true
	functionMeta := nativemetadata.MetadataSchema_initialize()
	functionMeta.Functions = []*nativemetadata.MetadataFunction{
		nativemetadata.MetadataFunction_create(nativemetadata.MetadataFunction{Output: stringMeta}),
	}
	functionContext := context
	functionContext.Options.Functional = &functional
	nativeAndTemplateMeta := nativemetadata.MetadataSchema_initialize()
	nativeAndTemplateMeta.Natives = []*nativemetadata.MetadataNative{
		nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Date"}),
	}
	setAnyMeta := nativemetadata.MetadataSchema_initialize()
	setAnyMeta.Sets = []*nativemetadata.MetadataSet{
		nativemetadata.MetadataSet_create(nativemetadata.MetadataSet{Value: nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{Any: true, Required: true})}),
	}
	mapAnyMeta := nativemetadata.MetadataSchema_initialize()
	mapAnyMeta.Maps = []*nativemetadata.MetadataMap{
		nativemetadata.MetadataMap_create(nativemetadata.MetadataMap{
			Key:   nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{Any: true, Required: true}),
			Value: nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{Any: true, Required: true}),
		}),
	}
	for _, branch := range []struct {
		name     string
		ctx      nativecontext.ITypiaContext
		metadata *nativemetadata.MetadataSchema
	}{
		{name: "short constants", ctx: context, metadata: shortConstants},
		{name: "large constants", ctx: context, metadata: largeConstants},
		{name: "functional", ctx: functionContext, metadata: functionMeta},
		{name: "native", ctx: context, metadata: nativeAndTemplateMeta},
		{name: "set any", ctx: context, metadata: setAnyMeta},
		{name: "map any", ctx: context, metadata: mapAnyMeta},
	} {
		if CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
			Config:   checkerConfig,
			Context:  branch.ctx,
			Functor:  functor,
			Input:    input,
			Metadata: branch.metadata,
		}) == nil {
			t.Fatalf("checker decode branch %s returned nil", branch.name)
		}
	}
	if checkerProgrammer_postfix_of_tuple("input") != "input + \"" {
		t.Fatal("checker tuple postfix fallback mismatch")
	}

	unionConfig := checkerProgrammer_array_like_config(context, checkerConfig, functor,
		func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node { return success },
		func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node { return success },
	)
	if unionConfig.Failure(nativehelpers.UnionExplorer_ArrayLikeFailureProps{
		Input:    input,
		Expected: "array",
		Explore:  CheckerProgrammer_IExplore{},
	}) == nil {
		t.Fatal("checker array-like failure branch returned nil")
	}
	if checkerProgrammer_explore_tuples(checkerProgrammer_exploreTuplesProps{
		Config:  checkerConfig,
		Context: context,
		Functor: functor,
		Tuples:  []*nativemetadata.MetadataTuple{tuple},
		Input:   input,
	}) == nil || checkerProgrammer_explore_arrays(checkerProgrammer_exploreArraysProps{
		Config:  checkerConfig,
		Context: context,
		Functor: functor,
		Arrays:  []*nativemetadata.MetadataArray{array},
		Input:   input,
	}) == nil || checkerProgrammer_explore_arrays_and_tuples(checkerProgrammer_exploreArraysAndTuplesProps{
		Config:      checkerConfig,
		Context:     context,
		Functor:     functor,
		Definitions: []any{tuple, array},
		Input:       input,
	}) == nil {
		t.Fatal("checker array-like explorer returned nil")
	}
	if checkerProgrammer_explore_sets(checkerProgrammer_exploreSetsProps{
		Config:  checkerConfig,
		Context: context,
		Functor: functor,
		Sets: []*nativemetadata.MetadataSet{
			nativemetadata.MetadataSet_create(nativemetadata.MetadataSet{Value: stringMeta}),
			nativemetadata.MetadataSet_create(nativemetadata.MetadataSet{Value: internalAtomic("number")}),
		},
		Input: input,
	}) == nil || checkerProgrammer_explore_maps(checkerProgrammer_exploreMapsProps{
		Config:  checkerConfig,
		Context: context,
		Functor: functor,
		Maps: []*nativemetadata.MetadataMap{
			nativemetadata.MetadataMap_create(nativemetadata.MetadataMap{Key: stringMeta, Value: stringMeta}),
			nativemetadata.MetadataMap_create(nativemetadata.MetadataMap{Key: stringMeta, Value: internalAtomic("number")}),
		},
		Input: input,
	}) == nil {
		t.Fatal("checker map or set explorer returned nil")
	}
	converted := featureProgrammer_as_explore(map[string]any{
		"tracable": true,
		"source":   "source",
		"from":     "from",
		"postfix":  ".value",
		"start":    3,
	})
	if converted.Start == nil || *converted.Start != 3 ||
		featureProgrammer_as_explore(&converted).Postfix != ".value" ||
		featureProgrammer_as_explore("unknown").Source != "" {
		t.Fatal("feature explore conversion mismatch")
	}
	if CheckerProgrammer.Write(CheckerProgrammer_WriteProps{
		Context: context,
		Config:  checkerConfig,
		Functor: functor,
	}) == nil {
		t.Fatal("checker programmer write returned nil")
	}
}

func internalAtomic(kind string) *nativemetadata.MetadataSchema {
	meta := nativemetadata.MetadataSchema_initialize()
	meta.Atomics = append(meta.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: kind}))
	return meta
}

func internalArray(name string, value *nativemetadata.MetadataSchema) *nativemetadata.MetadataArray {
	return nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
		Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
			Name:      name,
			Value:     value,
			Nullables: []bool{},
		}),
	})
}

func internalTuple(name string, value *nativemetadata.MetadataSchema) *nativemetadata.MetadataTuple {
	return nativemetadata.MetadataTuple_create(nativemetadata.MetadataTuple{
		Type: nativemetadata.MetadataTupleType_create(nativemetadata.MetadataTupleType{
			Name:      name,
			Elements:  []*nativemetadata.MetadataSchema{value},
			Nullables: []bool{},
		}),
	})
}
