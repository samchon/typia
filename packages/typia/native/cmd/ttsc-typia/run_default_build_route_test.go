//go:build typia_native_internal
// +build typia_native_internal

package main

import "testing"

// TestRunDefaultBuildRoute checks the authored operation results described below.
//
// The command public default is build; omitting a verb cannot select transform/demo or reject ordinary build inputs.
//
// 1. The implicit-verb call complements explicit route and invalid-flag cases.
// 2. Calling run without an explicit verb succeeds on a valid source through the build route.
//
// @evidence contracts/testing.md#behavioral-verification Calling run without an explicit verb succeeds on a valid source through the build route.
// @evidence contracts/testing.md#independent-expectations The command public default is build; omitting a verb cannot select transform/demo or reject ordinary build inputs.
// @evidence contracts/testing.md#distinguishing-cases The implicit-verb call complements explicit route and invalid-flag cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestRunDefaultBuildRoute as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestRunDefaultBuildRoute(t *testing.T) {
  project := transformCoverageProject(t, "run-default", "export const value = 1;\n")
  _, errText, code := transformCoverageCapture(func() int {
    return run([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--noEmit",
      "--rewrite-mode", "none",
    })
  })
  if code != 0 {
    t.Fatalf("default build route failed: code=%d stderr=%s", code, errText)
  }
}
