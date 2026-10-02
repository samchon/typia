package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Iterate_metadata_escape records a type with a `toJSON` method as an escaped
// schema holding both the original type and the method's return type.
//
// @evidence contracts/common.md#principled-implementation A type whose class has a `toJSON` method serializes as that method's return type, so the schema records both the original type and the return type as an escaped pair, each explored with the escaped state so they are not escaped again.
// @evidence contracts/common.md#clear-and-simple-design One function that explores two types into one escaped record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The method name is the JSON protocol's.
// @evidence contracts/common.md#meaningful-documentation The doc states the two halves.
func Iterate_metadata_escape(props IMetadataIteratorProps) bool {
  if props.Options.Escape == false || props.Explore.Escaped == true {
    return false
  }
  escaped := metadata_get_return_type_of_class_method(struct {
    Checker  *nativechecker.Checker
    Class    *nativechecker.Type
    Function string
  }{
    Checker:  props.Checker,
    Class:    props.Type,
    Function: "toJSON",
  })
  if escaped == nil {
    return false
  }

  if props.Metadata.Escaped == nil {
    props.Metadata.Escaped = schemametadata.MetadataEscaped_create(schemametadata.MetadataEscaped{
      Original: schemametadata.MetadataSchema_initialize(),
      Returns:  schemametadata.MetadataSchema_initialize(),
    })
  }
  originExplore := props.Explore
  originExplore.Escaped = true
  Iterate_metadata(IMetadataIteratorProps{
    Options:     props.Options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Metadata:    props.Metadata.Escaped.Original,
    Type:        props.Type,
    Explore:     originExplore,
    Intersected: props.Intersected,
  })
  returnExplore := props.Explore
  returnExplore.Escaped = true
  Iterate_metadata(IMetadataIteratorProps{
    Options:     props.Options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Metadata:    props.Metadata.Escaped.Returns,
    Type:        escaped,
    Explore:     returnExplore,
    Intersected: props.Intersected,
  })
  return true
}
