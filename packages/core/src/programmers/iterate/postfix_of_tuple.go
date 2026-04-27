package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func postfix_of_tuple(tuple h.Metadata) string {
	if rest := h.AsMetadata(tuple["rest"]); len(rest) != 0 {
		return "..." + h.GetName(rest) + "[]"
	}
	return ""
}
