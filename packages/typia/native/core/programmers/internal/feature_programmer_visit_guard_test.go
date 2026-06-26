//go:build typia_native_internal
// +build typia_native_internal

package internal

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

func TestFeatureProgrammerVisitGuardsWrapBlockBodiesUsedAsExpressions(t *testing.T) {
	emit := shimprinter.NewEmitContext()
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	block := factory.NewBlock(
		factory.NewNodeList([]*shimast.Node{
			factory.NewReturnStatement(factory.NewObjectLiteralExpression(factory.NewNodeList(nil), false)),
		}),
		true,
	)

	for _, scenario := range []struct {
		name string
		node *shimast.Node
	}{
		{
			name: "rebuild",
			node: FeatureProgrammer.VisitGuardRebuildWith(
				"o0",
				factory.NewObjectLiteralExpression(factory.NewNodeList(nil), false),
				block,
				emit,
			),
		},
		{
			name: "serialize",
			node: FeatureProgrammer.VisitGuardSerialize(
				"o1",
				factory.NewIdentifier("throwCircular()"),
				block,
				emit,
			),
		},
	} {
		if scenario.node == nil {
			t.Fatalf("%s guard returned nil", scenario.name)
		}
		if featureProgrammer_has_block_call_argument(scenario.node) {
			t.Fatalf("%s guard left a block in call-argument position", scenario.name)
		}
	}
}

func featureProgrammer_has_block_call_argument(node *shimast.Node) bool {
	if node == nil {
		return false
	}
	if node.Kind == shimast.KindCallExpression {
		args := node.AsCallExpression().Arguments
		if args != nil {
			for _, arg := range args.Nodes {
				if arg != nil && arg.Kind == shimast.KindBlock {
					return true
				}
			}
		}
	}
	return node.ForEachChild(featureProgrammer_has_block_call_argument)
}
