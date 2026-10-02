package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyStrategyEdgesTransform verifies abstract and tuple-rest constructor strategy boundaries.
//
// Abstract classes cannot be instantiated and therefore need field copying; a tuple-rest signature that accepts one seed still supplies a supported constructor contract.
//
// 1. An abstract constructor-negative form is paired with a concrete tuple-rest constructor-positive form.
// 2. Abstract Shape emits Object.create(Shape.prototype) and no new Shape, while a tuple-rest Pair constructor emits new Pair.
//
// @evidence contracts/testing.md#behavioral-verification Abstract Shape emits Object.create(Shape.prototype) and no new Shape, while a tuple-rest Pair constructor emits new Pair.
// @evidence contracts/testing.md#independent-expectations Abstract classes cannot be instantiated and therefore need field copying; a tuple-rest signature that accepts one seed still supplies a supported constructor contract.
// @evidence contracts/testing.md#distinguishing-cases An abstract constructor-negative form is paired with a concrete tuple-rest constructor-positive form.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyStrategyEdgesTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
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

const plainClassifyInheritedPrivateSource = `import typia from "typia";

// A base class with an INSTANCE #private field; the subclass adds only public
// data. Field-copying the subclass never installs the inherited #private slot, so
// classify must reject it — the prototype chain matters.
class Base {
  #secret = 0;
  bump(): number {
    this.#secret += 1;
    return this.#secret;
  }
}
export class Derived extends Base {
  name!: string;
}

export const build = typia.plain.createClassify<Derived>();
`

const plainClassifyInterfaceSource = `import typia from "typia";

// A named INTERFACE — a type-only name with no runtime value.
export interface Animal {
  name: string;
  legs: number;
}

// Zoo is a real class (field-copies onto its prototype); its animal field is
// the interface, which must field-copy as a plain {}.
export class Zoo {
  label!: string;
  animal!: Animal;
  describe(): string {
    return this.label + ":" + this.animal.name;
  }
}

export const build = typia.plain.createClassify<Zoo>();
`

const plainClassifyRecAnonSource = `import typia from "typia";

// A RECURSIVE anonymous object type alias — no runtime value, IsLiteral() is
// false because it is recursive, so classify must still field-copy a plain {}.
export type Rec = { value: number; self: Rec | null };

export const build = typia.plain.createClassify<Rec>();
`

const plainClassifyGenericPrivateSource = `import typia from "typia";

// A GENERIC class with its OWN instance #private. classify<Gen<string>> emplaces
// the Gen<string> instance (a bare TypeReference), but the member scan resolves
// Gen's declaration, so the own #private is detected and the class is rejected.
export class Gen<T> {
  #secret = 0;
  value!: T;
  bump(): number {
    this.#secret += 1;
    return this.#secret;
  }
}

export const build = typia.plain.createClassify<Gen<string>>();
`
