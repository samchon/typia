package protobuf

var ProtobufIsDecodeProgrammer = protobufIsDecodeProgrammerNamespace{}

type protobufIsDecodeProgrammerNamespace struct{}

func (protobufIsDecodeProgrammerNamespace) Write(typeText string) string {
	return protobufIsDecodeFunction(typeText)
}
