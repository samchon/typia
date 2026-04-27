package helpers

import "strings"

type notationJoinerNamespace struct{}

var NotationJoiner = notationJoinerNamespace{}

func (notationJoinerNamespace) Array(input Expression, expression Expression) Expression {
	return Expr(string(input) + ".map((elem: any) => " + string(expression) + ")")
}

func (notationJoinerNamespace) Tuple(expressions []Expression) Expression {
	return ArrayLiteral(expressions)
}

func (notationJoinerNamespace) Object(regular []IExpressionEntry, dynamic []IExpressionEntry) Expression {
	parts := make([]string, 0, len(regular)+len(dynamic))
	for _, entry := range regular {
		key := GetString(entry.Key, "literal")
		if key == "" {
			key = GetString(entry.Key, "key")
		}
		if key == "" {
			continue
		}
		name := key
		if !IdentifierName(key) {
			name = QuoteString(key)
		}
		parts = append(parts, name+": "+string(entry.Expression))
	}
	for _, entry := range dynamic {
		parts = append(parts, "...Object.fromEntries(Object.entries("+string(entry.Input)+").filter(([key]) => "+string(dynamicKeyExpression(entry.Meta))+".test(key)).map(([key, value]) => [key, "+string(entry.Expression)+"]))")
	}
	if len(parts) == 0 {
		return Expr("{}")
	}
	return Expr("{ " + strings.Join(parts, ", ") + " }")
}
