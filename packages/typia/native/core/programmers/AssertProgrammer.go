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

type assertProgrammerNamespace struct{}

var AssertProgrammer = assertProgrammerNamespace{}

type AssertProgrammer_IConfig struct {
  Equals bool
  Guard  bool
}

type AssertProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *nativechecker.Type
  Name    *string
  Init    *shimast.Node
  Config  AssertProgrammer_IConfig
}

type AssertProgrammer_DecomposeProps struct {
  Config  AssertProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *nativechecker.Type
  Name    *string
  Init    *shimast.Node
}

type assertProgrammerImporter interface {
  Internal(name string) *shimast.Node
  Type(props ImportProgrammer_TypeProps) *shimast.Node
}

type assertProgrammerGuardianNamespace struct{}

var Guardian = assertProgrammerGuardianNamespace{}

var assertProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (assertProgrammerNamespace) Decompose(props AssertProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  is := IsProgrammer.Decompose(IsProgrammer_DecomposeProps{
    Config:  IsProgrammer_IConfig{Equals: props.Config.Equals},
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })

  composed := nativeinternal.CheckerProgrammer.Compose(nativeinternal.CheckerProgrammer_ComposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
    Config: nativeinternal.CheckerProgrammer_IConfig{
      Prefix:  "_a",
      Path:    true,
      Trace:   true,
      Numeric: nativehelpers.OptionPredicator.Numeric(props.Context.Options),
      Equals:  props.Config.Equals,
      Atomist: assertProgrammer_atomist(props),
      Combiner: assertProgrammer_combiner(struct {
        Config  AssertProgrammer_IConfig
        Context nativecontext.ITypiaContext
        Functor *nativehelpers.FunctionProgrammer
      }{Config: props.Config, Context: props.Context, Functor: props.Functor}),
      Joiner:  assertProgrammer_joiner(props),
      Success: assertProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
    },
  })

  typeName := assertProgrammer_type_name(props.Context, props.Type, props.Name)
  var returnType *shimast.Node
  if props.Config.Guard {
    returnType = assertProgrammer_factory.NewTypePredicateNode(
      assertProgrammer_factory.NewToken(shimast.KindAssertsKeyword),
      assertProgrammer_factory.NewIdentifier("input"),
      assertProgrammer_factory.NewTypeReferenceNode(assertProgrammer_factory.NewIdentifier(typeName), nil),
    )
  } else {
    returnType = assertProgrammer_factory.NewTypeReferenceNode(assertProgrammer_factory.NewIdentifier(typeName), nil)
  }

  statements := []*shimast.Node{
    assertProgrammer_factory.NewIfStatement(
      assertProgrammer_equal(
        assertProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword),
        assertProgrammer_factory.NewCallExpression(
          assertProgrammer_factory.NewIdentifier("__is"),
          nil,
          nil,
          assertProgrammer_factory.NewNodeList([]*shimast.Node{assertProgrammer_factory.NewIdentifier("input")}),
          shimast.NodeFlagsNone,
        ),
      ),
      assertProgrammer_factory.NewBlock(
        assertProgrammer_factory.NewNodeList([]*shimast.Node{
          assertProgrammer_factory.NewExpressionStatement(
            assertProgrammer_factory.NewBinaryExpression(
              nil,
              assertProgrammer_factory.NewIdentifier("_errorFactory"),
              nil,
              assertProgrammer_factory.NewToken(shimast.KindEqualsToken),
              assertProgrammer_factory.NewIdentifier("errorFactory"),
            ),
          ),
          assertProgrammer_factory.NewExpressionStatement(
            assertProgrammer_factory.NewCallExpression(
              assertProgrammer_factory.NewArrowFunction(
                nil,
                nil,
                assertProgrammer_factory.NewNodeList(composed.Parameters),
                nil,
                nil,
                assertProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
                composed.Body,
              ),
              nil,
              nil,
              assertProgrammer_factory.NewNodeList([]*shimast.Node{
                assertProgrammer_factory.NewIdentifier("input"),
                assertProgrammer_factory.NewStringLiteral("$input", shimast.TokenFlagsNone),
                assertProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
              }),
              shimast.NodeFlagsNone,
            ),
          ),
        }),
        true,
      ),
      nil,
    ),
  }
  if props.Config.Guard == false {
    statements = append(statements, assertProgrammer_factory.NewReturnStatement(assertProgrammer_factory.NewIdentifier("input")))
  }
  arrow := assertProgrammer_factory.NewArrowFunction(
    nil,
    nil,
    assertProgrammer_factory.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
      Guardian.Parameter(struct {
        Context nativecontext.ITypiaContext
        Init    *shimast.Node
      }{Context: props.Context, Init: props.Init}),
    }),
    returnType,
    nil,
    assertProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
    assertProgrammer_factory.NewBlock(assertProgrammer_factory.NewNodeList(statements), true),
  )

  functions := map[string]*shimast.Node{}
  for key, value := range is.Functions {
    functions[key] = value
  }
  for key, value := range composed.Functions {
    functions[key] = value
  }
  outStatements := []*shimast.Node{}
  outStatements = append(outStatements, is.Statements...)
  outStatements = append(outStatements, composed.Statements...)
  outStatements = append(outStatements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__is", Value: is.Arrow}),
    nativefactories.StatementFactory.Mut(nativefactories.StatementFactory_MutProps{Name: "_errorFactory"}),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  functions,
    Statements: outStatements,
    Arrow:      arrow,
  }
}

