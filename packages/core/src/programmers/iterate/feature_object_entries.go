package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func feature_object_entries(object h.Metadata) []h.IExpressionEntry {
	properties := h.GetSlice(object, "properties")
	out := make([]h.IExpressionEntry, 0, len(properties))
	for _, property := range properties {
		next := h.AsMetadata(property)
		key := h.Metadata{"literal": h.GetString(next, "key")}
		out = append(out, h.IExpressionEntry{
			Input:      h.Expr("input"),
			Key:        key,
			Meta:       h.AsMetadata(next["value"]),
			Expression: h.Access(h.Expr("input"), h.GetString(next, "key")),
		})
	}
	return out
}
