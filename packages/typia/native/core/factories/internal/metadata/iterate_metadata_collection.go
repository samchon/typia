package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func Iterate_metadata_collection(props struct {
  Errors     *[]MetadataFactory_IError
  Collection *schemametadata.MetadataCollection
}) {
  for _, array := range props.Collection.Arrays() {
    if array.Recursive == false {
      props.Collection.SetArrayRecursive(array, iterate_metadata_collection_is_array_recursive(struct {
        Visited  map[*schemametadata.MetadataSchema]bool
        Array    *schemametadata.MetadataArrayType
        Metadata *schemametadata.MetadataSchema
      }{
        Visited:  map[*schemametadata.MetadataSchema]bool{},
        Array:    array,
        Metadata: array.Value,
      }))
    }
  }
  for _, tuple := range props.Collection.Tuples() {
    if tuple.Recursive == false {
      visited := map[*schemametadata.MetadataSchema]bool{}
      recursive := false
      for _, element := range tuple.Elements {
        if iterate_metadata_collection_is_tuple_recursive(struct {
          Visited  map[*schemametadata.MetadataSchema]bool
          Tuple    *schemametadata.MetadataTupleType
          Metadata *schemametadata.MetadataSchema
        }{
          Visited:  visited,
          Tuple:    tuple,
          Metadata: element,
        }) {
          recursive = true
          break
        }
      }
      props.Collection.SetTupleRecursive(tuple, recursive)
    }
  }
  for _, object := range props.Collection.Objects() {
    Iterate_metadata_comment_tags(struct {
      Errors *[]MetadataFactory_IError
      Object *schemametadata.MetadataObjectType
    }{
      Errors: props.Errors,
      Object: object,
    })
    if object.Recursive == false {
      visited := map[*schemametadata.MetadataSchema]bool{}
      recursive := false
      for _, property := range object.Properties {
        if iterate_metadata_collection_is_object_recursive(struct {
          Visited  map[*schemametadata.MetadataSchema]bool
          Object   *schemametadata.MetadataObjectType
          Metadata *schemametadata.MetadataSchema
        }{
          Visited:  visited,
          Object:   object,
          Metadata: property.Value,
        }) {
          recursive = true
          break
        }
      }
      props.Collection.SetObjectRecursive(object, recursive)
    }
  }
}

func iterate_metadata_collection_is_array_recursive(props struct {
  Visited  map[*schemametadata.MetadataSchema]bool
  Array    *schemametadata.MetadataArrayType
  Metadata *schemametadata.MetadataSchema
}) bool {
  if props.Metadata == nil || props.Visited[props.Metadata] {
    return false
  }
  props.Visited[props.Metadata] = true
  next := func(metadata *schemametadata.MetadataSchema) bool {
    return iterate_metadata_collection_is_array_recursive(struct {
      Visited  map[*schemametadata.MetadataSchema]bool
      Array    *schemametadata.MetadataArrayType
      Metadata *schemametadata.MetadataSchema
    }{
      Visited:  props.Visited,
      Array:    props.Array,
      Metadata: metadata,
    })
  }
  for _, array := range props.Metadata.Arrays {
    if array.Type == props.Array || next(array.Type.Value) {
      return true
    }
  }
  for _, alias := range props.Metadata.Aliases {
    if next(alias.Type.Value) {
      return true
    }
  }
  for _, tuple := range props.Metadata.Tuples {
    if tuple.Type.Recursive == false {
      for _, elem := range tuple.Type.Elements {
        if next(elem) {
          return true
        }
      }
    }
  }
  for _, m := range props.Metadata.Maps {
    if next(m.Value) {
      return true
    }
  }
  for _, set := range props.Metadata.Sets {
    if next(set.Value) {
      return true
    }
  }
  if props.Metadata.Escaped != nil && next(props.Metadata.Escaped.Returns) {
    return true
  }
  return props.Metadata.Rest != nil && next(props.Metadata.Rest)
}

func iterate_metadata_collection_is_tuple_recursive(props struct {
  Visited  map[*schemametadata.MetadataSchema]bool
  Tuple    *schemametadata.MetadataTupleType
  Metadata *schemametadata.MetadataSchema
}) bool {
  if props.Metadata == nil || props.Visited[props.Metadata] {
    return false
  }
  props.Visited[props.Metadata] = true
  next := func(metadata *schemametadata.MetadataSchema) bool {
    return iterate_metadata_collection_is_tuple_recursive(struct {
      Visited  map[*schemametadata.MetadataSchema]bool
      Tuple    *schemametadata.MetadataTupleType
      Metadata *schemametadata.MetadataSchema
    }{
      Visited:  props.Visited,
      Tuple:    props.Tuple,
      Metadata: metadata,
    })
  }
  for _, tuple := range props.Metadata.Tuples {
    if tuple.Type == props.Tuple {
      return true
    }
    for _, elem := range tuple.Type.Elements {
      if next(elem) {
        return true
      }
    }
  }
  for _, array := range props.Metadata.Arrays {
    if array.Type.Recursive == false && next(array.Type.Value) {
      return true
    }
  }
  for _, m := range props.Metadata.Maps {
    if next(m.Value) {
      return true
    }
  }
  for _, set := range props.Metadata.Sets {
    if next(set.Value) {
      return true
    }
  }
  for _, alias := range props.Metadata.Aliases {
    if next(alias.Type.Value) {
      return true
    }
  }
  if props.Metadata.Escaped != nil && next(props.Metadata.Escaped.Returns) {
    return true
  }
  return props.Metadata.Rest != nil && next(props.Metadata.Rest)
}

func iterate_metadata_collection_is_object_recursive(props struct {
  Visited  map[*schemametadata.MetadataSchema]bool
  Object   *schemametadata.MetadataObjectType
  Metadata *schemametadata.MetadataSchema
}) bool {
  if props.Metadata == nil || props.Visited[props.Metadata] {
    return false
  }
  props.Visited[props.Metadata] = true
  next := func(metadata *schemametadata.MetadataSchema) bool {
    return iterate_metadata_collection_is_object_recursive(struct {
      Visited  map[*schemametadata.MetadataSchema]bool
      Object   *schemametadata.MetadataObjectType
      Metadata *schemametadata.MetadataSchema
    }{
      Visited:  props.Visited,
      Object:   props.Object,
      Metadata: metadata,
    })
  }
  for _, object := range props.Metadata.Objects {
    if object.Type == props.Object {
      return true
    }
    for _, property := range object.Type.Properties {
      if next(property.Value) {
        return true
      }
    }
  }
  for _, alias := range props.Metadata.Aliases {
    if next(alias.Type.Value) {
      return true
    }
  }
  for _, array := range props.Metadata.Arrays {
    if array.Type.Recursive == false && next(array.Type.Value) {
      return true
    }
  }
  for _, tuple := range props.Metadata.Tuples {
    if tuple.Type.Recursive == false {
      for _, elem := range tuple.Type.Elements {
        if next(elem) {
          return true
        }
      }
    }
  }
  for _, m := range props.Metadata.Maps {
    if next(m.Value) {
      return true
    }
  }
  for _, set := range props.Metadata.Sets {
    if next(set.Value) {
      return true
    }
  }
  if props.Metadata.Escaped != nil && next(props.Metadata.Escaped.Returns) {
    return true
  }
  return props.Metadata.Rest != nil && next(props.Metadata.Rest)
}
