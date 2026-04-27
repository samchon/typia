package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_plugin(schema h.Schema, plugin h.Schema) h.Schema {
	for key, value := range plugin {
		schema[key] = value
	}
	return schema
}
