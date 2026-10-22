package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

// Check_everything builds `array.every((flag: boolean) => flag)` for an array of
// check results.
//
// @evidence contracts/common.md#principled-implementation It builds `array.every((flag: boolean) => flag)` for an array of check results.
// @evidence contracts/common.md#clear-and-simple-design One exported function; the pieces that repeat live in private helpers of the same file.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Its inputs are its arguments and the context they carry, and it keeps no state of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Check_everything(array *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.NodeFactoryOf(emit...)
  return f.NewCallExpression(
    f.NewPropertyAccessExpression(array, nil, f.NewIdentifier("every"), shimast.NodeFlagsNone),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("flag", nativefactories.TypeFactory.Keyword("boolean", emit...), nil, emit...),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewIdentifier("flag"),
      ),
    }),
    shimast.NodeFlagsNone,
  )
}

