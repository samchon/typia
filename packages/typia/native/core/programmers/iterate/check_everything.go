package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

func Check_everything(array *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(check_everything_factory, emit...)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(nil, array, "every"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("flag", nativefactories.TypeFactory.Keyword("boolean"), nil),
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

var check_everything_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
