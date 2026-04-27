package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufMessageTransformer = protobufMessageTransformerNamespace{}

type protobufMessageTransformerNamespace struct{}

func (protobufMessageTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufMessageProgrammer.Write(call.TypeText)
}
