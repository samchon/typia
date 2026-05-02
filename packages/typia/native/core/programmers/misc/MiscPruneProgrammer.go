package misc

import (
  "fmt"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type miscPruneProgrammerNamespace struct{}

var MiscPruneProgrammer = miscPruneProgrammerNamespace{}

type MiscPruneProgrammer_DecomposeProps struct {
  Validated bool
  Context   nativecontext.ITypiaContext
  Functor   *nativehelpers.FunctionProgrammer
  Type      *shimchecker.Type
  Name      *string
}

const miscPruneProgrammer_PREFIX = "_p"

var miscPruneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscPruneProgrammerNamespace) Decompose(props MiscPruneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  config := miscPruneProgrammer_configure(struct {
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
    Arrow: miscPruneProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      miscPruneProgrammer_factory.NewNodeList(composed.Parameters),
      composed.Response,
      nil,
      miscPruneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      miscPruneProgrammer_top_level_body(composed.Body),
    ),
  }
}

func (miscPruneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(miscCloneProgrammer_method_text(props.Modulo))
  result := MiscPruneProgrammer.Decompose(MiscPruneProgrammer_DecomposeProps{
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

func miscPruneProgrammer_write_array_functions(props struct {
  Config     nativeinternal.FeatureProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  output := []*shimast.Node{}
  for i, typ := range props.Collection.Arrays() {
    if typ.Recursive == false {
      continue
    }
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%sa%d", props.Config.Prefix, i),
      Value: miscPruneProgrammer_factory.NewArrowFunction(
        nil,
        nil,
        miscPruneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
          Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
          Type:   nativefactories.TypeFactory.Keyword("any"),
          Input:  miscPruneProgrammer_factory.NewIdentifier("input"),
        })),
        nativefactories.TypeFactory.Keyword("any"),
        nil,
        miscPruneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
        miscPruneProgrammer_decode_array_inline(miscPruneProgrammer_decodeArrayProps{
          Config:  props.Config,
          Functor: props.Functor,
          Input:   miscPruneProgrammer_factory.NewIdentifier("input"),
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
      ),
    }))
  }
  return output
}

func miscPruneProgrammer_write_tuple_functions(props struct {
  Context    nativecontext.ITypiaContext
  Config     nativeinternal.FeatureProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  output := []*shimast.Node{}
  for i, tuple := range props.Collection.Tuples() {
    if tuple.Recursive == false {
      continue
    }
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: fmt.Sprintf("%st%d", props.Config.Prefix, i),
      Value: miscPruneProgrammer_factory.NewArrowFunction(
        nil,
        nil,
        miscPruneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
          Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
          Type:   nativefactories.TypeFactory.Keyword("any"),
          Input:  miscPruneProgrammer_factory.NewIdentifier("input"),
        })),
        nativefactories.TypeFactory.Keyword("any"),
        nil,
        miscPruneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
        miscPruneProgrammer_decode_tuple_inline(miscPruneProgrammer_decodeTupleInlineProps{
          Context: props.Context,
          Config:  props.Config,
          Functor: props.Functor,
          Input:   miscPruneProgrammer_factory.NewIdentifier("input"),
          Tuple:   tuple,
          Explore: nativeinternal.FeatureProgrammer_IExplore{
            Tracable: props.Config.Trace,
            Source:   "function",
            From:     "array",
            Postfix:  "",
          },
        }),
      ),
    }))
  }
  return output
}

