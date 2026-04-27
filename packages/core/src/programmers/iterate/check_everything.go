package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_everything(expressions []h.Expression) h.Expression {
	if len(expressions) == 0 {
		return h.Expr("true")
	}
	return h.Expr(string(h.ArrayLiteral(expressions)) + ".every((flag: boolean) => flag)")
}
