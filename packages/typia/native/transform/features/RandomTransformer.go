package features

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type randomTransformerNamespace struct{}

var RandomTransformer = randomTransformerNamespace{}

var randomTransformer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (randomTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomTransformer_factory, props.Context.Emit)
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    nativehelpers.ModuloMethodText(props.Modulo),
      Message: "generic argument is not specified.",
    }))
  }
  node := props.Expression.TypeArguments.Nodes[0]
  typ := props.Context.Checker.GetTypeFromTypeNode(node)
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    nativehelpers.ModuloMethodText(props.Modulo),
      Message: "non-specified generic argument.",
    }))
  }
  name := strings.TrimSpace(shimscanner.GetTextOfNode(node))
  var arguments *shimast.NodeList
  if props.Expression.Arguments != nil && len(props.Expression.Arguments.Nodes) != 0 {
    arguments = f.NewNodeList([]*shimast.Node{props.Expression.Arguments.Nodes[0]})
  }
  return f.NewCallExpression(
    nativeprogrammers.RandomProgrammer.Write(nativeprogrammers.RandomProgrammer_IProps{
      Context: props.Context,
      Modulo:  props.Modulo,
      Type:    typ,
      Name:    &name,
      Init:    nil,
    }),
    nil,
    nil,
    arguments,
    shimast.NodeFlagsNone,
  )
}
