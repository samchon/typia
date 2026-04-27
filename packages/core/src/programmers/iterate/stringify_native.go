package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func stringify_native(input h.Expression, name string) h.Expression {
	switch name {
	case "Date":
		return h.Expr(string(input) + ".toISOString()")
	case "Uint8Array":
		return h.Expr("Buffer.from(" + string(input) + ").toString(\"base64\")")
	default:
		return h.Expr("JSON.stringify(" + string(input) + ")")
	}
}
