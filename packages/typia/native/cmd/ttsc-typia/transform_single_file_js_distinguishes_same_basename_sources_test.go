package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileJSDistinguishesSameBasenameSources verifies the
// collision boundary of the `--output js` artifact match.
//
// The comment on the old whole-path-stem match named the intended repair --
// "match on basename stem" -- and a basename match would indeed have unblocked
// `outDir`. It would also have made `src/alpha/main.ts` and `src/beta/main.ts`
// indistinguishable, so whichever emitted `main.js` arrived last would win and
// the command would publish another file's validator under an exit 0. Resolving
// the expected output path through the compiler keeps the two apart by
// construction, since they resolve to different artifacts.
//
//  1. Give one project two sources that share a basename in different
//     directories, each lowering a differently shaped validator.
//  2. Transform each with `--output js --out` under a `rootDir`/`outDir` layout.
//  3. Require each published artifact to carry its own validator and not its
//     namesake's.
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
