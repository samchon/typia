package helpers

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
)

// ModuloMethodText renders a typia call accessor (e.g. `typia.assertEquals`,
// `typia.createAssertEquals`) into the method label embedded in TypeGuardError.
//
// It mirrors the TypeScript transformer's `props.modulo.getText()`: the whole
// callee expression text, so the `typia.` qualifier survives. The native
// transform must hand this the full call expression — Node.Text() panics on a
// PropertyAccessExpression, which is why GetTextOfNode (the source-span text)
// is used instead.
//
// @evidence contracts/common.md#principled-implementation The label embedded in TypeGuardError is the whole callee text, which is what the TypeScript transformer's `modulo.getText()` produced, so an identifier or string literal uses its text and any other expression is read from its source span because Node.Text() panics on a property access.
// @evidence contracts/common.md#clear-and-simple-design One function with a nil guard and two branches.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The label is read from the call expression and not rebuilt from the kind of typia call.
// @evidence contracts/common.md#meaningful-documentation The doc states the mirrored TypeScript behavior and why the source-span text is used.
func ModuloMethodText(modulo *shimast.Node) string {
  if modulo == nil {
    return ""
  }
  if modulo.Kind == shimast.KindIdentifier || shimast.IsStringLiteral(modulo) {
    return modulo.Text()
  }
  return strings.TrimSpace(shimscanner.GetTextOfNode(modulo))
}
