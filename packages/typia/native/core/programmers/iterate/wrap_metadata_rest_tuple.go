package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func wrap_metadata_rest_tuple(rest *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
  wrapper := nativemetadata.MetadataSchema_initialize()
  wrapper.Arrays = append(wrapper.Arrays, nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
    Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
      Name:        "..." + rest.GetName(),
      DisplayName: "..." + rest.GetDisplayName(),
      Value:       rest,
      Nullables:   []bool{},
      Recursive:   false,
      Index:       nil,
    }),
    Tags: [][]nativemetadata.IMetadataTypeTag{},
  }))
  return wrapper
}

// Wrap_metadata_rest_tuple_export wraps the rest element of a tuple into a
// metadata schema holding one array whose name and display name are the
// element's prefixed with `...`.
//
// @evidence contracts/common.md#principled-implementation It wraps the rest element of a tuple into a metadata schema holding one array whose name and display name are the element's prefixed with `...`.
// @evidence contracts/common.md#clear-and-simple-design A one-line exported wrapper over the package-private function.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The wrapper has no logic of its own.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func Wrap_metadata_rest_tuple_export(rest *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
  return wrap_metadata_rest_tuple(rest)
}
