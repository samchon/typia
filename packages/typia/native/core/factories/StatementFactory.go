package factories

import shimast "github.com/microsoft/typescript-go/shim/ast"

type statementFactoryNamespace struct{}

var StatementFactory = statementFactoryNamespace{}

type StatementFactory_MutProps struct {
	Name        string
	Type        *shimast.TypeNode
	Initializer *shimast.Expression
}

type StatementFactory_ConstantProps struct {
	Name  string
	Type  *shimast.TypeNode
	Value *shimast.Expression
}

type StatementFactory_EntryProps struct {
	Key   string
	Value string
}

var statementFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (statementFactoryNamespace) Mut(props StatementFactory_MutProps) *shimast.Node {
	typeNode := props.Type
	if typeNode == nil && props.Initializer == nil {
		typeNode = TypeFactory.Keyword("any")
	}
	declaration := statementFactory_factory.NewVariableDeclaration(
		statementFactory_factory.NewIdentifier(props.Name),
		nil,
		typeNode,
		props.Initializer,
	)
	return statementFactory_factory.NewVariableStatement(
		nil,
		statementFactory_factory.NewVariableDeclarationList(
			statementFactory_factory.NewNodeList([]*shimast.Node{declaration}),
			shimast.NodeFlagsLet,
		),
	)
}

func (statementFactoryNamespace) Constant(props StatementFactory_ConstantProps) *shimast.Node {
	typeNode := props.Type
	if typeNode == nil && props.Value == nil {
		typeNode = TypeFactory.Keyword("any")
	}
	declaration := statementFactory_factory.NewVariableDeclaration(
		statementFactory_factory.NewIdentifier(props.Name),
		nil,
		typeNode,
		props.Value,
	)
	return statementFactory_factory.NewVariableStatement(
		nil,
		statementFactory_factory.NewVariableDeclarationList(
			statementFactory_factory.NewNodeList([]*shimast.Node{declaration}),
			shimast.NodeFlagsConst,
		),
	)
}

func (statementFactoryNamespace) Entry(props StatementFactory_EntryProps) *shimast.Node {
	key := statementFactory_factory.NewBindingElement(
		nil,
		nil,
		statementFactory_factory.NewIdentifier(props.Key),
		nil,
	)
	value := statementFactory_factory.NewBindingElement(
		nil,
		nil,
		statementFactory_factory.NewIdentifier(props.Value),
		nil,
	)
	pattern := statementFactory_factory.NewBindingPattern(
		shimast.KindArrayBindingPattern,
		statementFactory_factory.NewNodeList([]*shimast.Node{key, value}),
	)
	declaration := statementFactory_factory.NewVariableDeclaration(pattern, nil, nil, nil)
	return statementFactory_factory.NewVariableDeclarationList(
		statementFactory_factory.NewNodeList([]*shimast.Node{declaration}),
		shimast.NodeFlagsConst,
	)
}

func (statementFactoryNamespace) Transpile(script string) *shimast.Node {
	return statementFactory_factory.NewExpressionStatement(
		statementFactory_factory.NewIdentifier(script),
	)
}

func (statementFactoryNamespace) Block(expression *shimast.Expression) *shimast.Node {
	return statementFactory_factory.NewBlock(
		statementFactory_factory.NewNodeList([]*shimast.Node{
			statementFactory_factory.NewExpressionStatement(expression),
		}),
		true,
	)
}
