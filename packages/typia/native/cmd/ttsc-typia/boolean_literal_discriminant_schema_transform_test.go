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
//  3. Assert the reflect, JSON schema, and JSON application outputs preserve
//     the boolean constants on the correct object branches.
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
  if strings.Contains(js, `require("typia")`) && !strings.Contains(runtimeJS, `require("./typia-stub.cjs")`) {
    t.Fatal("runtime module did not rewrite the typia import to the empty stub")
  }
  for _, needle := range []string{`require("typia")`, `require('typia')`, `from "typia"`, `from 'typia'`} {
    if strings.Contains(runtimeJS, needle) {
      t.Fatalf("runtime module still contains root typia import %q", needle)
    }
  }
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
  getMeInline(): Promise<
    | { ok: false; error: { code: string } }
    | { ok: true; code: string; data: { id: string } }
  >;
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

const assertStrings = (name, actual, expected) => {
  const normalized = [...actual].sort();
  if (JSON.stringify(normalized) !== JSON.stringify(expected)) {
    throw new Error(name + ": expected " + JSON.stringify(expected) + " but got " + JSON.stringify(normalized));
  }
};

const reflectProperty = (object, key) =>
  object.properties.find(
    (property) =>
      property.key.constants[0]?.type === "string" &&
      property.key.constants[0]?.values[0]?.value === key,
  );

const reflectOkConstant = (object) =>
  reflectProperty(object, "ok")?.value.constants
    .find((constant) => constant.type === "boolean")
    ?.values.map((value) => value.value)
    .filter((value) => typeof value === "boolean");

const collectReflectOkConstants = (unit) =>
  unit.components.objects
    .filter((object) => reflectProperty(object, "ok") !== undefined)
    .flatMap((object) => reflectOkConstant(object) ?? []);

const assertReflectBranch = (unit, sibling, expected) => {
  const branch = unit.components.objects.find(
    (object) =>
      reflectProperty(object, "ok") !== undefined &&
      reflectProperty(object, sibling) !== undefined,
  );
  if (branch === undefined) {
    throw new Error("reflect branch with property " + sibling + " was not emitted");
  }
  assertValues("reflect branch " + sibling + " ok constant", reflectOkConstant(branch) ?? [], [expected]);
};

const schemaName = (ref) => ref.split("/").at(-1);

const collectJsonRefs = (schema) => {
  const visit = (current) => {
    if (typeof current?.$ref === "string") return [current.$ref];
    if (Array.isArray(current?.oneOf)) return current.oneOf.flatMap(visit);
    if (current?.type === "object") {
      return Object.values(current.properties ?? {}).flatMap(visit);
    }
    return [];
  };
  return visit(schema);
};

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

const collectJsonObjects = (schema, components) => {
  const visited = new Set();
  const visit = (current) => {
    if (typeof current?.$ref === "string") {
      if (visited.has(current.$ref)) return [];
      visited.add(current.$ref);
      const target = components.schemas?.[schemaName(current.$ref)];
      return target === undefined ? [] : visit(target);
    }
    if (Array.isArray(current?.oneOf)) return current.oneOf.flatMap(visit);
    if (current?.type === "object") return [current];
    return [];
  };
  return visit(schema);
};

const assertJsonBranch = (name, schema, components, sibling, expected) => {
  const branch = collectJsonObjects(schema, components).find(
    (object) =>
      object.properties?.ok !== undefined &&
      object.properties?.[sibling] !== undefined,
  );
  if (branch === undefined) {
    throw new Error(name + " branch with property " + sibling + " was not emitted");
  }
  const actual = branch.properties.ok?.const;
  if (actual !== expected) {
    throw new Error(name + " branch " + sibling + " expected ok " + expected + " but got " + actual);
  }
};

if (reflectFalse.schema.constants[0]?.type !== "boolean") {
  throw new Error("bare false literal did not emit a boolean constant");
}
if (reflectFalse.schema.constants[0]?.values[0]?.value !== false) {
  throw new Error("bare false literal was not preserved");
}

assertValues("reflect union ok constants", collectReflectOkConstants(reflectOutput), [false, true]);
assertReflectBranch(reflectOutput, "error", false);
assertReflectBranch(reflectOutput, "data", true);

if (jsonOutput.components.schemas?.IFailure === undefined) {
  throw new Error("json schema did not emit IFailure component");
}
if (jsonOutput.components.schemas?.ISuccess === undefined) {
  throw new Error("json schema did not emit ISuccess component");
}
assertStrings("json schema branch refs", collectJsonRefs(jsonOutput.schema), [
  "#/components/schemas/IFailure",
  "#/components/schemas/ISuccess",
]);
assertValues("json schema ok constants", collectJsonOkConstants(jsonOutput.schema, jsonOutput.components), [false, true]);
assertJsonBranch("json schema", jsonOutput.schema, jsonOutput.components, "error", false);
assertJsonBranch("json schema", jsonOutput.schema, jsonOutput.components, "data", true);

const getMe = jsonApplication.functions.find((func) => func.name === "getMe");
if (getMe?.output === undefined) {
  throw new Error("json application did not emit getMe output");
}
if (jsonApplication.components.schemas?.IFailure === undefined) {
  throw new Error("json application did not emit IFailure component");
}
if (jsonApplication.components.schemas?.ISuccess === undefined) {
  throw new Error("json application did not emit ISuccess component");
}
if (jsonApplication.components.schemas?.Output === undefined) {
  throw new Error("json application did not emit Output component");
}
assertStrings("json application output ref", collectJsonRefs(getMe.output.schema), [
  "#/components/schemas/Output",
]);
assertStrings("json application Output branch refs", collectJsonRefs(jsonApplication.components.schemas.Output), [
  "#/components/schemas/IFailure",
  "#/components/schemas/ISuccess",
]);
assertValues(
  "json application output ok constants",
  collectJsonOkConstants(getMe.output.schema, jsonApplication.components),
  [false, true],
);
assertJsonBranch("json application output", getMe.output.schema, jsonApplication.components, "error", false);
assertJsonBranch("json application output", getMe.output.schema, jsonApplication.components, "data", true);

const getMeInline = jsonApplication.functions.find((func) => func.name === "getMeInline");
if (getMeInline?.output === undefined) {
  throw new Error("json application did not emit getMeInline output");
}
assertValues(
  "json application inline output ok constants",
  collectJsonOkConstants(getMeInline.output.schema, jsonApplication.components),
  [false, true],
);
assertJsonBranch("json application inline output", getMeInline.output.schema, jsonApplication.components, "error", false);
assertJsonBranch("json application inline output", getMeInline.output.schema, jsonApplication.components, "data", true);
`
