package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// The driver pairs manifest entries with registrations by position. Go runs
// package init functions in file-name order, so this registration follows the
// one in build_emit_hook_observations_test.go and answers manifest entry 1.
func init() { driver.RegisterPlugin(transformLinkedEditPlugin{}) }

// TestTransformPrintsFilesRewrittenOutsideTypia verifies a file typia did not
// change is still printed, with a map back to its authored text, when its
// parsed text is not that authored text.
//
// The transform host publishes an untouched file as its parsed text instead of
// printing it (samchon/typia#2557). That holds only while nothing else rewrote
// the file: a linked source preamble is inserted into the parsed text, and a
// linked ProgramPlugin edits the tree in place, so publishing the parsed text
// would leak the preamble without a map or drop the plugin's edit.
//
//  1. Load a project with a source preamble and run the TypeScript printer on a
//     file through a transform that changes nothing.
//  2. Assert the published text keeps the preamble and carries a map whose
//     `sourcesContent` is the authored text without it.
//  3. Run project transform mode with a linked ProgramPlugin that rewrites a
//     string literal in a file typia does not touch.
//  4. Assert the envelope publishes the rewritten literal, with a map back to
//     the authored text.
//
// @evidence contracts/testing.md#behavioral-verification The preamble file is published with the preamble and a map whose sourcesContent is the authored text, and the linked plugin's in-place rewrite reaches the decoded project envelope with its map.
// @evidence contracts/testing.md#independent-expectations The authored fixture strings and the literal the fixture plugin writes are the oracles; no expected text is printed by the implementation under test.
// @evidence contracts/testing.md#distinguishing-cases A preamble with no tree edit and a tree edit with no preamble each leave typia's result pointer unchanged, so publishing the parsed text fails the preamble map check in one case and the rewritten literal check in the other.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformPrintsFilesRewrittenOutsideTypia as a unit test. It loads fixture Programs through the driver and captured runTransform calls in process, selects the linked plugin with t.Setenv, and starts no consumer or compiler subprocess.
func TestTransformPrintsFilesRewrittenOutsideTypia(t *testing.T) {
  t.Run("source preamble", func(t *testing.T) {
    project := transformRewrittenOutsideTypiaProject(t, "transform-preamble-")
    prog, diags, err := driver.LoadProgram(project, "tsconfig.json", driver.LoadProgramOptions{
      ForceEmit:      true,
      SourcePreamble: transformRewrittenOutsideTypiaPreamble,
    })
    if err != nil || len(diags) != 0 {
      t.Fatalf("load program: err=%v diagnostics=%#v", err, diags)
    }
    defer prog.Close()
    sf := prog.SourceFile(filepath.ToSlash(filepath.Join(project, "src", "plain.ts")))
    if sf == nil || !strings.Contains(sf.Text(), transformRewrittenOutsideTypiaPreamble) {
      t.Fatalf("src/plain.ts must be parsed with the preamble")
    }
    unchanged := func(_ *shimprinter.EmitContext, file *shimast.SourceFile) *shimast.SourceFile { return file }
    text, sourceMap := transformFileToTypeScript(prog, unchanged, sf)
    if !strings.Contains(text, "// banner") || !strings.Contains(text, "spec") {
      t.Fatalf("the preamble-bearing file must be printed with the preamble:\n%s", text)
    }
    transformRewrittenOutsideTypiaAssertMap(t, sourceMap)
  })

  t.Run("linked program plugin", func(t *testing.T) {
    project := transformRewrittenOutsideTypiaProject(t, "transform-linked-edit-")
    // Manifest entry 0 answers buildObservationPlugin, which records this file.
    if err := os.WriteFile(filepath.Join(project, "external.txt"), []byte("consumed\n"), 0o644); err != nil {
      t.Fatalf("write external input: %v", err)
    }
    payload, _ := json.Marshal([]driver.PluginEntry{
      {Name: "observation-test", Stage: "transform", Config: map[string]any{"mode": "complete"}},
      {Name: "linked-edit", Stage: "transform", Config: map[string]any{}},
    })
    t.Setenv(driver.LinkedPluginsEnv, string(payload))
    out, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--output", "ts",
      })
    })
    if code != 0 {
      t.Fatalf("project transform failed: code=%d stderr=\n%s", code, errText)
    }
    var envelope struct {
      TypeScript map[string]string          `json:"typescript"`
      SourceMaps map[string]json.RawMessage `json:"sourceMaps"`
    }
    if err := json.Unmarshal([]byte(out), &envelope); err != nil {
      t.Fatalf("decode envelope: %v\n%s", err, out)
    }
    text := envelope.TypeScript["src/plain.ts"]
    if !strings.Contains(text, "linked-applied") || strings.Contains(text, "linked-pending") {
      t.Fatalf("src/plain.ts must be published with the linked plugin's edit:\n%s", text)
    }
    transformRewrittenOutsideTypiaAssertMap(t, string(envelope.SourceMaps["src/plain.ts"]))
  })
}

func transformRewrittenOutsideTypiaAssertMap(t *testing.T, sourceMap string) {
  t.Helper()
  var decoded struct {
    Version        int       `json:"version"`
    Sources        []string  `json:"sources"`
    SourcesContent []*string `json:"sourcesContent"`
    Mappings       string    `json:"mappings"`
  }
  if err := json.Unmarshal([]byte(sourceMap), &decoded); err != nil {
    t.Fatalf("src/plain.ts must carry a source map: %v\n%s", err, sourceMap)
  }
  if decoded.Version != 3 || decoded.Mappings == "" || len(decoded.Sources) != 1 || decoded.Sources[0] != "plain.ts" {
    t.Fatalf("src/plain.ts must carry a version 3 map for plain.ts: %s", sourceMap)
  }
  if len(decoded.SourcesContent) != 1 || decoded.SourcesContent[0] == nil || *decoded.SourcesContent[0] != transformRewrittenOutsideTypiaPlain {
    t.Fatalf("the src/plain.ts map must carry the authored text as its sourcesContent: %s", sourceMap)
  }
}

func transformRewrittenOutsideTypiaProject(t *testing.T, prefix string) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, prefix)
  if err := os.MkdirAll(filepath.Join(dir, "src"), 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(projectDependenciesEnvelopeTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "src", "plain.ts"), []byte(transformRewrittenOutsideTypiaPlain), 0o644); err != nil {
    t.Fatalf("write plain.ts: %v", err)
  }
  return dir
}

const transformRewrittenOutsideTypiaPreamble = "// banner\n"

const transformRewrittenOutsideTypiaPlain = `export const spec = "linked-pending";
export const twice = (value: number): number => value * 2;
`

// transformLinkedEditPlugin is a linked ProgramPlugin shaped like @ttsc/paths:
// it rewrites a string literal in place, leaving every SourceFile pointer as
// it was.
type transformLinkedEditPlugin struct{}

func (transformLinkedEditPlugin) ApplyProgram(prog *driver.Program, _ driver.PluginContext) error {
  for _, sf := range prog.SourceFiles() {
    transformLinkedEditRewrite(sf.AsNode())
  }
  return nil
}

func transformLinkedEditRewrite(node *shimast.Node) {
  if node == nil {
    return
  }
  if node.Kind == shimast.KindStringLiteral && node.Text() == "linked-pending" {
    node.AsStringLiteral().Text = "linked-applied"
    node.Flags |= shimast.NodeFlagsSynthesized
    node.Loc = shimcore.UndefinedTextRange()
  }
  node.ForEachChild(func(child *shimast.Node) bool {
    transformLinkedEditRewrite(child)
    return false
  })
}
