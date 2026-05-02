package internal

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

type functionalGeneralProgrammerNamespace struct{}

var FunctionalGeneralProgrammer = functionalGeneralProgrammerNamespace{}

type FunctionalGeneralProgrammer_IProps struct {
  Checker     *shimchecker.Checker
  Declaration *shimast.Node
}

type FunctionalGeneralProgrammer_IOutput struct {
  Type  *shimchecker.Type
  Async bool
}

func (functionalGeneralProgrammerNamespace) GetReturnType(props FunctionalGeneralProgrammer_IProps) FunctionalGeneralProgrammer_IOutput {
  var signature *shimchecker.Signature
  if props.Checker != nil && props.Declaration != nil {
    signature = props.Checker.GetSignatureFromDeclaration(props.Declaration)
  }
  var t *shimchecker.Type
  if signature != nil {
    t = props.Checker.GetReturnTypeOfSignature(signature)
  }
  if t == nil && props.Checker != nil {
    t = props.Checker.GetAnyType()
  }
  if t != nil {
    if symbol := t.Symbol(); symbol != nil && symbol.Name == "Promise" {
      generic := props.Checker.GetTypeArguments(t)
      if len(generic) == 1 {
        return FunctionalGeneralProgrammer_IOutput{
          Type:  generic[0],
          Async: true,
        }
      }
      return FunctionalGeneralProgrammer_IOutput{
        Type:  props.Checker.GetAnyType(),
        Async: false,
      }
    }
  }
  return FunctionalGeneralProgrammer_IOutput{
    Type:  t,
    Async: false,
  }
}
