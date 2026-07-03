package main

import (
  "os"
  "os/exec"
  "path/filepath"
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
//  2. Execute the emitted JavaScript with typia runtime imports stubbed out.
//  3. Assert the `Shape` oneOf points to seven distinct discriminator
//     components and that each component retains its literal kind and fields.
func TestObjectUnionExplicitPointerSchemaTransform(t *testing.T) {
  project := objectUnionExplicitPointerSchemaProject(t)
  js := objectUnionExplicitPointerSchemaTransform(t, project)
  objectUnionExplicitPointerSchemaRunRuntimeCases(t, project, js)
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

func objectUnionExplicitPointerSchemaRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(objectUnionExplicitPointerSchemaRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("object union explicit pointer schema runtime cases failed: %v\n%s", err, output)
  }
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

const objectUnionExplicitPointerSchemaRuntimeRunner = `const unit = require("./main.cjs").schema;

const schemas = unit.components?.schemas ?? {};
const expectedKinds = ["circle", "line", "point", "polygon", "polyline", "rectangle", "triangle"];
const expectedFields = {
  circle: ["centroid", "radius"],
  line: ["p1", "p2"],
  point: ["x", "y"],
  polygon: ["outer", "inner"],
  polyline: ["points"],
  rectangle: ["p1", "p2", "p3", "p4"],
  triangle: ["p1", "p2", "p3"],
};

const schemaName = (ref) => ref.split("/").at(-1);
const refsOf = (schema) =>
  Array.isArray(schema?.oneOf)
    ? schema.oneOf.map((branch) => branch?.$ref).filter((ref) => typeof ref === "string")
    : [];
const literalOf = (schema) => {
  const property = schema?.properties?.type;
  if (typeof property?.const === "string") return property.const;
  if (Array.isArray(property?.enum) && typeof property.enum[0] === "string") return property.enum[0];
  return undefined;
};
const sameStrings = (actual, expected) =>
  JSON.stringify([...actual].sort()) === JSON.stringify([...expected].sort());

const candidates = Object.entries(schemas).filter(([, schema]) => {
  const refs = refsOf(schema);
  const unique = [...new Set(refs)];
  if (refs.length !== 7 || unique.length !== 7) return false;
  const kinds = unique
    .map((ref) => literalOf(schemas[schemaName(ref)]))
    .filter((kind) => typeof kind === "string");
  return sameStrings(kinds, expectedKinds);
});

if (candidates.length !== 1) {
  throw new Error(
    "expected exactly one seven-branch Shape oneOf, got " +
      candidates.length +
      " among components " +
      JSON.stringify(Object.keys(schemas)),
  );
}

const [shapeName, shape] = candidates[0];
const refs = refsOf(shape);
const uniqueRefs = [...new Set(refs)];
if (refs.length !== 7 || uniqueRefs.length !== 7) {
  throw new Error(shapeName + " collapsed discriminator refs: " + JSON.stringify(refs));
}

for (const ref of uniqueRefs) {
  const target = schemas[schemaName(ref)];
  if (target === undefined) {
    throw new Error("missing component for " + ref);
  }
  const kind = literalOf(target);
  if (expectedKinds.includes(kind) === false) {
    throw new Error("unexpected discriminator kind for " + ref + ": " + JSON.stringify(target));
  }
  const properties = target.properties ?? {};
  for (const field of expectedFields[kind]) {
    if (properties[field] === undefined) {
      throw new Error(kind + " branch lost field " + field + ": " + JSON.stringify(target));
    }
  }
}
`
