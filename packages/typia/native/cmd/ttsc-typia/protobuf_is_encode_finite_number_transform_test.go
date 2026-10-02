package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProtobufIsEncodeFiniteNumberTransform checks the authored operation results described below.
//
// Checked protobuf encoding explicitly rejects nonfinite number leaves even though the underlying double wire representation can encode them; the inner is guard owns that admission.
//
// 1. A bare number leaf under default options pins the forced-finite branch; ordinary numeric option behavior is tested by option cases.
// 2. The emitted isEncode guard contains Number.isFinite(input.value).
//
// @evidence contracts/testing.md#behavioral-verification The emitted isEncode guard contains Number.isFinite(input.value).
// @evidence contracts/testing.md#independent-expectations Checked protobuf encoding explicitly rejects nonfinite number leaves even though the underlying double wire representation can encode them; the inner is guard owns that admission.
// @evidence contracts/testing.md#distinguishing-cases A bare number leaf under default options pins the forced-finite branch; ordinary numeric option behavior is tested by option cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestProtobufIsEncodeFiniteNumberTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestProtobufIsEncodeFiniteNumberTransform(t *testing.T) {
  project := protobufIsEncodeFiniteNumberProject(t)
  js := protobufIsEncodeFiniteNumberTransform(t, project)
  needle := "Number.isFinite(input.value)"
  if !strings.Contains(js, needle) {
    t.Fatalf("protobuf.isEncode did not guard the number leaf with %q:\n%s", needle, js)
  }
}

func protobufIsEncodeFiniteNumberProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "protobuf-is-encode-finite-number-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(protobufIsEncodeFiniteNumberTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(protobufIsEncodeFiniteNumberSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func protobufIsEncodeFiniteNumberTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("protobuf isEncode finite transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const protobufIsEncodeFiniteNumberTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const protobufIsEncodeFiniteNumberSource = `import typia from "typia";

interface Box {
  value: number;
}

export const encode = (input: unknown): Uint8Array | null =>
  typia.protobuf.isEncode<Box>(input);
`
