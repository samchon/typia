package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Iterate_metadata_tuple records a tuple type as a tuple entry, once per distinct
// tuple type.
//
// @evidence contracts/common.md#principled-implementation A tuple type is emplaced once and recorded once per name in the schema, with its element analysis done by the emplace function.
// @evidence contracts/common.md#clear-and-simple-design One function over the emplace service.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The iterator uses the checker's IsTupleType predicate before emplacement, not a textual type name.
// @evidence contracts/common.md#meaningful-documentation The doc states the once-per-name rule.
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
