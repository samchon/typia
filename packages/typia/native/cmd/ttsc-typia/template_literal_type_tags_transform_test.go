package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestTemplateLiteralTypeTagsTransform verifies tags on template literals.
//
// Type tags intersected with a template literal type reached the metadata
// (JSON schema emitted them correctly) but the runtime checker's template
// entry ignored its tag matrix, so `MaxLength`/`Pattern` and every other
// validate-able tag silently vanished from `is`/`assert`/`validate` whenever
// the base type was a template literal instead of plain `string` (#1635).
//
//  1. Transform fixtures intersecting tags with a sole template literal and
//     with a union of differently-tagged template literals.
//  2. Require the emitted checker to carry the tag predicates.
//  3. Execute runtime cases: tag-violating strings must fail even when they
//     match the template pattern, per union member.
func TestTemplateLiteralTypeTagsTransform(t *testing.T) {
  project := templateLiteralTypeTagsProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("template literal tags transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, "length <= 30") || !strings.Contains(out, "RegExp(/^prefix(.*)postfix$/)") {
    t.Fatalf("emitted checker should combine the template pattern with its tags:\n%s", out)
  }
  templateLiteralTypeTagsRunRuntimeCases(t, project, out)
}

func templateLiteralTypeTagsProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "template-tags-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(templateLiteralTypeTagsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(templateLiteralTypeTagsSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func templateLiteralTypeTagsRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(templateLiteralTypeTagsRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("template literal tags runtime cases failed: %v\n%s", err, output)
  }
}

const templateLiteralTypeTagsTSConfig = `{
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

const templateLiteralTypeTagsSource = `import typia, { tags } from "typia";

type Tagged = tags.MaxLength<30> & tags.Pattern<"^[a-zA-Z0-9_]+$"> & ` + "`prefix${string}postfix`" + `;
type TaggedUnion =
  | (` + "`a${string}`" + ` & tags.MinLength<3>)
  | (` + "`b${string}`" + ` & tags.MaxLength<5>);

export const isTagged = typia.createIs<Tagged>();
export const validateTagged = typia.createValidate<Tagged>();
export const isTaggedUnion = typia.createIs<TaggedUnion>();
`

const templateLiteralTypeTagsRuntimeRunner = `const mod = require("./main.cjs");

if (mod.isTagged("prefix_0123_postfix") !== true) {
  throw new Error("tag-conforming template string should pass is");
}
if (mod.isTagged('prefix;"+,df0123456789postfix') !== false) {
  throw new Error("pattern/length-violating template string should fail is");
}
if (mod.isTagged("prefix_basically_way_too_long_for_max_postfix") !== false) {
  throw new Error("over-length template string should fail is");
}
if (mod.isTagged("nomatch") !== false) {
  throw new Error("non-template string should keep failing is");
}

const invalid = mod.validateTagged('prefix;"+,df0123456789postfix');
if (invalid.success !== false) {
  throw new Error("validate should reject the tag-violating template string");
}
if (!invalid.errors.some((e) => e.expected.includes("Pattern") || e.expected.includes("MaxLength"))) {
  throw new Error("validate error should name the violated tag: " + JSON.stringify(invalid.errors));
}
if (mod.validateTagged("prefix_0123_postfix").success !== true) {
  throw new Error("validate should accept the tag-conforming template string");
}

if (mod.isTaggedUnion("abc") !== true) {
  throw new Error("a-branch string meeting MinLength should pass");
}
if (mod.isTaggedUnion("ab") !== false) {
  throw new Error("a-branch string violating MinLength should fail");
}
if (mod.isTaggedUnion("bcdef") !== true) {
  throw new Error("b-branch string meeting MaxLength should pass");
}
if (mod.isTaggedUnion("bcdefgh") !== false) {
  throw new Error("b-branch string violating MaxLength should fail");
}
`
