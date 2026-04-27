package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_number(metadata h.Metadata) h.Schema {
	schema := h.Schema{"type": "number"}
	for _, tag := range h.GetSlice(metadata, "tags") {
		switch h.GetName(tag) {
		case "minimum":
			schema["minimum"] = h.GetNumber(tag, "value")
		case "maximum":
			schema["maximum"] = h.GetNumber(tag, "value")
		case "multipleOf", "step":
			schema["multipleOf"] = h.GetNumber(tag, "value")
		}
	}
	return schema
}
