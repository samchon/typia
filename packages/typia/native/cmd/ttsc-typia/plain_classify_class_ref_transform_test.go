package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyClassRefTransform pins the class VALUE-reference resolution
// that both the from/new construct path and the field-copy allocator depend on:
//   - a class declared inside a `namespace` constructs / field-copies via its
//     QUALIFIED name (NS.Point / NS.Inner.Deep), not a bare identifier that is
//     not in scope;
//   - a generic class instantiation (Container<string>) field-copies onto the
//     BARE constructor (Object.create(Container.prototype)), not the specialized
//     type-argument-laden name;
//   - a class EXPRESSION constructs / field-copies via its enclosing `const`
//     binding (Animal / Plant), not the binder-internal `__class` or the inner
//     `class Beast {}` name that only binds inside the class body.
// Each is a runtime ReferenceError / wrong-instance pre-fix, so the node runner
// is the true regression guard; the emit assertions catch it on a node-less CI.
func TestPlainClassifyClassRefTransform(t *testing.T) {
  project := plainClassifyClassRefProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify class-ref transform failed: code=%d stderr=\n%s", code, errText)
  }
  // namespaced from/new must qualify, never a bare reference.
  if !strings.Contains(out, "NS.Point.from(") {
    t.Fatalf("namespaced static factory must qualify to NS.Point.from(seed):\n%s", out)
  }
  if !strings.Contains(out, "new NS.Box(") {
    t.Fatalf("namespaced single-arg ctor must qualify to new NS.Box(seed):\n%s", out)
  }
  if !strings.Contains(out, "new NS.Inner.Deep(") {
    t.Fatalf("doubly-nested namespace must qualify to new NS.Inner.Deep(seed):\n%s", out)
  }
  if !strings.Contains(out, "Object.create(NS.Plain.prototype)") {
    t.Fatalf("namespaced instance form must field-copy onto NS.Plain.prototype:\n%s", out)
  }
  // generic field-copy must reference the bare constructor, never the
  // specialized name with angle brackets.
  if !strings.Contains(out, "Object.create(Container.prototype)") {
    t.Fatalf("generic class field-copy must reference the bare Container constructor:\n%s", out)
  }
  if strings.Contains(out, "Container<") {
    t.Fatalf("generic class field-copy must NOT reference the specialized Container<...> name:\n%s", out)
  }
  // class expression must use the const binding, never __class / the inner name.
  if !strings.Contains(out, "new Animal(") {
    t.Fatalf("unnamed class-expression construct must use the const binding `new Animal(seed)`:\n%s", out)
  }
  if strings.Contains(out, "__class") {
    t.Fatalf("class-expression reference must NOT leak the binder-internal __class name:\n%s", out)
  }
  if !strings.Contains(out, "Object.create(Plant.prototype)") {
    t.Fatalf("named class-expression field-copy must use the outer `Plant` binding:\n%s", out)
  }
  // the inner `class Beast {}` name survives verbatim in the emitted class
  // expression, so only the RECONSTRUCTION must avoid it (not the whole module).
  if strings.Contains(out, "Object.create(Beast") || strings.Contains(out, "new Beast(") {
    t.Fatalf("named class-expression reconstruction must NOT reference the inner `Beast` name:\n%s", out)
  }
  plainClassifyClassRefRun(t, project, out)
}

func plainClassifyClassRefProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-classify-classref-")
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyClassRefSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func plainClassifyClassRefRun(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(plainClassifyClassRefRunner), 0o644); err != nil {
    t.Fatalf("write runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("classify class-ref runtime cases failed: %v\n%s", err, output)
  }
}

