package main

import (
  "os"
  "path/filepath"
  "testing"
)

// TestBuildPluginOptionsComeFromPayload checks the authored operation results described below.
//
// The actual host payload owns native plugin options; a fixture tsconfig option cannot override the selected command payload. Literal guards are derived from each option contract.
//
// 1. An enabled typia entry and inherited enabled entry include the function guard; line and block comments and a sibling plugin option omit it. All five cases share the same callback property.
// 2. Each build option subcase emits JavaScript whose function-property checks match the explicit plugin payload.
//
// @evidence contracts/testing.md#behavioral-verification Each build option subcase emits JavaScript whose function-property checks match the explicit plugin payload.
// @evidence contracts/testing.md#independent-expectations The actual host payload owns native plugin options; a fixture tsconfig option cannot override the selected command payload. Literal guards are derived from each option contract.
// @evidence contracts/testing.md#distinguishing-cases An enabled typia entry and inherited enabled entry include the function guard; line and block comments and a sibling plugin option omit it. All five cases share the same callback property.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestBuildPluginOptionsComeFromPayload as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
