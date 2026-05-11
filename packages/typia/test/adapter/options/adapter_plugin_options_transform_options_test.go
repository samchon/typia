package typia_test

import (
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestAdapterPluginOptionsTransformOptions verifies plugin option projection.
//
// The ttsc plugin exposes a small Boolean option surface, while native typia
// expects pointer-valued transform options. Enabled flags must become true
// pointers, disabled flags must stay nil, and runtime must remain fixed to
// `typia`.
//
// 1. Project plugin options with two enabled flags and two disabled flags.
// 2. Assert enabled flags become non-nil true pointers.
// 3. Assert disabled flags remain nil.
// 4. Assert runtime is pinned to the typia runtime package name.
func TestAdapterPluginOptionsTransformOptions(t *testing.T) {
	options := typiaadapter.PluginOptions{
		Functional: true,
		Numeric:    false,
		Finite:     true,
		Undefined:  false,
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
	if options.Undefined != nil {
		t.Fatalf("disabled undefined flag should stay nil: %#v", options.Undefined)
	}
	if options.Runtime != "typia" {
		t.Fatalf("runtime should be typia: %q", options.Runtime)
	}
}
