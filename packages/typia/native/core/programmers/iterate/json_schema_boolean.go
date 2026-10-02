package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func json_schema_boolean(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
  return json_schema_plugin(struct {
    schema JsonSchema
    tags   [][]nativemetadata.IMetadataTypeTag
  }{
    schema: JsonSchema{"type": "boolean"},
    tags:   atomic.Tags,
  })
}

// Json_schema_boolean_export converts a boolean atomic to its JSON schemas: a
// `boolean` schema, one per type-tag plugin row.
//
// @evidence contracts/common.md#principled-implementation It converts a boolean atomic to its JSON schemas: a `boolean` schema, one per type-tag plugin row.
// @evidence contracts/common.md#clear-and-simple-design A one-line exported wrapper over the package-private function.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The wrapper has no logic of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Json_schema_boolean_export(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
  return json_schema_boolean(atomic)
}
