package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type llmEvaluationTransformerNamespace struct{}

var LlmEvaluationTransformer = llmEvaluationTransformerNamespace{}

func (llmEvaluationTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  top, typ, ok := llmTransformer_type_argument(props, "typia.llm.evaluation")
  if ok == false {
    return props.Expression.AsNode()
  }
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{Code: "typia.llm.evaluation", Message: "non-specified generic argument."}))
  }
  metadata := llmTransformer_analyze(llmTransformer_analyzeProps{
    Context: props.Context,
    Type:    typ,
    Code:    "typia.llm.evaluation",
    Absorb:  true,
    Validate: func(struct {
      Metadata *schemametadata.MetadataSchema
      Explore  nativefactories.MetadataFactory_IExplore
      Top      *schemametadata.MetadataSchema
    }) []string {
      return nil
    },
  })
  plan, errors := nativellmprogrammers.LlmEvaluationProgrammer.Compose(metadata)
  if props.Context.Program != nil {
    errors = append(errors, llmEvaluation_declarationProbabilityErrors(props.Context.Program.SourceFiles())...)
  }
  if len(errors) != 0 {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
      Code:    "typia.llm.evaluation",
      Message: nativellmprogrammers.LlmEvaluationProgrammer.Message(errors),
    }))
  }
  return nativellmprogrammers.LlmEvaluationProgrammer.Write(nativellmprogrammers.LlmEvaluationProgrammer_IWriteProps{
    Context:  props.Context,
    Metadata: metadata,
    Name:     llmTransformer_type_name(top),
  }, plan)
}
