package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyStrategyEdgesTransform covers two construction-strategy edges:
//   - an ABSTRACT class must FIELD-COPY (a runtime `new AbstractClass(seed)` throws
//     "Cannot create an instance of an abstract class"), and
//   - a TUPLE-typed rest parameter `constructor(...args: [Seed, number?])` must
//     build via `new` with the first tuple element as the seed (matching
//     Classifiable's `[infer P, ...Rest]` rule).
func TestPlainClassifyStrategyEdgesTransform(t *testing.T) {
  project := plainClassifyStrategyEdgesProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify strategy-edges transform failed: code=%d stderr=\n%s", code, errText)
  }
  // the abstract class must NOT be constructed with `new Shape(`
  if strings.Contains(out, "new Shape(") {
    t.Fatalf("an abstract class must field-copy, never `new Shape(seed)`:\n%s", out)
  }
  if !strings.Contains(out, "Object.create(Shape.prototype)") {
    t.Fatalf("the abstract class should field-copy via Object.create(Shape.prototype):\n%s", out)
  }
  // the tuple-rest ctor must build via `new Pair(`
  if !strings.Contains(out, "new Pair(") {
    t.Fatalf("the tuple-rest constructor should build via new Pair(seed):\n%s", out)
  }
  plainClassifyStrategyEdgesRun(t, project, out)
}

// TestPlainClassifyPrivateFieldRejected verifies that a class carrying ES
// `#private` fields is REJECTED at a field-copied position (a nested class), at
// transform time, rather than emitting field-copy code whose prototype methods
// throw "Cannot read private member" at runtime.
func TestPlainClassifyPrivateFieldRejected(t *testing.T) {
  project := plainClassifyPrivateProject(t)
  // Project mode (no --file/--output js): runTransformProject reports typia
  // transform diagnostics and exits non-zero, the established pattern for
  // asserting a transform-time rejection (see compare_equal_cover).
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code == 0 {
    t.Fatalf("a nested #private-field class must be rejected at transform time, but the transform succeeded\nstdout=%s\nstderr=%s", out, errText)
  }
  if !strings.Contains(out, "typia transform error") {
    t.Fatalf("the #private rejection diagnostic is missing:\nstdout=%s\nstderr=%s", out, errText)
  }
}

func plainClassifyStrategyEdgesProject(t *testing.T) string {
  t.Helper()
  return plainClassifyWriteProject(t, "plain-classify-strategy-", plainClassifyStrategyEdgesSource)
}

func plainClassifyPrivateProject(t *testing.T) string {
  t.Helper()
  return plainClassifyWriteProject(t, "plain-classify-private-", plainClassifyPrivateSource)
}

// plainClassifyWriteProject stages a one-file fixture project reusing the
// from/new tsconfig, returning the project dir.
func plainClassifyWriteProject(t *testing.T, prefix string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, prefix)
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func plainClassifyStrategyEdgesRun(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(plainClassifyStrategyEdgesRunner), 0o644); err != nil {
    t.Fatalf("write runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("classify strategy-edges runtime cases failed: %v\n%s", err, output)
  }
}

const plainClassifyStrategyEdgesSource = `import typia from "typia";

// ABSTRACT class: typeof Shape has only an ` + "`abstract new`" + ` signature, which is
// not runtime-newable, so classify must FIELD-COPY the instance shape.
export abstract class Shape {
  kind!: string;
  describe(): string {
    return "shape:" + this.kind;
  }
}

// TUPLE-rest constructor: the seed is the FIRST tuple element { a; b }.
export class Pair {
  a!: number;
  b!: number;
  constructor(...args: [{ a: number; b: number }, number?]) {
    this.a = args[0].a;
    this.b = args[0].b;
  }
  sum(): number {
    return this.a + this.b;
  }
}

export const buildShape = typia.plain.createClassify<typeof Shape>();
export const buildPair = typia.plain.createClassify<typeof Pair>();
`

const plainClassifyStrategyEdgesRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// abstract class field-copies into a real instance with a working prototype method
const sh = mod.buildShape({ kind: "circle" });
assert(sh instanceof mod.Shape, "abstract class should field-copy into a Shape instance");
assert(sh.describe() === "shape:circle", "abstract class prototype method should work, got: " + sh.describe());

// tuple-rest ctor builds via new with the first tuple element as the seed
const pr = mod.buildPair({ a: 3, b: 4 });
assert(pr instanceof mod.Pair, "tuple-rest ctor should build a Pair instance");
assert(pr.sum() === 7, "tuple-rest construction should reconstruct, got: " + pr.sum());
`

const plainClassifyPrivateSource = `import typia from "typia";

