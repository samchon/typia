package compare

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativecompareprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/compare"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type compareLessTransformerNamespace struct{}

var CompareLessTransformer = compareLessTransformerNamespace{}

func (compareLessTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return compareLessTransformer_scalar(props, "compare.less")
}

func compareLessTransformer_scalar(props nativeinternal.ITransformProps, method string) *shimast.Node {
  f := nativecontext.EmitFactoryOf(shimast.NewNodeFactory(shimast.NodeFactoryHooks{}), props.Context.Emit)
  if props.Expression == nil || props.Expression.Arguments == nil || len(props.Expression.Arguments.Nodes) < 2 {
    panic(nativeinternal.NewTransformerError(nativeinternal.TransformerError_IProps{
      Code:    "typia." + method,
      Message: "two input values are required.",
    }))
  }

  typ := props.Context.Checker.GetTypeAtLocation(props.Expression.Arguments.Nodes[0])
  if props.Expression.TypeArguments != nil && len(props.Expression.TypeArguments.Nodes) != 0 {
    typ = props.Context.Checker.GetTypeFromTypeNode(props.Expression.TypeArguments.Nodes[0])
  }
  if typ != nil && typ.IsTypeParameter() {
    panic(nativeinternal.NewTransformerError(nativeinternal.TransformerError_IProps{
      Code:    "typia." + method,
      Message: "non-specified generic argument.",
    }))
  }

  return f.NewCallExpression(
    nativecompareprogrammers.CompareLessProgrammer.Write(nativecompareprogrammers.CompareLessProgrammer_IProps{
      Context: props.Context,
      Modulo:  props.Modulo,
      Type:    typ,
    }),
    nil,
    nil,
    props.Expression.Arguments,
    shimast.NodeFlagsNone,
  )
}

func compareLessTransformer_factory(props nativeinternal.ITransformProps, method string) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativeinternal.NewTransformerError(nativeinternal.TransformerError_IProps{
      Code:    "typia." + method,
      Message: "generic argument is not specified.",
    }))
  }
  node := props.Expression.TypeArguments.Nodes[0]
  typ := props.Context.Checker.GetTypeFromTypeNode(node)
  if typ != nil && typ.IsTypeParameter() {
    panic(nativeinternal.NewTransformerError(nativeinternal.TransformerError_IProps{
      Code:    "typia." + method,
      Message: "non-specified generic argument.",
    }))
  }
  return nativecompareprogrammers.CompareLessProgrammer.Write(nativecompareprogrammers.CompareLessProgrammer_IProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Type:    typ,
  })
}
