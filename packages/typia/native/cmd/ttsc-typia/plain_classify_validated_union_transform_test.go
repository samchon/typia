package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyValidatedUnionTransform stresses the VALIDATED class-type
// union: the construction ladder in assert/validateClassify must reference its
// OWN is-check helpers (emitted from the classify collection), NOT the __assert
// side's helpers — whose collection (built over GetUnionType(seeds)) may dedup or
// reorder the members, so a shared index would diverge (ReferenceError / wrong
// class). Several members with distinct seeds, a mix of from/new, and an
// interleaved primitive, under BOTH createAssertClassify and createValidateClassify.
func TestPlainClassifyValidatedUnionTransform(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-vunion-", plainClassifyValidatedUnionSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify validated-union transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, ".from(") || !strings.Contains(out, "new ") {
    t.Fatalf("the validated union should construct both from- and new-members:\n%s", out)
  }
  plainClassifyValidatedUnionRun(t, project, out)
}

func plainClassifyValidatedUnionRun(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  if err := os.WriteFile(filepath.Join(runtimeDir, "generic-internal-stub.cjs"), []byte(plainClassifyFromNewGenericStub), 0o644); err != nil {
    t.Fatalf("write generic stub: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(plainClassifyFromNewRewrite(t, js)), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(plainClassifyValidatedUnionRunner), 0o644); err != nil {
    t.Fatalf("write runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("classify validated-union runtime cases failed: %v\n%s", err, output)
  }
}

const plainClassifyValidatedUnionSource = `import typia from "typia";

// from-strategy member, seed { a }
export class Ann {
  a!: number;
  private constructor(a: number) {
    this.a = a;
  }
  static from(seed: { a: number }): Ann {
    return new Ann(seed.a);
  }
  tag(): string {
    return "ann:" + this.a;
  }
}

// new-strategy member, seed { b }
export class Bob {
  b!: string;
  constructor(seed: { b: string }) {
    this.b = seed.b;
  }
  tag(): string {
    return "bob:" + this.b;
  }
}

// new-strategy member, seed { c } — distinct required key
export class Cal {
  c!: boolean;
  constructor(seed: { c: boolean }) {
    this.c = seed.c;
  }
  tag(): string {
    return "cal:" + this.c;
  }
}

export const assertShape = typia.plain.createAssertClassify<typeof Ann | typeof Bob | typeof Cal | number>();
export const validateShape = typia.plain.createValidateClassify<typeof Ann | typeof Bob | typeof Cal>();
`

const plainClassifyValidatedUnionRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// assertClassify discriminates each member of the validated union and builds the
// RIGHT class — its construction ladder must use its own _yi helpers, not the
// assert side's (possibly reordered) _io helpers.
const an = mod.assertShape({ a: 1 });
assert(an instanceof mod.Ann, "seed {a} -> Ann (from), got: " + (an && an.constructor && an.constructor.name));
assert(an.tag() === "ann:1", "Ann.from reconstruct, got: " + an.tag());

const bo = mod.assertShape({ b: "x" });
assert(bo instanceof mod.Bob, "seed {b} -> Bob (new), got: " + (bo && bo.constructor && bo.constructor.name));
assert(bo.tag() === "bob:x", "new Bob reconstruct");

const ca = mod.assertShape({ c: true });
assert(ca instanceof mod.Cal, "seed {c} -> Cal (new), got: " + (ca && ca.constructor && ca.constructor.name));
assert(ca.tag() === "cal:true", "new Cal reconstruct");

// the interleaved primitive passes through unchanged
assert(mod.assertShape(42) === 42, "a number must pass through the assert union unchanged");

// validateClassify of the same union returns success and the right instance
const r = mod.validateShape({ b: "y" });
assert(r.success === true, "validateClassify should succeed on a valid seed, got: " + JSON.stringify(r.errors));
assert(r.data instanceof mod.Bob, "validateClassify should build the Bob instance");
assert(r.data.tag() === "bob:y", "validateClassify reconstruct");
`
