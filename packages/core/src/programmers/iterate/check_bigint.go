package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_bigint(input h.Expression, metadata h.Metadata) h.ICheckEntry {
	expr := h.StrictEqual(h.TypeOf(input), h.Str("bigint"))
	conditions := bigintConditions(input, metadata)
	return h.ICheckEntry{Expected: "bigint", Expression: &expr, Conditions: conditions}
}

func bigintConditions(input h.Expression, metadata h.Metadata) [][]h.ICheckEntryCondition {
	conditions := make([][]h.ICheckEntryCondition, 0)
	for _, tag := range h.GetSlice(metadata, "tags") {
		name := h.GetName(tag)
		value := h.AsInt(h.AsMap(tag)["value"])
		if name == "minimum" {
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: "minimum", Expression: h.Expr(string(input) + " >= " + string(h.NumberLiteral(value)) + "n")}})
		}
		if name == "maximum" {
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: "maximum", Expression: h.Expr(string(input) + " <= " + string(h.NumberLiteral(value)) + "n")}})
		}
	}
	return conditions
}
