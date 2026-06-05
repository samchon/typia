package factories

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type valueFactoryNamespace struct{}

var ValueFactory = valueFactoryNamespace{}

var valueFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (valueFactoryNamespace) NULL(emit ...*shimprinter.EmitContext) *shimast.Node {
  return nativecontext.EmitFactoryOf(valueFactory_factory, emit...).NewKeywordExpression(shimast.KindNullKeyword)
}

func (valueFactoryNamespace) UNDEFINED(emit ...*shimprinter.EmitContext) *shimast.Node {
  return nativecontext.EmitFactoryOf(valueFactory_factory, emit...).NewIdentifier("undefined")
}

func (valueFactoryNamespace) BOOLEAN(value bool, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(valueFactory_factory, emit...)
  if value {
    return f.NewKeywordExpression(shimast.KindTrueKeyword)
  }
  return f.NewKeywordExpression(shimast.KindFalseKeyword)
}

// INPUT takes a required emit context (nil for context-free callers) because its
// trailing `str` variadic blocks the optional-emit form used by the other methods.
func (valueFactoryNamespace) INPUT(ec *shimprinter.EmitContext, str ...string) *shimast.Node {
  name := "input"
  if len(str) != 0 {
    name = str[0]
  }
  return nativecontext.EmitFactory(ec, valueFactory_factory).NewIdentifier(name)
}

func (valueFactoryNamespace) TYPEOF(input *shimast.Expression, emit ...*shimprinter.EmitContext) *shimast.Node {
  return nativecontext.EmitFactoryOf(valueFactory_factory, emit...).NewTypeOfExpression(input)
}
