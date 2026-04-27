package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_station(metadata h.Metadata) h.Schema {
	var schemas []h.Schema
	for _, constant := range h.GetSlice(metadata, "constants") {
		schemas = append(schemas, json_schema_constant(h.AsMetadata(constant)))
	}
	for _, atomic := range h.GetSlice(metadata, "atomics") {
		switch h.GetName(atomic) {
		case "boolean":
			schemas = append(schemas, json_schema_boolean())
		case "bigint":
			schemas = append(schemas, json_schema_bigint(h.AsMetadata(atomic)))
		case "number":
			schemas = append(schemas, json_schema_number(h.AsMetadata(atomic)))
		case "string":
			schemas = append(schemas, json_schema_string(h.AsMetadata(atomic)))
		}
	}
	for _, template := range h.GetSlice(metadata, "templates") {
		schemas = append(schemas, json_schema_template(h.AsMetadata(template)))
	}
	for _, array := range h.GetSlice(metadata, "arrays") {
		schemas = append(schemas, json_schema_array(h.AsMetadata(array)))
	}
	for _, tuple := range h.GetSlice(metadata, "tuples") {
		schemas = append(schemas, json_schema_tuple(h.AsMetadata(tuple)))
	}
	for _, object := range h.GetSlice(metadata, "objects") {
		schemas = append(schemas, json_schema_object(h.AsMetadata(object)))
	}
	for _, alias := range h.GetSlice(metadata, "aliases") {
		schemas = append(schemas, json_schema_alias(h.AsMetadata(alias)))
	}
	for _, native := range h.GetSlice(metadata, "natives") {
		schemas = append(schemas, json_schema_native(h.GetName(native)))
	}
	if len(schemas) == 0 {
		return h.Schema{}
	}
	if len(schemas) == 1 {
		return schemas[0]
	}
	return h.Schema{"oneOf": schemas}
}
