package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestJsonStringifyConstantAtomicUnionTransform verifies stringify union routing.
//
// `json.createStringify` routes constant and atomic buckets through the runtime
// atomic predicates before emitting per-bucket serializers. Without coverage
// here, a regression in that routing would silently drop a constant or atomic
// union member from the emitted serializer.
//
//  1. Transform a stringify fixture whose object mixes string constants,
//     numeric constants, and a plain numeric atomic.
//  2. Require the emitted serializer to reference the stringify helpers.
//  3. Execute the serializer and require JSON-equal output for every union
//     member, including the non-finite number fallback.
func TestJsonStringifyConstantAtomicUnionTransform(t *testing.T) {
  project := jsonStringifyConstantAtomicUnionProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("stringify union transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, "_jsonStringifyString") || !strings.Contains(out, "_jsonStringifyNumber") {
    t.Fatalf("stringify union serializer was not emitted:\n%s", out)
  }
  jsonStringifyConstantAtomicUnionRunRuntimeCases(t, project, out)
}

func jsonStringifyConstantAtomicUnionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-stringify-union-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(jsonStringifyConstantAtomicUnionTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonStringifyConstantAtomicUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func jsonStringifyConstantAtomicUnionRunRuntimeCases(t *testing.T, project string, js string) {
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
    "json-stringify-string-stub.cjs":  jsonStringifyConstantAtomicUnionStringStub,
    "json-stringify-number-stub.cjs":  jsonStringifyConstantAtomicUnionNumberStub,
    "throw-type-guard-error-stub.cjs": jsonStringifyConstantAtomicUnionThrowStub,
  }
  for name, content := range stubs {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia/lib/internal/_jsonStringifyString")`, `require("./json-stringify-string-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_jsonStringifyNumber")`, `require("./json-stringify-number-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_throwTypeGuardError")`, `require("./throw-type-guard-error-stub.cjs")`)
  runtimeJS = ttscTypiaTestRewriteCommonJS(t, runtimeJS)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(jsonStringifyConstantAtomicUnionRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("stringify union runtime cases failed: %v\n%s", err, output)
  }
}

const jsonStringifyConstantAtomicUnionTSConfig = `{
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

const jsonStringifyConstantAtomicUnionSource = `import typia from "typia";

interface SerializedRecord {
  kind: "a" | "b";
  flag: 1 | 2;
  count: number;
  name: string;
}

export const stringifyRecord = typia.json.createStringify<SerializedRecord>();
`

const jsonStringifyConstantAtomicUnionStringStub = `module.exports._jsonStringifyString = (str) => JSON.stringify(str);
`

const jsonStringifyConstantAtomicUnionNumberStub = `module.exports._jsonStringifyNumber = (value) => (isFinite(value) ? value : null);
`

const jsonStringifyConstantAtomicUnionThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new Error(props.expected);
  Object.assign(error, props);
  throw error;
};
`

const jsonStringifyConstantAtomicUnionRuntimeRunner = `const mod = require("./main.cjs");

const expectEqual = (name, input) => {
  const text = mod.stringifyRecord(input);
  const parsed = JSON.parse(text);
  for (const key of Object.keys(input)) {
    if (parsed[key] !== input[key]) {
      throw new Error(name + " mismatched property " + key + ": " + text);
    }
  }
  if (Object.keys(parsed).length !== Object.keys(input).length) {
    throw new Error(name + " emitted unexpected property count: " + text);
  }
};

expectEqual("kind=a flag=1", { kind: "a", flag: 1, count: 0.5, name: "first" });
expectEqual("kind=b flag=2", { kind: "b", flag: 2, count: -3, name: "second" });

const infinite = JSON.parse(mod.stringifyRecord({ kind: "a", flag: 1, count: Infinity, name: "edge" }));
if (infinite.count !== null) {
  throw new Error("non-finite count should serialize as null: " + JSON.stringify(infinite));
}
`
