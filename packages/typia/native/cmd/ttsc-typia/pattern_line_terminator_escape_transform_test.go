package main

import (
  "crypto/sha256"
  "os"
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
//  2. Require an escaped regex pattern for LF, CR, LS and PS and reject each
//     corresponding raw line terminator in the emitted regex literal.
//  3. Preserve the line-terminator-free template's historical pattern.
//  4. Express each escaped literal segment as a singleton string-literal slot
//     and require the same complete JavaScript artifact from the native checker.
//
// @evidence contracts/testing.md#behavioral-verification Emitted template regex literals contain the escaped forms of all four JavaScript line terminators and none of their raw forms; the ordinary prefix/postfix pattern remains present. The original fixture and its singleton-literal-slot spelling must emit byte-identical JavaScript, including the dynamic-key consumers.
// @evidence contracts/testing.md#independent-expectations JavaScript regex literals cannot contain raw LF, CR, U+2028 or U+2029. Their backslash escapes retain the intended pattern character while preserving valid source syntax, independently of the emitter's escaping algorithm.
// @evidence contracts/testing.md#distinguishing-cases Each of the four forbidden source characters is tested against its escaped counterpart, with a line-free template as the preservation control; the fixture also emits shared dynamic-key paths across several operations.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPatternLineTerminatorEscapeTransform as a unit test by calling runTransform in process. Assertions inspect its emitted regex literals without starting Node or compiling a separate native artifact.
func TestPatternLineTerminatorEscapeTransform(t *testing.T) {
  project := patternLineTerminatorProject(t)
  js := patternLineTerminatorTransform(t, project)
  for _, pair := range []struct{ raw, escaped string }{
    {"\n", `\n`},
    {"\r", `\r`},
    {"\u2028", `\u2028`},
    {"\u2029", `\u2029`},
  } {
    if !strings.Contains(js, "RegExp(/^a"+pair.escaped+"(.*)b$/)") {
      t.Fatalf("emitted regex lost escaped line terminator %q:\n%s", pair.escaped, js)
    }
    if strings.Contains(js, "RegExp(/^a"+pair.raw) {
      t.Fatalf("emitted regex contains raw line terminator %q:\n%s", pair.raw, js)
    }
  }
  // A line-terminator-free template still lowers to its historical pattern, so
  // nothing but the escaped line terminators changes.
  if !strings.Contains(js, "RegExp(/^prefix(.*)postfix$/)") {
    t.Fatalf("line-terminator-free pattern must keep its historical form:\n%s", js)
  }
  candidate := patternLineTerminatorSource
  for _, pair := range [][2]string{
    {"a\\n${string}", "a${\"\\n\"}${string}"},
    {"a\\r${string}", "a${\"\\r\"}${string}"},
    {"a\\u2028${string}", "a${\"\\u2028\"}${string}"},
    {"a\\u2029${string}", "a${\"\\u2029\"}${string}"},
  } {
    candidate = strings.ReplaceAll(candidate, pair[0], pair[1])
  }
  if candidate == patternLineTerminatorSource {
    t.Fatal("literal-slot control did not change its source syntax")
  }
  if err := os.WriteFile(filepath.Join(project, "src", "main.ts"), []byte(candidate), 0o644); err != nil {
    t.Fatal(err)
  }
  converted := patternLineTerminatorTransform(t, project)
  if converted != js {
    t.Fatalf("singleton literal slots changed native emission:\noriginal:\n%s\ncandidate:\n%s", js, converted)
  }
  t.Logf("source AST spellings differ at four line terminators plus the LF Record key: original=%x candidate=%x; same %d JavaScript bytes artifact=%x", sha256.Sum256([]byte(patternLineTerminatorSource)), sha256.Sum256([]byte(candidate)), len(js), sha256.Sum256([]byte(js)))
}

func patternLineTerminatorProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "pattern-line-terminator-")
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
