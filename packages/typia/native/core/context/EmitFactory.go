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
//
// @evidence contracts/common.md#principled-implementation A live emit context returns its embedded node factory, whose hooks give created nodes original-node links and emit metadata, and otherwise the caller's standalone factory is returned unchanged; both print the same tokens.
// @evidence contracts/common.md#clear-and-simple-design One conditional that replaces the same branch repeated in every node-creating helper.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The fallback is the supported analysis and test path and not a workaround for a missing context.
// @evidence contracts/common.md#meaningful-documentation The doc states both outcomes and why the emit factory is preferred.
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
//
// @evidence contracts/common.md#principled-implementation The variadic form selects the first emit context when it is present and non-nil and otherwise the fallback, so helpers can receive the context as an optional trailing argument.
// @evidence contracts/common.md#clear-and-simple-design One conditional over a slice, used by free helpers that cannot hold a receiver.
// @evidence contracts/common.md#prohibited-implementation-shortcuts It does not mutate its inputs.
// @evidence contracts/common.md#meaningful-documentation The doc explains the optional parameter and the progressive threading of the context.
func EmitFactoryOf(fallback *shimast.NodeFactory, emit ...*shimprinter.EmitContext) *shimast.NodeFactory {
  if len(emit) != 0 && emit[0] != nil {
    return &emit[0].Factory.NodeFactory
  }
  return fallback
}
