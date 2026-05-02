package iterate

import (
  "strings"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func json_schema_title(schema struct {
  description *string
  jsDocTags   []nativemetadata.IJsDocTagInfo
}) *string {
  for _, tag := range schema.jsDocTags {
    if tag.Name != "title" || len(tag.Text) == 0 {
      continue
    }
    parts := make([]string, 0, len(tag.Text))
    for _, part := range tag.Text {
      parts = append(parts, strings.ReplaceAll(part.Text, "\r\n", "\n"))
    }
    output := strings.Join(parts, "")
    return &output
  }
  return nil
}
