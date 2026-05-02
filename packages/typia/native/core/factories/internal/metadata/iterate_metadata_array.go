package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_array(props IMetadataIteratorProps) bool {
  var array *nativechecker.Type
  if props.Checker != nil && nativechecker.Checker_isArrayType(props.Checker, props.Type) {
    array = props.Type
  } else {
    array = iterate_metadata_array_find_array_extended(struct {
      checker *nativechecker.Checker
      memory  map[*nativechecker.Type]*nativechecker.Type
      typ     *nativechecker.Type
    }{
      checker: props.Checker,
      memory:  map[*nativechecker.Type]*nativechecker.Type{},
      typ:     props.Type,
    })
  }
  if array == nil {
    return false
  }

  arrayType := Emplace_metadata_array_type(Emplace_metadata_array_type_IProps{
    IMetadataIteratorProps: props,
    Array:                  array,
  })
  for _, elem := range props.Metadata.Arrays {
    if elem.Type.Name == arrayType.Name {
      return true
    }
  }
  props.Metadata.Arrays = append(props.Metadata.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
    Type: arrayType,
    Tags: [][]schemametadata.IMetadataTypeTag{},
  }))
  return true
}

func iterate_metadata_array_find_array_extended(props struct {
  checker *nativechecker.Checker
  memory  map[*nativechecker.Type]*nativechecker.Type
  typ     *nativechecker.Type
}) *nativechecker.Type {
  if props.checker == nil || props.typ == nil {
    return nil
  }
  if _, ok := props.memory[props.typ]; ok {
    return nil
  }
  props.memory[props.typ] = nil
  if props.typ.ObjectFlags()&nativechecker.ObjectFlagsClassOrInterface == 0 {
    return nil
  }
  for _, base := range nativechecker.Checker_getBaseTypes(props.checker, props.typ) {
    if nativechecker.Checker_isArrayType(props.checker, base) {
      props.memory[props.typ] = base
      return base
    }
    if next := iterate_metadata_array_find_array_extended(struct {
      checker *nativechecker.Checker
      memory  map[*nativechecker.Type]*nativechecker.Type
      typ     *nativechecker.Type
    }{
      checker: props.checker,
      memory:  props.memory,
      typ:     base,
    }); next != nil {
      props.memory[props.typ] = next
      return next
    }
  }
  return nil
}
