package metadata

// Iterate_metadata_union records every member of a union type into the same
// schema.
//
// When all members of a non-empty union contribute nothing, the schema is marked
// not required so that it describes `never`, except when the union carries null.
//
// @evidence contracts/common.md#principled-implementation Each member of a union is iterated into the same schema in the unioned and prunable states, so buckets accumulate; when every member of a non-empty union contributes nothing and the schema is neither any nor nullable, it is marked not required, which renders as `never`, because an empty schema would accept every value; a null member is excluded because the union would then still need to reject undefined.
// @evidence contracts/common.md#clear-and-simple-design One function that loops over the members and applies one final rule.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The never rule is derived from the schema's own size and flags and the comment explains the case it fixes.
// @evidence contracts/common.md#meaningful-documentation The doc states the accumulation and the never rule.
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
