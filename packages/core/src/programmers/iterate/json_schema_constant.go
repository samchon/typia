package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_constant(constant h.Metadata) h.Schema {
	values := make([]any, 0)
	for _, value := range h.GetSlice(constant, "values") {
		if literal, ok := h.SoleLiteral(value); ok {
			values = append(values, literal)
		}
	}
	if len(values) == 1 {
		return h.Schema{"const": values[0]}
	}
	return h.Schema{"enum": values}
}
