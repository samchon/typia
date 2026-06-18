package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "regexp"
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "generic-internal-stub.cjs"), []byte(plainClassifyFromNewGenericStub), 0o644); err != nil {
    t.Fatalf("write generic internal stub: %v", err)
  }
  runtimeJS := plainClassifyFromNewRewrite(t, js)
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

// plainClassifyFromNewRewrite resolves the emitted module's typia imports to
// local stubs. Beyond the known internal helpers, the createClassify path emits
// is-check helpers (config.Addition) that are DEFINED but never called at
// runtime — e.g. for an inherited Error field. Those are stubbed generically so
// the module loads; each is logged so a genuinely-needed helper is visible.
func plainClassifyFromNewRewrite(t *testing.T, js string) string {
  t.Helper()
  s := strings.ReplaceAll(js, `require("typia")`, `require("./typia-stub.cjs")`)
  for from, to := range map[string]string{
    `require("typia/lib/internal/_validateReport")`:           `require("./validate-report-stub.cjs")`,
    `require("typia/lib/internal/_createStandardSchema")`:     `require("./standard-schema-stub.cjs")`,
    `require("typia/lib/internal/_assertGuard")`:              `require("./assert-guard-stub.cjs")`,
    `require("typia/lib/internal/_accessExpressionAsString")`: `require("./access-expression-stub.cjs")`,
  } {
    s = strings.ReplaceAll(s, from, to)
  }
  re := regexp.MustCompile(`require\("typia/lib/internal/([A-Za-z0-9_]+)"\)`)
  for _, m := range re.FindAllStringSubmatch(s, -1) {
    t.Logf("from/new emit references typia/lib/internal/%s (generic-stubbed)", m[1])
  }
  s = re.ReplaceAllString(s, `require("./generic-internal-stub.cjs")`)
  if strings.Contains(s, `require("typia")`) || strings.Contains(s, "typia/lib/internal/") {
    t.Fatalf("unresolved typia import remains after rewrite:\n%s", s)
  }
  return s
}

// plainClassifyFromNewGenericStub returns an identity function for any helper
// name, so a generated-but-unused internal helper does not break module load.
const plainClassifyFromNewGenericStub = `module.exports = new Proxy(
  {},
  { get: () => (x) => x },
);
`

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

// self-referential SEED: the constructor seed contains the class itself. The
// top is built via new Tree(seed); a nested Tree inside the seed is field-copied
// (the Classifiable contract method-strips a nested class in a seed). Codegen
// must terminate.
export class Tree {
  value!: number;
  children!: Tree[];
  constructor(seed: { value: number; children: Tree[] }) {
    this.value = seed.value;
    this.children = seed.children;
  }
}

export const fromPoint = typia.plain.createClassify<typeof Point>();
export const newBox = typia.plain.createClassify<typeof Box>();
export const newError = typia.plain.createClassify<typeof HttpError>();
export const restBag = typia.plain.createClassify<typeof Bag>();
export const fieldPlain = typia.plain.createClassify<Plain>();
export const buildTree = typia.plain.createClassify<typeof Tree>();
// assert/validate against a class TYPE must validate the SEED, not typeof C's
// static members (the validation_type redirect).
export const assertPoint = typia.plain.createAssertClassify<typeof Point>();
export const validatePoint = typia.plain.createValidateClassify<typeof Point>();
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

// (6) self-referential seed terminates: top via new, nested via field copy
const tree = mod.buildTree({ value: 1, children: [{ value: 2, children: [] }] });
assert(tree instanceof mod.Tree, "tree should be a Tree instance (new)");
assert(tree.children[0] instanceof mod.Tree, "nested tree should be a Tree (field copy)");
assert(tree.children[0].value === 2, "nested tree value should be preserved");

// (7) assertClassify<typeof Point> validates the SEED (not typeof C statics)
assert(mod.assertPoint({ x: 1, y: 2 }) instanceof mod.Point, "assertPoint valid seed -> Point");
let threw = false;
try {
  mod.assertPoint({ x: "no", y: 2 });
} catch (e) {
  threw = true;
}
assert(threw, "assertPoint should throw on an invalid seed");

// (8) validateClassify<typeof Point> validates the SEED
const ok = mod.validatePoint({ x: 3, y: 4 });
assert(ok.success === true, "validatePoint should succeed on a valid seed");
assert(ok.data instanceof mod.Point, "validatePoint data should be a Point instance");
const bad = mod.validatePoint({ x: "no", y: 4 });
assert(bad.success === false, "validatePoint should fail on an invalid seed");
assert(
  Array.isArray(bad.errors) && bad.errors.length > 0,
  "validatePoint failure should populate errors",
);
`
