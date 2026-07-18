package plain

import (
  "fmt"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type plainPruneProgrammerNamespace struct{}

var PlainPruneProgrammer = plainPruneProgrammerNamespace{}

type PlainPruneProgrammer_DecomposeProps struct {
  Validated bool
  Context   nativecontext.ITypiaContext
  Functor   *nativehelpers.FunctionProgrammer
  Type      *shimchecker.Type
  Name      *string
}

const plainPruneProgrammer_PREFIX = "_p"

var plainPruneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainPruneProgrammerNamespace) Decompose(props PlainPruneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  config := plainPruneProgrammer_configure(struct {
    Context nativecontext.ITypiaContext
    Functor *nativehelpers.FunctionProgrammer
  }{Context: props.Context, Functor: props.Functor})
  if props.Validated == false {
    config.Addition = func(collection *schemametadata.MetadataCollection) []*shimast.Node {
      return nativeprogrammers.IsProgrammer.Write_function_statements(nativeprogrammers.IsProgrammer_WriteFunctionStatementsProps{
        Context:    props.Context,
        Functor:    props.Functor,
        Collection: collection,
      })
    }
  }
  composed := nativeinternal.FeatureProgrammer.Compose(nativeinternal.FeatureProgrammer_ComposeProps{
    Context: props.Context,
    Config:  config,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  composed.Functions,
    Statements: composed.Statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(composed.Parameters),
      composed.Response,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      plainPruneProgrammer_top_level_body(composed.Body, props.Context.Emit),
    ),
  }
}

func (plainPruneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainCloneProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainPruneProgrammer.Decompose(PlainPruneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: false,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func plainPruneProgrammer_write_array_functions(props struct {
  Context    nativecontext.ITypiaContext
  Config     nativeinternal.FeatureProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  output := []*shimast.Node{}
  for i, typ := range props.Collection.Arrays() {
    if typ.Recursive == false {
      continue
    }
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%sa%d", props.Config.Prefix, i),
      Value: f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
          Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
          Type:   nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
          Input:  f.NewIdentifier("input"),
        })),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        nativeinternal.FeatureProgrammer.VisitGuardSkip(
          nativeinternal.FeatureProgrammer.VisitKey(props.Config.Prefix, "a", i),
          plainPruneProgrammer_decode_array_inline(plainPruneProgrammer_decodeArrayProps{
            Context: props.Context,
            Config:  props.Config,
            Functor: props.Functor,
            Input:   f.NewIdentifier("input"),
            Array: schemametadata.MetadataArray_create(schemametadata.MetadataArray{
              Type: typ,
              Tags: [][]schemametadata.IMetadataTypeTag{},
            }),
            Explore: nativeinternal.FeatureProgrammer_IExplore{
              Tracable: props.Config.Trace,
              Source:   "function",
              From:     "array",
              Postfix:  "",
            },
          }),
          props.Context.Emit,
        ),
      ),
    }, props.Context.Emit))
  }
  return output
}

func plainPruneProgrammer_write_tuple_functions(props struct {
  Context    nativecontext.ITypiaContext
  Config     nativeinternal.FeatureProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  output := []*shimast.Node{}
  for i, tuple := range props.Collection.Tuples() {
    if tuple.Recursive == false {
      continue
    }
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%st%d", props.Config.Prefix, i),
      Value: f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
          Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
          Type:   nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
          Input:  f.NewIdentifier("input"),
        })),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        nativeinternal.FeatureProgrammer.VisitGuardSkip(
          nativeinternal.FeatureProgrammer.VisitKey(props.Config.Prefix, "t", i),
          plainPruneProgrammer_decode_tuple_inline(plainPruneProgrammer_decodeTupleInlineProps{
            Context: props.Context,
            Config:  props.Config,
            Functor: props.Functor,
            Input:   f.NewIdentifier("input"),
            Tuple:   tuple,
            Explore: nativeinternal.FeatureProgrammer_IExplore{
              Tracable: props.Config.Trace,
              Source:   "function",
              From:     "array",
              Postfix:  "",
            },
          }),
          props.Context.Emit,
        ),
      ),
    }, props.Context.Emit))
  }
  return output
}

