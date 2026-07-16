package internal

import (
  "fmt"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type checkerProgrammerNamespace struct{}

var CheckerProgrammer = checkerProgrammerNamespace{}

type CheckerProgrammer_IConfig struct {
  Prefix        string
  Path          bool
  Trace         bool
  Equals        bool
  Numeric       bool
  ObjectParents bool
  Addition      func() []*shimast.Node
  Decoder       func(props CheckerProgrammer_DecoderProps) *shimast.Node
  Combiner      CheckerProgrammer_IConfig_Combiner
  Atomist       func(props CheckerProgrammer_AtomistProps) *shimast.Node
  Joiner        CheckerProgrammer_IConfig_IJoiner
  Success       *shimast.Expression
  Depth         *int
}

type CheckerProgrammer_IConfig_Combiner func(props CheckerProgrammer_CombinerProps) *shimast.Node

type CheckerProgrammer_CombinerProps struct {
  Explore  CheckerProgrammer_IExplore
  Logic    string
  Input    *shimast.Expression
  Binaries []CheckerProgrammer_IBinary
  Expected string
}

type CheckerProgrammer_IConfig_IJoiner struct {
  Object   func(props CheckerProgrammer_JoinerObjectProps) *shimast.Node
  Array    func(props CheckerProgrammer_JoinerArrayProps) *shimast.Node
  Tuple    func(exprs []*shimast.Node) *shimast.Node
  Failure  func(props CheckerProgrammer_JoinerFailureProps) *shimast.Node
  Is       func(expression *shimast.Expression) *shimast.Node
  Required func(exp *shimast.Expression) *shimast.Node
  Full     func(props CheckerProgrammer_JoinerFullProps) *shimast.Node
}

type CheckerProgrammer_JoinerObjectProps struct {
  Input   *shimast.Expression
  Entries []nativehelpers.IExpressionEntry
  Object  *nativemetadata.MetadataObjectType
}

type CheckerProgrammer_JoinerArrayProps struct {
  Input *shimast.Expression
  Arrow *shimast.Node
}

type CheckerProgrammer_JoinerFailureProps struct {
  Input    *shimast.Expression
  Expected string
  Explore  *FeatureProgrammer_IExplore
}

type CheckerProgrammer_JoinerFullProps struct {
  Condition *shimast.Expression
  Input     *shimast.Expression
  Expected  string
  Explore   CheckerProgrammer_IExplore
}

type CheckerProgrammer_IExplore = FeatureProgrammer_IExplore

type CheckerProgrammer_IBinary struct {
  Expression *shimast.Node
  Combined   bool
}

type CheckerProgrammer_AtomistProps struct {
  Entry   nativehelpers.ICheckEntry
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
}

type CheckerProgrammer_ComposeProps struct {
  Context nativecontext.ITypiaContext
  Config  CheckerProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

type CheckerProgrammer_WriteProps = CheckerProgrammer_ComposeProps

type CheckerProgrammer_WriteObjectFunctionsProps struct {
  Context    nativecontext.ITypiaContext
  Config     CheckerProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *nativemetadata.MetadataCollection
}

type CheckerProgrammer_WriteArrayFunctionsProps = CheckerProgrammer_WriteObjectFunctionsProps
type CheckerProgrammer_WriteTupleFunctionsProps = CheckerProgrammer_WriteObjectFunctionsProps

type CheckerProgrammer_DecoderProps struct {
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  CheckerProgrammer_IExplore
}

type CheckerProgrammer_DecodeProps struct {
  Context  nativecontext.ITypiaContext
  Config   CheckerProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Expression
  Metadata *nativemetadata.MetadataSchema
  Explore  CheckerProgrammer_IExplore
}

type CheckerProgrammer_DecodeObjectProps struct {
  Config  CheckerProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Object  *nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
  Emit    *shimprinter.EmitContext
}

var checkerProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (checkerProgrammerNamespace) Compose(props CheckerProgrammer_ComposeProps) FeatureProgrammer_IComposed {
  return FeatureProgrammer.Compose(FeatureProgrammer_ComposeProps{
    Context: props.Context,
    Config:  checkerProgrammer_configure(props.Context, props.Config, props.Functor),
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
}

func (checkerProgrammerNamespace) Write(props CheckerProgrammer_WriteProps) *shimast.Node {
  return FeatureProgrammer.Write(FeatureProgrammer_WriteProps{
    Config:  checkerProgrammer_configure(props.Context, props.Config, props.Functor),
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
}

func (checkerProgrammerNamespace) Write_object_functions(props CheckerProgrammer_WriteObjectFunctionsProps) []*shimast.Node {
  return FeatureProgrammer.Write_object_functions(FeatureProgrammer_WriteObjectFunctionsProps{
    Config:     checkerProgrammer_configure(props.Context, props.Config, props.Functor),
    Context:    props.Context,
    Functor:    props.Functor,
    Collection: props.Collection,
  })
}

func (checkerProgrammerNamespace) Write_union_functions(props CheckerProgrammer_WriteObjectFunctionsProps) []*shimast.Node {
  config := props.Config
  config.Numeric = false
  return FeatureProgrammer.Write_union_functions(FeatureProgrammer_WriteUnionFunctionsProps{
    Config:     checkerProgrammer_configure(props.Context, config, props.Functor),
    Collection: props.Collection,
    Emit:       props.Context.Emit,
  })
}

func (checkerProgrammerNamespace) Write_array_functions(props CheckerProgrammer_WriteArrayFunctionsProps) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  arrays := props.Collection.Arrays()
  output := []*shimast.Node{}
  for i, typ := range arrays {
    if typ.Recursive == false {
      continue
    }
    input := f.NewIdentifier("input")
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%sa%d", props.Config.Prefix, i),
      Value: f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
          Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
          Type:   nativefactories.TypeFactory.Keyword("any"),
          Input:  input,
          Emit:   props.Context.Emit,
        })),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        checkerProgrammer_visit_guard(FeatureProgrammer.VisitKey(props.Config.Prefix, "a", i), checkerProgrammer_decode_array_inline(checkerProgrammer_decodeArrayInlineProps{
          Config:  props.Config,
          Context: props.Context,
          Functor: props.Functor,
          Input:   input,
          Array: nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
            Type: typ,
            Tags: [][]nativemetadata.IMetadataTypeTag{},
          }),
          Explore: CheckerProgrammer_IExplore{
            Tracable: props.Config.Trace,
            Source:   "function",
            From:     "array",
            Postfix:  "",
          },
        }), props.Context.Emit),
      ),
    }, props.Context.Emit))
  }
  return output
}

func (checkerProgrammerNamespace) Write_tuple_functions(props CheckerProgrammer_WriteTupleFunctionsProps) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  tuples := props.Collection.Tuples()
  output := []*shimast.Node{}
  for i, tuple := range tuples {
    if tuple.Recursive == false {
      continue
    }
    input := f.NewIdentifier("input")
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%st%d", props.Config.Prefix, i),
      Value: f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
          Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
          Type:   nativefactories.TypeFactory.Keyword("any"),
          Input:  input,
          Emit:   props.Context.Emit,
        })),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        checkerProgrammer_visit_guard(FeatureProgrammer.VisitKey(props.Config.Prefix, "t", i), checkerProgrammer_decode_tuple_inline(checkerProgrammer_decodeTupleInlineProps{
          Config:  props.Config,
          Context: props.Context,
          Functor: props.Functor,
          Input:   input,
          Tuple:   tuple,
          Explore: CheckerProgrammer_IExplore{
            Tracable: props.Config.Trace,
            Source:   "function",
            From:     "array",
            Postfix:  "",
          },
        }), props.Context.Emit),
      ),
    }, props.Context.Emit))
  }
  return output
}

