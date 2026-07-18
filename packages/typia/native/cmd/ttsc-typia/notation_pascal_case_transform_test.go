package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestNotationPascalCaseTransform verifies PascalCase notation conversion.
//
// Issue #2183: `notations.pascal` capitalized each multi-word segment without
// lowercasing its tail, so an all-caps or mixed-case word kept its inner
// uppercase characters and `MAX_COUNT` became `MAXCOUNT`. Both the statically
// emitted converter (Go, one property assignment per known key) and the dynamic
// converter (runtime `_notationPascal`, one call per index-signature key) must
// agree with the declared `PascalCase<T>` type — the type-level assertions live
// in `tests/test-interface/src/typings/test_pascal_case.ts` — or the result type
// lies about the produced keys and `.MaxCount` reads back `undefined`.
//
//  1. Transform a static fixture covering all-caps, mixed-case, leading
//     underscore, single-word (routed through `plain`, tail preserved), and
//     nested keys; require the emitted converter to reference the PascalCase
//     keys and never the un-lowercased `MAXCOUNT` form.
//  2. Execute the statically emitted converter and assert its runtime keys.
//  3. Execute the dynamic `Record` converter (runtime `_notationPascal`) over
//     the same all-caps witnesses and assert it produces the identical keys, so
//     the compile-time emit and the runtime helper are proven byte-equal.
func TestNotationPascalCaseTransform(t *testing.T) {
  project := notationPascalCaseProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("pascal notation transform failed: code=%d stderr=\n%s", code, errText)
  }
  for _, key := range []string{"MaxCount", "HttpPort", "UserId", "FoobarBaz", "InnerValue"} {
    if !strings.Contains(out, key) {
      t.Fatalf("emitted converter should contain PascalCase key %q:\n%s", key, out)
    }
  }
  for _, bug := range []string{"MAXCOUNT", "HTTPPORT", "FooBarBaz", "INNERVALUE"} {
    if strings.Contains(out, bug) {
      t.Fatalf("emitted converter must not keep the un-lowercased key %q:\n%s", bug, out)
    }
  }
  notationPascalCaseRunRuntimeCases(t, project, out)
}

func notationPascalCaseProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "notation-pascal-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(notationPascalCaseTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(notationPascalCaseSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func notationPascalCaseRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(notationPascalCaseRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("pascal notation runtime cases failed: %v\n%s", err, output)
  }
}

const notationPascalCaseTSConfig = `{
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

const notationPascalCaseSource = `import typia from "typia";

interface SourceRecord {
  MAX_COUNT: number;
  HTTP_PORT: number;
  USER_ID: number;
  fooBar_baz: number;
  _MAX_COUNT: number;
  userID: number;
  ID: number;
  nested: { INNER_VALUE: number };
}

type DynamicRecord = Record<string, { DEEP_VALUE: number }>;

export const toPascal = typia.notations.createPascal<SourceRecord>();
export const isPascal = typia.notations.createIsPascal<SourceRecord>();
export const assertPascal = typia.notations.createAssertPascal<SourceRecord>();
export const validatePascal =
  typia.notations.createValidatePascal<SourceRecord>();
export const toPascalDynamic = typia.notations.createPascal<DynamicRecord>();
`

const notationPascalCaseRuntimeRunner = `const mod = require("./main.cjs");

const valid = {
  MAX_COUNT: 1,
  HTTP_PORT: 2,
  USER_ID: 3,
  fooBar_baz: 4,
  _MAX_COUNT: 5,
  userID: 6,
  ID: 7,
  nested: { INNER_VALUE: 8 },
};
// Byte-for-byte the key set of PascalCase<SourceRecord>: multi-word tails
// lowercase (MAX_COUNT -> MaxCount), single words keep their tail through the
// plain path (userID -> UserID, ID -> ID).
const expectedKeys = [
  "MaxCount", "HttpPort", "UserId", "FoobarBaz", "_MaxCount", "UserID", "ID", "Nested",
];

const converted = mod.toPascal(valid);
const keys = Object.keys(converted).sort();
if (JSON.stringify(keys) !== JSON.stringify([...expectedKeys].sort())) {
  throw new Error("pascal conversion produced unexpected keys: " + JSON.stringify(keys));
}
if (converted.MaxCount !== 1 || converted.HttpPort !== 2 || converted.UserId !== 3) {
  throw new Error("pascal conversion lost multi-word values: " + JSON.stringify(converted));
}
if (converted.FoobarBaz !== 4 || converted._MaxCount !== 5) {
  throw new Error("mixed-case/leading-underscore keys converted incorrectly: " + JSON.stringify(converted));
}
if (converted.UserID !== 6 || converted.ID !== 7) {
  throw new Error("single-word keys must keep their tail: " + JSON.stringify(converted));
}
if (JSON.stringify(Object.keys(converted.Nested)) !== JSON.stringify(["InnerValue"])) {
  throw new Error("nested keys should recurse into PascalCase: " + JSON.stringify(converted.Nested));
}

if (mod.isPascal(valid) === null) {
  throw new Error("isPascal should accept the valid input");
}
if (mod.isPascal({ ...valid, MAX_COUNT: "x" }) !== null) {
  throw new Error("isPascal should reject an invalid property type");
}
if (mod.assertPascal(valid).MaxCount !== 1) {
  throw new Error("assertPascal should return the converted object");
}
let thrown = null;
try {
  mod.assertPascal({ ...valid, nested: { INNER_VALUE: "x" } });
} catch (error) {
  thrown = error;
}
if (thrown === null) {
  throw new Error("assertPascal should throw on invalid nested input");
}

const success = mod.validatePascal(valid);
if (success.success !== true || success.data.HttpPort !== 2) {
  throw new Error("validatePascal should succeed with converted data: " + JSON.stringify(success));
}
const failure = mod.validatePascal({ ...valid, ID: "x" });
if (failure.success !== false || failure.errors.length === 0) {
  throw new Error("validatePascal should collect errors for invalid input: " + JSON.stringify(failure));
}

// Dynamic index-signature keys route through the runtime _notationPascal helper
// rather than statically emitted assignments. Feeding the same all-caps
// witnesses proves the runtime helper and the compile-time emit agree.
const dynamic = mod.toPascalDynamic({
  MAX_COUNT: { DEEP_VALUE: 1 },
  HTTP_PORT: { DEEP_VALUE: 2 },
});
const dynamicKeys = Object.keys(dynamic).sort();
if (JSON.stringify(dynamicKeys) !== JSON.stringify(["HttpPort", "MaxCount"])) {
  throw new Error("dynamic pascal keys disagreed with the static emit: " + JSON.stringify(dynamicKeys));
}
if (
  !Object.hasOwn(dynamic.MaxCount, "DeepValue") ||
  !Object.hasOwn(dynamic.HttpPort, "DeepValue")
) {
  throw new Error("dynamic pascal nested keys were not lowercased: " + JSON.stringify(dynamic));
}
`
