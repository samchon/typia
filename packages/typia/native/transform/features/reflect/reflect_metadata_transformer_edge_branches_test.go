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
// 5. Require nil error input and nil source input to retain their empty results.
//
// @evidence contracts/testing.md#behavioral-verification A non-tuple argument and nil tuple child must preserve the original call, while an empty tuple must produce a non-nil replacement. The actual error adapter and source-text fallback must return zero entries and empty text for their original nil inputs.
// @evidence contracts/testing.md#independent-expectations Invalid tuple shapes preserve call identity; an empty tuple is a valid empty metadata request and must leave that fallback. No source node has no text, and no metadata errors have no output entries. These authored expectations are independent of the helper results.
// @evidence contracts/testing.md#distinguishing-cases Non-tuple, nil-child and empty-tuple inputs retain their distinct outcomes; nil error and source helpers restore the deleted entry test's exact boundaries. Real-checker metadata contents are owned by other tests.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test calls the transformer on synthetic nodes with no checker, filesystem fixture or process.
func TestReflectMetadataTransformerEdgeBranches(t *testing.T) {
  if got := reflectTransformer_errors(nil); len(got) != 0 {
    t.Fatalf("nil metadata errors should produce no error entries: got %d", len(got))
  }
  if got := reflectTransformer_sourceTextFallback(nil); got != "" {
    t.Fatalf("nil source node should have empty fallback text: got %q", got)
  }
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
  if got := ReflectMetadataTransformer.Transform(emptyTuple); got == nil || got == emptyTuple.Expression.AsNode() {
    t.Fatal("empty metadata tuple should leave the original-call fallback path")
  }
}
