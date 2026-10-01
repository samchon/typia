package metadata

// IMetadataDictionary maps type names to the shared object, alias, array and
// tuple types of one metadata graph, so that references in a schema resolve to
// the same type value instead of copies.
//
// @evidence contracts/common.md#principled-implementation A schema refers to objects, aliases, arrays and tuples by name, so the graph needs one place that owns each type once; four name-keyed maps give every reference the same pointer and let recursive types close their cycles.
// @evidence contracts/common.md#clear-and-simple-design Four maps, one per shared kind, read by the `_from` constructors.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the sharing it provides.
type IMetadataDictionary struct {
  Objects map[string]*MetadataObjectType
  Aliases map[string]*MetadataAliasType
  Arrays  map[string]*MetadataArrayType
  Tuples  map[string]*MetadataTupleType
}
