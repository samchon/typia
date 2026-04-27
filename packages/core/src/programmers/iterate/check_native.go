package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_native(input h.Expression, name string) h.Expression {
	switch name {
	case "Boolean", "Number", "String":
		return h.Expr(string(input) + " instanceof " + name + " || typeof " + string(input) + " === " + h.QuoteString(lowerNative(name)))
	case "Array":
		return h.Expr("Array.isArray(" + string(input) + ")")
	default:
		return h.Expr(string(input) + " instanceof " + name)
	}
}

func lowerNative(name string) string {
	switch name {
	case "Boolean":
		return "boolean"
	case "Number":
		return "number"
	case "String":
		return "string"
	default:
		return name
	}
}
