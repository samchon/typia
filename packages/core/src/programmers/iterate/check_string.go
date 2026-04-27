package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_string(input h.Expression, metadata h.Metadata) h.ICheckEntry {
	expr := h.StrictEqual(h.TypeOf(input), h.Str("string"))
	conditions := stringConditions(input, metadata)
	return h.ICheckEntry{Expected: "string", Expression: &expr, Conditions: conditions}
}

func stringConditions(input h.Expression, metadata h.Metadata) [][]h.ICheckEntryCondition {
	conditions := make([][]h.ICheckEntryCondition, 0)
	for _, tag := range h.GetSlice(metadata, "tags") {
		name := h.GetName(tag)
		switch name {
		case "minLength":
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: name, Expression: h.Expr(string(input) + ".length >= " + string(h.NumberLiteral(h.GetInt(tag, "value"))))}})
		case "maxLength":
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: name, Expression: h.Expr(string(input) + ".length <= " + string(h.NumberLiteral(h.GetInt(tag, "value"))))}})
		case "pattern":
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: name, Expression: h.Expr("new RegExp(" + h.QuoteString(h.GetString(tag, "value")) + ").test(" + string(input) + ")")}})
		case "format":
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: name, Expression: h.Expr("FormatPredicator." + h.GetString(tag, "value") + "(" + string(input) + ")")}})
		}
	}
	return conditions
}
