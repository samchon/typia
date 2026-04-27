package protobuf

var ProtobufValidateEncodeProgrammer = protobufValidateEncodeProgrammerNamespace{}

type protobufValidateEncodeProgrammerNamespace struct{}

func (protobufValidateEncodeProgrammerNamespace) Write(typeText string) string {
	return protobufValidateEncodeFunction(typeText)
}
