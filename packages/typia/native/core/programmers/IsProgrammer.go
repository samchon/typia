package programmers

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type isProgrammerNamespace struct{}

var IsProgrammer = isProgrammerNamespace{}

// IsProgrammer_CONFIG_IOptions selects the generator's variants: Numeric is
// whether number leaves are guarded against NaN, Finite is whether number leaves
// are guarded against NaN and the infinities, Undefined is whether undefined
// property values are accepted and Object is the object check.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 4 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type IsProgrammer_CONFIG_IOptions struct {
  Numeric   *bool
  Finite    *bool
  Undefined *bool
  Object    func(props IsProgrammer_CONFIG_IOptions_ObjectProps) *shimast.Node
}

// IsProgrammer_CONFIG_IOptions_ObjectProps is the input of the object check
// hook: the checked expression, the property checks and the object type.
//
// @evidence contracts/common.md#principled-implementation A custom object check receives the already composed property checks together with the input and the object type, so it need not recompute them.
// @evidence contracts/common.md#clear-and-simple-design A three-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IsProgrammer_CONFIG_IOptions_ObjectProps struct {
  Input   *shimast.Expression
  Entries []nativehelpers.IExpressionEntry
  Object  *nativemetadata.MetadataObjectType
}

// IsProgrammer_IConfig selects the generator's variants: Equals is the strict
// form that also rejects properties the type does not declare and Depth is the
// remaining nesting depth, where nil means unlimited and a spent budget accepts
// composites as a bare object.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 2 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type IsProgrammer_IConfig struct {
  Equals bool
  Depth  *int
}

// IsProgrammer_IProps is the input of Write for the is generator: Context (the
// transform context), Modulo (the call's callee expression), Type (the type to
// generate for), Name (an optional type name) and Config (the configuration).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the type to generate for, an optional type name and the configuration, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IsProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *nativechecker.Type
  Name    *string
  Config  IsProgrammer_IConfig
}

// IsProgrammer_DecomposeProps is the input of Decompose for the is generator:
// Context (the transform context), Functor (the collector of the helper
// functions that the generator emits), Config (the configuration), Type (the
// type to generate for) and Name (an optional type name).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the collector of the helper functions that the generator emits, the configuration, the type to generate for and an optional type name, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IsProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Config  IsProgrammer_IConfig
  Type    *nativechecker.Type
  Name    *string
}

// IsProgrammer_WriteFunctionStatementsProps is the input of
// Write_function_statements: the transform context, the Functor that collects
// helpers and the Collection whose objects get is-helpers. Prefix selects the
// helper namespace.
//
// @evidence contracts/common.md#principled-implementation The helpers are written from the caller's own collection under a caller-chosen prefix, so two collections never collide on indexes.
// @evidence contracts/common.md#clear-and-simple-design A four-field record with a documented Prefix.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field and the field comment explains the prefix.
type IsProgrammer_WriteFunctionStatementsProps struct {
  Context    nativecontext.ITypiaContext
  Functor    *nativehelpers.FunctionProgrammer
  Collection *nativemetadata.MetadataCollection
  // Prefix overrides the is-helper namespace ("" => the default "_i"). Use it
  // when a caller emits branch-selection helpers from its own metadata
  // collection, disjoint from an outer assert/validate/is collection that may
  // reorder or deduplicate helper indexes. For example, plain.classify uses
  // "_yi" and validated json.stringify uses "_si".
  Prefix string
}

// IsProgrammer_DecodeProps is the input of Decode: the transform context, the
// Functor, the Metadata and Input to check, the Explore state and the helper
// Prefix.
//
// @evidence contracts/common.md#principled-implementation A union ladder is decoded against the same metadata and input it was written for, with the caller's helper namespace.
// @evidence contracts/common.md#clear-and-simple-design A six-field record with a documented Prefix.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field and the field comment explains the prefix.
type IsProgrammer_DecodeProps struct {
  Context  nativecontext.ITypiaContext
  Functor  *nativehelpers.FunctionProgrammer
  Metadata *nativemetadata.MetadataSchema
  Input    *shimast.Expression
  Explore  nativeinternal.CheckerProgrammer_IExplore
  // Prefix overrides the is-helper namespace ("" => the default "_i"). See
  // IsProgrammer_WriteFunctionStatementsProps.Prefix; callers must pass the
  // same prefix to Decode and Write_function_statements so helper references
  // line up with the helpers emitted from the caller's own collection.
  Prefix string
}

