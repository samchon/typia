package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func template_to_pattern(template h.Metadata) string {
	return h.TemplatePattern(template)
}
