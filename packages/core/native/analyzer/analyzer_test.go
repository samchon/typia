package analyzer

// Pure unit tests for FromType require a live tsgo Checker, which is set up
// by the driver package. Those integration scenarios are covered by
// toolchain-tests/test-typia-ttsc (TypeScript-side fixtures). This file exists so
// `go test ./analyzer` always has something to run, catching
// regressions in the FromType signature itself.

import "testing"

func TestPackageCompiles(t *testing.T) {
	// No-op guard: the real assertions live in the driver integration tests.
	// If FromType's signature ever changes, the driver package won't compile
	// and that failure shows up before this test runs.
	t.Log("analyzer package compiles; see toolchain-tests/test-typia-ttsc for scenarios")
}

func TestTemplateLiteralSourceValue(t *testing.T) {
	got, ok := templateLiteralSourceValue("`^(?:25[0-5]|[01]?[0-9][0-9]?)$`")
	if !ok {
		t.Fatalf("expected template literal source to parse")
	}
	if got != "^(?:25[0-5]|[01]?[0-9][0-9]?)$" {
		t.Fatalf("unexpected parsed template literal source: %q", got)
	}
	if _, ok := templateLiteralSourceValue("`${IPv4Pattern}`"); ok {
		t.Fatalf("template literal type with interpolation must not be treated as a literal tag value")
	}
}

func TestLiteralNodeValueNoSubstitutionTemplateHandledBySourceParser(t *testing.T) {
	got, ok := templateLiteralSourceValue("`^[a-z]+$`")
	if !ok || got != "^[a-z]+$" {
		t.Fatalf("expected no-substitution template source to round-trip, got %q ok=%v", got, ok)
	}
}
