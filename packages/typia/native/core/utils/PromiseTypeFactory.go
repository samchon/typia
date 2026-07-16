package utils

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

type promiseTypeFactoryNamespace struct{}

var PromiseTypeFactory = promiseTypeFactoryNamespace{}

type PromiseTypeFactory_IOutput struct {
  Type  *shimchecker.Type
  Async bool
}

func (promiseTypeFactoryNamespace) Resolve(checker *shimchecker.Checker, t *shimchecker.Type) PromiseTypeFactory_IOutput {
  if checker != nil && t != nil {
    promised := checker.GetPromisedTypeOfPromise(t)
    if promised != nil && PromiseTypeFactory.satisfiesGlobalContract(checker, t) {
      return PromiseTypeFactory_IOutput{
        Type:  promised,
        Async: true,
      }
    }
  }
  return PromiseTypeFactory_IOutput{
    Type:  t,
    Async: false,
  }
}

func (promiseTypeFactoryNamespace) satisfiesGlobalContract(checker *shimchecker.Checker, t *shimchecker.Type) bool {
  symbol := checker.GetGlobalSymbol("Promise", shimast.SymbolFlagsValue, nil)
  if symbol == nil {
    return false
  }
  constructor := checker.GetTypeOfSymbol(symbol)
  if constructor == nil {
    return false
  }
  contract := checker.GetTypeOfPropertyOfType(constructor, "prototype")
  if contract == nil {
    return false
  }
  for _, property := range checker.GetPropertiesOfType(contract) {
    if property.Name == "then" || (len(property.Name) != 0 && property.Name[0] == 0xfe) {
      // GetPromisedTypeOfPromise verifies the thenable shape. Conditional
      // Promise inference ignores well-known-symbol augmentations.
      continue
    }
    required := checker.GetTypeOfPropertyOfType(contract, property.Name)
    candidate := checker.GetTypeOfPropertyOfType(t, property.Name)
    if required == nil || candidate == nil || !checker.IsTypeAssignableTo(candidate, required) {
      return false
    }
  }
  return true
}
