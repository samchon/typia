package main

import (
  "path/filepath"
  "testing"
)

// TestTransformPluginOptionsComeFromPayload verifies the transform host takes
// typia's options from ttsc's resolved plugin entry, not from tsconfig text.
//
// This host owns its own `--plugins-json` flag and its own option read, so it
// needs its own proof: the build host passing does not show that this one is
// wired. Every row writes a tsconfig whose raw text disagrees with the resolved
// entry, which is exactly what samchon/typia#1887 could not tell apart -- the
// old reader regex-matched option names over the leaf file's bytes, so it
// enabled options the user had commented out, adopted a sibling plugin's
// options, and ignored options inherited through `extends`.
//
//  1. Materialize each matrix row as a project plus the payload ttsc resolves it into.
//  2. Run the transform host over it.
//  3. Assert the emitted validator honours the entry, not the file text.
func TestTransformPluginOptionsComeFromPayload(t *testing.T) {
  for _, tc := range pluginOptionsPayloadCases() {
    t.Run(tc.name, func(t *testing.T) {
      project := pluginOptionsPayloadProject(t, tc)
      out, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.Join("src", "main.ts"),
          "--output", "ts",
          "--plugins-json", tc.payload,
        })
      })
      if code != 0 {
        t.Fatalf("transform failed with code %d\nstdout=%s\nstderr=%s", code, out, errText)
      }
      pluginOptionsPayloadAssert(t, tc, out)
    })
  }
}
