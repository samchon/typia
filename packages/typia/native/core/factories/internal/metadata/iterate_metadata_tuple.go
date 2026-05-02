package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_tuple(props IMetadataIteratorProps) bool {
  if props.Checker == nil || nativechecker.IsTupleType(props.Type) == false {
    return false
  }

  tupleType := Emplace_metadata_tuple(props)
  for _, elem := range props.Metadata.Tuples {
    if elem.Type.Name == tupleType.Name {
      return true
    }
  }
  props.Metadata.Tuples = append(props.Metadata.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
    Type: tupleType,
    Tags: [][]schemametadata.IMetadataTypeTag{},
  }))
  return true
}
