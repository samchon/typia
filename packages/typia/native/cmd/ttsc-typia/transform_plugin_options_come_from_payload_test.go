package main

import (
  "path/filepath"
  "testing"
)

// TestTransformPluginOptionsComeFromPayload checks the authored operation results described below.
//
// The host payload configures typia transform behavior; source-project plugin options do not replace those explicit operation settings.
//
// 1. Enabled/disabled option payload twins distinguish finite, functional, numeric and undefined checks while retaining the same fixture shape.
// 2. Each transform option subcase emits guards matching its explicit plugin payload, independent of fixture config settings.
//
// @evidence contracts/testing.md#behavioral-verification Each transform option subcase emits guards matching its explicit plugin payload, independent of fixture config settings.
// @evidence contracts/testing.md#independent-expectations The host payload configures typia transform behavior; source-project plugin options do not replace those explicit operation settings.
// @evidence contracts/testing.md#distinguishing-cases Enabled/disabled option payload twins distinguish finite, functional, numeric and undefined checks while retaining the same fixture shape.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformPluginOptionsComeFromPayload as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
          // `=`-joined, the exact shape ttsc's createNativeBuildArgs and the
          // wasm hosts put on the wire.
          "--plugins-json=" + tc.payload,
        })
      })
      if code != 0 {
        t.Fatalf("transform failed with code %d\nstdout=%s\nstderr=%s", code, out, errText)
      }
      pluginOptionsPayloadAssert(t, tc, out)
    })
  }
}
