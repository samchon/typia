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
  if !strings.Contains(out, "Ann.from(") || !strings.Contains(out, "new Bob(") {
    t.Fatalf("the validated union should construct both from- (Ann.from) and new- (new Bob) members:\n%s", out)
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

// TestPlainClassifyNestedValidatedUnion exercises a VALIDATED class union whose
// members carry a NESTED object-union — the discrimination of that nested union
// must reference classify's own _yi helpers (emitted from the classify
// collection), not the assert side's _io (a SEPARATE GetUnionType collection
// that dedups/reorders), or it would `ReferenceError: _io<n> is not defined`.
func TestPlainClassifyNestedValidatedUnion(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-nested-vunion-", plainClassifyNestedVUnionSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("nested validated-union transform failed: code=%d\n%s", code, errText)
  }
  plainClassifyRunNode(t, project, out, plainClassifyNestedVUnionRunner)
}

const plainClassifyNestedVUnionSource = `import typia from "typia";

// Two discriminable classes (by ` + "`kind`" + `) that SHARE a nested object-union
// payload. classify's discrimination of that nested { k1 } | { k2 } union, in the
// VALIDATED path, must use its own _yi helpers — the assert side analyzes the
// seeds through GetUnionType (which dedups the shared payload), so an _i index
// would diverge.
export class Holder {
  kind!: "holder";
  payload!: { k1: string } | { k2: number };
  constructor(seed: { kind: "holder"; payload: { k1: string } | { k2: number } }) {
    this.kind = seed.kind;
    this.payload = seed.payload;
  }
  describe(): string {
    return "holder:" + JSON.stringify(this.payload);
  }
}
export class Twin {
  kind!: "twin";
  payload!: { k1: string } | { k2: number };
  constructor(seed: { kind: "twin"; payload: { k1: string } | { k2: number } }) {
    this.kind = seed.kind;
    this.payload = seed.payload;
  }
  describe(): string {
    return "twin:" + JSON.stringify(this.payload);
  }
}

export const assertShape = typia.plain.createAssertClassify<typeof Holder | typeof Twin>();
export const validateShape = typia.plain.createValidateClassify<typeof Holder | typeof Twin>();
`

const plainClassifyNestedVUnionRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// nested object-union discrimination must not ReferenceError and builds the right class
const h = mod.assertShape({ kind: "holder", payload: { k1: "x" } });
assert(h instanceof mod.Holder, "kind holder -> Holder, got: " + (h && h.constructor && h.constructor.name));
assert(h.describe() === 'holder:{"k1":"x"}', "Holder payload k1, got: " + h.describe());

const tw = mod.assertShape({ kind: "twin", payload: { k2: 5 } });
assert(tw instanceof mod.Twin, "kind twin -> Twin, got: " + (tw && tw.constructor && tw.constructor.name));
assert(tw.describe() === 'twin:{"k2":5}', "Twin payload k2, got: " + tw.describe());

const r = mod.validateShape({ kind: "holder", payload: { k2: 9 } });
assert(r.success === true, "validateClassify success, got: " + JSON.stringify(r.errors));
assert(r.data instanceof mod.Holder && r.data.describe() === 'holder:{"k2":9}', "validate builds Holder with k2 payload");
`
