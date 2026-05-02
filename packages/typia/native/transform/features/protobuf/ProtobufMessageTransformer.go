package protobuf

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativeprotobufprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/protobuf"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type protobufMessageTransformerNamespace struct{}

var ProtobufMessageTransformer = protobufMessageTransformerNamespace{}

func (protobufMessageTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.protobuf.message",
      Message: "generic argument is not specified.",
    }))
  }
  typ := props.Context.Checker.GetTypeFromTypeNode(props.Expression.TypeArguments.Nodes[0])
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "tyipa.protobuf.message",
      Message: "non-specified generic argument.",
    }))
  }
  return nativeprotobufprogrammers.ProtobufMessageProgrammer.Write(nativeprotobufprogrammers.ProtobufMessageProgrammer_IProps{
    Context: props.Context,
    Type:    typ,
  })
}
