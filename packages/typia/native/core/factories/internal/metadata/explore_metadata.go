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
  // Options supplies the analysis shape and hooks; member options stay fixed
  // within the collection.
  Options MetadataFactory_IOptions

  // Checker resolves Type in the collection's compiler program.
  Checker *nativechecker.Checker

  // Components owns named entries and cached schemas for this analysis.
  Components *schemametadata.MetadataCollection

  // Errors is the optional append-only sink; added errors prevent cache storage.
  Errors *[]MetadataFactory_IError

  // Type is explored into a fresh schema; nil returns the initialized schema.
  Type *nativechecker.Type

  // Explore supplies the diagnostic location and shape-state flags.
  Explore MetadataFactory_IExplore

  // Intersected suppresses nested intersection handling and disables cache use.
  Intersected bool

  // NoCache bypasses lookup and storage for exploratory analysis.
  NoCache bool

  // Prunable permits impossible intersection branches to contribute no values.
  Prunable bool
}

// Explore_metadata analyzes a type into a new metadata schema.
//
// A result is cached in the collection by type and by the options that change
// it, but only outside an intersected descent and when this exploration adds no
// error. Plain-object intersection types are also eligible. One collection is
// used for one checker/program and fixed Methods/StrictObjectMembers options;
// the key does not encode every option or location. Atomics are emended after
// the iterators ran.
//
// @evidence contracts/common.md#principled-implementation A fresh schema is filled by Iterate_metadata and emended. Eligible results are cloned through the collection cache keyed by type, Escape/Absorb/Constant/Functional and Top/Aliased/Escaped/Output. Intersected descent, NoCache and explorations adding errors bypass storage; plain-object intersections can be cached. The collection is local to one checker/program and fixed member options, and the key does not encode Prunable or complete location identities.
// @evidence contracts/common.md#clear-and-simple-design One function with the cache lookup before and the cache store after the iteration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Cache entries are analysis-local cloned schemas, not foreign checker mutations. NoCache and Intersected explicitly bypass reuse; member options must stay fixed within the collection. Prunable is not represented by the current key, so the key alone does not establish equivalence across pruning contexts.
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
  metadata := schemametadata.MetadataSchema_initialize()
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
