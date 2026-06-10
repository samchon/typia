package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestMiscCloneBigIntWrapperTransform verifies BigInt wrapper unboxing.
//
// Collecting TypeScript `BigInt` as native metadata routes `misc.clone` and
// notation programmers into their native arms. Those arms must unbox the four
// primitive wrappers through `valueOf()`; before the fix the default branch
// emitted a bare zero-argument `BigInt()`, which throws for every input, so
// clone of a valid `BigInt` value always failed at runtime.
//
//  1. Transform a fixture cloning `BigInt`, `bigint | BigInt`, and camelizing
//     an object with a `BigInt` property.
//  2. Require the emitted code to call `valueOf` and never bare `BigInt()`.
//  3. Execute clone, assertClone, and camel notation over primitive and boxed
//     inputs and require primitive bigint identities back.
func TestMiscCloneBigIntWrapperTransform(t *testing.T) {
  project := miscCloneBigIntWrapperProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("bigint wrapper clone transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, ".valueOf()") {
    t.Fatalf("bigint wrapper clone should unbox through valueOf:\n%s", out)
  }
  if strings.Contains(out, "BigInt()") {
    t.Fatalf("bigint wrapper clone must not emit a bare BigInt() call:\n%s", out)
  }
  miscCloneBigIntWrapperRunRuntimeCases(t, project, out)
}

func miscCloneBigIntWrapperProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "misc-clone-bigint-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(miscCloneBigIntWrapperTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(miscCloneBigIntWrapperSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func miscCloneBigIntWrapperRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(miscCloneBigIntWrapperRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("bigint wrapper clone runtime cases failed: %v\n%s", err, output)
  }
}

const miscCloneBigIntWrapperTSConfig = `{
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

const miscCloneBigIntWrapperSource = `import typia from "typia";

interface BoxedRecord {
  big_value: BigInt;
}

export const cloneInterface = typia.misc.createClone<BigInt>();
export const cloneUnion = typia.misc.createClone<bigint | BigInt>();
export const assertCloneInterface = typia.misc.createAssertClone<BigInt>();
export const camelRecord = typia.notations.createCamel<BoxedRecord>();
`

const miscCloneBigIntWrapperRuntimeRunner = `const mod = require("./main.cjs");

const boxed = Object(1n);
const expectPrimitive = (name, value, expected) => {
  if (typeof value !== "bigint" || value !== expected) {
    throw new Error(name + " should produce primitive " + expected + "n, got " + String(value) + " (" + typeof value + ")");
  }
};

expectPrimitive("cloneInterface(1n)", mod.cloneInterface(1n), 1n);
expectPrimitive("cloneInterface(Object(1n))", mod.cloneInterface(boxed), 1n);
expectPrimitive("cloneUnion(1n)", mod.cloneUnion(1n), 1n);
expectPrimitive("cloneUnion(Object(1n))", mod.cloneUnion(boxed), 1n);
expectPrimitive("assertCloneInterface(1n)", mod.assertCloneInterface(1n), 1n);
expectPrimitive("assertCloneInterface(Object(1n))", mod.assertCloneInterface(boxed), 1n);

expectPrimitive(
  "camelRecord({big_value: Object(2n)}).bigValue",
  mod.camelRecord({ big_value: Object(2n) }).bigValue,
  2n,
);
expectPrimitive(
  "camelRecord({big_value: 3n}).bigValue",
  mod.camelRecord({ big_value: 3n }).bigValue,
  3n,
);
`