func checkerProgrammer_configure(context nativecontext.ITypiaContext, config CheckerProgrammer_IConfig, functor *nativehelpers.FunctionProgrammer) FeatureProgrammer_IConfig {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, context.Emit)
  return FeatureProgrammer_IConfig{
    Types: FeatureProgrammer_IConfig_ITypes{
      Input: func(_ *shimchecker.Type, _ *string) *shimast.TypeNode {
        return nativefactories.TypeFactory.Keyword("any", context.Emit)
      },
      Output: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
        typeName := ""
        if name != nil {
          typeName = *name
        } else {
          typeName = nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
            Checker: context.Checker,
            Type:    t,
          })
        }
        return f.NewTypePredicateNode(
          nil,
          f.NewIdentifier("input"),
          f.NewTypeReferenceNode(
            f.NewIdentifier(typeName),
            nil,
          ),
        )
      },
    },
    Trace:         config.Trace,
    Path:          config.Path,
    Prefix:        config.Prefix,
    ObjectParents: config.ObjectParents,
    Visited:       functor.Visited,
    VisitGuard: func(next FeatureProgrammer_VisitGuardProps) *shimast.Node {
      return checkerProgrammer_visit_guard(next.Key, next.Body, context.Emit)
    },
    Initializer: func(next FeatureProgrammer_InitializerProps) FeatureProgrammer_InitializerOutput {
      collection := nativemetadata.NewMetadataCollection()
      result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
        Checker: next.Context.Checker,
        Options: nativefactories.MetadataFactory_IOptions{
          Escape:   false,
          Constant: true,
          Absorb:   true,
        },
        Components: collection,
        Type:       next.Type,
      })
      if result.Success == false {
        panic(nativecontext.TransformerError_from(struct {
          Code   string
          Errors []nativecontext.TransformerError_MetadataFactory_IError
        }{
          Code:   next.Functor.Method,
          Errors: checkerProgrammer_errors(result.Errors),
        }))
      }
      // Recursive type graphs are the only way the generated function call
      // graph can cycle, so visit tracking (issue #1820) turns on exactly
      // here; non-recursive types keep their emission byte-identical.
      if FeatureProgrammer.CollectionRecursive(collection) {
        next.Functor.SetVisited(true)
      }
      return FeatureProgrammer_InitializerOutput{
        Collection: collection,
        Metadata:   result.Data,
      }
    },
    Addition: func(collection *nativemetadata.MetadataCollection) []*shimast.Node {
      if config.Addition == nil {
        return []*shimast.Node{}
      }
      return config.Addition()
    },
    Decoder: func(next FeatureProgrammer_DecoderProps) *shimast.Node {
      if config.Decoder != nil {
        return config.Decoder(CheckerProgrammer_DecoderProps{
          Metadata: next.Metadata,
          Input:    next.Input,
          Explore:  next.Explore,
        })
      }
      return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
        Context:  context,
        Config:   config,
        Functor:  functor,
        Input:    next.Input,
        Metadata: next.Metadata,
        Explore:  next.Explore,
      })
    },
    Objector: FeatureProgrammer_IConfig_IObjector{
      Checker: func(next FeatureProgrammer_ObjectorCheckerProps) *shimast.Node {
        if config.Decoder != nil {
          return config.Decoder(CheckerProgrammer_DecoderProps{
            Metadata: next.Metadata,
            Input:    next.Input,
            Explore:  next.Explore,
          })
        }
        return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
          Context:  context,
          Config:   config,
          Functor:  functor,
          Input:    next.Input,
          Metadata: next.Metadata,
          Explore:  next.Explore,
        })
      },
      Decoder: func(next FeatureProgrammer_ObjectorDecoderProps) *shimast.Node {
        return CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
          Config:  config,
          Context: context,
          Functor: functor,
          Input:   next.Input,
          Object:  next.Object,
          Explore: next.Explore,
          Emit:    context.Emit,
        })
      },
      Joiner: func(next FeatureProgrammer_ObjectorJoinerProps) *shimast.Node {
        return config.Joiner.Object(CheckerProgrammer_JoinerObjectProps{
          Input:   next.Input,
          Entries: next.Entries,
          Object:  next.Object,
        })
      },
      Unionizer: func(next FeatureProgrammer_ObjectorUnionizerProps) *shimast.Node {
        if config.Equals {
          return nativeiterate.Decode_union_object(nativeiterate.Decode_union_objectProps{
            Checker: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
              return CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
                Config:  config,
                Context: context,
                Functor: functor,
                Object:  v.Object,
                Input:   v.Input,
                Explore: featureProgrammer_as_explore(v.Explore),
                Emit:    context.Emit,
              })
            },
            Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
              explore := featureProgrammer_as_explore(v.Explore)
              explore.Tracable = true
              return CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
                Config:  config,
                Context: context,
                Functor: functor,
                Input:   v.Input,
                Object:  v.Object,
                Explore: explore,
                Emit:    context.Emit,
              })
            },
            Success: func(expr *shimast.Expression) *shimast.Node {
              if config.Joiner.Is != nil {
                return config.Joiner.Is(expr)
              }
              return expr
            },
            Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
              return f.NewReturnStatement(config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
                Input:    v.Input,
                Expected: v.Expected,
                Explore:  nil,
              }))
            },
            Input:   next.Input,
            Objects: next.Objects,
            Explore: next.Explore,
          })
        }
        binaries := make([]CheckerProgrammer_IBinary, 0, len(next.Objects))
        for _, object := range next.Objects {
          binaries = append(binaries, CheckerProgrammer_IBinary{
            Expression: CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
              Config:  config,
              Context: context,
              Functor: functor,
              Object:  object,
              Input:   next.Input,
              Explore: next.Explore,
              Emit:    context.Emit,
            }),
            Combined: true,
          })
        }
        names := make([]string, 0, len(next.Objects))
        for _, object := range next.Objects {
          names = append(names, object.Name)
        }
        return config.Combiner(CheckerProgrammer_CombinerProps{
          Logic:    "or",
          Explore:  next.Explore,
          Input:    next.Input,
          Binaries: binaries,
          Expected: "(" + strings.Join(names, " | ") + ")",
        })
      },
      Failure: func(next FeatureProgrammer_ObjectorFailureProps) *shimast.Node {
        return f.NewReturnStatement(config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
          Input:    next.Input,
          Expected: next.Expected,
          Explore:  next.Explore,
        }))
      },
      Is:       config.Joiner.Is,
      Required: config.Joiner.Required,
      Full: func(next FeatureProgrammer_ObjectorFullProps) *shimast.Node {
        if config.Joiner.Full == nil {
          return next.Condition
        }
        return config.Joiner.Full(CheckerProgrammer_JoinerFullProps{
          Condition: next.Condition,
          Input:     next.Input,
          Expected:  next.Expected,
          Explore:   next.Explore,
        })
      },
      Type: nativefactories.TypeFactory.Keyword("boolean", context.Emit),
    },
    Generator: FeatureProgrammer_IConfig_IGenerator{
      Unions: func(collection *nativemetadata.MetadataCollection) []*shimast.Node {
        if config.Numeric == false {
          return nil
        }
        next := config
        next.Numeric = false
        return FeatureProgrammer.Write_union_functions(FeatureProgrammer_WriteUnionFunctionsProps{
          Config:     checkerProgrammer_configure(context, next, functor),
          Collection: collection,
          Emit:       context.Emit,
        })
      },
      Arrays: func(collection *nativemetadata.MetadataCollection) []*shimast.Node {
        return CheckerProgrammer.Write_array_functions(CheckerProgrammer_WriteArrayFunctionsProps{
          Context:    context,
          Config:     config,
          Functor:    functor,
          Collection: collection,
        })
      },
      Tuples: func(collection *nativemetadata.MetadataCollection) []*shimast.Node {
        return CheckerProgrammer.Write_tuple_functions(CheckerProgrammer_WriteTupleFunctionsProps{
          Context:    context,
          Config:     config,
          Functor:    functor,
          Collection: collection,
        })
      },
    },
  }
}

