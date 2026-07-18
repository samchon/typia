package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProtobufIsEncodeFiniteNumberTransform pins protobuf.isEncode against a bare
// number leaf so a non-finite value cannot be encoded into the message (#2196).
//
// protobuf.isEncode forces Options.Finite on its inner `__is` guard, then emits
// `__is(input) ? __encode(input) : null`. A protobuf double can hold NaN and
// Infinity, so the guard is the only thing keeping them out of the wire. While
// `is` dropped `finite`, that guard accepted NaN and the encoder wrote it; the
// guard must now carry Number.isFinite on the number leaf. Because isEncode has no
// separate error-path checker, the guard is the sole place the number leaf's
// finite check can appear, so its presence in the emit is an unambiguous oracle.
//
//  1. Transform a `protobuf.isEncode<{ value: number }>` fixture with default options.
//  2. Assert the emitted `__is` guards the number leaf with Number.isFinite.
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
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "protobuf-is-encode-finite-number-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
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
