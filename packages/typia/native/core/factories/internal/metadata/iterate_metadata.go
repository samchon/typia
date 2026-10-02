package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Iterate_metadata fills a metadata schema from a type by trying the iterators in
// a fixed order until one accepts it.
//
// Aliases, intersections, unions and escapes come first, then any, null and
// undefined-like types, functions, constants, templates, atomics, tuples, arrays,
// natives, maps, sets and finally objects. A type parameter is reported as an
// error.
//
// @evidence contracts/common.md#principled-implementation The chain tries each iterator in a fixed order and stops at the first that accepts: alias, intersection, union and escape first so wrappers are expanded before their contents, then special types, functions, constants, templates, atomics, tuples, arrays, natives, maps, sets and objects, with object last as the catch-all; an unresolved type parameter is an error. Every type that the analysis reads passes through the first dependency touch, so the transform host learns every declaration file consulted.
// @evidence contracts/common.md#clear-and-simple-design One function that is the dispatcher, with each iterator owning one type kind; adding a kind means adding an iterator and a position in the order.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The order is explicit and documented here, not left to side effects; the dependency touch is one call at the entry, not a patch of the checker.
// @evidence contracts/common.md#meaningful-documentation The doc lists the order and the comment explains the dependency touch.
func Iterate_metadata(props IMetadataIteratorProps) {
  if props.Type == nil {
    return
  }
  // Every type the analysis reads funnels through here (top types, union and
  // intersection members, alias targets, array / tuple elements, generic
  // arguments, property types), so this single touch reports the declaration
  // files of the whole consulted type graph to the dependency listener the
  // project transform host registers (see schemas/metadata/MetadataDependency).
  schemametadata.MetadataDependency_touchType(props.Checker, props.Type)
  if props.Type.IsTypeParameter() == true {
    if props.Errors != nil {
      *props.Errors = append(*props.Errors, MetadataFactory_IError{
        Name:     metadata_type_full_name(props.Checker, props.Type, props.Components),
        Explore:  props.Explore,
        Messages: []string{"non-specified generic argument found."},
      })
    }
    return
  }

  if (props.Explore.Aliased != true && Iterate_metadata_alias(props)) ||
    Iterate_metadata_intersection(props) ||
    Iterate_metadata_union(props) ||
    Iterate_metadata_escape(props) {
    return
  }

  if Iterate_metadata_coalesce(struct {
    Metadata *schemametadata.MetadataSchema
    Type     *nativechecker.Type
  }{
    Metadata: props.Metadata,
    Type:     props.Type,
  }) ||
    Iterate_metadata_function(props) ||
    Iterate_metadata_constant(props) ||
    Iterate_metadata_template(props) ||
    Iterate_metadata_atomic(struct {
      Metadata *schemametadata.MetadataSchema
      Type     *nativechecker.Type
    }{
      Metadata: props.Metadata,
      Type:     props.Type,
    }) ||
    Iterate_metadata_tuple(props) ||
    Iterate_metadata_array(props) ||
    Iterate_metadata_native(props) ||
    Iterate_metadata_map(props) ||
    Iterate_metadata_set(props) ||
    Iterate_metadata_object(props) {
    return
  }
}
