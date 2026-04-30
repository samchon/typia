package iterate

import (
	"fmt"
	"strings"

	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

func metadata_to_pattern(props struct {
	top      bool
	metadata *nativemetadata.MetadataSchema
}) string {
	for _, atomic := range props.metadata.Atomics {
		if atomic.Type == "string" {
			return "(.*)"
		}
	}

	values := []string{}
	for _, constant := range props.metadata.Constants {
		if constant.Type != "string" {
			for _, value := range constant.Values {
				values = append(values, fmt.Sprint(value.Value))
			}
			continue
		}
		for _, value := range constant.Values {
			if str, ok := value.Value.(string); ok {
				values = append(values, nativeutils.PatternUtil.Escape(str))
			} else {
				values = append(values, nativeutils.PatternUtil.Escape(fmt.Sprint(value.Value)))
			}
		}
	}
	for _, atomic := range props.metadata.Atomics {
		if atomic.Type == "number" || atomic.Type == "bigint" {
			values = append(values, nativeutils.PatternUtil.NUMBER)
		} else if atomic.Type == "boolean" {
			values = append(values, nativeutils.PatternUtil.BOOLEAN)
		}
	}
	for _, template := range props.metadata.Templates {
		values = append(values, "("+template_to_pattern(struct {
			top      bool
			template []*nativemetadata.MetadataSchema
		}{
			top:      false,
			template: template.Row,
		})+")")
	}

	pattern := ""
	if len(values) == 1 {
		pattern = values[0]
	} else {
		pattern = "(" + strings.Join(values, "|") + ")"
	}
	if props.top {
		return nativeutils.PatternUtil.Fix(pattern)
	}
	return pattern
}
