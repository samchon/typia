package protobuf

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type protobufIsEncodeTransformerNamespace struct{}

var ProtobufIsEncodeTransformer = protobufIsEncodeTransformerNamespace{}

func (protobufIsEncodeTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
	return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
		ITransformProps: props,
		Method:          "protobuf.isEncode",
		Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
			return nativeprotobufprogrammers.ProtobufIsEncodeProgrammer.Write(nativeprotobufprogrammers.ProtobufIsEncodeProgrammer_IProps(x))
		},
	})
}
