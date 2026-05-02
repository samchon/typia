package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata(props IMetadataIteratorProps) {
  if props.Type == nil {
    return
  }
  if props.Type.IsTypeParameter() == true {
    if props.Errors != nil {
      *props.Errors = append(*props.Errors, MetadataFactory_IError{
        Name:     metadata_type_full_name(props.Checker, props.Type),
        Explore:  props.Explore,
        Messages: []string{"non-specified generic argument found."},
      })
    }
    return
  }

  if (props.Explore.Aliased != true && Iterate_metadata_alias(props)) ||
    Iterate_metadata_intersection(props) ||
    Iterate_metadata_union(props) ||
    Iterate_metadata_escape(props) {
    return
  }

  if Iterate_metadata_coalesce(struct {
    Metadata *schemametadata.MetadataSchema
    Type     *nativechecker.Type
  }{
    Metadata: props.Metadata,
    Type:     props.Type,
  }) ||
    Iterate_metadata_function(props) ||
    Iterate_metadata_constant(props) ||
    Iterate_metadata_template(props) ||
    Iterate_metadata_atomic(struct {
      Metadata *schemametadata.MetadataSchema
      Type     *nativechecker.Type
    }{
      Metadata: props.Metadata,
      Type:     props.Type,
    }) ||
    Iterate_metadata_tuple(props) ||
    Iterate_metadata_array(props) ||
    Iterate_metadata_native(props) ||
    Iterate_metadata_map(props) ||
    Iterate_metadata_set(props) ||
    Iterate_metadata_object(props) {
    return
  }
}