func plainPruneProgrammer_decode(props struct {
  Context  nativecontext.ITypiaContext
  Config   nativeinternal.FeatureProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Explore  nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  if plainPruneProgrammer_filter(props.Metadata) == false {
    return f.NewBlock(f.NewNodeList(nil), false)
  }

  unions := []plainPruneProgrammer_IUnion{}
  for _, tuple := range props.Metadata.Tuples {
    if plainPruneProgrammer_tuple_filter(tuple) == false {
      continue
    }
    tuple := tuple
    unions = append(unions, plainPruneProgrammer_IUnion{
      Type: "tuple",
      Is: func() *shimast.Node {
        partial := schemametadata.MetadataSchema_initialize()
        partial.Tuples = append(partial.Tuples, tuple)
        return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
          Context:  props.Context,
          Functor:  props.Functor,
          Metadata: partial,
          Input:    props.Input,
          Explore:  plainCloneProgrammer_checker_explore(props.Explore),
        })
      },
      Value: func() *shimast.Node {
        return plainPruneProgrammer_decode_tuple(plainPruneProgrammer_decodeTupleProps{
          Context: props.Context,
          Config:  props.Config,
          Functor: props.Functor,
          Input:   props.Input,
          Tuple:   tuple,
          Explore: props.Explore,
        })
      },
    })
  }
  filteredArrays := []*schemametadata.MetadataArray{}
  for _, array := range props.Metadata.Arrays {
    if plainPruneProgrammer_filter(array.Type.Value) {
      filteredArrays = append(filteredArrays, array)
    }
  }
  if len(filteredArrays) != 0 {
    unions = append(unions, plainPruneProgrammer_IUnion{
      Type: "array",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsArray(props.Input)
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "array"
        return plainPruneProgrammer_explore_arrays(plainPruneProgrammer_exploreArraysProps{
          Context: props.Context,
          Config:  props.Config,
          Functor: props.Functor,
          Input:   props.Input,
          Arrays:  filteredArrays,
          Explore: explore,
        })
      },
    })
  }
  for _, native := range props.Metadata.Natives {
    native := native
    unions = append(unions, plainPruneProgrammer_IUnion{
      Type: "native",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf(native.Name, props.Input)
      },
      Value: func() *shimast.Node {
        return f.NewBlock(f.NewNodeList(nil), true)
      },
    })
  }
  if len(props.Metadata.Sets) != 0 {
    unions = append(unions, plainPruneProgrammer_IUnion{
      Type: "set",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf("Set", props.Input)
      },
      Value: func() *shimast.Node {
        return f.NewBlock(f.NewNodeList(nil), true)
      },
    })
  }
  if len(props.Metadata.Maps) != 0 {
    unions = append(unions, plainPruneProgrammer_IUnion{
      Type: "map",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf("Map", props.Input)
      },
      Value: func() *shimast.Node {
        return f.NewBlock(f.NewNodeList(nil), true)
      },
    })
  }
  if len(props.Metadata.Objects) != 0 {
    unions = append(unions, plainPruneProgrammer_IUnion{
      Type: "object",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
          CheckNull:  true,
          CheckArray: false,
          Input:      props.Input,
        })
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "object"
        return plainPruneProgrammer_explore_objects(plainPruneProgrammer_exploreObjectsProps{
          Context:  props.Context,
          Config:   props.Config,
          Functor:  props.Functor,
          Input:    props.Input,
          Metadata: props.Metadata,
          Explore:  explore,
        })
      },
    })
  }

  // Compose the arms as a mutually exclusive `if / else if` ladder rather than
  // independent `if`s. The object arm is appended last and its guard is
  // `IsObject` with CheckArray:false, which also matches arrays and native
  // instances; with independent `if`s an array or native runs both its own arm
  // and the object arm, and the object arm then deletes the keys of a value
  // another arm already owns (a typed array throws, a plain array collapses to
  // holes, a native loses its own properties). The ladder reaches the object
  // arm only when every earlier arm missed, so each input is pruned by exactly
  // one arm — the same shape clone/classify use.
  var chain *shimast.Node
  for i := len(unions) - 1; i >= 0; i-- {
    u := unions[i]
    chain = f.NewIfStatement(
      u.Is(),
      plainPruneProgrammer_to_statement(u.Value(), props.Context.Emit),
      chain,
    )
  }
  statements := []*shimast.Node{}
  if chain != nil {
    statements = append(statements, chain)
  }
  return f.NewBlock(f.NewNodeList(statements), true)
}

