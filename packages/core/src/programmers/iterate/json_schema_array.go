package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_array(array h.Metadata) h.Schema {
	schema := h.Schema{"type": "array"}
	if item := h.AsMetadata(array["type"]); len(item) != 0 {
		schema["items"] = json_schema_station(item)
	}
	if minItems := h.GetInt(array, "minimum"); minItems != 0 {
		schema["minItems"] = minItems
	}
	if maxItems := h.GetInt(array, "maximum"); maxItems != 0 {
		schema["maxItems"] = maxItems
	}
	return schema
}
