package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/misc"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscLiteralsTransformerNamespace struct{}

var MiscLiteralsTransformer = miscLiteralsTransformerNamespace{}

func (miscLiteralsTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.misc.literals",
      Message: "generic argument is not specified.",
    }))
  }
  node := props.Expression.TypeArguments.Nodes[0]
  typ := props.Context.Checker.GetTypeFromTypeNode(node)
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.misc.literals",
      Message: "non-specified generic argument.",
    }))
  }
  return nativeprogrammers.MiscLiteralsProgrammer.Write(nativeprogrammers.MiscLiteralsProgrammer_IProps{
    Context: props.Context,
    Type:    typ,
  })
}
