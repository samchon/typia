package metadata

import (
  "strings"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_map(props IMetadataIteratorProps) bool {
  if props.Checker == nil || props.Type == nil {
    return false
  }
  typ := props.Checker.GetApparentType(props.Type)
  name := metadata_type_full_name(props.Checker, typ)
  if strings.HasPrefix(name, "Map<") == false {
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
