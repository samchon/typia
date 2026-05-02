package internal

import (
  "fmt"
  "sort"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type featureProgrammerNamespace struct{}

var FeatureProgrammer = featureProgrammerNamespace{}

type FeatureProgrammer_IConfig struct {
  Types       FeatureProgrammer_IConfig_ITypes
  Prefix      string
  Path        bool
  Trace       bool
  Addition    func(collection *nativemetadata.MetadataCollection) []*shimast.Node
  Initializer func(props FeatureProgrammer_InitializerProps) FeatureProgrammer_InitializerOutput
  Decoder     func(props FeatureProgrammer_DecoderProps) *shimast.Node
  Objector    FeatureProgrammer_IConfig_IObjector
  Generator   FeatureProgrammer_IConfig_IGenerator
}

type FeatureProgrammer_IConfig_ITypes struct {
  Input  func(t *shimchecker.Type, name *string) *shimast.TypeNode
  Output func(t *shimchecker.Type, name *string) *shimast.TypeNode
}

type FeatureProgrammer_IConfig_IObjector struct {
  Checker   func(props FeatureProgrammer_ObjectorCheckerProps) *shimast.Node
  Decoder   func(props FeatureProgrammer_ObjectorDecoderProps) *shimast.Node
  Joiner    func(props FeatureProgrammer_ObjectorJoinerProps) *shimast.Node
  Unionizer func(props FeatureProgrammer_ObjectorUnionizerProps) *shimast.Node
  Failure   func(props FeatureProgrammer_ObjectorFailureProps) *shimast.Node
  Is        func(exp *shimast.Expression) *shimast.Node
  Required  func(exp *shimast.Expression) *shimast.Node
  Full      func(props FeatureProgrammer_ObjectorFullProps) *shimast.Node
  Type      *shimast.TypeNode
}

type FeatureProgrammer_IConfig_IGenerator struct {
  Objects func(collection *nativemetadata.MetadataCollection) []*shimast.Node
  Unions  func(collection *nativemetadata.MetadataCollection) []*shimast.Node
  Arrays  func(collection *nativemetadata.MetadataCollection) []*shimast.Node
  Tuples  func(collection *nativemetadata.MetadataCollection) []*shimast.Node
}

type FeatureProgrammer_IExplore = nativehelpers.UnionExplorer_IExplore

type FeatureProgrammer_InitializerProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
}

type FeatureProgrammer_InitializerOutput struct {
  Collection *nativemetadata.MetadataCollection
  Metadata   *nativemetadata.MetadataSchema
}

type FeatureProgrammer_DecoderProps struct {
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  FeatureProgrammer_IExplore
}

type FeatureProgrammer_ObjectorCheckerProps struct {
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  FeatureProgrammer_IExplore
}

type FeatureProgrammer_ObjectorDecoderProps struct {
  Input   *shimast.Expression
  Object  *nativemetadata.MetadataObjectType
  Explore FeatureProgrammer_IExplore
}

type FeatureProgrammer_ObjectorJoinerProps struct {
  Entries []nativehelpers.IExpressionEntry
  Input   *shimast.Expression
  Object  *nativemetadata.MetadataObjectType
}

type FeatureProgrammer_ObjectorUnionizerProps struct {
  Objects []*nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore FeatureProgrammer_IExplore
}

type FeatureProgrammer_ObjectorFailureProps struct {
  Input    *shimast.Expression
  Expected string
  Explore  *FeatureProgrammer_IExplore
}

type FeatureProgrammer_ObjectorFullProps struct {
  Condition *shimast.Expression
  Input     *shimast.Expression
  Expected  string
  Explore   FeatureProgrammer_IExplore
}

type FeatureProgrammer_Decoder[T any] func(props struct {
  Input      *shimast.Expression
  Definition T
  Explore    FeatureProgrammer_IExplore
}) *shimast.Node

type FeatureProgrammer_IComposed struct {
  Body       *shimast.Node
  Parameters []*shimast.Node
  Functions  map[string]*shimast.Node
  Statements []*shimast.Node
  Response   *shimast.TypeNode
}

type FeatureProgrammer_IDecomposed struct {
  Functions  map[string]*shimast.Node
  Statements []*shimast.Node
  Arrow      *shimast.Node
}

