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
func ModuloMethodText(modulo *shimast.Node) string {
  if modulo == nil {
    return ""
  }
  return strings.TrimSpace(shimscanner.GetTextOfNode(modulo))
}
