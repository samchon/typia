package programmers

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type isProgrammerNamespace struct{}

var IsProgrammer = isProgrammerNamespace{}

type IsProgrammer_CONFIG_IOptions struct {
  Numeric   *bool
  Undefined *bool
  Object    func(props IsProgrammer_CONFIG_IOptions_ObjectProps) *shimast.Node
}

type IsProgrammer_CONFIG_IOptions_ObjectProps struct {
  Input   *shimast.Expression
  Entries []nativehelpers.IExpressionEntry
  Object  *nativemetadata.MetadataObjectType
}

type IsProgrammer_IConfig struct {
  Equals bool
}

type IsProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *nativechecker.Type
  Name    *string
  Init    *shimast.Node
  Config  IsProgrammer_IConfig
}

type IsProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Config  IsProgrammer_IConfig
  Type    *nativechecker.Type
  Name    *string
}

type IsProgrammer_WriteFunctionStatementsProps struct {
  Context    nativecontext.ITypiaContext
  Functor    *nativehelpers.FunctionProgrammer
  Collection *nativemetadata.MetadataCollection
}

type IsProgrammer_DecodeProps struct {
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  nativeinternal.CheckerProgrammer_IExplore
}

type IsProgrammer_DecodeObjectProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Object  *nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore nativeinternal.FeatureProgrammer_IExplore
}

var isProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (isProgrammerNamespace) Configure(props struct {
  Options *IsProgrammer_CONFIG_IOptions
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.CheckerProgrammer_IConfig {
  options := props.Options
  return nativeinternal.CheckerProgrammer_IConfig{
    Prefix:  "_i",
    Equals:  options != nil && options.Object != nil,
    Trace:   false,
    Path:    false,
    Numeric: isProgrammer_option_numeric(options),
    Atomist: func(next nativeinternal.CheckerProgrammer_AtomistProps) *shimast.Node {
      expressions := []*shimast.Node{}
      if next.Entry.Expression != nil {
        expressions = append(expressions, next.Entry.Expression)
      }
      if len(next.Entry.Conditions) != 0 {
        rows := []*shimast.Node{}
        for _, set := range next.Entry.Conditions {
          cols := make([]*shimast.Node, 0, len(set))
          for _, cond := range set {
            cols = append(cols, cond.Expression)
          }
          rows = append(rows, isProgrammer_reduce(cols, shimast.KindAmpersandAmpersandToken, isProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)))
        }
        expressions = append(expressions, isProgrammer_reduce(rows, shimast.KindBarBarToken, isProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)))
      }
      return isProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, isProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword))
    },
    Combiner: func(next nativeinternal.CheckerProgrammer_CombinerProps) *shimast.Node {
      initial := isProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)
      operator := shimast.KindBarBarToken
      if next.Logic == "and" {
        initial = isProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)
        operator = shimast.KindAmpersandAmpersandToken
      }
      expressions := make([]*shimast.Node, 0, len(next.Binaries))
      for _, binary := range next.Binaries {
        expressions = append(expressions, binary.Expression)
      }
      return isProgrammer_reduce(expressions, operator, initial)
    },
    Joiner: nativeinternal.CheckerProgrammer_IConfig_IJoiner{
      Object: func(v nativeinternal.CheckerProgrammer_JoinerObjectProps) *shimast.Node {
        if options != nil && options.Object != nil {
          return options.Object(IsProgrammer_CONFIG_IOptions_ObjectProps{
            Input:   v.Input,
            Entries: v.Entries,
            Object:  v.Object,
          })
        }
        return nativeiterate.Check_object(nativeiterate.Check_objectProps{
          Config: nativeiterate.Check_object_IConfig{
            Equals:    options != nil && options.Object != nil,
            Undefined: isProgrammer_option_undefined(options),
            Assert:    true,
            Reduce: func(a *shimast.Expression, b *shimast.Expression) *shimast.Node {
              return isProgrammer_binary(a, shimast.KindAmpersandAmpersandToken, b)
            },
            Positive: isProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
            Superfluous: func(value *shimast.Expression, description *shimast.Expression) *shimast.Node {
              return isProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)
            },
          },
          Context: props.Context,
          Entries: v.Entries,
          Input:   v.Input,
        })
      },
      Array: func(v nativeinternal.CheckerProgrammer_JoinerArrayProps) *shimast.Node {
        return isProgrammer_factory.NewCallExpression(
          nativefactories.IdentifierFactory.Access(v.Input, "every"),
          nil,
          nil,
          isProgrammer_factory.NewNodeList([]*shimast.Node{v.Arrow}),
          shimast.NodeFlagsNone,
        )
      },
      Failure: func(nativeinternal.CheckerProgrammer_JoinerFailureProps) *shimast.Node {
        return isProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)
      },
    },
    Success: isProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
  }
}