type plainPruneProgrammer_IUnion struct {
  Type  string
  Is    func() *shimast.Node
  Value func() *shimast.Node
}

func plainPruneProgrammer_to_statement(node *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  if node == nil || node.Kind == shimast.KindBlock || node.Kind == shimast.KindReturnStatement {
    return node
  }
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, emit)
  return f.NewExpressionStatement(node)
}

func plainPruneProgrammer_top_level_body(body *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, emit)
  statements := []*shimast.Node{}
  if body != nil && body.Kind == shimast.KindBlock {
    statements = append(statements, body.Statements()...)
  } else if body != nil {
    statements = append(statements, f.NewExpressionStatement(body))
  }
  statements = append(statements, f.NewReturnStatement(
    f.NewIdentifier("input"),
  ))
  return f.NewBlock(f.NewNodeList(statements), true)
}

func plainPruneProgrammer_decode_object(props struct {
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Object  *schemametadata.MetadataObjectType
  Explore nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
  return nativeinternal.FeatureProgrammer.Decode_object(nativeinternal.FeatureProgrammer_DecodeObjectProps{
    Config: nativeinternal.FeatureProgrammer_DecodeObjectConfig{
      Trace:   false,
      Path:    false,
      Prefix:  plainPruneProgrammer_PREFIX,
      Visited: props.Functor.Visited(),
    },
    Functor: props.Functor,
    Object:  props.Object,
    Input:   props.Input,
    Explore: props.Explore,
  })
}

type plainPruneProgrammer_decodeArrayProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Array   *schemametadata.MetadataArray
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainPruneProgrammer_decode_array(props plainPruneProgrammer_decodeArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  if props.Array.Type.Recursive {
    return f.NewCallExpression(
      f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%sa%d", props.Config.Prefix, *props.Array.Type.Index))),
      nil,
      nil,
      f.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
        Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
        Explore: plainCloneProgrammer_explore_with(props.Explore, "function", "array"),
        Input:   props.Input,
      })),
      shimast.NodeFlagsNone,
    )
  }
  return plainPruneProgrammer_decode_array_inline(props)
}

func plainPruneProgrammer_decode_array_inline(props plainPruneProgrammer_decodeArrayProps) *shimast.Node {
  return nativeinternal.FeatureProgrammer.Decode_array(nativeinternal.FeatureProgrammer_DecodeArrayProps{
    Config: nativeinternal.FeatureProgrammer_DecodeArrayConfig{
      Trace:   props.Config.Trace,
      Path:    props.Config.Path,
      Prefix:  props.Config.Prefix,
      Decoder: props.Config.Decoder,
    },
    Functor: props.Functor,
    Combiner: func(next struct {
      Input *shimast.Expression
      Arrow *shimast.Node
    }) *shimast.Node {
      return nativehelpers.PruneJoiner.Array(nativehelpers.PruneJoiner_ArrayProps{
        Input: next.Input,
        Arrow: next.Arrow,
        Emit:  props.Context.Emit,
      })
    },
    Array:   props.Array,
    Input:   props.Input,
    Explore: props.Explore,
  })
}

type plainPruneProgrammer_decodeTupleProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Tuple   *schemametadata.MetadataTuple
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainPruneProgrammer_decode_tuple(props plainPruneProgrammer_decodeTupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  if props.Tuple.Type.Recursive {
    return f.NewCallExpression(
      f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%st%d", props.Config.Prefix, *props.Tuple.Type.Index))),
      nil,
      nil,
      f.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
        Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
        Explore: plainCloneProgrammer_explore_with(props.Explore, "function", props.Explore.From),
        Input:   props.Input,
      })),
      shimast.NodeFlagsNone,
    )
  }
  return plainPruneProgrammer_decode_tuple_inline(plainPruneProgrammer_decodeTupleInlineProps{
    Context: props.Context,
    Config:  props.Config,
    Functor: props.Functor,
    Input:   props.Input,
    Tuple:   props.Tuple.Type,
    Explore: props.Explore,
  })
}

