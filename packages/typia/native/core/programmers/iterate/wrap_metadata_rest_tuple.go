package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func wrap_metadata_rest_tuple(rest *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
	wrapper := nativemetadata.MetadataSchema_initialize()
	wrapper.Arrays = append(wrapper.Arrays, nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
		Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
			Name:      "..." + rest.GetName(),
			Value:     rest,
			Nullables: []bool{},
			Recursive: false,
			Index:     nil,
		}),
		Tags: [][]nativemetadata.IMetadataTypeTag{},
	}))
	return wrapper
}

func Wrap_metadata_rest_tuple_export(rest *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
	return wrap_metadata_rest_tuple(rest)
}
