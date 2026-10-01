package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Check_nativeProps is the argument record of Check_native, which tests a
// built-in class.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of Check_native, which tests a built-in class; its 3 fields (Name, Input, Emit) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 3-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type Check_nativeProps struct {
  Name  string
  Input *shimast.Expression
  Emit  *shimprinter.EmitContext
}

// Check_native builds the test of a built-in class: `instanceof Name`, preceded
// by a `typeof` test for the natives that also have an atomic form.
//
// @evidence contracts/common.md#principled-implementation It builds the test of a built-in class: `instanceof Name`, preceded by a `typeof` test for the natives that also have an atomic form.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
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
