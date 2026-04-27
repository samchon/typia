package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_dynamic_key(input h.Expression, metadata h.Metadata) h.Expression {
	pattern := h.PatternFix(metadata_to_pattern(metadata, true))
	return h.Expr("new RegExp(" + h.QuoteString(pattern) + ").test(" + string(input) + ")")
}
