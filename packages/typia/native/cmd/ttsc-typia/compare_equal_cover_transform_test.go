package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestCompareEqualCoverTransform verifies type-directed structural comparison.
//
// Issue #1497 adds `typia.compare.equals` and `typia.compare.cover`:
//
//  1. Transform direct and factory calls for equal/cover.
//  2. Execute object, partial-object, array-length, native, dynamic-key,
//     union, and recursive pair-tracking cases.
//  3. Reject unsupported any, function, Set, Map, WeakSet, and WeakMap types
//     at transform time.
func TestCompareEqualCoverTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "compare-equal-cover-", compareEqualCoverSource)
  js := compareEqualCoverTransform(t, project)
  for _, needle := range []string{"getTime", "source", "flags", "Uint8Array", "WeakMap", "_vctx"} {
    if !strings.Contains(js, needle) {
      t.Fatalf("compare equal/cover output is missing %q:\n%s", needle, js)
    }
  }
  compareEqualCoverRunRuntimeCases(t, project, js)
  compareEqualCoverRejectsUnsupported(t)
}

func compareEqualCoverProject(t *testing.T, prefix string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, prefix)
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(compareEqualCoverTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func compareEqualCoverTransform(t *testing.T, project string) string {
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
    t.Fatalf("compare equal/cover transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func compareEqualCoverRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(compareEqualCoverRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("compare equal/cover runtime cases failed: %v\n%s", err, output)
  }
}

func compareEqualCoverRejectsUnsupported(t *testing.T) {
  t.Helper()
  cases := []struct {
    Name   string
    Source string
  }{
    {"any", "export const bad = typia.compare.createEquals<any>();"},
    {"function", "export const bad = typia.compare.createEquals<() => void>();"},
    {"set", "export const bad = typia.compare.createCover<Set<string>>();"},
    {"map", "export const bad = typia.compare.createEquals<Map<string, number>>();"},
    {"weak-set", "export const bad = typia.compare.createCover<WeakSet<object>>();"},
    {"weak-map", "export const bad = typia.compare.createEquals<WeakMap<object, object>>();"},
  }
  for _, tc := range cases {
    t.Run(tc.Name, func(t *testing.T) {
      project := compareEqualCoverProject(t, "compare-equal-cover-reject-", `import typia from "typia";
`+tc.Source+`
`)
      out, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
        })
      })
      if code == 0 {
        t.Fatalf("unsupported %s transformed successfully", tc.Name)
      }
      if !strings.Contains(out, "typia transform error") {
        t.Fatalf("unsupported %s diagnostics missing:\nstdout=%s\nstderr=%s", tc.Name, out, errText)
      }
    })
  }
}

const compareEqualCoverTSConfig = `{
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

const compareEqualCoverSource = `import typia, { compare } from "typia";

interface IUser {
  name: string;
  age: number;
  address: {
    room?: number;
    city: string;
    street: string;
  };
  tags: string[];
  created: Date;
  pattern: RegExp;
  bytes: Uint8Array;
}

export const equalUser = typia.compare.createEquals<IUser>();
export const coverUser = typia.compare.createCover<IUser>();
export const equalUserDirect = (x: IUser, y: IUser) => typia.compare.equals<IUser>(x, y);
export const coverUserDirect = (x: IUser, y: compare.Cover<IUser>) => typia.compare.cover<IUser>(x, y);

interface IDictionary {
  fixed: string;
  [key: string]: string;
}
export const equalDictionary = typia.compare.createEquals<IDictionary>();
export const coverDictionary = typia.compare.createCover<IDictionary>();

type Shape =
  | { kind: "circle"; radius: number; nested: { label: string } }
  | { kind: "square"; size: number; nested: { label: string } };
export const equalShape = typia.compare.createEquals<Shape>();
export const coverShape = typia.compare.createCover<Shape>();

interface INode {
  id: number;
  next: INode | null;
  children: INode[];
}
export const equalNode = typia.compare.createEquals<INode>();
export const coverNode = typia.compare.createCover<INode>();
`

const compareEqualCoverRuntimeRunner = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

const user = {
  name: "ivan",
  age: 19,
  address: {
    street: "Ivanovskaya",
    city: "Berlin",
  },
  tags: ["a", "b"],
  created: new Date("2026-06-11T00:00:00.000Z"),
  pattern: /^ivan$/gi,
  bytes: new Uint8Array([1, 2, 3]),
};
const same = {
  name: "ivan",
  age: 19,
  address: {
    street: "Ivanovskaya",
    city: "Berlin",
  },
  tags: ["a", "b"],
  created: new Date("2026-06-11T00:00:00.000Z"),
  pattern: /^ivan$/gi,
  bytes: new Uint8Array([1, 2, 3]),
};
const different = {
  ...same,
  address: { ...same.address, city: "Seoul" },
};

expect("equal user", mod.equalUser(user, same), true);
expect("equal user direct", mod.equalUserDirect(user, same), true);
expect("equal nested mismatch", mod.equalUser(user, different), false);
expect("equal regexp mismatch", mod.equalUser(user, { ...same, pattern: /^ivan$/g }), false);
expect("equal bytes mismatch", mod.equalUser(user, { ...same, bytes: new Uint8Array([1, 2, 4]) }), false);
expect("cover nested partial", mod.coverUser(user, { address: { city: "Berlin" } }), true);
expect("cover direct", mod.coverUserDirect(user, { name: "ivan", bytes: new Uint8Array([1, 2, 3]) }), true);
expect("cover nested mismatch", mod.coverUser(user, { address: { city: "Seoul" } }), false);
expect("cover array same length", mod.coverUser(user, { tags: ["a", "b"] }), true);
expect("cover array length mismatch", mod.coverUser(user, { tags: ["a"] }), false);
expect("cover extra key", mod.coverUser(user, { unknown: 1 }), false);

expect("dictionary equal", mod.equalDictionary({ fixed: "f", extra: "x" }, { fixed: "f", extra: "x" }), true);
expect("dictionary equal missing key", mod.equalDictionary({ fixed: "f", extra: "x" }, { fixed: "f" }), false);
expect("dictionary cover dynamic", mod.coverDictionary({ fixed: "f", extra: "x" }, { extra: "x" }), true);
expect("dictionary cover dynamic mismatch", mod.coverDictionary({ fixed: "f", extra: "x" }, { extra: "y" }), false);

const circle = { kind: "circle", radius: 5, nested: { label: "round" } };
const circleSame = { kind: "circle", radius: 5, nested: { label: "round" } };
const square = { kind: "square", size: 5, nested: { label: "round" } };
expect("union equal same branch", mod.equalShape(circle, circleSame), true);
expect("union equal different branch", mod.equalShape(circle, square), false);
expect("union cover branch", mod.coverShape(circle, { kind: "circle", nested: { label: "round" } }), true);
expect("union cover wrong branch", mod.coverShape(circle, { kind: "square" }), false);

const a = { id: 1, next: null, children: [] };
const b = { id: 1, next: null, children: [] };
a.next = a;
b.next = b;
a.children.push(a);
b.children.push(b);
expect("recursive equal", mod.equalNode(a, b), true);
b.id = 2;
expect("recursive mismatch", mod.equalNode(a, b), false);
b.id = 1;
const partial = { id: 1, next: null };
partial.next = partial;
expect("recursive cover partial", mod.coverNode(a, partial), true);
partial.id = 9;
expect("recursive cover mismatch", mod.coverNode(a, partial), false);
`
