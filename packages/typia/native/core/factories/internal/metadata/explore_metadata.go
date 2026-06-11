package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Explore_metadata_IProps struct {
  Options     MetadataFactory_IOptions
  Checker     *nativechecker.Checker
  Components  *schemametadata.MetadataCollection
  Errors      *[]MetadataFactory_IError
  Type        *nativechecker.Type
  Explore     MetadataFactory_IExplore
  Intersected bool
  NoCache     bool
  Prunable    bool
}

func Explore_metadata(props Explore_metadata_IProps) *schemametadata.MetadataSchema {
  plainObjectIntersection := false
  if props.Checker != nil && props.Type != nil && props.Type.IsIntersection() {
    plainObjectIntersection = iterate_metadata_intersection_is_plain_object_only(props.Checker, props.Components, props.Type, map[*nativechecker.Type]bool{})
  }
  cacheable := props.NoCache == false &&
    props.Intersected == false &&
    props.Components != nil &&
    props.Type != nil &&
    (props.Type.IsIntersection() == false || plainObjectIntersection)
  cacheKey := schemametadata.MetadataCollection_ExploreCacheKey{}
  if cacheable {
    cacheKey = schemametadata.MetadataCollection_ExploreCacheKey{
      Type:       props.Type,
      Escape:     props.Options.Escape,
      Absorb:     props.Options.Absorb,
      Constant:   props.Options.Constant,
      Functional: props.Options.Functional,
      Top:        props.Explore.Top,
      Aliased:    props.Explore.Aliased,
      Escaped:    props.Explore.Escaped,
      Output:     props.Explore.Output,
    }
    if cached, ok := props.Components.LookupExploreCache(cacheKey); ok {
      return cached
    }
  }
  errorCount := 0
  if props.Errors != nil {
    errorCount = len(*props.Errors)
  }
  metadata := schemametadata.MetadataSchema_initialize(props.Explore.Escaped)
  if props.Type == nil {
    return metadata
  }
  Iterate_metadata(IMetadataIteratorProps{
    Options:     props.Options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Metadata:    metadata,
    Type:        props.Type,
    Explore:     props.Explore,
    Intersected: props.Intersected,
    Prunable:    props.Prunable,
  })
  Emend_metadata_atomics(metadata)
  if metadata.Escaped != nil {
    Emend_metadata_atomics(metadata.Escaped.Original)
    Emend_metadata_atomics(metadata.Escaped.Returns)
  }
  if cacheable && (props.Errors == nil || len(*props.Errors) == errorCount) {
    props.Components.StoreExploreCache(cacheKey, metadata)
  }
  return metadata
}
