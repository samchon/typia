package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestObjectUnionExplicitPointerSchemaTransform verifies generic intersection
// branches keep distinct JSON schema components.
//
// ObjectUnionExplicitPointer combines a generic discriminator helper with
// object intersections under nested pointers. Name-based metadata reuse once
// collapsed all `Discriminator<Kind, Shape>` instantiations into the first
// component, so OpenAPI validation saw every branch as the same shape.
//
//  1. Transform a local fixture mirroring the template structure.
//  2. Decode the emitted schema literal AST without executing JavaScript.
//  3. Assert the `Shape` oneOf points to seven distinct discriminator
//     components and that each component retains its literal kind and fields.
//
// @evidence contracts/testing.md#behavioral-verification Exactly one seven-branch Shape union contains distinct references and all seven authored discriminator literals; every component retains its kind-specific fields.
// @evidence contracts/testing.md#independent-expectations Expected primitive types, discriminator literals and member names come from the authored TypeScript type, not a previous transform snapshot. AST literal decoding interprets the emitted result but does not execute JavaScript.
// @evidence contracts/testing.md#distinguishing-cases Exactly one seven-branch Shape union contains distinct references and all seven authored discriminator literals; every component retains its kind-specific fields.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestObjectUnionExplicitPointerSchemaTransform as a unit test. It runs the transform in process and parses its result through the in-memory TypeScript parser; no compiler or JavaScript subprocess is launched.
func TestObjectUnionExplicitPointerSchemaTransform(t *testing.T) {
  project := objectUnionExplicitPointerSchemaProject(t)
  js := objectUnionExplicitPointerSchemaTransform(t, project)
  unit := ttscTypiaTestSchemaLiteral(t, js)
  schemas := ttscTypiaTestSchemaPath(t, unit, "components", "schemas").(map[string]any)
  expected := map[string][]string{"circle": {"centroid", "radius"}, "line": {"p1", "p2"}, "point": {"x", "y"}, "polygon": {"outer", "inner"}, "polyline": {"points"}, "rectangle": {"p1", "p2", "p3", "p4"}, "triangle": {"p1", "p2", "p3"}}
  candidates := 0
  for _, value := range schemas {
    shape, ok := value.(map[string]any)
    if !ok {
      continue
    }
    branches, ok := shape["oneOf"].([]any)
    if !ok || len(branches) != 7 {
      continue
    }
    kinds := map[string]bool{}
    refs := map[string]bool{}
    for _, value := range branches {
      branch, ok := value.(map[string]any)
      if !ok {
        t.Fatalf("non-object branch %#v", value)
      }
      ref, ok := branch["$ref"].(string)
      if !ok || refs[ref] {
        t.Fatalf("missing or duplicated reference %#v", branch)
      }
      refs[ref] = true
      name := ref[strings.LastIndex(ref, "/")+1:]
      target, ok := schemas[name].(map[string]any)
      if !ok {
        t.Fatalf("missing target %s", ref)
      }
      properties, ok := target["properties"].(map[string]any)
      if !ok {
        t.Fatalf("missing properties %s", ref)
      }
      typ, ok := properties["type"].(map[string]any)
      if !ok {
        t.Fatalf("missing discriminator %s", ref)
      }
      kind, ok := typ["const"].(string)
      if !ok {
        if enums, valid := typ["enum"].([]any); valid && len(enums) > 0 {
          kind, ok = enums[0].(string)
        }
      }
      fields, valid := expected[kind]
      if !ok || !valid || kinds[kind] {
        t.Fatalf("wrong or repeated discriminator %#v", typ)
      }
      kinds[kind] = true
      for _, field := range fields {
        if _, ok := properties[field]; !ok {
          t.Fatalf("%s lost field %s", kind, field)
        }
      }
    }
    candidates++
  }
  if candidates != 1 {
    t.Fatalf("expected one complete seven-branch Shape union, got %d", candidates)
  }
}

func objectUnionExplicitPointerSchemaProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "object-union-explicit-pointer-schema-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(objectUnionExplicitPointerSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(objectUnionExplicitPointerSchemaSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func objectUnionExplicitPointerSchemaTransform(t *testing.T, project string) string {
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
    t.Fatalf("object union explicit pointer schema transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const objectUnionExplicitPointerSchemaTSConfig = `{
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

const objectUnionExplicitPointerSchemaSource = `import typia from "typia";

interface IPointer<T> {
  value: T;
}

export type ObjectUnionExplicitPointer = IPointer<
  Array<IPointer<ObjectUnionExplicitPointer.Shape>>
>;

export namespace ObjectUnionExplicitPointer {
  export type Shape =
    | ObjectUnionExplicitPointer.Discriminator<
        "point",
        ObjectUnionExplicitPointer.IPoint
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "line",
        ObjectUnionExplicitPointer.ILine
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "triangle",
        ObjectUnionExplicitPointer.ITriangle
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "rectangle",
        ObjectUnionExplicitPointer.IRectangle
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "polyline",
        ObjectUnionExplicitPointer.IPolyline
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "polygon",
        ObjectUnionExplicitPointer.IPolygon
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "circle",
        ObjectUnionExplicitPointer.ICircle
      >;

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

export const schema = typia.json.schema<ObjectUnionExplicitPointer>();
`