// IsProgrammer_DecodeObjectProps is the input of Decode_object: the transform
// context, the Functor, the Object type and Input to check, the Explore state
// and the helper Prefix.
//
// @evidence contracts/common.md#principled-implementation Nested object discrimination uses the caller's helper namespace as the surrounding union ladder does.
// @evidence contracts/common.md#clear-and-simple-design A six-field record with a documented Prefix.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field and the field comment explains the prefix.
type IsProgrammer_DecodeObjectProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Object  *nativemetadata.MetadataObjectType
  Input   *shimast.Expression
  Explore nativeinternal.FeatureProgrammer_IExplore
  // Prefix overrides the is-helper namespace ("" => the default "_i"). See
  // IsProgrammer_DecodeProps.Prefix; nested object discriminations must use the
  // same caller-owned helper namespace as the surrounding union ladder.
  Prefix string
}

var isProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (isProgrammerNamespace) Configure(props struct {
  Options *IsProgrammer_CONFIG_IOptions
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.CheckerProgrammer_IConfig {
  f := nativecontext.EmitFactoryOf(isProgrammer_factory, props.Context.Emit)
  options := props.Options
  return nativeinternal.CheckerProgrammer_IConfig{
    Prefix:        "_i",
    Equals:        options != nil && options.Object != nil,
    Trace:         false,
    Path:          false,
    Numeric:       isProgrammer_option_numeric(options),
    ObjectParents: options == nil || options.Object == nil,
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
          rows = append(rows, isProgrammer_reduce(cols, shimast.KindAmpersandAmpersandToken, f.NewKeywordExpression(shimast.KindTrueKeyword), props.Context.Emit))
        }
        expressions = append(expressions, isProgrammer_reduce(rows, shimast.KindBarBarToken, f.NewKeywordExpression(shimast.KindFalseKeyword), props.Context.Emit))
      }
      return isProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, f.NewKeywordExpression(shimast.KindTrueKeyword), props.Context.Emit)
    },
    Combiner: func(next nativeinternal.CheckerProgrammer_CombinerProps) *shimast.Node {
      initial := f.NewKeywordExpression(shimast.KindFalseKeyword)
      operator := shimast.KindBarBarToken
      if next.Logic == "and" {
        initial = f.NewKeywordExpression(shimast.KindTrueKeyword)
        operator = shimast.KindAmpersandAmpersandToken
      }
      expressions := make([]*shimast.Node, 0, len(next.Binaries))
      for _, binary := range next.Binaries {
        expressions = append(expressions, binary.Expression)
      }
      return isProgrammer_reduce(expressions, operator, initial, props.Context.Emit)
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
              return isProgrammer_binary(a, shimast.KindAmpersandAmpersandToken, b, props.Context.Emit)
            },
            Positive: f.NewKeywordExpression(shimast.KindTrueKeyword),
            Superfluous: func(value *shimast.Expression, description *shimast.Expression) *shimast.Node {
              return f.NewKeywordExpression(shimast.KindFalseKeyword)
            },
          },
          Context: props.Context,
          Entries: v.Entries,
          Input:   v.Input,
        })
      },
      Array: func(v nativeinternal.CheckerProgrammer_JoinerArrayProps) *shimast.Node {
        return f.NewCallExpression(
          nativefactories.IdentifierFactory.Access(props.Context.Emit, v.Input, "every"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{v.Arrow}),
          shimast.NodeFlagsNone,
        )
      },
      Failure: func(nativeinternal.CheckerProgrammer_JoinerFailureProps) *shimast.Node {
        return f.NewKeywordExpression(shimast.KindFalseKeyword)
      },
    },
    Success: f.NewKeywordExpression(shimast.KindTrueKeyword),
  }
}