type plainPruneProgrammer_decodeTupleInlineProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Tuple   *schemametadata.MetadataTupleType
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainPruneProgrammer_decode_tuple_inline(props plainPruneProgrammer_decodeTupleInlineProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  elements := []*shimast.Node{}
  for index, elem := range props.Tuple.Elements {
    if elem.Rest != nil || plainPruneProgrammer_filter(elem) == false {
      continue
    }
    postfix := fmt.Sprintf("\"[%d]\"", index)
    if props.Explore.Postfix != "" {
      postfix = fmt.Sprintf("%s[%d]\"", nativeiterate.Postfix_of_tuple_export(props.Explore.Postfix), index)
    }
    explore := props.Explore
    explore.From = "array"
    explore.Postfix = postfix
    elements = append(elements, plainPruneProgrammer_decode(struct {
      Context  nativecontext.ITypiaContext
      Config   nativeinternal.FeatureProgrammer_IConfig
      Functor  *nativehelpers.FunctionProgrammer
      Input    *shimast.Node
      Metadata *schemametadata.MetadataSchema
      Explore  nativeinternal.FeatureProgrammer_IExplore
    }{
      Context:  props.Context,
      Config:   props.Config,
      Functor:  props.Functor,
      Input:    f.NewElementAccessExpression(props.Input, nil, nativefactories.ExpressionFactory.Number(index, props.Context.Emit), shimast.NodeFlagsNone),
      Metadata: elem,
      Explore:  explore,
    }))
  }
  var rest *shimast.Node
  if len(props.Tuple.Elements) != 0 {
    last := props.Tuple.Elements[len(props.Tuple.Elements)-1]
    if last.Rest != nil && plainPruneProgrammer_filter(last.Rest) {
      start := len(props.Tuple.Elements) - 1
      explore := props.Explore
      explore.Start = &start
      rest = plainPruneProgrammer_decode(struct {
        Context  nativecontext.ITypiaContext
        Config   nativeinternal.FeatureProgrammer_IConfig
        Functor  *nativehelpers.FunctionProgrammer
        Input    *shimast.Node
        Metadata *schemametadata.MetadataSchema
        Explore  nativeinternal.FeatureProgrammer_IExplore
      }{
        Context: props.Context,
        Config:  props.Config,
        Functor: props.Functor,
        Input: f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(props.Context.Emit, props.Input, "slice"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{nativefactories.ExpressionFactory.Number(start, props.Context.Emit)}),
          shimast.NodeFlagsNone,
        ),
        Metadata: nativeiterate.Wrap_metadata_rest_tuple_export(last.Rest),
        Explore:  explore,
      })
    }
  }
  return nativehelpers.PruneJoiner.Tuple(nativehelpers.PruneJoiner_TupleProps{
    Elements: elements,
    Rest:     rest,
    Emit:     props.Context.Emit,
  })
}

type plainPruneProgrammer_exploreArraysProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Arrays  []*schemametadata.MetadataArray
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainPruneProgrammer_explore_arrays(props plainPruneProgrammer_exploreArraysProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativehelpers.UnionExplorer.Array(nativehelpers.UnionExplorer_ArrayProps{
      Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
        Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Input:    v.Input,
            Metadata: v.Definition.(*schemametadata.MetadataSchema),
            Explore:  plainCloneProgrammer_checker_explore(v.Explore),
          })
        },
        Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          return plainPruneProgrammer_decode_array(plainPruneProgrammer_decodeArrayProps{
            Context: props.Context,
            Config:  props.Config,
            Functor: props.Functor,
            Input:   v.Input,
            Array:   v.Definition.(*schemametadata.MetadataArray),
            Explore: plainCloneProgrammer_feature_explore(v.Explore),
          })
        },
        Empty:   f.NewStringLiteral("[]", shimast.TokenFlagsNone),
        Success: f.NewKeywordExpression(shimast.KindTrueKeyword),
        Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
          return plainCloneProgrammer_create_throw_error(plainCloneProgrammer_throwProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Expected: v.Expected,
            Input:    v.Input,
          })
        },
      },
      Parameters: nil,
      Input:      props.Input,
      Arrays:     props.Arrays,
      Explore:    props.Explore,
      Emit:       props.Context.Emit,
    }),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

type plainPruneProgrammer_exploreObjectsProps struct {
  Context  nativecontext.ITypiaContext
  Config   nativeinternal.FeatureProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Explore  nativeinternal.FeatureProgrammer_IExplore
}

