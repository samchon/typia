package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufDecodeTransformer = protobufDecodeTransformerNamespace{}

type protobufDecodeTransformerNamespace struct{}

func (protobufDecodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufDecodeProgrammer.Write(call.TypeText)
}
