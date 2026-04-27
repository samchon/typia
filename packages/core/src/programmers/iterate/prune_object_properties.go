package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func prune_object_properties(input h.Expression, object h.Metadata) h.Expression {
	regular := make([]string, 0)
	dynamic := make([]h.Metadata, 0)
	for _, property := range h.GetSlice(object, "properties") {
		next := h.AsMetadata(property)
		key := h.GetString(next, "key")
		if key != "" {
			regular = append(regular, key)
			continue
		}
		if meta := h.AsMetadata(next["key"]); len(meta) != 0 {
			dynamic = append(dynamic, meta)
		}
	}
	return h.PruneJoiner.Object(input, regular, dynamic)
}
