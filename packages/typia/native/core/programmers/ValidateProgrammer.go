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
      Success: validateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
    },
  })

  typ := validateProgrammer_type_reference(props.Context, props.Type, props.Name)
  arrow := validateProgrammer_factory.NewArrowFunction(
    nil,
    nil,
    validateProgrammer_factory.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
    }),
    validateProgrammer_import_type(props.Context, ImportProgrammer_TypeProps{
      File:      "typia",
      Name:      "IValidation",
      Arguments: []*shimast.TypeNode{typ},
    }),
    nil,
    validateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
    validateProgrammer_factory.NewBlock(validateProgrammer_factory.NewNodeList([]*shimast.Node{
      validateProgrammer_factory.NewIfStatement(
        validateProgrammer_equal(
          validateProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword),
          validateProgrammer_factory.NewCallExpression(
            validateProgrammer_factory.NewIdentifier("__is"),
            nil,
            nil,
            validateProgrammer_factory.NewNodeList([]*shimast.Node{validateProgrammer_factory.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        ),
        validateProgrammer_factory.NewBlock(validateProgrammer_factory.NewNodeList([]*shimast.Node{
          validateProgrammer_factory.NewExpressionStatement(validateProgrammer_factory.NewBinaryExpression(nil, validateProgrammer_factory.NewIdentifier("errors"), nil, validateProgrammer_factory.NewToken(shimast.KindEqualsToken), validateProgrammer_factory.NewArrayLiteralExpression(validateProgrammer_factory.NewNodeList(nil), false))),
          validateProgrammer_factory.NewExpressionStatement(validateProgrammer_factory.NewBinaryExpression(
            nil,
            validateProgrammer_factory.NewIdentifier("_report"),
            nil,
            validateProgrammer_factory.NewToken(shimast.KindEqualsToken),
            validateProgrammer_factory.NewCallExpression(
              validateProgrammer_factory.NewAsExpression(validateProgrammer_internal(props.Context, "validateReport"), nativefactories.TypeFactory.Keyword("any")),
              nil,
              validateProgrammer_factory.NewNodeList(nil),
              validateProgrammer_factory.NewNodeList([]*shimast.Node{validateProgrammer_factory.NewIdentifier("errors")}),
              shimast.NodeFlagsNone,
            ),
          )),
          validateProgrammer_factory.NewExpressionStatement(validateProgrammer_factory.NewCallExpression(
            validateProgrammer_factory.NewArrowFunction(nil, nil, validateProgrammer_factory.NewNodeList(composed.Parameters), nil, nil, validateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken), composed.Body),
            nil,
            nil,
            validateProgrammer_factory.NewNodeList([]*shimast.Node{
              validateProgrammer_factory.NewIdentifier("input"),
              validateProgrammer_factory.NewStringLiteral("$input", shimast.TokenFlagsNone),
              validateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
            }),
            shimast.NodeFlagsNone,
          )),
          nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
            Name: "success",
            Value: validateProgrammer_equal(
              nativefactories.ExpressionFactory.Number(0),
              validateProgrammer_factory.NewIdentifier("errors.length"),
            ),
          }),
          validateProgrammer_factory.NewReturnStatement(validateProgrammer_factory.NewAsExpression(validateProgrammer_create_output(), nativefactories.TypeFactory.Keyword("any"))),
        }), true),
        nil,
      ),
      validateProgrammer_factory.NewReturnStatement(validateProgrammer_factory.NewAsExpression(
        validateProgrammer_factory.NewObjectLiteralExpression(validateProgrammer_factory.NewNodeList([]*shimast.Node{
          validateProgrammer_property("success", validateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)),
          validateProgrammer_property("data", validateProgrammer_factory.NewIdentifier("input")),
        }), true),
        nativefactories.TypeFactory.Keyword("any"),
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
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}),
    nativefactories.StatementFactory.Mut(nativefactories.StatementFactory_MutProps{Name: "errors"}),
    nativefactories.StatementFactory.Mut(nativefactories.StatementFactory_MutProps{Name: "_report"}),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  functions,
    Statements: statements,
    Arrow:      arrow,
  }
}

func (validateProgrammerNamespace) Write(props ValidateProgrammer_IProps) *shimast.Node {
  method := ""
  if props.Modulo != nil {
    method = props.Modulo.Text()
  }
  functor := nativehelpers.NewFunctionProgrammer(method)
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
    wrapper = func(arrow *shimast.Node) *shimast.Node {
      return validateProgrammer_factory.NewCallExpression(validateProgrammer_internal(props.Context, "createStandardSchema"), nil, nil, validateProgrammer_factory.NewNodeList([]*shimast.Node{arrow}), shimast.NodeFlagsNone)
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
          rows = append(rows, validateProgrammer_reduce(cols, shimast.KindAmpersandAmpersandToken, validateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)))
        }
        expressions = append(expressions, validateProgrammer_or(
          validateProgrammer_reduce(rows, shimast.KindBarBarToken, validateProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)),
          validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{Exceptionable: exceptionable, Path: path, Expected: next.Entry.Expected, Value: next.Input}),
        ))
      }
    }
    return validateProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, validateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword))
  }
}

