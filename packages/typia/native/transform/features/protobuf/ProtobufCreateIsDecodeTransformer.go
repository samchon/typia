package protobuf

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type protobufCreateIsDecodeTransformerNamespace struct{}

var ProtobufCreateIsDecodeTransformer = protobufCreateIsDecodeTransformerNamespace{}

func (protobufCreateIsDecodeTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
	return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
		ITransformProps: props,
		Method:          "protobuf.createIsDecode",
		Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
			return nativeprotobufprogrammers.ProtobufIsDecodeProgrammer.Write(nativeprotobufprogrammers.ProtobufIsDecodeProgrammer_IProps(x))
		},
	})
}
