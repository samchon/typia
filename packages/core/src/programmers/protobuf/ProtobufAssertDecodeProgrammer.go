package protobuf

var ProtobufAssertDecodeProgrammer = protobufAssertDecodeProgrammerNamespace{}

type protobufAssertDecodeProgrammerNamespace struct{}

func (protobufAssertDecodeProgrammerNamespace) Write(typeText string) string {
	return protobufAssertDecodeFunction(typeText)
}
