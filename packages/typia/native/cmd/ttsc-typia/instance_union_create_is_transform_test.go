package main

import (
  "os"
  "path/filepath"
  "regexp"
  "testing"
)

// TestInstanceUnionCreateIsTransform verifies mixed array-like and object
// helpers do not collide in createIs() output.
//
// The template InstanceUnion combines native instances, Set/Map, tuples,
// arrays, a repeated-property object, and a discriminated object union. That
// graph exercises both object-property helper emission and array-like union
// helper emission in the same functor. A prior transform emitted duplicate
// `const _ip0` declarations, so Node could not even load the generated module.
//
// 1. Transform InstanceUnion's mixed object and array-like shape.
// 2. Require emitted property helpers to exist and each declaration name to be unique.
//
// @evidence contracts/testing.md#behavioral-verification The generated createIs module must contain property-helper declarations and the helper scanner rejects duplicate declaration names, distinguishing the prior syntactically invalid emit.
// @evidence contracts/testing.md#independent-expectations JavaScript const bindings cannot be redeclared in the same generated helper scope. Requiring at least one declaration prevents an empty output from satisfying uniqueness vacuously.
// @evidence contracts/testing.md#distinguishing-cases The single InstanceUnion graph combines native, collection, tuple, array and repeated-object branches so their helper naming populations coexist; the assertion checks every matching declaration, including the first and repeated-name boundary.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestInstanceUnionCreateIsTransform as a unit test through runTransform in process. The fixture helper supplies the mixed type graph and the declaration scanner checks its returned JavaScript; no JavaScript runtime is launched.
func TestInstanceUnionCreateIsTransform(t *testing.T) {
  project := instanceUnionCreateIsProject(t)
  js := instanceUnionCreateIsTransform(t, project)
  instanceUnionCreateIsAssertUniqueHelpers(t, js)
}

func instanceUnionCreateIsProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "instance-union-create-is-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(instanceUnionCreateIsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(instanceUnionCreateIsSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func instanceUnionCreateIsTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("instance union createIs transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func instanceUnionCreateIsAssertUniqueHelpers(t *testing.T, js string) {
  t.Helper()
  pattern := regexp.MustCompile(`const\s+(_[A-Za-z]+p[0-9]+)\s*=`)
  seen := map[string]bool{}
  for _, match := range pattern.FindAllStringSubmatch(js, -1) {
    name := match[1]
    if seen[name] {
      t.Fatalf("duplicate helper declaration %q in generated output:\n%s", name, js)
    }
    seen[name] = true
  }
  if len(seen) == 0 {
    t.Fatalf("mixed union output has no property helper declarations:\n%s", js)
  }
}

const instanceUnionCreateIsTSConfig = `{
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

const instanceUnionCreateIsSource = `import typia from "typia";

export type InstanceUnion = InstanceUnion.Union[];
export namespace InstanceUnion {
  export type Union =
    | number
    | Uint8Array
    | Set<boolean>
    | Map<any, any>
    | [string, string]
    | [boolean, number, number]
    | number[]
    | boolean[]
    | []
    | ObjectSimple
    | ObjectUnionExplicit;
}

export interface ObjectSimple {
  scale: IPoint3D;
  position: IPoint3D;
  rotate: IPoint3D;
  pivot: IPoint3D;
}
export interface IPoint3D {
  x: number;
  y: number;
  z: number;
}

export type ObjectUnionExplicit = Array<
  | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>
  | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>
  | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>
  | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>
  | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>
  | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>
  | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>
>;
export namespace ObjectUnionExplicit {
  export type Discriminator<Type extends string, T extends object> = T & {
    type: Type;
  };
  export interface IPoint {
    x: number;
    y: number;
  }
  export interface ILine {
    p1: IPoint;
    p2: IPoint;
  }
  export interface ITriangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
  }
  export interface IRectangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
    p4: IPoint;
  }
  export interface IPolyline {
    points: IPoint[];
  }
  export interface IPolygon {
    outer: IPolyline;
    inner: IPolyline[];
  }
  export interface ICircle {
    centroid: IPoint;
    radius: number;
  }
}

export const isInstanceUnion = typia.createIs<InstanceUnion>();
`
