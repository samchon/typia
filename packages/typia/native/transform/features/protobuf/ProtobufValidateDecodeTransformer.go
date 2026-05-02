package protobuf

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type protobufValidateDecodeTransformerNamespace struct{}

var ProtobufValidateDecodeTransformer = protobufValidateDecodeTransformerNamespace{}

func (protobufValidateDecodeTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "protobuf.validateDecode",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativeprotobufprogrammers.ProtobufValidateDecodeProgrammer.Write(nativeprotobufprogrammers.ProtobufValidateDecodeProgrammer_IProps(x))
    },
  })
}