type FeatureProgrammer_ComposeProps struct {
  Context nativecontext.ITypiaContext
  Config  FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

type FeatureProgrammer_WriteDecomposedProps struct {
  Modulo        *shimast.Expression
  Functor       *nativehelpers.FunctionProgrammer
  Result        FeatureProgrammer_IDecomposed
  ReturnWrapper func(arrow *shimast.Node) *shimast.Node
}

type FeatureProgrammer_WriteProps struct {
  Context nativecontext.ITypiaContext
  Config  FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

type FeatureProgrammer_WriteObjectFunctionsProps struct {
  Config     FeatureProgrammer_IConfig
  Context    nativecontext.ITypiaContext
  Collection *nativemetadata.MetadataCollection
}

type FeatureProgrammer_WriteUnionFunctionsProps struct {
  Config     FeatureProgrammer_IConfig
  Collection *nativemetadata.MetadataCollection
}

type FeatureProgrammer_DecodeArrayConfig struct {
  Trace   bool
  Path    bool
  Decoder func(props FeatureProgrammer_DecoderProps) *shimast.Node
  Prefix  string
}

type FeatureProgrammer_DecodeArrayProps struct {
  Config   FeatureProgrammer_DecodeArrayConfig
  Functor  *nativehelpers.FunctionProgrammer
  Combiner func(next struct {
    Input *shimast.Expression
    Arrow *shimast.Node
  }) *shimast.Node
  Array   *nativemetadata.MetadataArray
  Input   *shimast.Expression
  Explore FeatureProgrammer_IExplore
}

type FeatureProgrammer_DecodeObjectConfig struct {
  Trace  bool
  Path   bool
  Prefix string
}

type FeatureProgrammer_DecodeObjectProps struct {
  Config  FeatureProgrammer_DecodeObjectConfig
  Functor *nativehelpers.FunctionProgrammer
  Object  *nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore FeatureProgrammer_IExplore
}

type FeatureProgrammer_IndexProps struct {
  Start   *int
  Postfix string
  Rand    string
}

type FeatureProgrammer_ArgumentsArrayProps struct {
  Config  FeatureProgrammer_ArgumentsArrayConfig
  Input   *shimast.Expression
  Explore FeatureProgrammer_IExplore
}

type FeatureProgrammer_ArgumentsArrayConfig struct {
  Path  bool
  Trace bool
}

type FeatureProgrammer_ParameterDeclarationsProps struct {
  Config FeatureProgrammer_ParameterConfig
  Type   *shimast.TypeNode
  Input  *shimast.Node
}

type FeatureProgrammer_ParameterConfig struct {
  Path  bool
  Trace bool
}

var featureProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (featureProgrammerNamespace) Compose(props FeatureProgrammer_ComposeProps) FeatureProgrammer_IComposed {
  initialized := props.Config.Initializer(FeatureProgrammer_InitializerProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
  })
  featureProgrammer_register_schema_unions(initialized.Collection, initialized.Metadata, map[*nativemetadata.MetadataSchema]bool{})
  body := props.Config.Decoder(FeatureProgrammer_DecoderProps{
    Input:    nativefactories.ValueFactory.INPUT(),
    Metadata: initialized.Metadata,
    Explore: FeatureProgrammer_IExplore{
      Tracable: props.Config.Path || props.Config.Trace,
      Source:   "top",
      From:     "top",
      Postfix:  "\"\"",
    },
  })
  statements := []*shimast.Node{}
  if props.Config.Addition != nil {
    statements = props.Config.Addition(initialized.Collection)
  }
  functions := map[string]*shimast.Node{}
  for i, v := range featureProgrammer_object_functions(props, initialized.Collection) {
    functions[fmt.Sprintf("%so%d", props.Config.Prefix, i)] = v
  }
  for i, v := range featureProgrammer_union_functions(props.Config, initialized.Collection) {
    functions[fmt.Sprintf("%su%d", props.Config.Prefix, i)] = v
  }
  for i, v := range props.Config.Generator.Arrays(initialized.Collection) {
    functions[fmt.Sprintf("%sa%d", props.Config.Prefix, i)] = v
  }
  for i, v := range props.Config.Generator.Tuples(initialized.Collection) {
    functions[fmt.Sprintf("%st%d", props.Config.Prefix, i)] = v
  }
  return FeatureProgrammer_IComposed{
    Body:       body,
    Statements: statements,
    Functions:  functions,
    Parameters: FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
      Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
      Type:   props.Config.Types.Input(props.Type, props.Name),
      Input:  nativefactories.ValueFactory.INPUT(),
    }),
    Response: props.Config.Types.Output(props.Type, props.Name),
  }
}

