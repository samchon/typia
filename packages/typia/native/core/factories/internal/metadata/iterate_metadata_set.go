package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

// Iterate_metadata_set records the runtime global `Set` type with its element
// metadata. A same-named user declaration is not treated as a Set.
//
// @evidence contracts/common.md#principled-implementation Only a type whose symbol is the runtime global `Set` with one type argument is a set, with the same provenance gate as Map; the element is explored and an existing entry with the same element name is kept.
// @evidence contracts/common.md#clear-and-simple-design One function over the shared provenance test.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The identity check is the cited gate.
// @evidence contracts/common.md#meaningful-documentation The doc states the provenance rule.
func Iterate_metadata_set(props IMetadataIteratorProps) bool {
  if props.Checker == nil || props.Type == nil {
    return false
  }
  typ := props.Checker.GetApparentType(props.Type)
  if metadata_type_symbol_base_name(typ) != "Set" {
    return false
  }
  // The native Set is the runtime-provided global type, not any same-named
  // package declaration or user-authored global (#2200, #2212, #2239).
  if !metadata_symbol_is_runtime_global_type(props.Checker, typ.Symbol(), "Set") {
    return false
  }
  generic := metadata_get_type_arguments(props.Checker, typ)
  if len(generic) != 1 {
    return false
  }

  key := generic[0]
  explore := props.Explore
  explore.Escaped = false
  explore.Aliased = false
  value := Explore_metadata(Explore_metadata_IProps{
    Options:     props.Options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Type:        key,
    Explore:     explore,
    Intersected: false,
  })
  for _, elem := range props.Metadata.Sets {
    if elem.Value.GetName() == value.GetName() {
      return true
    }
  }
  props.Metadata.Sets = append(props.Metadata.Sets, schemametadata.MetadataSet_create(schemametadata.MetadataSet{
    Value: value,
    Tags:  [][]schemametadata.IMetadataTypeTag{},
  }))
  return true
}
