package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func decode_union_object(input h.Expression, objects []h.Metadata) []h.Expression {
	results := h.UnionExplorer.Object(input, objects)
	out := make([]h.Expression, len(results))
	for i, result := range results {
		out[i] = result.Expression
	}
	return out
}
