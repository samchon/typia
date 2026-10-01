package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Explore_metadata_IProps is the input of one exploration: options, checker, the
// collection, the error sink, the type, the location and the Intersected, NoCache
// and Prunable flags.
//
// @evidence contracts/common.md#principled-implementation An exploration needs the options, checker, collection, error sink, type and location plus three flags, NoCache to bypass the cache, Intersected for the inside of an intersection and Prunable for never pruning.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc lists the inputs.
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

// Explore_metadata analyzes a type into a new metadata schema.
//
// A result is cached in the collection by type and by the options that change
// it, but only when the type is not inside an intersection and no error was
// reported. Atomics are emended after the iterators ran.
//
// @evidence contracts/common.md#principled-implementation A fresh schema is filled by Iterate_metadata and emended; the result is cached in the collection by the type and by the options and location bits that change it, but never inside an intersection (unless every member is a plain object) and never when the analysis reported an error, so a cached schema is always a complete, error-free analysis of exactly that key.
// @evidence contracts/common.md#clear-and-simple-design One function with the cache lookup before and the cache store after the iteration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache key lists every input that can change the result, and an uncacheable analysis simply recomputes.
// @evidence contracts/common.md#meaningful-documentation The doc states the cache conditions.
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
