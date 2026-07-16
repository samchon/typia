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

type plainCloneProgrammerNamespace struct{}

var PlainCloneProgrammer = plainCloneProgrammerNamespace{}

type PlainCloneProgrammer_DecomposeProps struct {
  Validated bool
  Context   nativecontext.ITypiaContext
  Functor   *nativehelpers.FunctionProgrammer
  Type      *shimchecker.Type
  Name      *string
}

const plainCloneProgrammer_PREFIX = "_c"

var plainCloneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainCloneProgrammerNamespace) Decompose(props PlainCloneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  config := plainCloneProgrammer_configure(struct {
    Context nativecontext.ITypiaContext
    Functor *nativehelpers.FunctionProgrammer
  }{
    Context: props.Context,
    Functor: props.Functor,
  })
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
      composed.Body,
    ),
  }
}

func (plainCloneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainCloneProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainCloneProgrammer.Decompose(PlainCloneProgrammer_DecomposeProps{
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

func plainCloneProgrammer_write_array_functions(props struct {
  Context    nativecontext.ITypiaContext
  Config     nativeinternal.FeatureProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
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
        nativeinternal.FeatureProgrammer.VisitGuardRebuild(
          nativeinternal.FeatureProgrammer.VisitKey(props.Config.Prefix, "a", i),
          true,
          plainCloneProgrammer_decode_array_inline(plainCloneProgrammer_decodeArrayProps{
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

func plainCloneProgrammer_write_tuple_functions(props struct {
  Context    nativecontext.ITypiaContext
  Config     nativeinternal.FeatureProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
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
        nativeinternal.FeatureProgrammer.VisitGuardRebuild(
          nativeinternal.FeatureProgrammer.VisitKey(props.Config.Prefix, "t", i),
          true,
          plainCloneProgrammer_decode_tuple_inline(plainCloneProgrammer_decodeTupleInlineProps{
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

func plainCloneProgrammer_decode(props struct {
  Context  nativecontext.ITypiaContext
  Config   nativeinternal.FeatureProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Explore  nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  if props.Metadata.Any ||
    plainCloneProgrammer_some_arrays(props.Metadata.Arrays, func(a *schemametadata.MetadataArray) bool { return a.Type.Value.Any }) ||
    plainCloneProgrammer_some_tuples(props.Metadata.Tuples, func(t *schemametadata.MetadataTuple) bool {
      return len(t.Type.Elements) != 0 && plainCloneProgrammer_every_schema(t.Type.Elements, func(e *schemametadata.MetadataSchema) bool { return e.Any })
    }) {
    return f.NewCallExpression(
      plainCloneProgrammer_internal(props.Context, "plainCloneAny"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
      shimast.NodeFlagsNone,
    )
  }

  unions := []plainCloneProgrammer_IUnion{}
  if len(props.Metadata.Functions) != 0 {
    unions = append(unions, plainCloneProgrammer_IUnion{
      Type: "functional",
      Is: func() *shimast.Node {
        return f.NewBinaryExpression(
          nil,
          f.NewStringLiteral("function", shimast.TokenFlagsNone),
          nil,
          f.NewToken(shimast.KindEqualsEqualsEqualsToken),
          f.NewTypeOfExpression(props.Input),
        )
      },
      Value: func() *shimast.Node {
        return f.NewIdentifier("undefined")
      },
    })
  }
  for _, tuple := range props.Metadata.Tuples {
    tuple := tuple
    unions = append(unions, plainCloneProgrammer_IUnion{
      Type: "tuple",
      Is: func() *shimast.Node {
        partial := schemametadata.MetadataSchema_initialize()
        partial.Tuples = append(partial.Tuples, tuple)
        return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
          Context:  props.Context,
          Functor:  props.Functor,
          Metadata: partial,
          Input:    props.Input,
          Explore: nativeinternal.CheckerProgrammer_IExplore{
            Tracable: props.Explore.Tracable,
            Source:   props.Explore.Source,
            From:     props.Explore.From,
            Postfix:  props.Explore.Postfix,
            Start:    props.Explore.Start,
          },
        })
      },
      Value: func() *shimast.Node {
        return plainCloneProgrammer_decode_tuple(plainCloneProgrammer_decodeTupleProps{
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
  if len(props.Metadata.Arrays) != 0 {
    unions = append(unions, plainCloneProgrammer_IUnion{
      Type: "array",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsArray(props.Input)
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "array"
        return plainCloneProgrammer_explore_arrays(plainCloneProgrammer_exploreArraysProps{
          Context: props.Context,
          Config:  props.Config,
          Functor: props.Functor,
          Input:   props.Input,
          Arrays:  props.Metadata.Arrays,
          Explore: explore,
        })
      },
    })
  }
  if len(props.Metadata.Sets) != 0 {
    unions = append(unions, plainCloneProgrammer_IUnion{
      Type: "set",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf("Set", props.Input)
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "array"
        return plainCloneProgrammer_explore_sets(plainCloneProgrammer_exploreSetsProps{
          Context: props.Context,
          Config:  props.Config,
          Functor: props.Functor,
          Input:   props.Input,
          Sets:    props.Metadata.Sets,
          Explore: explore,
        })
      },
    })
  }
  if len(props.Metadata.Maps) != 0 {
    unions = append(unions, plainCloneProgrammer_IUnion{
      Type: "map",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf("Map", props.Input)
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "array"
        return plainCloneProgrammer_explore_maps(plainCloneProgrammer_exploreMapsProps{
          Context: props.Context,
          Config:  props.Config,
          Functor: props.Functor,
          Input:   props.Input,
          Maps:    props.Metadata.Maps,
          Explore: explore,
        })
      },
    })
  }
  for _, native := range props.Metadata.Natives {
    native := native
    unions = append(unions, plainCloneProgrammer_IUnion{
      Type: "native",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf(native.Name, props.Input)
      },
      Value: func() *shimast.Node {
        if _, ok := schemametadata.MetadataSchema_atomicLikeNative(native.Name); ok {
          return f.NewCallExpression(
            nativefactories.IdentifierFactory.Access(props.Context.Emit, props.Input, "valueOf"),
            nil,
            nil,
            nil,
            shimast.NodeFlagsNone,
          )
        }
        return plainCloneProgrammer_decode_native(struct {
          Context nativecontext.ITypiaContext
          Type    string
          Input   *shimast.Node
        }{Context: props.Context, Type: native.Name, Input: props.Input})
      },
    })
  }
  if len(props.Metadata.Objects) != 0 {
    unions = append(unions, plainCloneProgrammer_IUnion{
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
        return plainCloneProgrammer_explore_objects(plainCloneProgrammer_exploreObjectsProps{
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

  if len(unions) == 0 {
    return props.Input
  }
  if len(unions) == 1 && props.Metadata.Size() == 1 {
    value := unions[0].Value()
    if (props.Metadata.Nullable || props.Metadata.IsRequired() == false) && plainCloneProgrammer_is_instance(props.Metadata) {
      value = nativefactories.ExpressionFactory.Conditional(
        props.Input,
        value,
        props.Input,
        props.Context.Emit,
      )
    }
    return f.NewAsExpression(value, nativefactories.TypeFactory.Keyword("any", props.Context.Emit))
  }
  last := props.Input
  for i := len(unions) - 1; i >= 0; i-- {
    u := unions[i]
    last = nativefactories.ExpressionFactory.Conditional(u.Is(), u.Value(), last, props.Context.Emit)
  }
  return f.NewAsExpression(last, nativefactories.TypeFactory.Keyword("any", props.Context.Emit))
}

type plainCloneProgrammer_IUnion struct {
  Type  string
  Is    func() *shimast.Node
  Value func() *shimast.Node
}

func plainCloneProgrammer_decode_object(props struct {
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Object  *schemametadata.MetadataObjectType
  Explore nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
  return nativeinternal.FeatureProgrammer.Decode_object(nativeinternal.FeatureProgrammer_DecodeObjectProps{
    Config: nativeinternal.FeatureProgrammer_DecodeObjectConfig{
      Trace:   false,
      Path:    false,
      Prefix:  plainCloneProgrammer_PREFIX,
      Visited: props.Functor.Visited(),
    },
    Functor: props.Functor,
    Input:   props.Input,
    Object:  props.Object,
    Explore: props.Explore,
  })
}

type plainCloneProgrammer_decodeArrayProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Array   *schemametadata.MetadataArray
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainCloneProgrammer_decode_array(props plainCloneProgrammer_decodeArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
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
  return plainCloneProgrammer_decode_array_inline(props)
}

func plainCloneProgrammer_decode_array_inline(props plainCloneProgrammer_decodeArrayProps) *shimast.Node {
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
      return nativehelpers.CloneJoiner.Array(nativehelpers.CloneJoiner_ArrayProps{
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

type plainCloneProgrammer_decodeTupleProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Tuple   *schemametadata.MetadataTuple
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainCloneProgrammer_decode_tuple(props plainCloneProgrammer_decodeTupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
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
  return plainCloneProgrammer_decode_tuple_inline(plainCloneProgrammer_decodeTupleInlineProps{
    Context: props.Context,
    Config:  props.Config,
    Functor: props.Functor,
    Input:   props.Input,
    Tuple:   props.Tuple.Type,
    Explore: props.Explore,
  })
}

type plainCloneProgrammer_decodeTupleInlineProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Tuple   *schemametadata.MetadataTupleType
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainCloneProgrammer_decode_tuple_inline(props plainCloneProgrammer_decodeTupleInlineProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  elements := []*shimast.Node{}
  for index, elem := range props.Tuple.Elements {
    if elem.Rest != nil {
      continue
    }
    postfix := fmt.Sprintf("\"[%d]\"", index)
    if props.Explore.Postfix != "" {
      postfix = fmt.Sprintf("%s[%d]\"", nativeiterate.Postfix_of_tuple_export(props.Explore.Postfix), index)
    }
    explore := props.Explore
    explore.From = "array"
    explore.Postfix = postfix
    elements = append(elements, plainCloneProgrammer_decode(struct {
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
    if last.Rest != nil {
      start := len(props.Tuple.Elements) - 1
      explore := props.Explore
      explore.Start = &start
      rest = plainCloneProgrammer_decode(struct {
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
  return nativehelpers.CloneJoiner.Tuple(nativehelpers.CloneJoiner_TupleProps{
    Elements: elements,
    Rest:     rest,
    Emit:     props.Context.Emit,
  })
}

func plainCloneProgrammer_decode_native(props struct {
  Context nativecontext.ITypiaContext
  Type    string
  Input   *shimast.Node
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  switch props.Type {
  case "Date", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array", "Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array":
    return f.NewNewExpression(
      f.NewIdentifier(props.Type),
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
    )
  case "ArrayBuffer", "SharedArrayBuffer":
    return plainCloneProgrammer_decode_native_buffer(props.Type, props.Input, props.Context.Emit)
  case "DataView", "Blob", "File", "RegExp":
    return f.NewCallExpression(
      plainCloneProgrammer_internal(props.Context, "plainCloneAny"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
      shimast.NodeFlagsNone,
    )
  default:
    return f.NewCallExpression(
      f.NewIdentifier(props.Type),
      nil,
      nil,
      nil,
      shimast.NodeFlagsNone,
    )
  }
}

func plainCloneProgrammer_decode_native_buffer(typ string, input *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, emit)
  return nativefactories.ExpressionFactory.SelfCall(
    emit,
    f.NewBlock(f.NewNodeList([]*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "buffer",
        Value: f.NewNewExpression(
          f.NewIdentifier(typ),
          nil,
          f.NewNodeList([]*shimast.Node{nativefactories.IdentifierFactory.Access(emit, input, "byteLength")}),
        ),
      }, emit),
      f.NewExpressionStatement(f.NewCallExpression(
        nativefactories.IdentifierFactory.Access(
          emit,
          f.NewNewExpression(
            f.NewIdentifier("Uint8Array"),
            nil,
            f.NewNodeList([]*shimast.Node{f.NewIdentifier("buffer")}),
          ),
          "set",
        ),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewNewExpression(
            f.NewIdentifier("Uint8Array"),
            nil,
            f.NewNodeList([]*shimast.Node{input}),
          ),
        }),
        shimast.NodeFlagsNone,
      )),
      f.NewReturnStatement(f.NewIdentifier("buffer")),
    }), true),
  )
}

type plainCloneProgrammer_exploreArraysProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Arrays  []*schemametadata.MetadataArray
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainCloneProgrammer_explore_arrays(props plainCloneProgrammer_exploreArraysProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
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
          return plainCloneProgrammer_decode_array(plainCloneProgrammer_decodeArrayProps{
            Context: props.Context,
            Config:  props.Config,
            Functor: props.Functor,
            Input:   v.Input,
            Array:   v.Definition.(*schemametadata.MetadataArray),
            Explore: plainCloneProgrammer_feature_explore(v.Explore),
          })
        },
        Empty:   f.NewIdentifier("[]"),
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

type plainCloneProgrammer_exploreSetsProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Sets    []*schemametadata.MetadataSet
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainCloneProgrammer_explore_sets(props plainCloneProgrammer_exploreSetsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativehelpers.UnionExplorer.Set(nativehelpers.UnionExplorer_SetProps{
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
          return f.NewNewExpression(
            f.NewIdentifier("Set"),
            f.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any", props.Context.Emit)}),
            f.NewNodeList([]*shimast.Node{
              plainCloneProgrammer_decode_array(plainCloneProgrammer_decodeArrayProps{
                Context: props.Context,
                Config:  props.Config,
                Functor: props.Functor,
                Input:   v.Input,
                Array:   v.Definition.(*schemametadata.MetadataArray),
                Explore: plainCloneProgrammer_feature_explore(v.Explore),
              }),
            }),
          )
        },
        Empty: f.NewNewExpression(
          f.NewIdentifier("Set"),
          f.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any", props.Context.Emit)}),
          nil,
        ),
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

type plainCloneProgrammer_exploreMapsProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Maps    []*schemametadata.MetadataMap
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainCloneProgrammer_explore_maps(props plainCloneProgrammer_exploreMapsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativehelpers.UnionExplorer.Map(nativehelpers.UnionExplorer_MapProps{
      Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
        Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          pair := v.Definition.([]*schemametadata.MetadataSchema)
          first := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Input:    f.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(0, props.Context.Emit), shimast.NodeFlagsNone),
            Metadata: pair[0],
            Explore:  plainCloneProgrammer_checker_explore_with_postfix(v.Explore, "[0]"),
          })
          second := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Input:    f.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(1, props.Context.Emit), shimast.NodeFlagsNone),
            Metadata: pair[1],
            Explore:  plainCloneProgrammer_checker_explore_with_postfix(v.Explore, "[1]"),
          })
          return f.NewBinaryExpression(nil, first, nil, f.NewToken(shimast.KindAmpersandAmpersandToken), second)
        },
        Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          return f.NewNewExpression(
            f.NewIdentifier("Map"),
            f.NewNodeList([]*shimast.Node{
              nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
              nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
            }),
            f.NewNodeList([]*shimast.Node{
              plainCloneProgrammer_decode_array(plainCloneProgrammer_decodeArrayProps{
                Context: props.Context,
                Config:  props.Config,
                Functor: props.Functor,
                Input:   v.Input,
                Array:   v.Definition.(*schemametadata.MetadataArray),
                Explore: plainCloneProgrammer_feature_explore(v.Explore),
              }),
            }),
          )
        },
        Empty: f.NewNewExpression(
          f.NewIdentifier("Map"),
          f.NewNodeList([]*shimast.Node{
            nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
            nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
          }),
          nil,
        ),
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

type plainCloneProgrammer_exploreObjectsProps struct {
  Context  nativecontext.ITypiaContext
  Config   nativeinternal.FeatureProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Explore  nativeinternal.FeatureProgrammer_IExplore
}

func plainCloneProgrammer_explore_objects(props plainCloneProgrammer_exploreObjectsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  if len(props.Metadata.Objects) == 1 {
    return plainCloneProgrammer_decode_object(struct {
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
    f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", plainCloneProgrammer_PREFIX, index))),
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

func plainCloneProgrammer_configure(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.FeatureProgrammer_IConfig {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  config := nativeinternal.FeatureProgrammer_IConfig{}
  config.Types = nativeinternal.FeatureProgrammer_IConfig_ITypes{
    Input: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
      return f.NewTypeReferenceNode(f.NewIdentifier(plainCloneProgrammer_type_name(props.Context, t, name)), nil)
    },
    Output: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
      return plainCloneProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File: "typia",
        Name: "Resolved",
        Arguments: []*shimast.TypeNode{
          f.NewTypeReferenceNode(f.NewIdentifier(plainCloneProgrammer_type_name(props.Context, t, name)), nil),
        },
      })
    },
  }
  config.Prefix = plainCloneProgrammer_PREFIX
  config.Trace = false
  config.Path = false
  config.Initializer = plainCloneProgrammer_initializer
  config.Visited = props.Functor.Visited
  config.VisitGuard = func(next nativeinternal.FeatureProgrammer_VisitGuardProps) *shimast.Node {
    return nativeinternal.FeatureProgrammer.VisitGuardRebuild(next.Key, false, next.Body, props.Context.Emit)
  }
  config.Decoder = func(next nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
    return plainCloneProgrammer_decode(struct {
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
      return plainCloneProgrammer_decode_object(struct {
        Functor *nativehelpers.FunctionProgrammer
        Input   *shimast.Node
        Object  *schemametadata.MetadataObjectType
        Explore nativeinternal.FeatureProgrammer_IExplore
      }{
        Functor: props.Functor,
        Input:   next.Input,
        Object:  next.Object,
        Explore: next.Explore,
      })
    },
    Joiner: func(next nativeinternal.FeatureProgrammer_ObjectorJoinerProps) *shimast.Node {
      return nativehelpers.CloneJoiner.Object(nativehelpers.CloneJoiner_ObjectProps{
        Input:   next.Input,
        Entries: next.Entries,
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
          return plainCloneProgrammer_decode_object(struct {
            Functor *nativehelpers.FunctionProgrammer
            Input   *shimast.Node
            Object  *schemametadata.MetadataObjectType
            Explore nativeinternal.FeatureProgrammer_IExplore
          }{
            Functor: props.Functor,
            Input:   v.Input,
            Object:  v.Object,
            Explore: plainCloneProgrammer_feature_explore(v.Explore),
          })
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
      return plainCloneProgrammer_write_array_functions(struct {
        Context    nativecontext.ITypiaContext
        Config     nativeinternal.FeatureProgrammer_IConfig
        Functor    *nativehelpers.FunctionProgrammer
        Collection *schemametadata.MetadataCollection
      }{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection})
    },
    Tuples: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
      return plainCloneProgrammer_write_tuple_functions(struct {
        Context    nativecontext.ITypiaContext
        Config     nativeinternal.FeatureProgrammer_IConfig
        Functor    *nativehelpers.FunctionProgrammer
        Collection *schemametadata.MetadataCollection
      }{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection})
    },
  }
  return config
}

func plainCloneProgrammer_initializer(props nativeinternal.FeatureProgrammer_InitializerProps) nativeinternal.FeatureProgrammer_InitializerOutput {
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
      Validate: func(next struct {
        Metadata *schemametadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *schemametadata.MetadataSchema
      }) []string {
        output := []string{}
        for _, native := range next.Metadata.Natives {
          if native.Name == "WeakSet" {
            output = append(output, "unable to clone WeakSet")
          } else if native.Name == "WeakMap" {
            output = append(output, "unable to clone WeakMap")
          }
        }
        return output
      },
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

type plainCloneProgrammer_throwProps struct {
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Expected string
  Input    *shimast.Node
}

func plainCloneProgrammer_create_throw_error(props plainCloneProgrammer_throwProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, props.Context.Emit)
  return f.NewExpressionStatement(
    f.NewCallExpression(
      plainCloneProgrammer_internal(props.Context, "throwTypeGuardError"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewObjectLiteralExpression(
          f.NewNodeList([]*shimast.Node{
            f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("method", props.Context.Emit), nil, nil, f.NewStringLiteral(props.Functor.Method, shimast.TokenFlagsNone)),
            f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("expected", props.Context.Emit), nil, nil, f.NewStringLiteral(props.Expected, shimast.TokenFlagsNone)),
            f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("value", props.Context.Emit), nil, nil, props.Input),
          }),
          true,
        ),
      }),
      shimast.NodeFlagsNone,
    ),
  )
}

func plainCloneProgrammer_is_instance(metadata *schemametadata.MetadataSchema) bool {
  if len(metadata.Objects) != 0 ||
    len(metadata.Arrays) != 0 ||
    len(metadata.Tuples) != 0 ||
    len(metadata.Sets) != 0 ||
    len(metadata.Maps) != 0 ||
    len(metadata.Natives) != 0 {
    return true
  }
  return metadata.Rest != nil && plainCloneProgrammer_is_instance(metadata.Rest)
}

func plainCloneProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, context.Emit)
  return f.NewIdentifier(name)
}

func plainCloneProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  if str, ok := props.Name.(string); ok {
    f := nativecontext.EmitFactoryOf(plainCloneProgrammer_factory, context.Emit)
    return f.NewTypeReferenceNode(f.NewIdentifier(str), f.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}

func plainCloneProgrammer_type_name(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) string {
  if name != nil {
    return *name
  }
  return nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
    Checker: context.Checker,
    Type:    typ,
  })
}

func plainCloneProgrammer_method_text(modulo *shimast.Node) string {
  return nativehelpers.ModuloMethodText(modulo)
}

func plainCloneProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
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
      Messages: append([]string{}, err.Messages...),
    })
  }
  return output
}

func plainCloneProgrammer_feature_explore(input any) nativeinternal.FeatureProgrammer_IExplore {
  switch v := input.(type) {
  case nativeinternal.FeatureProgrammer_IExplore:
    return v
  case *nativeinternal.FeatureProgrammer_IExplore:
    return *v
  default:
    return nativeinternal.FeatureProgrammer_IExplore{}
  }
}

func plainCloneProgrammer_checker_explore(input any) nativeinternal.CheckerProgrammer_IExplore {
  v := plainCloneProgrammer_feature_explore(input)
  return nativeinternal.CheckerProgrammer_IExplore{
    Tracable: v.Tracable,
    Source:   v.Source,
    From:     v.From,
    Postfix:  v.Postfix,
    Start:    v.Start,
  }
}

func plainCloneProgrammer_checker_explore_with_postfix(input any, postfix string) nativeinternal.CheckerProgrammer_IExplore {
  v := plainCloneProgrammer_checker_explore(input)
  v.Postfix = v.Postfix + postfix
  return v
}

func plainCloneProgrammer_explore_with(explore nativeinternal.FeatureProgrammer_IExplore, source string, from string) nativeinternal.FeatureProgrammer_IExplore {
  explore.Source = source
  explore.From = from
  return explore
}

func plainCloneProgrammer_some_arrays(values []*schemametadata.MetadataArray, pred func(*schemametadata.MetadataArray) bool) bool {
  for _, value := range values {
    if pred(value) {
      return true
    }
  }
  return false
}

func plainCloneProgrammer_some_tuples(values []*schemametadata.MetadataTuple, pred func(*schemametadata.MetadataTuple) bool) bool {
  for _, value := range values {
    if pred(value) {
      return true
    }
  }
  return false
}

func plainCloneProgrammer_every_schema(values []*schemametadata.MetadataSchema, pred func(*schemametadata.MetadataSchema) bool) bool {
  if len(values) == 0 {
    return false
  }
  for _, value := range values {
    if pred(value) == false {
      return false
    }
  }
  return true
}

func plainCloneProgrammer_join_names[T any](values []T, name func(T) string) string {
  names := make([]string, 0, len(values))
  for _, value := range values {
    names = append(names, name(value))
  }
  return strings.Join(names, " | ")
}
