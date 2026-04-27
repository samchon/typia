package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_tuple(tuple h.Metadata) h.Schema {
	items := make([]h.Schema, 0)
	for _, elem := range h.GetSlice(tuple, "elements") {
		items = append(items, json_schema_station(h.AsMetadata(elem)))
	}
	schema := h.Schema{"type": "array", "prefixItems": items, "minItems": len(items)}
	if postfix := postfix_of_tuple(tuple); postfix == "" {
		schema["maxItems"] = len(items)
	}
	return schema
}
