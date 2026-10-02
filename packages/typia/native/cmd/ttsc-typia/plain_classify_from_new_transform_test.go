package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyFromNewTransform verifies factory precedence, seed constructors and instance field copies.
//
// Classifiable constructor forms prefer a supported static factory and then a single-seed constructor, while an instance-form type uses prototype field copying. The authored class signatures independently select those branches.
//
// 1. Static factory, single-seed constructor and instance-form classes share one fixture and distinguish all three strategies.
// 2. The output contains a static .from call, new Box and Object.create.
//
// @evidence contracts/testing.md#behavioral-verification The output contains a static .from call, new Box and Object.create.
// @evidence contracts/testing.md#independent-expectations Classifiable constructor forms prefer a supported static factory and then a single-seed constructor, while an instance-form type uses prototype field copying. The authored class signatures independently select those branches.
// @evidence contracts/testing.md#distinguishing-cases Static factory, single-seed constructor and instance-form classes share one fixture and distinguish all three strategies.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyFromNewTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
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
  if !strings.Contains(out, "new Box(") {
    t.Fatalf("classify of a typeof-C with a single-arg constructor should emit new Box(seed):\n%s", out)
  }
  if !strings.Contains(out, "Object.create") {
    t.Fatalf("the instance-form classify<Plain> must still field-copy (Object.create):\n%s", out)
  }
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

// any-seed factory: a static from(json: any) must FALL TO field-copy (the
// any seed collapses the factory arm, matching ClassifiableSeedValue), so
// J.from must NOT be called at runtime.
export class J {
  id!: number;
  static fromCalled = false;
  static from(json: any): J {
    J.fromCalled = true;
    const j = new J();
    j.id = json.id;
    return j;
  }
}

export const fromPoint = typia.plain.createClassify<typeof Point>();
export const newBox = typia.plain.createClassify<typeof Box>();
export const newError = typia.plain.createClassify<typeof HttpError>();
export const restBag = typia.plain.createClassify<typeof Bag>();
export const fieldPlain = typia.plain.createClassify<Plain>();
export const buildTree = typia.plain.createClassify<typeof Tree>();
export const classifyJ = typia.plain.createClassify<typeof J>();
// assert/validate against a class TYPE must validate the SEED, not typeof C's
// static members (the validation_type redirect).
export const assertPoint = typia.plain.createAssertClassify<typeof Point>();
export const validatePoint = typia.plain.createValidateClassify<typeof Point>();
`

func plainClassifyCrossModuleProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-classify-crossmodule-")
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
  if err := os.WriteFile(filepath.Join(src, "model.ts"), []byte(plainClassifyCrossModuleModel), 0o644); err != nil {
    t.Fatalf("write model: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyCrossModuleMain), 0o644); err != nil {
    t.Fatalf("write main: %v", err)
  }
  return dir
}

const plainClassifyCrossModuleModel = `export class Model {
  id!: number;
  greet(): string {
    return "m" + this.id;
  }
}

export class Factory {
  value!: number;
  private constructor(value: number) {
    this.value = value;
  }
  static from(seed: { value: number }): Factory {
    const f = Object.create(Factory.prototype) as Factory;
    (f as { value: number }).value = seed.value;
    return f;
  }
}

// default-exported field-copy class: the value import must be a DEFAULT import
export default class Memo {
  text!: string;
  show(): string {
    return this.text;
  }
}
`

const plainClassifyCrossModuleMain = `import typia from "typia";
import type Memo, { Model, Factory } from "./model";

export const classifyModel = typia.plain.createClassify<Model>();
export const classifyFactory = typia.plain.createClassify<typeof Factory>();
export const classifyMemo = typia.plain.createClassify<Memo>();
`
