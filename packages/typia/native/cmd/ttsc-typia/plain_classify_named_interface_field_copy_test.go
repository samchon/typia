package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyNamedInterfaceFieldCopy verifies interface data without nonexistent interface prototypes.
//
// Interfaces have no runtime constructor/prototype value; their data is copied as structural objects while an enclosing concrete class keeps its real prototype.
//
// 1. A named structural interface nested in a concrete class contrasts nonexistent and actual runtime prototype identities.
// 2. The emit forbids Object.create(Animal.prototype) while retaining Object.create(Zoo.prototype).
//
// @evidence contracts/testing.md#behavioral-verification The emit forbids Object.create(Animal.prototype) while retaining Object.create(Zoo.prototype).
// @evidence contracts/testing.md#independent-expectations Interfaces have no runtime constructor/prototype value; their data is copied as structural objects while an enclosing concrete class keeps its real prototype.
// @evidence contracts/testing.md#distinguishing-cases A named structural interface nested in a concrete class contrasts nonexistent and actual runtime prototype identities.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyNamedInterfaceFieldCopy as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyNamedInterfaceFieldCopy(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-iface-", plainClassifyInterfaceSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{"--cwd", project, "--tsconfig", "tsconfig.json", "--file", "src/main.ts", "--output", "js"})
  })
  if code != 0 {
    t.Fatalf("named-interface field transform failed: code=%d\n%s", code, errText)
  }
  if strings.Contains(out, "Object.create(Animal.prototype)") {
    t.Fatalf("a named interface must NOT be field-copied via Object.create(Animal.prototype):\n%s", out)
  }
  if !strings.Contains(out, "Object.create(Zoo.prototype)") {
    t.Fatalf("the enclosing class should still field-copy onto Zoo.prototype:\n%s", out)
  }
}
