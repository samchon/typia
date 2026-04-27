package helpers

import "strings"

type stringifyJoinerNamespace struct{}

var StringifyJoiner = stringifyJoinerNamespace{}

func (stringifyJoinerNamespace) Array(input Expression, expression Expression) Expression {
	return Expr(string(input) + ".map((elem: any) => " + string(expression) + ").join(\",\")")
}

func (stringifyJoinerNamespace) Tuple(expressions []Expression) Expression {
	parts := make([]string, len(expressions))
	for i, expression := range expressions {
		parts[i] = string(expression)
	}
	return Expr(strings.Join(parts, " + \",\" + "))
}

func (stringifyJoinerNamespace) Object(entries []IExpressionEntry) Expression {
	parts := make([]string, 0, len(entries))
	for _, entry := range entries {
		key := GetString(entry.Key, "literal")
		if key == "" {
			key = GetString(entry.Key, "key")
		}
		parts = append(parts, QuoteString(QuoteString(key)+":")+" + "+string(entry.Expression))
	}
	if len(parts) == 0 {
		return Str("{}")
	}
	return Expr(QuoteString("{") + " + " + strings.Join(parts, " + \",\" + ") + " + " + QuoteString("}"))
}
