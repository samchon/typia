package metadata

func Iterate_metadata_union(props IMetadataIteratorProps) bool {
  if props.Type == nil || props.Type.IsUnion() == false {
    return false
  }
  members := props.Type.Types()
  before := props.Metadata.Size()
  for _, typ := range members {
    explore := props.Explore
    explore.Aliased = false
    Iterate_metadata(IMetadataIteratorProps{
      Options:     props.Options,
      Checker:     props.Checker,
      Components:  props.Components,
      Errors:      props.Errors,
      Metadata:    props.Metadata,
      Type:        typ,
      Explore:     explore,
      Intersected: props.Intersected,
      Unioned:     true,
      Prunable:    true,
    })
  }
  // Every member of a non-empty union pruned away to `never`, contributing no type
  // bucket — e.g. `Enum & { data: number }` distributes to
  // `("a" & { data }) | ("b" & { data })`, each member a non-object base meeting a
  // real-data object, which `is_never` drops. Left as an empty schema the union
  // would validate as accept-everything; mark it not-required so it renders as
  // `never` (rejecting every concrete value), matching a standalone `never`.
  //
  // `Nullable == false` is required: a `null` member sets `Nullable` without adding
  // a bucket, so `null | (string & { data })` (= `null`) reaches here with an empty
  // size. Forcing not-required there would also accept `undefined`, which `null`
  // must reject — so the guard fires only when the union carries no `null` either.
  if len(members) != 0 && props.Metadata.Any == false && props.Metadata.Nullable == false && props.Metadata.Size() == before {
    props.Metadata.Required = false
  }
  return true
}
