package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestCompareEqualCoverTransform verifies comparison native content helpers and unsupported-type diagnostics.
//
// Structural comparison reads native content rather than object identity, while unsupported domains must diagnose instead of inventing equality. Expected native operations and rejected type categories come from the public compare contract.
//
// 1. Direct/factory equals and cover inputs include natives and recursive structures; unsupported any, function, Set, Map and weak collections are negative twins. Runtime comparison outcomes are not asserted here.
// 2. Emission contains Date timestamps, RegExp source/flags, byte views and recursive pair context; helper rejection cases require unsupported any/function/collection diagnostics.
//
// @evidence contracts/testing.md#behavioral-verification Emission contains Date timestamps, RegExp source/flags, byte views and recursive pair context; helper rejection cases require unsupported any/function/collection diagnostics.
// @evidence contracts/testing.md#independent-expectations Structural comparison reads native content rather than object identity, while unsupported domains must diagnose instead of inventing equality. Expected native operations and rejected type categories come from the public compare contract.
// @evidence contracts/testing.md#distinguishing-cases Direct/factory equals and cover inputs include natives and recursive structures; unsupported any, function, Set, Map and weak collections are negative twins. Runtime comparison outcomes are not asserted here.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestCompareEqualCoverTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestCompareEqualCoverTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "compare-equal-cover-", compareEqualCoverSource)
  js := compareEqualCoverTransform(t, project)
  for _, needle := range []string{"getTime", "source", "flags", "Uint8Array", "WeakMap", "_vctx"} {
    if !strings.Contains(js, needle) {
      t.Fatalf("compare equal/cover output is missing %q:\n%s", needle, js)
    }
  }
  compareEqualCoverRejectsUnsupported(t)
}

func compareEqualCoverProject(t *testing.T, prefix string, source string) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, prefix)
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
