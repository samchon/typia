package llm

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type llmStructuredOutputTransformerNamespace struct{}

var LlmStructuredOutputTransformer = llmStructuredOutputTransformerNamespace{}

func (llmStructuredOutputTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
	top, typ, ok := llmTransformer_type_argument(props, "typia.llm.structuredOutput")
	if ok == false {
		return props.Expression.AsNode()
	}
	config := llmTransformer_config(props, "structuredOutput")
	if typ != nil && typ.IsTypeParameter() {
		panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{Code: "typia.llm.structuredOutput", Message: "non-specified generic argument."}))
	}
	analyze := func(validate bool) *schemametadata.MetadataSchema {
		return llmTransformer_analyze(llmTransformer_analyzeProps{
			Context: props.Context,
			Type:    typ,
			Code:    "typia.llm.structuredOutput",
			Absorb:  validate,
			Validate: func(next struct {
				Metadata *schemametadata.MetadataSchema
				Explore  nativefactories.MetadataFactory_IExplore
				Top      *schemametadata.MetadataSchema
			}) []string {
				if validate == false {
					return nil
				}
				return nativellmprogrammers.LlmStructuredOutputProgrammer.Validate(struct {
					Config   map[string]any
					Metadata *schemametadata.MetadataSchema
					Explore  nativefactories.MetadataFactory_IExplore
				}{Config: config, Metadata: next.Metadata, Explore: next.Explore})
			},
		})
	}
	analyze(true)
	return nativellmprogrammers.LlmStructuredOutputProgrammer.Write(nativellmprogrammers.LlmStructuredOutputProgrammer_IWriteProps{
		Context:  props.Context,
		Modulo:   props.Modulo,
		Type:     typ,
		Metadata: analyze(false),
		Config:   config,
		Name:     llmTransformer_type_name(top),
	})
}
