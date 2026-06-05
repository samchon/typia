package programmers

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
)

type validateProgrammerNamespace struct{}

var ValidateProgrammer = validateProgrammerNamespace{}

type ValidateProgrammer_IConfig struct {
  Equals         bool
  StandardSchema bool
}

type ValidateProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *nativechecker.Type
  Name    *string
  Init    *shimast.Node
  Config  ValidateProgrammer_IConfig
}

type ValidateProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Config  ValidateProgrammer_IConfig
  Type    *nativechecker.Type
  Name    *string
}

var validateProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (validateProgrammerNamespace) Decompose(props ValidateProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(validateProgrammer_factory, props.Context.Emit)
  is := IsProgrammer.Decompose(IsProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Config:  IsProgrammer_IConfig{Equals: props.Config.Equals},
    Type:    props.Type,
    Name:    props.Name,
  })
  composed := nativeinternal.CheckerProgrammer.Compose(nativeinternal.CheckerProgrammer_ComposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
    Config: nativeinternal.CheckerProgrammer_IConfig{
      Prefix:  "_v",
      Path:    true,
      Trace:   true,
      Numeric: nativehelpers.OptionPredicator.Numeric(props.Context.Options),
      Equals:  props.Config.Equals,
      Atomist: validateProgrammer_atomist(props),
      Combiner: validateProgrammer_combine(struct {
        Config  ValidateProgrammer_IConfig
        Context nativecontext.ITypiaContext
        Functor *nativehelpers.FunctionProgrammer
      }{Config: props.Config, Context: props.Context, Functor: props.Functor}),
      Joiner:  validateProgrammer_joiner(props),
      Success: f.NewKeywordExpression(shimast.KindTrueKeyword),
    },
  })

  typ := validateProgrammer_type_reference(props.Context, props.Type, props.Name)
  arrow := f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
    }),
    validateProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
      File:      "typia",
      Name:      "IValidation",
      Arguments: []*shimast.TypeNode{typ},
    }),
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewBlock(f.NewNodeList([]*shimast.Node{
      f.NewIfStatement(
        validateProgrammer_equal(
          f.NewKeywordExpression(shimast.KindFalseKeyword),
          f.NewCallExpression(
            f.NewIdentifier("__is"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        ),
        f.NewBlock(f.NewNodeList([]*shimast.Node{
          f.NewExpressionStatement(f.NewBinaryExpression(nil, f.NewIdentifier("errors"), nil, f.NewToken(shimast.KindEqualsToken), f.NewArrayLiteralExpression(f.NewNodeList(nil), false))),
          f.NewExpressionStatement(f.NewBinaryExpression(
            nil,
            f.NewIdentifier("_report"),
            nil,
            f.NewToken(shimast.KindEqualsToken),
            f.NewCallExpression(
              f.NewAsExpression(validateProgrammer_internal(props.Context, "validateReport"), nativefactories.TypeFactory.Keyword("any", props.Context.Emit)),
              nil,
              f.NewNodeList(nil),
              f.NewNodeList([]*shimast.Node{f.NewIdentifier("errors")}),
              shimast.NodeFlagsNone,
            ),
          )),
          f.NewExpressionStatement(f.NewCallExpression(
            f.NewArrowFunction(nil, nil, f.NewNodeList(composed.Parameters), nil, nil, f.NewToken(shimast.KindEqualsGreaterThanToken), composed.Body),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              f.NewIdentifier("input"),
              f.NewStringLiteral("$input", shimast.TokenFlagsNone),
              f.NewKeywordExpression(shimast.KindTrueKeyword),
            }),
            shimast.NodeFlagsNone,
          )),
          nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
            Name: "success",
            Value: validateProgrammer_equal(
              nativefactories.ExpressionFactory.Number(0, props.Context.Emit),
              f.NewIdentifier("errors.length"),
            ),
          }, props.Context.Emit),
          f.NewReturnStatement(f.NewAsExpression(validateProgrammer_create_output(), nativefactories.TypeFactory.Keyword("any", props.Context.Emit))),
        }), true),
        nil,
      ),
      f.NewReturnStatement(f.NewAsExpression(
        f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
          validateProgrammer_property("success", f.NewKeywordExpression(shimast.KindTrueKeyword)),
          validateProgrammer_property("data", f.NewIdentifier("input")),
        }), true),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
      )),
    }), true),
  )

  functions := map[string]*shimast.Node{}
  for key, value := range is.Functions {
    functions[key] = value
  }
  for key, value := range composed.Functions {
    functions[key] = value
  }
  statements := []*shimast.Node{}
  statements = append(statements, is.Statements...)
  statements = append(statements, composed.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}, props.Context.Emit),
    nativefactories.StatementFactory.Mut(nativefactories.StatementFactory_MutProps{Name: "errors"}, props.Context.Emit),
    nativefactories.StatementFactory.Mut(nativefactories.StatementFactory_MutProps{Name: "_report"}, props.Context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  functions,
    Statements: statements,
    Arrow:      arrow,
  }
}

