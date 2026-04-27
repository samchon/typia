package protobuf

var ProtobufIsEncodeProgrammer = protobufIsEncodeProgrammerNamespace{}

type protobufIsEncodeProgrammerNamespace struct{}

func (protobufIsEncodeProgrammerNamespace) Write(typeText string) string {
	return protobufIsEncodeFunction(typeText)
}
