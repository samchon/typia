package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_array_length(input h.Expression, array h.Metadata) h.ICheckEntry {
	expected := h.GetName(array)
	if expected == "" {
		expected = "array"
	}
	expr := h.Expr("Array.isArray(" + string(input) + ")")
	conditions := make([][]h.ICheckEntryCondition, 0)
	if length := h.GetInt(array, "length"); length != 0 {
		conditions = append(conditions, []h.ICheckEntryCondition{{
			Expected:   "length == " + string(h.NumberLiteral(length)),
			Expression: h.StrictEqual(h.Expr(string(input)+".length"), h.NumberLiteral(length)),
		}})
	}
	if minimum := h.GetInt(array, "minimum"); minimum != 0 {
		conditions = append(conditions, []h.ICheckEntryCondition{{
			Expected:   "length >= " + string(h.NumberLiteral(minimum)),
			Expression: h.Expr(string(input) + ".length >= " + string(h.NumberLiteral(minimum))),
		}})
	}
	if maximum := h.GetInt(array, "maximum"); maximum != 0 {
		conditions = append(conditions, []h.ICheckEntryCondition{{
			Expected:   "length <= " + string(h.NumberLiteral(maximum)),
			Expression: h.Expr(string(input) + ".length <= " + string(h.NumberLiteral(maximum))),
		}})
	}
	return h.ICheckEntry{Expected: expected, Expression: &expr, Conditions: conditions}
}
