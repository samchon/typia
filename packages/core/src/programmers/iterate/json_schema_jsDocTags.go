package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_jsDocTags(schema h.Schema, tags []h.TypeTag) h.Schema {
	for _, tag := range tags {
		name := h.GetName(tag)
		if name != "" {
			schema["x-"+name] = h.AsMap(tag)["value"]
		}
	}
	return schema
}
