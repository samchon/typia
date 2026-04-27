package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func check_union_array_like(input h.Expression, candidates []h.Metadata) []h.Expression {
	results := h.UnionExplorer.ArrayLike(input, candidates)
	out := make([]h.Expression, len(results))
	for i, result := range results {
		out[i] = result.Expression
	}
	return out
}
