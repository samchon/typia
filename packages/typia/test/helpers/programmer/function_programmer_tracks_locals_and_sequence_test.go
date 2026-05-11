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
