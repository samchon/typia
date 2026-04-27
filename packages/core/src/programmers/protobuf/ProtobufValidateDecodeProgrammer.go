package protobuf

var ProtobufValidateDecodeProgrammer = protobufValidateDecodeProgrammerNamespace{}

type protobufValidateDecodeProgrammerNamespace struct{}

func (protobufValidateDecodeProgrammerNamespace) Write(typeText string) string {
	return protobufValidateDecodeFunction(typeText)
}
