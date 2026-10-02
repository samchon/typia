package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestRandomRecursiveMinItemsDiagnostic checks the authored operation results described below.
//
// A recursive container depth cutoff needs an empty terminal value, but a positive minimum cardinality forbids that escape; generation must reject instead of emitting values that violate its type.
//
// 1. Direct/property/matrix aliases, mutual and map-key/value graphs, tuple/union nesting and comment tags preserve the same impossible minimum across both APIs.
// 2. Every recursive fixture fails build with both random/createRandom operation codes and the MinItems one impossibility diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification Every recursive fixture fails build with both random/createRandom operation codes and the MinItems one impossibility diagnostic.
// @evidence contracts/testing.md#independent-expectations A recursive container depth cutoff needs an empty terminal value, but a positive minimum cardinality forbids that escape; generation must reject instead of emitting values that violate its type.
// @evidence contracts/testing.md#distinguishing-cases Direct/property/matrix aliases, mutual and map-key/value graphs, tuple/union nesting and comment tags preserve the same impossible minimum across both APIs.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestRandomRecursiveMinItemsDiagnostic as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestRandomRecursiveMinItemsDiagnostic(t *testing.T) {
  for _, tt := range []struct {
    name   string
    source string
  }{
    {"object-child", randomRecursiveMinItemsObjectSource},
    {"comment-tag", randomRecursiveMinItemsCommentTagSource},
    {"property-alias", randomRecursiveMinItemsPropertyAliasSource},
    {"mutual-graph", randomRecursiveMinItemsGraphSource},
    {"map-key-graph", randomRecursiveMinItemsMapKeyGraphSource},
    {"map-value-graph", randomRecursiveMinItemsMapValueGraphSource},
    {"direct-alias", randomRecursiveMinItemsAliasSource},
    {"direct-map-alias", randomRecursiveMinItemsMapAliasSource},
    {"direct-map-value-alias", randomRecursiveMinItemsMapValueAliasSource},
    {"direct-matrix-alias", randomRecursiveMinItemsMatrixAliasSource},
    {"tuple-owner", randomRecursiveMinItemsTupleOwnerSource},
    {"tuple-union", randomRecursiveMinItemsTupleUnionSource},
  } {
    randomRecursiveMinItemsExpectDiagnostic(t, tt.name, tt.source)
  }
}

func randomRecursiveMinItemsExpectDiagnostic(t *testing.T, name string, source string) {
  t.Helper()
  project := randomRecursiveMinItemsProject(t, name, source)
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(project, "dist"),
    })
  })
  if code != 3 {
    t.Fatalf("%s recursive MinItems build should fail with code 3, got %d\nstderr=%s", name, code, errText)
  }
  normalized := filepath.ToSlash(errText)
  for _, fragment := range []string{
    "error TS(typia.random):",
    "error TS(typia.createRandom):",
    "recursive array type cannot have MinItems<1>.",
  } {
    if !strings.Contains(normalized, fragment) {
      t.Fatalf("%s recursive MinItems diagnostic missing %q:\n%s", name, fragment, errText)
    }
  }
}

func randomRecursiveMinItemsProject(t *testing.T, name string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "random-recursive-min-items-"+name+"-")
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

const randomRecursiveMinItemsTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
`

const randomRecursiveMinItemsObjectSource = `import typia, { tags } from "typia";

interface INode {
  value: string;
  children: INode[] & tags.MinItems<1>;
}

typia.random<INode>();
typia.createRandom<INode>();
`

// The JSDoc spelling of the same constraint must fail the same way. Its count
// used to be stored as a pointer the positivity check could not read, so the
// comment tag silently let the unsatisfiable type through.
const randomRecursiveMinItemsCommentTagSource = `import typia from "typia";

interface INode {
  value: string;
  /** @minItems 1 */
  children: INode[];
}

typia.random<INode>();
typia.createRandom<INode>();
`

const randomRecursiveMinItemsPropertyAliasSource = `import typia, { tags } from "typia";

type Children = INode[] & tags.MinItems<1>;

interface INode {
  value: string;
  children: Children;
}

typia.random<INode>();
typia.createRandom<INode>();
`

const randomRecursiveMinItemsGraphSource = `import typia, { tags } from "typia";

interface IParent {
  name: string;
  children: IChild[] & tags.MinItems<1>;
}

interface IChild {
  name: string;
  parent: IParent;
}

typia.random<IParent>();
typia.createRandom<IParent>();
`

const randomRecursiveMinItemsMapKeyGraphSource = `import typia, { tags } from "typia";

interface IParent {
  name: string;
  children: IChild[] & tags.MinItems<1>;
}

interface IChild {
  name: string;
  links: Map<IParent, string>;
}

typia.random<IParent>();
typia.createRandom<IParent>();
`

const randomRecursiveMinItemsMapValueGraphSource = `import typia, { tags } from "typia";

interface IParent {
  name: string;
  children: IChild[] & tags.MinItems<1>;
}

interface IChild {
  name: string;
  links: Map<string, IParent>;
}

typia.random<IParent>();
typia.createRandom<IParent>();
`

const randomRecursiveMinItemsAliasSource = `import typia, { tags } from "typia";

type IRecursiveArray = IRecursiveArray[] & tags.MinItems<1>;

typia.random<IRecursiveArray>();
typia.createRandom<IRecursiveArray>();
`

const randomRecursiveMinItemsMapAliasSource = `import typia, { tags } from "typia";

type IRecursiveMapArray = Map<IRecursiveMapArray, string>[] & tags.MinItems<1>;

typia.random<IRecursiveMapArray>();
typia.createRandom<IRecursiveMapArray>();
`

const randomRecursiveMinItemsMapValueAliasSource = `import typia, { tags } from "typia";

type IRecursiveMapValueArray = Map<string, IRecursiveMapValueArray>[] & tags.MinItems<1>;

typia.random<IRecursiveMapValueArray>();
typia.createRandom<IRecursiveMapValueArray>();
`

const randomRecursiveMinItemsMatrixAliasSource = `import typia, { tags } from "typia";

type IRecursiveMatrix = IRecursiveMatrix[][] & tags.MinItems<1>;

typia.random<IRecursiveMatrix>();
typia.createRandom<IRecursiveMatrix>();
`

const randomRecursiveMinItemsTupleOwnerSource = `import typia, { tags } from "typia";

type IRecursiveTuple = [IRecursiveTuple[] & tags.MinItems<1>];

typia.random<IRecursiveTuple>();
typia.createRandom<IRecursiveTuple>();
`

const randomRecursiveMinItemsTupleUnionSource = `import typia, { tags } from "typia";

interface INode {
  value: string;
  nested: [INode[] & tags.MinItems<1>] | null;
}

typia.random<INode>();
typia.createRandom<INode>();
`
