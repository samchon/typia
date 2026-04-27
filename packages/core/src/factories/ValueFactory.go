package factories

type valueFactory struct{}

var ValueFactory valueFactory

func (valueFactory) NULL() Expression {
	return Null()
}

func (valueFactory) UNDEFINED() Expression {
	return Identifier("undefined")
}

func (valueFactory) BOOLEAN(value bool) Expression {
	if value {
		return True()
	}
	return False()
}

func (valueFactory) INPUT(str ...string) Expression {
	name := "input"
	if len(str) != 0 {
		name = str[0]
	}
	return Identifier(name)
}

func (valueFactory) TYPEOF(input Expression) Expression {
	return Node("typeof", Field("expression", input))
}
