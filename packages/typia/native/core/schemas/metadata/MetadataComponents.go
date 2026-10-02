package metadata

// IMetadataComponents is the JSON form of the shared types of a graph: its
// objects, aliases, arrays and tuples.
//
// @evidence contracts/common.md#principled-implementation The shared types are serialized once here and referenced by name elsewhere.
// @evidence contracts/common.md#clear-and-simple-design Four slices.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation Each field describes the shared definitions projected by MetadataCollection.ToJSON.
type IMetadataComponents struct {
  // Objects contains shared object definitions in collection discovery order.
  Objects []IMetadataSchema_IObjectType
  // Aliases contains shared alias definitions in collection discovery order.
  Aliases []IMetadataSchema_IAliasType
  // Arrays contains shared array definitions in collection discovery order.
  Arrays []IMetadataSchema_IArrayType
  // Tuples contains shared tuple definitions in collection discovery order.
  Tuples []IMetadataSchema_ITupleType
}
