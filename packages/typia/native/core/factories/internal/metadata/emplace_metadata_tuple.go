package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Emplace_metadata_tuple returns the collection's entry for the tuple type,
// analyzing its elements the first time it is seen.
//
// Optional elements are marked optional, a trailing rest element is wrapped in a
// rest schema, and a rest element elsewhere is reported as unsupported.
//
// @evidence contracts/common.md#principled-implementation A tuple type is stored once and its element types are the checker's type arguments, each explored in a nested state; an optional element is marked optional, a rest element in the last position is wrapped in a schema with the Rest field, and a rest element anywhere else is reported because the programmers address elements by leading position.
// @evidence contracts/common.md#clear-and-simple-design One function over the collection's emplace service with a closure that receives the elements.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The unsupported position is rejected with a message and not compiled into wrong checks, as the comment records.
// @evidence contracts/common.md#meaningful-documentation The doc states the optional and rest rules.
func Emplace_metadata_tuple(props IMetadataIteratorProps) *schemametadata.MetadataTupleType {
  tuple, newbie, closure := props.Components.EmplaceTuple(
    props.Checker,
    props.Type,
  )
  metadata_array_util_add_bool(&tuple.Nullables, props.Metadata.Nullable)
  if newbie == false {
    return tuple
  }

  flagList := []nativechecker.ElementFlags{}
  if props.Type != nil && nativechecker.IsTupleType(props.Type) {
    flagList = props.Type.TargetTupleType().ElementFlags()
  }
  args := []*nativechecker.Type{}
  if props.Checker != nil {
    args = metadata_get_type_arguments(props.Checker, props.Type)
  }
  elements := make([]*schemametadata.MetadataSchema, 0, len(args))
  for i, elem := range args {
    explore := props.Explore
    explore.Nested = tuple
    explore.Aliased = false
    explore.Escaped = false
    child := Explore_metadata(Explore_metadata_IProps{
      Options:     props.Options,
      Checker:     props.Checker,
      Components:  props.Components,
      Errors:      props.Errors,
      Type:        elem,
      Explore:     explore,
      Intersected: false,
    })
    var flag nativechecker.ElementFlags
    if i < len(flagList) {
      flag = flagList[i]
    }
    if flag == nativechecker.ElementFlagsOptional {
      child.Optional = true
    }
    if flag != nativechecker.ElementFlagsRest {
      elements = append(elements, child)
      continue
    }
    // Every programmer addresses tuple elements by their fixed leading
    // position and slices the rest segment off the end, so a rest element
    // anywhere but the trailing position would compile into positionally
    // wrong checks (issue #1932). Reject it honestly instead.
    if i != len(args)-1 && props.Errors != nil {
      *props.Errors = append(*props.Errors, MetadataFactory_IError{
        Name:     tuple.Name,
        Explore:  props.Explore,
        Messages: []string{"non-trailing rest element in tuple type is not supported."},
      })
    }
    wrapper := schemametadata.MetadataSchema_initialize()
    wrapper.Rest = child
    elements = append(elements, wrapper)
  }
  closure(elements)
  return tuple
}
