package internal

import (
  "encoding/json"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type genericTransformerNamespace struct{}

var GenericTransformer = genericTransformerNamespace{}

type ITransformProps struct {
  Context    nativecontext.ITypiaContext
  Modulo     *shimast.Node
  Expression *shimast.CallExpression
}

type TransformerError struct {
  Code    string
  Message string
}

func NewTransformerError(props TransformerError_IProps) *TransformerError {
  return &TransformerError{
    Code:    props.Code,
    Message: props.Message,
  }
}

func (err *TransformerError) Error() string {
  return err.Message
}

type TransformerError_IProps struct {
  Code    string
  Message string
}

type TransformerError_MetadataFactory_IError struct {
  Name     string
  Explore  TransformerError_MetadataFactory_IExplore
  Messages []string
}

type TransformerError_MetadataFactory_IExplore struct {
  Object    *nativemetadata.MetadataObjectType
  Property  any
  Parameter any
  Output    bool
}

func TransformerError_from(props struct {
  Code   string
  Errors []TransformerError_MetadataFactory_IError
}) *TransformerError {
  lines := make([]string, 0, len(props.Errors))
  for _, err := range props.Errors {
    subject := ""
    if err.Explore.Object != nil {
      subject = transformerError_join(err.Explore.Object, err.Explore.Property)
    }
    middle := ""
    if err.Explore.Parameter != nil {
      middle = "(parameter: " + transformerError_json(err.Explore.Parameter) + ")"
    } else if err.Explore.Output {
      middle = "(return type)"
    }
    typ := err.Name
    if subject != "" {
      typ = subject + ": " + typ
    }
    messages := make([]string, 0, len(err.Messages))
    for _, msg := range err.Messages {
      messages = append(messages, "  - "+msg)
    }
    lines = append(lines, "- "+typ+middle+"\n"+strings.Join(messages, "\n"))
  }
  return NewTransformerError(TransformerError_IProps{
    Code:    props.Code,
    Message: "unsupported type detected\n\n" + strings.Join(lines, "\n\n"),
  })
}

func transformerError_join(object *nativemetadata.MetadataObjectType, key any) string {
  if key == nil {
    return object.Name
  }
  if _, ok := key.(map[string]any); ok {
    return object.Name + "[key]"
  }
  if str, ok := key.(string); ok {
    if transformerError_variable(str) {
      return object.Name + "." + str
    }
    return object.Name + "[" + transformerError_json(str) + "]"
  }
  return object.Name + "[key]"
}

func transformerError_variable(str string) bool {
  if str == "" {
    return false
  }
  for i, ch := range str {
    if i == 0 {
      if ('A' <= ch && ch <= 'Z') || ('a' <= ch && ch <= 'z') || ch == '_' || ch == '$' {
        continue
      }
      return false
    }
    if ('A' <= ch && ch <= 'Z') || ('a' <= ch && ch <= 'z') || ('0' <= ch && ch <= '9') || ch == '_' || ch == '$' {
      continue
    }
    return false
  }
  return true
}

func transformerError_json(value any) string {
  data, err := json.Marshal(value)
  if err != nil {
    return "null"
  }
  return string(data)
}

type GenericTransformer_IProps struct {
  ITransformProps
  Method string
  Write  func(props nativecontext.IProgrammerProps) *shimast.Node
}

var genericTransformer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (genericTransformerNamespace) Scalar(props GenericTransformer_IProps) *shimast.Node {
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
  return genericTransformer_factory.NewCallExpression(
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
