package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

// Emplace_metadata_alias returns the collection's alias entry for the type,
// recording a new one with its documentation and the analyzed target; a known one
// only records another nullability.
//
// @evidence contracts/common.md#principled-implementation An alias is stored once per type in the collection and a repeat only records another nullability, so a recursive or shared alias is analyzed once; the first time its documentation is read from the alias symbol, skipping default-library declarations, and its target type is explored with the aliased state so the target is not wrapped in the same alias again.
// @evidence contracts/common.md#clear-and-simple-design One function over the collection's emplace service, which returns whether the entry is new.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Library aliases do not leak their documentation, as the comment states.
// @evidence contracts/common.md#meaningful-documentation The doc states the once-per-type rule and the documentation source.
func Emplace_metadata_alias(props IMetadataIteratorProps) *schemametadata.MetadataAliasType {
  symbol := props.Type.Symbol()
  if typeName := nativechecker_type_name_symbol(props.Type); typeName != nil {
    symbol = typeName
  }
  alias, newbie, closure := props.Components.EmplaceAlias(
    props.Checker,
    props.Type,
  )
  metadata_array_util_add_bool(&alias.Nullables, props.Metadata.Nullable)
  if newbie == false {
    return alias
  }

  // The collection creates the entry without documentation (the AST JSDoc
  // helpers live in this factory package), so fill it here from the alias symbol. The
  // type-level readers skip default-library declarations, so a standard-library
  // alias such as `NonNullable<...>` does not leak its own JSDoc.
  alias.Description = metadata_node_type_description(symbol)
  alias.JsDocTags = metadata_node_type_js_doc_tags(symbol)

  explore := props.Explore
  explore.Escaped = false
  explore.Aliased = true
  value := Explore_metadata(Explore_metadata_IProps{
    Options:     props.Options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Type:        props.Type,
    Explore:     explore,
    Intersected: false,
  })
  closure(value)
  return alias
}
