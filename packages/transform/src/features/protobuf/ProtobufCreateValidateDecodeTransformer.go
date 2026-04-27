package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufCreateValidateDecodeTransformer = protobufCreateValidateDecodeTransformerNamespace{}

type protobufCreateValidateDecodeTransformerNamespace struct{}

func (protobufCreateValidateDecodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufValidateDecodeProgrammer.Write(call.TypeText)
}
