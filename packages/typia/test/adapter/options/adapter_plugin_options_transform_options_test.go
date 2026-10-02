package typia_test

import (
  "testing"

  typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestAdapterPluginOptionsTransformOptions verifies plugin option projection.
//
// The ttsc plugin exposes a small Boolean option surface, while native typia
// expects pointer-valued transform options. Enabled flags must become true
// pointers, disabled flags must stay nil, `undefined` must preserve explicit
// false, and runtime must remain fixed to `typia`.
//
// 1. Project plugin options with two enabled flags and two disabled flags.
// 2. Assert enabled flags become non-nil true pointers.
// 3. Assert disabled non-undefined flags remain nil.
// 4. Assert explicit undefined=false remains a false pointer.
// 5. Assert runtime is pinned to the typia runtime package name.
//
// @evidence contracts/testing.md#behavioral-verification The plugin option projection runs with two enabled and two disabled flags and an explicit undefined false; pointer values and the fixed runtime are asserted.
// @evidence contracts/testing.md#independent-expectations The ttsc option surface and the pointer-valued native options are specified by the adapter contract; expected pointers and the typia runtime are authored.
// @evidence contracts/testing.md#distinguishing-cases Enabled flags, disabled flags and the explicit-false exception are separate decisions; omitted undefined is not asserted here.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported projection with constructed options and no filesystem fixture, process or native command build.
func TestAdapterPluginOptionsTransformOptions(t *testing.T) {
  disabled := false
  options := typiaadapter.PluginOptions{
    Functional: true,
    Numeric:    false,
    Finite:     true,
    Undefined:  &disabled,
  }.TransformOptions()

  if options.Functional == nil || *options.Functional == false {
    t.Fatalf("functional flag should be projected as true pointer: %#v", options.Functional)
  }
  if options.Finite == nil || *options.Finite == false {
    t.Fatalf("finite flag should be projected as true pointer: %#v", options.Finite)
  }
  if options.Numeric != nil {
    t.Fatalf("disabled numeric flag should stay nil: %#v", options.Numeric)
  }
  if options.Undefined == nil || *options.Undefined {
    t.Fatalf("explicit undefined=false should be preserved: %#v", options.Undefined)
  }
  if options.Runtime != "typia" {
    t.Fatalf("runtime should be typia: %q", options.Runtime)
  }
}
