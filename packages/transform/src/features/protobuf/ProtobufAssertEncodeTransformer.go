package protobuf

import (
	coreprotobuf "github.com/samchon/typia/packages/core/src/programmers/protobuf"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ProtobufAssertEncodeTransformer = protobufAssertEncodeTransformerNamespace{}

type protobufAssertEncodeTransformerNamespace struct{}

func (protobufAssertEncodeTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coreprotobuf.ProtobufAssertEncodeProgrammer.Write(call.TypeText)
}