func (assertProgrammerNamespace) Write(props AssertProgrammer_IProps) *shimast.Node {
  method := ""
  if props.Modulo != nil {
    method = props.Modulo.Text()
  }
  functor := nativehelpers.NewFunctionProgrammer(method)
  result := AssertProgrammer.Decompose(AssertProgrammer_DecomposeProps{
    Config:  props.Config,
    Context: props.Context,
    Functor: functor,
    Type:    props.Type,
    Name:    props.Name,
    Init:    props.Init,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func assertProgrammer_atomist(props AssertProgrammer_DecomposeProps) func(next nativeinternal.CheckerProgrammer_AtomistProps) *shimast.Node {
  return func(next nativeinternal.CheckerProgrammer_AtomistProps) *shimast.Node {
    expressions := []*shimast.Node{}
    if next.Entry.Expression != nil {
      expressions = append(expressions, next.Entry.Expression)
    }
    if len(next.Entry.Conditions) != 0 {
      exceptionable := assertProgrammer_exceptionable(next.Explore)
      path := assertProgrammer_path(next.Explore)
      if len(next.Entry.Conditions) == 1 {
        for _, cond := range next.Entry.Conditions[0] {
          expressions = append(expressions, assertProgrammer_or(
            cond.Expression,
            assertProgrammer_create_guard_call(assertProgrammer_createGuardCallProps{Context: props.Context, Functor: props.Functor, Exceptionable: exceptionable, Path: path, Expected: cond.Expected, Input: next.Input}),
          ))
        }
      } else {
        rows := []*shimast.Node{}
        for _, set := range next.Entry.Conditions {
          cols := []*shimast.Node{}
          for _, s := range set {
            cols = append(cols, s.Expression)
          }
          rows = append(rows, assertProgrammer_reduce(cols, shimast.KindAmpersandAmpersandToken, assertProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)))
        }
        expressions = append(expressions, assertProgrammer_or(
          assertProgrammer_reduce(rows, shimast.KindBarBarToken, assertProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)),
          assertProgrammer_create_guard_call(assertProgrammer_createGuardCallProps{Context: props.Context, Functor: props.Functor, Exceptionable: exceptionable, Path: path, Expected: next.Entry.Expected, Input: next.Input}),
        ))
      }
    }
    return assertProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, assertProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword))
  }
}

func assertProgrammer_combiner(props struct {
  Config  AssertProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.CheckerProgrammer_IConfig_Combiner {
  return func(next nativeinternal.CheckerProgrammer_CombinerProps) *shimast.Node {
    if next.Explore.Tracable == false {
      options := &IsProgrammer_CONFIG_IOptions{
        Numeric: assertProgrammer_bool_ptr(true),
        Object: func(v IsProgrammer_CONFIG_IOptions_ObjectProps) *shimast.Node {
          return assertProgrammer_assert_object(assertProgrammer_assertObjectProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Entries: v.Entries, Input: v.Input})
        },
      }
      return IsProgrammer.Configure(struct {
        Options *IsProgrammer_CONFIG_IOptions
        Context nativecontext.ITypiaContext
        Functor *nativehelpers.FunctionProgrammer
      }{Options: options, Context: props.Context, Functor: props.Functor}).Combiner(next)
    }
    path := assertProgrammer_path(next.Explore)
    exceptionable := assertProgrammer_exceptionable(next.Explore)
    if next.Logic == "and" {
      expressions := []*shimast.Node{}
      for _, binary := range next.Binaries {
        if binary.Combined {
          expressions = append(expressions, binary.Expression)
        } else {
          expressions = append(expressions, assertProgrammer_or(
            binary.Expression,
            assertProgrammer_create_guard_call(assertProgrammer_createGuardCallProps{Context: props.Context, Functor: props.Functor, Exceptionable: exceptionable, Path: path, Expected: next.Expected, Input: next.Input}),
          ))
        }
      }
      return assertProgrammer_reduce(expressions, shimast.KindAmpersandAmpersandToken, assertProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword))
    }
    expressions := []*shimast.Node{}
    for _, binary := range next.Binaries {
      expressions = append(expressions, binary.Expression)
    }
    return assertProgrammer_or(
      assertProgrammer_reduce(expressions, shimast.KindBarBarToken, assertProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)),
      assertProgrammer_create_guard_call(assertProgrammer_createGuardCallProps{Context: props.Context, Functor: props.Functor, Exceptionable: exceptionable, Path: path, Expected: next.Expected, Input: next.Input}),
    )
  }
}

