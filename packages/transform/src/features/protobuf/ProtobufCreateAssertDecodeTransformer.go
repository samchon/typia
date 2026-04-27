package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufCreateAssertDecodeTransformer = protobufCreateAssertDecodeTransformerNamespace{}

type protobufCreateAssertDecodeTransformerNamespace struct{}

func (protobufCreateAssertDecodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufAssertDecodeProgrammer.Write(call.TypeText)
}
