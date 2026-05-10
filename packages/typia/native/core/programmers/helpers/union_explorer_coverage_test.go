package helpers

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestUnionExplorerCoverage exercises array-like union helpers.
//
// Array-like union exploration depends on tuple, array, set, and map metadata
// shapes that are cumbersome to force through an end-to-end transform. This test
// assembles those shapes directly and verifies the explorer returns AST nodes.
//
// 1. Build tuple and array metadata definitions with a shared string element.
// 2. Exercise tuple-only, array-only, and mixed array-or-tuple union paths.
// 3. Exercise direct array disambiguation, explore copying, and return wrapping.
// 4. Verify protobuf utility first-row extraction and numeric conversions.
func TestUnionExplorerCoverage(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	input := factory.NewIdentifier("input")
	parameter := nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil)
	stringMeta := helperAtomic("string")
	tuple := nativemetadata.MetadataTuple_create(nativemetadata.MetadataTuple{
		Type: nativemetadata.MetadataTupleType_create(nativemetadata.MetadataTupleType{
			Name:      "[string]",
			Elements:  []*nativemetadata.MetadataSchema{stringMeta},
			Nullables: []bool{},
		}),
	})
	array := nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
		Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
			Name:      "string[]",
			Value:     stringMeta,
			Nullables: []bool{},
		}),
	})
	config := UnionExplorer_ArrayLikeConfig{
		Checker: func(props UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
			if props.Input == nil || props.Definition == nil {
				t.Fatal("union checker received incomplete props")
			}
			return factory.NewKeywordExpression(shimast.KindTrueKeyword)
		},
		Decoder: func(props UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
			if props.Input == nil || props.Definition == nil {
				t.Fatal("union decoder received incomplete props")
			}
			return factory.NewIdentifier("decoded")
		},
		Empty:   factory.NewIdentifier("empty"),
		Success: factory.NewKeywordExpression(shimast.KindTrueKeyword),
		Failure: func(props UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
			if props.Expected == "" {
				t.Fatal("union failure should include expected name")
			}
			return factory.NewIdentifier("failed")
		},
	}
	if UnionExplorer.Tuple(UnionExplorer_TupleProps{
		Config:     config,
		Parameters: []*shimast.Node{parameter},
		Input:      input,
		Tuples:     []*nativemetadata.MetadataTuple{tuple},
	}) == nil {
		t.Fatal("tuple union explorer returned nil")
	}
	if UnionExplorer.Array(UnionExplorer_ArrayProps{
		Config:     config,
		Parameters: []*shimast.Node{parameter},
		Input:      input,
		Arrays:     []*nativemetadata.MetadataArray{array},
	}) == nil {
		t.Fatal("array union explorer returned nil")
	}
	if UnionExplorer.Array_or_tuple(UnionExplorer_ArrayOrTupleProps{
		Config:      config,
		Parameters:  []*shimast.Node{parameter},
		Input:       input,
		Definitions: []any{tuple, array},
	}) == nil {
		t.Fatal("mixed array-or-tuple explorer returned nil")
	}

	iterated := false
	if unionExplorer_array_if(func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node {
		iterated = init == "pred" && from != nil && ifStatement != nil
		return ifStatement
	}, input, input, factory.NewKeywordExpression(shimast.KindTrueKeyword)) == nil || !iterated {
		t.Fatal("array disambiguation helper did not invoke iterator")
	}
	if unionExplorer_return_or_statement(input) == nil ||
		unionExplorer_return_or_statement(factory.NewReturnStatement(input)).Kind != shimast.KindReturnStatement {
		t.Fatal("return-or-statement helper returned unexpected node")
	}
	explore := UnionExplorer_IExplore{Source: "source"}
	if unionExplorer_with_tracable(explore, true).(UnionExplorer_IExplore).Tracable != true ||
		unionExplorer_with_tracable(&explore, true).(UnionExplorer_IExplore).Source != "source" ||
		unionExplorer_with_tracable(map[string]any{"source": "source"}, true).(map[string]any)["tracable"] != true ||
		unionExplorer_with_tracable("plain", true).(string) != "plain" {
		t.Fatal("tracable explore helper mismatch")
	}
	if unionExplorer_with_postfix(explore, true, ".x").(UnionExplorer_IExplore).Postfix != ".x" ||
		unionExplorer_with_postfix(&explore, true, ".x").(UnionExplorer_IExplore).Postfix != ".x" ||
		unionExplorer_with_postfix(map[string]any{"source": "source"}, true, ".x").(map[string]any)["postfix"] != ".x" ||
		unionExplorer_with_postfix("plain", true, ".x").(string) != "plain" {
		t.Fatal("postfix explore helper mismatch")
	}

	tag := nativemetadata.IMetadataTypeTag{Kind: "sequence"}
	if len(protobufUtil_firstTagRow(nil)) != 0 ||
		len(protobufUtil_firstTagRow([][]nativemetadata.IMetadataTypeTag{{tag}})) != 1 {
		t.Fatal("protobuf first tag row extraction mismatch")
	}
	for _, value := range []any{int(1), int32(2), int64(3), uint(4), uint32(5), uint64(6), float32(7), float64(8), "9"} {
		if parsed, ok := protobufUtil_toInt(value); !ok || parsed == 0 {
			t.Fatalf("protobuf int conversion failed for %T", value)
		}
		if protobufUtil_toFloat(value) == 0 {
			t.Fatalf("protobuf float conversion failed for %T", value)
		}
	}
	if _, ok := protobufUtil_toInt("not-number"); ok {
		t.Fatal("invalid numeric string should not parse as protobuf int")
	}
	if parsed := protobufUtil_toFloat(struct{ Value int }{Value: 10}); parsed != 0 {
		t.Fatalf("fallback float conversion should return zero for struct text, got %f", parsed)
	}
	if ProtobufUtil.GetSequence([]nativemetadata.IMetadataTypeTag{
		{Kind: "format", Schema: map[string]any{"x-protobuf-sequence": 1}},
		{Kind: "sequence", Schema: "invalid"},
		{Kind: "sequence", Schema: map[string]any{"x-protobuf-sequence": "11"}},
	}) == nil {
		t.Fatal("protobuf sequence should parse string-backed sequence value")
	}
}
