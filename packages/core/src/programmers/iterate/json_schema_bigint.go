package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_bigint(metadata h.Metadata) h.Schema {
	schema := h.Schema{"type": "string", "format": "bigint"}
	for _, tag := range h.GetSlice(metadata, "tags") {
		if h.GetName(tag) == "minimum" {
			schema["minimum"] = h.GetNumber(tag, "value")
		}
		if h.GetName(tag) == "maximum" {
			schema["maximum"] = h.GetNumber(tag, "value")
		}
	}
	return schema
}
