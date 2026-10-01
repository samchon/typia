//go:build typia_native_internal
// +build typia_native_internal

package internal

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

// Te tFeatureProgrammerVi itGuard WrapBlockBodie U edA Expre ion  verifie  vi
// it guard  never leave a block in call-argument po ition.
//
// The rebuild and  erialize vi it guard  wrap a block body that originate  in 
// tatement po ition. A block left a
//  a call argument would be invalid JavaScript,  o the guard  mu
// t wrap block bodie  u ed a  expre ion .
//
// 1. Build an empty-object rebuild guard and a circular-
//    erialize guard around a block body.
// 2. Require each guard to return a node.
// 3. Walk each node and require that no call expre ion ha  a block argument.
//
// @evidence contracts/testing.md#behavioral-verification FeatureProgrammer.VisitGuardRebuildWith and VisitGuardSerialize run on a block body and the resulting tree is walked; a block left as a call argument fails.
// @evidence contracts/testing.md#independent-expectations The rule that a block cannot be an expression argument is syntactic, and the walker that searches for it is written in the test and independent of the guards.
// @evidence contracts/testing.md#distinguishing-cases Two guard kinds share the same block input; guards given non-block bodies are not asserted.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test builds AST nodes in memory with no checker, filesystem fixture or process.
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
