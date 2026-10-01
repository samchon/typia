package context

import (
  "encoding/json"
  "strings"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TransformerError is the error the transform raises for an unsupported input: a
// code and a message.
//
// @evidence contracts/common.md#principled-implementation The error carries a stable code and a message, and its Error method returns the message, which is what the host prints as the diagnostic.
// @evidence contracts/common.md#clear-and-simple-design Two fields and one method.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the contents.
type TransformerError struct {
  Code    string
  Message string
}

// NewTransformerError creates a TransformerError from its properties.
//
// @evidence contracts/common.md#principled-implementation The constructor copies the code and message from the properties.
// @evidence contracts/common.md#clear-and-simple-design One function.
// @evidence contracts/common.md#prohibited-implementation-shortcuts It adds no state.
// @evidence contracts/common.md#meaningful-documentation The doc states what it creates.
func NewTransformerError(props TransformerError_IProps) *TransformerError {
  return &TransformerError{
    Code:    props.Code,
    Message: props.Message,
  }
}

// Error returns the message.
//
// @evidence contracts/common.md#principled-implementation Returning the message makes the type satisfy the error interface without altering the text.
// @evidence contracts/common.md#clear-and-simple-design One method.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A plain accessor.
// @evidence contracts/common.md#meaningful-documentation The doc states the return.
func (err *TransformerError) Error() string {
  return err.Message
}

// TransformerError_IProps holds the properties of a TransformerError.
//
// @evidence contracts/common.md#principled-implementation The properties are the code and the message.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what it holds.
type TransformerError_IProps struct {
  Code    string
  Message string
}

// TransformerError_MetadataFactory_IError describes one unsupported type: its
// name, where it was found and the reasons.
//
// @evidence contracts/common.md#principled-implementation One unsupported type is described by its name, where it was found and the list of reasons.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states each part.
type TransformerError_MetadataFactory_IError struct {
  Name     string
  Explore  TransformerError_MetadataFactory_IExplore
  Messages []string
}

// TransformerError_MetadataFactory_IExplore locates a metadata error: the object
// type, the property key or key marker, the parameter or whether it is the return
// type.
//
// @evidence contracts/common.md#principled-implementation The location is an object type with an optional property key, which may be a string or a non-string key marker, an optional parameter and a flag for a return type, so the message can say which part of a signature failed; the property and parameter are typed any because they come from different producers.
// @evidence contracts/common.md#clear-and-simple-design Four fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the location parts.
type TransformerError_MetadataFactory_IExplore struct {
  Object    *nativemetadata.MetadataObjectType
  Property  any
  Parameter any
  Output    bool
}

// TransformerError_from builds the "unsupported type detected" error from a list
// of metadata errors, one bullet per type with its location and indented reasons.
//
// @evidence contracts/common.md#principled-implementation Each error becomes a bullet with the type, prefixed with its object and property path and a marker for a parameter or return type, followed by its reasons indented, and the bullets are joined under a fixed header; property keys that are legal identifiers use dot access and others a JSON-quoted bracket form, and keys that are not strings are shown as `[key]`.
// @evidence contracts/common.md#clear-and-simple-design One function with three small private helpers for path joining, identifier testing and JSON encoding.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The text format is the diagnostic contract and nothing is keyed on a type name.
// @evidence contracts/common.md#meaningful-documentation The doc states the output shape.
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