func miscPruneProgrammer_decode(props struct {
  Context  nativecontext.ITypiaContext
  Config   nativeinternal.FeatureProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Explore  nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
  if miscPruneProgrammer_filter(props.Metadata) == false {
    return miscPruneProgrammer_factory.NewBlock(miscPruneProgrammer_factory.NewNodeList(nil), false)
  }

  unions := []miscPruneProgrammer_IUnion{}
  for _, tuple := range props.Metadata.Tuples {
    if miscPruneProgrammer_tuple_filter(tuple) == false {
      continue
    }
    tuple := tuple
    unions = append(unions, miscPruneProgrammer_IUnion{
      Type: "tuple",
      Is: func() *shimast.Node {
        partial := schemametadata.MetadataSchema_initialize()
        partial.Tuples = append(partial.Tuples, tuple)
        return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
          Context:  props.Context,
          Functor:  props.Functor,
          Metadata: partial,
          Input:    props.Input,
          Explore:  miscCloneProgrammer_checker_explore(props.Explore),
        })
      },
      Value: func() *shimast.Node {
        return miscPruneProgrammer_decode_tuple(miscPruneProgrammer_decodeTupleProps{
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
    if miscPruneProgrammer_filter(array.Type.Value) {
      filteredArrays = append(filteredArrays, array)
    }
  }
  if len(filteredArrays) != 0 {
    unions = append(unions, miscPruneProgrammer_IUnion{
      Type: "array",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsArray(props.Input)
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "array"
        return miscPruneProgrammer_explore_arrays(miscPruneProgrammer_exploreArraysProps{
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
    unions = append(unions, miscPruneProgrammer_IUnion{
      Type: "native",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf(native.Name, props.Input)
      },
      Value: func() *shimast.Node {
        return miscPruneProgrammer_factory.NewBlock(miscPruneProgrammer_factory.NewNodeList(nil), true)
      },
    })
  }
  if len(props.Metadata.Sets) != 0 {
    unions = append(unions, miscPruneProgrammer_IUnion{
      Type: "set",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf("Set", props.Input)
      },
      Value: func() *shimast.Node {
        return miscPruneProgrammer_factory.NewBlock(miscPruneProgrammer_factory.NewNodeList(nil), true)
      },
    })
  }
  if len(props.Metadata.Maps) != 0 {
    unions = append(unions, miscPruneProgrammer_IUnion{
      Type: "map",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf("Map", props.Input)
      },
      Value: func() *shimast.Node {
        return miscPruneProgrammer_factory.NewBlock(miscPruneProgrammer_factory.NewNodeList(nil), true)
      },
    })
  }
  if len(props.Metadata.Objects) != 0 {
    unions = append(unions, miscPruneProgrammer_IUnion{
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
        return miscPruneProgrammer_explore_objects(miscPruneProgrammer_exploreObjectsProps{
          Config:   props.Config,
          Functor:  props.Functor,
          Input:    props.Input,
          Metadata: props.Metadata,
          Explore:  explore,
        })
      },
    })
  }

  statements := make([]*shimast.Node, 0, len(unions))
  for _, u := range unions {
    statements = append(statements, miscPruneProgrammer_factory.NewIfStatement(
      u.Is(),
      miscPruneProgrammer_to_statement(u.Value()),
      nil,
    ))
  }
  return miscPruneProgrammer_factory.NewBlock(miscPruneProgrammer_factory.NewNodeList(statements), true)
}

type miscPruneProgrammer_IUnion struct {
  Type  string
  Is    func() *shimast.Node
  Value func() *shimast.Node
}

func miscPruneProgrammer_to_statement(node *shimast.Node) *shimast.Node {
  if node == nil || node.Kind == shimast.KindBlock || node.Kind == shimast.KindReturnStatement {
    return node
  }
  return miscPruneProgrammer_factory.NewExpressionStatement(node)
}

func miscPruneProgrammer_top_level_body(body *shimast.Node) *shimast.Node {
  statements := []*shimast.Node{}
  if body != nil && body.Kind == shimast.KindBlock {
    statements = append(statements, body.Statements()...)
  } else if body != nil {
    statements = append(statements, miscPruneProgrammer_factory.NewExpressionStatement(body))
  }
  statements = append(statements, miscPruneProgrammer_factory.NewReturnStatement(
    miscPruneProgrammer_factory.NewIdentifier("input"),
  ))
  return miscPruneProgrammer_factory.NewBlock(miscPruneProgrammer_factory.NewNodeList(statements), true)
}

func miscPruneProgrammer_decode_object(props struct {
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Object  *schemametadata.MetadataObjectType
  Explore nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
  return nativeinternal.FeatureProgrammer.Decode_object(nativeinternal.FeatureProgrammer_DecodeObjectProps{
    Config: nativeinternal.FeatureProgrammer_DecodeObjectConfig{
      Trace:  false,
      Path:   false,
      Prefix: miscPruneProgrammer_PREFIX,
    },
    Functor: props.Functor,
    Object:  props.Object,
    Input:   props.Input,
    Explore: props.Explore,
  })
}

type miscPruneProgrammer_decodeArrayProps struct {
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Array   *schemametadata.MetadataArray
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscPruneProgrammer_decode_array(props miscPruneProgrammer_decodeArrayProps) *shimast.Node {
  if props.Array.Type.Recursive {
    return miscPruneProgrammer_factory.NewCallExpression(
      miscPruneProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%sa%d", props.Config.Prefix, *props.Array.Type.Index))),
      nil,
      nil,
      miscPruneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
        Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
        Explore: miscCloneProgrammer_explore_with(props.Explore, "function", "array"),
        Input:   props.Input,
      })),
      shimast.NodeFlagsNone,
    )
  }
  return miscPruneProgrammer_decode_array_inline(props)
}

func miscPruneProgrammer_decode_array_inline(props miscPruneProgrammer_decodeArrayProps) *shimast.Node {
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
      })
    },
    Array:   props.Array,
    Input:   props.Input,
    Explore: props.Explore,
  })
}

