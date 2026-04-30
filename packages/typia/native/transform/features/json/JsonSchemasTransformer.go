package json

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativejsonprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/json"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type jsonSchemasTransformerNamespace struct{}

var JsonSchemasTransformer = jsonSchemasTransformerNamespace{}

func (jsonSchemasTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
	if props.Expression == nil || props.Expression.TypeArguments == nil || len(props.Expression.TypeArguments.Nodes) == 0 {
		panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
			Code:    "typia.json.schemas",
			Message: "no generic argument.",
		}))
	}

	top := props.Expression.TypeArguments.Nodes[0]
	if top == nil || top.Kind != shimast.KindTupleType {
		return props.Expression.AsNode()
	}
	elements := top.AsTupleTypeNode().Elements
	if elements == nil {
		return props.Expression.AsNode()
	}

	types := make([]*shimchecker.Type, 0, len(elements.Nodes))
	for _, child := range elements.Nodes {
		if child == nil {
			return props.Expression.AsNode()
		}
		typ := props.Context.Checker.GetTypeFromTypeNode(child)
		if typ != nil && typ.IsTypeParameter() {
			panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
				Code:    "typia.json.schemas",
				Message: "non-specified generic argument(s).",
			}))
		}
		types = append(types, typ)
	}

	var versionNode *shimast.Node
	if len(props.Expression.TypeArguments.Nodes) > 1 {
		versionNode = props.Expression.TypeArguments.Nodes[1]
	}
	version := jsonTransformer_getParameter(jsonTransformer_getParameterProps{
		Checker: props.Context.Checker,
		Code:    "typia.json.schemas",
		Name:    "Version",
		Is: func(str string) bool {
			return str == "3.0" || str == "3.1"
		},
		Default: func() string {
			return "3.1"
		},
	})(versionNode)

	analyze := func(validate bool) []*schemametadata.MetadataSchema {
		metadatas := []*schemametadata.MetadataSchema{}
		errors := []nativefactories.MetadataFactory_IError{}
		var validator nativefactories.MetadataFactory_Validator
		if validate {
			validator = jsonTransformer_schemasValidator
		}
		for _, typ := range types {
			result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
				Checker:     props.Context.Checker,
				Transformer: props.Context.Transformer,
				Options: nativefactories.MetadataFactory_IOptions{
					Absorb:   validate,
					Constant: true,
					Escape:   true,
					Validate: validator,
				},
				Components: schemametadata.NewMetadataCollection(&schemametadata.MetadataCollection_IOptions{
					Replace: schemametadata.MetadataCollection_replace,
				}),
				Type: typ,
			})
			if result.Success == false {
				errors = append(errors, result.Errors...)
			} else {
				metadatas = append(metadatas, result.Data)
			}
		}
		if len(errors) != 0 {
			panic(nativetransform.TransformerError_from(struct {
				Code   string
				Errors []nativetransform.TransformerError_MetadataFactory_IError
			}{
				Code:   "typia.json.schemas",
				Errors: jsonTransformer_errors(errors),
			}))
		}
		return metadatas
	}
	analyze(true)

	return nativejsonprogrammers.JsonSchemasProgrammer.Write(nativejsonprogrammers.JsonSchemasProgrammer_IWriteProps{
		Context:   props.Context,
		Version:   version,
		Metadatas: analyze(false),
	})
}
