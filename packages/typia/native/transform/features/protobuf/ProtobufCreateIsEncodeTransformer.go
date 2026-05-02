package protobuf

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type protobufCreateIsEncodeTransformerNamespace struct{}

var ProtobufCreateIsEncodeTransformer = protobufCreateIsEncodeTransformerNamespace{}

func (protobufCreateIsEncodeTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "protobuf.createIsEncode",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativeprotobufprogrammers.ProtobufIsEncodeProgrammer.Write(nativeprotobufprogrammers.ProtobufIsEncodeProgrammer_IProps(x))
    },
  })
}
