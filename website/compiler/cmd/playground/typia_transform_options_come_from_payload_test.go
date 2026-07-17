package main

import (
  "bytes"
  "path/filepath"
  "testing"
)

// TestTypiaTransformOptionsComeFromPayload verifies the playground's transform
// verb takes typia's options from the host payload, not from tsconfig text.
//
// This is the verb the website's playground actually drives: the site builds
// typia's resolved plugin entry, writes it into the MemFS tsconfig for tsgo, and
// hands the same entry to the plugin on `--plugins-json`. The plugin must read
// the entry it was given. Its previous reader re-derived the options by matching
// names over the tsconfig's raw bytes -- a byte-identical copy of the CLI's
// scrape, carrying every direction of samchon/typia#1887 with it.
//
//  1. Materialize each matrix row as a project plus the payload the site sends.
//  2. Run the playground transform verb over it.
//  3. Assert the rewritten TypeScript honours the entry, not the file text.
func TestTypiaTransformOptionsComeFromPayload(t *testing.T) {
  for _, tc := range playgroundPayloadCases() {
    t.Run(tc.name, func(t *testing.T) {
      project := playgroundPayloadProject(t, tc)
      stdout := bytes.Buffer{}
      stderr := bytes.Buffer{}
      code := runTypiaTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", filepath.Join("src", "main.ts"),
        "--output", "ts",
        // `=`-joined, the shape @ttsc/wasm's buildPluginArgv renders every
        // option key into.
        "--plugins-json=" + tc.payload,
      }, &stdout, &stderr)
      if code != 0 {
        t.Fatalf("transform failed with code %d\nstdout=%s\nstderr=%s", code, stdout.String(), stderr.String())
      }
      playgroundPayloadAssert(t, tc, stdout.String())
    })
  }
}
