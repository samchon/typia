package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestCompareMethodDelegationTransform verifies user-defined comparison methods.
//
// When a type declares an `equals(y): boolean` or `less(y): boolean` method,
// the comparator must defer to it instead of walking properties; other methods
// carry no comparable data and must be ignored so class instances compare by
// their fields.
//
//  1. Transform compare.equals / compare.less over classes with equals / less.
//  2. Assert the custom (case-insensitive) semantics win over structural ones.
//  3. Assert a non-comparison method is ignored rather than rejected.
func TestCompareMethodDelegationTransform(t *testing.T) {
  project := compareDelegationProject(t)
  js := compareDelegationTransform(t, project)
  compareDelegationRunRuntimeCases(t, project, js)
}

func compareDelegationProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "compare-delegation-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(compareDelegationTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(compareDelegationSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func compareDelegationTransform(t *testing.T, project string) string {
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
    t.Fatalf("compare delegation transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func compareDelegationRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(compareDelegationRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("compare delegation runtime cases failed: %v\n%s", err, output)
  }
}

const compareDelegationTSConfig = `{
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

const compareDelegationSource = `import typia from "typia";

// custom comparison methods — case-insensitive, diverging from structural
export class Word {
  constructor(public value: string) {}
  equals(other: Word): boolean {
    return this.value.toLowerCase() === other.value.toLowerCase();
  }
  less(other: Word): boolean {
    return this.value.toLowerCase() < other.value.toLowerCase();
  }
}
export const equalsWord = typia.compare.createEquals<Word>();
export const lessWord = typia.compare.createLess<Word>();

// nested delegation: the inner type carries the methods
interface IBox {
  id: number;
  word: Word;
}
export const equalsBox = typia.compare.createEquals<IBox>();
export const lessBox = typia.compare.createLess<IBox>();

// a non-comparison method must be ignored (not rejected); compare by fields
export class Money {
  constructor(
    public amount: number,
    public currency: string,
  ) {}
  format(): string {
    return this.amount + " " + this.currency;
  }
}
export const equalsMoney = typia.compare.createEquals<Money>();
export const lessMoney = typia.compare.createLess<Money>();
`

const compareDelegationRuntimeRunner = `const { Word, Money, equalsWord, lessWord, equalsBox, lessBox, equalsMoney, lessMoney } = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

// equals delegates to Word.equals (case-insensitive) — structural would be false
expect("equals delegates true", equalsWord(new Word("AB"), new Word("ab")), true);
expect("equals delegates false", equalsWord(new Word("ab"), new Word("cd")), false);

// less delegates to Word.less (case-insensitive)
expect("less delegates true", lessWord(new Word("Apple"), new Word("banana")), true);
expect("less delegates false", lessWord(new Word("Banana"), new Word("apple")), false);
expect("less delegates equal", lessWord(new Word("Hi"), new Word("hi")), false);

// nested object delegates to the inner Word methods after comparing id
expect("nested equals via word", equalsBox({ id: 1, word: new Word("X") }, { id: 1, word: new Word("x") }), true);
expect("nested equals id differs", equalsBox({ id: 1, word: new Word("x") }, { id: 2, word: new Word("x") }), false);
expect("nested less via word", lessBox({ id: 1, word: new Word("A") }, { id: 1, word: new Word("b") }), true);
expect("nested less id decides", lessBox({ id: 1, word: new Word("z") }, { id: 2, word: new Word("a") }), true);

// the format() method is ignored; comparison uses amount then currency
expect("method ignored equals", equalsMoney(new Money(5, "USD"), new Money(5, "USD")), true);
expect("method ignored amount", lessMoney(new Money(4, "USD"), new Money(5, "USD")), true);
expect("method ignored currency", lessMoney(new Money(5, "EUR"), new Money(5, "USD")), true);
`