func (checkerProgrammerNamespace) Decode(props CheckerProgrammer_DecodeProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  if props.Metadata.Any {
    return props.Config.Success
  }
  // depth budget exhausted (shallow): accept composites as a bare object,
  // leave atomic-only metadata to the normal exact path.
  if props.Config.Depth != nil && *props.Config.Depth <= 0 {
    hasComposite := len(props.Metadata.Objects) != 0 ||
      len(props.Metadata.Arrays) != 0 ||
      len(props.Metadata.Tuples) != 0
    if hasComposite {
      return nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
        CheckNull:  true,
        CheckArray: false,
        Input:      props.Input,
      }, props.Context.Emit)
    }
  }

  top := []CheckerProgrammer_IBinary{}
  binaries := []CheckerProgrammer_IBinary{}
  add := func(next struct {
    Exact bool
    Left  *shimast.Expression
    Right *shimast.Expression
  }) {
    checkerProgrammer_create_add(&binaries, props.Input, next.Exact, next.Left, next.Right, props.Context.Emit)
  }
  // legacy getConstantValue keys on `typeof value` (string | bigint | number |
  // boolean). Go erases the literal type behind `any`, and typescript-go returns
  // bigint literals as jsnum.PseudoBigInt (never int64/uint64), so we branch on
  // the constant's declared `typ` instead of the Go runtime type.
  getConstantValue := func(typ string, value any) *shimast.Node {
    switch typ {
    case "string":
      return f.NewStringLiteral(fmt.Sprint(value), shimast.TokenFlagsNone)
    case "bigint":
      return nativefactories.ExpressionFactory.Bigint(value, props.Context.Emit)
    case "boolean":
      if b, ok := value.(bool); ok && b {
        return f.NewKeywordExpression(shimast.KindTrueKeyword)
      }
      return f.NewKeywordExpression(shimast.KindFalseKeyword)
    default:
      return f.NewIdentifier(fmt.Sprint(value))
    }
  }

  checkOptional := props.Metadata.Empty() || props.Metadata.IsUnionBucket()
  if checkOptional || props.Metadata.Nullable {
    if props.Metadata.Nullable {
      add(struct {
        Exact bool
        Left  *shimast.Expression
        Right *shimast.Expression
      }{Exact: props.Metadata.Nullable, Left: nativefactories.ValueFactory.NULL(props.Context.Emit)})
    } else {
      checkerProgrammer_create_add(&top, props.Input, props.Metadata.Nullable, nativefactories.ValueFactory.NULL(props.Context.Emit), nil, props.Context.Emit)
    }
  }
  if checkOptional || !props.Metadata.IsRequired() {
    if props.Metadata.IsRequired() {
      checkerProgrammer_create_add(&top, props.Input, false, nativefactories.ValueFactory.UNDEFINED(props.Context.Emit), nil, props.Context.Emit)
    } else {
      add(struct {
        Exact bool
        Left  *shimast.Expression
        Right *shimast.Expression
      }{Exact: true, Left: nativefactories.ValueFactory.UNDEFINED(props.Context.Emit)})
    }
  }

  if len(props.Metadata.Functions) != 0 {
    if nativehelpers.OptionPredicator.Functional(props.Context.Options) || props.Metadata.Size() != 1 {
      add(struct {
        Exact bool
        Left  *shimast.Expression
        Right *shimast.Expression
      }{
        Exact: true,
        Left:  f.NewStringLiteral("function", shimast.TokenFlagsNone),
        Right: nativefactories.ValueFactory.TYPEOF(props.Input, props.Context.Emit),
      })
    } else {
      binaries = append(binaries, CheckerProgrammer_IBinary{Combined: false, Expression: props.Config.Success})
    }
  }

  constants := []*nativemetadata.MetadataConstant{}
  constantLength := 0
  for _, c := range props.Metadata.Constants {
    if nativehelpers.AtomicPredicator.RuntimeConstant(struct {
      Metadata *nativemetadata.MetadataSchema
      Name     string
    }{Metadata: props.Metadata, Name: c.Type}) {
      constants = append(constants, c)
      constantLength += len(c.Values)
    }
  }
  if constantLength >= 10 {
    values := []*shimast.Node{}
    for _, c := range constants {
      for _, v := range c.Values {
        switch c.Type {
        case "boolean":
          if b, ok := v.Value.(bool); ok && b {
            values = append(values, f.NewKeywordExpression(shimast.KindTrueKeyword))
          } else {
            values = append(values, f.NewKeywordExpression(shimast.KindFalseKeyword))
          }
        case "bigint":
          values = append(values, nativefactories.ExpressionFactory.Bigint(v.Value, props.Context.Emit))
        case "number":
          values = append(values, nativefactories.ExpressionFactory.Number(v.Value, props.Context.Emit))
        default:
          values = append(values, f.NewStringLiteral(fmt.Sprint(v.Value), shimast.TokenFlagsNone))
        }
      }
    }
    setName := props.Functor.EmplaceVariableByKey(
      props.Config.Prefix+"v",
      checkerProgrammer_constant_set_key(constants),
      func(string) *shimast.Expression {
        return f.NewNewExpression(
          f.NewIdentifier("Set"),
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewArrayLiteralExpression(f.NewNodeList(values), false),
          }),
        )
      },
    )
    add(struct {
      Exact bool
      Left  *shimast.Expression
      Right *shimast.Expression
    }{
      Exact: true,
      Left:  f.NewKeywordExpression(shimast.KindTrueKeyword),
      Right: f.NewCallExpression(
        nativefactories.IdentifierFactory.Access(props.Context.Emit, setName, "has"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{props.Input}),
        shimast.NodeFlagsNone,
      ),
    })
  } else {
    for _, c := range constants {
      for _, v := range c.Values {
        add(struct {
          Exact bool
          Left  *shimast.Expression
          Right *shimast.Expression
        }{Exact: true, Left: getConstantValue(c.Type, v.Value)})
      }
    }
  }

  for _, atom := range props.Metadata.Atomics {
    if nativehelpers.AtomicPredicator.RuntimeAtomic(struct {
      Metadata *nativemetadata.MetadataSchema
      Name     string
    }{Metadata: props.Metadata, Name: atom.Type}) == false {
      continue
    }
    switch atom.Type {
    case "number":
      binaries = append(binaries, CheckerProgrammer_IBinary{
        Expression: props.Config.Atomist(CheckerProgrammer_AtomistProps{
          Explore: props.Explore,
          Entry: nativeiterate.Check_number(nativeiterate.Check_numberProps{
            Context: props.Context,
            Numeric: props.Config.Numeric,
            Atomic:  atom,
            Input:   props.Input,
          }),
          Input: props.Input,
        }),
        Combined: false,
      })
    case "bigint":
      binaries = append(binaries, CheckerProgrammer_IBinary{
        Expression: props.Config.Atomist(CheckerProgrammer_AtomistProps{
          Explore: props.Explore,
          Entry: nativeiterate.Check_bigint(nativeiterate.Check_bigintProps{
            Context: props.Context,
            Atomic:  atom,
            Input:   props.Input,
          }),
          Input: props.Input,
        }),
        Combined: false,
      })
    case "string":
      binaries = append(binaries, CheckerProgrammer_IBinary{
        Expression: props.Config.Atomist(CheckerProgrammer_AtomistProps{
          Explore: props.Explore,
          Entry: nativeiterate.Check_string(nativeiterate.Check_stringProps{
            Context: props.Context,
            Atomic:  atom,
            Input:   props.Input,
          }),
          Input: props.Input,
        }),
        Combined: false,
      })
    default:
      add(struct {
        Exact bool
        Left  *shimast.Expression
        Right *shimast.Expression
      }{
        Exact: true,
        Left:  f.NewStringLiteral(atom.Type, shimast.TokenFlagsNone),
        Right: nativefactories.ValueFactory.TYPEOF(props.Input, props.Context.Emit),
      })
    }
  }

  if len(props.Metadata.Templates) != 0 && nativehelpers.AtomicPredicator.Template(props.Metadata) {
    binaries = append(binaries, CheckerProgrammer_IBinary{
      Expression: props.Config.Atomist(CheckerProgrammer_AtomistProps{
        Explore: props.Explore,
        Entry: nativeiterate.Check_template(nativeiterate.Check_templateProps{
          Context:   props.Context,
          Templates: props.Metadata.Templates,
          Input:     props.Input,
        }),
        Input: props.Input,
      }),
      Combined: false,
    })
  }

  for _, native := range props.Metadata.Natives {
    binaries = append(binaries, CheckerProgrammer_IBinary{
      Expression: nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: native.Name, Input: props.Input}),
      Combined:   false,
    })
  }

  instances := []checkerProgrammer_IInstance{}
  prepare := func(next checkerProgrammer_IInstance) {
    instances = append(instances, next)
  }
  if len(props.Metadata.Sets) != 0 {
    body := (*shimast.Node)(nil)
    any := false
    names := []string{}
    for _, elem := range props.Metadata.Sets {
      names = append(names, "Set<"+elem.Value.GetDisplayName()+">")
      if elem.Value.Any {
        any = true
      }
    }
    if any == false {
      explore := props.Explore
      explore.From = "array"
      body = checkerProgrammer_explore_sets(checkerProgrammer_exploreSetsProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Sets: props.Metadata.Sets, Input: props.Input, Explore: explore})
    }
    prepare(checkerProgrammer_IInstance{
      Head:     nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: "Set", Input: props.Input}),
      Expected: strings.Join(names, " | "),
      Body:     body,
    })
  }
  if len(props.Metadata.Maps) != 0 {
    body := (*shimast.Node)(nil)
    any := false
    names := []string{}
    for _, elem := range props.Metadata.Maps {
      names = append(names, "Map<"+elem.Key.GetDisplayName()+", "+elem.Value.GetDisplayName()+">")
      if elem.Key.Any && elem.Value.Any {
        any = true
      }
    }
    if any == false {
      explore := props.Explore
      explore.From = "array"
      body = checkerProgrammer_explore_maps(checkerProgrammer_exploreMapsProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Maps: props.Metadata.Maps, Input: props.Input, Explore: explore})
    }
    prepare(checkerProgrammer_IInstance{
      Head:     nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: "Map", Input: props.Input}),
      Expected: strings.Join(names, " | "),
      Body:     body,
    })
  }

  if len(props.Metadata.Tuples)+len(props.Metadata.Arrays) > 0 {
    body := (*shimast.Node)(nil)
    conditions := [][]nativehelpers.ICheckEntry_ICondition{}
    expected := []string{}
    for _, tuple := range props.Metadata.Tuples {
      expected = append(expected, tuple.Type.GetDisplayName())
    }
    for _, array := range props.Metadata.Arrays {
      expected = append(expected, array.GetDisplayName())
    }
    if len(props.Metadata.Arrays) == 0 {
      explore := props.Explore
      explore.From = "array"
      if len(props.Metadata.Tuples) == 1 {
        body = checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Tuple: props.Metadata.Tuples[0], Input: props.Input, Explore: explore})
      } else {
        body = checkerProgrammer_explore_tuples(checkerProgrammer_exploreTuplesProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Tuples: props.Metadata.Tuples, Input: props.Input, Explore: explore})
      }
    } else if checkerProgrammer_array_any(props.Metadata.Arrays) {
      // A sole any-element array only needs its wrapper predicates. In a
      // union, however, those predicates participate in branch selection:
      // a failed tagged-any candidate must backtrack to a concrete array or
      // tuple candidate instead of accepting or rejecting the whole bucket.
      if len(props.Metadata.Arrays) == 1 && len(props.Metadata.Tuples) == 0 {
        body = nil
        conditions = nativeiterate.Check_array_length(nativeiterate.Check_array_lengthProps{
          Context: props.Context,
          Array:   props.Metadata.Arrays[0],
          Input:   props.Input,
        }).Conditions
      } else if checkerProgrammer_has_array_type_tags(props.Metadata.Arrays) {
        explore := props.Explore
        explore.From = "array"
        if len(props.Metadata.Tuples) == 0 {
          body = checkerProgrammer_explore_arrays(checkerProgrammer_exploreArraysProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Arrays: props.Metadata.Arrays, Input: props.Input, Explore: explore})
        } else {
          body = checkerProgrammer_explore_arrays_and_tuples(checkerProgrammer_exploreArraysAndTuplesProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Definitions: checkerProgrammer_array_tuple_definitions(props.Metadata.Arrays, props.Metadata.Tuples), Input: props.Input, Explore: explore})
        }
      } else {
        body = nil
      }
    } else if len(props.Metadata.Tuples) == 0 {
      explore := props.Explore
      explore.From = "array"
      if len(props.Metadata.Arrays) == 1 {
        body = checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Array: props.Metadata.Arrays[0], Input: props.Input, Explore: explore})
      } else {
        body = checkerProgrammer_explore_arrays(checkerProgrammer_exploreArraysProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Arrays: props.Metadata.Arrays, Input: props.Input, Explore: explore})
      }
    } else {
      body = checkerProgrammer_explore_arrays_and_tuples(checkerProgrammer_exploreArraysAndTuplesProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Definitions: checkerProgrammer_array_tuple_definitions(props.Metadata.Arrays, props.Metadata.Tuples), Input: props.Input, Explore: props.Explore})
    }
    prepare(checkerProgrammer_IInstance{
      Head: props.Config.Atomist(CheckerProgrammer_AtomistProps{
        Explore: props.Explore,
        Entry: nativehelpers.ICheckEntry{
          Expected:   strings.Join(expected, " | "),
          Expression: nativefactories.ExpressionFactory.IsArray(props.Input, props.Context.Emit),
          Conditions: conditions,
        },
        Input: props.Input,
      }),
      Expected: strings.Join(expected, " | "),
      Body:     body,
    })
  }

  if len(props.Metadata.Objects) > 0 {
    checkArray := false
    for _, obj := range props.Metadata.Objects {
      if obj.Type.HasRequiredLiteralProperty() == false {
        checkArray = true
        break
      }
    }
    names := []string{}
    for _, obj := range props.Metadata.Objects {
      names = append(names, obj.Type.GetDisplayName())
    }
    explore := props.Explore
    explore.From = "object"
    prepare(checkerProgrammer_IInstance{
      Head: nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
        CheckNull:  true,
        CheckArray: checkArray,
        Input:      props.Input,
      }, props.Context.Emit),
      Expected: strings.Join(names, " | "),
      Body: checkerProgrammer_explore_objects(checkerProgrammer_exploreObjectsProps{
        Config: props.Config, Context: props.Context, Functor: props.Functor, Metadata: props.Metadata, Input: props.Input, Explore: explore,
      }),
    })
  }

  if len(instances) != 0 {
    transformer := func(instance checkerProgrammer_IInstance) CheckerProgrammer_IBinary {
      if instance.Body != nil {
        return CheckerProgrammer_IBinary{
          Expression: checkerProgrammer_and(instance.Head, instance.Body, props.Context.Emit),
          Combined:   true,
        }
      }
      return CheckerProgrammer_IBinary{Expression: instance.Head, Combined: false}
    }
    if len(instances) == 1 {
      instance := instances[0]
      if instance.Body != nil {
        binaries = append(binaries, CheckerProgrammer_IBinary{
          Expression: props.Config.Combiner(CheckerProgrammer_CombinerProps{
            Explore: props.Explore,
            Logic:   "and",
            Input:   props.Input,
            Binaries: []CheckerProgrammer_IBinary{
              {Expression: instance.Head, Combined: false},
              {Expression: instance.Body, Combined: true},
            },
            Expected: props.Metadata.GetDisplayName(),
          }),
          Combined: true,
        })
      } else {
        binaries = append(binaries, transformer(instance))
      }
    } else {
      transformed := make([]CheckerProgrammer_IBinary, 0, len(instances))
      for _, instance := range instances {
        transformed = append(transformed, transformer(instance))
      }
      binaries = append(binaries, CheckerProgrammer_IBinary{
        Expression: props.Config.Combiner(CheckerProgrammer_CombinerProps{
          Explore:  props.Explore,
          Logic:    "or",
          Input:    props.Input,
          Binaries: transformed,
          Expected: props.Metadata.GetDisplayName(),
        }),
        Combined: true,
      })
    }
  }

  if props.Metadata.Escaped != nil {
    var expression *shimast.Node
    if props.Metadata.Escaped.Original.Size() == 1 && len(props.Metadata.Escaped.Original.Natives) == 1 {
      expression = nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: props.Metadata.Escaped.Original.Natives[0].Name, Input: props.Input})
    } else {
      expression = checkerProgrammer_and(
        CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Metadata: props.Metadata.Escaped.Original, Input: props.Input, Explore: props.Explore}),
        checkerProgrammer_and(
          checkerProgrammer_decode_to_json(struct {
            Input     *shimast.Expression
            CheckNull bool
            Emit      *shimprinter.EmitContext
          }{Input: props.Input, CheckNull: false, Emit: props.Context.Emit}),
          checkerProgrammer_decode_escaped(checkerProgrammer_decodeEscapedProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Metadata: props.Metadata.Escaped.Returns, Input: props.Input, Explore: props.Explore}),
          props.Context.Emit,
        ),
        props.Context.Emit,
      )
    }
    binaries = append(binaries, CheckerProgrammer_IBinary{Combined: false, Expression: expression})
  }

  if len(top) != 0 && len(binaries) != 0 {
    next := append([]CheckerProgrammer_IBinary{}, top...)
    next = append(next, CheckerProgrammer_IBinary{
      Expression: props.Config.Combiner(CheckerProgrammer_CombinerProps{Explore: props.Explore, Logic: "or", Input: props.Input, Binaries: binaries, Expected: props.Metadata.GetDisplayName()}),
      Combined:   true,
    })
    return props.Config.Combiner(CheckerProgrammer_CombinerProps{Explore: props.Explore, Logic: "and", Input: props.Input, Binaries: next, Expected: props.Metadata.GetDisplayName()})
  }
  if len(binaries) != 0 {
    return props.Config.Combiner(CheckerProgrammer_CombinerProps{Explore: props.Explore, Logic: "or", Input: props.Input, Binaries: binaries, Expected: props.Metadata.GetDisplayName()})
  }
  return props.Config.Success
}

