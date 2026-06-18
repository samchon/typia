package plain

import (
  "fmt"
  "path/filepath"
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

type plainClassifyProgrammerNamespace struct{}

var PlainClassifyProgrammer = plainClassifyProgrammerNamespace{}

type PlainClassifyProgrammer_DecomposeProps struct {
  Validated bool
  Context   nativecontext.ITypiaContext
  Functor   *nativehelpers.FunctionProgrammer
  Type      *shimchecker.Type
  Name      *string
  // Modulo is the call-site node (the typia.plain.classify(...) call). Its
  // source file anchors cross-module class value-import specifiers for the
  // from/new construction strategies; nil falls back to a bare identifier.
  Modulo *shimast.Node
}

const plainClassifyProgrammer_PREFIX = "_y"

// is-check helper namespaces for the union construction ladder. The UNVALIDATED
// path reuses the sole "_i" IsProgrammer namespace. The VALIDATED path must NOT
// reuse it: assert/validateClassify already emit _io<i>/_iu<i> for __assert from
// a SEPARATE collection (built over GetUnionType(seeds), which may reorder/dedup),
// so the construction ladder — which indexes by the CLASSIFY collection — would
// reference a divergent index. "_yi" gives __classify its own helpers, emitted
// and referenced from the one classify collection, disjoint from "_i" (assert)
// and from the "_y" classify joiners (_yo<i>/_yu<i>): "_yi"+"o"+i = _yio<i>.
const plainClassifyProgrammer_IS_PREFIX = "_i"
const plainClassifyProgrammer_IS_PREFIX_VALIDATED = "_yi"

var plainClassifyProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (plainClassifyProgrammerNamespace) Decompose(props PlainClassifyProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  // The union construction ladder discriminates members with IsProgrammer.Decode
  // (is-check helper calls), so those helpers must exist in the classify IIFE,
  // emitted via the Addition. UNVALIDATED uses the sole "_i" namespace (a non-union
  // field-copy references none, so the Addition is a harmless no-op). VALIDATED
  // must NOT reuse "_i": __assert already emits _io<i>/_iu<i> from a SEPARATE
  // collection that GetUnionType may reorder/dedup, so the ladder's classify-
  // collection indices would diverge from the emitted ones (ReferenceError / wrong
  // class). The validated ladder therefore emits and references its OWN helpers
  // under "_yi" (=> _yio<i>/_yiu<i>), disjoint from "_i" and the "_y" joiners.
  isPrefix := plainClassifyProgrammer_IS_PREFIX
  if props.Validated {
    isPrefix = plainClassifyProgrammer_IS_PREFIX_VALIDATED
  }
  // Carry the is-prefix on the function programmer so the recursive decode /
  // explore helpers (which emit NESTED discriminations — object-unions, arrays/
  // sets/maps of unions, tuples) reference the same namespace as the top-level
  // ladder and the Addition, instead of the default "_i" (which in the validated
  // path comes from the assert side's divergent collection).
  props.Functor.SetIsPrefix(isPrefix)
  config := plainClassifyProgrammer_configure(struct {
    Context  nativecontext.ITypiaContext
    Functor  *nativehelpers.FunctionProgrammer
    Modulo   *shimast.Node
    IsPrefix string
  }{
    Context:  props.Context,
    Functor:  props.Functor,
    Modulo:   props.Modulo,
    IsPrefix: isPrefix,
  })
  config.Addition = func(collection *schemametadata.MetadataCollection) []*shimast.Node {
    return nativeprogrammers.IsProgrammer.Write_function_statements(nativeprogrammers.IsProgrammer_WriteFunctionStatementsProps{
      Context:    props.Context,
      Functor:    props.Functor,
      Collection: collection,
      Prefix:     isPrefix,
    })
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

func (plainClassifyProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(plainClassifyProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := PlainClassifyProgrammer.Decompose(PlainClassifyProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: false,
    Modulo:    props.Modulo,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func plainClassifyProgrammer_write_array_functions(props struct {
  Context    nativecontext.ITypiaContext
  Config     nativeinternal.FeatureProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
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
          plainClassifyProgrammer_decode_array_inline(plainClassifyProgrammer_decodeArrayProps{
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

func plainClassifyProgrammer_write_tuple_functions(props struct {
  Context    nativecontext.ITypiaContext
  Config     nativeinternal.FeatureProgrammer_IConfig
  Functor    *nativehelpers.FunctionProgrammer
  Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
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
          plainClassifyProgrammer_decode_tuple_inline(plainClassifyProgrammer_decodeTupleInlineProps{
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

func plainClassifyProgrammer_decode(props struct {
  Context  nativecontext.ITypiaContext
  Config   nativeinternal.FeatureProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Explore  nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  if props.Metadata.Any ||
    plainClassifyProgrammer_some_arrays(props.Metadata.Arrays, func(a *schemametadata.MetadataArray) bool { return a.Type.Value.Any }) ||
    plainClassifyProgrammer_some_tuples(props.Metadata.Tuples, func(t *schemametadata.MetadataTuple) bool {
      return len(t.Type.Elements) != 0 && plainClassifyProgrammer_every_schema(t.Type.Elements, func(e *schemametadata.MetadataSchema) bool { return e.Any })
    }) {
    return f.NewCallExpression(
      plainClassifyProgrammer_internal(props.Context, "plainCloneAny"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
      shimast.NodeFlagsNone,
    )
  }

  unions := []plainClassifyProgrammer_IUnion{}
  if len(props.Metadata.Functions) != 0 {
    unions = append(unions, plainClassifyProgrammer_IUnion{
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
    unions = append(unions, plainClassifyProgrammer_IUnion{
      Type: "tuple",
      Is: func() *shimast.Node {
        partial := schemametadata.MetadataSchema_initialize()
        partial.Tuples = append(partial.Tuples, tuple)
        return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
          Context:  props.Context,
          Functor:  props.Functor,
          Prefix:   props.Functor.IsPrefix(),
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
        return plainClassifyProgrammer_decode_tuple(plainClassifyProgrammer_decodeTupleProps{
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
    unions = append(unions, plainClassifyProgrammer_IUnion{
      Type: "array",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsArray(props.Input)
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "array"
        return plainClassifyProgrammer_explore_arrays(plainClassifyProgrammer_exploreArraysProps{
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
    unions = append(unions, plainClassifyProgrammer_IUnion{
      Type: "set",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf("Set", props.Input)
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "array"
        return plainClassifyProgrammer_explore_sets(plainClassifyProgrammer_exploreSetsProps{
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
    unions = append(unions, plainClassifyProgrammer_IUnion{
      Type: "map",
      Is: func() *shimast.Node {
        return nativefactories.ExpressionFactory.IsInstanceOf("Map", props.Input)
      },
      Value: func() *shimast.Node {
        explore := props.Explore
        explore.From = "array"
        return plainClassifyProgrammer_explore_maps(plainClassifyProgrammer_exploreMapsProps{
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
    unions = append(unions, plainClassifyProgrammer_IUnion{
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
        return plainClassifyProgrammer_decode_native(struct {
          Context nativecontext.ITypiaContext
          Type    string
          Input   *shimast.Node
        }{Context: props.Context, Type: native.Name, Input: props.Input})
      },
    })
  }
  if len(props.Metadata.Objects) != 0 {
    unions = append(unions, plainClassifyProgrammer_IUnion{
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
        return plainClassifyProgrammer_explore_objects(plainClassifyProgrammer_exploreObjectsProps{
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
    if (props.Metadata.Nullable || props.Metadata.IsRequired() == false) && plainClassifyProgrammer_is_instance(props.Metadata) {
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

type plainClassifyProgrammer_IUnion struct {
  Type  string
  Is    func() *shimast.Node
  Value func() *shimast.Node
}

func plainClassifyProgrammer_decode_object(props struct {
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Object  *schemametadata.MetadataObjectType
  Explore nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
  return nativeinternal.FeatureProgrammer.Decode_object(nativeinternal.FeatureProgrammer_DecodeObjectProps{
    Config: nativeinternal.FeatureProgrammer_DecodeObjectConfig{
      Trace:   false,
      Path:    false,
      Prefix:  plainClassifyProgrammer_PREFIX,
      Visited: props.Functor.Visited(),
    },
    Functor: props.Functor,
    Input:   props.Input,
    Object:  props.Object,
    Explore: props.Explore,
  })
}

type plainClassifyProgrammer_decodeArrayProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Array   *schemametadata.MetadataArray
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainClassifyProgrammer_decode_array(props plainClassifyProgrammer_decodeArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  if props.Array.Type.Recursive {
    return f.NewCallExpression(
      f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%sa%d", props.Config.Prefix, *props.Array.Type.Index))),
      nil,
      nil,
      f.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
        Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
        Explore: plainClassifyProgrammer_explore_with(props.Explore, "function", "array"),
        Input:   props.Input,
      })),
      shimast.NodeFlagsNone,
    )
  }
  return plainClassifyProgrammer_decode_array_inline(props)
}

func plainClassifyProgrammer_decode_array_inline(props plainClassifyProgrammer_decodeArrayProps) *shimast.Node {
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

type plainClassifyProgrammer_decodeTupleProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Tuple   *schemametadata.MetadataTuple
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainClassifyProgrammer_decode_tuple(props plainClassifyProgrammer_decodeTupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  if props.Tuple.Type.Recursive {
    return f.NewCallExpression(
      f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%st%d", props.Config.Prefix, *props.Tuple.Type.Index))),
      nil,
      nil,
      f.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
        Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace, Visited: props.Functor.Visited()},
        Explore: plainClassifyProgrammer_explore_with(props.Explore, "function", props.Explore.From),
        Input:   props.Input,
      })),
      shimast.NodeFlagsNone,
    )
  }
  return plainClassifyProgrammer_decode_tuple_inline(plainClassifyProgrammer_decodeTupleInlineProps{
    Context: props.Context,
    Config:  props.Config,
    Functor: props.Functor,
    Input:   props.Input,
    Tuple:   props.Tuple.Type,
    Explore: props.Explore,
  })
}

type plainClassifyProgrammer_decodeTupleInlineProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Tuple   *schemametadata.MetadataTupleType
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainClassifyProgrammer_decode_tuple_inline(props plainClassifyProgrammer_decodeTupleInlineProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
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
    elements = append(elements, plainClassifyProgrammer_decode(struct {
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
      rest = plainClassifyProgrammer_decode(struct {
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

func plainClassifyProgrammer_decode_native(props struct {
  Context nativecontext.ITypiaContext
  Type    string
  Input   *shimast.Node
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  switch props.Type {
  case "Date", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array", "Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array", "RegExp":
    return f.NewNewExpression(
      f.NewIdentifier(props.Type),
      nil,
      f.NewNodeList([]*shimast.Node{props.Input}),
    )
  case "ArrayBuffer", "SharedArrayBuffer":
    return plainClassifyProgrammer_decode_native_buffer(props.Type, props.Input, props.Context.Emit)
  case "DataView":
    return f.NewNewExpression(
      f.NewIdentifier("DataView"),
      nil,
      f.NewNodeList([]*shimast.Node{nativefactories.IdentifierFactory.Access(props.Context.Emit, props.Input, "buffer")}),
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

func plainClassifyProgrammer_decode_native_buffer(typ string, input *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, emit)
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

type plainClassifyProgrammer_exploreArraysProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Arrays  []*schemametadata.MetadataArray
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainClassifyProgrammer_explore_arrays(props plainClassifyProgrammer_exploreArraysProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativehelpers.UnionExplorer.Array(nativehelpers.UnionExplorer_ArrayProps{
      Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
        Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Prefix:   props.Functor.IsPrefix(),
            Input:    v.Input,
            Metadata: v.Definition.(*schemametadata.MetadataSchema),
            Explore:  plainClassifyProgrammer_checker_explore(v.Explore),
          })
        },
        Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          return plainClassifyProgrammer_decode_array(plainClassifyProgrammer_decodeArrayProps{
            Context: props.Context,
            Config:  props.Config,
            Functor: props.Functor,
            Input:   v.Input,
            Array:   v.Definition.(*schemametadata.MetadataArray),
            Explore: plainClassifyProgrammer_feature_explore(v.Explore),
          })
        },
        Empty:   f.NewIdentifier("[]"),
        Success: f.NewKeywordExpression(shimast.KindTrueKeyword),
        Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
          return plainClassifyProgrammer_create_throw_error(plainClassifyProgrammer_throwProps{
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

type plainClassifyProgrammer_exploreSetsProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Sets    []*schemametadata.MetadataSet
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainClassifyProgrammer_explore_sets(props plainClassifyProgrammer_exploreSetsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativehelpers.UnionExplorer.Set(nativehelpers.UnionExplorer_SetProps{
      Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
        Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Prefix:   props.Functor.IsPrefix(),
            Input:    v.Input,
            Metadata: v.Definition.(*schemametadata.MetadataSchema),
            Explore:  plainClassifyProgrammer_checker_explore(v.Explore),
          })
        },
        Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
          return f.NewNewExpression(
            f.NewIdentifier("Set"),
            f.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any", props.Context.Emit)}),
            f.NewNodeList([]*shimast.Node{
              plainClassifyProgrammer_decode_array(plainClassifyProgrammer_decodeArrayProps{
                Context: props.Context,
                Config:  props.Config,
                Functor: props.Functor,
                Input:   v.Input,
                Array:   v.Definition.(*schemametadata.MetadataArray),
                Explore: plainClassifyProgrammer_feature_explore(v.Explore),
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
          return plainClassifyProgrammer_create_throw_error(plainClassifyProgrammer_throwProps{
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

type plainClassifyProgrammer_exploreMapsProps struct {
  Context nativecontext.ITypiaContext
  Config  nativeinternal.FeatureProgrammer_IConfig
  Functor *nativehelpers.FunctionProgrammer
  Input   *shimast.Node
  Maps    []*schemametadata.MetadataMap
  Explore nativeinternal.FeatureProgrammer_IExplore
}

func plainClassifyProgrammer_explore_maps(props plainClassifyProgrammer_exploreMapsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativehelpers.UnionExplorer.Map(nativehelpers.UnionExplorer_MapProps{
      Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
        Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
          pair := v.Definition.([]*schemametadata.MetadataSchema)
          first := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Prefix:   props.Functor.IsPrefix(),
            Input:    f.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(0, props.Context.Emit), shimast.NodeFlagsNone),
            Metadata: pair[0],
            Explore:  plainClassifyProgrammer_checker_explore_with_postfix(v.Explore, "[0]"),
          })
          second := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
            Context:  props.Context,
            Functor:  props.Functor,
            Prefix:   props.Functor.IsPrefix(),
            Input:    f.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(1, props.Context.Emit), shimast.NodeFlagsNone),
            Metadata: pair[1],
            Explore:  plainClassifyProgrammer_checker_explore_with_postfix(v.Explore, "[1]"),
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
              plainClassifyProgrammer_decode_array(plainClassifyProgrammer_decodeArrayProps{
                Context: props.Context,
                Config:  props.Config,
                Functor: props.Functor,
                Input:   v.Input,
                Array:   v.Definition.(*schemametadata.MetadataArray),
                Explore: plainClassifyProgrammer_feature_explore(v.Explore),
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
          return plainClassifyProgrammer_create_throw_error(plainClassifyProgrammer_throwProps{
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

type plainClassifyProgrammer_exploreObjectsProps struct {
  Context  nativecontext.ITypiaContext
  Config   nativeinternal.FeatureProgrammer_IConfig
  Functor  *nativehelpers.FunctionProgrammer
  Input    *shimast.Node
  Metadata *schemametadata.MetadataSchema
  Explore  nativeinternal.FeatureProgrammer_IExplore
}

func plainClassifyProgrammer_explore_objects(props plainClassifyProgrammer_exploreObjectsProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  if len(props.Metadata.Objects) == 1 {
    return plainClassifyProgrammer_decode_object(struct {
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
    f.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", plainClassifyProgrammer_PREFIX, index))),
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

func plainClassifyProgrammer_configure(props struct {
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Modulo   *shimast.Node
  IsPrefix string
}) nativeinternal.FeatureProgrammer_IConfig {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  config := nativeinternal.FeatureProgrammer_IConfig{}

  // from/new construction strategies (classify-scoped, never on the shared
  // metadata schema). The wrapped initializer detects a class-TYPE target
  // (typeof C) and records its strategy here, keyed by the top object; the
  // root decode (Explore.From=="top") consumes it. topStrategy covers a
  // non-object instance (e.g. a class extending Map/Array) whose top metadata
  // has no single object to key by. callFile anchors cross-module class imports.
  strategies := map[*schemametadata.MetadataObjectType]*plainClassifyProgrammer_strategy{}
  var topStrategy *plainClassifyProgrammer_strategy
  // ordered arms of a class-TYPE UNION target (typeof A | typeof B); empty for a
  // single (non-union) target, which keeps the strategies[]/topStrategy path
  // below byte-identical.
  var unionMembers []plainClassifyProgrammer_member
  callFile := plainClassifyProgrammer_call_file(props.Modulo)
  // classRefOf resolves a named class to a value reference for the field-copy
  // path (Object.create(<Class>.prototype) in ClassifyJoiner and the recursion
  // guard allocator). Bare identifier when the class is in lexical scope at the
  // call site (same file, or source unknown); a relative value import otherwise
  // — without it a cross-module field-copied class is referenced by an
  // unimported identifier and throws ReferenceError at runtime. (A default-
  // exported cross-module class still resolves via a named import here; the
  // from/new construct path resolves default vs named precisely via class_ref.)
  classRefOf := func(obj *schemametadata.MetadataObjectType) *shimast.Node {
    if obj == nil {
      return nil
    }
    // The runtime value reference. obj.Name is the qualified metadata name, which
    // is already a usable value for a plain or namespaced class ("NS.Plain"
    // prints verbatim). Two cases need a different binding: a NAMED class
    // expression (ValueRef = the `const X` binding, since obj.Name is the inner
    // class name), and a generic instantiation (obj.Name is "Container<string>" —
    // strip the type arguments to the bare constructor "Container").
    name := obj.Name
    if obj.ValueRef != "" {
      name = obj.ValueRef
    } else if i := strings.IndexByte(name, '<'); i >= 0 {
      name = name[:i]
    }
    // A binder-internal anonymous class (`__class`, an unbound `class {}`
    // expression) or a reserved anonymous default export (`default`, from
    // `export default class {}`) is NOT a usable bare runtime binding. For such a
    // class `bare` stays nil, so the same-file paths return nil and the joiner /
    // VisitGuard field-copy a plain `{}` instead of `Object.create(__class…)` /
    // `Object.create(default…)`. A cross-module default export still resolves
    // through Importer.Default below (which emits a valid `.default` access).
    usable := name != "" && name != "__class" && name != "default"
    var bare *shimast.Node
    if usable {
      bare = f.NewIdentifier(name)
    }
    if obj.Source == nil || callFile == "" {
      return bare
    }
    classFileAbs, err := filepath.Abs(*obj.Source)
    if err != nil || classFileAbs == callFile {
      return bare
    }
    rel, err := filepath.Rel(filepath.Dir(callFile), strings.TrimSuffix(classFileAbs, filepath.Ext(classFileAbs)))
    if err != nil {
      return bare
    }
    spec := filepath.ToSlash(rel)
    if !strings.HasPrefix(spec, ".") {
      spec = "./" + spec
    }
    if obj.SourceDefault {
      return props.Context.Importer.Default(nativecontext.ImportProgrammer_IDefault{File: spec, Name: name, Type: false})
    }
    if !usable {
      return nil
    }
    return props.Context.Importer.Instance(nativecontext.ImportProgrammer_IInstance{File: spec, Name: name})
  }
  config.Types = nativeinternal.FeatureProgrammer_IConfig_ITypes{
    Input: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
      return f.NewTypeReferenceNode(f.NewIdentifier(plainClassifyProgrammer_type_name(props.Context, t, name)), nil)
    },
    Output: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
      // classify reconstructs a real instance of T, so the return type is T
      // itself — not Resolved<T> (the plain, methods-stripped form clone returns).
      return f.NewTypeReferenceNode(f.NewIdentifier(plainClassifyProgrammer_type_name(props.Context, t, name)), nil)
    },
  }
  config.Prefix = plainClassifyProgrammer_PREFIX
  config.Trace = false
  config.Path = false
  config.Initializer = func(p nativeinternal.FeatureProgrammer_InitializerProps) nativeinternal.FeatureProgrammer_InitializerOutput {
    out, st, members := plainClassifyProgrammer_initialize(p, callFile, props.Modulo)
    if st != nil {
      topStrategy = st
      if len(out.Metadata.Objects) == 1 {
        strategies[out.Metadata.Objects[0].Type] = st
      }
    }
    if len(members) != 0 {
      unionMembers = members
    }
    return out
  }
  config.Visited = props.Functor.Visited
  config.VisitGuard = func(next nativeinternal.FeatureProgrammer_VisitGuardProps) *shimast.Node {
    // The recursion guard registers its allocator in the WeakMap as the
    // canonical output for a revisited input, so for a named class it must be a
    // prototype-bearing instance — otherwise Object.assign onto a plain {} drops
    // the prototype and `x instanceof Class` fails on the recursive arm. Mirror
    // ClassifyJoiner.Object's literal/named split (same *MetadataObjectType
    // pointer, so IsLiteral() agrees): Object.create(<Name>.prototype) for a
    // named class, {} for a literal/anonymous shape. The class is referenced by
    // bare identifier (lexical scope); cross-module support arrives with the
    // from/new Importer.Instance slice, which must update this allocator AND
    // ClassifyJoiner.Object together.
    var allocator *shimast.Node
    classRef := classRefOf(next.Object)
    if next.Object != nil && !next.Object.IsLiteral() && classRef != nil {
      allocator = f.NewCallExpression(
        f.NewIdentifier("Object.create"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Access(props.Context.Emit, classRef, "prototype"),
        }),
        shimast.NodeFlagsNone,
      )
    } else {
      // No usable runtime binding (an unbound anonymous class expression / a
      // same-file anonymous default export) → a plain {} allocator, like a literal.
      allocator = f.NewObjectLiteralExpression(f.NewNodeList(nil), false)
    }
    return nativeinternal.FeatureProgrammer.VisitGuardRebuildWith(next.Key, allocator, next.Body, props.Context.Emit)
  }
  config.Decoder = func(next nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
    // ROOT-ONLY from/new construction. Only the root decode carries
    // Explore.From=="top" (FeatureProgrammer.go:475); every nested decode
    // carries "object"/"array"/etc. Emitting here — never inside the shared
    // _yo<index> joiner — keeps a self-referential class field-copying at nested
    // positions while still constructing at the root.
    if next.Explore.From == "top" {
      // class-TYPE UNION: discriminate the input and construct the matched member
      // (the tail = the ordinary union decode lets non-class members pass through).
      if len(unionMembers) != 0 {
        // Every union member (class + non-class) is in the ladder, so the tail is
        // the no-match fallback: return the input unchanged. Decoding next.Metadata
        // here would walk the static class sides (their `from`/`prototype` members),
        // emitting a bundled-lib require and plainCloneAny — broken at runtime.
        return plainClassifyProgrammer_construct_union(props.Context, config, props.Functor, next.Input, next.Explore, unionMembers, next.Input, props.IsPrefix)
      }
      var st *plainClassifyProgrammer_strategy
      if len(next.Metadata.Objects) == 1 {
        st = strategies[next.Metadata.Objects[0].Type]
      }
      if st == nil {
        st = topStrategy
      }
      if st != nil {
        return plainClassifyProgrammer_construct(props.Context, config, props.Functor, next.Input, st)
      }
    }
    return plainClassifyProgrammer_decode(struct {
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
        Prefix:   props.Functor.IsPrefix(),
        Input:    next.Input,
        Metadata: next.Metadata,
        Explore:  plainClassifyProgrammer_checker_explore(next.Explore),
      })
    },
    Decoder: func(next nativeinternal.FeatureProgrammer_ObjectorDecoderProps) *shimast.Node {
      return plainClassifyProgrammer_decode_object(struct {
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
      return nativehelpers.ClassifyJoiner.Object(nativehelpers.ClassifyJoiner_ObjectProps{
        Input:    next.Input,
        Entries:  next.Entries,
        Object:   next.Object,
        ClassRef: classRefOf(next.Object),
        Emit:     props.Context.Emit,
      })
    },
    Unionizer: func(next nativeinternal.FeatureProgrammer_ObjectorUnionizerProps) *shimast.Node {
      return nativeiterate.Decode_union_object(nativeiterate.Decode_union_objectProps{
        Checker: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
          return nativeprogrammers.IsProgrammer.Decode_object(nativeprogrammers.IsProgrammer_DecodeObjectProps{
            Context: props.Context,
            Functor: props.Functor,
            Prefix:  props.Functor.IsPrefix(),
            Input:   v.Input,
            Object:  v.Object,
            Explore: plainClassifyProgrammer_feature_explore(v.Explore),
          })
        },
        Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
          return plainClassifyProgrammer_decode_object(struct {
            Functor *nativehelpers.FunctionProgrammer
            Input   *shimast.Node
            Object  *schemametadata.MetadataObjectType
            Explore nativeinternal.FeatureProgrammer_IExplore
          }{
            Functor: props.Functor,
            Input:   v.Input,
            Object:  v.Object,
            Explore: plainClassifyProgrammer_feature_explore(v.Explore),
          })
        },
        Success: func(exp *shimast.Node) *shimast.Node { return exp },
        Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
          return plainClassifyProgrammer_create_throw_error(plainClassifyProgrammer_throwProps{
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
      return plainClassifyProgrammer_create_throw_error(plainClassifyProgrammer_throwProps{
        Context:  props.Context,
        Functor:  props.Functor,
        Expected: next.Expected,
        Input:    next.Input,
      })
    },
  }
  config.Generator = nativeinternal.FeatureProgrammer_IConfig_IGenerator{
    Arrays: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
      return plainClassifyProgrammer_write_array_functions(struct {
        Context    nativecontext.ITypiaContext
        Config     nativeinternal.FeatureProgrammer_IConfig
        Functor    *nativehelpers.FunctionProgrammer
        Collection *schemametadata.MetadataCollection
      }{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection})
    },
    Tuples: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
      return plainClassifyProgrammer_write_tuple_functions(struct {
        Context    nativecontext.ITypiaContext
        Config     nativeinternal.FeatureProgrammer_IConfig
        Functor    *nativehelpers.FunctionProgrammer
        Collection *schemametadata.MetadataCollection
      }{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection})
    },
  }
  return config
}

// plainClassifyProgrammer_strategy is the construction chosen for a class-TYPE
// (typeof C) classify target: a static `from` factory or a single-argument
// `new`. Seed is the recursively-analyzed plain seed metadata (decoded from the
// input and passed to the factory/constructor); ClassRef is the value reference
// to C (bare identifier same-file, value import cross-module).
type plainClassifyProgrammer_strategy struct {
  Kind     string // "from" | "new"
  Seed     *schemametadata.MetadataSchema
  SeedType *shimchecker.Type
  ClassRef *shimast.Node
}

// plainClassifyProgrammer_options is the metadata-analysis option set shared by
// the field-copy shape analysis and the from/new seed analysis, so a seed is
// validated (e.g. WeakSet/WeakMap rejection) exactly like a property value.
func plainClassifyProgrammer_options() nativefactories.MetadataFactory_IOptions {
  return nativefactories.MetadataFactory_IOptions{
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
          output = append(output, "unable to classify WeakSet")
        } else if native.Name == "WeakMap" {
          output = append(output, "unable to classify WeakMap")
        }
      }
      return output
    },
  }
}

// plainClassifyProgrammer_initialize analyzes the classify target and, for a
// class-TYPE target, detects its construction strategy. For typeof C the
// analyzed shape is REDIRECTED to the instance type (the static side's apparent
// properties are static members, not the instance fields), keeping the
// field-copy fallback + assert/validate shape correct. Returns the metadata
// output and, when a from/new strategy is selected, the strategy (else nil).
func plainClassifyProgrammer_initialize(
  props nativeinternal.FeatureProgrammer_InitializerProps,
  callFile string,
  modulo *shimast.Node,
) (nativeinternal.FeatureProgrammer_InitializerOutput, *plainClassifyProgrammer_strategy, []plainClassifyProgrammer_member) {
  _ = modulo
  checker := props.Context.Checker
  static := props.Type

  // Constructor-nature gate: only a class/constructor TYPE (typeof C) — one that
  // is Function-like (has construct signatures, or is callable with a static
  // `from`) — gets the instance redirect and a from/new strategy. A plain
  // object / interface / instance does not qualify (even one with a data field
  // named `prototype` or a `from` member), matching ClassInstanceType's
  // `T extends Function`.
  ctorSigs := checker.GetSignaturesOfType(static, shimchecker.SignatureKindConstruct)
  fromSym := checker.GetPropertyOfType(static, "from")
  hasStrategy := plainClassifyProgrammer_constructor_nature(checker, static)

  analyzeT := static
  instanceT := static
  if hasStrategy {
    instanceT = shimchecker.Checker_getTypeOfPropertyOfType(checker, static, "prototype")
    if instanceT == nil && len(ctorSigs) > 0 {
      instanceT = checker.GetReturnTypeOfSignature(ctorSigs[len(ctorSigs)-1])
    }
    if instanceT == nil {
      instanceT = static
    }
    analyzeT = instanceT
  } else if static.IsUnion() {
    // A class-TYPE union: analyze the SEED union (what the input actually
    // carries: seedA | seedB | non-class members), NOT the static union — whose
    // members are the classes' static sides (`from`/`prototype`), which emit a
    // bundled-lib require and plainCloneAny that break the runtime module.
    analyzeT = plainClassifyProgrammer_validation_type(props.Context, static, callFile)
  }

  collection := schemametadata.NewMetadataCollection()

  // For a class-TYPE UNION (typeof A | typeof B) constructor_nature(union) is
  // false (no single class symbol / no common construct signature), so the
  // single strategy above is nil and the field-copy fallback would lose each
  // member's construction. Detect a per-member strategy instead; the root decode
  // emits a discriminated construction ladder over them. union_members analyzes
  // each member's seed / instance shape into `collection`, so it owns the shared
  // collection and every is-check object function it references is generated.
  var members []plainClassifyProgrammer_member
  if static.IsUnion() {
    members = plainClassifyProgrammer_union_members(props.Context, static, collection, callFile)
  }

  // Where the seed-union validation is analyzed. A construction union (members
  // present) has already registered each member seed in `collection` exactly
  // once via union_members; the seed-union validation goes to a THROWAWAY
  // collection so it only yields the root metadata / success — the construction
  // ladder owns the shared collection and never decodes this root metadata. A
  // second, structurally identical copy of each seed in the shared collection
  // would push its property-shape frequency to 2, which makes the
  // discrimination's is-check object function split into an `_io` -> `_ip`
  // helper pair — and the classify Addition emits the `_io` half but not the
  // `_ip` half (a `_ip<n>` ReferenceError at runtime). With a single copy every
  // shape stays at frequency 1, so the is-check stays a self-contained inline
  // object function. A non-construction target keeps the shared collection (the
  // ordinary decode reads this root metadata, so it must reference it).
  components := collection
  if len(members) != 0 {
    components = schemametadata.NewMetadataCollection()
  }
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:    checker,
    Options:    plainClassifyProgrammer_options(),
    Components: components,
    Type:       analyzeT,
  })
  if result.Success == false {
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   props.Functor.Method,
      Errors: plainClassifyProgrammer_errors(result.Errors),
    }))
  }

  var strategy *plainClassifyProgrammer_strategy
  if hasStrategy {
    strategy = plainClassifyProgrammer_detect_strategy(props.Context, static, instanceT, ctorSigs, fromSym, collection, callFile)
  }

  // ES #private fields are installed only by the constructor; field-copy
  // (Object.create + assign) cannot restore them, so a #private-bearing class is
  // usable ONLY when classify CONSTRUCTS it (from/new at the root). Reject any
  // #private-bearing class that classify FIELD-COPIES (a nested class, a
  // seed-nested class, a field-copy fallback root, or a field-copy union member)
  // — its prototype methods would throw 'Cannot read private member' at runtime.
  // The single from/new target's instance object is the one classify constructs.
  // A from/new target is soundly constructed only when it NEVER also appears at a
  // field-copied position. Construction is root-only, so a SELF-REFERENTIAL class
  // (Recursive: it reappears inside its own seed / nested fields, sharing the same
  // *MetadataObjectType pointer) IS field-copied at those nested positions — where
  // its #private slots are lost. Such a class must therefore NOT count as
  // constructed, so a #private + recursive class is rejected rather than emitting
  // a nested field-copy whose methods throw at runtime. (For a non-#private
  // recursive class this exclusion is inert — PrivateFields is false.)
  constructed := map[*schemametadata.MetadataObjectType]bool{}
  if strategy != nil && len(result.Data.Objects) == 1 {
    if root := result.Data.Objects[0].Type; !root.Recursive {
      constructed[root] = true
    }
  }
  for _, obj := range collection.Objects() {
    if obj.PrivateFields && !constructed[obj] {
      panic(nativecontext.TransformerError_from(struct {
        Code   string
        Errors []nativecontext.TransformerError_MetadataFactory_IError
      }{
        Code: props.Functor.Method,
        Errors: []nativecontext.TransformerError_MetadataFactory_IError{{
          Name:     obj.GetDisplayName(),
          Messages: []string{"plain.classify cannot field-copy class \"" + obj.GetDisplayName() + "\" because it has ES #private fields (installed only by its constructor); give it a single-argument constructor or static from() so it is constructed, or remove the #private fields"},
        }},
      }))
    }
  }

  if nativeinternal.FeatureProgrammer.CollectionRecursive(collection) {
    props.Functor.SetVisited(true)
  }
  return nativeinternal.FeatureProgrammer_InitializerOutput{
    Collection: collection,
    Metadata:   result.Data,
  }, strategy, members
}

// plainClassifyProgrammer_detect_strategy applies the precedence from -> new ->
// (nil = field-copy). FROM wins when a static `from` is callable with a single
// argument and returns the instance (looking through a `| null` failure arm);
// otherwise a single-argument PUBLIC constructor selects NEW. The seed type is
// the first parameter (or the rest element of a rest-only parameter), analyzed
// into the same collection so its runtime decode matches Classifiable<T>.
func plainClassifyProgrammer_detect_strategy(
  ctx nativecontext.ITypiaContext,
  static *shimchecker.Type,
  instanceT *shimchecker.Type,
  ctorSigs []*shimchecker.Signature,
  fromSym *shimast.Symbol,
  collection *schemametadata.MetadataCollection,
  callFile string,
) *plainClassifyProgrammer_strategy {
  checker := ctx.Checker
  classRef := plainClassifyProgrammer_class_ref(ctx, static, callFile)
  if classRef == nil {
    return nil
  }
  kind, seedT := plainClassifyProgrammer_choose_seed(checker, static, instanceT, ctorSigs, fromSym)
  if kind == "" {
    return nil
  }
  // Analyze the chosen seed into the SAME collection (so its runtime decode
  // matches Classifiable<T> and its helpers are emitted). If it cannot be
  // analyzed (e.g. a WeakSet seed), fall through to field-copy.
  r := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker:    checker,
    Options:    plainClassifyProgrammer_options(),
    Components: collection,
    Type:       seedT,
  })
  if r.Success == false {
    return nil
  }
  return &plainClassifyProgrammer_strategy{Kind: kind, Seed: r.Data, SeedType: seedT, ClassRef: classRef}
}

// plainClassifyProgrammer_choose_seed applies the construction precedence and
// gates EXACTLY as classify decodes, returning the chosen seed type with its
// kind ("from"/"new") or ("", nil) for field-copy. A static `from` wins when its
// LAST overload (TypeScript's `infer` resolves an overloaded signature to the
// last) is callable with a single meaningful argument, returns the instance
// (through a nullable failure arm), and has a non-any/unknown seed; otherwise the
// LAST single-argument PUBLIC construct signature selects `new`. The
// any/unknown-seed rejection mirrors ClassifiableSeedValue — a `static
// from(json: any)` collapses the factory arm and falls to field-copy.
func plainClassifyProgrammer_choose_seed(
  checker *shimchecker.Checker,
  static *shimchecker.Type,
  instanceT *shimchecker.Type,
  ctorSigs []*shimchecker.Signature,
  fromSym *shimast.Symbol,
) (string, *shimchecker.Type) {
  rejected := func(seedT *shimchecker.Type) bool {
    return seedT == nil ||
      seedT.Flags()&(shimchecker.TypeFlagsAny|shimchecker.TypeFlagsUnknown) != 0
  }
  if fromSym != nil && fromSym.ValueDeclaration != nil {
    fnT := checker.GetTypeOfSymbolAtLocation(fromSym, fromSym.ValueDeclaration)
    if sigs := checker.GetSignaturesOfType(fnT, shimchecker.SignatureKindCall); len(sigs) != 0 {
      sig := sigs[len(sigs)-1]
      if plainClassifyProgrammer_arity_ok(checker, sig) {
        nn := checker.GetNonNullableType(checker.GetReturnTypeOfSignature(sig))
        if nn != nil && checker.IsTypeAssignableTo(nn, instanceT) {
          if seedT := plainClassifyProgrammer_seed_type(checker, sig); !rejected(seedT) {
            return "from", seedT
          }
        }
      }
    }
  }
  if len(ctorSigs) != 0 {
    sig := ctorSigs[len(ctorSigs)-1]
    if plainClassifyProgrammer_ctor_public(static, sig) && plainClassifyProgrammer_arity_ok(checker, sig) {
      if seedT := plainClassifyProgrammer_seed_type(checker, sig); !rejected(seedT) {
        return "new", seedT
      }
    }
  }
  return "", nil
}

// plainClassifyProgrammer_is_abstract reports whether the class TYPE is abstract
// — its construct signature is un-`new`-able at runtime (`new C` throws "Cannot
// create an instance of an abstract class"). The `abstract` keyword sits on the
// CLASS declaration, not the constructor declaration, so it is read from the
// class symbol's declaration (the same node class_ref / emplace_metadata_object
// read for Default/Private). An abstract class therefore field-copies, exactly
// like a private-constructor class — Object.create(C.prototype) needs no `new`;
// a `static from` on it is still honored (the from arm is ungated on abstract).
func plainClassifyProgrammer_is_abstract(static *shimchecker.Type) bool {
  if static == nil {
    return false
  }
  sym := static.Symbol()
  if sym == nil || len(sym.Declarations) == 0 {
    return false
  }
  return sym.Declarations[0].ModifierFlags()&shimast.ModifierFlagsAbstract != 0
}

// plainClassifyProgrammer_ctor_public reports whether a construct signature is
// publicly newable — matching ClassifiableConstructor's `new` gate, which a
// private/protected constructor, or an abstract class, does not satisfy. A
// synthesized default constructor has no declaration and counts as public.
func plainClassifyProgrammer_ctor_public(static *shimchecker.Type, sig *shimchecker.Signature) bool {
  if plainClassifyProgrammer_is_abstract(static) {
    return false
  }
  decl := sig.Declaration()
  if decl == nil {
    return true
  }
  return decl.ModifierFlags()&(shimast.ModifierFlagsPrivate|shimast.ModifierFlagsProtected) == 0
}

// plainClassifyProgrammer_arity_ok reports whether a signature is callable with
// a single meaningful argument: at least one parameter and at most one REQUIRED
// argument (the type-level "single meaningful argument" rule). getMinArgumentCount
// is unexported upstream, hence the shim wrapper.
func plainClassifyProgrammer_arity_ok(checker *shimchecker.Checker, sig *shimchecker.Signature) bool {
  return shimchecker.Signature_parameterCount(sig) >= 1 &&
    shimchecker.Checker_getMinArgumentCount(checker, sig) <= 1
}

// plainClassifyProgrammer_seed_type returns the seed type of a single-argument
// signature: the rest ELEMENT for an array rest `(...xs: S[])`, the FIRST element
// for a tuple rest `(...xs: [X, Y?])` (rejected when a later tuple element is
// required), otherwise the first parameter's type. Matches ClassifiableSeed.
func plainClassifyProgrammer_seed_type(checker *shimchecker.Checker, sig *shimchecker.Signature) *shimchecker.Type {
  if sig.HasRestParameter() && len(sig.Parameters()) == 1 {
    // A rest parameter's declared type is either a plain array `S[]` (the seed is
    // the element S — GetRestTypeOfSignature handles it) or a TUPLE `[X, Y?]`. For
    // a tuple, GetRestTypeOfSignature returns `any` (getRestTypeOfTupleType is nil
    // with no trailing rest), which `rejected` would drop to field-copy — but
    // ClassifiableSeed reads a tuple via `[infer P, ...Rest]` and yields its FIRST
    // element P. Reproduce that so Go and the type pick the same strategy.
    restParamT := checker.GetTypeOfSymbol(sig.Parameters()[0])
    if restParamT != nil && shimchecker.IsTupleType(restParamT) {
      return plainClassifyProgrammer_tuple_seed(checker, restParamT)
    }
    return checker.GetRestTypeOfSignature(sig)
  }
  params := sig.Parameters()
  if len(params) == 0 {
    return nil
  }
  return checker.GetTypeOfSymbol(params[0])
}

// plainClassifyProgrammer_tuple_seed reproduces ClassifiableSeed's rule for a
// rest-tuple parameter `(...xs: [X, Y?])`: the seed is the FIRST element, EXCEPT
// the tuple is rejected (nil = field-copy) when it is empty or any element after
// index 0 is REQUIRED — then `[] extends Rest` fails and ClassifiableSeed is
// `never`. GetTypeArguments / TargetTupleType require an object reference; the
// IsTupleType caller guarantees that, but a recover degrades a surprise panic to
// field-copy (the same safe fallback as a failed seed analysis).
func plainClassifyProgrammer_tuple_seed(checker *shimchecker.Checker, restParamT *shimchecker.Type) (seed *shimchecker.Type) {
  defer func() {
    if recover() != nil {
      seed = nil
    }
  }()
  args := checker.GetTypeArguments(restParamT)
  if len(args) == 0 {
    return nil // `[]` -> ClassifiableSeed is never -> field-copy
  }
  flags := restParamT.TargetTupleType().ElementFlags()
  for i := 1; i < len(flags); i++ {
    if flags[i] == shimchecker.ElementFlagsRequired {
      return nil // a required tail element -> `[] extends Rest` false -> never
    }
  }
  return args[0] // first element is the seed (P in `[infer P, ...Rest]`)
}

// plainClassifyProgrammer_validation_type returns the type assertClassify /
// validateClassify must validate the INPUT against. For a class-TYPE target the
// input is NOT typeof C: it is the from/new SEED (validate the seed), or, when
// field-copy is selected, the instance shape. For an instance / plain type it
// is the type itself. Mirrors the detection in plainClassifyProgrammer_initialize.
// plainClassifyProgrammer_call_file resolves the absolute path of the classify
// call site (from the Modulo node) — used to decide a same-file vs cross-module
// class reference. "" when unresolvable.
func plainClassifyProgrammer_call_file(modulo *shimast.Node) string {
  if modulo == nil {
    return ""
  }
  if src := shimast.GetSourceFileOfNode(modulo); src != nil {
    if abs, err := filepath.Abs(src.FileName()); err == nil {
      return abs
    }
  }
  return ""
}

func plainClassifyProgrammer_validation_type(ctx nativecontext.ITypiaContext, static *shimchecker.Type, callFile string) *shimchecker.Type {
  checker := ctx.Checker
  // class-TYPE UNION: assert/validate must check the SEED union (seedA | seedB |
  // ...non-class members...), not the constructor union typeof A | typeof B —
  // else every valid seed is rejected. Distribute per member like classify does.
  if static != nil && static.IsUnion() {
    seeds := []*shimchecker.Type{}
    for _, member := range static.Types() {
      if !plainClassifyProgrammer_constructor_nature(checker, member) {
        seeds = append(seeds, member)
        continue
      }
      ctorSigs := checker.GetSignaturesOfType(member, shimchecker.SignatureKindConstruct)
      fromSym := checker.GetPropertyOfType(member, "from")
      instanceT := shimchecker.Checker_getTypeOfPropertyOfType(checker, member, "prototype")
      if instanceT == nil && len(ctorSigs) > 0 {
        instanceT = checker.GetReturnTypeOfSignature(ctorSigs[len(ctorSigs)-1])
      }
      if instanceT == nil {
        instanceT = member
      }
      // Use the SEED only when classify actually commits to from/new for this
      // member — the class value is locatable AND the seed metadata-analyzes —
      // mirroring detect_strategy; otherwise classify field-copies the instance
      // shape, so validate that instead.
      chosen := instanceT
      if kind, seedT := plainClassifyProgrammer_choose_seed(checker, member, instanceT, ctorSigs, fromSym); kind != "" {
        if plainClassifyProgrammer_class_ref(ctx, member, callFile) != nil {
          r := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
            Checker:    checker,
            Options:    plainClassifyProgrammer_options(),
            Components: schemametadata.NewMetadataCollection(),
            Type:       seedT,
          })
          if r.Success {
            chosen = seedT
          }
        }
      }
      seeds = append(seeds, chosen)
    }
    return checker.GetUnionType(seeds)
  }
  if plainClassifyProgrammer_constructor_nature(checker, static) == false {
    return static
  }
  ctorSigs := checker.GetSignaturesOfType(static, shimchecker.SignatureKindConstruct)
  fromSym := checker.GetPropertyOfType(static, "from")
  instanceT := shimchecker.Checker_getTypeOfPropertyOfType(checker, static, "prototype")
  if instanceT == nil && len(ctorSigs) > 0 {
    instanceT = checker.GetReturnTypeOfSignature(ctorSigs[len(ctorSigs)-1])
  }
  if instanceT == nil {
    instanceT = static
  }
  // Return the SEED only when classify actually commits to from/new — i.e. the
  // class value is locatable AND the seed metadata-analyzes — so assert/validate
  // check exactly what classify decodes/constructs (else the field-copy instance
  // shape).
  if kind, seedT := plainClassifyProgrammer_choose_seed(checker, static, instanceT, ctorSigs, fromSym); kind != "" {
    if plainClassifyProgrammer_class_ref(ctx, static, callFile) != nil {
      r := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
        Checker:    checker,
        Options:    plainClassifyProgrammer_options(),
        Components: schemametadata.NewMetadataCollection(),
        Type:       seedT,
      })
      if r.Success {
        return seedT
      }
    }
  }
  return instanceT
}

// plainClassifyProgrammer_constructor_nature reports whether `static` is a class
// / constructor TYPE (typeof C) — the gate for the instance redirect and the
// from/new strategy. It matches ClassInstanceType's `T extends Function`
// requirement: a real class always has at least one construct signature (public,
// private, or abstract), so a `from` member ALONE (on a plain object/interface
// that is not callable) does not qualify and is field-copied whole.
func plainClassifyProgrammer_constructor_nature(checker *shimchecker.Checker, static *shimchecker.Type) bool {
  if static == nil {
    return false
  }
  // a class TYPE (typeof C): its symbol is a class declaration. This holds even
  // for a PRIVATE-constructor class (whose construct signature may be filtered
  // by accessibility), so the static-factory arm still applies — Point.from.
  if sym := static.Symbol(); sym != nil && sym.Flags&shimast.SymbolFlagsClass != 0 {
    return true
  }
  // a constructor type without a class symbol (anonymous class, `new () => X`)
  if len(checker.GetSignaturesOfType(static, shimchecker.SignatureKindConstruct)) != 0 {
    return true
  }
  // a callable Function carrying a static `from` is still Function-like; a plain
  // object/interface with only a `from` member is NOT (so it is field-copied)
  return checker.GetPropertyOfType(static, "from") != nil &&
    len(checker.GetSignaturesOfType(static, shimchecker.SignatureKindCall)) != 0
}

// plainClassifyProgrammer_class_ref builds the VALUE reference to the class:
// a bare identifier when the class is in lexical scope at the call site
// (same file), or a value import (default/named) when it is declared in another
// module. Returns nil when the class symbol cannot be located.
func plainClassifyProgrammer_class_ref(ctx nativecontext.ITypiaContext, static *shimchecker.Type, callFile string) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, ctx.Emit)
  sym := static.Symbol()
  if sym == nil || len(sym.Declarations) == 0 {
    return nil
  }
  decl := sym.Declarations[0]
  // The runtime value name to construct against. The class symbol name is not
  // always a usable binding: a class declared inside a `namespace` binds as
  // `NS.Inner.C` (mirror the qualified name the field-copy path derives), and a
  // class EXPRESSION binds as its enclosing `const X` (the symbol name is the
  // inner / binder-internal name). An unresolvable class expression returns nil
  // so detect_strategy falls back to field-copy rather than emit `new __class`.
  var valueName string
  if decl.Kind == shimast.KindClassExpression {
    valueName = plainClassifyProgrammer_value_binding(decl)
    if valueName == "" {
      return nil
    }
  } else {
    valueName = plainClassifyProgrammer_qualified_name(decl.Parent, sym.Name)
  }
  src := shimast.GetSourceFileOfNode(decl)
  // `default` (an anonymous `export default class {}`) and an empty name are not
  // a usable same-file bare binding → return nil so detect_strategy falls to
  // field-copy (which then field-copies a plain {}). A cross-module default
  // export still resolves below through Importer.Default.
  usable := valueName != "" && valueName != "default"
  var bare *shimast.Node
  if usable {
    bare = f.NewIdentifier(valueName)
  }
  if src == nil {
    return bare
  }
  classFileAbs, err := filepath.Abs(src.FileName())
  if err != nil || callFile == "" || classFileAbs == callFile {
    return bare
  }
  rel, err := filepath.Rel(filepath.Dir(callFile), strings.TrimSuffix(classFileAbs, filepath.Ext(classFileAbs)))
  if err != nil {
    return bare
  }
  spec := filepath.ToSlash(rel)
  if !strings.HasPrefix(spec, ".") {
    spec = "./" + spec
  }
  if decl.ModifierFlags()&shimast.ModifierFlagsDefault != 0 ||
    plainClassifyProgrammer_is_default_export(ctx.Checker, sym, decl, src) {
    return ctx.Importer.Default(nativecontext.ImportProgrammer_IDefault{File: spec, Name: valueName, Type: false})
  }
  if !usable {
    return nil
  }
  return ctx.Importer.Instance(nativecontext.ImportProgrammer_IInstance{File: spec, Name: valueName})
}

// plainClassifyProgrammer_qualified_name walks the enclosing namespace
// ModuleBlocks of a class declaration and returns its lexically-qualified value
// name ("NS.Inner.C", or the bare name for a top-level class). Mirrors
// metadata_explore_symbol_name so the from/new construct reference matches the
// qualified MetadataObjectType.Name the field-copy path uses; both must agree or
// `typeof NS.C` constructs a bare `C` that is not in scope.
func plainClassifyProgrammer_qualified_name(node *shimast.Node, name string) string {
  if node != nil && shimast.IsModuleBlock(node) && node.Parent != nil && node.Parent.Parent != nil {
    parentName := ""
    if node.Parent.Name() != nil {
      parentName = strings.TrimSpace(node.Parent.Name().Text())
    }
    if parentName != "" {
      return plainClassifyProgrammer_qualified_name(node.Parent.Parent, parentName+"."+name)
    }
  }
  return name
}

// plainClassifyProgrammer_value_binding returns the enclosing `const X = class
// {...}` variable name for a class-expression declaration (walking past any
// parentheses), or "" when there is no variable binding.
func plainClassifyProgrammer_value_binding(decl *shimast.Node) string {
  node := decl.Parent
  for node != nil && node.Kind == shimast.KindParenthesizedExpression {
    node = node.Parent
  }
  if node == nil || node.Kind != shimast.KindVariableDeclaration || node.Name() == nil {
    return ""
  }
  return strings.TrimSpace(node.Name().Text())
}

// plainClassifyProgrammer_is_default_export reports whether the class `sym`
// (declared by `decl` in `src`) is the module's default export via a SEPARATE
// `export default C;` statement (no Default modifier on the declaration).
// Mirrors emplace_metadata_object_is_default_export so the field-copy path
// (obj.SourceDefault) and the from/new path agree.
func plainClassifyProgrammer_is_default_export(
  checker *shimchecker.Checker,
  sym *shimast.Symbol,
  decl *shimast.Node,
  src *shimast.SourceFile,
) bool {
  if checker == nil || sym == nil || src == nil || src.Statements == nil {
    return false
  }
  for _, stmt := range src.Statements.Nodes {
    if stmt == nil || stmt.Kind != shimast.KindExportAssignment {
      continue
    }
    ea := stmt.AsExportAssignment()
    if ea == nil || ea.IsExportEquals || ea.Expression == nil {
      continue
    }
    target := checker.GetSymbolAtLocation(ea.Expression)
    if target == nil {
      continue
    }
    if target == sym || (len(target.Declarations) != 0 && target.Declarations[0] == decl) {
      return true
    }
  }
  return false
}

// plainClassifyProgrammer_construct emits the root construction expression for a
// from/new strategy: the seed is decoded from the function input (reusing the
// classify decode), then wrapped in `C.from(seed) as any` / `new C(seed) as any`.
// The result is an EXPRESSION (never a bare Block — the printer rejects that);
// `as any` keeps the body type-consistent with the cosmetic typeof-C annotation.
func plainClassifyProgrammer_construct(
  ctx nativecontext.ITypiaContext,
  config nativeinternal.FeatureProgrammer_IConfig,
  functor *nativehelpers.FunctionProgrammer,
  input *shimast.Node,
  st *plainClassifyProgrammer_strategy,
) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, ctx.Emit)
  decoded := plainClassifyProgrammer_decode(struct {
    Context  nativecontext.ITypiaContext
    Config   nativeinternal.FeatureProgrammer_IConfig
    Functor  *nativehelpers.FunctionProgrammer
    Input    *shimast.Node
    Metadata *schemametadata.MetadataSchema
    Explore  nativeinternal.FeatureProgrammer_IExplore
  }{
    Context:  ctx,
    Config:   config,
    Functor:  functor,
    Input:    input,
    Metadata: st.Seed,
    Explore: nativeinternal.FeatureProgrammer_IExplore{
      Tracable: config.Path || config.Trace,
      Source:   "object",
      From:     "object",
      Postfix:  "\"\"",
    },
  })
  var call *shimast.Node
  if st.Kind == "from" {
    call = f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(ctx.Emit, st.ClassRef, "from"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{decoded}),
      shimast.NodeFlagsNone,
    )
  } else {
    call = f.NewNewExpression(st.ClassRef, nil, f.NewNodeList([]*shimast.Node{decoded}))
  }
  return f.NewAsExpression(call, nativefactories.TypeFactory.Keyword("any", ctx.Emit))
}

// plainClassifyProgrammer_member is one arm of a class-TYPE UNION target
// (typeof A | typeof B): the input shape used to discriminate the value at
// runtime (Seed) and how to build the matched class — Strategy non-nil runs
// from/new, nil field-copies the instance shape.
type plainClassifyProgrammer_member struct {
  Seed     *schemametadata.MetadataSchema
  Strategy *plainClassifyProgrammer_strategy
}

// plainClassifyProgrammer_union_members detects, per CLASS member of a union
// target, its construction strategy (from/new) or field-copy, plus the seed /
// instance-shape metadata used to discriminate the input. Non-class members
// (e.g. `number` in `typeof A | number`) are omitted — they fall through to the
// ordinary union-decode tail. Each member's seed/shape is analyzed into the
// shared collection so its decode helpers are emitted. Members keep declaration
// order; the runtime ladder is first-match-wins, matching how typia's is/validate
// resolve a structurally ambiguous union.
func plainClassifyProgrammer_union_members(
  ctx nativecontext.ITypiaContext,
  static *shimchecker.Type,
  collection *schemametadata.MetadataCollection,
  callFile string,
) []plainClassifyProgrammer_member {
  checker := ctx.Checker
  members := []plainClassifyProgrammer_member{}
  hasClass := false
  for _, member := range static.Types() {
    if !plainClassifyProgrammer_constructor_nature(checker, member) {
      // A non-class member (e.g. `number` in `typeof A | number`) is
      // discriminated and decoded on its OWN shape, so it joins the ladder
      // rather than relying on a tail that would decode the static class sides.
      // It only forms a construction union alongside a class member (hasClass).
      if r := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
        Checker:    checker,
        Options:    plainClassifyProgrammer_options(),
        Components: collection,
        Type:       member,
      }); r.Success {
        members = append(members, plainClassifyProgrammer_member{Seed: r.Data, Strategy: nil})
      }
      continue
    }
    hasClass = true
    ctorSigs := checker.GetSignaturesOfType(member, shimchecker.SignatureKindConstruct)
    fromSym := checker.GetPropertyOfType(member, "from")
    instanceT := shimchecker.Checker_getTypeOfPropertyOfType(checker, member, "prototype")
    if instanceT == nil && len(ctorSigs) > 0 {
      instanceT = checker.GetReturnTypeOfSignature(ctorSigs[len(ctorSigs)-1])
    }
    if instanceT == nil {
      instanceT = member
    }
    if st := plainClassifyProgrammer_detect_strategy(ctx, member, instanceT, ctorSigs, fromSym, collection, callFile); st != nil {
      members = append(members, plainClassifyProgrammer_member{Seed: st.Seed, Strategy: st})
      continue
    }
    // field-copy member: analyze its INSTANCE shape into the collection and
    // discriminate / reconstruct on that shape (not the static side).
    r := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
      Checker:    checker,
      Options:    plainClassifyProgrammer_options(),
      Components: collection,
      Type:       instanceT,
    })
    if r.Success {
      members = append(members, plainClassifyProgrammer_member{Seed: r.Data, Strategy: nil})
    }
  }
  // A pure non-class union (number | string) has no class to construct — let the
  // ordinary decode handle it, so the construction ladder never engages.
  if !hasClass {
    return nil
  }
  return members
}

// plainClassifyProgrammer_construct_union emits the root construction for a union
// of class types: a first-match ladder over the ordered members —
// `if (is<seedA>(input)) return A.from/new(...); if (is<seedB>(input)) return ...`
// — then a TAIL that runs the ordinary union decode, so a mixed `typeof A |
// number` lets the non-class members (42) pass through unchanged. The whole thing
// is an IIFE arrow (an EXPRESSION, never a bare Block).
func plainClassifyProgrammer_construct_union(
  ctx nativecontext.ITypiaContext,
  config nativeinternal.FeatureProgrammer_IConfig,
  functor *nativehelpers.FunctionProgrammer,
  input *shimast.Node,
  explore nativeinternal.FeatureProgrammer_IExplore,
  members []plainClassifyProgrammer_member,
  tail *shimast.Node,
  isPrefix string,
) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, ctx.Emit)
  statements := []*shimast.Node{}
  for _, member := range members {
    // isPrefix is "_i" (unvalidated) or "_yi" (validated). The validated ladder
    // emits its OWN _yio<i>/_yiu<i> from the classify collection so these checks
    // line up with the Addition's helpers, not the assert side's reordered _io<i>.
    isCheck := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
      Context:  ctx,
      Functor:  functor,
      Metadata: member.Seed,
      Input:    input,
      Prefix:   isPrefix,
      Explore: nativeinternal.CheckerProgrammer_IExplore{
        Tracable: explore.Tracable,
        Source:   explore.Source,
        From:     "object",
        Postfix:  explore.Postfix,
        Start:    explore.Start,
      },
    })
    var value *shimast.Node
    if member.Strategy != nil {
      value = plainClassifyProgrammer_construct(ctx, config, functor, input, member.Strategy)
    } else {
      value = plainClassifyProgrammer_decode(struct {
        Context  nativecontext.ITypiaContext
        Config   nativeinternal.FeatureProgrammer_IConfig
        Functor  *nativehelpers.FunctionProgrammer
        Input    *shimast.Node
        Metadata *schemametadata.MetadataSchema
        Explore  nativeinternal.FeatureProgrammer_IExplore
      }{
        Context:  ctx,
        Config:   config,
        Functor:  functor,
        Input:    input,
        Metadata: member.Seed,
        Explore: nativeinternal.FeatureProgrammer_IExplore{
          Tracable: explore.Tracable,
          Source:   "object",
          From:     "object",
          Postfix:  explore.Postfix,
          Start:    explore.Start,
        },
      })
    }
    statements = append(statements, f.NewIfStatement(isCheck, f.NewReturnStatement(value), nil))
  }
  statements = append(statements, f.NewReturnStatement(tail))
  return nativefactories.ExpressionFactory.SelfCall(ctx.Emit, f.NewBlock(f.NewNodeList(statements), true))
}

type plainClassifyProgrammer_throwProps struct {
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Expected string
  Input    *shimast.Node
}

func plainClassifyProgrammer_create_throw_error(props plainClassifyProgrammer_throwProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, props.Context.Emit)
  return f.NewExpressionStatement(
    f.NewCallExpression(
      plainClassifyProgrammer_internal(props.Context, "throwTypeGuardError"),
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

func plainClassifyProgrammer_is_instance(metadata *schemametadata.MetadataSchema) bool {
  if len(metadata.Objects) != 0 ||
    len(metadata.Arrays) != 0 ||
    len(metadata.Tuples) != 0 ||
    len(metadata.Sets) != 0 ||
    len(metadata.Maps) != 0 ||
    len(metadata.Natives) != 0 {
    return true
  }
  return metadata.Rest != nil && plainClassifyProgrammer_is_instance(metadata.Rest)
}

func plainClassifyProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, context.Emit)
  return f.NewIdentifier(name)
}

func plainClassifyProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  if str, ok := props.Name.(string); ok {
    f := nativecontext.EmitFactoryOf(plainClassifyProgrammer_factory, context.Emit)
    return f.NewTypeReferenceNode(f.NewIdentifier(str), f.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}

func plainClassifyProgrammer_type_name(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) string {
  if name != nil {
    return *name
  }
  return nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
    Checker: context.Checker,
    Type:    typ,
  })
}

func plainClassifyProgrammer_method_text(modulo *shimast.Node) string {
  return nativehelpers.ModuloMethodText(modulo)
}

func plainClassifyProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
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

func plainClassifyProgrammer_feature_explore(input any) nativeinternal.FeatureProgrammer_IExplore {
  switch v := input.(type) {
  case nativeinternal.FeatureProgrammer_IExplore:
    return v
  case *nativeinternal.FeatureProgrammer_IExplore:
    return *v
  default:
    return nativeinternal.FeatureProgrammer_IExplore{}
  }
}

func plainClassifyProgrammer_checker_explore(input any) nativeinternal.CheckerProgrammer_IExplore {
  v := plainClassifyProgrammer_feature_explore(input)
  return nativeinternal.CheckerProgrammer_IExplore{
    Tracable: v.Tracable,
    Source:   v.Source,
    From:     v.From,
    Postfix:  v.Postfix,
    Start:    v.Start,
  }
}

func plainClassifyProgrammer_checker_explore_with_postfix(input any, postfix string) nativeinternal.CheckerProgrammer_IExplore {
  v := plainClassifyProgrammer_checker_explore(input)
  v.Postfix = v.Postfix + postfix
  return v
}

func plainClassifyProgrammer_explore_with(explore nativeinternal.FeatureProgrammer_IExplore, source string, from string) nativeinternal.FeatureProgrammer_IExplore {
  explore.Source = source
  explore.From = from
  return explore
}

func plainClassifyProgrammer_some_arrays(values []*schemametadata.MetadataArray, pred func(*schemametadata.MetadataArray) bool) bool {
  for _, value := range values {
    if pred(value) {
      return true
    }
  }
  return false
}

func plainClassifyProgrammer_some_tuples(values []*schemametadata.MetadataTuple, pred func(*schemametadata.MetadataTuple) bool) bool {
  for _, value := range values {
    if pred(value) {
      return true
    }
  }
  return false
}

func plainClassifyProgrammer_every_schema(values []*schemametadata.MetadataSchema, pred func(*schemametadata.MetadataSchema) bool) bool {
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

func plainClassifyProgrammer_join_names[T any](values []T, name func(T) string) string {
  names := make([]string, 0, len(values))
  for _, value := range values {
    names = append(names, name(value))
  }
  return strings.Join(names, " | ")
}
