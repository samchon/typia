package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemiscprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/misc"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscEqualTransformerNamespace struct{}

var MiscEqualTransformer = miscEqualTransformerNamespace{}

func (miscEqualTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return miscEqualTransformer_scalar(props, "misc.equal", false)
}

func miscEqualTransformer_scalar(props nativeinternal.ITransformProps, method string, cover bool) *shimast.Node {
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
    nativemiscprogrammers.MiscEqualProgrammer.Write(nativemiscprogrammers.MiscEqualProgrammer_IProps{
      Context: props.Context,
      Modulo:  props.Modulo,
      Type:    typ,
      Config:  nativemiscprogrammers.MiscEqualProgrammer_IConfig{Cover: cover},
    }),
    nil,
    nil,
    props.Expression.Arguments,
    shimast.NodeFlagsNone,
  )
}

func miscEqualTransformer_factory(props nativeinternal.ITransformProps, method string, cover bool) *shimast.Node {
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
  return nativemiscprogrammers.MiscEqualProgrammer.Write(nativemiscprogrammers.MiscEqualProgrammer_IProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Type:    typ,
    Config:  nativemiscprogrammers.MiscEqualProgrammer_IConfig{Cover: cover},
  })
}
