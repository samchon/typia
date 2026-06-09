package main

import (
  "bytes"
  "os"
  "os/exec"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

// TestBooleanLiteralDiscriminantSchemaTransform verifies boolean discriminant
// constants survive schema transforms.
//
// The SDK-facing JSON schema path in #1841 depends on `ok: false` remaining a
// boolean constant after metadata collection and schema emission. This test
// runs the native transform and executes the emitted module so a missed
// transform, a collapsed false branch, or a schema writer regression fails.
//
//  1. Transform a fixture containing `reflect.schema`, `json.schema`, and
//     `json.application` calls over `ok: false | true` output branches.
//  2. Execute the emitted JavaScript with an empty typia stub, proving the
//     schema calls were inlined by the transformer.
//  3. Assert the reflect and JSON application outputs contain both boolean
//     constants.
func TestBooleanLiteralDiscriminantSchemaTransform(t *testing.T) {
  project := booleanLiteralDiscriminantProject(t)
  js := booleanLiteralDiscriminantTransform(t, project, "js")
  booleanLiteralDiscriminantRunRuntimeCases(t, project, js)
}

func booleanLiteralDiscriminantProject(t *testing.T) string {
  t.Helper()
  root := booleanLiteralDiscriminantRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "boolean-literal-discriminant-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(booleanLiteralDiscriminantTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(booleanLiteralDiscriminantSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func booleanLiteralDiscriminantRepoRoot(t *testing.T) string {
  t.Helper()
  _, file, _, ok := runtime.Caller(0)
  if !ok {
    t.Fatal("runtime.Caller failed")
  }
  dir := filepath.Dir(file)
  for {
    if _, err := os.Stat(filepath.Join(dir, "pnpm-workspace.yaml")); err == nil {
      return dir
    }
    next := filepath.Dir(dir)
    if next == dir {
      t.Fatalf("repo root not found from %s", file)
    }
    dir = next
  }
}

func booleanLiteralDiscriminantCapture(run func() int) (string, string, int) {
  var out bytes.Buffer
  var err bytes.Buffer
  oldStdout := stdout
  oldStderr := stderr
  stdout = &out
  stderr = &err
  defer func() {
    stdout = oldStdout
    stderr = oldStderr
  }()
  code := run()
  return out.String(), err.String(), code
}

func booleanLiteralDiscriminantTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := booleanLiteralDiscriminantCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("boolean literal discriminant transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

func booleanLiteralDiscriminantRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "typia-stub.cjs"), []byte("module.exports = {};\n"), 0o644); err != nil {
    t.Fatalf("write typia stub: %v", err)
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia")`, `require("./typia-stub.cjs")`)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(booleanLiteralDiscriminantRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = project
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("boolean literal discriminant runtime cases failed: %v\n%s", err, output)
  }
}

const booleanLiteralDiscriminantTSConfig = `{
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

const booleanLiteralDiscriminantSource = `import typia from "typia";

interface IFailure {
  ok: false;
  error: {
    code: string;
  };
}

interface ISuccess {
  ok: true;
  code: string;
  data: {
    id: string;
  };
}

type Output = IFailure | ISuccess;

interface IController {
  getMe(): Promise<Output>;
}

export const reflectFalse = typia.reflect.schema<false>();
export const reflectOutput = typia.reflect.schema<Output>();
export const jsonOutput = typia.json.schema<Output>();
export const jsonApplication = typia.json.application<IController>();
`

const booleanLiteralDiscriminantRuntimeRunner = `const {
  reflectFalse,
  reflectOutput,
  jsonOutput,
  jsonApplication,
} = require("./main.cjs");

const assertValues = (name, actual, expected) => {
  const normalized = [...actual].sort((x, y) => Number(x) - Number(y));
  if (JSON.stringify(normalized) !== JSON.stringify(expected)) {
    throw new Error(name + ": expected " + JSON.stringify(expected) + " but got " + JSON.stringify(normalized));
  }
};

const collectReflectOkConstants = (unit) =>
  unit.components.objects
    .flatMap((object) => object.properties)
    .filter(
      (property) =>
        property.key.constants[0]?.type === "string" &&
        property.key.constants[0]?.values[0]?.value === "ok",
    )
    .flatMap((property) => property.value.constants)
    .filter((constant) => constant.type === "boolean")
    .flatMap((constant) => constant.values)
    .map((value) => value.value)
    .filter((value) => typeof value === "boolean");

const schemaName = (ref) => ref.split("/").at(-1);

const collectJsonOkConstants = (schema, components) => {
  const visited = new Set();
  const visit = (current) => {
    if (typeof current?.$ref === "string") {
      if (visited.has(current.$ref)) return [];
      visited.add(current.$ref);
      const target = components.schemas?.[schemaName(current.$ref)];
      return target === undefined ? [] : visit(target);
    }
    if (Array.isArray(current?.oneOf)) return current.oneOf.flatMap(visit);
    if (current?.type === "object") {
      const ok = current.properties?.ok;
      return typeof ok?.const === "boolean" ? [ok.const] : [];
    }
    return [];
  };
  return visit(schema);
};

if (reflectFalse.schema.constants[0]?.type !== "boolean") {
  throw new Error("bare false literal did not emit a boolean constant");
}
if (reflectFalse.schema.constants[0]?.values[0]?.value !== false) {
  throw new Error("bare false literal was not preserved");
}

assertValues("reflect union ok constants", collectReflectOkConstants(reflectOutput), [false, true]);
assertValues("json schema ok constants", collectJsonOkConstants(jsonOutput.schema, jsonOutput.components), [false, true]);

const getMe = jsonApplication.functions.find((func) => func.name === "getMe");
if (getMe?.output === undefined) {
  throw new Error("json application did not emit getMe output");
}
assertValues(
  "json application output ok constants",
  collectJsonOkConstants(getMe.output.schema, jsonApplication.components),
  [false, true],
);
`
