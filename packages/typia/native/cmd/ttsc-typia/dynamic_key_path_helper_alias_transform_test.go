package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestDynamicKeyPathHelperAliasTransform verifies dynamic-key path helpers run.
//
// Dynamic object keys build path postfixes as expression text, so the
// emit-context importer must materialize the internal helper alias that those
// snippets reference. Otherwise transformed assert and validate functions import
// the helper module but throw ReferenceError before reporting the path.
//
//  1. Transform a string-keyed record fixture through ttsc-typia.
//  2. Assert the generated JavaScript defines the text-snippet helper alias.
//  3. Execute assert, assertGuard, and validate failures for identifier and
//     quoted keys, and verify their reported paths.
func TestDynamicKeyPathHelperAliasTransform(t *testing.T) {
  project := dynamicKeyPathHelperAliasProject(t)
  js := dynamicKeyPathHelperAliasTransform(t, project, "js")
  if !strings.Contains(js, "const __typia_transform__accessExpressionAsString =") {
    t.Fatalf("dynamic-key path helper alias was not materialized:\n%s", js)
  }
  dynamicKeyPathHelperAliasRunRuntimeCases(t, project, js)
}

func dynamicKeyPathHelperAliasProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "dynamic-key-path-helper-alias-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(dynamicKeyPathHelperAliasTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(dynamicKeyPathHelperAliasSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func dynamicKeyPathHelperAliasTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("dynamic-key path transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

func dynamicKeyPathHelperAliasRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(dynamicKeyPathHelperAliasRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = project
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("dynamic-key path runtime cases failed: %v\n%s", err, output)
  }
}

const dynamicKeyPathHelperAliasTSConfig = `{
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

const dynamicKeyPathHelperAliasSource = `import typia from "typia";

type NumericRecord = Record<string, number>;

const assertRecord = typia.createAssert<NumericRecord>();
const assertGuardRecord = typia.createAssertGuard<NumericRecord>();
const validateRecord = typia.createValidate<NumericRecord>();

const capture = (task: () => void): null | { path?: string; expected?: string } => {
  try {
    task();
    return null;
  } catch (error) {
    return error as { path?: string; expected?: string };
  }
};

export const run = () => ({
  assertIdentifier: capture(() => assertRecord({ validKey: "not-number" as any })),
  assertQuoted: capture(() => assertRecord({ "bad-key": "not-number" as any })),
  guardQuoted: capture(() => assertGuardRecord({ "bad-key": "not-number" as any })),
  validateQuoted: validateRecord({ "bad-key": "not-number" as any }),
});
`

const dynamicKeyPathHelperAliasRuntimeRunner = `const mod = require("./main.cjs");
const result = mod.run();

if (!result.assertIdentifier || result.assertIdentifier.path !== "$input.validKey") {
  throw new Error("assert identifier key path mismatch: " + JSON.stringify(result.assertIdentifier));
}
if (!result.assertQuoted || result.assertQuoted.path !== "$input[\"bad-key\"]") {
  throw new Error("assert quoted key path mismatch: " + JSON.stringify(result.assertQuoted));
}
if (!result.guardQuoted || result.guardQuoted.path !== "$input[\"bad-key\"]") {
  throw new Error("assertGuard quoted key path mismatch: " + JSON.stringify(result.guardQuoted));
}
if (result.validateQuoted.success !== false) {
  throw new Error("validate accepted a non-number record value");
}
if (!result.validateQuoted.errors.some((error) => error.path === "$input[\"bad-key\"]")) {
  throw new Error("validate quoted key path mismatch: " + JSON.stringify(result.validateQuoted.errors));
}
`
