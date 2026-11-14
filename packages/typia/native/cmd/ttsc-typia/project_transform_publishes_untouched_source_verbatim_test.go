package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProjectTransformPublishesUntouchedSourceVerbatim verifies the transform
// envelope publishes a file typia did not change as its authored text, and a
// file typia changed with a source map back to its authored text.
//
// The consumer keeps a module only when the published text equals the text it
// read. A printed copy of an unchanged file differs from it in formatting, so a
// bundler took every module as transformed and served lines that no longer
// matched the file; under Bun, which ignores the map an `onLoad` returns,
// breakpoints broke in every module of a typia project (samchon/typia#2557).
//
//  1. Build a project whose `main.ts` calls `typia.is<Point>()`, whose
//     `plain.ts` has no typia call and is formatted the way the printer would
//     rewrite it, and whose `crlf.ts` has no typia call and CRLF line endings.
//  2. Run project transform mode and decode the JSON envelope.
//  3. Assert `plain.ts` and `crlf.ts` are published byte for byte as written,
//     with no source map entry.
//  4. Assert `main.ts` is lowered and carries a version 3 map whose
//     `sourcesContent` is its authored text.
//  5. Run single-file transform mode on `plain.ts` and assert it prints the
//     authored text too.
//
// @evidence contracts/testing.md#behavioral-verification The decoded envelope publishes plain.ts and crlf.ts byte for byte without a map entry, lowers main.ts with a version 3 map naming main.ts, and single-file mode prints plain.ts as written.
// @evidence contracts/testing.md#independent-expectations The authored fixture strings are the oracle for the unchanged files and for the map's sourcesContent; the lowered main.ts is recognized by the absence of the `typia.is<Point>` call it replaces, not by output the implementation produced.
// @evidence contracts/testing.md#distinguishing-cases A transformed file is paired with two untransformed ones, one formatted unlike the printer's output and one with CRLF endings the printer would normalize, so a reprint fails either comparison and a missing or misattached map fails the main.ts checks.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestProjectTransformPublishesUntouchedSourceVerbatim as a unit test. Its fixture project and captured runTransform calls exercise the owning Go operation in process; no consumer installation or compiler subprocess is used.
func TestProjectTransformPublishesUntouchedSourceVerbatim(t *testing.T) {
  project := projectTransformUntouchedSourceProject(t)
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
    TypeScript map[string]string `json:"typescript"`
    SourceMaps map[string]struct {
      Version        int       `json:"version"`
      File           string    `json:"file"`
      Sources        []string  `json:"sources"`
      SourcesContent []*string `json:"sourcesContent"`
      Mappings       string    `json:"mappings"`
    } `json:"sourceMaps"`
  }
  if err := json.Unmarshal([]byte(out), &envelope); err != nil {
    t.Fatalf("decode envelope: %v\n%s", err, out)
  }

  for key, authored := range map[string]string{
    "src/plain.ts": projectTransformUntouchedSourcePlain,
    "src/crlf.ts":  projectTransformUntouchedSourceCRLF,
  } {
    if text, ok := envelope.TypeScript[key]; !ok || text != authored {
      t.Fatalf("%s has no typia call and must be published as written:\nwant %q\ngot  %q", key, authored, text)
    }
    if _, ok := envelope.SourceMaps[key]; ok {
      t.Fatalf("%s is published as written and must carry no source map", key)
    }
  }

  main := envelope.TypeScript["src/main.ts"]
  if main == "" || strings.Contains(main, "typia.is<Point>") {
    t.Fatalf("src/main.ts must be published with its typia call lowered, got:\n%s", main)
  }
  sourceMap, ok := envelope.SourceMaps["src/main.ts"]
  if !ok {
    t.Fatalf("src/main.ts was changed and must carry a source map:\n%s", out)
  }
  if sourceMap.Version != 3 || sourceMap.Mappings == "" || sourceMap.File != "main.ts" {
    t.Fatalf("src/main.ts must carry a version 3 map for main.ts with mappings: %+v", sourceMap)
  }
  if len(sourceMap.Sources) != 1 || sourceMap.Sources[0] != "main.ts" {
    t.Fatalf("the src/main.ts map must name main.ts as its one source: %v", sourceMap.Sources)
  }
  if len(sourceMap.SourcesContent) != 1 || sourceMap.SourcesContent[0] == nil || *sourceMap.SourcesContent[0] != projectTransformUntouchedSourceMain {
    t.Fatalf("the src/main.ts map must carry the authored text as its sourcesContent: %v", sourceMap.SourcesContent)
  }

  single, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/plain.ts",
      "--output", "ts",
    })
  })
  if code != 0 {
    t.Fatalf("single-file transform failed: code=%d stderr=\n%s", code, errText)
  }
  if single != projectTransformUntouchedSourcePlain {
    t.Fatalf("single-file mode must print an untouched file as written:\nwant %q\ngot  %q", projectTransformUntouchedSourcePlain, single)
  }
}

func projectTransformUntouchedSourceProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "project-transform-untouched-source-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(projectDependenciesEnvelopeTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  for name, body := range map[string]string{
    "main.ts":  projectTransformUntouchedSourceMain,
    "plain.ts": projectTransformUntouchedSourcePlain,
    "crlf.ts":  projectTransformUntouchedSourceCRLF,
  } {
    if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  return dir
}

const projectTransformUntouchedSourceMain = `import typia from "typia";

import type { Point } from "./plain";

export const isPoint = (input: unknown) => typia.is<Point>(input);
`

const projectTransformUntouchedSourcePlain = `export interface Point { x: number; y: number }


export const origin: Point = {x:0,y:0};
export function add(a:Point,b:Point):Point{return {x:a.x+b.x,y:a.y+b.y}}
`

const projectTransformUntouchedSourceCRLF = "export const greeting: string = \"hello\";\r\n\r\nexport const twice = (value: string): string => value + value;\r\n"
