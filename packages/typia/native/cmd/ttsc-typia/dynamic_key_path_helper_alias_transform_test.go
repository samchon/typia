package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestDynamicKeyPathHelperAliasTransform verifies materialization of the dynamic-key path helper alias.
//
// A generated diagnostic path helper reference requires a materialized callable binding in the same output; a type-only/import reference cannot supply it at runtime.
//
// 1. The dynamic-key fixture exercises path-producing validation rather than fixed property access; exact path formatting is covered by the helper unit cases.
// 2. The emitted JavaScript must contain the local accessExpressionAsString alias definition required by generated error paths.
//
// @evidence contracts/testing.md#behavioral-verification The emitted JavaScript must contain the local accessExpressionAsString alias definition required by generated error paths.
// @evidence contracts/testing.md#independent-expectations A generated diagnostic path helper reference requires a materialized callable binding in the same output; a type-only/import reference cannot supply it at runtime.
// @evidence contracts/testing.md#distinguishing-cases The dynamic-key fixture exercises path-producing validation rather than fixed property access; exact path formatting is covered by the helper unit cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestDynamicKeyPathHelperAliasTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestDynamicKeyPathHelperAliasTransform(t *testing.T) {
  project := dynamicKeyPathHelperAliasProject(t)
  js := dynamicKeyPathHelperAliasTransform(t, project, "js")
  if !strings.Contains(js, "const __typia_transform__accessExpressionAsString =") {
    t.Fatalf("dynamic-key path helper alias was not materialized:\n%s", js)
  }
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
