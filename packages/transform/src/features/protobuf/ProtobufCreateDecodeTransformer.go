package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufCreateDecodeTransformer = protobufCreateDecodeTransformerNamespace{}

type protobufCreateDecodeTransformerNamespace struct{}

func (protobufCreateDecodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufDecodeProgrammer.Write(call.TypeText)
}
