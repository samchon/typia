package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestExcludeTypeTagTransform verifies the exclude type tag.
//
// `tags.Exclude<Values>` rejects listed literal values. The excluded
// literals travel in the tag's JSON schema fragment (`not.enum`) because a
// tuple of values cannot be templated into a single validate literal, so the
// checker synthesizes the `!==` chain itself and the JSON schema emitter
// merges the fragment untouched (#1630).
//
//  1. Transform a fixture excluding number, string, bigint, and
//     template-literal values.
//  2. Require the emitted JSON schema to carry `not: { enum: [...] }`.
//  3. Execute is/validate runtime cases: excluded values fail with the tag
//     named in the error, all other values of the base type pass.
func TestExcludeTypeTagTransform(t *testing.T) {
  project := excludeTypeTagProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("exclude tag transform failed: code=%d stderr=\n%s", code, errText)
  }
  for _, needle := range []string{"not:", `"enum"`, "input.port !== 0", `input.name !== "admin"`} {
    if !strings.Contains(out, needle) {
      t.Fatalf("emitted output should contain %q:\n%s", needle, out)
    }
  }
  excludeTypeTagRunRuntimeCases(t, project, out)
}

func excludeTypeTagProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "exclude-tag-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(excludeTypeTagTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(excludeTypeTagSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func excludeTypeTagRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(excludeTypeTagRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("exclude tag runtime cases failed: %v\n%s", err, output)
  }
}

const excludeTypeTagTSConfig = `{
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

const excludeTypeTagSource = `import typia, { tags } from "typia";

interface IConfig {
  port: number & tags.Exclude<[0, 22, 80]>;
  name: string & tags.Exclude<["admin", "root"]>;
  serial: bigint & tags.Exclude<[0n]>;
  account: ` + "`user-${string}`" + ` & tags.Exclude<["user-admin"]>;
}

export const isConfig = typia.createIs<IConfig>();
export const validateConfig = typia.createValidate<IConfig>();
export const schema = typia.json.schemas<[{ port: number & tags.Exclude<[0, 22, 80]> }]>();
`

const excludeTypeTagRuntimeRunner = `const mod = require("./main.cjs");

const valid = { port: 8080, name: "user", serial: 1n, account: "user-one" };
if (mod.isConfig(valid) !== true) {
  throw new Error("non-excluded values should pass is");
}
for (const port of [0, 22, 80]) {
  if (mod.isConfig({ ...valid, port }) !== false) {
    throw new Error("excluded port " + port + " should fail is");
  }
}
for (const name of ["admin", "root"]) {
  if (mod.isConfig({ ...valid, name }) !== false) {
    throw new Error("excluded name " + name + " should fail is");
  }
}
if (mod.isConfig({ ...valid, serial: 0n }) !== false) {
  throw new Error("excluded bigint serial should fail is");
}
if (mod.isConfig({ ...valid, serial: 2n }) !== true) {
  throw new Error("non-excluded bigint serial should pass is");
}
if (mod.isConfig({ ...valid, account: "user-admin" }) !== false) {
  throw new Error("excluded template literal value should fail is");
}
if (mod.isConfig({ ...valid, account: "nomatch" }) !== false) {
  throw new Error("template pattern should still be enforced next to exclude");
}

const failure = mod.validateConfig({ ...valid, port: 22 });
if (failure.success !== false) {
  throw new Error("excluded port should fail validate");
}
if (!failure.errors.some((e) => e.path === "$input.port" && e.expected.includes("Exclude"))) {
  throw new Error("validate error should name the exclude tag: " + JSON.stringify(failure.errors));
}
if (mod.validateConfig(valid).success !== true) {
  throw new Error("valid input should pass validate");
}

const unit = mod.schema.schemas[0];
const resolved = unit.$ref
  ? mod.schema.components.schemas[unit.$ref.split("/").pop()]
  : unit;
const port = resolved.properties.port;
if (!port.not || JSON.stringify(port.not["enum"]) !== "[0,22,80]") {
  throw new Error("JSON schema should carry not.enum: " + JSON.stringify(port));
}
`
