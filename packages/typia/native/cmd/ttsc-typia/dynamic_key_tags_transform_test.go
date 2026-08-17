package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestDynamicKeyTagsTransform verifies a type tag on a dynamic key is enforced.
//
// `Check_dynamic_key` has always held a complete implementation: it filters the
// key's tag rows through `check_dynamic_key_fully_validated_tag_rows` and routes
// a tagged string atomic into `Check_string`, a tagged numeric one into
// `Check_number`. Nothing reached it, so `[key: string & tags.MinLength<3>]`
// accepted a two-character key and every other key tag was equally inert
// (#2347).
//
// Values were always checked, which is what made this invisible: the
// `@typia/template` `DynamicTag` fixture declares exactly this shape and every
// one of its spoilers corrupts a value, never a key.
//
//  1. Transform a fixture whose index signatures carry a pattern, a length, and
//     a numeric range on the key.
//  2. Require the emitted checker to contain a key predicate at all.
//  3. Execute runtime cases: a key violating its tag must be rejected, a key
//     satisfying it accepted, and neither a plain `[key: string]` signature nor
//     a template literal one may become constrained.
//
// The two negative controls carry the boundary. What the fix makes binding is a
// broken *tag* on a key the declaration covers; a key no signature's *type*
// covers is declared nowhere, which is what a surplus property is, and stays
// accepted. `test_validate_dynamic_key_surplus` pins that distinction against
// both spellings of the same predicate.
//
// The report such a key produces is its own concern. `Superfluous`, the report
// an extra property already used, says the property is not defined in the object
// type and advises removing it -- false and unhelpful when the property is
// declared and only its key broke a constraint. `InvalidKey` names the key type
// instead, and `test_validate_dynamic_key_report` covers the wording.
func TestDynamicKeyTagsTransform(t *testing.T) {
  project := dynamicKeyTagsProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("dynamic key tags transform failed: code=%d stderr=\n%s", code, errText)
  }
  // The key is read into a local before it is tested, so its predicate is the
  // one place the emitted text can show the check exists at all.
  if !strings.Contains(out, "RegExp(") || !strings.Contains(out, "_stringLength") {
    t.Fatalf("emitted checker should test the dynamic key, not only its value:\n%s", out)
  }
  dynamicKeyTagsRunRuntimeCases(t, project, out)
}

func dynamicKeyTagsProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "dynamic-key-tags-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(dynamicKeyTagsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(dynamicKeyTagsSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func dynamicKeyTagsRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(dynamicKeyTagsRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("dynamic key tags runtime cases failed: %v\n%s", err, output)
  }
}

const dynamicKeyTagsTSConfig = `{
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

const dynamicKeyTagsSource = `import typia, { tags } from "typia";

interface IPatternKey {
  [key: string & tags.Pattern<"^ab+$">]: string;
}
interface ILengthKey {
  [key: string & tags.MinLength<3>]: string;
}
interface INumericKey {
  [key: number & tags.Minimum<0> & tags.Maximum<9>]: string;
}
interface IPlainKey {
  [key: string]: string;
}
interface ITemplateKey {
  [key: ` + "`" + `prefix_${string}` + "`" + `]: string;
}

export const isPatternKey = typia.createIs<IPatternKey>();
export const isLengthKey = typia.createIs<ILengthKey>();
export const isNumericKey = typia.createIs<INumericKey>();
export const isPlainKey = typia.createIs<IPlainKey>();
export const isTemplateKey = typia.createIs<ITemplateKey>();
`

const dynamicKeyTagsRuntimeRunner = `const assert = require("assert");
const main = require("./main.cjs");

// A key that satisfies its tag is accepted; one that violates it is not. Both
// directions matter: before the fix every one of these returned true.
assert.strictEqual(main.isPatternKey({ abb: "x" }), true, "pattern key accepted");
assert.strictEqual(main.isPatternKey({ zzz: "x" }), false, "non-pattern key rejected");

assert.strictEqual(main.isLengthKey({ abc: "x" }), true, "long enough key accepted");
assert.strictEqual(main.isLengthKey({ ab: "x" }), false, "too short key rejected");

// The length is counted in characters, as MinLength means everywhere else: two
// astral characters are four code units but two characters, so they are short.
assert.strictEqual(
  main.isLengthKey({ "\u{1f600}\u{1f600}\u{1f600}": "x" }),
  true,
  "three astral characters accepted",
);
assert.strictEqual(
  main.isLengthKey({ "\u{1f600}\u{1f600}": "x" }),
  false,
  "two astral characters rejected",
);

assert.strictEqual(main.isNumericKey({ 5: "x" }), true, "in-range numeric key accepted");
assert.strictEqual(main.isNumericKey({ 10: "x" }), false, "out-of-range numeric key rejected");
assert.strictEqual(main.isNumericKey({ "-1": "x" }), false, "negative numeric key rejected");

// NEGATIVE CONTROL: an untagged signature stays unconstrained, so the fix
// constrains only what was declared.
assert.strictEqual(main.isPlainKey({ "anything at all": "x" }), true, "plain key accepted");
assert.strictEqual(main.isPlainKey({ "": "x" }), true, "empty plain key accepted");

// NEGATIVE CONTROL: a template literal constrains the key's *type*, not a tag on
// it, so a key outside it is declared nowhere -- a surplus property, which "is"
// accepts as it accepts any surplus property. Rejecting this one alongside a
// broken tag is what the first attempt at the fix did, and it made the
// equals-mode surplus report unreachable for the DynamicTemplate, DynamicUnion,
// and DynamicComposite shapes.
assert.strictEqual(main.isTemplateKey({ prefix_a: "x" }), true, "matching template key accepted");
assert.strictEqual(main.isTemplateKey({ prefix_a: 1 }), false, "matching template key with a wrong value rejected");
assert.strictEqual(
  main.isTemplateKey({ prefix_a: "x", wrong: "y" }),
  true,
  "a key outside the template is surplus, not a violation",
);

// The value is still checked, which it always was.
assert.strictEqual(main.isLengthKey({ abc: 1 }), false, "wrong value type rejected");
`
