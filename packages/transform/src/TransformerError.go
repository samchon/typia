package transform

import (
	"fmt"
	"strings"
)

type TransformerError struct {
	Code    string
	Message string
}

func (e TransformerError) Error() string {
	return e.Message
}

type TransformerErrorProps struct {
	Code    string
	Message string
}

func NewTransformerError(props TransformerErrorProps) TransformerError {
	return TransformerError{Code: props.Code, Message: props.Message}
}

type TransformerMetadataError struct {
	Name     string
	Messages []string
}

func TransformerErrorFrom(props struct {
	Code   string
	Errors []TransformerMetadataError
}) TransformerError {
	lines := make([]string, 0, len(props.Errors))
	for _, err := range props.Errors {
		messages := make([]string, 0, len(err.Messages))
		for _, msg := range err.Messages {
			messages = append(messages, "  - "+msg)
		}
		lines = append(lines, "- "+err.Name+"\n"+strings.Join(messages, "\n"))
	}
	return TransformerError{
		Code:    props.Code,
		Message: fmt.Sprintf("unsupported type detected\n\n%s", strings.Join(lines, "\n\n")),
	}
}
