package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

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
