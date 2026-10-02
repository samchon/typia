//go:build typia_native_internal
// +build typia_native_internal

package main

import "testing"

// TestDemoRejectsBadFlag checks the authored operation results described below.
//
// The demo command has a closed flag parser; unrecognized options are usage failures rather than silently accepted work.
//
// 1. A single unsupported flag owns the usage-rejection branch; ordinary route/default handling is tested separately.
// 2. The demo route rejects its unsupported flag with status two.
//
// @evidence contracts/testing.md#behavioral-verification The demo route rejects its unsupported flag with status two.
// @evidence contracts/testing.md#independent-expectations The demo command has a closed flag parser; unrecognized options are usage failures rather than silently accepted work.
// @evidence contracts/testing.md#distinguishing-cases A single unsupported flag owns the usage-rejection branch; ordinary route/default handling is tested separately.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestDemoRejectsBadFlag as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestDemoRejectsBadFlag(t *testing.T) {
  _, errText, code := transformCoverageCapture(func() int {
    return run([]string{"demo", "--bad"})
  })
  if code != 2 {
    t.Fatalf("demo bad flag should fail with status 2, got %d stderr=%s", code, errText)
  }
}
