package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func Iterate_metadata_map(props IMetadataIteratorProps) bool {
  if props.Checker == nil || props.Type == nil {
    return false
  }
  typ := props.Checker.GetApparentType(props.Type)
  if metadata_type_symbol_base_name(typ) != "Map" {
    return false
  }
  // Classify the native Map only when the type actually is the built-in, not
  // merely a user type of the same name. A real Map is declared in a `.d.ts`
  // library, so a module-scoped user `interface Map<K, V> { brandMap; ... }` in a
  // `.ts` module falls through to the structural object path and is validated
  // against its own members instead of `input instanceof Map` — the collection
  // half of the #2200 identity gate (#2212).
  if !metadata_symbol_from_declaration_file(typ.Symbol()) {
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
