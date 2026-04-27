package iterate

import (
	"fmt"

	h "github.com/samchon/typia/packages/core/src/programmers/helpers"
)

func check_number(input h.Expression, metadata h.Metadata) h.ICheckEntry {
	expr := h.LogicalAnd(
		h.StrictEqual(h.TypeOf(input), h.Str("number")),
		h.Expr("Number.isFinite("+string(input)+")"),
	)
	conditions := numberConditions(input, metadata)
	return h.ICheckEntry{Expected: "number", Expression: &expr, Conditions: conditions}
}

func numberConditions(input h.Expression, metadata h.Metadata) [][]h.ICheckEntryCondition {
	conditions := make([][]h.ICheckEntryCondition, 0)
	for _, tag := range h.GetSlice(metadata, "tags") {
		name := h.GetName(tag)
		value := h.GetNumber(tag, "value")
		if name == "minimum" {
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: "minimum", Expression: h.Expr(string(input) + " >= " + fmt.Sprint(value))}})
		}
		if name == "maximum" {
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: "maximum", Expression: h.Expr(string(input) + " <= " + fmt.Sprint(value))}})
		}
		if name == "multipleOf" || name == "step" {
			conditions = append(conditions, []h.ICheckEntryCondition{{Expected: name, Expression: h.Expr(string(input) + " % " + fmt.Sprint(value) + " === 0")}})
		}
	}
	return conditions
}
