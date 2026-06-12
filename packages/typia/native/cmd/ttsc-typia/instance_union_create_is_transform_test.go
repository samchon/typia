package main

import (
  "os"
  "os/exec"
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
func TestInstanceUnionCreateIsTransform(t *testing.T) {
  project := instanceUnionCreateIsProject(t)
  js := instanceUnionCreateIsTransform(t, project)
  instanceUnionCreateIsAssertUniqueHelpers(t, js)
  instanceUnionCreateIsRunRuntimeCases(t, project, js)
}

func instanceUnionCreateIsProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "instance-union-create-is-")
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
}

func instanceUnionCreateIsRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(instanceUnionCreateIsRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("instance union createIs runtime cases failed: %v\n%s", err, output)
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

const instanceUnionCreateIsRuntimeRunner = `const { isInstanceUnion } = require("./main.cjs");

const point = (value) => ({ x: value, y: value + 1, z: value + 2 });
const simple = {
  scale: point(1),
  position: point(4),
  rotate: point(7),
  pivot: point(10),
};
const union = [
  { type: "point", x: 1, y: 2 },
  { type: "line", p1: { x: 1, y: 2 }, p2: { x: 3, y: 4 } },
  { type: "triangle", p1: { x: 1, y: 2 }, p2: { x: 3, y: 4 }, p3: { x: 5, y: 6 } },
  { type: "rectangle", p1: { x: 1, y: 2 }, p2: { x: 3, y: 4 }, p3: { x: 5, y: 6 }, p4: { x: 7, y: 8 } },
  { type: "polyline", points: [{ x: 1, y: 2 }] },
  { type: "polygon", outer: { points: [{ x: 1, y: 2 }] }, inner: [{ points: [{ x: 3, y: 4 }] }] },
  { type: "circle", centroid: { x: 1, y: 2 }, radius: 5 },
];
const valid = [
  3,
  new Uint8Array([1, 2]),
  new Set([false, true]),
  new Map([[{ key: 1 }, { value: 2 }]]),
  ["one", "two"],
  [false, 1, 2],
  [1, 2, 3],
  [true, false],
  [],
  simple,
  union,
];

const cases = [
  ["valid", valid, true],
  ["bad set element", [new Set([false, "x"])], false],
  ["bad tuple", [["one", 2]], false],
  ["bad object property", [{ ...simple, pivot: { ...simple.pivot, z: "x" } }], false],
  ["bad discriminator", [[{ type: "circle", centroid: { x: 1, y: 2 } }]], false],
];

for (const [name, input, expected] of cases) {
  const actual = isInstanceUnion(input);
  if (actual !== expected) {
    throw new Error(name + ": expected " + expected + " but got " + actual);
  }
}
`
