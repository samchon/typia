package typia_test

import (
	"testing"

	helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
)

// TestFunctionProgrammerDisableDeclareHandlesNil verifies nil-safe disabling.
//
// Some generator paths receive an optional function programmer. Disabling
// declaration emission must therefore be nil-safe so callers can pass through a
// missing programmer without branching around the helper.
//
// 1. Pass nil into the declaration-disabling helper.
// 2. Assert the helper returns nil rather than allocating a programmer.
func TestFunctionProgrammerDisableDeclareHandlesNil(t *testing.T) {
	if helpers.Disable_function_programmer_declare(nil) != nil {
		t.Fatal("nil function programmer should stay nil")
	}
}
