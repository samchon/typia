package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalValidateParametersProgrammerNamespace struct{}

var FunctionalValidateParametersProgrammer = functionalValidateParametersProgrammerNamespace{}

type FunctionalValidateParametersProgrammer_IConfig struct {
  Equals bool
}

type FunctionalValidateParametersProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalValidateParametersProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
  Init        *shimast.Node
}

type FunctionalValidateParametersProgrammer_IDecomposeProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalValidateParametersProgrammer_IConfig
  Declaration *shimast.Node
}

type FunctionalValidateParametersProgrammer_IDecomposeOutput struct {
  Functions  []*shimast.Node
  Statements []*shimast.Node
}

func (functionalValidateParametersProgrammerNamespace) Write(props FunctionalValidateParametersProgrammer_IProps) *shimast.Node {
  output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
    Checker:     props.Context.Checker,
    Declaration: props.Declaration,
  })
  result := FunctionalValidateParametersProgrammer.Decompose(FunctionalValidateParametersProgrammer_IDecomposeProps{
    Context:     props.Context,
    Modulo:      props.Modulo,
    Config:      props.Config,
    Declaration: props.Declaration,
  })
  f := nativecontext.EmitFactoryOf(functionalValidateProgrammer_factory, props.Context.Emit)
  caller := f.NewCallExpression(
    props.Expression,
    nil,
    nil,
    f.NewNodeList(functionalIsProgrammer_parameterIdentifiers(props.Declaration, props.Context.Emit)),
    shimast.NodeFlagsNone,
  )
  data := caller
  if output.Async {
    data = f.NewAwaitExpression(caller)
  }
  statements := append([]*shimast.Node{}, result.Functions...)
  body := append([]*shimast.Node{}, result.Statements...)
  body = append(body, f.NewReturnStatement(f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
    f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("success", props.Context.Emit), nil, nil, f.NewKeywordExpression(shimast.KindTrueKeyword)),
    f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("data", props.Context.Emit), nil, nil, data),
    f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("errors", props.Context.Emit), nil, nil, f.NewArrayLiteralExpression(f.NewNodeList(nil), false)),
  }), true)))
  statements = append(statements, f.NewReturnStatement(
    f.NewArrowFunction(
      functionalIsProgrammer_asyncModifiers(output.Async, props.Context.Emit),
      nil,
      functionalIsProgrammer_parameters(props.Declaration, props.Context.Emit),
      FunctionalValidateFunctionProgrammer.GetReturnTypeNode(struct {
        Context     nativecontext.ITypiaContext
        Declaration *shimast.Node
        Async       bool
      }{
        Context:     props.Context,
        Declaration: props.Declaration,
        Async:       output.Async,
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(body), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionalValidateParametersProgrammerNamespace) Decompose(props FunctionalValidateParametersProgrammer_IDecomposeProps) FunctionalValidateParametersProgrammer_IDecomposeOutput {
  f := nativecontext.EmitFactoryOf(functionalValidateProgrammer_factory, props.Context.Emit)
  parameters := functionalIsProgrammer_parameterNodes(props.Declaration)
  resultName := functionalIsProgrammer_escapeDuplicate(functionalIsProgrammer_parameterNames(props.Declaration), "paramErrorResults")
  functions := make([]*shimast.Node, 0, len(parameters))
  results := make([]*shimast.Node, 0, len(parameters))
  for i, p := range parameters {
    functions = append(functions, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "__validate_param_" + functionalIsProgrammer_itoa(i),
      Value: nativeprogrammers.ValidateProgrammer.Write(nativeprogrammers.ValidateProgrammer_IProps{
        Context: props.Context,
        Modulo:  props.Modulo,
        Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: props.Config.Equals},
        Type: props.Context.Checker.GetTypeFromTypeNode(
          functionalIsProgrammer_parameterType(p, nativefactories.TypeFactory.Keyword("any", props.Context.Emit)),
        ),
      }),
    }, props.Context.Emit))
    results = append(results, f.NewAsExpression(
      f.NewCallExpression(
        f.NewIdentifier("__validate_param_"+functionalIsProgrammer_itoa(i)),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewIdentifier(functionalIsProgrammer_parameterName(p)),
        }),
        shimast.NodeFlagsNone,
      ),
      functionalValidateProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File: "typia",
        Name: "IValidation.IFailure",
      }),
    ))
  }
  validationResultArray := f.NewArrayLiteralExpression(f.NewNodeList(results), true)
  errorMatrix := f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(validationResultArray, "map"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("r", nil, nil, props.Context.Emit),
          nativefactories.IdentifierFactory.Parameter("i", nil, nil, props.Context.Emit),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewConditionalExpression(
          f.NewBinaryExpression(
            nil,
            f.NewKeywordExpression(shimast.KindTrueKeyword),
            nil,
            f.NewToken(shimast.KindEqualsEqualsEqualsToken),
            nativefactories.IdentifierFactory.Access(f.NewIdentifier("r"), "success"),
          ),
          nil,
          f.NewIdentifier("r"),
          nil,
          f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
            f.NewSpreadAssignment(f.NewIdentifier("r")),
            f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("errors", props.Context.Emit), nil, nil, FunctionalValidateFunctionProgrammer.HookErrors(struct {
              Expression *shimast.Node
              Replacer   *shimast.Node
            }{
              Expression: nativefactories.IdentifierFactory.Access(f.NewIdentifier("r"), "errors"),
              Replacer: f.NewTemplateExpression(
                f.NewTemplateHead("$input.parameters[", "$input.parameters[", shimast.TokenFlagsNone),
                f.NewNodeList([]*shimast.Node{
                  f.NewTemplateSpan(
                    f.NewIdentifier("i"),
                    f.NewTemplateTail("]", "]", shimast.TokenFlagsNone),
                  ),
                }),
              ),
            })),
          }), true),
        ),
      ),
    }),
    shimast.NodeFlagsNone,
  )
  failures := f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(errorMatrix, "filter"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("r", nil, nil, props.Context.Emit),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewBinaryExpression(
          nil,
          f.NewKeywordExpression(shimast.KindFalseKeyword),
          nil,
          f.NewToken(shimast.KindEqualsEqualsEqualsToken),
          nativefactories.IdentifierFactory.Access(f.NewIdentifier("r"), "success"),
        ),
      ),
    }),
    shimast.NodeFlagsNone,
  )
  return FunctionalValidateParametersProgrammer_IDecomposeOutput{
    Functions: functions,
    Statements: []*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  resultName,
        Value: failures,
      }, props.Context.Emit),
      f.NewIfStatement(
        f.NewBinaryExpression(
          nil,
          nativefactories.ExpressionFactory.Number(0, props.Context.Emit),
          nil,
          f.NewToken(shimast.KindExclamationEqualsEqualsToken),
          nativefactories.IdentifierFactory.Access(f.NewIdentifier(resultName), "length"),
        ),
        f.NewReturnStatement(f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
          f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("success", props.Context.Emit), nil, nil, f.NewKeywordExpression(shimast.KindFalseKeyword)),
          f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("errors", props.Context.Emit), nil, nil, f.NewCallExpression(
            nativefactories.IdentifierFactory.Access(f.NewCallExpression(
              nativefactories.IdentifierFactory.Access(f.NewIdentifier(resultName), "map"),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{
                f.NewArrowFunction(
                  nil,
                  nil,
                  f.NewNodeList([]*shimast.Node{
                    nativefactories.IdentifierFactory.Parameter("r", nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nil, props.Context.Emit),
                  }),
                  nil,
                  nil,
                  f.NewToken(shimast.KindEqualsGreaterThanToken),
                  nativefactories.IdentifierFactory.Access(f.NewIdentifier("r"), "errors"),
                ),
              }),
              shimast.NodeFlagsNone,
            ), "flat"),
            nil,
            nil,
            nil,
            shimast.NodeFlagsNone,
          )),
        }), true)),
        nil,
      ),
    },
  }
}
