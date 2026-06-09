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

// TestObjectCustomTagValidationTransform verifies object-target custom tags run.
//
// Object tags are stored on MetadataObject references, while object validator
// functions are shared by MetadataObjectType. This test pins the reference-level
// tag check so the transform cannot silently drop object custom validations when
// it reuses the shared object validator.
//
//  1. Transform a fixture with an object-target `TagBase` validator.
//  2. Assert the generated JavaScript contains the custom object expression.
//  3. Execute the emitted validator, requiring `createIs` and `createValidate`
//     to reject an empty partial object and accept a non-empty one.
func TestObjectCustomTagValidationTransform(t *testing.T) {
  project := objectCustomTagValidationProject(t)
  js := objectCustomTagValidationTransform(t, project, "js")
  if !strings.Contains(js, "Object.keys") || !strings.Contains(js, "length >= 1") {
    t.Fatalf("object custom tag validation was not emitted:\n%s", js)
  }
  objectCustomTagValidationRunRuntimeCases(t, project, js)
}

func objectCustomTagValidationProject(t *testing.T) string {
  t.Helper()
  root := objectCustomTagValidationRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "object-custom-tag-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(objectCustomTagValidationTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(objectCustomTagValidationSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func objectCustomTagValidationRepoRoot(t *testing.T) string {
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

func objectCustomTagValidationCapture(run func() int) (string, string, int) {
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

func objectCustomTagValidationTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := objectCustomTagValidationCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("object custom tag transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

func objectCustomTagValidationRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "validate-report-stub.cjs"), []byte(objectCustomTagValidationReportStub), 0o644); err != nil {
    t.Fatalf("write validate report stub: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "standard-schema-stub.cjs"), []byte(objectCustomTagValidationStandardSchemaStub), 0o644); err != nil {
    t.Fatalf("write standard schema stub: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "assert-guard-stub.cjs"), []byte(objectCustomTagValidationAssertGuardStub), 0o644); err != nil {
    t.Fatalf("write assert guard stub: %v", err)
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia")`, `require("./typia-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_validateReport")`, `require("./validate-report-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_createStandardSchema")`, `require("./standard-schema-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_assertGuard")`, `require("./assert-guard-stub.cjs")`)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(objectCustomTagValidationRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = project
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("object custom tag runtime cases failed: %v\n%s", err, output)
  }
}

const objectCustomTagValidationTSConfig = `{
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

const objectCustomTagValidationSource = `import typia from "typia";
import type { tags } from "typia";

type MinEntries<Value extends number> = tags.TagBase<{
  target: "object";
  kind: "minEntries";
  value: Value;
  validate: ` + "`Object.keys($input).length >= ${Value}`" + `;
  exclusive: true;
}>;

type Filters = Partial<{
  user_id: number;
  topic_id: number;
  post_id: number;
}> & MinEntries<1>;

type TaggedUnion =
  | ({
      type: "a";
      value?: number;
    } & MinEntries<2>)
  | {
      type: "b";
    };

const isFilters = typia.createIs<Filters>();
const validateFilters = typia.createValidate<Filters>();
const isTaggedUnion = typia.createIs<TaggedUnion>();
const validateTaggedUnion = typia.createValidate<TaggedUnion>();
const assertTaggedUnion = typia.createAssert<TaggedUnion>();

type Container = {
  union: TaggedUnion;
  other: string;
};

const validateContainer = typia.createValidate<Container>();
const assertContainer = typia.createAssert<Container>();

const capture = (task: () => void): null | { path?: string; expected?: string } => {
  try {
    task();
    return null;
  } catch (error) {
    return error as { path?: string; expected?: string };
  }
};

export const run = () => ({
  emptyIs: isFilters({}),
  validIs: isFilters({ user_id: 1 }),
  emptyValidate: validateFilters({}).success,
  validValidate: validateFilters({ user_id: 1 }).success,
  unionInvalidAIs: isTaggedUnion({ type: "a" }),
  unionValidAIs: isTaggedUnion({ type: "a", value: 1 }),
  unionValidBIs: isTaggedUnion({ type: "b" }),
  unionInvalidAValidate: validateTaggedUnion({ type: "a" }).success,
  unionValidAValidate: validateTaggedUnion({ type: "a", value: 1 }).success,
  unionValidBValidate: validateTaggedUnion({ type: "b" }).success,
  unionValidBAssert: capture(() => assertTaggedUnion({ type: "b" })),
  containerValidBAssert: capture(() =>
    assertContainer({ union: { type: "b" }, other: "ok" }),
  ),
  containerInvalidOtherAssert: capture(() =>
    assertContainer({ union: { type: "b" }, other: 1 as any }),
  ),
  containerInvalidOtherValidate: validateContainer({
    union: { type: "b" },
    other: 1 as any,
  }),
});
`

const objectCustomTagValidationRuntimeRunner = `const mod = require("./main.cjs");
const result = mod.run();

if (result.emptyIs !== false) throw new Error("empty object passed createIs");
if (result.validIs !== true) throw new Error("non-empty object failed createIs");
if (result.emptyValidate !== false) throw new Error("empty object passed createValidate");
if (result.validValidate !== true) throw new Error("non-empty object failed createValidate");
if (result.unionInvalidAIs !== false) throw new Error("tagged union branch passed createIs without enough entries");
if (result.unionValidAIs !== true) throw new Error("tagged union branch failed createIs with enough entries");
if (result.unionValidBIs !== true) throw new Error("untagged union branch failed createIs");
if (result.unionInvalidAValidate !== false) throw new Error("tagged union branch passed createValidate without enough entries");
if (result.unionValidAValidate !== true) throw new Error("tagged union branch failed createValidate with enough entries");
if (result.unionValidBValidate !== true) throw new Error("untagged union branch failed createValidate");
if (result.unionValidBAssert !== null) throw new Error("untagged union branch failed createAssert");
if (result.containerValidBAssert !== null) throw new Error("nested untagged union branch failed createAssert");
if (!result.containerInvalidOtherAssert || result.containerInvalidOtherAssert.path !== "$input.other") {
  throw new Error("nested union slow-path assert reported the wrong path: " + JSON.stringify(result.containerInvalidOtherAssert));
}
if (result.containerInvalidOtherValidate.success !== false) {
  throw new Error("container with invalid other property passed createValidate");
}
const paths = result.containerInvalidOtherValidate.errors.map((error) => error.path);
if (paths.includes("$input.union")) {
  throw new Error("nested valid union emitted a spurious validation error: " + JSON.stringify(result.containerInvalidOtherValidate.errors));
}
if (!paths.includes("$input.other")) {
  throw new Error("container validation did not report the invalid other property: " + JSON.stringify(result.containerInvalidOtherValidate.errors));
}
`

const objectCustomTagValidationReportStub = `module.exports._validateReport = (array) => {
  return (exceptable, error) => {
    if (exceptable) array.push(error);
    return false;
  };
};
`

const objectCustomTagValidationStandardSchemaStub = `module.exports._createStandardSchema = (validate) => validate;
`

const objectCustomTagValidationAssertGuardStub = `module.exports._assertGuard = (exceptionable, props, factory) => {
  if (exceptionable) {
    const error = factory ? factory(props) : new Error(props.expected);
    Object.assign(error, props);
    throw error;
  }
  return false;
};
`
