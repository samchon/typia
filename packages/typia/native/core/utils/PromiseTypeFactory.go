package utils

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

type promiseTypeFactoryNamespace struct{}

var PromiseTypeFactory = promiseTypeFactoryNamespace{}

// PromiseTypeFactory_IOutput is a type after unwrapping a Promise and whether a
// Promise was unwrapped.
//
// @evidence contracts/common.md#principled-implementation The result holds the type after unwrapping a Promise and a flag saying whether it was unwrapped, so a caller can mark a function asynchronous without losing the returned type.
// @evidence contracts/common.md#clear-and-simple-design A two-field result record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states both fields.
type PromiseTypeFactory_IOutput struct {
  // Type is the unwrapped Promise payload, or the original type if unresolved.
  Type *shimchecker.Type

  // Async reports that a payload satisfying the global Promise contract was
  // resolved, rather than inspecting a function's async syntax modifier.
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
