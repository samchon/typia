package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func stringify_dynamic_properties(input h.Expression, entries []h.IExpressionEntry) h.Expression {
	expressions := make([]h.Expression, 0, len(entries))
	for _, entry := range entries {
		expressions = append(expressions, h.Expr("Object.entries("+string(input)+").filter(([key]) => "+string(check_dynamic_key(h.Expr("key"), entry.Meta))+").map(([key, value]) => JSON.stringify(key) + \":\" + "+string(entry.Expression)+").join(\",\")"))
	}
	return h.Template(expressions)
}
