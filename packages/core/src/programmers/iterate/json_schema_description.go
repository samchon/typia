package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_description(schema h.Schema, description string) h.Schema {
	if description != "" {
		schema["description"] = description
	}
	return schema
}