func (isProgrammerNamespace) Decompose(props IsProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  options := &IsProgrammer_CONFIG_IOptions{
    Numeric: props.Context.Options.Numeric,
    Object: func(v IsProgrammer_CONFIG_IOptions_ObjectProps) *shimast.Node {
      return nativeiterate.Check_object(nativeiterate.Check_objectProps{
        Config: nativeiterate.Check_object_IConfig{
          Equals:    props.Config.Equals,
          Undefined: nativehelpers.OptionPredicator.Undefined(props.Context.Options),
          Assert:    true,
          Reduce: func(a *shimast.Expression, b *shimast.Expression) *shimast.Node {
            return isProgrammer_binary(a, shimast.KindAmpersandAmpersandToken, b)
          },
          Positive: isProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
          Superfluous: func(value *shimast.Expression, description *shimast.Expression) *shimast.Node {
            return isProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)
          },
        },
        Context: props.Context,
        Entries: v.Entries,
        Input:   v.Input,
      })
    },
  }
  config := IsProgrammer.Configure(struct {
    Options *IsProgrammer_CONFIG_IOptions
    Context nativecontext.ITypiaContext
    Functor *nativehelpers.FunctionProgrammer
  }{Options: options, Context: props.Context, Functor: props.Functor})
  config.Trace = props.Config.Equals

  composed := nativeinternal.CheckerProgrammer.Compose(nativeinternal.CheckerProgrammer_ComposeProps{
    Context: props.Context,
    Config:  config,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  composed.Functions,
    Statements: composed.Statements,
    Arrow: isProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      isProgrammer_factory.NewNodeList(composed.Parameters),
      composed.Response,
      nil,
      isProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      composed.Body,
    ),
  }
}

