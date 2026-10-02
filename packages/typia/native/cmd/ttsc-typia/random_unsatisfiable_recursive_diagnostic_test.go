package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestRandomUnsatisfiableRecursiveDiagnostic checks the authored operation results described below.
//
// A finite random value needs an empty-container, optional, nullable or finite-union escape. A required nonnullable object cycle with no such exit cannot be generated soundly.
//
// 1. Direct, mutual and deep required-object cycles and a recursive array-owner shape exercise unescapable graphs; terminating random shapes are owned by other random cases.
// 2. Each required recursive graph fails with random and createRandom codes and a recursion-never-terminates cause.
//
// @evidence contracts/testing.md#behavioral-verification Each required recursive graph fails with random and createRandom codes and a recursion-never-terminates cause.
// @evidence contracts/testing.md#independent-expectations A finite random value needs an empty-container, optional, nullable or finite-union escape. A required nonnullable object cycle with no such exit cannot be generated soundly.
// @evidence contracts/testing.md#distinguishing-cases Direct, mutual and deep required-object cycles and a recursive array-owner shape exercise unescapable graphs; terminating random shapes are owned by other random cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestRandomUnsatisfiableRecursiveDiagnostic as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
  dir := ttscTypiaTestFixtureDirectory(t, "random-unsatisfiable-recursive-"+name+"-")
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
