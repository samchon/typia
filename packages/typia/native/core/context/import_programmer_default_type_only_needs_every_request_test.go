//go:build typia_native_internal
// +build typia_native_internal

package context

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

// TestImportProgrammerDefaultTypeOnlyNeedsEveryRequest verifies a value request
// keeps a default import a value import.
//
// A default import marked type-only cannot be referenced as a value. When one
// file's default is requested both as a value and as a type, the emitted import
// must stay a value import, and it is type-only only when every request is.
//
// 1. Request one default as a type and then as a value.
// 2. Request a second default only as a type.
// 3. Assert the first import has no type phase modifier and the second has one.
//
// @evidence contracts/testing.md#behavioral-verification The import programmer receives a default import requested as a value and as a type, and one requested only as a type; the emitted import is type-only exactly in the second case.
// @evidence contracts/testing.md#independent-expectations A type-only default cannot be referenced as a value, so the expected flag is authored from TypeScript import semantics.
// @evidence contracts/testing.md#distinguishing-cases Mixed requests versus type-only requests is the one-axis pair.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test calls the programmer and inspects emitted nodes in memory with no checker, filesystem fixture or process.
func TestImportProgrammerDefaultTypeOnlyNeedsEveryRequest(t *testing.T) {
  programmer := NewImportProgrammer()
  programmer.Default(ImportProgrammer_IDefault{File: "mixed", Name: "Mixed", Type: true})
  programmer.Default(ImportProgrammer_IDefault{File: "mixed", Name: "Mixed", Type: false})
  programmer.Default(ImportProgrammer_IDefault{File: "types-only", Name: "Only", Type: true})
  programmer.Default(ImportProgrammer_IDefault{File: "types-only", Name: "Only", Type: true})

  phases := map[string]shimast.Kind{}
  for _, statement := range programmer.ToStatements() {
    declaration := statement.AsImportDeclaration()
    clause := declaration.ImportClause.AsImportClause()
    phases[declaration.ModuleSpecifier.AsStringLiteral().Text] = shimast.Kind(clause.PhaseModifier)
  }
  if phases["mixed"] == shimast.KindTypeKeyword {
    t.Fatal("a default requested as a value must not become a type-only import")
  }
  if phases["types-only"] != shimast.KindTypeKeyword {
    t.Fatal("a default requested only as a type must be a type-only import")
  }
}
