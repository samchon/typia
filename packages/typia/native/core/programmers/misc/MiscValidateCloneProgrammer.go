package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type miscValidateCloneProgrammerNamespace struct{}

var MiscValidateCloneProgrammer = miscValidateCloneProgrammerNamespace{}

type MiscValidateCloneProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var miscValidateCloneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscValidateCloneProgrammerNamespace) Decompose(props MiscValidateCloneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  clone := MiscCloneProgrammer.Decompose(MiscCloneProgrammer_DecomposeProps{
    Context:   props.Context,
    Functor:   props.Functor,
    Type:      props.Type,
    Name:      props.Name,
    Validated: true,
  })
  statements := append([]*shimast.Node{}, validate.Statements...)
  statements = append(statements, clone.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__validate", Value: validate.Arrow}),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{Name: "__clone", Value: clone.Arrow}),
  )
  cloneType := clone.Arrow.AsArrowFunction().Type
  if cloneType == nil {
    cloneType = nativefactories.TypeFactory.Keyword("any")
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  miscProgrammer_merge_functions(validate.Functions, clone.Functions),
    Statements: statements,
    Arrow: miscValidateCloneProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      miscValidateCloneProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
      }),
      miscCloneProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{cloneType},
      }),
      nil,
      miscValidateCloneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      miscValidateCloneProgrammer_factory.NewBlock(miscValidateCloneProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name: "result",
          Value: miscValidateCloneProgrammer_factory.NewAsExpression(
            miscValidateCloneProgrammer_factory.NewCallExpression(
              miscValidateCloneProgrammer_factory.NewIdentifier("__validate"),
              nil,
              nil,
              miscValidateCloneProgrammer_factory.NewNodeList([]*shimast.Node{miscValidateCloneProgrammer_factory.NewIdentifier("input")}),
              shimast.NodeFlagsNone,
            ),
            nativefactories.TypeFactory.Keyword("any"),
          ),
        }),
        miscValidateCloneProgrammer_factory.NewIfStatement(
          miscValidateCloneProgrammer_factory.NewIdentifier("result.success"),
          miscValidateCloneProgrammer_factory.NewExpressionStatement(
            miscValidateCloneProgrammer_factory.NewBinaryExpression(
              nil,
              miscValidateCloneProgrammer_factory.NewIdentifier("result.data"),
              nil,
              miscValidateCloneProgrammer_factory.NewToken(shimast.KindEqualsToken),
              miscValidateCloneProgrammer_factory.NewCallExpression(
                miscValidateCloneProgrammer_factory.NewIdentifier("__clone"),
                nil,
                nil,
                miscValidateCloneProgrammer_factory.NewNodeList([]*shimast.Node{miscValidateCloneProgrammer_factory.NewIdentifier("input")}),
                shimast.NodeFlagsNone,
              ),
            ),
          ),
          nil,
        ),
        miscValidateCloneProgrammer_factory.NewReturnStatement(miscValidateCloneProgrammer_factory.NewIdentifier("result")),
      }), true),
    ),
  }
}

func (miscValidateCloneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(miscCloneProgrammer_method_text(props.Modulo))
  result := MiscValidateCloneProgrammer.Decompose(MiscValidateCloneProgrammer_DecomposeProps{
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
