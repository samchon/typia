package factories

type statementFactory struct{}

var StatementFactory statementFactory

func (statementFactory) Mut(props VariableStatementProps) Statement {
	typeNode := props.Type
	if typeNode.Kind == "" && props.Initializer.Kind == "" {
		typeNode = TypeFactory.Keyword("any")
	}
	return Node("variableStatement", Field("flags", "let"), Field("name", props.Name), Field("type", typeNode), Field("initializer", props.Initializer))
}

func (statementFactory) Constant(props VariableStatementProps) Statement {
	typeNode := props.Type
	if typeNode.Kind == "" && props.Initializer.Kind == "" {
		typeNode = TypeFactory.Keyword("any")
	}
	return Node("variableStatement", Field("flags", "const"), Field("name", props.Name), Field("type", typeNode), Field("initializer", props.Initializer))
}

func (statementFactory) Entry(props EntryProps) Statement {
	return Node("variableDeclarationList", Field("flags", "const"), Field("binding", []string{props.Key, props.Value}))
}

func (statementFactory) Transpile(script string) Statement {
	return Node("expressionStatement", Field("expression", Identifier(script)))
}

func (statementFactory) Block(expression Expression) Statement {
	return Node("block", Field("statements", []Statement{Node("expressionStatement", Field("expression", expression))}), Field("multiline", true))
}
