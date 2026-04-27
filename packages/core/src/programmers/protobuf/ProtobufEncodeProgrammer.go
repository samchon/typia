package protobuf

var ProtobufEncodeProgrammer = protobufEncodeProgrammerNamespace{}

type protobufEncodeProgrammerNamespace struct{}

func (protobufEncodeProgrammerNamespace) Write(typeText string) string {
	return protobufEncodeFunction(typeText)
}