type miscPruneProgrammer_decodeTupleProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Tuple   *schemametadata.MetadataTuple
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscPruneProgrammer_decode_tuple(props miscPruneProgrammer_decodeTupleProps) *shimast.Node {
  if props.Tuple.Type.Recursive {
    return miscPruneProgrammer_factory.NewCallExpression(
      miscPruneProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%st%d", props.Config.Prefix, *props.Tuple.Type.Index))),
      nil,
      nil,
      miscPruneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
        Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
        Explore: miscCloneProgrammer_explore_with(props.Explore, "function", props.Explore.From),
        Input:   props.Input,
      })),
      shimast.NodeFlagsNone,
    )
  }
  return miscPruneProgrammer_decode_tuple_inline(miscPruneProgrammer_decodeTupleInlineProps{
    Context: props.Context,
    Config:  props.Config,
    Functor: props.Functor,
    Input:   props.Input,
    Tuple:   props.Tuple.Type,
    Explore: props.Explore,
  })
}

type miscPruneProgrammer_decodeTupleInlineProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Tuple   *schemametadata.MetadataTupleType
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscPruneProgrammer_decode_tuple_inline(props miscPruneProgrammer_decodeTupleInlineProps) *shimast.Node {
  elements := []*shimast.Node{}
  for index, elem := range props.Tuple.Elements {
    if elem.Rest != nil || miscPruneProgrammer_filter(elem) == false {
      continue
    }
    postfix := fmt.Sprintf("\"[%d]\"", index)
    if props.Explore.Postfix != "" {
      postfix = fmt.Sprintf("%s[%d]\"", nativeiterate.Postfix_of_tuple_export(props.Explore.Postfix), index)
    }
    explore := props.Explore
    explore.From = "array"
    explore.Postfix = postfix
    elements = append(elements, miscPruneProgrammer_decode(struct {
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
      Input:    miscPruneProgrammer_factory.NewElementAccessExpression(props.Input, nil, nativefactories.ExpressionFactory.Number(index), shimast.NodeFlagsNone),
      Metadata: elem,
      Explore:  explore,
    }))
  }
  var rest *shimast.Node
  if len(props.Tuple.Elements) != 0 {
    last := props.Tuple.Elements[len(props.Tuple.Elements)-1]
    if last.Rest != nil && miscPruneProgrammer_filter(last.Rest) {
      start := len(props.Tuple.Elements) - 1
      explore := props.Explore
      explore.Start = &start
      rest = miscPruneProgrammer_decode(struct {
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
        Input: miscPruneProgrammer_factory.NewCallExpression(
          nativefactories.IdentifierFactory.Access(props.Input, "slice"),
          nil,
          nil,
          miscPruneProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.ExpressionFactory.Number(start)}),
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
  })
}

type miscPruneProgrammer_exploreArraysProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Arrays  []*schemametadata.MetadataArray
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscPruneProgrammer_explore_arrays(props miscPruneProgrammer_exploreArraysProps) *shimast.Node {
  return miscPruneProgrammer_factory.NewCallExpression(
    nativehelpers.UnionExplorer.Array(nativehelpers.UnionExplorer_ArrayProps{
      Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
        Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Input:    v.Input,
            Metadata: v.Definition.(*schemametadata.MetadataArray).Type.Value,
            Explore:  miscCloneProgrammer_checker_explore(v.Explore),
          })
        },
        Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          return miscPruneProgrammer_decode_array(miscPruneProgrammer_decodeArrayProps{
            Config:  props.Config,
            Functor: props.Functor,
            Input:   v.Input,
            Array:   v.Definition.(*schemametadata.MetadataArray),
            Explore: miscCloneProgrammer_feature_explore(v.Explore),
          })
        },
        Empty:   miscPruneProgrammer_factory.NewStringLiteral("[]", shimast.TokenFlagsNone),
        Success: miscPruneProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
        Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
          return miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
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
    }),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

type miscPruneProgrammer_exploreObjectsProps struct {
  Config   nativeinternal.FeatureProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Explore  nativeinternal.FeatureProgrammer_IExplore
}

func miscPruneProgrammer_explore_objects(props miscPruneProgrammer_exploreObjectsProps) *shimast.Node {
  if len(props.Metadata.Objects) == 1 {
    return miscPruneProgrammer_decode_object(struct {
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
  return miscPruneProgrammer_factory.NewCallExpression(
    miscPruneProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", miscPruneProgrammer_PREFIX, index))),
    nil,
    nil,
    miscPruneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
      Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
      Input:   props.Input,
      Explore: props.Explore,
    })),
    shimast.NodeFlagsNone,
  )
}

