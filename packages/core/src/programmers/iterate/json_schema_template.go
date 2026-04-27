package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_template(template h.Metadata) h.Schema {
	return h.Schema{"type": "string", "pattern": h.PatternFix(template_to_pattern(template))}
}
