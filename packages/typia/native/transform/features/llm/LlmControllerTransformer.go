package llm

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativellmprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/llm"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type llmControllerTransformerNamespace struct{}

var LlmControllerTransformer = llmControllerTransformerNamespace{}

func (llmControllerTransformerNamespace) Transform(props nativetransform.ITransformProps) *shimast.Node {
  top, typ, ok := llmTransformer_type_argument(props, "typia.llm.controller")
  if ok == false {
    return props.Expression.AsNode()
  }
  llmTransformer_require_argument(props, "typia.llm.controller", 0, "no identifier name.")
  llmTransformer_require_argument(props, "typia.llm.controller", 1, "no executor.")
  config := llmTransformer_config(props, "controller")
  analyze := func(validate bool) *schemametadata.MetadataSchema {
    return llmTransformer_analyze(llmTransformer_analyzeProps{
      Context:    props.Context,
      Type:       typ,
      Code:       "typia.llm.controller",
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
  return nativellmprogrammers.LlmControllerProgrammer.Write(nativellmprogrammers.LlmControllerProgrammer_IWriteProps{
    Context:         props.Context,
    Modulo:          props.Modulo,
    Metadata:        analyze(false),
    ClassName:       llmTransformer_type_name(top),
    Config:          config,
    Node:            top,
    NameArgument:    llmTransformer_argument(props, 0),
    ExecuteArgument: llmTransformer_argument(props, 1),
    ConfigArgument:  llmTransformer_argument(props, 2),
  })
}