func miscPruneProgrammer_configure(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.FeatureProgrammer_IConfig {
  config := nativeinternal.FeatureProgrammer_IConfig{}
  config.Types = nativeinternal.FeatureProgrammer_IConfig_ITypes{
    Input: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
      return miscPruneProgrammer_factory.NewTypeReferenceNode(miscPruneProgrammer_factory.NewIdentifier(miscCloneProgrammer_type_name(props.Context, t, name)), nil)
    },
    Output: func(_ *shimchecker.Type, _ *string) *shimast.TypeNode {
      return nativefactories.TypeFactory.Keyword("void")
    },
  }
  config.Prefix = miscPruneProgrammer_PREFIX
  config.Trace = false
  config.Path = false
  config.Initializer = miscPruneProgrammer_initializer
  config.Decoder = func(next nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
    return miscPruneProgrammer_decode(struct {
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
        Explore:  miscCloneProgrammer_checker_explore(next.Explore),
      })
    },
    Decoder: func(next nativeinternal.FeatureProgrammer_ObjectorDecoderProps) *shimast.Node {
      return miscPruneProgrammer_decode_object(struct {
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
            Explore: miscCloneProgrammer_feature_explore(v.Explore),
          })
        },
        Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
          return miscPruneProgrammer_decode_object(struct {
            Functor *nativehelpers.FunctionProgrammer
            Input   *shimast.Node
            Object  *schemametadata.MetadataObjectType
            Explore nativeinternal.FeatureProgrammer_IExplore
          }{Functor: props.Functor, Input: v.Input, Object: v.Object, Explore: miscCloneProgrammer_feature_explore(v.Explore)})
        },
        Success: func(exp *shimast.Node) *shimast.Node { return exp },
        Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
          return miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
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
      return miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
        Context:  props.Context,
        Functor:  props.Functor,
        Expected: next.Expected,
        Input:    next.Input,
      })
    },
  }
  config.Generator = nativeinternal.FeatureProgrammer_IConfig_IGenerator{
    Arrays: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
      return miscPruneProgrammer_write_array_functions(struct {
        Config     nativeinternal.FeatureProgrammer_IConfig
        Functor    *nativehelpers.FunctionProgrammer
        Collection *schemametadata.MetadataCollection
      }{Config: config, Functor: props.Functor, Collection: collection})
    },
    Tuples: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
      return miscPruneProgrammer_write_tuple_functions(struct {
        Context    nativecontext.ITypiaContext
        Config     nativeinternal.FeatureProgrammer_IConfig
        Functor    *nativehelpers.FunctionProgrammer
        Collection *schemametadata.MetadataCollection
      }{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection})
    },
  }
  return config
}

func miscPruneProgrammer_initializer(props nativeinternal.FeatureProgrammer_InitializerProps) nativeinternal.FeatureProgrammer_InitializerOutput {
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:     props.Context.Checker,
    Transformer: props.Context.Transformer,
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
      Errors: miscCloneProgrammer_errors(result.Errors),
    }))
  }
  return nativeinternal.FeatureProgrammer_InitializerOutput{
    Collection: collection,
    Metadata:   result.Data,
  }
}

func miscPruneProgrammer_filter(metadata *schemametadata.MetadataSchema) bool {
  if metadata.Any {
    return false
  }
  if len(metadata.Objects) != 0 {
    return true
  }
  for _, tuple := range metadata.Tuples {
    if miscPruneProgrammer_tuple_filter(tuple) {
      return true
    }
  }
  for _, array := range metadata.Arrays {
    if miscPruneProgrammer_filter(array.Type.Value) {
      return true
    }
  }
  return false
}

func miscPruneProgrammer_tuple_filter(tuple *schemametadata.MetadataTuple) bool {
  return len(tuple.Type.Elements) != 0 && miscPruneProgrammer_some_schema(tuple.Type.Elements, func(elem *schemametadata.MetadataSchema) bool {
    if elem.Rest != nil {
      return miscPruneProgrammer_filter(elem.Rest)
    }
    return miscPruneProgrammer_filter(elem)
  })
}

func miscPruneProgrammer_some_schema(values []*schemametadata.MetadataSchema, pred func(*schemametadata.MetadataSchema) bool) bool {
  for _, value := range values {
    if pred(value) {
      return true
    }
  }
  return false
}

func miscPruneProgrammer_join_names[T any](values []T, name func(T) string) string {
  names := make([]string, 0, len(values))
  for _, value := range values {
    names = append(names, name(value))
  }
  return strings.Join(names, " | ")
}
