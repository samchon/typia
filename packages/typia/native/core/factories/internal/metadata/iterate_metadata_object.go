package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Iterate_metadata_object records an object type as an object entry. Unless
// ensure is true, only object types, intersections and the `object` keyword are
// accepted.
//
// @evidence contracts/common.md#principled-implementation Object types, intersections and the `object` keyword are objects, and the entry is emplaced once and recorded once per name in the schema; the optional ensure argument bypasses the type test for callers that already know the type is an object.
// @evidence contracts/common.md#clear-and-simple-design One function over the emplace service with a variadic flag.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The variadic ensure is an explicit caller decision.
// @evidence contracts/common.md#meaningful-documentation The doc states what is accepted.
func Iterate_metadata_object(props IMetadataIteratorProps, ensure ...bool) bool {
  ensured := false
  if len(ensure) != 0 {
    ensured = ensure[0]
  }
  if ensured == false {
    filter := func(flag nativechecker.TypeFlags) bool {
      return props.Type != nil && props.Type.Flags()&flag != 0
    }
    if filter(nativechecker.TypeFlagsObject) == false &&
      (props.Type == nil || props.Type.IsIntersection() == false) &&
      (props.Checker == nil || props.Type == nil || props.Checker.TypeToString(props.Type) != "object") {
      return false
    }
  }

  obj := Emplace_metadata_object(props)
  for _, elem := range props.Metadata.Objects {
    if elem.Type.Name == obj.Name {
      return true
    }
  }
  props.Metadata.Objects = append(props.Metadata.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
    Type: obj,
    Tags: [][]schemametadata.IMetadataTypeTag{},
  }))
  return true
}
