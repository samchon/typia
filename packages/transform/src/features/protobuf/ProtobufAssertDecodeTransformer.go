package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufAssertDecodeTransformer = protobufAssertDecodeTransformerNamespace{}

type protobufAssertDecodeTransformerNamespace struct{}

func (protobufAssertDecodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufAssertDecodeProgrammer.Write(call.TypeText)
}