type assertProgrammer_assertObjectProps struct {
  Config  AssertProgrammer_IConfig
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Entries []nativehelpers.IExpressionEntry
  Input   *shimast.Expression
}

func assertProgrammer_assert_object(props assertProgrammer_assertObjectProps) *shimast.Node {
  return nativeiterate.Check_object(nativeiterate.Check_objectProps{
    Config: nativeiterate.Check_object_IConfig{
      Equals:    props.Config.Equals,
      Assert:    true,
      Undefined: true,
      Reduce: func(a *shimast.Expression, b *shimast.Expression) *shimast.Node {
        return assertProgrammer_binary(a, shimast.KindAmpersandAmpersandToken, b)
      },
      Positive: assertProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
      Superfluous: func(input *shimast.Expression, description *shimast.Expression) *shimast.Node {
        return assertProgrammer_create_guard_call(assertProgrammer_createGuardCallProps{
          Context: props.Context,
          Functor: props.Functor,
          Path: assertProgrammer_binary(
            assertProgrammer_factory.NewIdentifier("_path"),
            shimast.KindPlusToken,
            assertProgrammer_factory.NewCallExpression(assertProgrammer_internal(props.Context, "accessExpressionAsString"), nil, nil, assertProgrammer_factory.NewNodeList([]*shimast.Node{assertProgrammer_factory.NewIdentifier("key")}), shimast.NodeFlagsNone),
          ),
          Expected: "undefined",
          Input:    input,
        })
      },
      Halt: func(expr *shimast.Expression) *shimast.Node {
        return assertProgrammer_or(
          assertProgrammer_equal(assertProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword), assertProgrammer_factory.NewIdentifier("_exceptionable")),
          expr,
        )
      },
    },
    Context: props.Context,
    Entries: props.Entries,
    Input:   props.Input,
  })
}

func assertProgrammer_joiner(props AssertProgrammer_DecomposeProps) nativeinternal.CheckerProgrammer_IConfig_IJoiner {
  joiner := nativeinternal.CheckerProgrammer_IConfig_IJoiner{
    Object: func(next nativeinternal.CheckerProgrammer_JoinerObjectProps) *shimast.Node {
      return assertProgrammer_assert_object(assertProgrammer_assertObjectProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Entries: next.Entries, Input: next.Input})
    },
    Array: func(next nativeinternal.CheckerProgrammer_JoinerArrayProps) *shimast.Node {
      return assertProgrammer_factory.NewCallExpression(nativefactories.IdentifierFactory.Access(next.Input, "every"), nil, nil, assertProgrammer_factory.NewNodeList([]*shimast.Node{next.Arrow}), shimast.NodeFlagsNone)
    },
    Failure: func(next nativeinternal.CheckerProgrammer_JoinerFailureProps) *shimast.Node {
      explore := nativeinternal.FeatureProgrammer_IExplore{}
      if next.Explore != nil {
        explore = *next.Explore
      }
      return assertProgrammer_create_guard_call(assertProgrammer_createGuardCallProps{Context: props.Context, Functor: props.Functor, Exceptionable: assertProgrammer_exceptionable(explore), Path: assertProgrammer_path(explore), Expected: next.Expected, Input: next.Input})
    },
  }
  if props.Config.Equals == false {
    joiner.Full = func(next nativeinternal.CheckerProgrammer_JoinerFullProps) *shimast.Node {
      return assertProgrammer_or(
        next.Condition,
        assertProgrammer_create_guard_call(assertProgrammer_createGuardCallProps{Context: props.Context, Functor: props.Functor, Exceptionable: assertProgrammer_exceptionable(next.Explore), Path: assertProgrammer_factory.NewIdentifier("_path"), Expected: next.Expected, Input: next.Input}),
      )
    }
  }
  return joiner
}

type assertProgrammer_createGuardCallProps struct {
  Context       nativecontext.ITypiaContext
  Functor       *nativehelpers.FunctionProgrammer
  Expected      string
  Input         *shimast.Expression
  Path          *shimast.Expression
  Exceptionable *shimast.Expression
}

