package factories

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type numericRangeFactoryNamespace struct{}

var NumericRangeFactory = numericRangeFactoryNamespace{}

var numericRangeFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (numericRangeFactoryNamespace) Number(t string, input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  switch t {
  case "int32":
    return numericRangeFactory_number_int32(input, emit...)
  case "uint32":
    return numericRangeFactory_number_uint32(input, emit...)
  case "int64":
    return numericRangeFactory_number_int64(input, emit...)
  case "uint64":
    return numericRangeFactory_number_uint64(input, emit...)
  case "float":
    return numericRangeFactory_between("-1.175494351e38", "3.4028235e38", emit...)(input)
  default:
    return nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...).NewKeywordExpression(shimast.KindTrueKeyword)
  }
}

func (numericRangeFactoryNamespace) Bigint(t string, input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...)
  if t == "uint64" {
    return f.NewBinaryExpression(
      nil,
      f.NewCallExpression(
        f.NewIdentifier("BigInt"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{ExpressionFactory.Number(0, emit...)}),
        shimast.NodeFlagsNone,
      ),
      nil,
      f.NewToken(shimast.KindLessThanEqualsToken),
      input,
    )
  }
  return f.NewKeywordExpression(shimast.KindTrueKeyword)
}

func numericRangeFactory_number_int32(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  return numericRangeFactory_logical_and(
    numericRangeFactory_integer(input, emit...),
    numericRangeFactory_between("-2147483648", "2147483647", emit...)(input),
    emit...,
  )
}

func numericRangeFactory_number_uint32(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  return numericRangeFactory_logical_and(
    numericRangeFactory_integer(input, emit...),
    numericRangeFactory_between("0", "4294967295", emit...)(input),
    emit...,
  )
}

func numericRangeFactory_number_int64(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  return numericRangeFactory_logical_and(
    numericRangeFactory_integer(input, emit...),
    numericRangeFactory_between("-9223372036854775808", "9223372036854775807", emit...)(input),
    emit...,
  )
}

func numericRangeFactory_number_uint64(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  return numericRangeFactory_logical_and(
    numericRangeFactory_integer(input, emit...),
    numericRangeFactory_between("0", "18446744073709551615", emit...)(input),
    emit...,
  )
}

func numericRangeFactory_integer(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...)
  return f.NewBinaryExpression(
    nil,
    f.NewCallExpression(
      f.NewIdentifier("Math.floor"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{input}),
      shimast.NodeFlagsNone,
    ),
    nil,
    f.NewToken(shimast.KindEqualsEqualsEqualsToken),
    input,
  )
}

func numericRangeFactory_between(x string, y string, emit ...*shimprinter.EmitContext) func(input *shimast.Expression) *shimast.Node {
  f := nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...)
  return func(input *shimast.Expression) *shimast.Node {
    return numericRangeFactory_logical_and(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier(x),
        nil,
        f.NewToken(shimast.KindLessThanEqualsToken),
        input,
      ),
      f.NewBinaryExpression(
        nil,
        input,
        nil,
        f.NewToken(shimast.KindLessThanEqualsToken),
        f.NewIdentifier(y),
      ),
      emit...,
    )
  }
}

func numericRangeFactory_logical_and(x *shimast.Expression, y *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  return nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...).NewBinaryExpression(
    nil,
    x,
    nil,
    nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...).NewToken(shimast.KindAmpersandAmpersandToken),
    y,
  )
}
