package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufValidateDecodeTransformer = protobufValidateDecodeTransformerNamespace{}

type protobufValidateDecodeTransformerNamespace struct{}

func (protobufValidateDecodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufValidateDecodeProgrammer.Write(call.TypeText)
}
