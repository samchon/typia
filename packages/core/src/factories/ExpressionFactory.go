package factories

import (
	"errors"
	"math"
	"strings"
)

type expressionFactory struct{}

var ExpressionFactory expressionFactory

func (expressionFactory) Number(value float64) Expression {
	if value < 0 {
		return Node("prefixUnary", Field("operator", "-"), Field("operand", Node("number", Field("value", math.Abs(value)))))
	}
	return Node("number", Field("value", value))
}

func (expressionFactory) Bigint(value any) Expression {
	return Node("call", Field("expression", Identifier("BigInt")), Field("arguments", []Expression{Identifier(toString(value))}))
}

func (expressionFactory) IsRequired(input Expression) Expression {
	return Node("strictInequality", Field("left", Identifier("undefined")), Field("right", input))
}

func (expressionFactory) IsArray(input Expression) Expression {
	return Node("call", Field("expression", Identifier("Array.isArray")), Field("arguments", []Expression{input}))
}

func (expressionFactory) IsObject(props IsObjectProps) Expression {
	conditions := []Expression{Node("strictEquality", Field("left", StringLiteral("object")), Field("right", Node("typeof", Field("expression", props.Input))))}
	if props.CheckNull {
		conditions = append(conditions, Node("strictInequality", Field("left", Null()), Field("right", props.Input)))
	}
	if props.CheckArray {
		conditions = append(conditions, Node("strictEquality", Field("left", False()), Field("right", ExpressionFactory.IsArray(props.Input))))
	}
	return reduceExpression("logicalAnd", conditions)
}

func (expressionFactory) IsInstanceOf(typeName string, input Expression) Expression {
	return Node("instanceOf", Field("input", input), Field("type", Identifier(typeName)))
}

func (expressionFactory) Coalesce(x Expression, y Expression) Expression {
	return Node("coalesce", Field("left", x), Field("right", y))
}

func (expressionFactory) Currying(props CurryingProps) Expression {
	if len(props.Arguments) == 0 {
		return Node("call", Field("expression", props.Function))
	}
	prev := Node("call", Field("expression", props.Function), Field("arguments", []Expression{props.Arguments[0]}))
	for _, param := range props.Arguments[1:] {
		prev = Node("call", Field("expression", prev), Field("arguments", []Expression{param}))
	}
	return prev
}

func (expressionFactory) SelfCall(body Expression, typeNode ...TypeNode) Expression {
	if body.Kind == "call" {
		return body
	}
	fields := []NodeField{Field("body", body)}
	if len(typeNode) != 0 {
		fields = append(fields, Field("type", typeNode[0]))
	}
	return Node("call", Field("expression", Node("parenthesized", Field("expression", Node("arrowFunction", fields...)))))
}

func (expressionFactory) GetEscapedText(input Expression) string {
	return input.String()
}

func (expressionFactory) Transpile(props TranspileProps) (func(Expression) Expression, error) {
	script := strings.TrimSpace(props.Script)
	if script == "" {
		return nil, errors.New("Error on ExpressionFactory.transpile(): no statement exists.")
	}
	return func(input Expression) Expression {
		return Node("transpiledExpression", Field("script", script), Field("input", input))
	}, nil
}
