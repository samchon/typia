package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileJSDistinguishesSameBasenameSources checks the authored operation results described below.
//
// Output selection follows source identity through the emit layout, not a filename stem shared by distinct source directories.
//
// 1. Two nested sources named alike carry different literal/data checks, supplying positive selected and negative sibling content for both selections.
// 2. Each selected same-basename source publishes its own validator and excludes the sibling validator.
//
// @evidence contracts/testing.md#behavioral-verification Each selected same-basename source publishes its own validator and excludes the sibling validator.
// @evidence contracts/testing.md#independent-expectations Output selection follows source identity through the emit layout, not a filename stem shared by distinct source directories.
// @evidence contracts/testing.md#distinguishing-cases Two nested sources named alike carry different literal/data checks, supplying positive selected and negative sibling content for both selections.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformSingleFileJSDistinguishesSameBasenameSources as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestTransformSingleFileJSDistinguishesSameBasenameSources(t *testing.T) {
  const alphaSource = `import typia from "typia";
export function check(input: unknown): boolean {
  return typia.is<{ alpha: number }>(input);
}
`
  const betaSource = `import typia from "typia";
export function check(input: unknown): boolean {
  return typia.is<{ beta: string }>(input);
}
`
  project := transformSingleFileLayoutProject(
    t,
    []string{`"rootDir": "src"`, `"outDir": "dist"`},
    map[string]string{
      "src/alpha/main.ts": alphaSource,
      "src/beta/main.ts":  betaSource,
    },
  )
  for _, probe := range []struct {
    name    string
    file    string
    carries string
    rejects string
  }{
    {name: "alpha", file: "src/alpha/main.ts", carries: "alpha", rejects: "beta"},
    {name: "beta", file: "src/beta/main.ts", carries: "beta", rejects: "alpha"},
  } {
    t.Run(probe.name, func(t *testing.T) {
      outPath := filepath.Join(project, "artifact", probe.name+".js")
      _, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.FromSlash(probe.file),
          "--output", "js",
          "--out", outPath,
        })
      })
      if code != 0 {
        t.Fatalf("`--output js` should publish %s, got %d\nstderr=%s", probe.file, code, errText)
      }
      data, err := os.ReadFile(outPath)
      if err != nil {
        t.Fatalf("`--output js` published no artifact for %s: %v", probe.file, err)
      }
      text := string(data)
      if !strings.Contains(text, probe.carries) {
        t.Fatalf("published artifact does not carry %s's validator:\n%s", probe.file, text)
      }
      if strings.Contains(text, probe.rejects) {
        t.Fatalf("published artifact carries the same-basename sibling's validator:\n%s", text)
      }
    })
  }
}
