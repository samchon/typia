//go:build typia_native_internal
// +build typia_native_internal

package main

import "testing"

// TestDemoRejectsBadFlag verifies demo flag parsing returns usage failure.
//
// The demo command currently accepts no flags, so malformed arguments must stop
// inside the demo flag set. This keeps the route distinct from the successful
// demo smoke path.
//
// 1. Invoke the command dispatcher with the demo label.
// 2. Pass an unsupported flag to the demo flag set.
// 3. Capture command output.
// 4. Assert the command reports usage status 2.
func TestDemoRejectsBadFlag(t *testing.T) {
	_, errText, code := transformCoverageCapture(func() int {
		return run([]string{"demo", "--bad"})
	})
	if code != 2 {
		t.Fatalf("demo bad flag should fail with status 2, got %d stderr=%s", code, errText)
	}
}
