package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_dynamic_properties(input h.Expression, entries []h.IExpressionEntry) h.Expression {
	checks := make([]h.Expression, 0, len(entries))
	for _, entry := range entries {
		key := h.Expr("key")
		checks = append(checks, h.Expr("Object.entries("+string(input)+").filter(([key]) => "+string(check_dynamic_key(key, entry.Meta))+").every(([key, value]) => "+string(entry.Expression)+")"))
	}
	return h.LogicalAnd(checks...)
}
