package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestAtomicIntersectionSchemaTransform verifies primitive intersections do
// not fall back to an unconstrained JSON schema.
//
// `T & { __meta?: object }` should keep the primitive `T` branch and discard
// the optional-object metadata branch. `Wrapper<boolean>` reaches the factory
// as `(false & OptionalObject) | (true & OptionalObject)`, so optional-object
// constraints must also stay neutral during union/never pruning.
//
//  1. Transform the AtomicIntersection fixture into JavaScript.
//  2. Execute the emitted module with typia runtime imports stubbed out.
//  3. Assert the three tuple element component schemas are boolean, number,
//     and string, never an empty unconstrained schema.
func TestAtomicIntersectionSchemaTransform(t *testing.T) {
  project := atomicIntersectionSchemaProject(t)
  js := atomicIntersectionSchemaTransform(t, project)
  atomicIntersectionSchemaRunRuntimeCases(t, project, js)
}

func atomicIntersectionSchemaProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "atomic-intersection-schema-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(atomicIntersectionSchemaSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func atomicIntersectionSchemaTransform(t *testing.T, project string) string {
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
    t.Fatalf("atomic intersection schema transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func atomicIntersectionSchemaRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(atomicIntersectionSchemaRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("atomic intersection schema runtime cases failed: %v\n%s", err, output)
  }
}

const atomicIntersectionSchemaTSConfig = `{
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

const atomicIntersectionSchemaSource = `import typia from "typia";

export type AtomicIntersection = [
  AtomicIntersection.Wrapper<boolean>,
  AtomicIntersection.Wrapper<number>,
  AtomicIntersection.Wrapper<string>,
];

export namespace AtomicIntersection {
  export type Wrapper<T> = T & { __meta?: object };
}

export const schema = typia.json.schema<AtomicIntersection>();
`

const atomicIntersectionSchemaRuntimeRunner = `const unit = require("./main.cjs").schema;

const schemas = unit.components?.schemas ?? {};
const tuple = schemas.AtomicIntersection;
if (tuple?.type !== "array" || Array.isArray(tuple.prefixItems) === false) {
  throw new Error("AtomicIntersection tuple schema was not emitted: " + JSON.stringify(unit));
}

const schemaName = (ref) => ref.split("/").at(-1);
const actual = tuple.prefixItems.map((item) => {
  const target = schemas[schemaName(item.$ref)];
  if (target === undefined) {
    throw new Error("missing tuple component for " + item.$ref);
  }
  return target.type;
});
const expected = ["boolean", "number", "string"];
if (JSON.stringify(actual) !== JSON.stringify(expected)) {
  throw new Error("AtomicIntersection wrapper schemas were " + JSON.stringify(actual) + ", expected " + JSON.stringify(expected));
}
`
