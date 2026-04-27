package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_object(input h.Expression, nullable bool) h.Expression {
	expressions := []h.Expression{
		h.StrictEqual(h.TypeOf(input), h.Str("object")),
		h.Expr("!Array.isArray(" + string(input) + ")"),
	}
	if !nullable {
		expressions = append(expressions, h.StrictNotEqual(input, h.Expr("null")))
	}
	return h.LogicalAnd(expressions...)
}
