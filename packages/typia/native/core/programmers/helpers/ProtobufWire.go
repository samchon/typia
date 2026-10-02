package helpers

// ProtobufWire is the wire type of a protobuf field. The values follow the
// protobuf encoding specification: 0 varint (spelled VARIANT here), 1 64-bit, 2
// length-delimited, 3 start group, 4 end group, 5 32-bit.
//
// @evidence contracts/common.md#principled-implementation It is the wire type of a protobuf field. The values follow the protobuf encoding specification: 0 varint (spelled VARIANT here), 1 64-bit, 2 length-delimited, 3 start group, 4 end group, 5 32-bit.
// @evidence contracts/common.md#clear-and-simple-design A single type declaration.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what the type is.
type ProtobufWire int

const (
  VARIANT ProtobufWire = 0
  I64     ProtobufWire = 1
  LEN     ProtobufWire = 2

  START_GROUP ProtobufWire = 3
  END_GROUP   ProtobufWire = 4

  I32 ProtobufWire = 5
)
