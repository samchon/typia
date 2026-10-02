package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyClassRefTransform verifies qualified class reconstruction references.
//
// Runtime constructor values are addressed by their accessible lexical/namespace binding, not type-specialization text or a class expression inner name. The authored declaration bindings establish each reference.
//
// 1. Namespace nesting, a generic class, anonymous/named class expressions and static/constructor/field-copy strategies supply both expected value references and inaccessible-name negative twins.
// 2. Output uses NS.Point.from, new NS.Box, nested NS.Inner.Deep, NS.Plain.prototype, bare Container and outer Animal/Plant bindings; specialized generics and binder/inner class identities are forbidden.
//
// @evidence contracts/testing.md#behavioral-verification Output uses NS.Point.from, new NS.Box, nested NS.Inner.Deep, NS.Plain.prototype, bare Container and outer Animal/Plant bindings; specialized generics and binder/inner class identities are forbidden.
// @evidence contracts/testing.md#independent-expectations Runtime constructor values are addressed by their accessible lexical/namespace binding, not type-specialization text or a class expression inner name. The authored declaration bindings establish each reference.
// @evidence contracts/testing.md#distinguishing-cases Namespace nesting, a generic class, anonymous/named class expressions and static/constructor/field-copy strategies supply both expected value references and inaccessible-name negative twins.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyClassRefTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
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
}

func plainClassifyClassRefProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "plain-classify-classref-")
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

// unnamed class expression -> reconstructed via the const binding Animal
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
