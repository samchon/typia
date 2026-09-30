package llm

import (
  "math"
  "reflect"
  "sort"

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
    Context:             props.Context,
    Type:                typ,
    Code:                "typia.llm.evaluation",
    Absorb:              true,
    StrictObjectMembers: true,
    Validate: func(struct {
      Metadata *schemametadata.MetadataSchema
      Explore  nativefactories.MetadataFactory_IExplore
      Top      *schemametadata.MetadataSchema
    }) []string {
      return nil
    },
  })
  config := llmEvaluation_config(llmTransformer_config(props, "evaluation"))
  plan, errors := nativellmprogrammers.LlmEvaluationProgrammer.Compose(metadata, config)
  errors = append(errors, llmEvaluation_cachedDeclarationProbabilityErrors(props.Context)...)
  // The placement scan depends on every program source, including files with
  // no tag today: adding one later must invalidate a cached successful emit.
  if props.Context.Program != nil && schemametadata.MetadataDependency_active(props.Context.Checker) {
    for _, file := range props.Context.Program.SourceFiles() {
      if file != nil {
        schemametadata.MetadataDependency_touchFile(props.Context.Checker, file.FileName())
      }
    }
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
    Config:   config,
  }, plan)
}

// llmEvaluation_config reads `ILlmEvaluation.IConfig` from the second generic
// argument. The decimal places are an integer in [0, 15], like AI SDK's
// rounding declaration, and two by default.
func llmEvaluation_config(raw map[string]any) nativellmprogrammers.LlmEvaluationProgrammer_IConfig {
  config := nativellmprogrammers.LlmEvaluationProgrammer_IConfig{Decimals: 2}
  read := func(key string) *int {
    value, ok := raw[key]
    if ok == false {
      return nil
    }
    number, isNumber := 0.0, false
    switch reflected := reflect.ValueOf(value); reflected.Kind() {
    case reflect.Float32, reflect.Float64:
      number, isNumber = reflected.Float(), true
    case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
      number, isNumber = float64(reflected.Int()), true
    case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
      number, isNumber = float64(reflected.Uint()), true
    }
    if isNumber == false || number != math.Trunc(number) || number < 0 || number > 15 {
      panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
        Code:    "typia.llm.evaluation",
        Message: "Invalid generic argument \"Config\". " + key + " must be an integer between 0 and 15.",
      }))
    }
    integer := int(number)
    return &integer
  }
  keys := make([]string, 0, len(raw))
  for key := range raw {
    keys = append(keys, key)
  }
  // the first unknown option in a fixed order, so the diagnostic is stable
  sort.Strings(keys)
  for _, key := range keys {
    if key != "decimals" {
      panic(nativetransform.NewTransformerError(nativetransform.TransformerError_IProps{
        Code:    "typia.llm.evaluation",
        Message: "Invalid generic argument \"Config\". Unknown option \"" + key + "\".",
      }))
    }
  }
  if decimals := read("decimals"); decimals != nil {
    config.Decimals = *decimals
  }
  return config
}
