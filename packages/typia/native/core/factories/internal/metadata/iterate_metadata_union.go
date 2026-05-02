package metadata

func Iterate_metadata_union(props IMetadataIteratorProps) bool {
  if props.Type == nil || props.Type.IsUnion() == false {
    return false
  }
  for _, typ := range props.Type.Types() {
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
    })
  }
  return true
}