func (validateProgrammerNamespace) Write(props ValidateProgrammer_IProps) *shimast.Node {
  method := nativehelpers.ModuloMethodText(props.Modulo)
  functor := nativehelpers.NewFunctionProgrammer(method, props.Context.Emit)
  result := ValidateProgrammer.Decompose(ValidateProgrammer_DecomposeProps{
    Config:  props.Config,
    Context: props.Context,
    Modulo:  props.Modulo,
    Functor: functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  var wrapper func(arrow *shimast.Node) *shimast.Node
  if props.Config.StandardSchema {
    f := nativecontext.EmitFactoryOf(validateProgrammer_factory, props.Context.Emit)
    wrapper = func(arrow *shimast.Node) *shimast.Node {
      return f.NewCallExpression(validateProgrammer_internal(props.Context, "createStandardSchema"), nil, nil, f.NewNodeList([]*shimast.Node{arrow}), shimast.NodeFlagsNone)
    }
  }
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:        props.Modulo,
    Functor:       functor,
    Result:        result,
    ReturnWrapper: wrapper,
  })
}

func validateProgrammer_atomist(props ValidateProgrammer_DecomposeProps) func(next nativeinternal.CheckerProgrammer_AtomistProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(validateProgrammer_factory, props.Context.Emit)
  return func(next nativeinternal.CheckerProgrammer_AtomistProps) *shimast.Node {
    expressions := []*shimast.Node{}
    if next.Entry.Expression != nil {
      expressions = append(expressions, next.Entry.Expression)
    }
    if len(next.Entry.Conditions) != 0 {
      exceptionable := validateProgrammer_exceptionable(next.Explore)
      path := validateProgrammer_path(next.Explore)
      if len(next.Entry.Conditions) == 1 {
        for _, cond := range next.Entry.Conditions[0] {
          expressions = append(expressions, validateProgrammer_or(
            cond.Expression,
            validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{Exceptionable: exceptionable, Path: path, Expected: cond.Expected, Value: next.Input}),
          ))
        }
      } else {
        rows := []*shimast.Node{}
        for _, set := range next.Entry.Conditions {
          cols := []*shimast.Node{}
          for _, s := range set {
            cols = append(cols, s.Expression)
          }
          rows = append(rows, validateProgrammer_reduce(cols, shimast.KindAmpersandAmpersandToken, f.NewKeywordExpression(shimast.KindTrueKeyword)))
        }
        expressions = append(expressions, validateProgrammer_or(
          validateProgrammer_reduce(rows, shimast.KindBarBarToken, f.NewKeywordExpression(shimast.KindFalseKeyword)),
          validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{Exceptionable: exceptionable, Path: path, Expected: next.Entry.Expected, Value: next.Input}),
        ))
      }
    }
    return validateProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, f.NewKeywordExpression(shimast.KindTrueKeyword))
  }
}

func validateProgrammer_combine(props struct {
  Config  ValidateProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.CheckerProgrammer_IConfig_Combiner {
  f := nativecontext.EmitFactoryOf(validateProgrammer_factory, props.Context.Emit)
  return func(next nativeinternal.CheckerProgrammer_CombinerProps) *shimast.Node {
    if next.Explore.Tracable == false {
      options := &IsProgrammer_CONFIG_IOptions{
        Numeric: validateProgrammer_bool_ptr(true),
        Object: func(v IsProgrammer_CONFIG_IOptions_ObjectProps) *shimast.Node {
          return validateProgrammer_validate_object(validateProgrammer_validateObjectProps{Context: props.Context, Functor: props.Functor, Config: props.Config, Entries: v.Entries, Input: v.Input})
        },
      }
      return IsProgrammer.Configure(struct {
        Options *IsProgrammer_CONFIG_IOptions
        Context nativecontext.ITypiaContext
        Functor *nativehelpers.FunctionProgrammer
      }{Options: options, Context: props.Context, Functor: props.Functor}).Combiner(next)
    }
    path := validateProgrammer_path(next.Explore)
    exceptionable := validateProgrammer_exceptionable(next.Explore)
    if next.Logic == "and" {
      expressions := []*shimast.Node{}
      for _, binary := range next.Binaries {
        if binary.Combined {
          expressions = append(expressions, binary.Expression)
        } else {
          expressions = append(expressions, validateProgrammer_or(binary.Expression, validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{Exceptionable: exceptionable, Path: path, Expected: next.Expected, Value: next.Input})))
        }
      }
      return validateProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, f.NewKeywordExpression(shimast.KindTrueKeyword))
    }
    expressions := []*shimast.Node{}
    for _, binary := range next.Binaries {
      expressions = append(expressions, binary.Expression)
    }
    return validateProgrammer_or(
      validateProgrammer_reduce(expressions, shimast.KindBarBarToken, f.NewKeywordExpression(shimast.KindFalseKeyword)),
      validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{Exceptionable: exceptionable, Path: path, Expected: next.Expected, Value: next.Input}),
    )
  }
}

