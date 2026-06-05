package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

var stringify_native_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func Stringify_native(emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(stringify_native_factory, emit...)
  return f.NewStringLiteral("{}", shimast.TokenFlagsNone)
}
