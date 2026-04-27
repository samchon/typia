package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func stringify_regular_properties(entries []h.IExpressionEntry) []h.Expression {
	out := make([]h.Expression, 0, len(entries))
	for _, entry := range entries {
		key := h.GetString(entry.Key, "literal")
		if key == "" {
			key = h.GetString(entry.Key, "key")
		}
		out = append(out, h.Expr(h.QuoteString(h.QuoteString(key)+":")+" + "+string(entry.Expression)))
	}
	return out
}
