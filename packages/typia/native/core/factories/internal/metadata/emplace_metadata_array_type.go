package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Emplace_metadata_array_type_IProps struct {
  IMetadataIteratorProps
  Array *nativechecker.Type
}

func Emplace_metadata_array_type(props Emplace_metadata_array_type_IProps) *schemametadata.MetadataArrayType {
  array, newbie, setValue := props.Components.EmplaceArray(
    props.Checker,
    props.Type,
  )
  metadata_array_util_add_bool(&array.Nullables, props.Metadata.Nullable)
  if newbie == false {
    return array
  }

  arrayValue := props.Array
  if props.Checker != nil {
    args := metadata_get_type_arguments(props.Checker, props.Array)
    if len(args) != 0 {
      arrayValue = args[0]
    }
  }
  explore := props.Explore
  explore.Escaped = false
  explore.Aliased = false
  value := Explore_metadata(Explore_metadata_IProps{
    Options:     props.Options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Type:        arrayValue,
    Explore:     explore,
    Intersected: false,
  })
  setValue(value)
  return array
}
