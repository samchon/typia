package iterate

import (
	"strconv"
	"strings"

	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func json_schema_jsDocTags(schema JsonSchema, jsDocTags []nativemetadata.IJsDocTagInfo) JsonSchema {
	for _, tag := range jsDocTags {
		if strings.HasPrefix(tag.Name, "x-") == false {
			continue
		}
		value, ok := json_schema_jsDocTags_value(tag)
		if ok == false {
			continue
		}
		schema[tag.Name] = json_schema_jsDocTags_cast(value)
	}
	return schema
}

func json_schema_jsDocTags_value(tag nativemetadata.IJsDocTagInfo) (string, bool) {
	for _, text := range tag.Text {
		if text.Kind != "text" {
			continue
		}
		return strings.ReplaceAll(strings.TrimSpace(text.Text), "\r\n", "\n"), true
	}
	return "", false
}

func json_schema_jsDocTags_cast(value string) any {
	if value == "true" {
		return true
	}
	if value == "false" {
		return false
	}
	if num, err := strconv.ParseFloat(value, 64); err == nil {
		return num
	}
	if value == "null" {
		return nil
	}
	return value
}
