package iterate

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

type Check_nativeProps struct {
  Name  string
  Input *shimast.Expression
  Emit  *shimprinter.EmitContext
}

func Check_native(props Check_nativeProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_native_factory, props.Emit)
  instanceOf := nativefactories.ExpressionFactory.IsInstanceOf(props.Name, props.Input)
  if check_native_atomic_like[props.Name] {
    return f.NewBinaryExpression(
      nil,
      f.NewBinaryExpression(
        nil,
        f.NewStringLiteral(strings.ToLower(props.Name), shimast.TokenFlagsNone),
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

var check_native_atomic_like = map[string]bool{
  "Boolean": true,
  "Number":  true,
  "String":  true,
}

var check_native_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
