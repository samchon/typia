package context

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

// EmitFactory resolves the node factory a node-creating helper should use.
//
// When an emit EmitContext is present (emit stage / AST-integration mode) its
// Factory is returned so every created node carries original-node tracking and
// emit metadata (parent links, comments, source maps, const-enum constants,
// namespace alias) that the tsgo emit pipeline relies on. When ec is nil (legacy
// text emit, analysis-only or test paths) the caller's standalone fallback
// factory is returned unchanged.
//
// This is the single-resolver form of ImportProgrammer's `if p.emit_ != nil`
// branch: the embedded ast.NodeFactory inside printer.NodeFactory carries the
// emit hooks, so &ec.Factory.NodeFactory produces metadata-bearing nodes while
// printing identically to the fallback (token text/structure unchanged).
func EmitFactory(ec *shimprinter.EmitContext, fallback *shimast.NodeFactory) *shimast.NodeFactory {
  if ec != nil {
    return &ec.Factory.NodeFactory
  }
  return fallback
}

// EmitFactoryOf is the variadic form for node-creating free helpers and shared
// static factories that receive the emit context through an optional `emit
// ...*EmitContext` parameter. Passing no context (or a nil one) selects the
// standalone fallback, which is the legacy / analysis-only / test path; passing
// a live context routes creation through ec.Factory. This lets call sites thread
// the real context in progressively while the build stays green at every step.
func EmitFactoryOf(fallback *shimast.NodeFactory, emit ...*shimprinter.EmitContext) *shimast.NodeFactory {
  if len(emit) != 0 && emit[0] != nil {
    return &emit[0].Factory.NodeFactory
  }
  return fallback
}
