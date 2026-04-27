package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_alias(alias h.Metadata) h.Schema {
	return h.Schema{"$ref": "#/components/schemas/" + h.GetName(alias)}
}