func (featureProgrammerNamespace) WriteDecomposed(props FeatureProgrammer_WriteDecomposedProps) *shimast.Node {
  statements := []*shimast.Node{}
  statements = append(statements, props.Functor.Declare()...)
  keys := make([]string, 0, len(props.Result.Functions))
  for key := range props.Result.Functions {
    keys = append(keys, key)
  }
  sort.Strings(keys)
  for _, key := range keys {
    statements = append(statements, props.Result.Functions[key])
  }
  statements = append(statements, props.Result.Statements...)
  response := props.Result.Arrow
  if props.ReturnWrapper != nil {
    response = props.ReturnWrapper(props.Result.Arrow)
  }
  statements = append(statements, featureProgrammer_factory.NewReturnStatement(response))
  return featureProgrammer_factory.NewCallExpression(
    featureProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      featureProgrammer_factory.NewNodeList(nil),
      nil,
      nil,
      featureProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      featureProgrammer_factory.NewBlock(featureProgrammer_factory.NewNodeList(statements), true),
    ),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

func (featureProgrammerNamespace) Write(props FeatureProgrammer_WriteProps) *shimast.Node {
  initialized := props.Config.Initializer(FeatureProgrammer_InitializerProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
  })
  featureProgrammer_register_schema_unions(initialized.Collection, initialized.Metadata, map[*nativemetadata.MetadataSchema]bool{})
  output := props.Config.Decoder(FeatureProgrammer_DecoderProps{
    Metadata: initialized.Metadata,
    Input:    nativefactories.ValueFactory.INPUT(),
    Explore: FeatureProgrammer_IExplore{
      Tracable: props.Config.Path || props.Config.Trace,
      Source:   "top",
      From:     "top",
      Postfix:  "\"\"",
    },
  })

  objects := featureProgrammer_object_functions(FeatureProgrammer_ComposeProps{
    Config:  props.Config,
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  }, initialized.Collection)
  unions := featureProgrammer_union_functions(props.Config, initialized.Collection)
  arrays := props.Config.Generator.Arrays(initialized.Collection)
  tuples := props.Config.Generator.Tuples(initialized.Collection)

  added := []*shimast.Node{}
  if props.Config.Addition != nil {
    added = props.Config.Addition(initialized.Collection)
  }

  statements := append([]*shimast.Node{}, added...)
  for _, v := range objects {
    statements = append(statements, v)
  }
  for _, v := range unions {
    statements = append(statements, v)
  }
  for _, v := range arrays {
    statements = append(statements, v)
  }
  for _, v := range tuples {
    statements = append(statements, v)
  }
  if output != nil && output.Kind == shimast.KindBlock {
    statements = append(statements, output.Statements()...)
  } else {
    statements = append(statements, featureProgrammer_factory.NewReturnStatement(output))
  }

  return featureProgrammer_factory.NewArrowFunction(
    nil,
    nil,
    featureProgrammer_factory.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
      Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
      Type:   props.Config.Types.Input(props.Type, props.Name),
      Input:  nativefactories.ValueFactory.INPUT(),
    })),
    props.Config.Types.Output(props.Type, props.Name),
    nil,
    featureProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
    featureProgrammer_factory.NewBlock(featureProgrammer_factory.NewNodeList(statements), true),
  )
}

func (featureProgrammerNamespace) Write_object_functions(props FeatureProgrammer_WriteObjectFunctionsProps) []*shimast.Node {
  return featureProgrammer_write_object_functions(props.Config, props.Context, props.Collection)
}

func (featureProgrammerNamespace) Write_union_functions(props FeatureProgrammer_WriteUnionFunctionsProps) []*shimast.Node {
  return featureProgrammer_write_union_functions(props.Config, props.Collection)
}

