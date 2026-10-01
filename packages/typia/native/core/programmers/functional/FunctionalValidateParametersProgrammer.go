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

// FunctionalValidateParametersProgrammer_IConfig selects the generator's
// variants: Equals is the strict form that also rejects properties the type does
// not declare.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 1 field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type FunctionalValidateParametersProgrammer_IConfig struct {
  Equals bool
}

// FunctionalValidateParametersProgrammer_IProps is the input of Write for the
// validate parameters generator: Context (the transform context), Modulo (the
// call's callee expression), Config (the configuration), Declaration (the
// function declaration) and Expression (the function expression).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the configuration, the function declaration and the function expression, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalValidateParametersProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalValidateParametersProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
}

// FunctionalValidateParametersProgrammer_IDecomposeProps is the input of
// Decompose for the validate parameters generator: Context (the transform
// context), Modulo (the call's callee expression), Config (the configuration)
// and Declaration (the function declaration).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the call's callee expression, the configuration and the function declaration, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 4 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalValidateParametersProgrammer_IDecomposeProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalValidateParametersProgrammer_IConfig
  Declaration *shimast.Node
}

// FunctionalValidateParametersProgrammer_IDecomposeOutput is what the generator
// returns: Functions is the helper function statements and Statements is the
// body statements.
//
// @evidence contracts/common.md#principled-implementation The generator returns its pieces separately so the caller can place helper functions, statements and values where its own wrapper needs them.
// @evidence contracts/common.md#clear-and-simple-design A record of 2 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states each returned part.
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
  caller := functionalIsProgrammer_call(props.Context, props.Expression, props.Declaration)
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
    functionalIsProgrammer_function(
      props.Context,
      props.Declaration,
      output.Async,
      FunctionalValidateFunctionProgrammer.GetReturnTypeNode(struct {
        Context     nativecontext.ITypiaContext
        Declaration *shimast.Node
        Async       bool
      }{
        Context:     props.Context,
        Declaration: props.Declaration,
        Async:       output.Async,
      }),
      f.NewBlock(f.NewNodeList(body), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    props.Context.Emit,
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
        Type:    functionalIsProgrammer_parameterCheckerType(props.Context, p),
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
    nativefactories.IdentifierFactory.Access(props.Context.Emit, validationResultArray, "map"),
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
        nativefactories.ExpressionFactory.Conditional(
          f.NewBinaryExpression(
            nil,
            f.NewKeywordExpression(shimast.KindTrueKeyword),
            nil,
            f.NewToken(shimast.KindEqualsEqualsEqualsToken),
            nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier("r"), "success"),
          ),
          f.NewIdentifier("r"),
          f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
            f.NewSpreadAssignment(f.NewIdentifier("r")),
            f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("errors", props.Context.Emit), nil, nil, FunctionalValidateFunctionProgrammer.HookErrors(struct {
              Context    nativecontext.ITypiaContext
              Expression *shimast.Node
              Replacer   *shimast.Node
            }{
              Context:    props.Context,
              Expression: nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier("r"), "errors"),
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
          props.Context.Emit,
        ),
      ),
    }),
    shimast.NodeFlagsNone,
  )
  failures := f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(props.Context.Emit, errorMatrix, "filter"),
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
          nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier("r"), "success"),
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
          nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier(resultName), "length"),
        ),
        f.NewReturnStatement(f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
          f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("success", props.Context.Emit), nil, nil, f.NewKeywordExpression(shimast.KindFalseKeyword)),
          f.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("errors", props.Context.Emit), nil, nil, f.NewCallExpression(
            nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewCallExpression(
              nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier(resultName), "map"),
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
                  nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier("r"), "errors"),
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
