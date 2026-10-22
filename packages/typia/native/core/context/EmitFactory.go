package context

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

// EmitFactory selects a live emit context's factory or the caller's explicit
// standalone fallback. Returning the same instance preserves its compiler or
// caller-installed hooks. A nil fallback remains nil when no context is supplied.
//
// The caller owns the fallback and must confine its mutable arena to its own
// construction lifetime. This selector retains no factory; callers that need a
// fresh standalone arena can use NodeFactoryOf instead.
//
// @evidence contracts/common.md#principled-implementation A live context returns its embedded factory to retain compiler emit hooks. Otherwise the exact supplied fallback, including nil, is returned so caller ownership and custom hooks remain intact; the selector allocates and retains no arena.
// @evidence contracts/common.md#clear-and-simple-design One conditional implements the explicit-fallback selection contract used by native consumers, separately from NodeFactoryOf's fresh-allocation contract.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Selection uses the public compiler factory boundary without foreign mutation, shared state or serialization. The fallback is caller-owned; typia's own context-free construction uses fresh factories through NodeFactoryOf.
// @evidence contracts/common.md#meaningful-documentation The comment states selection priority, nil behavior, hook preservation and the caller's arena ownership responsibility.
func EmitFactory(ec *shimprinter.EmitContext, fallback *shimast.NodeFactory) *shimast.NodeFactory {
  if ec != nil {
    return &ec.Factory.NodeFactory
  }
  return fallback
}

// EmitFactoryOf selects the first optional context through EmitFactory.
// An omitted or nil first context selects the caller's fallback even when a
// later context is live; no factory is allocated or retained by the selector.
//
// @evidence contracts/common.md#principled-implementation Only the first optional context participates, preserving the existing variadic consumer contract. EmitFactory owns the same live-context versus caller-fallback decision for both entry forms.
// @evidence contracts/common.md#clear-and-simple-design A slice-presence check adapts optional arguments to the scalar selector without duplicating its factory selection.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The adapter changes neither the caller's factory nor its context and stores no shared mutable arena.
// @evidence contracts/common.md#meaningful-documentation The comment explains omitted, nil-first and later-context behavior and makes the absence of allocation and retained state explicit.
func EmitFactoryOf(fallback *shimast.NodeFactory, emit ...*shimprinter.EmitContext) *shimast.NodeFactory {
  if len(emit) == 0 {
    return EmitFactory(nil, fallback)
  }
  return EmitFactory(emit[0], fallback)
}
