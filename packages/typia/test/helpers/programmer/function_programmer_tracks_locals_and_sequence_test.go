package typia_test

import (
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

// TestFunctionProgrammerTracksLocalsAndSequence verifies state bookkeeping.
//
// Function programmers coordinate generated helper names and local-variable
// reuse across nested codegen paths. Their lightweight bookkeeping must remain
// deterministic because later AST statements depend on the same names.
//
// 1. Create a function programmer for one method.
// 2. Register a local name and assert it is remembered.
// 3. Assert an unused local name is absent.
// 4. Assert the sequence counter increments monotonically.
//
// @evidence contracts/testing.md#behavioral-verification A function programmer registers a local name and the lookup, an absent name and the sequence counter are asserted.
// @evidence contracts/testing.md#independent-expectations Remembering a registered name, not remembering an unregistered one and a counter starting at one are authored expectations of the bookkeeping contract.
// @evidence contracts/testing.md#distinguishing-cases Registered and unregistered names are the pair; sequence monotonicity is asserted for two calls only.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported programmer methods in memory with no filesystem fixture, process or native command build.
func TestFunctionProgrammerTracksLocalsAndSequence(t *testing.T) {
	programmer := helpers.NewFunctionProgrammer("is")

	if programmer.UseLocal("input") != "input" {
		t.Fatal("UseLocal should return the registered name")
	}
	if !programmer.HasLocal("input") {
		t.Fatal("registered local should be present")
	}
	if programmer.HasLocal("output") {
		t.Fatal("unregistered local should be absent")
	}
	if first, second := programmer.Increment(), programmer.Increment(); first != 1 || second != 2 {
		t.Fatalf("sequence should increment from one: first=%d second=%d", first, second)
	}
}
