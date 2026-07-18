package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestSymbolKeyMemberFilterTransform verifies a `symbol`-keyed data member is
// excluded from a type's validated shape and from its emitted JSON schema, so a
// real object carrying that member passes its own `is`/`assert`/`validate` guard
// (#2226).
//
// A symbol-keyed member is unreachable through the string index access typia
// emits, is ignored by `JSON.stringify`, and has no JSON-Schema representation.
// Before the fix the member filter excluded only keyword `private`/`protected`
// and ES `#private` members, so a symbol key leaked into the validated shape
// under the checker's internal escaped name (`input["\xFE@sym@5"]`) — a string
// key no runtime object carries, making the guard unconditionally false — and
// into the schema as an uninhabitable required property.
//
//  1. Emit `is`/`assert`/`validate` plus `json.schemas` for a `unique symbol`
//     key, a well-known symbol key, a symbol key inside an intersection, a type
//     whose only member is symbol-keyed, a symbol-keyed method, and
//     string/number/computed-string keys as positive controls.
//  2. Assert neither the validators nor the schemas reference a mangled key.
//  3. Execute the emitted JavaScript against real objects carrying the symbol
//     members, proving each passes on its string-keyed shape.
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

  symbolKeyMemberFilterRunRuntimeCases(
    t,
    project,
    symbolKeyMemberFilterTransform(t, project, "js"),
  )
}

func symbolKeyMemberFilterProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "symbol-key-member-filter-")
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

func symbolKeyMemberFilterRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(symbolKeyMemberFilterRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("symbol key member filter runtime cases failed: %v\n%s", err, output)
  }
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

const symbolKeyMemberFilterRuntimeRunner = `const mod = require("./main.cjs");

const sym = Symbol("sym");
const joined = Symbol("joined");
const solo = Symbol("solo");
const invoke = Symbol("invoke");

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + " but got " + actual);
  }
};

// A real object carrying every declared member — including the symbol-keyed
// ones — passes its own guard.
expect(
  "is real Symbolic value",
  mod.isSymbolic({ name: "x", [sym]: 1, [Symbol.toStringTag]: "Symbolic" }),
  true,
);
expect("is real Joined value", mod.isJoined({ id: "x", [joined]: 1 }), true);
expect("is real SoloSymbol value", mod.isSolo({ [solo]: 1 }), true);
expect("is real Methodic value", mod.isMethodic({ id: "x", [invoke]: () => 1 }), true);

// A symbol-keyed member is not part of the structural JSON shape, so a plain
// object carrying only the string keys is accepted too.
expect("is plain Symbolic shape", mod.isSymbolic({ name: "x" }), true);
expect("is plain Joined shape", mod.isJoined({ id: "x" }), true);
expect("is empty SoloSymbol shape", mod.isSolo({}), true);
expect("is plain Methodic shape", mod.isMethodic({ id: "x" }), true);

// The string-keyed shape is still validated structurally.
expect("reject wrong Symbolic name type", mod.isSymbolic({ name: 1 }), false);
expect("reject missing Symbolic name", mod.isSymbolic({}), false);
expect("reject missing Joined id", mod.isJoined({ [joined]: 1 }), false);
expect("reject non-object SoloSymbol", mod.isSolo(null), false);

// Positive controls: string / number / computed-string keys still resolve.
expect(
  "is Controlled value",
  mod.isControlled({ plain: "a", "quoted-key": 1, 42: true, computed: "c" }),
  true,
);
expect(
  "reject missing computed-string key",
  mod.isControlled({ plain: "a", "quoted-key": 1, 42: true }),
  false,
);
expect(
  "reject missing numeric key",
  mod.isControlled({ plain: "a", "quoted-key": 1, computed: "c" }),
  false,
);

// assert / validate accept a real value without touching a mangled key.
expect(
  "assert real Symbolic returns input",
  typeof mod.assertSymbolic({ name: "x", [sym]: 1, [Symbol.toStringTag]: "Symbolic" }),
  "object",
);
expect(
  "validate real Symbolic succeeds",
  mod.validateSymbolic({ name: "x", [sym]: 1, [Symbol.toStringTag]: "Symbolic" }).success,
  true,
);

let threw = false;
try {
  mod.assertSymbolic({ name: 1 });
} catch (_exp) {
  threw = true;
}
expect("assert rejects wrong name type", threw, true);

// The emitted schemas carry no mangled symbol key.
const serialized = JSON.stringify(mod.schemas);
for (const marker of ["@sym@", "@toStringTag@", "@joined@", "@solo@", "@invoke@", "�"]) {
  if (serialized.includes(marker)) {
    throw new Error("schema references a mangled symbol key (" + marker + "): " + serialized);
  }
}
const required = JSON.stringify(mod.schemas.components.schemas.Symbolic.required);
expect("Symbolic schema requires only its string key", required, JSON.stringify(["name"]));
`
