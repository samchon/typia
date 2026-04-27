package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func metadata_to_pattern(metadata h.Metadata, top bool) string {
	return h.MetadataPattern(metadata, top)
}
