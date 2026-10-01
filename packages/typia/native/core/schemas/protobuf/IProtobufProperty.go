package protobuf

// IProtobufProperty is the protobuf form of one object property: the Union of
// encodings it may take, and Fixed, which is true when every member of the union
// already has a field number from its tags.
//
// @evidence contracts/common.md#principled-implementation A property may be a union of several protobuf encodings and its field numbers are either all taken from tags or assigned in order, so the record holds the union and the fixedness that EmplaceObject reads.
// @evidence contracts/common.md#clear-and-simple-design A two-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names both fields.
type IProtobufProperty struct {
  Fixed bool
  Union []IProtobufPropertyType
}
