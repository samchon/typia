package protobuf

var ProtobufAssertEncodeProgrammer = protobufAssertEncodeProgrammerNamespace{}

type protobufAssertEncodeProgrammerNamespace struct{}

func (protobufAssertEncodeProgrammerNamespace) Write(typeText string) string {
	return protobufAssertEncodeFunction(typeText)
}
