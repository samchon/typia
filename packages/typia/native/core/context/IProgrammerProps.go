package context

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

// IProgrammerProps is the common input of a programmer: the transform context,
// the module expression that referenced the call, the type to generate for and
// an optional name and initializer.
//
// @evidence contracts/common.md#principled-implementation A programmer needs the context, the call's module expression, the type to generate for, an optional name and an optional initializer; the optional pieces are pointers so their absence is explicit.
// @evidence contracts/common.md#clear-and-simple-design One flat record shared by the programmers.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each member's role.
type IProgrammerProps struct {
  Context ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}
