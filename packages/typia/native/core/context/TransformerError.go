package context

import (
  "encoding/json"
  "strings"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

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
