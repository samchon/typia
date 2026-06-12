//go:build typia_native_internal
// +build typia_native_internal

package iterate

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimprinter "github.com/microsoft/typescript-go/shim/printer"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestIterateCheckCoverage exercises dynamic and union check helpers.
//
// Dynamic object and array-like union checks are selected only for particular
// metadata shapes. This test constructs those shapes directly and verifies each
// helper returns AST nodes for dynamic keys, dynamic properties, and union arrays.
//
// 1. Check dynamic key branches for nullable, optional, atomic, constant, template, and native keys.
// 2. Check dynamic object property branches with equals, undefined, and superfluous handling.
// 3. Check tuple and array union disambiguation with a custom accessor.
// 4. Verify explore-map and return-wrapping helper behavior.
func TestIterateCheckCoverage(t *testing.T) {
	emit := shimprinter.NewEmitContext()
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	input := factory.NewIdentifier("input")
	keyMeta := nativemetadata.MetadataSchema_initialize()
	keyMeta.Nullable = true
	keyMeta.Required = false
	keyMeta.Optional = true
	keyMeta.Atomics = append(keyMeta.Atomics,
		nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "boolean"}),
		nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "number"}),
		nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "bigint"}),
	)
	keyMeta.Constants = append(keyMeta.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
		Type: "string",
		Values: []*nativemetadata.MetadataConstantValue{
			nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: "fixed"}),
		},
	}))
	keyMeta.Templates = append(keyMeta.Templates, nativemetadata.MetadataTemplate_create(nativemetadata.MetadataTemplate{
		Row: []*nativemetadata.MetadataSchema{iterateLiteral("x"), iterateAtomic("number")},
	}))
	keyMeta.Natives = append(keyMeta.Natives,
		nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Boolean"}),
		nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "BigInt"}),
		nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Number"}),
	)
	if Check_dynamic_key(Check_dynamic_keyProps{
		Context:  nativecontext.ITypiaContext{},
		Metadata: keyMeta,
		Input:    input,
	}) == nil || check_dynamic_key_strict_equal(input, input) == nil ||
		check_dynamic_key_internal(nativecontext.ITypiaContext{}, "helper") == nil {
		t.Fatal("dynamic key helper returned nil")
	}
	if check_dynamic_key_atomist(nativehelpers.ICheckEntry{
		Expression: input,
		Conditions: [][]nativehelpers.ICheckEntry_ICondition{{
			{Expression: input},
		}},
	}) == nil || check_dynamic_key_reduce(nil, shimast.KindBarBarToken) == nil {
		t.Fatal("dynamic key atomist or reducer returned nil")
	}

	regularMeta := iterateAtomic("string")
	optionalMeta := iterateAtomic("string")
	optionalMeta.Required = false
	optionalMeta.Optional = true
	regular := []nativehelpers.IExpressionEntry{
		{Input: input, Key: iterateLiteral("fixed"), Meta: regularMeta, Expression: input},
		{Input: input, Key: iterateLiteral("optional"), Meta: optionalMeta, Expression: input},
	}
	dynamic := []nativehelpers.IExpressionEntry{
		{Input: input, Key: keyMeta, Meta: regularMeta, Expression: input},
	}
	config := Check_object_IConfig{
		Equals:    true,
		Undefined: false,
		Positive:  factory.NewKeywordExpression(shimast.KindTrueKeyword),
		Superfluous: func(value *shimast.Expression, description *shimast.Expression) *shimast.Node {
			return factory.NewKeywordExpression(shimast.KindFalseKeyword)
		},
	}
	if Check_dynamic_properties(Check_dynamic_propertiesProps{
		Config:  config,
		Context: nativecontext.ITypiaContext{},
		Regular: regular,
		Dynamic: dynamic,
		Input:   input,
	}) == nil || !check_dynamic_properties_every_required(regular[:1]) ||
		check_dynamic_properties_internal(nativecontext.ITypiaContext{}, "helper") == nil {
		t.Fatal("dynamic properties helper returned unexpected result")
	}

	stringMeta := iterateAtomic("string")
	array := iterateCheckArray("string[]", stringMeta)
	tuple := iterateCheckTuple("[string]", stringMeta)
	unionConfig := Check_union_array_like_IConfig{
		Checker: func(props Check_union_array_like_CheckerProps) *shimast.Node { return input },
		Decoder: func(props Check_union_array_like_DecoderProps) *shimast.Node { return props.Input },
		Empty:   input,
		Success: factory.NewKeywordExpression(shimast.KindTrueKeyword),
		Failure: func(props Check_union_array_like_FailureProps) *shimast.Node {
			if props.Expected == "" {
				t.Fatal("union failure should include expected names")
			}
			return factory.NewReturnStatement(input)
		},
	}
	accessor := Check_union_array_like_IAccessor{
		Transform: func(origin any) any { return origin },
		Element: func(meta any) any {
			if arr, ok := meta.(*nativemetadata.MetadataArray); ok {
				return arr.Type.Value
			}
			return meta
		},
		Name: func(meta any, elem any) string {
			switch typed := meta.(type) {
			case *nativemetadata.MetadataArray:
				return typed.Type.Name
			case *nativemetadata.MetadataTuple:
				return typed.Type.Name
			default:
				return "unknown"
			}
		},
		Front: func(input *shimast.Expression) *shimast.Node {
			return factory.NewElementAccessExpression(input, nil, nativefactories.ExpressionFactory.Number(0), shimast.NodeFlagsNone)
		},
		Array: func(input *shimast.Expression) *shimast.Node { return input },
		Size: func(input *shimast.Expression) *shimast.Node {
			return nativefactories.IdentifierFactory.Access(emit, input, "length")
		},
	}
	if Check_union_array_like(Check_union_array_likeProps{
		Config:      unionConfig,
		Accessor:    accessor,
		Input:       input,
		Definitions: []any{tuple, array},
		Explore:     map[string]any{"source": "test"},
	}) == nil || check_union_array_like_array_if(func(init string, from *shimast.Expression, statement *shimast.Node) *shimast.Node {
		return statement
	}, input, input, factory.NewKeywordExpression(shimast.KindTrueKeyword)) == nil ||
		check_union_array_like_return_or_statement(input) == nil {
		t.Fatal("union array-like helper returned nil")
	}
	if check_union_array_like_explore(map[string]any{}, true, ".x").(map[string]any)["postfix"] != ".x" ||
		check_union_array_like_explore_trace(map[string]any{}, true).(map[string]any)["tracable"] != true {
		t.Fatal("union array-like explore helper mismatch")
	}
}

func iterateCheckArray(name string, value *nativemetadata.MetadataSchema) *nativemetadata.MetadataArray {
	return nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
		Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
			Name:      name,
			Value:     value,
			Nullables: []bool{},
		}),
	})
}

func iterateCheckTuple(name string, value *nativemetadata.MetadataSchema) *nativemetadata.MetadataTuple {
	return nativemetadata.MetadataTuple_create(nativemetadata.MetadataTuple{
		Type: nativemetadata.MetadataTupleType_create(nativemetadata.MetadataTupleType{
			Name:      name,
			Elements:  []*nativemetadata.MetadataSchema{value},
			Nullables: []bool{},
		}),
	})
}
