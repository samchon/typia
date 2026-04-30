package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func json_schema_bigint(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
	return json_schema_plugin(struct {
		schema JsonSchema
		tags   [][]nativemetadata.IMetadataTypeTag
	}{
		schema: JsonSchema{"type": "integer"},
		tags:   atomic.Tags,
	})
}

func Json_schema_bigint_export(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
	return json_schema_bigint(atomic)
}
