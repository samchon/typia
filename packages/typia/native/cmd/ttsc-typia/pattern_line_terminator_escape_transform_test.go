package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPatternLineTerminatorEscapeTransform verifies that a line terminator in a
// structural (template-literal-type or dynamic-key) pattern is escaped before it
// is spliced into an emitted `RegExp(/.../)` literal.
//
// A JavaScript regex literal cannot contain a raw line terminator, so a template
// literal type or dynamic key whose literal part holds one of the four
// ECMAScript LineTerminators (LF, CR, U+2028, U+2029) produced an unparsable
// module while the transform still exited 0 (a false-green). `PatternUtil.Escape`
// escaped the regex metacharacters but not the line terminators, and it is the
// single source feeding every regex-literal sink (`check_template`,
// `stringify_dynamic_properties`, `prune_object_properties`, and the
// clone/prune/classify/notation joiners), so one fixture that drives `is`,
// `json.stringify`, `clone`, `prune`, and `notations` over line-terminator
// patterns exercises them all (#2211).
//
//  1. Transform a fixture whose template literal types and Record dynamic keys
//     carry each of the four line terminators, across every affected operation.
//  2. Assert the transform exits 0 and `node --check` accepts the whole emit as
//     JavaScript -- RED before the fix (raw LF/CR/LS/PS in a regex literal).
//  3. Execute the emit and assert each `is` predicate matches a
//     line-terminator-containing value and rejects a value that lacks it.
func TestPatternLineTerminatorEscapeTransform(t *testing.T) {
  project := patternLineTerminatorProject(t)
  js := patternLineTerminatorTransform(t, project)
  // A line-terminator-free template still lowers to its historical pattern, so
  // nothing but the escaped line terminators changes.
  if !strings.Contains(js, "RegExp(/^prefix(.*)postfix$/)") {
    t.Fatalf("line-terminator-free pattern must keep its historical form:\n%s", js)
  }
  patternLineTerminatorCheckSyntax(t, project, js)
  patternLineTerminatorRunRuntimeCases(t, project, js)
}

func patternLineTerminatorProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "pattern-line-terminator-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(patternLineTerminatorTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(patternLineTerminatorSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func patternLineTerminatorTransform(t *testing.T, project string) string {
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
    t.Fatalf("line terminator pattern transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

// patternLineTerminatorCheckSyntax runs node against the emit exactly as it would
// ship. node --check only parses, so the unresolved typia imports in the
// untouched output do not matter, which keeps this a check of the real artifact.
func patternLineTerminatorCheckSyntax(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  emitted := filepath.Join(project, "emitted.cjs")
  if err := os.WriteFile(emitted, []byte(js), 0o644); err != nil {
    t.Fatalf("write emitted module: %v", err)
  }
  if output, err := exec.Command(node, "--check", emitted).CombinedOutput(); err != nil {
    t.Fatalf("emitted module is not valid JavaScript: %v\n%s\n--- emit ---\n%s", err, output, js)
  }
}

func patternLineTerminatorRunRuntimeCases(t *testing.T, project string, js string) {
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
  // json.stringify pulls in _jsonStringifyNumber, which the shared rewrite does
  // not map; stub it locally so the whole module loads. The runner only exercises
  // the `is` predicates, so the stub body is immaterial.
  if err := os.WriteFile(filepath.Join(runtimeDir, "json-stringify-number-stub.cjs"), []byte(patternLineTerminatorNumberStub), 0o644); err != nil {
    t.Fatalf("write json stringify number stub: %v", err)
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia/lib/internal/_jsonStringifyNumber")`, `require("./json-stringify-number-stub.cjs")`)
  runtimeJS = ttscTypiaTestRewriteCommonJS(t, runtimeJS)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(patternLineTerminatorRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("line terminator pattern runtime cases failed: %v\n%s", err, output)
  }
}

const patternLineTerminatorNumberStub = `module.exports._jsonStringifyNumber = (value) => String(value);
`

const patternLineTerminatorTSConfig = `{
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

// The template literal types embed the line terminators as TypeScript escapes
// (backslash n, backslash r, backslash u2028, backslash u2029), which the
// compiler folds into real line terminator characters in the literal type --
// the exact trigger.
const patternLineTerminatorSource = `import typia from "typia";

export const isLF = typia.createIs<` + "`a\\n${string}b`" + `>();
export const isCR = typia.createIs<` + "`a\\r${string}b`" + `>();
export const isLS = typia.createIs<` + "`a\\u2028${string}b`" + `>();
export const isPS = typia.createIs<` + "`a\\u2029${string}b`" + `>();
export const isControl = typia.createIs<` + "`prefix${string}postfix`" + `>();

type LFRecord = Record<` + "`a\\n${string}`" + `, number>;
export const isRecord = typia.createIs<LFRecord>();
export const stringifyRecord = typia.json.createStringify<LFRecord>();
export const cloneRecord = typia.plain.createClone<LFRecord>();
export const pruneRecord = typia.plain.createPrune<LFRecord>();
export const camelRecord = typia.notations.createCamel<LFRecord>();
`

// Every value's only line terminator is the one the template's literal part
// pins, so the trailing `(.*)` (dot excludes newlines) still matches the tail.
// LF/CR go in as JS escapes and U+2028/U+2029 via String.fromCharCode so this
// source carries no raw line terminator of its own.
const patternLineTerminatorRuntimeRunner = `const mod = require("./main.cjs");

const LS = String.fromCharCode(0x2028);
const PS = String.fromCharCode(0x2029);
const cases = [
  ["isLF", "a\nZZb", "aZZb"],
  ["isCR", "a\rZZb", "aZZb"],
  ["isLS", "a" + LS + "ZZb", "aZZb"],
  ["isPS", "a" + PS + "ZZb", "aZZb"],
];
for (const [name, good, bad] of cases) {
  if (mod[name](good) !== true) {
    throw new Error(name + " must accept a value carrying its line terminator: " + JSON.stringify(good));
  }
  if (mod[name](bad) !== false) {
    throw new Error(name + " must reject a value lacking its line terminator: " + JSON.stringify(bad));
  }
}

if (mod.isControl("prefix_mid_postfix") !== true) {
  throw new Error("line-terminator-free template must still accept a conforming value");
}
if (mod.isControl("nope") !== false) {
  throw new Error("line-terminator-free template must still reject a non-conforming value");
}

// A Record index signature only constrains keys its key pattern matches, so the
// newline in the key regex is what decides which keys get the number check. A
// matching key with a bad value must fail, while a near-miss key that lacks the
// newline is not matched (and so is left unchecked) -- together they prove the
// escaped line terminator is load-bearing in the emitted regex.
const goodRecord = {};
goodRecord["a\nkey"] = 1;
if (mod.isRecord(goodRecord) !== true) {
  throw new Error("Record: a matching key with a number value must pass");
}
const matchedBadValue = {};
matchedBadValue["a\nkey"] = "not a number";
if (mod.isRecord(matchedBadValue) !== false) {
  throw new Error("Record: a newline-matching key with a non-number value must fail");
}
if (mod.isRecord({ "axkey": "not a number" }) !== true) {
  throw new Error("Record: a key lacking the newline must not match the pattern, so it stays unchecked");
}
`