func checkerProgrammer_constant_set_key(constants []*nativemetadata.MetadataConstant) string {
  builder := strings.Builder{}
  for _, constant := range constants {
    builder.WriteString(constant.Type)
    builder.WriteByte(':')
    for _, value := range constant.Values {
      text := fmt.Sprintf("%T:%v", value.Value, value.Value)
      fmt.Fprintf(&builder, "%d:%s;", len(text), text)
    }
    builder.WriteByte('|')
  }
  return builder.String()
}

func (checkerProgrammerNamespace) Decode_object(props CheckerProgrammer_DecodeObjectProps) *shimast.Node {
  props.Object.Validated = true
  if props.Config.Depth != nil {
    return checkerProgrammer_decode_object_inline(props)
  }
  return FeatureProgrammer.Decode_object(FeatureProgrammer_DecodeObjectProps{
    Config: FeatureProgrammer_DecodeObjectConfig{
      Prefix:  props.Config.Prefix,
      Path:    props.Config.Path,
      Trace:   props.Config.Trace,
      Visited: props.Functor.Visited(),
    },
    Functor: props.Functor,
    Object:  props.Object,
    Input:   props.Input,
    Explore: props.Explore,
    Emit:    props.Emit,
  })
}

// checkerProgrammer_descend returns a copy of config whose shallow depth budget
// is spent by one level. nil (the non-shallow callers) is left untouched.
func checkerProgrammer_descend(config CheckerProgrammer_IConfig) CheckerProgrammer_IConfig {
  if config.Depth == nil {
    return config
  }
  next := *config.Depth - 1
  config.Depth = &next
  return config
}