func (isProgrammerNamespace) Decompose(props IsProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(isProgrammer_factory, props.Context.Emit)
  options := &IsProgrammer_CONFIG_IOptions{
    Numeric: props.Context.Options.Numeric,
    Finite:  props.Context.Options.Finite,
    Object: func(v IsProgrammer_CONFIG_IOptions_ObjectProps) *shimast.Node {
      return nativeiterate.Check_object(nativeiterate.Check_objectProps{
        Config: nativeiterate.Check_object_IConfig{
          Equals:    props.Config.Equals,
          Undefined: nativehelpers.OptionPredicator.Undefined(props.Context.Options),
          Assert:    true,
          Reduce: func(a *shimast.Expression, b *shimast.Expression) *shimast.Node {
            return isProgrammer_binary(a, shimast.KindAmpersandAmpersandToken, b, props.Context.Emit)
          },
          Positive: f.NewKeywordExpression(shimast.KindTrueKeyword),
          Superfluous: func(value *shimast.Expression, description *shimast.Expression) *shimast.Node {
            return f.NewKeywordExpression(shimast.KindFalseKeyword)
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
  config.ObjectParents = props.Config.Equals == false
  config.Depth = props.Config.Depth
  if config.Depth != nil {
    config.ObjectParents = false
  }

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

func (isProgrammerNamespace) Write(props IsProgrammer_IProps) *shimast.Node {
  method := nativehelpers.ModuloMethodText(props.Modulo)
  functor := nativehelpers.NewFunctionProgrammer(method, props.Context.Emit)
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
  if props.Prefix != "" {
    config.Prefix = props.Prefix
  }
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
  config := IsProgrammer.Configure(struct {
    Options *IsProgrammer_CONFIG_IOptions
    Context nativecontext.ITypiaContext
    Functor *nativehelpers.FunctionProgrammer
  }{Options: nil, Context: props.Context, Functor: props.Functor})
  if props.Prefix != "" {
    config.Prefix = props.Prefix
  }
  return nativeinternal.CheckerProgrammer.Decode(nativeinternal.CheckerProgrammer_DecodeProps{
    Context:  props.Context,
    Config:   config,
    Functor:  props.Functor,
    Metadata: props.Metadata,
    Input:    props.Input,
    Explore:  props.Explore,
  })
}

func (isProgrammerNamespace) Decode_object(props IsProgrammer_DecodeObjectProps) *shimast.Node {
  config := IsProgrammer.Configure(struct {
    Options *IsProgrammer_CONFIG_IOptions
    Context nativecontext.ITypiaContext
    Functor *nativehelpers.FunctionProgrammer
  }{Options: nil, Context: props.Context, Functor: props.Functor})
  if props.Prefix != "" {
    config.Prefix = props.Prefix
  }
  return nativeinternal.CheckerProgrammer.Decode_object(nativeinternal.CheckerProgrammer_DecodeObjectProps{
    Config:  config,
    Context: props.Context,
    Functor: props.Functor,
    Object:  props.Object,
    Input:   props.Input,
    Explore: props.Explore,
  })
}

func (isProgrammerNamespace) Decode_to_json(props struct {
  Input     *shimast.Expression
  CheckNull bool
}, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(isProgrammer_factory, emit...)
  var ec *shimprinter.EmitContext
  if len(emit) != 0 {
    ec = emit[0]
  }
  return isProgrammer_binary(
    nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
      CheckArray: false,
      CheckNull:  props.CheckNull,
      Input:      props.Input,
    }),
    shimast.KindAmpersandAmpersandToken,
    isProgrammer_binary(
      f.NewStringLiteral("function", shimast.TokenFlagsNone),
      shimast.KindEqualsEqualsEqualsToken,
      nativefactories.ValueFactory.TYPEOF(nativefactories.IdentifierFactory.Access(ec, props.Input, "toJSON")),
      ec,
    ),
    ec,
  )
}

func (isProgrammerNamespace) Decode_functional(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(isProgrammer_factory, emit...)
  var ec *shimprinter.EmitContext
  if len(emit) != 0 {
    ec = emit[0]
  }
  return isProgrammer_binary(
    f.NewStringLiteral("function", shimast.TokenFlagsNone),
    shimast.KindEqualsEqualsEqualsToken,
    nativefactories.ValueFactory.TYPEOF(input),
    ec,
  )
}

func isProgrammer_reduce(expressions []*shimast.Node, operator shimast.Kind, initial *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Node {
  if len(expressions) == 0 {
    return initial
  }
  output := expressions[0]
  for _, expr := range expressions[1:] {
    output = isProgrammer_binary(output, operator, expr, emit)
  }
  return output
}

func isProgrammer_binary(left *shimast.Expression, operator shimast.Kind, right *shimast.Expression, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(isProgrammer_factory, emit)
  return f.NewBinaryExpression(
    nil,
    left,
    nil,
    f.NewToken(operator),
    right,
  )
}

// isProgrammer_option_numeric reports whether the number leaf gate must be
// emitted at all. It opens on `finite` as well as `numeric` so that `finite:true`
// alone rejects NaN and Infinity, matching how assert/validate open the same gate
// via OptionPredicator.Numeric (which is likewise finite || numeric) and the
// documented independence of the two flags (samchon/typia#2196). The gate only
// decides whether check_number emits a guard; check_number's own inner selection
// then picks Number.isFinite for `finite` or !Number.isNaN for `numeric`.
func isProgrammer_option_numeric(options *IsProgrammer_CONFIG_IOptions) bool {
  if options == nil {
    return false
  }
  finite := options.Finite != nil && *options.Finite
  numeric := options.Numeric != nil && *options.Numeric
  return finite || numeric
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
