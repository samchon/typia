package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestRandomRecursiveMinItemsDiagnostic verifies impossible recursive arrays fail.
//
// A recursive random array can be depth-stopped to `[]`; combining that edge
// with a positive `MinItems` constraint is unsatisfiable. The build command must
// report a real transform diagnostic across direct aliases, type aliases, graph
// cycles, map-key and map-value graph cycles, nested direct aliases, and
// tuple-union nesting for both immediate and factory random entrypoints.
//
// 1. Build a recursive object whose child array has `MinItems<1>`.
// 2. Build a direct recursive array alias with `MinItems<1>`.
// 3. Build alias-property, graph, map-key graph, and nested direct alias variants.
// 4. Require each project to fail through the transform-diagnostic path.
func TestRandomRecursiveMinItemsDiagnostic(t *testing.T) {
  for _, tt := range []struct {
    name   string
    source string
  }{
    {"object-child", randomRecursiveMinItemsObjectSource},
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