// checkerProgrammer_decode_object_inline emits an object's property checks
// inline (instead of the shared _io function) so the shallow depth budget can
// decrement one level per nesting. The finite budget also bounds recursion: a
// self-referential type stops descending once the budget reaches zero, where
// Decode collapses it to a structural object guard.
func checkerProgrammer_decode_object_inline(props CheckerProgrammer_DecodeObjectProps) *shimast.Node {
  child := checkerProgrammer_descend(props.Config)
  entries := nativeiterate.Feature_object_entries(nativeiterate.Feature_object_entriesProps{
    Config: nativeiterate.Feature_object_entriesConfig{
      Path:  props.Config.Path,
      Trace: props.Config.Trace,
      Decoder: func(next nativeiterate.Feature_object_entriesDecoderProps) *shimast.Node {
        explore := props.Explore
        explore.From = next.Explore.From
        explore.Postfix = next.Explore.Postfix
        explore.Source = next.Explore.Source
        explore.Tracable = next.Explore.Tracable
        return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
          Context:  props.Context,
          Config:   child,
          Functor:  props.Functor,
          Input:    next.Input,
          Metadata: next.Metadata,
          Explore:  explore,
        })
      },
    },
    Context: props.Context,
    Input:   props.Input,
    Object:  props.Object,
  })
  return props.Config.Joiner.Object(CheckerProgrammer_JoinerObjectProps{
    Input:   props.Input,
    Entries: entries,
    Object:  props.Object,
  })
}

type checkerProgrammer_decodeArrayProps struct {
  Config  CheckerProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Array   *nativemetadata.MetadataArray
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
}

type checkerProgrammer_decodeArrayInlineProps = checkerProgrammer_decodeArrayProps

func checkerProgrammer_decode_array(props checkerProgrammer_decodeArrayProps) *shimast.Node {
  if props.Array.Type.Recursive == false {
    return checkerProgrammer_decode_array_inline(props)
  }
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  arrayExplore := props.Explore
  arrayExplore.Source = "function"
  arrayExplore.From = "array"
  index := 0
  if props.Array.Type.Index != nil {
    index = *props.Array.Type.Index
  }
  return checkerProgrammer_or(
    f.NewCallExpression(
      f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%sa%d", props.Config.Prefix, index))),
      nil,
      nil,
      f.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
        Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
        Explore: arrayExplore,
        Input:   props.Input,
        Emit:    props.Context.Emit,
      })),
      shimast.NodeFlagsNone,
    ),
    props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
      Input:    props.Input,
      Expected: props.Array.Type.GetDisplayName(),
      Explore:  &arrayExplore,
    }),
    props.Context.Emit,
  )
}

func checkerProgrammer_decode_array_inline(props checkerProgrammer_decodeArrayInlineProps) *shimast.Node {
  length := nativeiterate.Check_array_length(nativeiterate.Check_array_lengthProps{
    Context: props.Context,
    Array:   props.Array,
    Input:   props.Input,
  })
  main := FeatureProgrammer.Decode_array(FeatureProgrammer_DecodeArrayProps{
    Config: FeatureProgrammer_DecodeArrayConfig{
      Prefix: props.Config.Prefix,
      Trace:  props.Config.Trace,
      Path:   props.Config.Path,
      Decoder: func(next FeatureProgrammer_DecoderProps) *shimast.Node {
        return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
          Context:  props.Context,
          Config:   props.Config,
          Functor:  props.Functor,
          Input:    next.Input,
          Metadata: next.Metadata,
          Explore:  next.Explore,
        })
      },
    },
    Functor: props.Functor,
    Combiner: func(next struct {
      Input *shimast.Expression
      Arrow *shimast.Node
    }) *shimast.Node {
      return props.Config.Joiner.Array(CheckerProgrammer_JoinerArrayProps{
        Input: next.Input,
        Arrow: next.Arrow,
      })
    },
    Array:   props.Array,
    Input:   props.Input,
    Explore: props.Explore,
    Emit:    props.Context.Emit,
  })
  if length.Expression == nil && len(length.Conditions) == 0 {
    return main
  }
  return checkerProgrammer_and(
    props.Config.Atomist(CheckerProgrammer_AtomistProps{
      Explore: props.Explore,
      Input:   props.Input,
      Entry:   length,
    }),
    main,
    props.Context.Emit,
  )
}

type checkerProgrammer_decodeTupleProps struct {
  Context nativecontext.ITypiaContext
  Config  CheckerProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Tuple   *nativemetadata.MetadataTuple
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
}

type checkerProgrammer_decodeTupleInlineProps struct {
  Context nativecontext.ITypiaContext
  Config  CheckerProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Tuple   *nativemetadata.MetadataTupleType
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
}

func checkerProgrammer_decode_tuple(props checkerProgrammer_decodeTupleProps) *shimast.Node {
  if props.Tuple.Type.Recursive == false {
    return checkerProgrammer_decode_tuple_inline(checkerProgrammer_decodeTupleInlineProps{
      Context: props.Context,
      Config:  props.Config,
      Functor: props.Functor,
      Tuple:   props.Tuple.Type,
      Input:   props.Input,
      Explore: props.Explore,
    })
  }
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  arrayExplore := props.Explore
  arrayExplore.Source = "function"
  arrayExplore.From = "array"
  index := 0
  if props.Tuple.Type.Index != nil {
    index = *props.Tuple.Type.Index
  }
  return checkerProgrammer_or(
    f.NewCallExpression(
      f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%st%d", props.Config.Prefix, index))),
      nil,
      nil,
      f.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
        Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
        Explore: arrayExplore,
        Input:   props.Input,
        Emit:    props.Context.Emit,
      })),
      shimast.NodeFlagsNone,
    ),
    props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
      Input:    props.Input,
      Expected: props.Tuple.Type.GetDisplayName(),
      Explore:  &arrayExplore,
    }),
    props.Context.Emit,
  )
}

func checkerProgrammer_decode_tuple_inline(props checkerProgrammer_decodeTupleInlineProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  binaries := []*shimast.Node{}
  for index, metadata := range props.Tuple.Elements {
    if metadata.Rest != nil {
      continue
    }
    explore := props.Explore
    explore.From = "array"
    if len(props.Explore.Postfix) != 0 {
      explore.Postfix = checkerProgrammer_postfix_of_tuple(props.Explore.Postfix) + fmt.Sprintf("[%d]\"", index)
    } else {
      explore.Postfix = fmt.Sprintf("\"[%d]\"", index)
    }
    binaries = append(binaries, CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
      Context:  props.Context,
      Config:   props.Config,
      Functor:  props.Functor,
      Input:    f.NewElementAccessExpression(props.Input, nil, nativefactories.ExpressionFactory.Number(index, props.Context.Emit), shimast.NodeFlagsNone),
      Metadata: metadata,
      Explore:  explore,
    }))
  }

  var rest *shimast.Node
  if len(props.Tuple.Elements) != 0 && props.Tuple.Elements[len(props.Tuple.Elements)-1].Rest != nil {
    last := props.Tuple.Elements[len(props.Tuple.Elements)-1]
    explore := props.Explore
    start := len(props.Tuple.Elements) - 1
    explore.Start = &start
    rest = CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
      Config:  props.Config,
      Context: props.Context,
      Functor: props.Functor,
      Input: f.NewCallExpression(
        nativefactories.IdentifierFactory.Access(props.Context.Emit, props.Input, "slice"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{nativefactories.ExpressionFactory.Number(len(props.Tuple.Elements)-1, props.Context.Emit)}),
        shimast.NodeFlagsNone,
      ),
      Metadata: checkerProgrammer_wrap_metadata_rest_tuple(last.Rest),
      Explore:  explore,
    })
  }

  arrayLength := nativefactories.IdentifierFactory.Access(props.Context.Emit, props.Input, "length")
  entries := []CheckerProgrammer_IBinary{}
  if rest == nil {
    allRequired := true
    required := 0
    for _, elem := range props.Tuple.Elements {
      if elem.Optional == false {
        required++
      } else {
        allRequired = false
      }
    }
    if allRequired {
      entries = append(entries, CheckerProgrammer_IBinary{
        Combined: false,
        Expression: checkerProgrammer_equal(
          arrayLength,
          nativefactories.ExpressionFactory.Number(len(props.Tuple.Elements), props.Context.Emit),
          props.Context.Emit,
        ),
      })
    } else {
      entries = append(entries, CheckerProgrammer_IBinary{
        Combined: false,
        Expression: checkerProgrammer_and(
          checkerProgrammer_binary(nativefactories.ExpressionFactory.Number(required, props.Context.Emit), shimast.KindLessThanEqualsToken, arrayLength, props.Context.Emit),
          checkerProgrammer_binary(nativefactories.ExpressionFactory.Number(len(props.Tuple.Elements), props.Context.Emit), shimast.KindGreaterThanEqualsToken, arrayLength, props.Context.Emit),
          props.Context.Emit,
        ),
      })
    }
  }
  if props.Config.Joiner.Tuple != nil {
    entries = append(entries, CheckerProgrammer_IBinary{Expression: props.Config.Joiner.Tuple(binaries), Combined: true})
  } else {
    for _, expr := range binaries {
      entries = append(entries, CheckerProgrammer_IBinary{Expression: expr, Combined: true})
    }
  }
  if rest != nil {
    entries = append(entries, CheckerProgrammer_IBinary{Expression: rest, Combined: true})
  }
  names := make([]string, 0, len(props.Tuple.Elements))
  for _, elem := range props.Tuple.Elements {
    names = append(names, elem.GetDisplayName())
  }
  return props.Config.Combiner(CheckerProgrammer_CombinerProps{
    Explore:  props.Explore,
    Logic:    "and",
    Input:    props.Input,
    Binaries: entries,
    Expected: "[" + strings.Join(names, ", ") + "]",
  })
}

