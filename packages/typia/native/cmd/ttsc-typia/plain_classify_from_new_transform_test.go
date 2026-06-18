package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyFromNewTransform verifies plain.classify construction
// strategies for a class-TYPE target (typeof C): the static factory `C.from(x)`,
// the single-argument `new C(x)` (including an inherited constructor and a
// rest-only constructor whose seed is the rest element), and a cross-module
// class resolved to a value import. The instance form classify<C> still
// field-copies (regression guard for the field-copy slice).
//
//  1. Transform a fixture exercising every arm.
//  2. Require the emit to take `.from(` / `new ` for the construction arms and
//     keep `Object.create` for the instance field-copy arm, and to import the
//     cross-module class.
//  3. Execute each classify and require a real instance with working methods.
func TestPlainClassifyFromNewTransform(t *testing.T) {
  project := plainClassifyFromNewProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify from/new transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, ".from(") {
    t.Fatalf("classify of a typeof-C with a static factory should emit C.from(seed):\n%s", out)
  }
  if !strings.Contains(out, "new ") {
    t.Fatalf("classify of a typeof-C with a single-arg constructor should emit new C(seed):\n%s", out)
  }
  if !strings.Contains(out, "Object.create") {
    t.Fatalf("the instance-form classify<Plain> must still field-copy (Object.create):\n%s", out)
  }
  plainClassifyFromNewRunRuntimeCases(t, project, out)
}

func plainClassifyFromNewProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-classify-fromnew-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainClassifyFromNewTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyFromNewSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func plainClassifyFromNewRunRuntimeCases(t *testing.T, project string, js string) {
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
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(plainClassifyFromNewRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("classify from/new runtime cases failed: %v\n%s", err, output)
  }
}

const plainClassifyFromNewTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const plainClassifyFromNewSource = `import typia from "typia";

// from: private constructor + static factory returning the instance
export class Point {
  private constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}
  static from(seed: { x: number; y: number }): Point {
    return new Point(seed.x, seed.y);
  }
  sum(): number {
    return this.x + this.y;
  }
}

// new: single-argument public constructor
export class Box {
  value!: number;
  label!: string;
  constructor(seed: { value: number; label: string }) {
    this.value = seed.value;
    this.label = seed.label;
  }
  describe(): string {
    return this.label + ":" + this.value;
  }
}

// new with an inherited single-argument constructor
export class HttpError extends Error {
  constructor(message?: string) {
    super(message);
  }
}

// rest-only constructor -> the seed is the rest ELEMENT (number)
export class Bag {
  items: number[];
  constructor(...items: number[]) {
    this.items = items;
  }
}

// instance form -> field copy (regression: stays Object.create)
export class Plain {
  id!: number;
  name!: string;
  greet(): string {
    return "hi " + this.name;
  }
}

export const fromPoint = typia.plain.createClassify<typeof Point>();
export const newBox = typia.plain.createClassify<typeof Box>();
export const newError = typia.plain.createClassify<typeof HttpError>();
export const restBag = typia.plain.createClassify<typeof Bag>();
export const fieldPlain = typia.plain.createClassify<Plain>();
`

const plainClassifyFromNewRuntimeRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// (1) static factory: C.from(seed) -> real instance + method
const point = mod.fromPoint({ x: 1, y: 2 });
assert(point instanceof mod.Point, "point should be a Point instance");
assert(point.sum() === 3, "Point.from seed should reconstruct (sum), got: " + point.sum());

// (2) single-arg constructor: new C(seed)
const box = mod.newBox({ value: 5, label: "a" });
assert(box instanceof mod.Box, "box should be a Box instance");
assert(box.describe() === "a:5", "new Box(seed) should reconstruct, got: " + box.describe());

// (3) inherited single-arg constructor
const err = mod.newError("boom");
assert(err instanceof mod.HttpError, "err should be an HttpError instance");
assert(err instanceof Error, "HttpError should still be an Error");
assert(err.message === "boom", "inherited ctor should pass the seed, got: " + err.message);

// (4) rest-only constructor: seed is the element
const bag = mod.restBag(7);
assert(bag instanceof mod.Bag, "bag should be a Bag instance");
assert(Array.isArray(bag.items) && bag.items[0] === 7, "rest seed should reconstruct, got: " + JSON.stringify(bag.items));

// (5) instance form -> field copy (regression)
const plain = mod.fieldPlain({ id: 1, name: "Kim" });
assert(plain instanceof mod.Plain, "plain should be a Plain instance (field copy)");
assert(plain.greet() === "hi Kim", "instance field-copy prototype method should work");
`
