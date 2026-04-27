package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufIsEncodeTransformer = protobufIsEncodeTransformerNamespace{}

type protobufIsEncodeTransformerNamespace struct{}

func (protobufIsEncodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufIsEncodeProgrammer.Write(call.TypeText)
}
