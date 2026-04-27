package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufCreateEncodeTransformer = protobufCreateEncodeTransformerNamespace{}

type protobufCreateEncodeTransformerNamespace struct{}

func (protobufCreateEncodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufEncodeProgrammer.Write(call.TypeText)
}
