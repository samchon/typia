package features

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type createRandomTransformerNamespace struct{}

var CreateRandomTransformer = createRandomTransformerNamespace{}

func (createRandomTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.createRandom",
      Message: "generic argument is not specified.",
    }))
  }
  node := props.Expression.TypeArguments.Nodes[0]
  typ := props.Context.Checker.GetTypeFromTypeNode(node)
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.createRandom",
      Message: "non-specified generic argument.",
    }))
  }
  name := strings.TrimSpace(shimscanner.GetTextOfNode(node))
  context := props.Context
  disabled := false
  context.Options.Functional = &disabled
  context.Options.Numeric = &disabled
  var init *shimast.Node
  if props.Expression.Arguments != nil && len(props.Expression.Arguments.Nodes) != 0 {
    init = props.Expression.Arguments.Nodes[0]
  }
  return nativeprogrammers.RandomProgrammer.Write(nativeprogrammers.RandomProgrammer_IProps{
    Context: context,
    Modulo:  props.Modulo,
    Type:    typ,
    Name:    &name,
    Init:    init,
  })
}
