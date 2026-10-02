package internal

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type genericTransformerNamespace struct{}

var GenericTransformer = genericTransformerNamespace{}

// ITransformProps is the input of a feature transformer: the context, the module
// expression and the call expression.
//
// @evidence contracts/common.md#principled-implementation A feature transformer receives the context, the module expression and the call.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the three parts.
type ITransformProps struct {
  Context    nativecontext.ITypiaContext
  Modulo     *shimast.Node
  Expression *shimast.CallExpression
}

// The transform reports unsupported input with the error that the programmers
// raise, so one type and one message format serve both layers.
// TransformerError is the error that the transform raises for an unsupported
// input. It aliases the programmers' type.
//
// @evidence contracts/common.md#principled-implementation The transform layer raises the programmers' error type, which makes one type and one message format serve both layers.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states that it aliases the programmers' type.
type TransformerError = nativecontext.TransformerError

// TransformerError_IProps holds the properties of a TransformerError.
//
// @evidence contracts/common.md#principled-implementation The properties are the programmers' record under this package's name.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what it holds.
type TransformerError_IProps = nativecontext.TransformerError_IProps

// TransformerError_MetadataFactory_IError describes one unsupported type.
//
// @evidence contracts/common.md#principled-implementation One unsupported type is described by the programmers' record under this package's name.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what it describes.
type TransformerError_MetadataFactory_IError = nativecontext.TransformerError_MetadataFactory_IError

// TransformerError_MetadataFactory_IExplore locates a metadata error.
//
// @evidence contracts/common.md#principled-implementation The location of an unsupported type is the programmers' record under this package's name.
// @evidence contracts/common.md#clear-and-simple-design A type alias.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states what it locates.
type TransformerError_MetadataFactory_IExplore = nativecontext.TransformerError_MetadataFactory_IExplore

// NewTransformerError creates a TransformerError from its properties.
var NewTransformerError = nativecontext.NewTransformerError

// TransformerError_from builds the error that lists unsupported types.
var TransformerError_from = nativecontext.TransformerError_from

// GenericTransformer_IProps is a feature transformer's input plus the typia
// method name for diagnostics and the programmer that writes the code.
//
// @evidence contracts/common.md#principled-implementation The scalar and factory transformers share the feature input and add the method name that diagnostics cite and the programmer that writes the code.
// @evidence contracts/common.md#clear-and-simple-design An embedded record and two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the added fields.
type GenericTransformer_IProps struct {
  ITransformProps
  Method string
  Write  func(props nativecontext.IProgrammerProps) *shimast.Node
}

var genericTransformer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (genericTransformerNamespace) Scalar(props GenericTransformer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(genericTransformer_factory, props.Context.Emit)
  if props.Expression == nil || props.Expression.Arguments == nil || len(props.Expression.Arguments.Nodes) == 0 {
    panic(NewTransformerError(TransformerError_IProps{
      Code:    "typia." + props.Method,
      Message: "no input value.",
    }))
  }

  var typ = props.Context.Checker.GetTypeAtLocation(props.Expression.Arguments.Nodes[0])
  var node *shimast.Node = props.Expression.Arguments.Nodes[0]
  generic := false
  if props.Expression.TypeArguments != nil && len(props.Expression.TypeArguments.Nodes) != 0 {
    node = props.Expression.TypeArguments.Nodes[0]
    typ = props.Context.Checker.GetTypeFromTypeNode(node)
    generic = true
  }
  if typ != nil && typ.IsTypeParameter() {
    panic(NewTransformerError(TransformerError_IProps{
      Code:    "typia." + props.Method,
      Message: "non-specified generic argument.",
    }))
  }

  name := ""
  if generic {
    name = genericTransformer_node_text(node)
  } else {
    name = genericTransformer_getTypeName(genericTransformer_getTypeNameProps{
      Context: props.Context,
      Type:    typ,
      Node:    node,
    })
  }
  return f.NewCallExpression(
    props.Write(nativecontext.IProgrammerProps{
      Context: props.Context,
      Modulo:  props.Modulo,
      Type:    typ,
      Name:    &name,
    }),
    nil,
    nil,
    props.Expression.Arguments,
    shimast.NodeFlagsNone,
  )
}

func (genericTransformerNamespace) Factory(props GenericTransformer_IProps) *shimast.Node {
  if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
    panic(NewTransformerError(TransformerError_IProps{
      Code:    "typia." + props.Method,
      Message: "generic argument is not specified.",
    }))
  }
  node := props.Expression.TypeArguments.Nodes[0]
  typ := props.Context.Checker.GetTypeFromTypeNode(node)
  if typ != nil && typ.IsTypeParameter() {
    panic(NewTransformerError(TransformerError_IProps{
      Code:    "typia." + props.Method,
      Message: "non-specified generic argument.",
    }))
  }
  name := genericTransformer_node_text(node)
  var init *shimast.Node
  if props.Expression.Arguments != nil && len(props.Expression.Arguments.Nodes) != 0 {
    init = props.Expression.Arguments.Nodes[0]
  }
  return props.Write(nativecontext.IProgrammerProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Type:    typ,
    Name:    &name,
    Init:    init,
  })
}

func genericTransformer_node_text(node *shimast.Node) string {
  if node == nil {
    return ""
  }
  return strings.TrimSpace(shimscanner.GetTextOfNode(node))
}

type genericTransformer_getTypeNameProps struct {
  Context nativecontext.ITypiaContext
  Type    *shimchecker.Type
  Node    *shimast.Node
}

func genericTransformer_getTypeName(props genericTransformer_getTypeNameProps) string {
  if props.Context.Checker == nil || props.Type == nil {
    return ""
  }
  return props.Context.Checker.TypeToString(props.Type)
}
