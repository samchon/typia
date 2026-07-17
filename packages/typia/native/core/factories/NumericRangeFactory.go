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
    return numericRangeFactory_between("-3.4028235e38", "3.4028235e38", emit...)(input)
  default:
    return nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...).NewKeywordExpression(shimast.KindTrueKeyword)
  }
}

// Bigint narrows a protobuf union candidate whose atomic type is `bigint`.
//
// ProtobufFactory only ever routes "int64" and "uint64" here, so the fall-through
// used to be the int64 case: it returned a bare `true`, and a `bigint &
// Type<"int64">` candidate matched any magnitude at all. Both types are now
// explicit, and the default is reached only by an unknown type.
func (numericRangeFactoryNamespace) Bigint(t string, input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  switch t {
  case "int64":
    return numericRangeFactory_bigint_between("-9223372036854775808", "9223372036854775807", input, emit...)
  case "uint64":
    return numericRangeFactory_bigint_between("0", "18446744073709551615", input, emit...)
  default:
    return nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...).NewKeywordExpression(shimast.KindTrueKeyword)
  }
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

// numericRangeFactory_number_int64 bounds a `number` candidate at 2**63, exclusively.
//
// The true maximum, 2**63 - 1, is not a representable JavaScript number, so the
// inclusive literal this used to emit rounded up to 2**63 and admitted a value
// outside int64. The exclusive power-of-two bound is exact rather than merely
// safer: doubles of this magnitude are 1024 apart, so none exists between
// 2**63 - 1 and 2**63, and the largest double below it is a genuine int64. The
// minimum stays inclusive because -(2**63) is a power of two, hence exact.
func numericRangeFactory_number_int64(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  return numericRangeFactory_logical_and(
    numericRangeFactory_integer(input, emit...),
    numericRangeFactory_between_exclusive_maximum("-9223372036854775808", "9223372036854775808", emit...)(input),
    emit...,
  )
}

// numericRangeFactory_number_uint64 bounds a `number` candidate at 2**64, exclusively.
// See numericRangeFactory_number_int64; 2**64 - 1 is unrepresentable for the same reason.
func numericRangeFactory_number_uint64(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  return numericRangeFactory_logical_and(
    numericRangeFactory_integer(input, emit...),
    numericRangeFactory_between_exclusive_maximum("0", "18446744073709551616", emit...)(input),
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

// numericRangeFactory_between_exclusive_maximum emits `x <= input && input < y`.
//
// Use this instead of numericRangeFactory_between whenever the true maximum is
// not a representable JavaScript number: pass the next power of two as y, so the
// exclusive comparison reads as the rounding boundary it actually is.
func numericRangeFactory_between_exclusive_maximum(x string, y string, emit ...*shimprinter.EmitContext) func(input *shimast.Expression) *shimast.Node {
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
        f.NewToken(shimast.KindLessThanToken),
        f.NewIdentifier(y),
      ),
      emit...,
    )
  }
}

// numericRangeFactory_bigint_literal emits `BigInt("<value>")`.
//
// The argument has to stay a string literal. `BigInt(9223372036854775807)` would
// round its number literal to 2**63 before BigInt ever parsed it -- the same
// rounding that broke the number path -- while the string form parses the digits
// exactly.
func numericRangeFactory_bigint_literal(value string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...)
  return f.NewCallExpression(
    f.NewIdentifier("BigInt"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{f.NewStringLiteral(value, shimast.TokenFlagsNone)}),
    shimast.NodeFlagsNone,
  )
}

// numericRangeFactory_bigint_between emits `BigInt(x) <= input && input <= BigInt(y)`.
//
// Both comparisons are inclusive because a bigint represents the true 64-bit
// bounds exactly, unlike the number path's exclusive approximation.
func numericRangeFactory_bigint_between(x string, y string, input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(numericRangeFactory_factory, emit...)
  return numericRangeFactory_logical_and(
    f.NewBinaryExpression(
      nil,
      numericRangeFactory_bigint_literal(x, emit...),
      nil,
      f.NewToken(shimast.KindLessThanEqualsToken),
      input,
    ),
    f.NewBinaryExpression(
      nil,
      input,
      nil,
      f.NewToken(shimast.KindLessThanEqualsToken),
      numericRangeFactory_bigint_literal(y, emit...),
    ),
    emit...,
  )
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
