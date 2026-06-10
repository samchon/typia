package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProtobufSequenceFieldNumbersTransform verifies Sequence tag consumption.
//
// typescript-go materializes the `Sequence<N>` schema literal as its internal
// jsnum number type, which the previous closed type switches never matched, so
// explicit protobuf field numbers were silently replaced by auto-numbering and
// duplicate-sequence validation never fired.
//
//  1. Transform a message fixture carrying explicit `Sequence<5>` / `Sequence<7>`
//     field numbers plus an untagged property (auto-numbered after the highest
//     explicit number).
//  2. Require the emitted proto message to carry the explicit numbers.
//  3. Require a message whose two properties share `Sequence<1>` to fail the
//     transform, leaving the call untransformed.
func TestProtobufSequenceFieldNumbersTransform(t *testing.T) {
  project := protobufSequenceFieldNumbersProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("protobuf sequence transform failed: code=%d stderr=\n%s", code, errText)
  }
  for _, line := range []string{
    "required string id = 5;",
    "required double age = 7;",
    "required bool flag = 8;",
  } {
    if !strings.Contains(out, line) {
      t.Fatalf("emitted proto message should contain %q:\n%s", line, out)
    }
  }
  if !strings.Contains(out, ".protobuf.message()") {
    t.Fatalf("duplicated sequence message should stay untransformed:\n%s", out)
  }
}

func protobufSequenceFieldNumbersProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "protobuf-sequence-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(protobufSequenceFieldNumbersTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(protobufSequenceFieldNumbersSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const protobufSequenceFieldNumbersTSConfig = `{
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

const protobufSequenceFieldNumbersSource = `import typia, { tags } from "typia";

interface Sequenced {
  id: string & tags.Sequence<5>;
  age: number & tags.Sequence<7>;
  flag: boolean;
}

interface Duplicated {
  id: string & tags.Sequence<1>;
  age: number & tags.Sequence<1>;
}

export const sequenced = typia.protobuf.message<Sequenced>();
export const duplicated = typia.protobuf.message<Duplicated>();
`
