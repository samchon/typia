package iterate

import (
  "strings"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
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

// json_schema_jsDocTags_cast reads an `@x-*` tag's text as a JSON value.
//
// Numbers use JavaScript's `Number()` grammar, the grammar of the v12 cast this
// ports (samchon/typia#2442), so `0x10` is 16 while Go-only spellings such as
// `0x1p4`, `1_000`, and `inf` stay text. Only finite numbers become numbers: the
// schema is JSON, which has no NaN or infinity, so `NaN`, `Infinity`, and an
// overflowing `1e400` keep their text instead of degrading to `null`.
func json_schema_jsDocTags_cast(value string) any {
  if value == "true" {
    return true
  }
  if value == "false" {
    return false
  }
  if reading := nativeutils.NumberUtil.Read(value); reading.Numeric && reading.Finite {
    return reading.Value
  }
  if value == "null" {
    return nil
  }
  return value
}