type validateProgrammer_validateObjectProps struct {
  Config  ValidateProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Entries []nativehelpers.IExpressionEntry
  Input   *shimast.Expression
}

func validateProgrammer_validate_object(props validateProgrammer_validateObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(validateProgrammer_factory, props.Context.Emit)
  return nativeiterate.Check_object(nativeiterate.Check_objectProps{
    Config: nativeiterate.Check_object_IConfig{
      Equals:    props.Config.Equals,
      Undefined: true,
      Assert:    false,
      Reduce: func(a *shimast.Expression, b *shimast.Expression) *shimast.Node {
        return validateProgrammer_binary(a, shimast.KindAmpersandAmpersandToken, b)
      },
      Positive: f.NewKeywordExpression(shimast.KindTrueKeyword),
      Superfluous: func(input *shimast.Expression, description *shimast.Expression) *shimast.Node {
        return validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{
          Path: validateProgrammer_binary(
            f.NewIdentifier("_path"),
            shimast.KindPlusToken,
            f.NewCallExpression(validateProgrammer_internal(props.Context, "accessExpressionAsString"), nil, nil, f.NewNodeList([]*shimast.Node{f.NewIdentifier("key")}), shimast.NodeFlagsNone),
          ),
          Expected:    "undefined",
          Value:       input,
          Description: description,
        })
      },
      Halt: func(expr *shimast.Expression) *shimast.Node {
        return validateProgrammer_or(validateProgrammer_equal(f.NewKeywordExpression(shimast.KindFalseKeyword), f.NewIdentifier("_exceptionable")), expr)
      },
    },
    Context: props.Context,
    Entries: props.Entries,
    Input:   props.Input,
  })
}

func validateProgrammer_joiner(props ValidateProgrammer_DecomposeProps) nativeinternal.CheckerProgrammer_IConfig_IJoiner {
  f := nativecontext.EmitFactoryOf(validateProgrammer_factory, props.Context.Emit)
  return nativeinternal.CheckerProgrammer_IConfig_IJoiner{
    Object: func(v nativeinternal.CheckerProgrammer_JoinerObjectProps) *shimast.Node {
      return validateProgrammer_validate_object(validateProgrammer_validateObjectProps{Context: props.Context, Functor: props.Functor, Config: props.Config, Entries: v.Entries, Input: v.Input})
    },
    Array: func(v nativeinternal.CheckerProgrammer_JoinerArrayProps) *shimast.Node {
      return nativeiterate.Check_everything(f.NewCallExpression(nativefactories.IdentifierFactory.Access(v.Input, "map"), nil, nil, f.NewNodeList([]*shimast.Node{v.Arrow}), shimast.NodeFlagsNone))
    },
    Failure: func(next nativeinternal.CheckerProgrammer_JoinerFailureProps) *shimast.Node {
      explore := nativeinternal.FeatureProgrammer_IExplore{}
      if next.Explore != nil {
        explore = *next.Explore
      }
      return validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{Exceptionable: validateProgrammer_exceptionable(explore), Path: validateProgrammer_path(explore), Expected: next.Expected, Value: next.Input})
    },
    Tuple: func(binaries []*shimast.Node) *shimast.Node {
      return nativeiterate.Check_everything(f.NewArrayLiteralExpression(f.NewNodeList(binaries), true))
    },
  }
}

