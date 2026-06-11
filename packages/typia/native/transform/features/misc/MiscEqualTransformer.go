package misc

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
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
  node := props.Expression.Arguments.Nodes[0]
  generic := false
  if props.Expression.TypeArguments != nil && len(props.Expression.TypeArguments.Nodes) != 0 {
    node = props.Expression.TypeArguments.Nodes[0]
    typ = props.Context.Checker.GetTypeFromTypeNode(node)
    generic = true
  }
  if typ != nil && typ.IsTypeParameter() {
    panic(nativeinternal.NewTransformerError(nativeinternal.TransformerError_IProps{
      Code:    "typia." + method,
      Message: "non-specified generic argument.",
    }))
  }

  name := miscEqualTransformer_typeName(props.Context.Checker, typ, node, generic)
  return f.NewCallExpression(
    nativemiscprogrammers.MiscEqualProgrammer.Write(nativemiscprogrammers.MiscEqualProgrammer_IProps{
      Context: props.Context,
      Modulo:  props.Modulo,
      Type:    typ,
      Name:    &name,
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
  name := miscEqualTransformer_nodeText(node)
  return nativemiscprogrammers.MiscEqualProgrammer.Write(nativemiscprogrammers.MiscEqualProgrammer_IProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Type:    typ,
    Name:    &name,
    Config:  nativemiscprogrammers.MiscEqualProgrammer_IConfig{Cover: cover},
  })
}

func miscEqualTransformer_typeName(checker *shimchecker.Checker, typ *shimchecker.Type, node *shimast.Node, generic bool) string {
  if generic {
    return miscEqualTransformer_nodeText(node)
  }
  if checker == nil || typ == nil {
    return ""
  }
  return checker.TypeToString(typ)
}

func miscEqualTransformer_nodeText(node *shimast.Node) string {
  if node == nil {
    return ""
  }
  return strings.TrimSpace(shimscanner.GetTextOfNode(node))
}
