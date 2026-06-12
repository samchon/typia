package metadata

import (
  "fmt"
  "slices"
  "sort"
  "strings"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_sort(props struct {
  Collection *schemametadata.MetadataCollection
  Metadata   *schemametadata.MetadataSchema
}) {
  visited := map[*schemametadata.MetadataSchema]bool{}
  objectKeys := map[*schemametadata.MetadataObjectType]iterate_metadata_sort_object_key{}
  next := func(metadata *schemametadata.MetadataSchema) {}
  next = func(metadata *schemametadata.MetadataSchema) {
    iterate_metadata_sort_iterate(struct {
      visited    map[*schemametadata.MetadataSchema]bool
      collection *schemametadata.MetadataCollection
      metadata   *schemametadata.MetadataSchema
      next       func(*schemametadata.MetadataSchema)
      objectKeys map[*schemametadata.MetadataObjectType]iterate_metadata_sort_object_key
    }{
      visited:    visited,
      collection: props.Collection,
      metadata:   metadata,
      next:       next,
      objectKeys: objectKeys,
    })
  }
  for _, array := range props.Collection.Arrays() {
    next(array.Value)
  }
  for _, tuple := range props.Collection.Tuples() {
    for _, element := range tuple.Elements {
      next(element)
    }
  }
  for _, object := range props.Collection.Objects() {
    for _, property := range object.Properties {
      next(property.Value)
    }
  }
  next(props.Metadata)
}

func iterate_metadata_sort_iterate(props struct {
  visited    map[*schemametadata.MetadataSchema]bool
  collection *schemametadata.MetadataCollection
  metadata   *schemametadata.MetadataSchema
  next       func(*schemametadata.MetadataSchema)
  objectKeys map[*schemametadata.MetadataObjectType]iterate_metadata_sort_object_key
}) {
  if props.visited[props.metadata] {
    return
  }
  props.visited[props.metadata] = true

  for _, item := range props.metadata.Maps {
    props.next(item.Value)
  }
  for _, item := range props.metadata.Sets {
    props.next(item.Value)
  }
  if props.metadata.Escaped != nil {
    props.next(props.metadata.Escaped.Returns)
  }
  if props.metadata.Rest != nil {
    props.next(props.metadata.Rest)
  }

  if len(props.metadata.Objects) > 1 {
    sort.SliceStable(props.metadata.Objects, func(i, j int) bool {
      x := props.metadata.Objects[i]
      y := props.metadata.Objects[j]
      if iterate_metadata_sort_object_covers(props.objectKeys, x.Type, y.Type) {
        return true
      }
      if iterate_metadata_sort_object_covers(props.objectKeys, y.Type, x.Type) {
        return false
      }
      return false
    })
    index := props.collection.GetUnionIndex(props.metadata)
    props.metadata.Union_index = &index
  }

  if len(props.metadata.Arrays) > 1 {
    sort.SliceStable(props.metadata.Arrays, func(i, j int) bool {
      x := props.metadata.Arrays[i]
      y := props.metadata.Arrays[j]
      if schemametadata.MetadataSchema_covers(x.Type.Value, y.Type.Value) {
        return true
      }
      if schemametadata.MetadataSchema_covers(y.Type.Value, x.Type.Value) {
        return false
      }
      return false
    })
  }
  if len(props.metadata.Tuples) > 1 {
    sort.SliceStable(props.metadata.Tuples, func(i, j int) bool {
      xt := schemametadata.MetadataSchema_initialize()
      yt := schemametadata.MetadataSchema_initialize()
      xt.Tuples = append(xt.Tuples, props.metadata.Tuples[i])
      yt.Tuples = append(yt.Tuples, props.metadata.Tuples[j])
      if schemametadata.MetadataSchema_covers(xt, yt) {
        return true
      }
      if schemametadata.MetadataSchema_covers(yt, xt) {
        return false
      }
      return false
    })
  }

  for _, constant := range props.metadata.Constants {
    if constant.Type == "string" {
      sort.SliceStable(constant.Values, func(i, j int) bool {
        return fmt.Sprint(constant.Values[i].Value) < fmt.Sprint(constant.Values[j].Value)
      })
    } else if constant.Type == "number" {
      sort.SliceStable(constant.Values, func(i, j int) bool {
        return iterate_metadata_sort_float(constant.Values[i].Value) < iterate_metadata_sort_float(constant.Values[j].Value)
      })
    } else if constant.Type == "bigint" {
      sort.SliceStable(constant.Values, func(i, j int) bool {
        return fmt.Sprint(constant.Values[i].Value) < fmt.Sprint(constant.Values[j].Value)
      })
    } else {
      sort.SliceStable(constant.Values, func(i, j int) bool {
        value, _ := constant.Values[i].Value.(bool)
        return value == false
      })
    }
  }
}

func iterate_metadata_sort_object_covers(
  cache map[*schemametadata.MetadataObjectType]iterate_metadata_sort_object_key,
  x *schemametadata.MetadataObjectType,
  y *schemametadata.MetadataObjectType,
) bool {
  if x == nil || y == nil || len(x.Properties) < len(y.Properties) {
    return false
  }
  return iterate_metadata_sort_object_keys(cache, x).Signature ==
    iterate_metadata_sort_object_keys(cache, y).Signature
}

type iterate_metadata_sort_object_key struct {
  Signature string
}

func iterate_metadata_sort_object_keys(
  cache map[*schemametadata.MetadataObjectType]iterate_metadata_sort_object_key,
  object *schemametadata.MetadataObjectType,
) iterate_metadata_sort_object_key {
  if value, ok := cache[object]; ok {
    return value
  }
  keys := []string{}
  if object != nil {
    for _, property := range object.Properties {
      if property != nil && property.Key != nil {
        keys = append(keys, property.Key.GetName())
      }
    }
  }
  slices.Sort(keys)
  value := iterate_metadata_sort_object_key{
    Signature: strings.Join(keys, "\x00"),
  }
  cache[object] = value
  return value
}

func iterate_metadata_sort_float(value any) float64 {
  switch v := value.(type) {
  case float64:
    return v
  case float32:
    return float64(v)
  case int:
    return float64(v)
  case int64:
    return float64(v)
  case int32:
    return float64(v)
  case uint:
    return float64(v)
  case uint64:
    return float64(v)
  case uint32:
    return float64(v)
  default:
    return 0
  }
}
