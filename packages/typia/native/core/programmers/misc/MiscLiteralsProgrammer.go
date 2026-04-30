package misc

import (
	"fmt"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type miscLiteralsProgrammerNamespace struct{}

var MiscLiteralsProgrammer = miscLiteralsProgrammerNamespace{}

type MiscLiteralsProgrammer_IProps struct {
	Context nativecontext.ITypiaContext
	Type    *shimchecker.Type
}

var miscLiteralsProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscLiteralsProgrammerNamespace) Write(props MiscLiteralsProgrammer_IProps) *shimast.Node {
	result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
		Options: nativefactories.MetadataFactory_IOptions{
			Escape:   true,
			Constant: true,
			Absorb:   true,
			Validate: func(next struct {
				Metadata *nativemetadata.MetadataSchema
				Explore  nativefactories.MetadataFactory_IExplore
				Top      *nativemetadata.MetadataSchema
			}) []string {
				length := 0
				for _, constant := range next.Metadata.Constants {
					length += len(constant.Values)
				}
				for _, atomic := range next.Metadata.Atomics {
					if atomic.Type == "boolean" {
						length++
					}
				}
				if length == 0 {
					return []string{string(MiscLiteralsProgrammer_ErrorMessages_NO)}
				}
				if next.Metadata.Size() != length {
					return []string{string(MiscLiteralsProgrammer_ErrorMessages_ONLY)}
				}
				return []string{}
			},
		},
		Components: nativemetadata.NewMetadataCollection(),
		Type:       props.Type,
	})
	if result.Success == false {
		panic(nativecontext.TransformerError_from(struct {
			Code   string
			Errors []nativecontext.TransformerError_MetadataFactory_IError
		}{
			Code:   "typia.misc.literals",
			Errors: miscLiteralsProgrammer_errors(result.Errors),
		}))
	}

	metadata := result.Data
	values := []any{}
	visited := map[string]bool{}
	add := func(value any) {
		key := fmt.Sprintf("%T:%v", value, value)
		if visited[key] {
			return
		}
		visited[key] = true
		values = append(values, value)
	}
	for _, constant := range metadata.Constants {
		for _, value := range constant.Values {
			add(value.Value)
		}
	}
	for _, atomic := range metadata.Atomics {
		if atomic.Type == "boolean" {
			add(true)
			add(false)
			break
		}
	}
	if metadata.Nullable {
		add(nil)
	}
	return miscLiteralsProgrammer_factory.NewAsExpression(
		nativefactories.LiteralFactory.Write(values),
		miscLiteralsProgrammer_factory.NewTypeReferenceNode(
			miscLiteralsProgrammer_factory.NewIdentifier("const"),
			nil,
		),
	)
}

type MiscLiteralsProgrammer_ErrorMessages string

const (
	MiscLiteralsProgrammer_ErrorMessages_NO   MiscLiteralsProgrammer_ErrorMessages = "no constant literal type found."
	MiscLiteralsProgrammer_ErrorMessages_ONLY MiscLiteralsProgrammer_ErrorMessages = "only constant literal types are allowed."
)

func miscLiteralsProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
	output := make([]nativecontext.TransformerError_MetadataFactory_IError, 0, len(errors))
	for _, err := range errors {
		output = append(output, nativecontext.TransformerError_MetadataFactory_IError{
			Name: err.Name,
			Explore: nativecontext.TransformerError_MetadataFactory_IExplore{
				Object:    err.Explore.Object,
				Property:  err.Explore.Property,
				Parameter: err.Explore.Parameter,
				Output:    err.Explore.Output,
			},
			Messages: err.Messages,
		})
	}
	return output
}
