package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func json_schema_number(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
  return json_schema_plugin(struct {
    schema JsonSchema
    tags   [][]nativemetadata.IMetadataTypeTag
  }{
    schema: JsonSchema{"type": "number"},
    tags:   atomic.Tags,
  })
}

// Json_schema_number_export converts a number atomic to its JSON schemas: a
// `number` schema, one per type-tag plugin row.
//
// @evidence contracts/common.md#principled-implementation It converts a number atomic to its JSON schemas: a `number` schema, one per type-tag plugin row.
// @evidence contracts/common.md#clear-and-simple-design A one-line exported wrapper over the package-private function.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The wrapper has no logic of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Json_schema_number_export(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
  return json_schema_number(atomic)
}
