package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

// Iterate_metadata_map records the runtime global `Map` type with its key and
// value metadata. A same-named user declaration is not treated as a Map.
//
// @evidence contracts/common.md#principled-implementation Only a type whose symbol is the runtime global `Map` with two type arguments is a map, so a package or user declaration with the same name falls through to the object path; key and value are explored separately, and an existing map entry of the same display name is replaced.
// @evidence contracts/common.md#clear-and-simple-design One function over the shared provenance test.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The identity check is the cited provenance gate and no name is trusted by itself.
// @evidence contracts/common.md#meaningful-documentation The doc states the provenance rule.
func Iterate_metadata_map(props IMetadataIteratorProps) bool {
  if props.Checker == nil || props.Type == nil {
    return false
  }
  typ := props.Checker.GetApparentType(props.Type)
  if metadata_type_symbol_base_name(typ) != "Map" {
    return false
  }
  // The native Map is the runtime-provided global type, not any same-named
  // package declaration or user-authored global (#2200, #2212, #2239).
  if !metadata_symbol_is_runtime_global_type(props.Checker, typ.Symbol(), "Map") {
    return false
  }
  generic := metadata_get_type_arguments(props.Checker, typ)
  if len(generic) != 2 {
    return false
  }

  key := generic[0]
  value := generic[1]
  explore := props.Explore
  explore.Escaped = false
  explore.Aliased = false
  keyMeta := Explore_metadata(Explore_metadata_IProps{
    Options:     props.Options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Type:        key,
    Explore:     explore,
    Intersected: false,
  })
  valueMeta := Explore_metadata(Explore_metadata_IProps{
    Options:     props.Options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Type:        value,
    Explore:     explore,
    Intersected: false,
  })
  next := schemametadata.MetadataMap_create(schemametadata.MetadataMap{
    Key:   keyMeta,
    Value: valueMeta,
    Tags:  [][]schemametadata.IMetadataTypeTag{},
  })
  keyName := next.GetName()
  for i, elem := range props.Metadata.Maps {
    if elem.GetName() == keyName {
      props.Metadata.Maps[i] = next
      return true
    }
  }
  props.Metadata.Maps = append(props.Metadata.Maps, next)
  return true
}
