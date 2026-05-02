package json

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type jsonValidateStringifyProgrammerNamespace struct{}

var JsonValidateStringifyProgrammer = jsonValidateStringifyProgrammerNamespace{}

type JsonValidateStringifyProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var jsonValidateStringifyProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (jsonValidateStringifyProgrammerNamespace) Decompose(props JsonValidateStringifyProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  validateContext := props.Context
  functional := false
  finite := true
  validateContext.Options.Functional = &functional
  validateContext.Options.Finite = &finite
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: validateContext,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  stringify := JsonStringifyProgrammer.Decompose(JsonStringifyProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, validate.Statements...)
  statements = append(statements, stringify.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__validate", Value: validate.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__stringify", Value: stringify.Arrow}),
  )
  stringifyType := stringify.Arrow.AsArrowFunction().Type
  if stringifyType == nil {
    stringifyType = jsonValidateStringifyProgrammer_factory.NewTypeReferenceNode(jsonValidateStringifyProgrammer_factory.NewIdentifier("string"), nil)
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  jsonStringifyProgrammer_merge_functions(validate.Functions, stringify.Functions),
    Statements: statements,
    Arrow: jsonValidateStringifyProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      jsonValidateStringifyProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
      }),
      jsonProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{stringifyType},
      }),
      nil,
      jsonValidateStringifyProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      jsonValidateStringifyProgrammer_factory.NewBlock(jsonValidateStringifyProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name: "result",
          Value: jsonValidateStringifyProgrammer_factory.NewAsExpression(
            jsonValidateStringifyProgrammer_factory.NewCallExpression(
              jsonValidateStringifyProgrammer_factory.NewIdentifier("__validate"),
              nil,
              nil,
              jsonValidateStringifyProgrammer_factory.NewNodeList([]*shimast.Node{jsonValidateStringifyProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
            nativefactories.TypeFactory.Keyword("any"),
          ),
        }),
        jsonValidateStringifyProgrammer_factory.NewIfStatement(
          jsonValidateStringifyProgrammer_factory.NewIdentifier("result.success"),
          jsonValidateStringifyProgrammer_factory.NewExpressionStatement(jsonValidateStringifyProgrammer_factory.NewBinaryExpression(
            nil,
            jsonValidateStringifyProgrammer_factory.NewIdentifier("result.data"),
            nil,
            jsonValidateStringifyProgrammer_factory.NewToken(shimast.KindEqualsToken),
            jsonValidateStringifyProgrammer_factory.NewCallExpression(
              jsonValidateStringifyProgrammer_factory.NewIdentifier("__stringify"),
              nil,
              nil,
              jsonValidateStringifyProgrammer_factory.NewNodeList([]*shimast.Node{jsonValidateStringifyProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
          )),
          nil,
        ),
        jsonValidateStringifyProgrammer_factory.NewReturnStatement(jsonValidateStringifyProgrammer_factory.NewIdentifier("result")),
      }), true),
    ),
  }
}

func (jsonValidateStringifyProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(jsonStringifyProgrammer_method_text(props.Modulo))
  result := JsonValidateStringifyProgrammer.Decompose(JsonValidateStringifyProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
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
