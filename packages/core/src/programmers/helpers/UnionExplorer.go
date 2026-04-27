package helpers

type UnionExploreResult struct {
	Index      int
	Expression Expression
}

type unionExplorerNamespace struct{}

var UnionExplorer = unionExplorerNamespace{}

func (unionExplorerNamespace) Object(input Expression, objects []Metadata) []UnionExploreResult {
	specialized := UnionPredicator.Object(objects)
	out := make([]UnionExploreResult, 0, len(specialized))
	for _, elem := range specialized {
		conditions := make([]Expression, 0, len(elem.Entries))
		for _, entry := range elem.Entries {
			key := GetString(entry, "key")
			conditions = append(conditions, StrictNotEqual(Access(input, key), Expr("undefined")))
		}
		if len(conditions) == 0 {
			out = append(out, UnionExploreResult{Index: elem.Index, Expression: Expr("true")})
		} else {
			out = append(out, UnionExploreResult{Index: elem.Index, Expression: LogicalAnd(conditions...)})
		}
	}
	return out
}

func (unionExplorerNamespace) ArrayLike(input Expression, candidates []Metadata) []UnionExploreResult {
	out := make([]UnionExploreResult, 0, len(candidates))
	for i, candidate := range candidates {
		if length := GetInt(candidate, "length"); length != 0 {
			out = append(out, UnionExploreResult{Index: i, Expression: StrictEqual(Expr(string(input)+".length"), NumberLiteral(length))})
		} else {
			out = append(out, UnionExploreResult{Index: i, Expression: Expr("true")})
		}
	}
	return out
}
