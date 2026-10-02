package main

import (
  "path/filepath"
  "testing"
)

// TestTransformPluginOptionsComeFromPayload checks the authored operation results described below.
//
// The host payload configures typia transform behavior; source-project plugin options do not replace those explicit operation settings.
//
// 1. Inline, commented, sibling-owned and inherited plugin entries distinguish enabled/disabled functional payloads while retaining the same function-property fixture.
// 2. Each subcase includes or omits the function-property guard according to the explicit typia plugin payload.
//
// @evidence contracts/testing.md#behavioral-verification Each subcase includes or omits the function-property guard according to the explicit typia plugin payload.
// @evidence contracts/testing.md#independent-expectations The host payload configures typia transform behavior; source-project plugin options do not replace those explicit operation settings.
// @evidence contracts/testing.md#distinguishing-cases Inline, commented, sibling-owned and inherited plugin entries distinguish enabled/disabled functional payloads while retaining the same function-property fixture.
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
