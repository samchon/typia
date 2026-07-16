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
  symbol := checker.GetGlobalSymbol("Promise", shimast.SymbolFlagsType, nil)
  if symbol == nil {
    return false
  }
  global := checker.GetDeclaredTypeOfSymbol(symbol)
  if global == nil {
    return false
  }
  for _, property := range checker.GetPropertiesOfType(global) {
    if property.Name == "then" || (len(property.Name) != 0 && property.Name[0] == 0xfe) {
      // GetPromisedTypeOfPromise already verifies the complete thenable shape.
      // Conditional Promise inference ignores well-known-symbol augmentations.
      continue
    }
    required := checker.GetTypeOfPropertyOfType(global, property.Name)
    candidate := checker.GetTypeOfPropertyOfType(t, property.Name)
    if candidate == nil {
      return false
    }
    if required != nil && len(checker.GetSignaturesOfType(required, shimchecker.SignatureKindCall)) != 0 &&
      len(checker.GetSignaturesOfType(candidate, shimchecker.SignatureKindCall)) == 0 {
      return false
    }
  }
  return true
}
