package helpers

import "fmt"

type FunctionProgrammer struct {
	Locals    map[string]ConciseBody
	Unions    map[string][]Statement
	Variables map[string]Expression
	Sequence  int
}

func NewFunctionProgrammer() *FunctionProgrammer {
	return &FunctionProgrammer{
		Locals:    map[string]ConciseBody{},
		Unions:    map[string][]Statement{},
		Variables: map[string]Expression{},
	}
}

func (p *FunctionProgrammer) init() {
	if p.Locals == nil {
		p.Locals = map[string]ConciseBody{}
	}
	if p.Unions == nil {
		p.Unions = map[string][]Statement{}
	}
	if p.Variables == nil {
		p.Variables = map[string]Expression{}
	}
}

func (p *FunctionProgrammer) UseLocal(name string) string {
	return "_" + name
}

func (p *FunctionProgrammer) HasLocal(name string) bool {
	p.init()
	_, ok := p.Locals[name]
	return ok
}

func (p *FunctionProgrammer) Declare(name string, body ConciseBody) {
	p.init()
	if _, ok := p.Locals[name]; !ok {
		p.Locals[name] = body
	}
}

func (p *FunctionProgrammer) DeclareUnions() []Statement {
	p.init()
	out := make([]Statement, 0, len(p.Unions))
	for name, body := range p.Unions {
		out = append(out, StatementOf("const "+name+" = "+string(ArrayLiteralStatements(body))+";"))
	}
	return out
}

func (p *FunctionProgrammer) Increment() int {
	p.Sequence++
	return p.Sequence
}

func (p *FunctionProgrammer) EmplaceUnion(prefix string, body []Statement) string {
	p.init()
	name := fmt.Sprintf("_%s_union_%d", prefix, p.Increment())
	p.Unions[name] = body
	return name
}

func (p *FunctionProgrammer) EmplaceVariable(prefix string, value Expression) string {
	p.init()
	name := fmt.Sprintf("_%s_var_%d", prefix, p.Increment())
	p.Variables[name] = value
	return name
}

func ArrayLiteralStatements(statements []Statement) Expression {
	expressions := make([]Expression, len(statements))
	for i, statement := range statements {
		expressions[i] = Expr(string(statement))
	}
	return ArrayLiteral(expressions)
}
