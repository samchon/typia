package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func wrap_metadata_rest_tuple(tuple h.Metadata, rest h.Metadata) h.Metadata {
	out := h.Metadata{}
	for key, value := range tuple {
		out[key] = value
	}
	out["rest"] = rest
	return out
}
