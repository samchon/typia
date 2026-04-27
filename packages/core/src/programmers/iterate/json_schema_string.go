package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_string(metadata h.Metadata) h.Schema {
	schema := h.Schema{"type": "string"}
	for _, tag := range h.GetSlice(metadata, "tags") {
		switch h.GetName(tag) {
		case "minLength":
			schema["minLength"] = h.GetInt(tag, "value")
		case "maxLength":
			schema["maxLength"] = h.GetInt(tag, "value")
		case "pattern":
			schema["pattern"] = h.GetString(tag, "value")
		case "format":
			schema["format"] = h.GetString(tag, "value")
		}
	}
	return schema
}
