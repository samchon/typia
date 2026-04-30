package llm

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type llmParametersTransformerNamespace struct{}

var LlmParametersTransformer = llmParametersTransformerNamespace{}

func (llmParametersTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
	_, typ, ok := llmTransformer_type_argument(props, "typia.llm.parameters")
	if ok == false {
		return props.Expression.AsNode()
	}
	config := llmTransformer_config(props, "parameters")
	analyze := func(validate bool) *schemametadata.MetadataSchema {
		return llmTransformer_analyze(llmTransformer_analyzeProps{
			Context: props.Context,
			Type:    typ,
			Code:    "typia.llm.parameters",
			Absorb:  validate,
			Validate: func(next struct {
				Metadata *schemametadata.MetadataSchema
				Explore  nativefactories.MetadataFactory_IExplore
				Top      *schemametadata.MetadataSchema
			}) []string {
				if validate == false {
					return nil
				}
				return nativellmprogrammers.LlmParametersProgrammer.Validate(struct {
					Config   map[string]any
					Metadata *schemametadata.MetadataSchema
					Explore  nativefactories.MetadataFactory_IExplore
				}{Config: config, Metadata: next.Metadata, Explore: next.Explore})
			},
		})
	}
	analyze(true)
	return nativellmprogrammers.LlmParametersProgrammer.Write(nativellmprogrammers.LlmParametersProgrammer_IWriteProps{
		Context:  props.Context,
		Metadata: analyze(false),
		Config:   config,
	})
}
