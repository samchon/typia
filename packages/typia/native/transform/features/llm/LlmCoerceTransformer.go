package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type llmCoerceTransformerNamespace struct{}

var LlmCoerceTransformer = llmCoerceTransformerNamespace{}

func (llmCoerceTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  llmTransformer_require_argument(props, "typia.llm.coerce", 0, "no input value.")
  top, typ, ok := llmTransformer_type_argument(props, "typia.llm.coerce")
  if ok == false {
    return props.Expression.AsNode()
  }
  config := llmTransformer_config(props, "coerce")
  if typ != nil && typ.IsTypeParameter() {
    panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{Code: "typia.llm.coerce", Message: "non-specified generic argument."}))
  }
  analyze := func(validate bool) *schemametadata.MetadataSchema {
    return llmTransformer_analyze(llmTransformer_analyzeProps{
      Context: props.Context,
      Type:    typ,
      Code:    "typia.llm.coerce",
      Absorb:  validate,
      Validate: func(next struct {
        Metadata *schemametadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *schemametadata.MetadataSchema
      }) []string {
        if validate == false {
          return nil
        }
        return nativellmprogrammers.LlmCoerceProgrammer.Validate(struct {
          Config   map[string]any
          Metadata *schemametadata.MetadataSchema
          Explore  nativefactories.MetadataFactory_IExplore
        }{Config: config, Metadata: next.Metadata, Explore: next.Explore})
      },
    })
  }
  analyze(true)
  return llmTransformer_factory.NewCallExpression(
    nativellmprogrammers.LlmCoerceProgrammer.Write(nativellmprogrammers.LlmCoerceProgrammer_IWriteProps{
      Context:  props.Context,
      Modulo:   props.Modulo,
      Metadata: analyze(false),
      Name:     llmTransformer_type_name(top),
      Config:   config,
    }),
    nil,
    nil,
    props.Expression.Arguments,
    shimast.NodeFlagsNone,
  )
}