func plainPruneProgrammer_explore_objects(props plainPruneProgrammer_exploreObjectsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  if len(props.Metadata.Objects) == 1 {
    return plainPruneProgrammer_decode_object(struct {
      Functor *nativehelpers.FunctionProgrammer
      Input   *shimast.Node
      Object  *schemametadata.MetadataObjectType
      Explore nativeinternal.FeatureProgrammer_IExplore
    }{
      Functor: props.Functor,
      Input:   props.Input,
      Object:  props.Metadata.Objects[0].Type,
      Explore: props.Explore,
    })
  }
  index := 0
  if props.Metadata.Union_index != nil {
    index = *props.Metadata.Union_index
  }
  return f.NewCallExpression(
    f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", plainPruneProgrammer_PREFIX, index))),
    nil,
    nil,
    f.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
      Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
      Input:   props.Input,
      Explore: props.Explore,
    })),
    shimast.NodeFlagsNone,
  )
}

func plainPruneProgrammer_configure(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.FeatureProgrammer_IConfig {
  f := nativecontext.EmitFactoryOf(plainPruneProgrammer_factory, props.Context.Emit)
  config := nativeinternal.FeatureProgrammer_IConfig{}
  config.Types = nativeinternal.FeatureProgrammer_IConfig_ITypes{
    Input: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
      return f.NewTypeReferenceNode(f.NewIdentifier(plainCloneProgrammer_type_name(props.Context, t, name)), nil)
    },
    Output: func(_ *shimchecker.Type, _ *string) *shimast.TypeNode {
      return nativefactories.TypeFactory.Keyword("void")
    },
  }
  config.Prefix = plainPruneProgrammer_PREFIX
  config.Trace = false
  config.Path = false
  config.Initializer = plainPruneProgrammer_initializer
  config.Visited = props.Functor.Visited
  config.VisitGuard = func(next nativeinternal.FeatureProgrammer_VisitGuardProps) *shimast.Node {
    return nativeinternal.FeatureProgrammer.VisitGuardSkip(next.Key, next.Body, props.Context.Emit)
  }
  config.Decoder = func(next nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
    return plainPruneProgrammer_decode(struct {
      Context  nativecontext.ITypiaContext
      Config   nativeinternal.FeatureProgrammer_IConfig
      Functor  *nativehelpers.FunctionProgrammer
      Input    *shimast.Node
      Metadata *schemametadata.MetadataSchema
      Explore  nativeinternal.FeatureProgrammer_IExplore
    }{
      Context:  props.Context,
      Config:   config,
      Functor:  props.Functor,
      Input:    next.Input,
      Metadata: next.Metadata,
      Explore:  next.Explore,
    })
  }
  config.Objector = nativeinternal.FeatureProgrammer_IConfig_IObjector{
    Checker: func(next nativeinternal.FeatureProgrammer_ObjectorCheckerProps) *shimast.Node {
      return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
        Context:  props.Context,
        Functor:  props.Functor,
        Input:    next.Input,
        Metadata: next.Metadata,
        Explore:  plainCloneProgrammer_checker_explore(next.Explore),
      })
    },
    Decoder: func(next nativeinternal.FeatureProgrammer_ObjectorDecoderProps) *shimast.Node {
      return plainPruneProgrammer_decode_object(struct {
        Functor *nativehelpers.FunctionProgrammer
        Input   *shimast.Node
        Object  *schemametadata.MetadataObjectType
        Explore nativeinternal.FeatureProgrammer_IExplore
      }{Functor: props.Functor, Input: next.Input, Object: next.Object, Explore: next.Explore})
    },
    Joiner: func(next nativeinternal.FeatureProgrammer_ObjectorJoinerProps) *shimast.Node {
      return nativehelpers.PruneJoiner.Object(nativehelpers.PruneJoiner_ObjectProps{
        Input:   next.Input,
        Entries: next.Entries,
        Object:  next.Object,
        Emit:    props.Context.Emit,
      })
    },
    Unionizer: func(next nativeinternal.FeatureProgrammer_ObjectorUnionizerProps) *shimast.Node {
      return nativeiterate.Decode_union_object(nativeiterate.Decode_union_objectProps{
        Checker: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
          return nativeprogrammers.IsProgrammer.Decode_object(nativeprogrammers.IsProgrammer_DecodeObjectProps{
            Context: props.Context,
            Functor: props.Functor,
            Input:   v.Input,
            Object:  v.Object,
            Explore: plainCloneProgrammer_feature_explore(v.Explore),
          })
        },
        Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
          return plainPruneProgrammer_decode_object(struct {
            Functor *nativehelpers.FunctionProgrammer
            Input   *shimast.Node
            Object  *schemametadata.MetadataObjectType
            Explore nativeinternal.FeatureProgrammer_IExplore
          }{Functor: props.Functor, Input: v.Input, Object: v.Object, Explore: plainCloneProgrammer_feature_explore(v.Explore)})
        },
        Success: func(exp *shimast.Node) *shimast.Node { return exp },
        Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
          return plainCloneProgrammer_create_throw_error(plainCloneProgrammer_throwProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Expected: v.Expected,
            Input:    v.Input,
          })
        },
        Input:   next.Input,
        Objects: next.Objects,
        Explore: next.Explore,
      })
    },
    Failure: func(next nativeinternal.FeatureProgrammer_ObjectorFailureProps) *shimast.Node {
      return plainCloneProgrammer_create_throw_error(plainCloneProgrammer_throwProps{
        Context:  props.Context,
        Functor:  props.Functor,
        Expected: next.Expected,
        Input:    next.Input,
      })
    },
  }
  config.Generator = nativeinternal.FeatureProgrammer_IConfig_IGenerator{
    Arrays: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
      return plainPruneProgrammer_write_array_functions(struct {
        Context    nativecontext.ITypiaContext
        Config     nativeinternal.FeatureProgrammer_IConfig
        Functor    *nativehelpers.FunctionProgrammer
        Collection *schemametadata.MetadataCollection
      }{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection})
    },
    Tuples: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
      return plainPruneProgrammer_write_tuple_functions(struct {
        Context    nativecontext.ITypiaContext
        Config     nativeinternal.FeatureProgrammer_IConfig
        Functor    *nativehelpers.FunctionProgrammer
        Collection *schemametadata.MetadataCollection
      }{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection})
    },
  }
  return config
}

