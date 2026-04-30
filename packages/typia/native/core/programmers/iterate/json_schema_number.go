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

func Json_schema_number_export(atomic *nativemetadata.MetadataAtomic) []JsonSchema {
	return json_schema_number(atomic)
}
