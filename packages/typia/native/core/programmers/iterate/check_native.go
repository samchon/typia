package iterate

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

type Check_nativeProps struct {
  Name  string
  Input *shimast.Expression
}

func Check_native(props Check_nativeProps) *shimast.Node {
  instanceOf := nativefactories.ExpressionFactory.IsInstanceOf(props.Name, props.Input)
  if check_native_atomic_like[props.Name] {
    return check_native_factory.NewBinaryExpression(
      nil,
      check_native_factory.NewBinaryExpression(
        nil,
        check_native_factory.NewStringLiteral(strings.ToLower(props.Name), shimast.TokenFlagsNone),
        nil,
        check_native_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
        check_native_factory.NewTypeOfExpression(props.Input),
      ),
      nil,
      check_native_factory.NewToken(shimast.KindBarBarToken),
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
