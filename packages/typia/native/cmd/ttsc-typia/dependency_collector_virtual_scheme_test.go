package main

import "testing"

// TestDependencyCollectorVirtualScheme verifies which dropped file still costs
// the current key its completeness declaration.
//
// The envelope reports no virtual URI source, because nothing can watch one. Two
// of them are not the same, though: `driver.NewTransformGraph` skips exactly
// `bundled:///`, so a bundled library is absent from the host-owned bound too
// and dropping it changes nothing, while a file under any other scheme is still
// a member of that bound. Narrowing to a list that cannot name it would stop
// watching an input the default bound watches, so the file that consulted it
// stays undeclared (samchon/typia#2357).
//
// The case is a collector probe rather than a fixture because no tsconfig this
// repository can write makes the compiler serve a non-bundled virtual source;
// the branch is reachable only from the listener side.
//
//  1. Report a `bundled:///` library against one key and a foreign-scheme source
//     against another.
//  2. Render both sections.
//  3. Assert neither file reached `dependencies`.
//  4. Assert only the foreign-scheme key lost its completeness declaration.
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
