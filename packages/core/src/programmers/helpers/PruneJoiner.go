package helpers

import "strings"

type pruneJoinerNamespace struct{}

var PruneJoiner = pruneJoinerNamespace{}

func (pruneJoinerNamespace) Object(input Expression, regular []string, dynamic []Metadata) Expression {
	keys := make([]string, 0, len(regular))
	for _, key := range regular {
		keys = append(keys, QuoteString(key))
	}
	predicates := make([]string, 0, len(dynamic))
	for _, metadata := range dynamic {
		predicates = append(predicates, string(dynamicKeyExpression(metadata))+".test(key)")
	}
	allowed := "[" + strings.Join(keys, ", ") + "].includes(key)"
	if len(predicates) != 0 {
		allowed += " || " + strings.Join(predicates, " || ")
	}
	return Expr("Object.keys(" + string(input) + ").forEach((key) => { if (!(" + allowed + ")) delete " + string(input) + "[key]; })")
}
