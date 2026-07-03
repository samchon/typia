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
  objects := props.Collection.Objects()
  for _, object := range objects {
    Iterate_metadata_comment_tags(struct {
      Errors *[]MetadataFactory_IError
      Object *schemametadata.MetadataObjectType
    }{
      Errors: props.Errors,
      Object: object,
    })
  }
  iterate_metadata_collection_mark_object_recursives(props.Collection, objects)
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
    if next(m.Key) || next(m.Value) {
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
    if next(m.Key) || next(m.Value) {
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

func iterate_metadata_collection_mark_object_recursives(
  collection *schemametadata.MetadataCollection,
  objects []*schemametadata.MetadataObjectType,
) {
  edges := map[*schemametadata.MetadataObjectType]map[*schemametadata.MetadataObjectType]bool{}
  for _, object := range objects {
    if object == nil {
      continue
    }
    output := map[*schemametadata.MetadataObjectType]bool{}
    for _, property := range object.Properties {
      iterate_metadata_collection_collect_object_edges(struct {
        Visited  map[*schemametadata.MetadataSchema]bool
        Output   map[*schemametadata.MetadataObjectType]bool
        Metadata *schemametadata.MetadataSchema
      }{
        Visited:  map[*schemametadata.MetadataSchema]bool{},
        Output:   output,
        Metadata: property.Value,
      })
    }
    edges[object] = output
  }

  index := 0
  indexes := map[*schemametadata.MetadataObjectType]int{}
  lowlinks := map[*schemametadata.MetadataObjectType]int{}
  onStack := map[*schemametadata.MetadataObjectType]bool{}
  stack := []*schemametadata.MetadataObjectType{}
  var strongconnect func(*schemametadata.MetadataObjectType)
  strongconnect = func(object *schemametadata.MetadataObjectType) {
    indexes[object] = index
    lowlinks[object] = index
    index++
    stack = append(stack, object)
    onStack[object] = true

    for next := range edges[object] {
      if _, ok := indexes[next]; ok == false {
        strongconnect(next)
        if lowlinks[next] < lowlinks[object] {
          lowlinks[object] = lowlinks[next]
        }
      } else if onStack[next] && indexes[next] < lowlinks[object] {
        lowlinks[object] = indexes[next]
      }
    }

    if lowlinks[object] != indexes[object] {
      return
    }
    component := []*schemametadata.MetadataObjectType{}
    for {
      last := stack[len(stack)-1]
      stack = stack[:len(stack)-1]
      onStack[last] = false
      component = append(component, last)
      if last == object {
        break
      }
    }
    recursive := len(component) > 1
    if recursive == false {
      recursive = edges[object][object]
    }
    if recursive {
      for _, elem := range component {
        collection.SetObjectRecursive(elem, true)
      }
    }
  }
  for _, object := range objects {
    if object == nil {
      continue
    }
    if _, ok := indexes[object]; ok == false {
      strongconnect(object)
    }
  }
}

func iterate_metadata_collection_collect_object_edges(props struct {
  Visited  map[*schemametadata.MetadataSchema]bool
  Output   map[*schemametadata.MetadataObjectType]bool
  Metadata *schemametadata.MetadataSchema
}) {
  if props.Metadata == nil || props.Visited[props.Metadata] {
    return
  }
  props.Visited[props.Metadata] = true
  next := func(metadata *schemametadata.MetadataSchema) {
    iterate_metadata_collection_collect_object_edges(struct {
      Visited  map[*schemametadata.MetadataSchema]bool
      Output   map[*schemametadata.MetadataObjectType]bool
      Metadata *schemametadata.MetadataSchema
    }{
      Visited:  props.Visited,
      Output:   props.Output,
      Metadata: metadata,
    })
  }
  for _, object := range props.Metadata.Objects {
    if object.Type != nil {
      props.Output[object.Type] = true
    }
  }
  for _, alias := range props.Metadata.Aliases {
    if alias.Type != nil {
      next(alias.Type.Value)
    }
  }
  for _, array := range props.Metadata.Arrays {
    if array.Type != nil && array.Type.Recursive == false {
      next(array.Type.Value)
    }
  }
  for _, tuple := range props.Metadata.Tuples {
    if tuple.Type != nil && tuple.Type.Recursive == false {
      for _, elem := range tuple.Type.Elements {
        next(elem)
      }
    }
  }
  for _, m := range props.Metadata.Maps {
    next(m.Key)
    next(m.Value)
  }
  for _, set := range props.Metadata.Sets {
    next(set.Value)
  }
  if props.Metadata.Escaped != nil {
    next(props.Metadata.Escaped.Returns)
  }
  next(props.Metadata.Rest)
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
    if next(m.Key) || next(m.Value) {
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
