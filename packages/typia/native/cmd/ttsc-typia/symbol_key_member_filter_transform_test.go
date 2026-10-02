package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestSymbolKeyMemberFilterTransform verifies string-key validation without mangled symbol properties.
//
// Symbol keys are outside typia ordinary structural string-property traversal, while excluding them must not erase normal public members.
//
// 1. Computed symbol properties and ordinary string properties share a shape, pairing the unsupported-key exclusion with preserved valid fields.
// 2. The asserted name, id and plain string-keyed properties remain in output and forbidden symbol binder markers are absent.
//
// @evidence contracts/testing.md#behavioral-verification The asserted name, id and plain string-keyed properties remain in output and forbidden symbol binder markers are absent.
// @evidence contracts/testing.md#independent-expectations Symbol keys are outside typia ordinary structural string-property traversal, while excluding them must not erase normal public members.
// @evidence contracts/testing.md#distinguishing-cases Computed symbol properties and ordinary string properties share a shape, pairing the unsupported-key exclusion with preserved valid fields.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestSymbolKeyMemberFilterTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestSymbolKeyMemberFilterTransform(t *testing.T) {
  project := symbolKeyMemberFilterProject(t)

  ts := symbolKeyMemberFilterTransform(t, project, "ts")
  // The checker escapes a symbol-keyed member name with a leading 0xFE byte
  // (`InternalSymbolNamePrefix`), an invalid UTF-8 lead unit that never begins a
  // real string property name, followed by `@<name>@<id>`; the printer renders
  // that byte as `�` (or the replacement character itself). None of those,
  // nor the `@<name>@` infix, can appear in the fixture source echoed alongside
  // the validators, so each is an exact byte signature of the leak.
  for _, marker := range []string{
    string([]byte{0xFE}),
    "\uFFFD",
    `\uFFFD`,
    `\ufffd`,
    "@sym@",
    "@toStringTag@",
    "@joined@",
    "@solo@",
    "@invoke@",
  } {
    if strings.Contains(ts, marker) {
      t.Fatalf("emit references a mangled symbol key (marker %q leaked into the validated shape):\n%s", marker, ts)
    }
  }
  // The string-keyed shape must still be validated.
  for _, needle := range []string{"input.name", "input.id", "input.plain"} {
    if !strings.Contains(ts, needle) {
      t.Fatalf("emit dropped a string-keyed property %q:\n%s", needle, ts)
    }
  }

}

func symbolKeyMemberFilterProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "symbol-key-member-filter-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(symbolKeyMemberFilterTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(symbolKeyMemberFilterSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func symbolKeyMemberFilterTransform(t *testing.T, project string, output string) string {
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
    t.Fatalf("symbol key member filter transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

const symbolKeyMemberFilterTSConfig = `{
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

const symbolKeyMemberFilterSource = `import typia from "typia";

declare const sym: unique symbol;
declare const joined: unique symbol;
declare const solo: unique symbol;
declare const invoke: unique symbol;
declare const COMPUTED: "computed";

export interface Symbolic {
  name: string;
  [sym]: number;
  [Symbol.toStringTag]: string;
}

export interface Controlled {
  plain: string;
  "quoted-key": number;
  42: boolean;
  [COMPUTED]: string;
}

export type Joined = { id: string } & { [joined]: number };

export interface SoloSymbol {
  [solo]: number;
}

export interface Methodic {
  id: string;
  [invoke](): number;
}

export const isSymbolic = typia.createIs<Symbolic>();
export const assertSymbolic = typia.createAssert<Symbolic>();
export const validateSymbolic = typia.createValidate<Symbolic>();
export const isControlled = typia.createIs<Controlled>();
export const isJoined = typia.createIs<Joined>();
export const isSolo = typia.createIs<SoloSymbol>();
export const isMethodic = typia.createIs<Methodic>();
export const schemas = typia.json.schemas<[Symbolic, Joined, SoloSymbol, Methodic]>();
`
