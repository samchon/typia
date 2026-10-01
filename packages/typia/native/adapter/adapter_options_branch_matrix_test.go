//go:build typia_native_internal
// +build typia_native_internal

package adapter

import "testing"

// TestAdapterOptionsBranchMatrix covers plugin option conversion branches.
//
// The public adapter keeps false booleans as nil so absent options remain
// indistinguishable from explicitly disabled flags, while true values and the
// tri-state undefined option must be forwarded to the native transform.
//
// 1. Convert zero-value options and verify false fields remain nil.
// 2. Convert true options and verify each boolean pointer is populated.
// 3. Preserve an explicitly supplied undefined pointer.
// 4. Exercise boolPointer directly for both branches.
//
// @evidence contracts/testing.md#behavioral-verification The adapter option conversion is called on zero-value options and on enabled options; false flags must stay nil and enabled values and the tri-state undefined option must be forwarded.
// @evidence contracts/testing.md#independent-expectations The adapter contract (false is indistinguishable from absent, true and the tri-state undefined are forwarded) supplies the authored expectations.
// @evidence contracts/testing.md#distinguishing-cases Zero options and enabled options are the two rows; individual flag combinations are owned by the public adapter options test.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test calls the exported conversion in memory with no filesystem fixture, process or native command build.
func TestAdapterOptionsBranchMatrix(t *testing.T) {
	zero := PluginOptions{}.TransformOptions()
	if zero.Runtime != "typia" ||
		zero.Finite != nil ||
		zero.Numeric != nil ||
		zero.Functional != nil ||
		zero.Undefined != nil {
		t.Fatalf("zero plugin options should keep false flags nil: %#v", zero)
	}

	undefined := false
	enabled := PluginOptions{
		Functional: true,
		Numeric:    true,
		Finite:     true,
		Undefined:  &undefined,
	}.TransformOptions()
	if enabled.Runtime != "typia" ||
		enabled.Finite == nil ||
		enabled.Numeric == nil ||
		enabled.Functional == nil ||
		enabled.Undefined != &undefined {
		t.Fatalf("enabled plugin options were not forwarded: %#v", enabled)
	}
	if *enabled.Finite != true ||
		*enabled.Numeric != true ||
		*enabled.Functional != true ||
		*enabled.Undefined != false {
		t.Fatalf("enabled plugin option values changed: %#v", enabled)
	}
	if boolPointer(false) != nil {
		t.Fatal("false option should not allocate a pointer")
	}
	if value := boolPointer(true); value == nil || *value != true {
		t.Fatal("true option should allocate a true pointer")
	}
}
