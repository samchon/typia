package main

import (
  "os"
  "path/filepath"
  "testing"
)

// TestBuildPluginOptionsComeFromPayload verifies the build host takes typia's
// options from ttsc's resolved plugin entry, not from tsconfig text.
//
// The build host declares its own `--plugins-json` flag and performs its own
// option read, so the transform host's coverage does not speak for it: reverting
// this host alone would leave the transform tests green. The rows write a
// tsconfig whose raw text disagrees with the resolved entry -- the distinction
// samchon/typia#1887's regex scrape could not make -- and the assertion reads
// the JavaScript this host actually wrote to disk.
//
//  1. Materialize each matrix row as a project plus the payload ttsc resolves it into.
//  2. Run the build host with emit forced into the project's outDir.
//  3. Assert the emitted validator honors the entry, not the file text.
func TestBuildPluginOptionsComeFromPayload(t *testing.T) {
  for _, tc := range pluginOptionsPayloadCases() {
    t.Run(tc.name, func(t *testing.T) {
      project := pluginOptionsPayloadProject(t, tc)
      dist := filepath.Join(project, "dist")
      out, errText, code := ttscTypiaTestCapture(func() int {
        return runBuild([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--emit",
          "--outDir", dist,
          // `=`-joined, the exact shape ttsc's createNativeBuildArgs and the
          // wasm hosts put on the wire.
          "--plugins-json=" + tc.payload,
        })
      })
      if code != 0 {
        t.Fatalf("build failed with code %d\nstdout=%s\nstderr=%s", code, out, errText)
      }
      emitted, err := os.ReadFile(filepath.Join(dist, "main.js"))
      if err != nil {
        t.Fatalf("read emitted javascript: %v", err)
      }
      pluginOptionsPayloadAssert(t, tc, string(emitted))
    })
  }
}
