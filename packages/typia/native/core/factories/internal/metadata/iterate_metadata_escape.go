package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

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
