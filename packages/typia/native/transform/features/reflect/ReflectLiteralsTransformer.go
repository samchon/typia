package reflect

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  reflectprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/reflect"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type reflectLiteralsTransformerNamespace struct{}

var ReflectLiteralsTransformer = reflectLiteralsTransformerNamespace{}

func (reflectLiteralsTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.reflect.literals",
      Message: "generic argument is not specified.",
    }))
  }
  node := props.Expression.TypeArguments.Nodes[0]
  typ := props.Context.Checker.GetTypeFromTypeNode(node)
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.reflect.literals",
      Message: "non-specified generic argument.",
    }))
  }
  return reflectprogrammers.ReflectLiteralsProgrammer.Write(reflectprogrammers.ReflectLiteralsProgrammer_IProps{
    Context: props.Context,
    Type:    typ,
  })
}
