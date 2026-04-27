package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufCreateIsDecodeTransformer = protobufCreateIsDecodeTransformerNamespace{}

type protobufCreateIsDecodeTransformerNamespace struct{}

func (protobufCreateIsDecodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufIsDecodeProgrammer.Write(call.TypeText)
}
