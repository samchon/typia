package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufIsDecodeTransformer = protobufIsDecodeTransformerNamespace{}

type protobufIsDecodeTransformerNamespace struct{}

func (protobufIsDecodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufIsDecodeProgrammer.Write(call.TypeText)
}
