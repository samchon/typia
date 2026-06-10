package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_nativeProps struct {
  Name  string
  Input *shimast.Expression
  Emit  *shimprinter.EmitContext
}

func Check_native(props Check_nativeProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_native_factory, props.Emit)
  instanceOf := nativefactories.ExpressionFactory.IsInstanceOf(props.Name, props.Input)
  if atomic, ok := nativemetadata.MetadataSchema_atomicLikeNative(props.Name); ok {
    return f.NewBinaryExpression(
      nil,
      f.NewBinaryExpression(
        nil,
        f.NewStringLiteral(atomic, shimast.TokenFlagsNone),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        f.NewTypeOfExpression(props.Input),
      ),
      nil,
      f.NewToken(shimast.KindBarBarToken),
      instanceOf,
    )
  }
  return instanceOf
}

var check_native_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
