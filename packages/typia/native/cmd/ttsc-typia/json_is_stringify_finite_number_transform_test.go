package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestJsonIsStringifyFiniteNumberTransform pins json.isStringify against a bare
// number leaf so a non-finite value cannot leak into the serialized text (#2196).
//
// json.isStringify forces Options.Finite on its inner `__is` guard precisely to
// keep NaN and Infinity out of JSON. Because `is` dropped `finite`, that guard
// accepted NaN, so `__is(input) ? __stringify(input) : null` serialized the input
// instead of returning the top-level null it owes an invalid value. Both option
// rows reproduce a distinct failure the fix must close:
//
//   - default options: the validated stringify folds the number through
//     _jsonStringifyNumber, so NaN silently became `{"value":null}` -- an accepted
//     invalid input rather than a rejected one.
//   - finite:true: the validated stringify emits raw `String(input)` for the
//     number, so NaN became the literal `{"value":NaN}` token -- invalid JSON that
//     JSON.parse throws on. This is the corruption hole the guard closes.
//
//  1. Transform a `json.isStringify<{ value: number }>` fixture per option row.
//  2. Execute the emitted serializer in Node.
//  3. Require a finite value to serialize and NaN/Infinity/-Infinity to yield null.
func TestJsonIsStringifyFiniteNumberTransform(t *testing.T) {
  for _, tc := range jsonIsStringifyFiniteNumberCases() {
    t.Run(tc.name, func(t *testing.T) {
      project := jsonIsStringifyFiniteNumberProject(t)
      js := jsonIsStringifyFiniteNumberTransform(t, project, tc.payload)
      jsonIsStringifyFiniteNumberRunRuntime(t, project, js)
    })
  }
}

type jsonIsStringifyFiniteNumberCase struct {
  name    string
  payload string
}

func jsonIsStringifyFiniteNumberCases() []jsonIsStringifyFiniteNumberCase {
  return []jsonIsStringifyFiniteNumberCase{
    {
      name:    "default options",
      payload: `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`,
    },
    {
      name:    "finite option on",
      payload: `[{"config":{"transform":"typia/lib/transform","finite":true},"name":"typia","stage":"transform"}]`,
    },
  }
}

func jsonIsStringifyFiniteNumberProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-is-stringify-finite-number-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(jsonIsStringifyFiniteNumberTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonIsStringifyFiniteNumberSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func jsonIsStringifyFiniteNumberTransform(t *testing.T, project string, payload string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
      "--plugins-json", payload,
    })
  })
  if code != 0 {
    t.Fatalf("json isStringify finite transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func jsonIsStringifyFiniteNumberRunRuntime(t *testing.T, project string, js string) {
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
  stubs := map[string]string{
    "json-stringify-number-stub.cjs":  jsonIsStringifyScopedCheckerNumberStub,
    "json-stringify-string-stub.cjs":  jsonIsStringifyScopedCheckerStringStub,
    "throw-type-guard-error-stub.cjs": jsonIsStringifyScopedCheckerThrowStub,
  }
  for name, content := range stubs {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia/lib/internal/_jsonStringifyNumber")`, `require("./json-stringify-number-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_jsonStringifyString")`, `require("./json-stringify-string-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_throwTypeGuardError")`, `require("./throw-type-guard-error-stub.cjs")`)
  runtimeJS = ttscTypiaTestRewriteCommonJS(t, runtimeJS)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(jsonIsStringifyFiniteNumberRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("json isStringify finite runtime failed: %v\n%s", err, output)
  }
  const expected = "RAN 4 CASES"
  if !strings.Contains(string(output), expected) {
    t.Fatalf("json isStringify finite runner did not report %q; got:\n%s", expected, output)
  }
}

const jsonIsStringifyFiniteNumberTSConfig = `{
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

const jsonIsStringifyFiniteNumberSource = `import typia from "typia";

interface Box {
  value: number;
}

export const stringify = (input: unknown): string | null =>
  typia.json.isStringify<Box>(input);
`

const jsonIsStringifyFiniteNumberRunner = `const mod = require("./main.cjs");

const finite = mod.stringify({ value: 1 });
if (finite === null) {
  throw new Error("json.isStringify rejected a finite number");
}
const parsed = JSON.parse(finite);
if (parsed.value !== 1) {
  throw new Error("json.isStringify serialized the wrong value: " + finite);
}

let ran = 1;
for (const [name, value] of [
  ["NaN", Number.NaN],
  ["Infinity", Number.POSITIVE_INFINITY],
  ["-Infinity", Number.NEGATIVE_INFINITY],
]) {
  const out = mod.stringify({ value });
  ran += 1;
  if (out !== null) {
    throw new Error(
      name + " leaked into json.isStringify output instead of null: " + JSON.stringify(out),
    );
  }
}

console.log("RAN " + ran + " CASES");
`
