package helpers

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

// TestFunctionProgrammerKeepsHelperDeclarationNamesUnique verifies helper
// declarations share one name space.
//
// Object-property helpers and array-like union helpers can use related prefixes
// inside the same generated validator. They must never reserve the same `const`
// name, even when their deduplication keys are different.
//
// @evidence contracts/testing.md#behavioral-verification Object-property and array-like union helper names are registered in one function programmer and must never repeat; the same union key must deduplicate to its first name.
// @evidence contracts/testing.md#independent-expectations Uniqueness of declared const names is a language requirement for the generated scope, so the check compares names against each other and not against a snapshot.
// @evidence contracts/testing.md#distinguishing-cases Distinct keys with related prefixes and a repeated key separate collision avoidance from deduplication.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the programmer in memory with no checker, filesystem fixture or process.
func TestFunctionProgrammerKeepsHelperDeclarationNamesUnique(t *testing.T) {
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  functor := NewFunctionProgrammer("typia.createIs")

  functor.EmplaceVariableByKey("_ip", "property:x", func(string) *shimast.Expression {
    return factory.NewIdentifier("input => true")
  })
  union := functor.EmplaceUnion("_i", "[string, string] | number[]", func() *shimast.Node {
    return factory.NewIdentifier("input => true")
  })
  functor.EmplaceVariable(union, factory.NewIdentifier("input => false"))
  functor.EmplaceVariableByKey("_ip", "property:y", func(string) *shimast.Expression {
    return factory.NewIdentifier("input => true")
  })

  names := map[string]string{}
  for _, name := range functor.variableOrder_ {
    if previous, ok := names[name]; ok {
      t.Fatalf("variable helper %q duplicates %s", name, previous)
    }
    names[name] = "variable"
  }
  for _, key := range functor.unionOrder_ {
    name := functor.unions_[key].name
    if previous, ok := names[name]; ok {
      t.Fatalf("union helper %q duplicates %s", name, previous)
    }
    names[name] = "union"
  }
  if union == "_ip0" {
    t.Fatal("union helper reused the first object-property helper name")
  }

  again := functor.EmplaceUnion("_i", "[string, string] | number[]", func() *shimast.Node {
    return factory.NewIdentifier("input => false")
  })
  if again != union {
    t.Fatalf("same union key was not deduplicated: got %q want %q", again, union)
  }
}