func (featureProgrammerNamespace) Decode_array(props FeatureProgrammer_DecodeArrayProps) *shimast.Node {
  rand := fmt.Sprint(props.Functor.Increment())
  tail := []*shimast.Node{}
  if props.Config.Path || props.Config.Trace {
    tail = append(tail, nativefactories.IdentifierFactory.Parameter("_index"+rand, nativefactories.TypeFactory.Keyword("number"), nil))
  }
  parameters := []*shimast.Node{
    nativefactories.IdentifierFactory.Parameter("elem", nativefactories.TypeFactory.Keyword("any"), nil),
  }
  parameters = append(parameters, tail...)
  arrow := featureProgrammer_factory.NewArrowFunction(
    nil,
    nil,
    featureProgrammer_factory.NewNodeList(parameters),
    nil,
    nil,
    featureProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
    props.Config.Decoder(FeatureProgrammer_DecoderProps{
      Input:    nativefactories.ValueFactory.INPUT("elem"),
      Metadata: props.Array.Type.Value,
      Explore: FeatureProgrammer_IExplore{
        Tracable: props.Explore.Tracable,
        Source:   props.Explore.Source,
        From:     "array",
        Postfix: FeatureProgrammer.Index(FeatureProgrammer_IndexProps{
          Start:   props.Explore.Start,
          Postfix: props.Explore.Postfix,
          Rand:    rand,
        }),
      },
    }),
  )
  return props.Combiner(struct {
    Input *shimast.Expression
    Arrow *shimast.Node
  }{Input: props.Input, Arrow: arrow})
}

func (featureProgrammerNamespace) Decode_object(props FeatureProgrammer_DecodeObjectProps) *shimast.Node {
  return featureProgrammer_factory.NewCallExpression(
    featureProgrammer_factory.NewIdentifier(
      props.Functor.UseLocal(fmt.Sprintf("%so%d", props.Config.Prefix, props.Object.Index)),
    ),
    nil,
    nil,
    featureProgrammer_factory.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
      Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
      Input:   props.Input,
      Explore: props.Explore,
    })),
    shimast.NodeFlagsNone,
  )
}

func (featureProgrammerNamespace) Index(props FeatureProgrammer_IndexProps) string {
  tail := "\"[\" + _index" + props.Rand + " + \"]\""
  if props.Start != nil {
    tail = "\"[\" + (" + fmt.Sprint(*props.Start) + " + _index" + props.Rand + ") + \"]\""
  }
  if props.Postfix == "" {
    return tail
  }
  if props.Postfix[len(props.Postfix)-1:] == "\"" {
    return props.Postfix[:len(props.Postfix)-1] + tail[1:]
  }
  return props.Postfix + " + " + tail
}

func (featureProgrammerNamespace) ArgumentsArray(props FeatureProgrammer_ArgumentsArrayProps) []*shimast.Node {
  tail := []*shimast.Node{}
  if props.Config.Path == false && props.Config.Trace == false {
    tail = []*shimast.Node{}
  } else if props.Config.Path && props.Config.Trace {
    path := "_path"
    if props.Explore.Postfix != "" {
      path = "_path + " + props.Explore.Postfix
    }
    tail = append(tail, featureProgrammer_factory.NewIdentifier(path))
    if props.Explore.Source == "function" {
      tail = append(tail, featureProgrammer_factory.NewIdentifier(fmt.Sprintf("%t && _exceptionable", props.Explore.Tracable)))
    } else if props.Explore.Tracable {
      tail = append(tail, featureProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword))
    } else {
      tail = append(tail, featureProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword))
    }
  } else if props.Config.Path {
    path := "_path"
    if props.Explore.Postfix != "" {
      path = "_path + " + props.Explore.Postfix
    }
    tail = append(tail, featureProgrammer_factory.NewIdentifier(path))
  } else {
    if props.Explore.Source == "function" {
      tail = append(tail, featureProgrammer_factory.NewIdentifier(fmt.Sprintf("%t && _exceptionable", props.Explore.Tracable)))
    } else if props.Explore.Tracable {
      tail = append(tail, featureProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword))
    } else {
      tail = append(tail, featureProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword))
    }
  }
  return append([]*shimast.Node{props.Input}, tail...)
}

func (featureProgrammerNamespace) ParameterDeclarations(props FeatureProgrammer_ParameterDeclarationsProps) []*shimast.Node {
  tail := []*shimast.Node{}
  if props.Config.Path {
    tail = append(tail, nativefactories.IdentifierFactory.Parameter("_path", nativefactories.TypeFactory.Keyword("string"), nil))
  }
  if props.Config.Trace {
    tail = append(tail, nativefactories.IdentifierFactory.Parameter(
      "_exceptionable",
      nativefactories.TypeFactory.Keyword("boolean"),
      featureProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
    ))
  }
  return append([]*shimast.Node{
    nativefactories.IdentifierFactory.Parameter(props.Input, props.Type, nil),
  }, tail...)
}