type checkerProgrammer_decodeEscapedProps struct {
  Config   CheckerProgrammer_IConfig
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  CheckerProgrammer_IExplore
}

func checkerProgrammer_decode_escaped(props checkerProgrammer_decodeEscapedProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    f.NewParenthesizedExpression(
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
          Context:  props.Context,
          Config:   props.Config,
          Functor:  props.Functor,
          Metadata: props.Metadata,
          Input:    f.NewIdentifier("input"),
          Explore:  props.Explore,
        }),
      ),
    ),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewCallExpression(
        nativefactories.IdentifierFactory.Access(props.Context.Emit, props.Input, "toJSON"),
        nil,
        nil,
        nil,
        shimast.NodeFlagsNone,
      ),
    }),
    shimast.NodeFlagsNone,
  )
}

type checkerProgrammer_exploreSetsProps struct {
  Context nativecontext.ITypiaContext
  Config  CheckerProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Sets    []*nativemetadata.MetadataSet
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_sets(props checkerProgrammer_exploreSetsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativehelpers.UnionExplorer.Set(nativehelpers.UnionExplorer_SetProps{
      Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
        Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
            Context:  props.Context,
            Config:   props.Config,
            Functor:  props.Functor,
            Input:    v.Input,
            Metadata: v.Definition.(*nativemetadata.MetadataSchema),
            Explore:  featureProgrammer_as_explore(v.Explore),
          })
        },
        Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          return checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{
            Config: props.Config, Context: props.Context, Functor: props.Functor, Array: v.Definition.(*nativemetadata.MetadataArray), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore),
          })
        },
        Empty:   props.Config.Success,
        Success: props.Config.Success,
        Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
          explore := featureProgrammer_as_explore(v.Explore)
          return f.NewReturnStatement(props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{Input: v.Input, Expected: v.Expected, Explore: &explore}))
        },
      },
      Parameters: []*shimast.Node{},
      Input:      props.Input,
      Sets:       props.Sets,
      Explore:    props.Explore,
      Emit:       props.Context.Emit,
    }),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

type checkerProgrammer_exploreMapsProps struct {
  Context nativecontext.ITypiaContext
  Config  CheckerProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Expression
  Maps    []*nativemetadata.MetadataMap
  Explore CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_maps(props checkerProgrammer_exploreMapsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativehelpers.UnionExplorer.Map(nativehelpers.UnionExplorer_MapProps{
      Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
        Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          pair := v.Definition.([]*nativemetadata.MetadataSchema)
          explore := featureProgrammer_as_explore(v.Explore)
          leftExplore := explore
          leftExplore.Postfix = explore.Postfix + "[0]"
          rightExplore := explore
          rightExplore.Postfix = explore.Postfix + "[1]"
          return checkerProgrammer_and(
            CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
              Config: props.Config, Context: props.Context, Functor: props.Functor,
              Input: f.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(0, props.Context.Emit), shimast.NodeFlagsNone), Metadata: pair[0], Explore: leftExplore,
            }),
            CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
              Config: props.Config, Context: props.Context, Functor: props.Functor,
              Input: f.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(1, props.Context.Emit), shimast.NodeFlagsNone), Metadata: pair[1], Explore: rightExplore,
            }),
            props.Context.Emit,
          )
        },
        Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          return checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{
            Context: props.Context, Config: props.Config, Functor: props.Functor, Array: v.Definition.(*nativemetadata.MetadataArray), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore),
          })
        },
        Empty:   props.Config.Success,
        Success: props.Config.Success,
        Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
          explore := featureProgrammer_as_explore(v.Explore)
          return f.NewReturnStatement(props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{Input: v.Input, Expected: v.Expected, Explore: &explore}))
        },
      },
      Parameters: []*shimast.Node{},
      Input:      props.Input,
      Maps:       props.Maps,
      Explore:    props.Explore,
      Emit:       props.Context.Emit,
    }),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

type checkerProgrammer_exploreTuplesProps struct {
  Config  CheckerProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Tuples  []*nativemetadata.MetadataTuple
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
}

type checkerProgrammer_exploreArraysProps struct {
  Config  CheckerProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Arrays  []*nativemetadata.MetadataArray
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
}

type checkerProgrammer_exploreArraysAndTuplesProps struct {
  Config      CheckerProgrammer_IConfig
  Context     nativecontext.ITypiaContext
  Functor     *nativehelpers.FunctionProgrammer
  Definitions []any
  Input       *shimast.Expression
  Explore     CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_tuples(props checkerProgrammer_exploreTuplesProps) *shimast.Node {
  definitions := make([]any, 0, len(props.Tuples))
  for _, tuple := range props.Tuples {
    definitions = append(definitions, tuple)
  }
  return checkerProgrammer_explore_array_like_union_types(checkerProgrammer_exploreArrayLikeUnionTypesProps{
    Config: props.Config, Functor: props.Functor, Definitions: definitions, Input: props.Input, Explore: props.Explore, Emit: props.Context.Emit,
    Factory: func(next checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps) *shimast.Node {
      tuples := make([]*nativemetadata.MetadataTuple, 0, len(next.Definitions))
      for _, value := range next.Definitions {
        tuples = append(tuples, value.(*nativemetadata.MetadataTuple))
      }
      return nativehelpers.UnionExplorer.Tuple(nativehelpers.UnionExplorer_TupleProps{
        Config: checkerProgrammer_array_like_config(props.Context, props.Config, props.Functor,
          func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
            return checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Input: v.Input, Tuple: v.Definition.(*nativemetadata.MetadataTuple), Explore: featureProgrammer_as_explore(v.Explore)})
          },
          func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
            return checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Tuple: v.Definition.(*nativemetadata.MetadataTuple), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore)})
          }),
        Parameters: next.Parameters,
        Tuples:     tuples,
        Input:      next.Input,
        Explore:    next.Explore,
        Emit:       props.Context.Emit,
      })
    },
  })
}

func checkerProgrammer_explore_arrays(props checkerProgrammer_exploreArraysProps) *shimast.Node {
  definitions := make([]any, 0, len(props.Arrays))
  for _, array := range props.Arrays {
    definitions = append(definitions, array)
  }
  return checkerProgrammer_explore_array_like_union_types(checkerProgrammer_exploreArrayLikeUnionTypesProps{
    Config: props.Config, Functor: props.Functor, Definitions: definitions, Input: props.Input, Explore: props.Explore, Emit: props.Context.Emit,
    Factory: func(next checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps) *shimast.Node {
      arrays := make([]*nativemetadata.MetadataArray, 0, len(next.Definitions))
      for _, value := range next.Definitions {
        arrays = append(arrays, value.(*nativemetadata.MetadataArray))
      }
      config := checkerProgrammer_array_like_config(props.Context, props.Config, props.Functor,
        func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Metadata: v.Definition.(*nativemetadata.MetadataSchema), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore)})
        },
        func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          return checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Array: v.Definition.(*nativemetadata.MetadataArray), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore)})
        })
      if checkerProgrammer_has_array_type_tags(arrays) {
        config.Candidate = checkerProgrammer_array_tag_candidate(props.Context)
      }
      return nativehelpers.UnionExplorer.Array(nativehelpers.UnionExplorer_ArrayProps{
        Config:     config,
        Parameters: next.Parameters,
        Arrays:     arrays,
        Input:      next.Input,
        Explore:    next.Explore,
        Emit:       props.Context.Emit,
      })
    },
  })
}

