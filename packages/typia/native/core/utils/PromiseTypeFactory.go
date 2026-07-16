package utils

import shimchecker "github.com/microsoft/typescript-go/shim/checker"

type promiseTypeFactoryNamespace struct{}

var PromiseTypeFactory = promiseTypeFactoryNamespace{}

type PromiseTypeFactory_IOutput struct {
  Type  *shimchecker.Type
  Async bool
}

func (promiseTypeFactoryNamespace) Resolve(checker *shimchecker.Checker, t *shimchecker.Type) PromiseTypeFactory_IOutput {
  if checker != nil && t != nil {
    promised := checker.GetPromisedTypeOfPromise(t)
    // The checker helper deliberately accepts the weaker PromiseLike/thenable
    // contract. Public typia functional types discriminate against Promise,
    // whose baseline ES5 contract additionally requires a callable catch.
    catch := checker.GetTypeOfPropertyOfType(t, "catch")
    if promised != nil && catch != nil && len(checker.GetSignaturesOfType(catch, shimchecker.SignatureKindCall)) != 0 {
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