func assertProgrammer_create_guard_call(props assertProgrammer_createGuardCallProps) *shimast.Node {
  exceptionable := props.Exceptionable
  if exceptionable == nil {
    exceptionable = assertProgrammer_factory.NewIdentifier("_exceptionable")
  }
  return assertProgrammer_factory.NewCallExpression(
    assertProgrammer_internal(props.Context, "assertGuard"),
    nil,
    nil,
    assertProgrammer_factory.NewNodeList([]*shimast.Node{
      exceptionable,
      assertProgrammer_factory.NewObjectLiteralExpression(assertProgrammer_factory.NewNodeList([]*shimast.Node{
        assertProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("method"), nil, nil, assertProgrammer_factory.NewStringLiteral(props.Functor.Method, shimast.TokenFlagsNone)),
        assertProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("path"), nil, nil, props.Path),
        assertProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("expected"), nil, nil, assertProgrammer_factory.NewStringLiteral(props.Expected, shimast.TokenFlagsNone)),
        assertProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("value"), nil, nil, props.Input),
      }), true),
      assertProgrammer_factory.NewIdentifier("_errorFactory"),
    }),
    shimast.NodeFlagsNone,
  )
}

func (assertProgrammerGuardianNamespace) Identifier() *shimast.Node {
  return assertProgrammer_factory.NewIdentifier("errorFactory")
}

func (assertProgrammerGuardianNamespace) Parameter(props struct {
  Context nativecontext.ITypiaContext
  Init    *shimast.Node
}) *shimast.Node {
  init := props.Init
  if init == nil {
    init = assertProgrammer_factory.NewToken(shimast.KindQuestionToken)
  }
  return nativefactories.IdentifierFactory.Parameter("errorFactory", Guardian.Type(props.Context), init)
}

func (assertProgrammerGuardianNamespace) Type(context nativecontext.ITypiaContext) *shimast.Node {
  return assertProgrammer_factory.NewFunctionTypeNode(
    nil,
    assertProgrammer_factory.NewNodeList([]*shimast.Node{
      assertProgrammer_factory.NewParameterDeclaration(
        nil,
        nil,
        assertProgrammer_factory.NewIdentifier("p"),
        nil,
        assertProgrammer_import_type(context, ImportProgrammer_TypeProps{File: "typia", Name: "TypeGuardError.IProps"}),
        nil,
      ),
    }),
    assertProgrammer_factory.NewTypeReferenceNode(assertProgrammer_factory.NewIdentifier("Error"), nil),
  )
}

func assertProgrammer_reduce(expressions []*shimast.Node, operator shimast.Kind, initial *shimast.Expression) *shimast.Node {
  if len(expressions) == 0 {
    return initial
  }
  output := expressions[0]
  for _, expr := range expressions[1:] {
    output = assertProgrammer_binary(output, operator, expr)
  }
  return output
}

func assertProgrammer_binary(left *shimast.Expression, operator shimast.Kind, right *shimast.Expression) *shimast.Node {
  return assertProgrammer_factory.NewBinaryExpression(nil, left, nil, assertProgrammer_factory.NewToken(operator), right)
}

func assertProgrammer_equal(left *shimast.Expression, right *shimast.Expression) *shimast.Node {
  return assertProgrammer_binary(left, shimast.KindEqualsEqualsEqualsToken, right)
}

func assertProgrammer_or(left *shimast.Expression, right *shimast.Expression) *shimast.Node {
  return assertProgrammer_binary(left, shimast.KindBarBarToken, right)
}

func assertProgrammer_exceptionable(explore nativeinternal.FeatureProgrammer_IExplore) *shimast.Node {
  if explore.From == "top" || explore.Source == "top" {
    return assertProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)
  }
  return assertProgrammer_factory.NewIdentifier("_exceptionable")
}

func assertProgrammer_path(explore nativeinternal.FeatureProgrammer_IExplore) *shimast.Node {
  if explore.Postfix != "" {
    return assertProgrammer_factory.NewIdentifier("_path + " + explore.Postfix)
  }
  return assertProgrammer_factory.NewIdentifier("_path")
}

func assertProgrammer_type_name(context nativecontext.ITypiaContext, typ *nativechecker.Type, name *string) string {
  if name != nil {
    return *name
  }
  return nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{Checker: context.Checker, Type: typ})
}

func assertProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
    return importer.Internal(name)
  }
  return assertProgrammer_factory.NewIdentifier(name)
}

func assertProgrammer_import_type(context nativecontext.ITypiaContext, props ImportProgrammer_TypeProps) *shimast.Node {
  if importer, ok := context.Importer.(interface {
    Type(ImportProgrammer_TypeProps) *shimast.Node
  }); ok {
    return importer.Type(props)
  }
  return assertProgrammer_factory.NewTypeReferenceNode(assertProgrammer_factory.NewIdentifier(props.Name.(string)), nil)
}

func assertProgrammer_bool_ptr(value bool) *bool {
  return &value
}
