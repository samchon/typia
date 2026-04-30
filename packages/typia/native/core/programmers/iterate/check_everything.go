package iterate

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

func Check_everything(array *shimast.Expression) *shimast.Node {
	return check_everything_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(array, "every"),
		nil,
		nil,
		check_everything_factory.NewNodeList([]*shimast.Node{
			check_everything_factory.NewArrowFunction(
				nil,
				nil,
				check_everything_factory.NewNodeList([]*shimast.Node{
					nativefactories.IdentifierFactory.Parameter("flag", nativefactories.TypeFactory.Keyword("boolean"), nil),
				}),
				nil,
				nil,
				check_everything_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				check_everything_factory.NewIdentifier("flag"),
			),
		}),
		shimast.NodeFlagsNone,
	)
}

var check_everything_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
