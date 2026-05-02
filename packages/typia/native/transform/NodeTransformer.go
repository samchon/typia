package transform

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type nodeTransformerNamespace struct{}

var NodeTransformer = nodeTransformerNamespace{}

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
