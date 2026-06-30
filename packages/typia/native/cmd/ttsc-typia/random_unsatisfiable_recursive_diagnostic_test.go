package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestRandomUnsatisfiableRecursiveDiagnostic verifies non-terminating recursive
// types fail.
//
// Random generation terminates a recursive type through an escape it can take at
// the depth cutoff: an array/set/map (or a tuple rest spread) empties, a nullable
// edge becomes null, an optional or index-signature property is dropped, or a
// union picks a finite variant. A recursive cycle whose every step is a required,
// non-nullable, non-container value has no such escape, so the generated function
// would recurse until the stack overflows. The build must reject it through the
// transform diagnostic path across object, mutual-object, deep-chain, and
// array-of-owner shapes, for both immediate and factory random entrypoints.
//
//  1. Build a self-referential required object and a mutual object cycle.
//  2. Build a deep required object chain.
//  3. Build an array whose element is an unsatisfiable recursive object.
//  4. Require each project to fail through the transform-diagnostic path.
func TestRandomUnsatisfiableRecursiveDiagnostic(t *testing.T) {
  for _, tt := range []struct {
    name   string
    source string
  }{
    {"required-self", randomUnsatisfiableSelfSource},
    {"mutual-object", randomUnsatisfiableMutualSource},
    {"deep-chain", randomUnsatisfiableDeepChainSource},
    {"array-of-owner", randomUnsatisfiableArrayOfOwnerSource},
  } {
    randomUnsatisfiableExpectDiagnostic(t, tt.name, tt.source)
  }
}

func randomUnsatisfiableExpectDiagnostic(t *testing.T, name string, source string) {
  t.Helper()
  project := randomUnsatisfiableProject(t, name, source)
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(project, "dist"),
    })
  })
  if code != 3 {
    t.Fatalf("%s unsatisfiable recursive build should fail with code 3, got %d\nstderr=%s", name, code, errText)
  }
  normalized := filepath.ToSlash(errText)
  for _, fragment := range []string{
    "error TS(typia.random):",
    "error TS(typia.createRandom):",
    "cannot be randomly generated because the recursion never terminates",
  } {
    if !strings.Contains(normalized, fragment) {
      t.Fatalf("%s unsatisfiable recursive diagnostic missing %q:\n%s", name, fragment, errText)
    }
  }
}

func randomUnsatisfiableProject(t *testing.T, name string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "random-unsatisfiable-recursive-"+name+"-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(randomRecursiveMinItemsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const randomUnsatisfiableSelfSource = `import typia from "typia";

interface INode {
  value: string;
  self: INode;
}

typia.random<INode>();
typia.createRandom<INode>();
`

const randomUnsatisfiableMutualSource = `import typia from "typia";

interface IParent {
  name: string;
  child: IChild;
}

interface IChild {
  parent: IParent;
}

typia.random<IParent>();
typia.createRandom<IParent>();
`

const randomUnsatisfiableDeepChainSource = `import typia from "typia";

interface IA {
  b: IB;
}

interface IB {
  c: IC;
}

interface IC {
  a: IA;
}

typia.random<IA>();
typia.createRandom<IA>();
`

const randomUnsatisfiableArrayOfOwnerSource = `import typia from "typia";

interface INode {
  value: string;
  self: INode;
}

typia.random<INode[]>();
typia.createRandom<INode[]>();
`
