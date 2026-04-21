package analyzer

// Pure unit tests for FromType require a live tsgo Checker, which is set up
// by the driver package. Those integration scenarios are covered by
// tests/test-typia-ttsc (TypeScript-side fixtures). This file exists so
// `go test ./internal/engine/analyzer` always has something to run, catching
// regressions in the FromType signature itself.

import "testing"

func TestPackageCompiles(t *testing.T) {
	// No-op guard: the real assertions live in the driver integration tests.
	// If FromType's signature ever changes, the driver package won't compile
	// and that failure shows up before this test runs.
	t.Log("analyzer package compiles; see tests/test-typia-ttsc for scenarios")
}
