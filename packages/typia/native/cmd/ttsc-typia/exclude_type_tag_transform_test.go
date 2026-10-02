package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestExcludeTypeTagTransform verifies excluded literal predicates and JSON schema negation.
//
// Exclude forbids the authored literals while retaining other base-type values; JSON Schema expresses the same finite exclusion through not.enum.
//
// 1. Number, string, bigint and template-literal fixtures exercise the tag; the owned assertions distinguish numeric/string exclusions and schema negation without claiming runtime acceptance tests.
// 2. The output contains not/enum schema metadata and explicit port/name excluded-value comparisons.
//
// @evidence contracts/testing.md#behavioral-verification The output contains not/enum schema metadata and explicit port/name excluded-value comparisons.
// @evidence contracts/testing.md#independent-expectations Exclude forbids the authored literals while retaining other base-type values; JSON Schema expresses the same finite exclusion through not.enum.
// @evidence contracts/testing.md#distinguishing-cases Number, string, bigint and template-literal fixtures exercise the tag; the owned assertions distinguish numeric/string exclusions and schema negation without claiming runtime acceptance tests.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestExcludeTypeTagTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
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
}

func excludeTypeTagProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "exclude-tag-")
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