func featureProgrammer_object_functions(props FeatureProgrammer_ComposeProps, collection *nativemetadata.MetadataCollection) []*shimast.Node {
  if props.Config.Generator.Objects != nil {
    return props.Config.Generator.Objects(collection)
  }
  return featureProgrammer_write_object_functions(props.Config, props.Context, collection)
}

func featureProgrammer_union_functions(config FeatureProgrammer_IConfig, collection *nativemetadata.MetadataCollection) []*shimast.Node {
  if config.Generator.Unions != nil {
    if generated := config.Generator.Unions(collection); generated != nil {
      return generated
    }
  }
  return featureProgrammer_write_union_functions(config, collection)
}

func featureProgrammer_register_schema_unions(collection *nativemetadata.MetadataCollection, metadata *nativemetadata.MetadataSchema, visited map[*nativemetadata.MetadataSchema]bool) {
  if collection == nil || metadata == nil || visited[metadata] {
    return
  }
  visited[metadata] = true

  if len(metadata.Objects) > 1 {
    index := collection.GetUnionIndex(metadata)
    metadata.Union_index = &index
  }
  if metadata.Escaped != nil {
    featureProgrammer_register_schema_unions(collection, metadata.Escaped.Returns, visited)
  }
  if metadata.Rest != nil {
    featureProgrammer_register_schema_unions(collection, metadata.Rest, visited)
  }
  for _, alias := range metadata.Aliases {
    if alias.Type != nil {
      featureProgrammer_register_schema_unions(collection, alias.Type.Value, visited)
    }
  }
  for _, array := range metadata.Arrays {
    if array.Type != nil {
      featureProgrammer_register_schema_unions(collection, array.Type.Value, visited)
    }
  }
  for _, tuple := range metadata.Tuples {
    if tuple.Type != nil {
      for _, element := range tuple.Type.Elements {
        featureProgrammer_register_schema_unions(collection, element, visited)
      }
    }
  }
  for _, object := range metadata.Objects {
    if object.Type != nil {
      for _, property := range object.Type.Properties {
        featureProgrammer_register_schema_unions(collection, property.Value, visited)
      }
    }
  }
  for _, set := range metadata.Sets {
    featureProgrammer_register_schema_unions(collection, set.Value, visited)
  }
  for _, item := range metadata.Maps {
    featureProgrammer_register_schema_unions(collection, item.Key, visited)
    featureProgrammer_register_schema_unions(collection, item.Value, visited)
  }
}

func featureProgrammer_write_object_functions(config FeatureProgrammer_IConfig, context nativecontext.ITypiaContext, collection *nativemetadata.MetadataCollection) []*shimast.Node {
  objects := collection.Objects()
  output := make([]*shimast.Node, 0, len(objects))
  for _, object := range objects {
    input := featureProgrammer_factory.NewIdentifier("input")
    objectType := config.Objector.Type
    if objectType == nil {
      objectType = nativefactories.TypeFactory.Keyword("any")
    }
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%so%d", config.Prefix, object.Index),
      Value: featureProgrammer_factory.NewArrowFunction(
        nil,
        nil,
        featureProgrammer_factory.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
          Config: FeatureProgrammer_ParameterConfig{Path: config.Path, Trace: config.Trace},
          Type:   nativefactories.TypeFactory.Keyword("any"),
          Input:  nativefactories.ValueFactory.INPUT(),
        })),
        objectType,
        nil,
        featureProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
        config.Objector.Joiner(FeatureProgrammer_ObjectorJoinerProps{
          Input: input,
          Entries: nativeiterate.Feature_object_entries(nativeiterate.Feature_object_entriesProps{
            Config: nativeiterate.Feature_object_entriesConfig{
              Path:  config.Path,
              Trace: config.Trace,
              Decoder: func(next nativeiterate.Feature_object_entriesDecoderProps) *shimast.Node {
                return config.Decoder(FeatureProgrammer_DecoderProps{
                  Input:    next.Input,
                  Metadata: next.Metadata,
                  Explore:  featureProgrammer_from_iterate_explore(next.Explore),
                })
              },
            },
            Context: context,
            Input:   input,
            Object:  object,
          }),
          Object: object,
        }),
      ),
    }))
  }
  return output
}

func featureProgrammer_write_union_functions(config FeatureProgrammer_IConfig, collection *nativemetadata.MetadataCollection) []*shimast.Node {
  unions := collection.Unions()
  output := make([]*shimast.Node, 0, len(unions))
  for i, union := range unions {
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%su%d", config.Prefix, i),
      Value: featureProgrammer_write_union(struct {
        Config  FeatureProgrammer_IConfig
        Objects []*nativemetadata.MetadataObjectType
      }{Config: config, Objects: union}),
    }))
  }
  return output
}

