package protobuf

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type protobufCreateEncodeTransformerNamespace struct{}

var ProtobufCreateEncodeTransformer = protobufCreateEncodeTransformerNamespace{}

func (protobufCreateEncodeTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "protobuf.createEncode",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativeprotobufprogrammers.ProtobufEncodeProgrammer.Write(nativeprotobufprogrammers.ProtobufEncodeProgrammer_IProps(x))
    },
  })
}
