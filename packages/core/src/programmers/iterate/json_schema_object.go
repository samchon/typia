package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_object(object h.Metadata) h.Schema {
	properties := h.Schema{}
	required := make([]string, 0)
	for _, property := range h.GetSlice(object, "properties") {
		next := h.AsMetadata(property)
		key := h.GetString(next, "key")
		if key == "" {
			continue
		}
		value := h.AsMetadata(next["value"])
		properties[key] = json_schema_station(value)
		if h.IsRequired(value) {
			required = append(required, key)
		}
	}
	schema := h.Schema{"type": "object", "properties": properties, "additionalProperties": false}
	if len(required) != 0 {
		schema["required"] = required
	}
	return schema
}
