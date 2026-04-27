package helpers

type ProtobufWire int

const (
	ProtobufWireVariant    ProtobufWire = 0
	ProtobufWireI64        ProtobufWire = 1
	ProtobufWireLen        ProtobufWire = 2
	ProtobufWireStartGroup ProtobufWire = 3
	ProtobufWireEndGroup   ProtobufWire = 4
	ProtobufWireI32        ProtobufWire = 5
)
