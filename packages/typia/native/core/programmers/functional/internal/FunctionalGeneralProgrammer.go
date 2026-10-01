package internal

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

type functionalGeneralProgrammerNamespace struct{}

var FunctionalGeneralProgrammer = functionalGeneralProgrammerNamespace{}

// FunctionalGeneralProgrammer_IProps is the checker and the function declaration
// whose return type is wanted.
//
// @evidence contracts/common.md#principled-implementation The return type is read from the declaration's signature, so only those two inputs are needed.
// @evidence contracts/common.md#clear-and-simple-design A two-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names both fields.
type FunctionalGeneralProgrammer_IProps struct {
  Checker     *shimchecker.Checker
  Declaration *shimast.Node
}

// FunctionalGeneralProgrammer_IOutput is the return type with a Promise
// unwrapped and whether it was unwrapped.
//
// @evidence contracts/common.md#principled-implementation An asynchronous function is awaited, so the type is unwrapped and the flag tells the caller to await.
// @evidence contracts/common.md#clear-and-simple-design A two-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names both fields.
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