func checkerProgrammer_explore_arrays_and_tuples(props checkerProgrammer_exploreArraysAndTuplesProps) *shimast.Node {
  return checkerProgrammer_explore_array_like_union_types(checkerProgrammer_exploreArrayLikeUnionTypesProps{
    Config: props.Config, Functor: props.Functor, Definitions: props.Definitions, Input: props.Input, Explore: props.Explore, Emit: props.Context.Emit,
    Factory: func(next checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps) *shimast.Node {
      config := checkerProgrammer_array_like_config(props.Context, props.Config, props.Functor,
        func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          if tuple, ok := v.Definition.(*nativemetadata.MetadataTuple); ok {
            return checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Input: v.Input, Tuple: tuple, Explore: featureProgrammer_as_explore(v.Explore)})
          }
          expected := []string{}
          for _, elem := range props.Definitions {
            switch x := elem.(type) {
            case *nativemetadata.MetadataArray:
              expected = append(expected, x.GetDisplayName())
            case *nativemetadata.MetadataTuple:
              expected = append(expected, x.Type.GetDisplayName())
            }
          }
          return props.Config.Atomist(CheckerProgrammer_AtomistProps{
            Explore: featureProgrammer_as_explore(v.Explore),
            Entry: nativehelpers.ICheckEntry{
              Expected:   strings.Join(expected, " | "),
              Expression: CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{Functor: props.Functor, Context: props.Context, Config: props.Config, Metadata: v.Definition.(*nativemetadata.MetadataSchema), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore)}),
              Conditions: [][]nativehelpers.ICheckEntry_ICondition{},
            },
            Input: v.Container,
          })
        },
        func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          if tuple, ok := v.Definition.(*nativemetadata.MetadataTuple); ok {
            return checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Input: v.Input, Tuple: tuple, Explore: featureProgrammer_as_explore(v.Explore)})
          }
          return checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Input: v.Input, Array: v.Definition.(*nativemetadata.MetadataArray), Explore: featureProgrammer_as_explore(v.Explore)})
        })
      if checkerProgrammer_definitions_have_array_type_tags(next.Definitions) {
        config.Candidate = checkerProgrammer_array_tag_candidate(props.Context)
      }
      return nativehelpers.UnionExplorer.Array_or_tuple(nativehelpers.UnionExplorer_ArrayOrTupleProps{
        Config:      config,
        Parameters:  next.Parameters,
        Definitions: next.Definitions,
        Input:       next.Input,
        Explore:     next.Explore,
        Emit:        props.Context.Emit,
      })
    },
  })
}

type checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps struct {
  Parameters  []*shimast.Node
  Definitions []any
  Input       *shimast.Expression
  Explore     CheckerProgrammer_IExplore
}

type checkerProgrammer_exploreArrayLikeUnionTypesProps struct {
  Config      CheckerProgrammer_IConfig
  Functor     *nativehelpers.FunctionProgrammer
  Factory     func(next checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps) *shimast.Node
  Input       *shimast.Expression
  Definitions []any
  Explore     CheckerProgrammer_IExplore
  Emit        *shimprinter.EmitContext
}

func checkerProgrammer_explore_array_like_union_types(props checkerProgrammer_exploreArrayLikeUnionTypesProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Emit)
  arrayExplore := props.Explore
  arrayExplore.Source = "function"
  arrayExplore.From = "array"
  // EmplaceUnion deduplicates generated union functions by this key, so it
  // must stay on the unique identifier names; only the human-facing failure
  // message switches to the display rendering.
  names := checkerProgrammer_definition_names(props.Definitions)
  displays := checkerProgrammer_definition_display_names(props.Definitions)
  return checkerProgrammer_or(
    f.NewCallExpression(
      f.NewIdentifier(
        props.Functor.EmplaceUnion(
          props.Config.Prefix,
          strings.Join(names, " | "),
          func() *shimast.Node {
            nextExplore := arrayExplore
            nextExplore.Postfix = ""
            return props.Factory(checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps{
              Parameters: FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
                Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
                Type:   nativefactories.TypeFactory.Keyword("any"),
                Input:  f.NewIdentifier("input"),
                Emit:   props.Emit,
              }),
              Definitions: props.Definitions,
              Explore:     nextExplore,
              Input:       f.NewIdentifier("input"),
            })
          },
        ),
      ),
      nil,
      nil,
      f.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
        Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
        Input:   props.Input,
        Explore: props.Explore,
        Emit:    props.Emit,
      })),
      shimast.NodeFlagsNone,
    ),
    props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
      Input:    props.Input,
      Expected: strings.Join(displays, " | "),
      Explore:  &arrayExplore,
    }),
    props.Emit,
  )
}

type checkerProgrammer_exploreObjectsProps struct {
  Config   CheckerProgrammer_IConfig
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Expression
  Metadata *nativemetadata.MetadataSchema
  Explore  CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_objects(props checkerProgrammer_exploreObjectsProps) *shimast.Node {
  if len(props.Metadata.Objects) == 1 {
    return checkerProgrammer_decode_object_reference(checkerProgrammer_decodeObjectReferenceProps{
      Config:  props.Config,
      Context: props.Context,
      Functor: props.Functor,
      Object:  props.Metadata.Objects[0],
      Input:   props.Input,
      Explore: props.Explore,
    })
  }
  if checkerProgrammer_has_object_type_tags(props.Metadata.Objects) {
    names := make([]string, 0, len(props.Metadata.Objects))
    for _, object := range props.Metadata.Objects {
      names = append(names, object.GetDisplayName())
    }
    expected := "(" + strings.Join(names, " | ") + ")"
    f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
    statements := make([]*shimast.Node, 0, len(props.Metadata.Objects)+1)
    for _, object := range props.Metadata.Objects {
      statements = append(statements, f.NewIfStatement(
        checkerProgrammer_check_object_reference(checkerProgrammer_decodeObjectReferenceProps{
          Config:  props.Config,
          Context: props.Context,
          Functor: props.Functor,
          Object:  object,
          Input:   props.Input,
          Explore: props.Explore,
        }),
        f.NewReturnStatement(props.Config.Success),
        nil,
      ))
    }
    statements = append(statements, f.NewReturnStatement(props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
      Input:    props.Input,
      Expected: expected,
      Explore:  &props.Explore,
    })))
    return f.NewCallExpression(
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList(nil),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewBlock(f.NewNodeList(statements), true),
      ),
      nil,
      nil,
      nil,
      shimast.NodeFlagsNone,
    )
  }
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Context.Emit)
  index := 0
  if props.Metadata.Union_index != nil {
    index = *props.Metadata.Union_index
  }
  return f.NewCallExpression(
    f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", props.Config.Prefix, index))),
    nil,
    nil,
    f.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
      Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
      Input:   props.Input,
      Explore: props.Explore,
      Emit:    props.Context.Emit,
    })),
    shimast.NodeFlagsNone,
  )
}

type checkerProgrammer_decodeObjectReferenceProps struct {
  Config  CheckerProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Object  *nativemetadata.MetadataObject
  Input   *shimast.Expression
  Explore CheckerProgrammer_IExplore
}

func checkerProgrammer_check_object_reference(props checkerProgrammer_decodeObjectReferenceProps) *shimast.Node {
  explore := props.Explore
  explore.Tracable = false
  decoded := CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
    Config:  props.Config,
    Context: props.Context,
    Functor: props.Functor,
    Object:  props.Object.Type,
    Input:   props.Input,
    Explore: explore,
    Emit:    props.Context.Emit,
  })
  tags := nativeiterate.Check_object_type_tags(nativeiterate.Check_object_type_tagsProps{
    Context: props.Context,
    Object:  props.Object,
    Input:   props.Input,
  })
  if tags.Expression == nil && len(tags.Conditions) == 0 {
    return decoded
  }
  return checkerProgrammer_and(
    decoded,
    checkerProgrammer_entry_condition(tags, props.Context.Emit),
    props.Context.Emit,
  )
}

func checkerProgrammer_decode_object_reference(props checkerProgrammer_decodeObjectReferenceProps) *shimast.Node {
  decoded := CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
    Config:  props.Config,
    Context: props.Context,
    Functor: props.Functor,
    Object:  props.Object.Type,
    Input:   props.Input,
    Explore: props.Explore,
    Emit:    props.Context.Emit,
  })
  tags := nativeiterate.Check_object_type_tags(nativeiterate.Check_object_type_tagsProps{
    Context: props.Context,
    Object:  props.Object,
    Input:   props.Input,
  })
  if tags.Expression == nil && len(tags.Conditions) == 0 {
    return decoded
  }
  return checkerProgrammer_and(
    decoded,
    props.Config.Atomist(CheckerProgrammer_AtomistProps{
      Explore: props.Explore,
      Entry:   tags,
      Input:   props.Input,
    }),
    props.Context.Emit,
  )
}

func checkerProgrammer_entry_condition(entry nativehelpers.ICheckEntry, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, emit)
  expressions := []*shimast.Node{}
  if entry.Expression != nil {
    expressions = append(expressions, entry.Expression)
  }
  if len(entry.Conditions) != 0 {
    rows := make([]*shimast.Node, 0, len(entry.Conditions))
    for _, set := range entry.Conditions {
      cols := make([]*shimast.Node, 0, len(set))
      for _, condition := range set {
        cols = append(cols, condition.Expression)
      }
      rows = append(rows, checkerProgrammer_reduce(cols, shimast.KindAmpersandAmpersandToken, f.NewKeywordExpression(shimast.KindTrueKeyword), emit))
    }
    expressions = append(expressions, checkerProgrammer_reduce(rows, shimast.KindBarBarToken, f.NewKeywordExpression(shimast.KindFalseKeyword), emit))
  }
  return checkerProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, f.NewKeywordExpression(shimast.KindTrueKeyword), emit)
}

