package transform

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type nodeTransformerNamespace struct{}

var NodeTransformer = nodeTransformerNamespace{}

// NodeTransformer_TransformProps is the context and the node to transform.
//
// @evidence contracts/common.md#principled-implementation A node transform needs the context and the node, and only a call expression with a parent is rewritten.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states both fields.
type NodeTransformer_TransformProps struct {
  Context nativecontext.ITypiaContext
  Node    *shimast.Node
}

func (nodeTransformerNamespace) Transform(props NodeTransformer_TransformProps) *shimast.Node {
  if props.Node != nil && props.Node.Kind == shimast.KindCallExpression && props.Node.Parent != nil {
    return CallExpressionTransformer.Transform(CallExpressionTransformer_TransformProps{
      Context:    props.Context,
      Expression: props.Node.AsCallExpression(),
    })
  }
  return props.Node
}