func plainPruneProgrammer_initializer(props nativeinternal.FeatureProgrammer_InitializerProps) nativeinternal.FeatureProgrammer_InitializerOutput {
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
    },
    Components: collection,
    Type:       props.Type,
  })
  if result.Success == false {
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   props.Functor.Method,
      Errors: plainCloneProgrammer_errors(result.Errors),
    }))
  }
  if nativeinternal.FeatureProgrammer.CollectionRecursive(collection) {
    props.Functor.SetVisited(true)
  }
  return nativeinternal.FeatureProgrammer_InitializerOutput{
    Collection: collection,
    Metadata:   result.Data,
  }
}

func plainPruneProgrammer_filter(metadata *schemametadata.MetadataSchema) bool {
  if metadata.Any {
    return false
  }
  if len(metadata.Objects) != 0 {
    return true
  }
  for _, tuple := range metadata.Tuples {
    if plainPruneProgrammer_tuple_filter(tuple) {
      return true
    }
  }
  for _, array := range metadata.Arrays {
    if plainPruneProgrammer_filter(array.Type.Value) {
      return true
    }
  }
  return false
}

func plainPruneProgrammer_tuple_filter(tuple *schemametadata.MetadataTuple) bool {
  return len(tuple.Type.Elements) != 0 && plainPruneProgrammer_some_schema(tuple.Type.Elements, func(elem *schemametadata.MetadataSchema) bool {
    if elem.Rest != nil {
      return plainPruneProgrammer_filter(elem.Rest)
    }
    return plainPruneProgrammer_filter(elem)
  })
}

func plainPruneProgrammer_some_schema(values []*schemametadata.MetadataSchema, pred func(*schemametadata.MetadataSchema) bool) bool {
  for _, value := range values {
    if pred(value) {
      return true
    }
  }
  return false
}

func plainPruneProgrammer_join_names[T any](values []T, name func(T) string) string {
  names := make([]string, 0, len(values))
  for _, value := range values {
    names = append(names, name(value))
  }
  return strings.Join(names, " | ")
}
