package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_title(schema h.Schema, title string) h.Schema {
	if title != "" {
		schema["title"] = title
	}
	return schema
}
