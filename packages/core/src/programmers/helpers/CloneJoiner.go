package helpers

import "strings"

type cloneJoinerNamespace struct{}

var CloneJoiner = cloneJoinerNamespace{}

func (cloneJoinerNamespace) Array(input Expression, body Expression) Expression {
	return Expr(string(input) + ".map((elem: any) => " + string(body) + ")")
}

func (cloneJoinerNamespace) Tuple(values []Expression) Expression {
	return ArrayLiteral(values)
}

func (cloneJoinerNamespace) Object(regular []IExpressionEntry, dynamic []IExpressionEntry) Expression {
	entries := make([]string, 0, len(regular)+len(dynamic))
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
		entries = append(entries, name+": "+string(entry.Expression))
	}
	for _, entry := range dynamic {
		entries = append(entries, "...Object.fromEntries(Object.entries("+string(entry.Input)+").filter(([key]) => "+string(dynamicKeyExpression(entry.Meta))+".test(key)).map(([key, value]) => [key, "+string(entry.Expression)+"]))")
	}
	if len(entries) == 0 {
		return Expr("{}")
	}
	return Expr("{ " + strings.Join(entries, ", ") + " }")
}

func dynamicKeyExpression(metadata Metadata) Expression {
	return Expr("new RegExp(" + QuoteString(PatternFix(MetadataPattern(metadata, true))) + ")")
}
