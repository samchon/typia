package main

import (
  "bytes"
  "os"
  "path/filepath"
  "reflect"
  "sync"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform"
)

// TestCheckTransformLeavesProgramUntouched verifies typia's analysis rewrites
// calls without writing into the Program's parsed ASTs.
//
// check-serve keeps a Program across watch cycles only because of this: the
// next cycle's UpdateProgram shares every unchanged file's tree, so a call an
// earlier cycle rewrote in place would be read as already transformed.
//
//  1. Load a noEmit Program whose sources nest typia calls inside a namespace,
//     a class and a function, so their ancestors must be rebuilt.
//  2. Record every node's identity, kind, range, flags, parent and text.
//  3. Run the analysis, then the transformer directly, requiring a rewritten
//     file in place of the parsed one.
//  4. Require the recorded trees unchanged, and require the same record to
//     notice a linked-hook style in-place literal edit.
//
// @evidence contracts/testing.md#behavioral-verification analyzeTypiaProgram and nativetransform.Transform run over a loaded Program; the transformer must return a different SourceFile for the typia call while every parsed node keeps its pointer, kind, range, flags, parent and text.
// @evidence contracts/testing.md#independent-expectations The parse-time record taken before any transform is the oracle; the expected rewrite follows from the typia.is call, not from printed output.
// @evidence contracts/testing.md#distinguishing-cases A rewritten file and an untouched plain file are both recorded; the in-place literal edit is the negative twin proving the record detects mutation rather than passing vacuously.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers this unit test; it loads the fixture through the driver in process and starts no compiler subprocess.
func TestCheckTransformLeavesProgramUntouched(t *testing.T) {
  project := checkUntouchedProject(t)
  prog, diags, err := driver.LoadProgram(project, "tsconfig.json", driver.LoadProgramOptions{ForceNoEmit: true})
  if err != nil || len(diags) != 0 {
    t.Fatalf("load program: err=%v diagnostics=%#v", err, diags)
  }
  defer prog.Close()
  files := map[string]*shimast.SourceFile{}
  for _, name := range []string{"main.ts", "plain.ts"} {
    // No linked hook is selected here, so this lookup changes nothing.
    file := prog.SourceFile(filepath.ToSlash(filepath.Join(project, "src", name)))
    if file == nil {
      t.Fatalf("src/%s is not in the program", name)
    }
    files[name] = file
  }
  before := map[string][]checkUntouchedNode{}
  for name, file := range files {
    before[name] = checkUntouchedRecord(file)
  }

  var errText bytes.Buffer
  settings := buildSettings{cwd: project, tsconfig: "tsconfig.json", quiet: true, rewriteMode: "typia"}
  if status := analyzeTypiaProgram(prog, settings, &errText, &errText); status != 0 {
    t.Fatalf("analysis failed with %d:\n%s", status, errText.String())
  }
  registerTypiaDefaultLibraryClassifier(prog)
  defer schemametadata.MetadataDefaultLibrary_release(prog.Checker)
  rewritten := nativetransform.Transform(prog, &nativecontext.ITransformOptions{}, nativecontext.ITypiaContext_Extras{Shared: &sync.Map{}}, shimprinter.NewEmitContext())(files["main.ts"])
  if rewritten == nil || rewritten == files["main.ts"] {
    t.Fatal("the typia calls in src/main.ts must be rewritten into a new file")
  }
  for name, file := range files {
    if after := checkUntouchedRecord(file); !reflect.DeepEqual(before[name], after) {
      t.Fatalf("typia's analysis changed the parsed tree of src/%s", name)
    }
  }

  transformLinkedEditRewrite(files["plain.ts"].AsNode())
  if reflect.DeepEqual(before["plain.ts"], checkUntouchedRecord(files["plain.ts"])) {
    t.Fatal("the record must notice an in-place literal edit")
  }
}

// checkUntouchedNode is what an in-place edit of one parsed node can change.
type checkUntouchedNode struct {
  node   *shimast.Node
  parent *shimast.Node
  kind   shimast.Kind
  pos    int
  end    int
  flags  shimast.NodeFlags
  text   string
}

func checkUntouchedRecord(file *shimast.SourceFile) []checkUntouchedNode {
  var nodes []checkUntouchedNode
  var visit func(node *shimast.Node)
  visit = func(node *shimast.Node) {
    entry := checkUntouchedNode{node: node, parent: node.Parent, kind: node.Kind, pos: node.Pos(), end: node.End(), flags: node.Flags}
    switch node.Kind {
    case shimast.KindIdentifier, shimast.KindStringLiteral, shimast.KindNumericLiteral, shimast.KindNoSubstitutionTemplateLiteral:
      entry.text = node.Text()
    }
    nodes = append(nodes, entry)
    node.ForEachChild(func(child *shimast.Node) bool {
      visit(child)
      return false
    })
  }
  visit(file.AsNode())
  return nodes
}

func checkUntouchedProject(t *testing.T) string {
  t.Helper()
  project := t.TempDir()
  if err := os.MkdirAll(filepath.Join(project, "src"), 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  transformDiagnosticWriteTypiaStub(t, project)
  files := map[string]string{
    "tsconfig.json": `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src"]
}
`,
    filepath.Join("src", "main.ts"): `import typia from "typia";
export namespace Checks {
  export class Value {
    public static is(input: unknown): input is { value: number } {
      return typia.is<{ value: number }>(input);
    }
  }
}
export function named(input: unknown): input is { name: string } {
  return typia.is<{ name: string }>(input);
}
`,
    filepath.Join("src", "plain.ts"): `export const spec = "linked-pending";
`,
  }
  for name, text := range files {
    if err := os.WriteFile(filepath.Join(project, name), []byte(text), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return project
}
