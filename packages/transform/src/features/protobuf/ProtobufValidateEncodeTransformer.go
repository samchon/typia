package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufValidateEncodeTransformer = protobufValidateEncodeTransformerNamespace{}

type protobufValidateEncodeTransformerNamespace struct{}

func (protobufValidateEncodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufValidateEncodeProgrammer.Write(call.TypeText)
}
