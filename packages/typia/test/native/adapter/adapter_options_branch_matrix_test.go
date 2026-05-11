//go:build typia_native_internal
// +build typia_native_internal

package adapter

import (
	"errors"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
)

// TestAdapterOptionsBranchMatrix covers unsupported-reason and error formatting branches.
//
// The adapter reports unsupported calls before it asks the native transformer
// to emit replacement code. Module and JSON APIs intentionally allow a few
// non-generic calls, while other calls still require a type argument.
//
// 1. Build call expressions with and without type arguments.
// 2. Verify generic-free module and JSON methods stay supported.
// 3. Verify unrelated generic-free methods still explain the missing generic.
// 4. Verify transform-error formatting handles nil and root-module errors.
func TestAdapterOptionsBranchMatrix(t *testing.T) {
	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	call := factory.NewCallExpression(
		factory.NewIdentifier("is"),
		nil,
		nil,
		factory.NewNodeList(nil),
		shimast.NodeFlagsNone,
	).AsCallExpression()

	if reason := UnsupportedReason(CallSite{Call: call, Module: "module", Method: "is"}); reason != "" {
		t.Fatalf("module is() should not require a generic argument: %q", reason)
	}
	if reason := UnsupportedReason(CallSite{Call: call, Module: "json", Method: "stringify"}); reason != "" {
		t.Fatalf("json.stringify() should not require a generic argument: %q", reason)
	}
	if reason := UnsupportedReason(CallSite{Call: call, Module: "misc", Method: "clone"}); reason != "generic argument is not specified." {
		t.Fatalf("unexpected generic-free rejection reason: %q", reason)
	}

	withType := factory.NewCallExpression(
		factory.NewIdentifier("is"),
		nil,
		factory.NewNodeList([]*shimast.Node{
			factory.NewTypeReferenceNode(factory.NewIdentifier("string"), nil),
		}),
		factory.NewNodeList(nil),
		shimast.NodeFlagsNone,
	).AsCallExpression()
	if reason := UnsupportedReason(CallSite{Call: withType, Method: "is"}); reason != "" {
		t.Fatalf("generic call should be supported: %q", reason)
	}
	if text := FormatTransformError(CallSite{Method: "is"}, nil); text != "" {
		t.Fatalf("nil transform error should format to empty text: %q", text)
	}
	if text := FormatTransformError(CallSite{Method: "is"}, errors.New("boom")); text != "error TS(typia.is): boom" {
		t.Fatalf("unexpected root transform error text: %q", text)
	}
}