// A class with an ES #private field — its private slot is installed only by the
// constructor, so a field-copy (Object.create + assign) cannot restore it.
class Secret {
  #token!: string;
  reveal(): string {
    return this.#token;
  }
}

// Holder nests Secret at a field-copied position, so classify cannot soundly
// reconstruct it and must reject at transform time.
export class Holder {
  secret!: Secret;
}

export const buildHolder = typia.plain.createClassify<Holder>();
`

// TestPlainClassifyStaticPrivateAllowed verifies that a class whose ONLY #private
// member is STATIC is NOT rejected — a static `#x` lives on the constructor, not
// on instances, so field-copy (Object.create(prototype) + assign) still yields a
// sound instance.
func TestPlainClassifyStaticPrivateAllowed(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-staticpriv-", plainClassifyStaticPrivateSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("a class with only a STATIC #private member must field-copy, not be rejected: code=%d\n%s", code, errText)
  }
  if !strings.Contains(out, "Object.create(Counter.prototype)") {
    t.Fatalf("the static-#private class should field-copy onto Counter.prototype:\n%s", out)
  }
}

// TestPlainClassifySelfRefPrivateRejected verifies that a SELF-REFERENTIAL
// #private class is rejected: construction is root-only, so its nested
// self-occurrences are field-copied (losing the #private slots), which the guard
// must reject rather than emit code that throws at runtime.
func TestPlainClassifySelfRefPrivateRejected(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-selfrefpriv-", plainClassifySelfRefPrivateSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code == 0 {
    t.Fatalf("a self-referential #private class field-copies its nested occurrences, so it must be rejected; the transform succeeded\nstdout=%s\nstderr=%s", out, errText)
  }
  if !strings.Contains(out, "typia transform error") {
    t.Fatalf("the self-ref #private rejection diagnostic is missing:\nstdout=%s\nstderr=%s", out, errText)
  }
}

const plainClassifyStaticPrivateSource = `import typia from "typia";

// Only a STATIC #private member — it lives on the constructor, not instances, so
// field-copy reconstructs a sound instance and classify must NOT reject it.
export class Counter {
  value = 0;
  static #total = 0;
  bump(): number {
    this.value += 1;
    Counter.#total += 1;
    return this.value;
  }
}

export const build = typia.plain.createClassify<Counter>();
`

const plainClassifySelfRefPrivateSource = `import typia from "typia";

// A self-referential class with an INSTANCE #private field, built via new at the
// root. Its nested self-occurrences (next) are field-copied — construction is
// root-only — so the #private slot would be lost there: classify must reject.
export class Node {
  #id!: string;
  next: Node | null = null;
  constructor(seed: { id: string; next: Node | null }) {
    this.#id = seed.id;
    this.next = seed.next;
  }
  id(): string {
    return this.#id;
  }
}

export const build = typia.plain.createClassify<typeof Node>();
`

// TestPlainClassifyUnboundAnonymousClass verifies an anonymous class expression
// with NO enclosing const binding field-copies as a plain {} instead of emitting
// `Object.create(__class.prototype)` — the binder-internal __class name is not a
// usable runtime binding (it would throw ReferenceError).
func TestPlainClassifyUnboundAnonymousClass(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-anon-", plainClassifyUnboundAnonSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("unbound anonymous class transform failed: code=%d\n%s", code, errText)
  }
  if strings.Contains(out, "__class") {
    t.Fatalf("an unbound anonymous class must NOT leak the binder-internal __class name:\n%s", out)
  }
  plainClassifyRunNode(t, project, out, plainClassifyUnboundAnonRunner)
}

// plainClassifyRunNode writes the rewritten module + a custom runner and runs it.
func plainClassifyRunNode(t *testing.T, project string, js string, runnerSrc string) {
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
  if err := os.WriteFile(runner, []byte(runnerSrc), 0o644); err != nil {
    t.Fatalf("write runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("runtime cases failed: %v\n%s", err, output)
  }
}

const plainClassifyUnboundAnonSource = `import typia from "typia";

// An anonymous class expression with NO enclosing const binding (returned from a
// factory). Its binder-internal name is not a usable runtime binding, so classify
// must field-copy a plain {} rather than reference that unbound name.
const factory = () =>
  class {
    x!: number;
    label(): string {
      return "x=" + this.x;
    }
  };
export type Widget = InstanceType<ReturnType<typeof factory>>;

export const build = typia.plain.createClassify<Widget>();
`

const plainClassifyUnboundAnonRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// must NOT throw "ReferenceError: __class is not defined"; field-copies the data
const w = mod.build({ x: 5 });
assert(w && w.x === 5, "unbound anonymous class should field-copy its data, got: " + JSON.stringify(w));
`
