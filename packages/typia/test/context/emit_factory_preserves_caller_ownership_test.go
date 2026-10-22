package typia_test

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TestEmitFactoryPreservesCallerOwnership verifies explicit fallback selectors
// preserve the caller's arena and prefer the first live emit context.
//
// Native consumers can supply a factory with their own hooks. Replacing or
// removing these selectors breaks that ownership contract even when typia's
// own standalone construction has moved to fresh factories.
//
// 1. Select two independently supplied fallbacks without a live first context.
// 2. Require a live first context's exact factory through both public selectors.
// 3. Check omitted, nil and later-context boundaries without allocating a fallback.
//
// @evidence contracts/testing.md#behavioral-verification Calls both exported fallback selectors from a separate consumer package and compares exact supplied factory identities. Missing exports fail consumer compilation; replacement arenas, reversed priority or retained fallback state fail the runtime assertions.
// @evidence contracts/testing.md#independent-expectations The existing explicit-fallback API returns the caller's supplied arena when the first context is absent or nil, and the first live context's embedded arena otherwise. These identities preserve caller hooks independently of generated output.
// @evidence contracts/testing.md#distinguishing-cases Separate fallback instances, omitted and explicit nil contexts, nil fallback, live first context and nil-first/live-second distinguish caller ownership, first-context priority and the absence of hidden allocation. NodeFactoryOwnership separately verifies fresh standalone allocation through NodeFactoryOf.
// @evidence contracts/testing.md#execution-ownership The public Go population and test:go:7.1 discover this black-box Test function. It uses in-memory compiler factories and calls the exported selectors without a fixture, host build or subprocess.
func TestEmitFactoryPreservesCallerOwnership(t *testing.T) {
  first := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  second := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  live := shimprinter.NewEmitContext()
  for _, fallback := range []*shimast.NodeFactory{first, second, nil} {
    if nativecontext.EmitFactory(nil, fallback) != fallback ||
      nativecontext.EmitFactoryOf(fallback) != fallback ||
      nativecontext.EmitFactoryOf(fallback, nil) != fallback ||
      nativecontext.EmitFactoryOf(fallback, nil, live) != fallback {
      t.Fatal("explicit fallback identity or first-context priority changed")
    }
    if nativecontext.EmitFactory(live, fallback) != &live.Factory.NodeFactory ||
      nativecontext.EmitFactoryOf(fallback, live, nil) != &live.Factory.NodeFactory {
      t.Fatal("live emit factory identity was lost")
    }
  }
}
