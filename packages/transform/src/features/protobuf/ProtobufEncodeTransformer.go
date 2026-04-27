package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufEncodeTransformer = protobufEncodeTransformerNamespace{}

type protobufEncodeTransformerNamespace struct{}

func (protobufEncodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufEncodeProgrammer.Write(call.TypeText)
}
