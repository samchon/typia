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

type jsonValidateParseProgrammerNamespace struct{}

var JsonValidateParseProgrammer = jsonValidateParseProgrammerNamespace{}

type JsonValidateParseProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

func (jsonValidateParseProgrammerNamespace) Decompose(props JsonValidateParseProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: jsonParseProgrammer_context(props.Context, &jsonParseProgrammer_options{
      Functional: jsonParseProgrammer_bool(false),
      Numeric:    jsonParseProgrammer_bool(false),
    }),
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })

  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions: validate.Functions,
    Statements: append(append([]*shimast.Node{}, validate.Statements...), nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__validate",
      Value: validate.Arrow,
    })),
    Arrow: jsonParseProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("string"), nil),
      }),
      jsonProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
        File: "typia",
        Name: "IValidation",
        Arguments: []*shimast.TypeNode{
          jsonProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
            File: "typia",
            Name: "Primitive",
            Arguments: []*shimast.TypeNode{
              jsonProgrammer_typeReference(props.Context, props.Type, props.Name),
            },
          }),
        },
      }),
      nil,
      jsonParseProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      jsonParseProgrammer_factory.NewAsExpression(
        jsonParseProgrammer_factory.NewCallExpression(
          jsonParseProgrammer_factory.NewIdentifier("__validate"),
          nil,
          nil,
          jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
            jsonParseProgrammer_factory.NewCallExpression(
              jsonParseProgrammer_factory.NewIdentifier("JSON.parse"),
              nil,
              nil,
              jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
                jsonParseProgrammer_factory.NewIdentifier("input"),
              }),
              shimast.NodeFlagsNone,
            ),
          }),
          shimast.NodeFlagsNone,
        ),
        jsonParseProgrammer_factory.NewTypeReferenceNode(jsonParseProgrammer_factory.NewIdentifier("any"), nil),
      ),
    ),
  }
}

func (jsonValidateParseProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  method := ""
  if props.Modulo != nil {
    method = props.Modulo.Text()
  }
  functor := nativehelpers.NewFunctionProgrammer(method)
  result := JsonValidateParseProgrammer.Decompose(JsonValidateParseProgrammer_DecomposeProps{
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
