package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPrivateFieldFilterIsTransform verifies an ES `#private` instance field is
// excluded from a class's validated shape, so a real instance passes its own
// `is`/`assert`/`validate` guard (#2213).
//
// A `#private` field is installed only by the constructor and is unreachable via
// index access, so it is not part of a type's structural, externally-observable
// shape. Before the fix the member filter excluded only the TypeScript keyword
// `private`/`protected` members, so a `#private` field leaked into the validated
// shape as a mangled key (`input["�#1@#secret"]`) that no runtime object
// carries — making the guard unconditionally false.
//
//  1. Emit `is`/`assert`/`validate` for a class carrying a `#private` field
//     alongside a public property, a subclass that adds another `#private`, an
//     all-`#private` class, a class with `#private` method / accessor members,
//     and a keyword `private`/`protected` class.
//  2. Assert the emitted validators never reference a mangled `#private` key.
//  3. Execute the validators against real instances and plain public-shape
//     objects, proving each passes on its public shape.
func TestPrivateFieldFilterIsTransform(t *testing.T) {
  project := privateFieldFilterProject(t)

  ts := privateFieldFilterTransform(t, project, "ts")
  // A `#private` member surfaces in a validator only as a mangled key —
  // `input["�#1@#secret"]`. The class SOURCE (echoed above the validators)
  // also spells `#secret`, so the bare name is not a defect marker; the `@#`
  // infix is unique to the mangled key and never appears in class source, so it
  // is the exact byte signature of the leak.
  if strings.Contains(ts, "@#") {
    t.Fatalf("emit references a mangled #private key (leaked into validated shape):\n%s", ts)
  }
  // The public shape must still be validated.
  for _, needle := range []string{"input.label", "input.tag"} {
    if !strings.Contains(ts, needle) {
      t.Fatalf("emit dropped a public property %q:\n%s", needle, ts)
    }
  }

  privateFieldFilterRunRuntimeCases(
    t,
    project,
    privateFieldFilterTransform(t, project, "js"),
  )
}

func privateFieldFilterProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "private-field-filter-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(privateFieldFilterTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(privateFieldFilterSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func privateFieldFilterTransform(t *testing.T, project string, output string) string {
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
    t.Fatalf("private field filter transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

func privateFieldFilterRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(privateFieldFilterRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("private field filter runtime cases failed: %v\n%s", err, output)
  }
}

const privateFieldFilterTSConfig = `{
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

const privateFieldFilterSource = `import typia from "typia";

export class Box {
  #secret: boolean;
  public label: string;
  constructor(label: string, secret: boolean) {
    this.label = label;
    this.#secret = secret;
  }
}

export class SubBox extends Box {
  #extra: number;
  public tag: string;
  constructor() {
    super("hi", true);
    this.#extra = 1;
    this.tag = "t";
  }
}

export class SoloPrivate {
  #solo: string;
  constructor() {
    this.#solo = "x";
  }
}

export class MethodPrivate {
  public label: string;
  #hidden(): number {
    return 1;
  }
  get #view(): number {
    return 2;
  }
  set #view(_next: number) {}
  constructor(label: string) {
    this.label = label;
    void this.#hidden();
    this.#view = this.#view;
  }
}

export class KeywordBox {
  private secret: boolean;
  protected token: string;
  public label: string;
  constructor(label: string, secret: boolean, token: string) {
    this.label = label;
    this.secret = secret;
    this.token = token;
  }
}

export const isBox = typia.createIs<Box>();
export const assertBox = typia.createAssert<Box>();
export const validateBox = typia.createValidate<Box>();
export const isSubBox = typia.createIs<SubBox>();
export const isSolo = typia.createIs<SoloPrivate>();
export const isMethod = typia.createIs<MethodPrivate>();
export const isKeyword = typia.createIs<KeywordBox>();
`

const privateFieldFilterRuntimeRunner = `const mod = require("./main.cjs");

class Box {
  #secret;
  label;
  constructor(label, secret) {
    this.label = label;
    this.#secret = secret;
  }
}
class SubBox extends Box {
  #extra;
  tag;
  constructor() {
    super("hi", true);
    this.#extra = 1;
    this.tag = "t";
  }
}
class SoloPrivate {
  #solo;
  constructor() {
    this.#solo = "x";
  }
}
class MethodPrivate {
  label;
  #hidden() {
    return 1;
  }
  get #view() {
    return 2;
  }
  set #view(_next) {}
  constructor(label) {
    this.label = label;
  }
}

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + " but got " + actual);
  }
};

// A real instance carrying #private members passes its own guard.
expect("is real Box instance", mod.isBox(new Box("hi", true)), true);
expect("is real SubBox instance", mod.isSubBox(new SubBox()), true);
expect("is real SoloPrivate instance", mod.isSolo(new SoloPrivate()), true);
expect("is real MethodPrivate instance", mod.isMethod(new MethodPrivate("hi")), true);

// The #private field is not part of the structural shape: a plain object with
// only the public members is accepted, exactly like a keyword-private class.
expect("is plain public Box shape", mod.isBox({ label: "hi" }), true);
expect("is plain public SubBox shape", mod.isSubBox({ label: "hi", tag: "t" }), true);
expect("is empty SoloPrivate shape", mod.isSolo({}), true);
expect("is plain public MethodPrivate shape", mod.isMethod({ label: "hi" }), true);
expect("is plain public KeywordBox shape", mod.isKeyword({ label: "hi" }), true);

// The public shape is still validated structurally.
expect("reject wrong public label type", mod.isBox({ label: 123 }), false);
expect("reject missing public label", mod.isBox({}), false);

// assert / validate accept a real instance without touching a mangled key.
expect("assert real Box returns input", mod.assertBox(new Box("hi", true)) instanceof Box, true);
expect("validate real Box succeeds", mod.validateBox(new Box("hi", true)).success, true);
expect("validate plain public Box succeeds", mod.validateBox({ label: "hi" }).success, true);

let threw = false;
try {
  mod.assertBox({ label: 123 });
} catch (_exp) {
  threw = true;
}
expect("assert rejects wrong public label", threw, true);
`