func (isProgrammerNamespace) Write(props IsProgrammer_IProps) *shimast.Node {
  method := ""
  if props.Modulo != nil {
    method = props.Modulo.Text()
  }
  functor := nativehelpers.NewFunctionProgrammer(method)
  result := IsProgrammer.Decompose(IsProgrammer_DecomposeProps{
    Config:  props.Config,
    Context: props.Context,
    Functor: functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func (isProgrammerNamespace) Write_function_statements(props IsProgrammer_WriteFunctionStatementsProps) []*shimast.Node {
  config := IsProgrammer.Configure(struct {
    Options *IsProgrammer_CONFIG_IOptions
    Context nativecontext.ITypiaContext
    Functor *nativehelpers.FunctionProgrammer
  }{Options: nil, Context: props.Context, Functor: props.Functor})
  next := nativeinternal.CheckerProgrammer_WriteObjectFunctionsProps{
    Context:    props.Context,
    Config:     config,
    Functor:    props.Functor,
    Collection: props.Collection,
  }
  objects := nativeinternal.CheckerProgrammer.Write_object_functions(next)
  unions := nativeinternal.CheckerProgrammer.Write_union_functions(next)
  arrays := nativeinternal.CheckerProgrammer.Write_array_functions(next)
  tuples := nativeinternal.CheckerProgrammer.Write_tuple_functions(next)

  output := []*shimast.Node{}
  for i, stmt := range objects {
    if props.Functor.HasLocal(config.Prefix + "o" + isProgrammer_itoa(i)) {
      output = append(output, stmt)
    }
  }
  for i, stmt := range unions {
    if props.Functor.HasLocal(config.Prefix + "u" + isProgrammer_itoa(i)) {
      output = append(output, stmt)
    }
  }
  for i, stmt := range arrays {
    if props.Functor.HasLocal(config.Prefix + "a" + isProgrammer_itoa(i)) {
      output = append(output, stmt)
    }
  }
  for i, stmt := range tuples {
    if props.Functor.HasLocal(config.Prefix + "t" + isProgrammer_itoa(i)) {
      output = append(output, stmt)
    }
  }
  return output
}

func (isProgrammerNamespace) Decode(props IsProgrammer_DecodeProps) *shimast.Node {
  return nativeinternal.CheckerProgrammer.Decode(nativeinternal.CheckerProgrammer_DecodeProps{
    Context: props.Context,
    Config: IsProgrammer.Configure(struct {
      Options *IsProgrammer_CONFIG_IOptions
      Context nativecontext.ITypiaContext
      Functor *nativehelpers.FunctionProgrammer
    }{Options: nil, Context: props.Context, Functor: props.Functor}),
    Functor:  props.Functor,
    Metadata: props.Metadata,
    Input:    props.Input,
    Explore:  props.Explore,
  })
}

func (isProgrammerNamespace) Decode_object(props IsProgrammer_DecodeObjectProps) *shimast.Node {
  return nativeinternal.CheckerProgrammer.Decode_object(nativeinternal.CheckerProgrammer_DecodeObjectProps{
    Config: IsProgrammer.Configure(struct {
      Options *IsProgrammer_CONFIG_IOptions
      Context nativecontext.ITypiaContext
      Functor *nativehelpers.FunctionProgrammer
    }{Options: nil, Context: props.Context, Functor: props.Functor}),
    Functor: props.Functor,
    Object:  props.Object,
    Input:   props.Input,
    Explore: props.Explore,
  })
}

func (isProgrammerNamespace) Decode_to_json(props struct {
  Input     *shimast.Expression
  CheckNull bool
}) *shimast.Node {
  return isProgrammer_binary(
    nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
      CheckArray: false,
      CheckNull:  props.CheckNull,
      Input:      props.Input,
    }),
    shimast.KindAmpersandAmpersandToken,
    isProgrammer_binary(
      isProgrammer_factory.NewStringLiteral("function", shimast.TokenFlagsNone),
      shimast.KindEqualsEqualsEqualsToken,
      nativefactories.ValueFactory.TYPEOF(nativefactories.IdentifierFactory.Access(props.Input, "toJSON")),
    ),
  )
}

func (isProgrammerNamespace) Decode_functional(input *shimast.Expression) *shimast.Node {
  return isProgrammer_binary(
    isProgrammer_factory.NewStringLiteral("function", shimast.TokenFlagsNone),
    shimast.KindEqualsEqualsEqualsToken,
    nativefactories.ValueFactory.TYPEOF(input),
  )
}

func isProgrammer_reduce(expressions []*shimast.Node, operator shimast.Kind, initial *shimast.Expression) *shimast.Node {
  if len(expressions) == 0 {
    return initial
  }
  output := expressions[0]
  for _, expr := range expressions[1:] {
    output = isProgrammer_binary(output, operator, expr)
  }
  return output
}

func isProgrammer_binary(left *shimast.Expression, operator shimast.Kind, right *shimast.Expression) *shimast.Node {
  return isProgrammer_factory.NewBinaryExpression(
    nil,
    left,
    nil,
    isProgrammer_factory.NewToken(operator),
    right,
  )
}

func isProgrammer_option_numeric(options *IsProgrammer_CONFIG_IOptions) bool {
  return options != nil && options.Numeric != nil && *options.Numeric
}

func isProgrammer_option_undefined(options *IsProgrammer_CONFIG_IOptions) bool {
  return options == nil || options.Undefined == nil || *options.Undefined
}

func isProgrammer_itoa(value int) string {
  if value == 0 {
    return "0"
  }
  digits := []byte{}
  for value > 0 {
    digits = append([]byte{byte('0' + value%10)}, digits...)
    value /= 10
  }
  return string(digits)
}
