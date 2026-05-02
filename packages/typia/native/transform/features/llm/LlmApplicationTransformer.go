package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type llmApplicationTransformerNamespace struct{}

var LlmApplicationTransformer = llmApplicationTransformerNamespace{}

func (llmApplicationTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  top, typ, ok := llmTransformer_type_argument(props, "typia.llm.application")
  if ok == false {
    return props.Expression.AsNode()
  }
  config := llmTransformer_config(props, "application")
  analyze := func(validate bool) *schemametadata.MetadataSchema {
    return llmTransformer_analyze(llmTransformer_analyzeProps{
      Context:    props.Context,
      Type:       typ,
      Code:       "typia.llm.application",
      Absorb:     validate,
      Functional: true,
      Validate: func(next struct {
        Metadata *schemametadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *schemametadata.MetadataSchema
      }) []string {
        if validate == false {
          return nil
        }
        return nativellmprogrammers.LlmApplicationProgrammer.Validate(struct {
          Config   map[string]any
          Metadata *schemametadata.MetadataSchema
          Explore  nativefactories.MetadataFactory_IExplore
          Top      *schemametadata.MetadataSchema
        }{Config: config, Metadata: next.Metadata, Explore: next.Explore, Top: next.Top})
      },
    })
  }
  analyze(true)
  return nativellmprogrammers.LlmApplicationProgrammer.Write(nativellmprogrammers.LlmApplicationProgrammer_IWriteProps{
    Context:        props.Context,
    Modulo:         props.Modulo,
    Metadata:       analyze(false),
    Name:           llmTransformer_type_name(top),
    Config:         config,
    ConfigArgument: llmTransformer_argument(props, 0),
  })
}
