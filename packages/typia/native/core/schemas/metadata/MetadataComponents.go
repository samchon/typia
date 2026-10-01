package metadata

// IMetadataComponents is the JSON form of the shared types of a graph: its
// objects, aliases, arrays and tuples.
//
// @evidence contracts/common.md#principled-implementation The shared types are serialized once here and referenced by name elsewhere.
// @evidence contracts/common.md#clear-and-simple-design Four slices.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataComponents struct {
  Objects []IMetadataSchema_IObjectType
  Aliases []IMetadataSchema_IAliasType
  Arrays  []IMetadataSchema_IArrayType
  Tuples  []IMetadataSchema_ITupleType
}
