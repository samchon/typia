package protobuf

var ProtobufDecodeProgrammer = protobufDecodeProgrammerNamespace{}

type protobufDecodeProgrammerNamespace struct{}

func (protobufDecodeProgrammerNamespace) Write(typeText string) string {
	return protobufDecodeFunction(typeText)
}
