package context

import (
  "testing"

  shimprinter "github.com/microsoft/typescript-go/shim/printer"
)

// TestNodeFactoryOwnership verifies standalone arenas are independent while a
// live first emit context preserves its compiler factory identity.
//
// A shared no-context fallback races even when all live contexts are distinct.
// Allocating separately also prevents a later standalone caller from changing
// nodes retained by an earlier caller.
//
// 1. Select factories with omitted and explicit nil contexts and compare identity.
// 2. Select a live context twice and require its embedded factory both times.
// 3. Allocate distinct identifiers and require the earlier identifier to survive.
//
// @evidence contracts/testing.md#behavioral-verification Calls NodeFactoryOf with absent, nil and live contexts, asserts independent fallback pointer identities and exact live factory identity, then checks identifier text survives allocations in the other factories.
// @evidence contracts/testing.md#independent-expectations The ownership contract requires no arena sharing across independent standalone requests and requires live compiler factory identity to retain emit hooks. Authored identifier strings supply the content oracle.
// @evidence contracts/testing.md#distinguishing-cases Omitted, explicit nil, repeated live and nil-first-with-live-second contexts distinguish first-argument selection and fallback independence; a different context must select a different live factory.
// @evidence contracts/testing.md#execution-ownership Go's native unit population discovers this same-package resolver test through test:go:native and test:go:7.1. It uses real in-memory compiler factories and starts no process or installed consumer.
func TestNodeFactoryOwnership(t *testing.T) {
  first, second := NodeFactoryOf(), NodeFactoryOf(nil)
  live := shimprinter.NewEmitContext()
  third := NodeFactoryOf(nil, live)
  if first == second || first == third || second == third { t.Fatal("standalone callers share a mutable arena") }
  if NodeFactoryOf(live) != &live.Factory.NodeFactory || NodeFactoryOf(live) != NodeFactoryOf(live) { t.Fatal("live emit factory identity was lost") }
  if NodeFactoryOf(live) == NodeFactoryOf(shimprinter.NewEmitContext()) { t.Fatal("independent emit contexts share a factory") }
  original := first.NewIdentifier("first")
  for range 1024 { second.NewIdentifier("second"); third.NewIdentifier("third") }
  if original.Text() != "first" { t.Fatalf("standalone allocation corrupted retained text: %s", original.Text()) }
}
