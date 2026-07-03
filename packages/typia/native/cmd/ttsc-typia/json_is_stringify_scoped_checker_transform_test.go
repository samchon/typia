package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestJsonIsStringifyScopedCheckerTransform verifies validated stringify owns
// its branch-selection helpers.
//
// `json.isStringify` first validates with the regular checker collection, then
// serializes with the JSON stringify collection. A type with `toJSON()` can add
// JSON-only object-union branches, so the serializer must not reference `_io*`
// helpers from the validator collection.
//
//  1. Transform a `json.isStringify` fixture whose `toJSON()` returns an object
//     union absent from the regular checker graph.
//  2. Execute the emitted JavaScript through Node.
//  3. Require the serializer to return JSON text instead of throwing a missing
//     helper `ReferenceError`.
func TestJsonIsStringifyScopedCheckerTransform(t *testing.T) {
  project := jsonIsStringifyScopedCheckerProject(t)
  js := jsonIsStringifyScopedCheckerTransform(t, project)
  if !strings.Contains(js, "toJSON") {
    t.Fatalf("stringify fixture did not exercise toJSON emission:\n%s", js)
  }
  jsonIsStringifyScopedCheckerRunRuntime(t, project, js)
}

func jsonIsStringifyScopedCheckerProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "json-is-stringify-scoped-checker-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(jsonIsStringifyScopedCheckerTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(jsonIsStringifyScopedCheckerSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func jsonIsStringifyScopedCheckerTransform(t *testing.T, project string) string {
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
    t.Fatalf("json isStringify transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func jsonIsStringifyScopedCheckerRunRuntime(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(jsonIsStringifyScopedCheckerRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("json isStringify runtime failed: %v\n%s", err, output)
  }
}

const jsonIsStringifyScopedCheckerTSConfig = `{
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

const jsonIsStringifyScopedCheckerSource = `import typia from "typia";

interface JsonAlpha {
  data: {
    value: string;
  };
}

interface JsonBeta {
  data: {
    count: number;
  };
}

interface JsonBacked {
  id: string;
  toJSON(): JsonAlpha | JsonBeta;
}

interface Payload {
  items: JsonBacked[];
}

export const stringifyPayload = (input: unknown): string | null =>
  typia.json.isStringify<Payload>(input);
`

const jsonIsStringifyScopedCheckerRunner = `const mod = require("./main.cjs");

const text = mod.stringifyPayload({
  items: [
    {
      id: "box",
      toJSON() {
        return { data: { count: 3 } };
      },
    },
  ],
});

if (text === null) {
  throw new Error("json.isStringify rejected a valid toJSON payload");
}

const parsed = JSON.parse(text);
if (parsed.items[0].data.count !== 3) {
  throw new Error("json.isStringify serialized the wrong branch: " + text);
}
`

const jsonIsStringifyScopedCheckerNumberStub = `module.exports._jsonStringifyNumber = (value) => (isFinite(value) ? String(value) : "null");
`

const jsonIsStringifyScopedCheckerStringStub = `module.exports._jsonStringifyString = (value) => JSON.stringify(value);
`

const jsonIsStringifyScopedCheckerThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new Error(props.expected);
  Object.assign(error, props);
  throw error;
};
`
