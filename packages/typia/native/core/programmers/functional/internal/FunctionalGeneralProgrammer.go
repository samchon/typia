package internal

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
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
  promised := nativeutils.PromiseTypeFactory.Resolve(props.Checker, t)
  return FunctionalGeneralProgrammer_IOutput{
    Type:  promised.Type,
    Async: promised.Async,
  }
}
