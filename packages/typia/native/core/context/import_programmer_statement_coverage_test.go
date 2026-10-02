//go:build typia_native_internal
// +build typia_native_internal

package context

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

// TestImportProgrammerStatementCoverage covers import statement assembly.
//
// Transform integration uses import helpers indirectly, but statement ordering,
// default imports, namespace imports, aliases, and internal rank buckets are
// easier to verify directly in the programmer package. This keeps the import
// graph helper behavior covered without relying on emitted TypeScript text.
//
// 1. Register default, namespace, named, aliased, type, and internal imports.
// 2. Compare exactly five declarations, their module order and their bindings.
// 3. Verify internal file ranking buckets used to sort helper imports.
// 4. Check import type arguments, internal alias text and default value phase.
//
// @evidence contracts/testing.md#behavioral-verification Default, namespace, named, aliased, type and internal imports are registered; exactly five emitted declarations are compared with authored module order and local/exported bindings, and the import type retains its qualifier and string type argument.
// @evidence contracts/testing.md#independent-expectations The module order follows the documented helper rank and first-request rules; default, namespace and named binding literals follow the requested TypeScript import semantics, rather than being computed by the programmer under test.
// @evidence contracts/testing.md#distinguishing-cases Namespace, default, aliased named, unaliased named and internal imports have separately checked bindings; internal ranks precede external modules, and equal-rank external modules retain first request order.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test builds import statements in memory with no checker, filesystem fixture or process.
func TestImportProgrammerStatementCoverage(t *testing.T) {
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  programmer := NewImportProgrammer(ImportProgrammer_IOptions{InternalPrefix: "p"})
  programmer.Default(ImportProgrammer_IDefault{File: "z-default", Name: "DefaultValue"})
  programmer.Default(ImportProgrammer_IDefault{File: "z-default", Name: "DefaultValue", Type: true})
  programmer.Namespace(ImportProgrammer_INamespace{File: "a-namespace", Name: "NS"})
  alias := "Renamed"
  programmer.Instance(ImportProgrammer_IInstance{File: "m-named", Name: "Original", Alias: &alias})
  programmer.Instance(ImportProgrammer_IInstance{File: "m-named", Name: "Second"})
  importedType := programmer.Type(ImportProgrammer_TypeProps{
    File:      "types",
    Name:      factory.NewIdentifier("Shape"),
    Arguments: []*shimast.TypeNode{factory.NewKeywordTypeNode(shimast.KindStringKeyword)},
  })
  if importedType == nil {
    t.Fatal("import type node returned nil")
  }
  typeNode := importedType.AsImportTypeNode()
  if typeNode.Qualifier == nil || typeNode.Qualifier.Text() != "Shape" ||
    typeNode.TypeArguments == nil || len(typeNode.TypeArguments.Nodes) != 1 ||
    typeNode.TypeArguments.Nodes[0].Kind != shimast.KindStringKeyword {
    t.Fatal("import type must preserve the requested qualifier and string argument")
  }
  if text := programmer.GetInternalText("helper"); text != "__p_helper" {
    t.Fatalf("internal alias mismatch: %s", text)
  }
  if programmer.Internal("_isString") == nil {
    t.Fatal("internal import returned nil")
  }

  statements := programmer.ToStatements()
  expectedModules := []string{"typia/lib/internal/_isString", "typia/lib/internal/_helper", "z-default", "a-namespace", "m-named"}
  if len(statements) != len(expectedModules) {
    t.Fatalf("expected exactly five import declarations, got %d", len(statements))
  }
  for index, expected := range expectedModules {
    actual := statements[index].AsImportDeclaration().ModuleSpecifier.Text()
    if actual != expected {
      t.Fatalf("module %d: expected %q, got %q", index, expected, actual)
    }
  }
  defaultClause := statements[2].AsImportDeclaration().ImportClause.AsImportClause()
  if defaultClause.Name() == nil || defaultClause.Name().Text() != "DefaultValue" || defaultClause.PhaseModifier != 0 || defaultClause.NamedBindings != nil {
    t.Fatal("default request must emit the value binding DefaultValue")
  }
  namespaceClause := statements[3].AsImportDeclaration().ImportClause.AsImportClause()
  if namespaceClause.NamedBindings == nil || namespaceClause.NamedBindings.Kind != shimast.KindNamespaceImport || namespaceClause.NamedBindings.AsNamespaceImport().Name().Text() != "NS" {
    t.Fatal("namespace request must emit the namespace binding NS")
  }
  expectedBindings := []struct {
    index    int
    exported []string
    local    []string
  }{
    {0, []string{"_isString"}, []string{"__p_isString"}},
    {1, []string{"_helper"}, []string{"__p_helper"}},
    {4, []string{"Original", "Second"}, []string{"Renamed", "Second"}},
  }
  for _, expected := range expectedBindings {
    clause := statements[expected.index].AsImportDeclaration().ImportClause.AsImportClause()
    if clause.NamedBindings == nil || clause.NamedBindings.Kind != shimast.KindNamedImports {
      t.Fatalf("module %s must emit named bindings", expectedModules[expected.index])
    }
    bindings := clause.NamedBindings.AsNamedImports().Elements.Nodes
    if len(bindings) != len(expected.local) {
      t.Fatalf("module %s binding count: expected %d, got %d", expectedModules[expected.index], len(expected.local), len(bindings))
    }
    for index, binding := range bindings {
      specifier := binding.AsImportSpecifier()
      exported := specifier.Name().Text()
      if specifier.PropertyName != nil {
        exported = specifier.PropertyName.Text()
      }
      if exported != expected.exported[index] || specifier.Name().Text() != expected.local[index] || specifier.IsTypeOnly {
        t.Fatalf("module %s binding %d: expected %s as %s", expectedModules[expected.index], index, expected.exported[index], expected.local[index])
      }
    }
  }
  ranks := []struct {
    file string
    rank int
  }{
    {"typia/lib/internal/_isString", 100},
    {"typia/lib/internal/_assertGuard", 150},
    {"typia/lib/internal/_randomFormatUuid", 200},
    {"typia/lib/internal/_randomString", 210},
    {"typia/lib/internal/_randomInteger", 220},
    {"typia/lib/internal/_randomNumber", 221},
    {"typia/lib/internal/_randomPick", 230},
    {"typia/lib/internal/_validateReport", 800},
    {"typia/lib/internal/_createStandardSchema", 900},
    {"typia/lib/internal/_unknown", 500},
    {"external", 10_000},
  }
  for _, r := range ranks {
    if actual := importProgrammer_fileRank(r.file); actual != r.rank {
      t.Fatalf("rank mismatch for %s: expected %d, got %d", r.file, r.rank, actual)
    }
  }
}
