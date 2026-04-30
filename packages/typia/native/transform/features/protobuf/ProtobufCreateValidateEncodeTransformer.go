package protobuf

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type protobufCreateValidateEncodeTransformerNamespace struct{}

var ProtobufCreateValidateEncodeTransformer = protobufCreateValidateEncodeTransformerNamespace{}

func (protobufCreateValidateEncodeTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
	return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
		ITransformProps: props,
		Method:          "protobuf.createValidateEncode",
		Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
			return nativeprotobufprogrammers.ProtobufValidateEncodeProgrammer.Write(nativeprotobufprogrammers.ProtobufValidateEncodeProgrammer_IProps(x))
		},
	})
}
