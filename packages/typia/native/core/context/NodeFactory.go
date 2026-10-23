package context

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

// NodeFactoryOf returns the first emit context's factory, or a fresh standalone
// factory when that context is absent or nil. Standalone callers own the factory
// and its nodes; no mutable arena is shared between independent calls.
//
// An emit factory retains the compiler's original-node and parent metadata.
// Helpers should forward their context throughout a transform. A standalone
// factory has no emit hooks and serves analysis and context-free construction.
//
// @evidence contracts/common.md#principled-implementation A live first context returns its embedded node factory, whose hooks maintain emit provenance. Otherwise the supported ast constructor supplies a new arena owned by this caller, so independent Programs cannot race through a fallback factory.
// @evidence contracts/common.md#clear-and-simple-design One resolver owns both optional-context selection and standalone allocation; node-building helpers retain no package-global factory.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The resolver uses the compiler's public factory boundary without modifying foreign state or serializing independent Programs. Missing contexts receive independent factories rather than a shared compensation.
// @evidence contracts/common.md#meaningful-documentation The comment distinguishes per-emit provenance from standalone construction and states ownership and nil behavior.
func NodeFactoryOf(emit ...*shimprinter.EmitContext) *shimast.NodeFactory {
  if len(emit) != 0 && emit[0] != nil {
    return &emit[0].Factory.NodeFactory
  }
  return shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
}
