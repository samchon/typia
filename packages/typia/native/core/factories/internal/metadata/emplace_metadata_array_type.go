package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Emplace_metadata_array_type_IProps is the iterator state plus the array type to
// record.
//
// @evidence contracts/common.md#principled-implementation The iterator state is embedded and the array type to record is added, because the entry is keyed by the type and its element is read from it.
// @evidence contracts/common.md#clear-and-simple-design An embedded record and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the composition.
type Emplace_metadata_array_type_IProps struct {
  // IMetadataIteratorProps retains the encountered type used as collection key.
  IMetadataIteratorProps

  // Array is the resolved array/base type from which element arguments are read.
  Array *nativechecker.Type
}

// Emplace_metadata_array_type returns the collection's entry for the array type,
// analyzing its element type the first time it is seen.
//
// @evidence contracts/common.md#principled-implementation The encountered props.Type is stored once in the collection, including subclasses whose resolved Array base differs; repeats record nullability. The element comes from Array's first checker type argument when available, otherwise Array itself, and is explored with aliased and escaped states cleared.
// @evidence contracts/common.md#clear-and-simple-design One function over the collection's emplace service.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The element is taken from the checker's type arguments, not from the source text.
// @evidence contracts/common.md#meaningful-documentation The doc states the once-per-type rule and the element source.
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
