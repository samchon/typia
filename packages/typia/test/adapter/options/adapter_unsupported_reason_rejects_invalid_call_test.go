package typia_test

import (
	"testing"

	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

// TestAdapterUnsupportedReasonRejectsInvalidCall verifies invalid-site messaging.
//
// Unsupported-reason reporting is used when the bridge recognizes a candidate
// transform site but cannot safely emit native replacement code. A missing call
// expression is the hard invalid input case and should return a concrete reason.
//
// 1. Build a call site without a call expression.
// 2. Ask the adapter why it is unsupported.
// 3. Assert the reason identifies the invalid call expression.
func TestAdapterUnsupportedReasonRejectsInvalidCall(t *testing.T) {
	reason := typiaadapter.UnsupportedReason(typiaadapter.CallSite{})
	if reason != "invalid call expression" {
		t.Fatalf("unexpected unsupported reason: %q", reason)
	}
}
