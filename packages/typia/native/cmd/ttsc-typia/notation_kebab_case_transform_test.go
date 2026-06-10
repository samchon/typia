package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestNotationKebabCaseTransform verifies kebab-case notation conversion.
//
// `notations.kebab` derives the snake_case form of every property name and
// rewrites the word separators to hyphens, keeping leading underscores. The
// type-level `KebabCase<T>` must agree with the runtime rename exactly, or
// the declared result type lies about the produced keys.
//
//  1. Transform a fixture covering camelCase, snake_case, leading-underscore,
//     consecutive-uppercase (the acronym run collapses, so `XMLParser` becomes
//     `xmlparser`), and nested property names. The matching compile-time
//     `KebabCase<T>` assertions live in the test-typia-generate fixture, where
//     ttsc enforces type diagnostics.
//  2. Require the emitted converter to reference the kebab-case keys.
//  3. Execute kebab, isKebab, assertKebab, and validateKebab runtime cases
//     over valid and invalid inputs.
func TestNotationKebabCaseTransform(t *testing.T) {
  project := notationKebabCaseProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("kebab notation transform failed: code=%d stderr=\n%s", code, errText)
  }
  for _, key := range []string{`"user-id"`, `"user-name"`, `"_private-value"`, `xmlparser:`, `"inner-value"`} {
    if !strings.Contains(out, key) {
      t.Fatalf("emitted converter should contain kebab key %s:\n%s", key, out)
    }
  }
  notationKebabCaseRunRuntimeCases(t, project, out)
}

func notationKebabCaseProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "notation-kebab-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(notationKebabCaseTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(notationKebabCaseSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func notationKebabCaseRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(notationKebabCaseRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("kebab notation runtime cases failed: %v\n%s", err, output)
  }
}

const notationKebabCaseTSConfig = `{
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

const notationKebabCaseSource = `import typia from "typia";

interface SourceRecord {
  userId: string;
  user_name: string;
  _privateValue: number;
  XMLParser: boolean;
  nested: { innerValue: string };
}

export const toKebab = typia.notations.createKebab<SourceRecord>();
export const isKebab = typia.notations.createIsKebab<SourceRecord>();
export const assertKebab = typia.notations.createAssertKebab<SourceRecord>();
export const validateKebab =
  typia.notations.createValidateKebab<SourceRecord>();
`

const notationKebabCaseRuntimeRunner = `const mod = require("./main.cjs");

const valid = {
  userId: "u-1",
  user_name: "John",
  _privateValue: 3,
  XMLParser: true,
  nested: { innerValue: "deep" },
};
const expectedKeys = ["user-id", "user-name", "_private-value", "xmlparser", "nested"];

const converted = mod.toKebab(valid);
const keys = Object.keys(converted).sort();
if (JSON.stringify(keys) !== JSON.stringify([...expectedKeys].sort())) {
  throw new Error("kebab conversion produced unexpected keys: " + JSON.stringify(keys));
}
if (converted["user-id"] !== "u-1" || converted["user-name"] !== "John") {
  throw new Error("kebab conversion lost property values: " + JSON.stringify(converted));
}
if (converted["_private-value"] !== 3 || converted["xmlparser"] !== true) {
  throw new Error("prefix/acronym keys converted incorrectly: " + JSON.stringify(converted));
}
if (JSON.stringify(Object.keys(converted.nested)) !== JSON.stringify(["inner-value"])) {
  throw new Error("nested keys should be kebab-cased: " + JSON.stringify(converted.nested));
}

if (mod.isKebab(valid) === null) {
  throw new Error("isKebab should accept the valid input");
}
if (mod.isKebab({ ...valid, userId: 1 }) !== null) {
  throw new Error("isKebab should reject an invalid property type");
}
if (mod.assertKebab(valid)["user-id"] !== "u-1") {
  throw new Error("assertKebab should return the converted object");
}
let thrown = null;
try {
  mod.assertKebab({ ...valid, nested: { innerValue: 1 } });
} catch (error) {
  thrown = error;
}
if (thrown === null) {
  throw new Error("assertKebab should throw on invalid nested input");
}

const success = mod.validateKebab(valid);
if (success.success !== true || success.data["user-name"] !== "John") {
  throw new Error("validateKebab should succeed with converted data: " + JSON.stringify(success));
}
const failure = mod.validateKebab({ ...valid, XMLParser: "yes" });
if (failure.success !== false || failure.errors.length === 0) {
  throw new Error("validateKebab should collect errors for invalid input: " + JSON.stringify(failure));
}
`
