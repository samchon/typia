package main

import (
  "bytes"
  "os"
  "path/filepath"
  "testing"
)

// TestTypiaBuildOptionsComeFromPayload verifies the playground's build verb
// takes typia's options from the host payload, not from tsconfig text.
//
// The playground plugin declares `--plugins-json` on its build verb separately
// from its transform verb and reads the options separately too, so the transform
// verb's coverage does not speak for it: reverting this verb alone would leave
// the transform test green. It is the verb `api.plugin({ command: "build" })`
// and the native smoke CLI reach, and it carried its own copy of the tsconfig
// scrape that produced samchon/typia#1887.
//
//  1. Materialize each matrix row as a project plus the payload the host sends.
//  2. Run the playground build verb with emit forced into the project's outDir.
//  3. Assert the emitted validator honors the entry, not the file text.
func TestTypiaBuildOptionsComeFromPayload(t *testing.T) {
  for _, tc := range playgroundPayloadCases() {
    t.Run(tc.name, func(t *testing.T) {
      project := playgroundPayloadProject(t, tc)
      dist := filepath.Join(project, "dist")
      stdout := bytes.Buffer{}
      stderr := bytes.Buffer{}
      code := runTypiaBuild([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--emit",
        "--outDir", dist,
        // `=`-joined, the shape @ttsc/wasm's buildPluginArgv renders every
        // option key into.
        "--plugins-json=" + tc.payload,
      }, &stdout, &stderr)
      if code != 0 {
        t.Fatalf("build failed with code %d\nstdout=%s\nstderr=%s", code, stdout.String(), stderr.String())
      }
      emitted, err := os.ReadFile(filepath.Join(dist, "main.js"))
      if err != nil {
        t.Fatalf("read emitted javascript: %v", err)
      }
      playgroundPayloadAssert(t, tc, string(emitted))
    })
  }
}
