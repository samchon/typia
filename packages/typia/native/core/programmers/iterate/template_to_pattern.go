package iterate

import (
  "strings"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

func template_to_pattern(props struct {
  top      bool
  template []*nativemetadata.MetadataSchema
}) string {
  patterns := make([]string, 0, len(props.template))
  for _, meta := range props.template {
    patterns = append(patterns, metadata_to_pattern(struct {
      top      bool
      metadata *nativemetadata.MetadataSchema
    }{
      top:      false,
      metadata: meta,
    }))
  }
  pattern := strings.Join(patterns, "")
  if props.top {
    return nativeutils.PatternUtil.Fix(pattern)
  }
  return pattern
}
