package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func json_schema_string(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
  return json_schema_plugin(struct {
    schema JsonSchema
    tags   [][]nativemetadata.IMetadataTypeTag
  }{
    schema: JsonSchema{"type": "string"},
    tags:   atomic.Tags,
  })
}

func Json_schema_string_export(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
  return json_schema_string(atomic)
}
