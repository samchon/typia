//go:build typia_native_internal
// +build typia_native_internal

package reflect

import (
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

// TestReflectMetadataTransformerEdgeBranches covers metadata tuple guards.
//
// The project fixtures exercise successful metadata calls with real checker
// types, while the transformer still has standalone guard branches for
// non-tuple type arguments, nil tuple children, and empty tuple metadata. These
// branches can be tested directly with synthetic AST calls.
//
// 1. Build a reflect metadata call whose type argument is not a tuple.
// 2. Assert the transformer returns the original call expression.
// 3. Build a tuple with a nil child and assert the same fallback behavior.
// 4. Build an empty tuple and assert it leaves the fallback path.
func TestReflectMetadataTransformerEdgeBranches(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	props := func(top *shimast.Node) nativetransform.ITransformProps {
		call := factory.NewCallExpression(
			factory.NewIdentifier("metadata"),
			nil,
			factory.NewNodeList([]*shimast.Node{top}),
			nil,
			shimast.NodeFlagsNone,
		)
		return nativetransform.ITransformProps{
			Expression: call.AsCallExpression(),
		}
	}

	nonTuple := props(nativefactories.TypeFactory.Keyword("string"))
	if got := ReflectMetadataTransformer.Transform(nonTuple); got != nonTuple.Expression.AsNode() {
		t.Fatal("non-tuple metadata type argument should return the original call")
	}

	nilChildTuple := factory.NewTupleTypeNode(factory.NewNodeList([]*shimast.Node{nil}))
	nilChild := props(nilChildTuple)
	if got := ReflectMetadataTransformer.Transform(nilChild); got != nilChild.Expression.AsNode() {
		t.Fatal("tuple with nil metadata child should return the original call")
	}

	emptyTuple := props(factory.NewTupleTypeNode(factory.NewNodeList([]*shimast.Node{})))
	if got := ReflectMetadataTransformer.Transform(emptyTuple); got == emptyTuple.Expression.AsNode() {
		t.Fatal("empty metadata tuple should leave the original-call fallback path")
	}
}
