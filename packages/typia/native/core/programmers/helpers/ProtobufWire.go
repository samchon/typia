package helpers

type ProtobufWire int

const (
  VARIANT ProtobufWire = 0
  I64     ProtobufWire = 1
  LEN     ProtobufWire = 2

  START_GROUP ProtobufWire = 3
  END_GROUP   ProtobufWire = 4

  I32 ProtobufWire = 5
)
