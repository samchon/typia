package context

import (
	"fmt"
	"strings"
)

type TransformerError struct {
	Code    string
	Message string
}

func (err TransformerError) Error() string {
	return err.Message
}

type TransformerErrorProps struct {
	Code    string
	Message string
}

type TransformerErrorFromProps struct {
	Code   string
	Errors []MetadataFactoryError
}

type MetadataFactoryError struct {
	Name     string
	Messages []string
	Explore  MetadataFactoryErrorExplore
}

type MetadataFactoryErrorExplore struct {
	Object    *MetadataObjectType
	Property  any
	Parameter *string
	Output    bool
}

type MetadataObjectType struct {
	Name string
}

var TransformerErrorNamespace = transformerErrorNamespace{}

type transformerErrorNamespace struct{}

func (transformerErrorNamespace) New(props TransformerErrorProps) TransformerError {
	return TransformerError{
		Code:    props.Code,
		Message: props.Message,
	}
}

func (transformerErrorNamespace) From(props TransformerErrorFromProps) TransformerError {
	lines := make([]string, 0, len(props.Errors))
	for _, e := range props.Errors {
		subject := ""
		if e.Explore.Object != nil {
			subject = transformerErrorJoin(*e.Explore.Object, e.Explore.Property)
		}
		middle := ""
		if e.Explore.Parameter != nil {
			middle = fmt.Sprintf("(parameter: %q)", *e.Explore.Parameter)
		} else if e.Explore.Output {
			middle = "(return type)"
		}
		typ := e.Name
		if subject != "" {
			typ = subject + ": " + typ
		}
		messages := make([]string, 0, len(e.Messages))
		for _, msg := range e.Messages {
			messages = append(messages, "  - "+msg)
		}
		lines = append(lines, "- "+typ+middle+"\n"+strings.Join(messages, "\n"))
	}
	return TransformerError{
		Code:    props.Code,
		Message: "unsupported type detected\n\n" + strings.Join(lines, "\n\n"),
	}
}

func transformerErrorJoin(object MetadataObjectType, key any) string {
	if key == nil {
		return object.Name
	}
	switch value := key.(type) {
	case string:
		if transformerErrorVariable(value) {
			return object.Name + "." + value
		}
		return fmt.Sprintf("%s[%q]", object.Name, value)
	default:
		return object.Name + "[key]"
	}
}

func transformerErrorVariable(key string) bool {
	if key == "" {
		return false
	}
	for i, r := range key {
		if i == 0 {
			if r != '_' && r != '$' && (r < 'A' || r > 'Z') && (r < 'a' || r > 'z') {
				return false
			}
			continue
		}
		if r != '_' && r != '$' && (r < 'A' || r > 'Z') && (r < 'a' || r > 'z') && (r < '0' || r > '9') {
			return false
		}
	}
	return true
}
