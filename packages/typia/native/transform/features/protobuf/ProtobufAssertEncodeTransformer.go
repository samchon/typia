package protobuf

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type protobufAssertEncodeTransformerNamespace struct{}

var ProtobufAssertEncodeTransformer = protobufAssertEncodeTransformerNamespace{}

func (protobufAssertEncodeTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "protobuf.assertEncode",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativeprotobufprogrammers.ProtobufAssertEncodeProgrammer.Write(nativeprotobufprogrammers.ProtobufAssertEncodeProgrammer_IProps(x))
    },
  })
}
