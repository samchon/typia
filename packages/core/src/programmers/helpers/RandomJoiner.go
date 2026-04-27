package helpers

import "strings"

type randomJoinerNamespace struct{}

var RandomJoiner = randomJoinerNamespace{}

func (randomJoinerNamespace) Array(item Expression, count Expression) Expression {
	return Expr("Array.from({ length: " + string(count) + " }, () => " + string(item) + ")")
}

func (randomJoinerNamespace) Tuple(items []Expression) Expression {
	return ArrayLiteral(items)
}

func (randomJoinerNamespace) Object(regular []IExpressionEntry, dynamic []IExpressionEntry) Expression {
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
		parts = append(parts, "...Object.fromEntries("+string(entry.Expression)+")")
	}
	return Expr("{ " + strings.Join(parts, ", ") + " }")
}
