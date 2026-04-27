package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_escaped(schema h.Schema) h.Schema {
	schema["x-typia-escaped"] = true
	return schema
}
