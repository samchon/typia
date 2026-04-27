package protobuf

var ProtobufMessageProgrammer = protobufMessageProgrammerNamespace{}

type protobufMessageProgrammerNamespace struct{}

func (protobufMessageProgrammerNamespace) Write(typeText string) string {
	return protobufMessage(typeText)
}
