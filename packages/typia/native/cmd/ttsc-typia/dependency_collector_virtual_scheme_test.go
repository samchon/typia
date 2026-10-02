package main

import "testing"

// TestDependencyCollectorVirtualScheme checks the authored operation results described below.
//
// Bundled compiler URIs are host-excluded immutable inputs, while a foreign scheme cannot be represented as a watchable filesystem path and therefore cannot promise a bounded dependency set.
//
// 1. Bundled and foreign URI schemes are contrasted directly without fixture installation or transform preparation.
// 2. Virtual sources produce no watch dependencies; bundled library touches preserve completeness while a foreign virtual URI withholds it.
//
// @evidence contracts/testing.md#behavioral-verification Virtual sources produce no watch dependencies; bundled library touches preserve completeness while a foreign virtual URI withholds it.
// @evidence contracts/testing.md#independent-expectations Bundled compiler URIs are host-excluded immutable inputs, while a foreign scheme cannot be represented as a watchable filesystem path and therefore cannot promise a bounded dependency set.
// @evidence contracts/testing.md#distinguishing-cases Bundled and foreign URI schemes are contrasted directly without fixture installation or transform preparation.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestDependencyCollectorVirtualScheme as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestDependencyCollectorVirtualScheme(t *testing.T) {
  collector := newTransformDependencyCollector("D:/project", func(string) bool { return false })

  collector.Begin("src/bundled.ts")
  collector.Touch("bundled:///lib.es5.d.ts")
  collector.End()

  collector.Begin("src/foreign.ts")
  collector.Touch("vfs://memory/generated.d.ts")
  collector.End()

  if reported := collector.ToJSON(); reported != nil {
    t.Fatalf("a virtual URI source is unwatchable and must never reach dependencies: %v", reported)
  }
  declared := map[string]bool{}
  for _, key := range collector.ToCompleteJSON(map[string]string{
    "src/bundled.ts": "",
    "src/foreign.ts": "",
  }) {
    declared[key] = true
  }
  if !declared["src/bundled.ts"] {
    t.Fatalf("the host graph drops bundled libraries too, so dropping one costs no declaration: %v", declared)
  }
  if declared["src/foreign.ts"] {
    t.Fatalf("the host graph keeps a foreign scheme, so a file that consulted one must be withheld: %v", declared)
  }
}
