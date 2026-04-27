package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufCreateIsEncodeTransformer = protobufCreateIsEncodeTransformerNamespace{}

type protobufCreateIsEncodeTransformerNamespace struct{}

func (protobufCreateIsEncodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufIsEncodeProgrammer.Write(call.TypeText)
}