func checkerProgrammer_has_object_type_tags(objects []*nativemetadata.MetadataObject) bool {
  for _, object := range objects {
    for _, row := range object.Tags {
      for _, tag := range row {
        if tag.Validate != "" {
          return true
        }
      }
    }
  }
  return false
}

func checkerProgrammer_has_array_type_tags(arrays []*nativemetadata.MetadataArray) bool {
  for _, array := range arrays {
    for _, row := range array.Tags {
      for _, tag := range row {
        if tag.Validate != "" {
          return true
        }
      }
    }
  }
  return false
}

func checkerProgrammer_definitions_have_array_type_tags(definitions []any) bool {
  arrays := []*nativemetadata.MetadataArray{}
  for _, definition := range definitions {
    if array, ok := definition.(*nativemetadata.MetadataArray); ok {
      arrays = append(arrays, array)
    }
  }
  return checkerProgrammer_has_array_type_tags(arrays)
}

func checkerProgrammer_array_tag_candidate(context nativecontext.ITypiaContext) func(nativehelpers.UnionExplorer_ArrayLikeCandidateProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, context.Emit)
  return func(props nativehelpers.UnionExplorer_ArrayLikeCandidateProps) *shimast.Node {
    array, ok := props.Definition.(*nativemetadata.MetadataArray)
    if ok == false {
      return f.NewKeywordExpression(shimast.KindTrueKeyword)
    }
    return checkerProgrammer_entry_condition(nativeiterate.Check_array_length(nativeiterate.Check_array_lengthProps{
      Context: context,
      Array:   array,
      Input:   props.Input,
    }), context.Emit)
  }
}

func checkerProgrammer_array_like_config(context nativecontext.ITypiaContext, config CheckerProgrammer_IConfig, functor *nativehelpers.FunctionProgrammer, checker func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node, decoder func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node) nativehelpers.UnionExplorer_ArrayLikeConfig {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, context.Emit)
  return nativehelpers.UnionExplorer_ArrayLikeConfig{
    Checker: checker,
    Decoder: decoder,
    Empty:   config.Success,
    Success: config.Success,
    Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
      explore := featureProgrammer_as_explore(v.Explore)
      return f.NewReturnStatement(config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
        Input:    v.Input,
        Expected: v.Expected,
        Explore:  &explore,
      }))
    },
  }
}

type checkerProgrammer_IInstance struct {
  Head     *shimast.Node
  Body     *shimast.Node
  Expected string
}

func checkerProgrammer_create_add(binaries *[]CheckerProgrammer_IBinary, input *shimast.Expression, exact bool, left *shimast.Expression, right *shimast.Expression, emit *shimprinter.EmitContext) {
  if right == nil {
    right = input
  }
  operator := shimast.KindExclamationEqualsEqualsToken
  if exact {
    operator = shimast.KindEqualsEqualsEqualsToken
  }
  *binaries = append(*binaries, CheckerProgrammer_IBinary{
    Expression: checkerProgrammer_binary(left, operator, right, emit),
    Combined:   false,
  })
}

func checkerProgrammer_binary(left *shimast.Expression, operator shimast.Kind, right *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, emit)
  return f.NewBinaryExpression(
    nil,
    left,
    nil,
    f.NewToken(operator),
    right,
  )
}

func checkerProgrammer_reduce(expressions []*shimast.Node, operator shimast.Kind, initial *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Node {
  if len(expressions) == 0 {
    return initial
  }
  output := expressions[0]
  for _, next := range expressions[1:] {
    output = checkerProgrammer_binary(output, operator, next, emit)
  }
  return output
}

func checkerProgrammer_and(x *shimast.Expression, y *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Node {
  return checkerProgrammer_binary(x, shimast.KindAmpersandAmpersandToken, y, emit)
}

// checkerProgrammer_visit_guard wraps a recursive function body so a value
// already being checked (or already proven) by this function short-circuits
// to true — the coinductive reading that makes runtime cycles validate
// instead of overflowing the stack, and deduplicates aliased subtrees. The
// entry is removed when the body fails, so union-branch probing of the same
// value cannot poison sibling checks; each recursive function owns its own
// `_vctx` slot for the same reason.
func checkerProgrammer_visit_guard(key string, body *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, emit)
  slot := "_vctx." + key
  return nativefactories.ExpressionFactory.Conditional(
    f.NewIdentifier("("+slot+" || ("+slot+" = new WeakSet())).has(input)"),
    f.NewKeywordExpression(shimast.KindTrueKeyword),
    f.NewParenthesizedExpression(
      f.NewBinaryExpression(
        nil,
        f.NewIdentifier(slot+".add(input)"),
        nil,
        f.NewToken(shimast.KindCommaToken),
        f.NewBinaryExpression(
          nil,
          f.NewParenthesizedExpression(body),
          nil,
          f.NewToken(shimast.KindBarBarToken),
          f.NewIdentifier("("+slot+".delete(input), false)"),
        ),
      ),
    ),
    emit,
  )
}

func checkerProgrammer_or(x *shimast.Expression, y *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Node {
  return checkerProgrammer_binary(x, shimast.KindBarBarToken, y, emit)
}

func checkerProgrammer_equal(x *shimast.Expression, y *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Node {
  return checkerProgrammer_binary(x, shimast.KindEqualsEqualsEqualsToken, y, emit)
}

func checkerProgrammer_array_any(arrays []*nativemetadata.MetadataArray) bool {
  for _, elem := range arrays {
    if elem.Type.Value.Any {
      return true
    }
  }
  return false
}

func checkerProgrammer_array_tuple_definitions(arrays []*nativemetadata.MetadataArray, tuples []*nativemetadata.MetadataTuple) []any {
  output := []any{}
  for _, tuple := range tuples {
    output = append(output, tuple)
  }
  for _, array := range arrays {
    output = append(output, array)
  }
  return output
}

func checkerProgrammer_definition_names(definitions []any) []string {
  names := make([]string, 0, len(definitions))
  for _, elem := range definitions {
    switch v := elem.(type) {
    case *nativemetadata.MetadataArray:
      names = append(names, v.Type.Name)
    case *nativemetadata.MetadataTuple:
      names = append(names, v.Type.Name)
    }
  }
  return names
}

func checkerProgrammer_definition_display_names(definitions []any) []string {
  names := make([]string, 0, len(definitions))
  for _, elem := range definitions {
    switch v := elem.(type) {
    case *nativemetadata.MetadataArray:
      names = append(names, v.Type.GetDisplayName())
    case *nativemetadata.MetadataTuple:
      names = append(names, v.Type.GetDisplayName())
    }
  }
  return names
}

func checkerProgrammer_postfix_of_tuple(str string) string {
  if len(str) > 0 && str[len(str)-1] == '"' {
    return str[:len(str)-1]
  }
  return str + " + \""
}

func checkerProgrammer_wrap_metadata_rest_tuple(rest *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
  wrapper := nativemetadata.MetadataSchema_initialize()
  wrapper.Arrays = append(wrapper.Arrays, nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
    Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
      Name:        "..." + rest.GetName(),
      DisplayName: "..." + rest.GetDisplayName(),
      Value:       rest,
      Nullables:   []bool{},
      Recursive:   false,
      Index:       nil,
    }),
    Tags: [][]nativemetadata.IMetadataTypeTag{},
  }))
  return wrapper
}

func checkerProgrammer_decode_to_json(props struct {
  Input     *shimast.Expression
  CheckNull bool
  Emit      *shimprinter.EmitContext
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(checkerProgrammer_factory, props.Emit)
  return checkerProgrammer_and(
    nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
      CheckArray: false,
      CheckNull:  props.CheckNull,
      Input:      props.Input,
    }, props.Emit),
    checkerProgrammer_equal(
      f.NewStringLiteral("function", shimast.TokenFlagsNone),
      nativefactories.ValueFactory.TYPEOF(nativefactories.IdentifierFactory.Access(props.Emit, props.Input, "toJSON"), props.Emit),
      props.Emit,
    ),
    props.Emit,
  )
}

func checkerProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
  output := make([]nativecontext.TransformerError_MetadataFactory_IError, 0, len(errors))
  for _, err := range errors {
    output = append(output, nativecontext.TransformerError_MetadataFactory_IError{
      Name: err.Name,
      Explore: nativecontext.TransformerError_MetadataFactory_IExplore{
        Object:    err.Explore.Object,
        Property:  err.Explore.Property,
        Parameter: err.Explore.Parameter,
        Output:    err.Explore.Output,
      },
      Messages: err.Messages,
    })
  }
  return output
}