func featureProgrammer_write_union(props struct {
  Config  FeatureProgrammer_IConfig
  Objects []*nativemetadata.MetadataObjectType
}) *shimast.Node {
  return featureProgrammer_factory.NewArrowFunction(
    nil,
    nil,
    featureProgrammer_factory.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
      Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
      Type:   nativefactories.TypeFactory.Keyword("any"),
      Input:  nativefactories.ValueFactory.INPUT(),
    })),
    nativefactories.TypeFactory.Keyword("any"),
    nil,
    featureProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
    nativehelpers.UnionExplorer.Object(nativehelpers.UnionExplorer_ObjectProps{
      Config: nativehelpers.UnionExplorer_ObjectConfig{
        Objector: featureProgrammer_union_objector(props.Config.Objector),
      },
      Objects: props.Objects,
      Input:   nativefactories.ValueFactory.INPUT(),
      Explore: FeatureProgrammer_IExplore{
        Tracable: props.Config.Path || props.Config.Trace,
        Source:   "function",
        From:     "object",
        Postfix:  "",
      },
    }),
  )
}

func featureProgrammer_union_objector(objector FeatureProgrammer_IConfig_IObjector) nativehelpers.UnionExplorer_IObjector {
  return nativehelpers.UnionExplorer_IObjector{
    Checker: func(props nativehelpers.UnionExplorer_ObjectorCheckerProps) *shimast.Node {
      return objector.Checker(FeatureProgrammer_ObjectorCheckerProps{
        Metadata: props.Metadata,
        Input:    props.Input,
        Explore:  featureProgrammer_as_explore(props.Explore),
      })
    },
    Decoder: func(props nativehelpers.UnionExplorer_ObjectorDecoderProps) *shimast.Node {
      return objector.Decoder(FeatureProgrammer_ObjectorDecoderProps{
        Input:   props.Input,
        Object:  props.Object,
        Explore: featureProgrammer_as_explore(props.Explore),
      })
    },
    Unionizer: func(props nativehelpers.UnionExplorer_ObjectorUnionizerProps) *shimast.Node {
      return objector.Unionizer(FeatureProgrammer_ObjectorUnionizerProps{
        Objects: props.Objects,
        Input:   props.Input,
        Explore: featureProgrammer_as_explore(props.Explore),
      })
    },
    Failure: func(props nativehelpers.UnionExplorer_ObjectorFailureProps) *shimast.Node {
      explore := featureProgrammer_as_explore(props.Explore)
      return objector.Failure(FeatureProgrammer_ObjectorFailureProps{
        Input:    props.Input,
        Expected: props.Expected,
        Explore:  &explore,
      })
    },
    Is:       objector.Is,
    Required: objector.Required,
    Full: func(props nativehelpers.UnionExplorer_ObjectorFullProps) *shimast.Node {
      if objector.Full == nil {
        return props.Condition
      }
      return objector.Full(FeatureProgrammer_ObjectorFullProps{
        Condition: props.Condition,
        Input:     props.Input,
        Expected:  props.Expected,
        Explore:   featureProgrammer_as_explore(props.Explore),
      })
    },
    Type: objector.Type,
  }
}

func featureProgrammer_from_iterate_explore(input nativeiterate.Feature_object_entriesExplore) FeatureProgrammer_IExplore {
  return FeatureProgrammer_IExplore{
    Tracable: input.Tracable,
    Source:   input.Source,
    From:     input.From,
    Postfix:  input.Postfix,
  }
}

func featureProgrammer_as_explore(input any) FeatureProgrammer_IExplore {
  switch value := input.(type) {
  case FeatureProgrammer_IExplore:
    return value
  case *FeatureProgrammer_IExplore:
    return *value
  case map[string]any:
    output := FeatureProgrammer_IExplore{}
    if v, ok := value["tracable"].(bool); ok {
      output.Tracable = v
    }
    if v, ok := value["source"].(string); ok {
      output.Source = v
    }
    if v, ok := value["from"].(string); ok {
      output.From = v
    }
    if v, ok := value["postfix"].(string); ok {
      output.Postfix = v
    }
    if v, ok := value["start"].(int); ok {
      output.Start = &v
    }
    return output
  default:
    return FeatureProgrammer_IExplore{}
  }
}
