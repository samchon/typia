package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyUnionTransform verifies that classify<typeof A | typeof B>
// DISCRIMINATES the input at runtime and constructs the RIGHT class per member:
// a `from` member and a `new` member in one union, a mixed typeof A | number
// (the number passes through), and assertClassify of a union validating the seed
// union rather than rejecting every valid seed.
func TestPlainClassifyUnionTransform(t *testing.T) {
  project := plainClassifyUnionProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify union transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, ".from(") {
    t.Fatalf("the union should construct the `from` member via Circle.from(seed):\n%s", out)
  }
  if !strings.Contains(out, "new ") {
    t.Fatalf("the union should construct the `new` member via new Square(seed):\n%s", out)
  }
  plainClassifyUnionRun(t, project, out)
}

func plainClassifyUnionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-classify-union-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainClassifyFromNewTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func plainClassifyUnionRun(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(plainClassifyUnionRunner), 0o644); err != nil {
    t.Fatalf("write runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("classify union runtime cases failed: %v\n%s", err, output)
  }
}

const plainClassifyUnionSource = `import typia from "typia";

// from-strategy member (private ctor + static factory), seed { r }
export class Circle {
  r!: number;
  private constructor(r: number) {
    this.r = r;
  }
  static from(seed: { r: number }): Circle {
    return new Circle(seed.r);
  }
  area(): number {
    return 3 * this.r * this.r;
  }
}

// new-strategy member, seed { side } — a distinct required key discriminates it
export class Square {
  side!: number;
  constructor(seed: { side: number }) {
    this.side = seed.side;
  }
  area(): number {
    return this.side * this.side;
  }
}

export const buildShape = typia.plain.createClassify<typeof Circle | typeof Square>();
export const buildShapeOrNum = typia.plain.createClassify<typeof Circle | number>();
export const assertShape = typia.plain.createAssertClassify<typeof Circle | typeof Square>();
`

const plainClassifyUnionRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// (1) discriminate the union: seed { r } builds the from-member Circle
const c = mod.buildShape({ r: 2 });
assert(c instanceof mod.Circle, "seed {r} should build a Circle (from), got: " + (c && c.constructor && c.constructor.name));
assert(c.area() === 12, "Circle.from seed should reconstruct (area), got: " + c.area());

// (2) seed { side } builds the new-member Square — the RIGHT class is chosen
const s = mod.buildShape({ side: 3 });
assert(s instanceof mod.Square, "seed {side} should build a Square (new), got: " + (s && s.constructor && s.constructor.name));
assert(s.area() === 9, "new Square seed should reconstruct, got: " + s.area());

// (3) mixed typeof Circle | number: the class is built, the number passes through
const c2 = mod.buildShapeOrNum({ r: 4 });
assert(c2 instanceof mod.Circle, "mixed union: object seed should build a Circle");
assert(mod.buildShapeOrNum(42) === 42, "mixed union: a number must pass through unchanged");

// (4) assertClassify of a class union validates the SEED union, not typeof C
const sq = mod.assertShape({ side: 5 });
assert(sq instanceof mod.Square, "assert union: a valid seed must NOT be rejected and builds the right class");
assert(sq.area() === 25, "assert union reconstruction");
`
