package factories

import shimast "github.com/microsoft/typescript-go/shim/ast"

type valueFactoryNamespace struct{}

var ValueFactory = valueFactoryNamespace{}

var valueFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (valueFactoryNamespace) NULL() *shimast.Node {
	return valueFactory_factory.NewKeywordExpression(shimast.KindNullKeyword)
}

func (valueFactoryNamespace) UNDEFINED() *shimast.Node {
	return valueFactory_factory.NewIdentifier("undefined")
}

func (valueFactoryNamespace) BOOLEAN(value bool) *shimast.Node {
	if value {
		return valueFactory_factory.NewKeywordExpression(shimast.KindTrueKeyword)
	}
	return valueFactory_factory.NewKeywordExpression(shimast.KindFalseKeyword)
}

func (valueFactoryNamespace) INPUT(str ...string) *shimast.Node {
	name := "input"
	if len(str) != 0 {
		name = str[0]
	}
	return valueFactory_factory.NewIdentifier(name)
}

func (valueFactoryNamespace) TYPEOF(input *shimast.Expression) *shimast.Node {
	return valueFactory_factory.NewTypeOfExpression(input)
}