const plainClassifyClassRefSource = `import typia from "typia";

export namespace NS {
  // from: private ctor + static factory, declared inside a namespace
  export class Point {
    private constructor(
      public readonly x: number,
      public readonly y: number,
    ) {}
    static from(seed: { x: number; y: number }): NS.Point {
      return new NS.Point(seed.x, seed.y);
    }
    sum(): number {
      return this.x + this.y;
    }
  }

  // new: single-arg ctor inside a namespace
  export class Box {
    value!: number;
    constructor(seed: { value: number }) {
      this.value = seed.value;
    }
    doubled(): number {
      return this.value * 2;
    }
  }

  // doubly-nested namespace -> NS.Inner.Deep
  export namespace Inner {
    export class Deep {
      tag!: string;
      constructor(seed: { tag: string }) {
        this.tag = seed.tag;
      }
      shout(): string {
        return this.tag + "!";
      }
    }
  }

  // instance form inside a namespace -> field-copy onto NS.Plain.prototype
  export class Plain {
    id!: number;
    greet(): string {
      return "hi " + this.id;
    }
  }
}

// generic class -> field-copy must reference the bare Container constructor
export class Container<T> {
  value!: T;
  label!: string;
  describe(): string {
    return this.label;
  }
}

// unnamed class expression -> const binding Animal (symbol name is __class)
export const Animal = class {
  name!: string;
  constructor(seed?: { name: string }) {
    if (seed) this.name = seed.name;
  }
  speak(): string {
    return this.name;
  }
};
export type Animal = InstanceType<typeof Animal>;

// named class expression -> outer binding Plant (inner name Beast binds only
// inside the class body)
export const Plant = class Beast {
  species!: string;
  grow(): string {
    return this.species + "!";
  }
};
export type Plant = InstanceType<typeof Plant>;

export const fromPoint = typia.plain.createClassify<typeof NS.Point>();
export const newBox = typia.plain.createClassify<typeof NS.Box>();
export const newDeep = typia.plain.createClassify<typeof NS.Inner.Deep>();
export const fieldPlain = typia.plain.createClassify<NS.Plain>();
export const fieldContainer = typia.plain.createClassify<Container<string>>();
export const newAnimal = typia.plain.createClassify<typeof Animal>();
export const fieldPlant = typia.plain.createClassify<Plant>();
`

const plainClassifyClassRefRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// namespaced from
const p = mod.fromPoint({ x: 1, y: 2 });
assert(p instanceof mod.NS.Point, "namespaced from should yield an NS.Point instance");
assert(p.sum() === 3, "NS.Point.from seed should reconstruct, got: " + p.sum());

// namespaced new
const b = mod.newBox({ value: 5 });
assert(b instanceof mod.NS.Box, "namespaced new should yield an NS.Box instance");
assert(b.doubled() === 10, "new NS.Box(seed) should reconstruct, got: " + b.doubled());

// doubly-nested namespace
const d = mod.newDeep({ tag: "x" });
assert(d instanceof mod.NS.Inner.Deep, "doubly-nested namespace should yield an NS.Inner.Deep instance");
assert(d.shout() === "x!", "new NS.Inner.Deep(seed) should reconstruct, got: " + d.shout());

// namespaced field-copy
const pl = mod.fieldPlain({ id: 7 });
assert(pl instanceof mod.NS.Plain, "namespaced instance form should field-copy to NS.Plain");
assert(pl.greet() === "hi 7", "NS.Plain prototype method should work, got: " + pl.greet());

// generic field-copy
const c = mod.fieldContainer({ value: "x", label: "L" });
assert(c instanceof mod.Container, "generic instance form should field-copy to Container");
assert(c.describe() === "L", "Container prototype method should work, got: " + c.describe());
assert(c.value === "x" && c.label === "L", "Container fields should be copied");

// unnamed class expression construct
const an = mod.newAnimal({ name: "z" });
assert(an instanceof mod.Animal, "unnamed class-expression construct should yield an Animal instance");
assert(an.speak() === "z", "Animal prototype method should work, got: " + an.speak());

// named class expression field-copy
const plant = mod.fieldPlant({ species: "oak" });
assert(plant instanceof mod.Plant, "named class-expression field-copy should yield a Plant instance");
assert(plant.grow() === "oak!", "Plant prototype method should work, got: " + plant.grow());
`
