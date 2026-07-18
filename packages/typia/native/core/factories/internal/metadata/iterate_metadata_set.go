package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func Iterate_metadata_set(props IMetadataIteratorProps) bool {
  if props.Checker == nil || props.Type == nil {
    return false
  }
  typ := props.Checker.GetApparentType(props.Type)
  if metadata_type_symbol_base_name(typ) != "Set" {
    return false
  }
  // Classify the native Set only when the type actually is the built-in, not
  // merely a user type of the same name. A real Set is declared in a `.d.ts`
  // library, so a module-scoped user `interface Set<T> { brandSet; ... }` in a
  // `.ts` module falls through to the structural object path and is validated
  // against its own members instead of `input instanceof Set` — the collection
  // half of the #2200 identity gate (#2212).
  if !metadata_symbol_from_declaration_file(typ.Symbol()) {
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