func validateProgrammer_combine(props struct {
  Config  ValidateProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.CheckerProgrammer_IConfig_Combiner {
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
      return validateProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, validateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword))
    }
    expressions := []*shimast.Node{}
    for _, binary := range next.Binaries {
      expressions = append(expressions, binary.Expression)
    }
    return validateProgrammer_or(
      validateProgrammer_reduce(expressions, shimast.KindBarBarToken, validateProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)),
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
  return nativeiterate.Check_object(nativeiterate.Check_objectProps{
    Config: nativeiterate.Check_object_IConfig{
      Equals:    props.Config.Equals,
      Undefined: true,
      Assert:    false,
      Reduce: func(a *shimast.Expression, b *shimast.Expression) *shimast.Node {
        return validateProgrammer_binary(a, shimast.KindAmpersandAmpersandToken, b)
      },
      Positive: validateProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
      Superfluous: func(input *shimast.Expression, description *shimast.Expression) *shimast.Node {
        return validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{
          Path: validateProgrammer_binary(
            validateProgrammer_factory.NewIdentifier("_path"),
            shimast.KindPlusToken,
            validateProgrammer_factory.NewCallExpression(validateProgrammer_internal(props.Context, "accessExpressionAsString"), nil, nil, validateProgrammer_factory.NewNodeList([]*shimast.Node{validateProgrammer_factory.NewIdentifier("key")}), shimast.NodeFlagsNone),
          ),
          Expected:    "undefined",
          Value:       input,
          Description: description,
        })
      },
      Halt: func(expr *shimast.Expression) *shimast.Node {
        return validateProgrammer_or(validateProgrammer_equal(validateProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword), validateProgrammer_factory.NewIdentifier("_exceptionable")), expr)
      },
    },
    Context: props.Context,
    Entries: props.Entries,
    Input:   props.Input,
  })
}

func validateProgrammer_joiner(props ValidateProgrammer_DecomposeProps) nativeinternal.CheckerProgrammer_IConfig_IJoiner {
  return nativeinternal.CheckerProgrammer_IConfig_IJoiner{
    Object: func(v nativeinternal.CheckerProgrammer_JoinerObjectProps) *shimast.Node {
      return validateProgrammer_validate_object(validateProgrammer_validateObjectProps{Context: props.Context, Functor: props.Functor, Config: props.Config, Entries: v.Entries, Input: v.Input})
    },
    Array: func(v nativeinternal.CheckerProgrammer_JoinerArrayProps) *shimast.Node {
      return nativeiterate.Check_everything(validateProgrammer_factory.NewCallExpression(nativefactories.IdentifierFactory.Access(v.Input, "map"), nil, nil, validateProgrammer_factory.NewNodeList([]*shimast.Node{v.Arrow}), shimast.NodeFlagsNone))
    },
    Failure: func(next nativeinternal.CheckerProgrammer_JoinerFailureProps) *shimast.Node {
      explore := nativeinternal.FeatureProgrammer_IExplore{}
      if next.Explore != nil {
        explore = *next.Explore
      }
      return validateProgrammer_create_report_call(validateProgrammer_createReportCallProps{Exceptionable: validateProgrammer_exceptionable(explore), Path: validateProgrammer_path(explore), Expected: next.Expected, Value: next.Input})
    },
    Tuple: func(binaries []*shimast.Node) *shimast.Node {
      return nativeiterate.Check_everything(validateProgrammer_factory.NewArrayLiteralExpression(validateProgrammer_factory.NewNodeList(binaries), true))
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
  if name != nil {
    return validateProgrammer_factory.NewTypeReferenceNode(validateProgrammer_factory.NewIdentifier(*name), nil)
  }
  return validateProgrammer_factory.NewTypeReferenceNode(validateProgrammer_factory.NewIdentifier(nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{Checker: context.Checker, Type: typ})), nil)
}

func validateProgrammer_import_type(context nativecontext.ITypiaContext, props ImportProgrammer_TypeProps) *shimast.Node {
  if importer, ok := context.Importer.(interface {
    Type(ImportProgrammer_TypeProps) *shimast.Node
  }); ok {
    return importer.Type(props)
  }
  if str, ok := props.Name.(string); ok {
    return validateProgrammer_factory.NewTypeReferenceNode(validateProgrammer_factory.NewIdentifier(str), nil)
  }
  return props.Name.(*shimast.Node)
}

func validateProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
    return importer.Internal(name)
  }
  return validateProgrammer_factory.NewIdentifier(name)
}

func validateProgrammer_bool_ptr(value bool) *bool {
  return &value
}
