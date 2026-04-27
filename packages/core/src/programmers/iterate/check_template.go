package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_template(input h.Expression, template h.Metadata) h.ICheckEntry {
	pattern := h.PatternFix(template_to_pattern(template))
	expr := h.Expr("new RegExp(" + h.QuoteString(pattern) + ").test(" + string(input) + ")")
	return h.ICheckEntry{Expected: "`" + pattern + "`", Expression: &expr}
}
