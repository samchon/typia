package iterate

import (
	"strings"

	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func json_schema_description(props struct {
	description *string
	jsDocTags   []nativemetadata.IJsDocTagInfo
}) *string {
	for _, tag := range props.jsDocTags {
		if tag.Name != "description" || len(tag.Text) == 0 {
			continue
		}
		text := strings.ReplaceAll(tag.Text[0].Text, "\r\n", "\n")
		return &text
	}
	return props.description
}