func validateProgrammer_create_output() *shimast.Node {
  return validateProgrammer_factory.NewConditionalExpression(
    validateProgrammer_factory.NewIdentifier("success"),
    nil,
    validateProgrammer_factory.NewObjectLiteralExpression(validateProgrammer_factory.NewNodeList([]*shimast.Node{
      validateProgrammer_shorthand("success"),
      validateProgrammer_property("data", validateProgrammer_factory.NewIdentifier("input")),
    }), true),
    nil,
    validateProgrammer_factory.NewObjectLiteralExpression(validateProgrammer_factory.NewNodeList([]*shimast.Node{
      validateProgrammer_shorthand("success"),
      validateProgrammer_shorthand("errors"),
      validateProgrammer_property("data", validateProgrammer_factory.NewIdentifier("input")),
    }), true),
  )
}

type validateProgrammer_createReportCallProps struct {
  Exceptionable *shimast.Expression
  Path          *shimast.Expression
  Expected      string
  Value         *shimast.Expression
  Description   *shimast.Expression
}

func validateProgrammer_create_report_call(props validateProgrammer_createReportCallProps) *shimast.Node {
  exceptionable := props.Exceptionable
  if exceptionable == nil {
    exceptionable = validateProgrammer_factory.NewIdentifier("_exceptionable")
  }
  properties := []*shimast.Node{
    validateProgrammer_property("path", props.Path),
    validateProgrammer_property("expected", validateProgrammer_factory.NewStringLiteral(props.Expected, shimast.TokenFlagsNone)),
    validateProgrammer_property("value", props.Value),
  }
  if props.Description != nil {
    properties = append(properties, validateProgrammer_property("description", props.Description))
  }
  return validateProgrammer_factory.NewCallExpression(
    validateProgrammer_factory.NewIdentifier("_report"),
    nil,
    nil,
    validateProgrammer_factory.NewNodeList([]*shimast.Node{
      exceptionable,
      validateProgrammer_factory.NewObjectLiteralExpression(validateProgrammer_factory.NewNodeList(properties), true),
    }),
    shimast.NodeFlagsNone,
  )
}

func validateProgrammer_reduce(expressions []*shimast.Node, operator shimast.Kind, initial *shimast.Expression) *shimast.Node {
  if len(expressions) == 0 {
    return initial
  }
  output := expressions[0]
  for _, expr := range expressions[1:] {
    output = validateProgrammer_binary(output, operator, expr)
  }
  return output
}

func validateProgrammer_binary(left *shimast.Expression, operator shimast.Kind, right *shimast.Expression) *shimast.Node {
  return validateProgrammer_factory.NewBinaryExpression(nil, left, nil, validateProgrammer_factory.NewToken(operator), right)
}

func validateProgrammer_equal(left *shimast.Expression, right *shimast.Expression) *shimast.Node {
  return validateProgrammer_binary(left, shimast.KindEqualsEqualsEqualsToken, right)
}

func validateProgrammer_or(left *shimast.Expression, right *shimast.Expression) *shimast.Node {
  return validateProgrammer_binary(left, shimast.KindBarBarToken, right)
}

func validateProgrammer_property(name string, value *shimast.Expression) *shimast.Node {
  return validateProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier(name), nil, nil, value)
}

func validateProgrammer_shorthand(name string) *shimast.Node {
  return validateProgrammer_factory.NewShorthandPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier(name), nil, nil, nil, nil)
}

func validateProgrammer_exceptionable(explore nativeinternal.FeatureProgrammer_IExplore) *shimast.Node {
  if explore.From == "top" || explore.Source == "top" {
    return validateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)
  }
  return validateProgrammer_factory.NewIdentifier("_exceptionable")
}

func validateProgrammer_path(explore nativeinternal.FeatureProgrammer_IExplore) *shimast.Node {
  if explore.Postfix != "" {
    return validateProgrammer_factory.NewIdentifier("_path + " + explore.Postfix)
  }
  return validateProgrammer_factory.NewIdentifier("_path")
}

func validateProgrammer_type_reference(context nativecontext.ITypiaContext, typ *nativechecker.Type, name *string) *shimast.Node {
  f := nativecontext.EmitFactoryOf(validateProgrammer_factory, context.Emit)
  if name != nil {
    return f.NewTypeReferenceNode(f.NewIdentifier(*name), nil)
  }
  return f.NewTypeReferenceNode(f.NewIdentifier(nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{Checker: context.Checker, Type: typ})), nil)
}

func validateProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  f := nativecontext.EmitFactoryOf(validateProgrammer_factory, context.Emit)
  if str, ok := props.Name.(string); ok {
    return f.NewTypeReferenceNode(f.NewIdentifier(str), nil)
  }
  return props.Name.(*shimast.Node)
}

func validateProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  return nativecontext.EmitFactoryOf(validateProgrammer_factory, context.Emit).NewIdentifier(name)
}

func validateProgrammer_bool_ptr(value bool) *bool {
  return &value
}
