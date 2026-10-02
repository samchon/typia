package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProtobufSequenceFieldNumbersTransform checks the authored operation results described below.
//
// Explicit Sequence literals establish field numbers, automatic numbering follows the greatest reserved explicit number, and one field number cannot identify two properties.
//
// 1. Two nonconsecutive explicit numbers and one untagged field contrast with a duplicate-number fixture isolated to preserve successful output observability.
// 2. The emitted proto uses id five, age seven and automatic flag eight; duplicate Sequence one reports the colliding properties with status three and no artifact.
//
// @evidence contracts/testing.md#behavioral-verification The emitted proto uses id five, age seven and automatic flag eight; duplicate Sequence one reports the colliding properties with status three and no artifact.
// @evidence contracts/testing.md#independent-expectations Explicit Sequence literals establish field numbers, automatic numbering follows the greatest reserved explicit number, and one field number cannot identify two properties.
// @evidence contracts/testing.md#distinguishing-cases Two nonconsecutive explicit numbers and one untagged field contrast with a duplicate-number fixture isolated to preserve successful output observability.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestProtobufSequenceFieldNumbersTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestProtobufSequenceFieldNumbersTransform(t *testing.T) {
  out, errText, code := protobufSequenceFieldNumbersTransform(t, "sequenced-", protobufSequenceFieldNumbersSource)
  if code != 0 {
    t.Fatalf("protobuf sequence transform failed: code=%d stderr=\n%s", code, errText)
  }
  // The subject is the explicit `Sequence<5>` / `Sequence<7>` field numbers and
  // the auto-numbered `8` after them; the presence label is `optional` because
  // proto3 has no `required`, and emitting it would make the document reject
  // under a Protobuf compiler (samchon/typia#2155). Compiler legality itself is
  // pinned by TestProtobufMessageDocumentCompiles.
  for _, line := range []string{
    "optional string id = 5;",
    "optional double age = 7;",
    "optional bool flag = 8;",
  } {
    if !strings.Contains(out, line) {
      t.Fatalf("emitted proto message should contain %q:\n%s", line, out)
    }
  }

  dupOut, dupErr, dupCode := protobufSequenceFieldNumbersTransform(t, "duplicated-", protobufSequenceDuplicatedSource)
  if dupCode != 3 {
    t.Fatalf("duplicated sequence message should be rejected with code 3: code=%d stdout=\n%s\nstderr=\n%s", dupCode, dupOut, dupErr)
  }
  if !strings.Contains(dupErr, "error TS(typia.protobuf.message):") ||
    !strings.Contains(dupErr, `The Sequence<1> tag is duplicated in two properties ("id" and "age")`) {
    t.Fatalf("duplicated sequence diagnostic did not name the collision:\n%s", dupErr)
  }
  if dupOut != "" {
    t.Fatalf("duplicated sequence message published an artifact:\n%s", dupOut)
  }
}

func protobufSequenceFieldNumbersTransform(t *testing.T, prefix string, source string) (string, string, int) {
  t.Helper()
  project := protobufSequenceFieldNumbersProject(t, prefix, source)
  return ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
}

func protobufSequenceFieldNumbersProject(t *testing.T, prefix string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "protobuf-sequence-"+prefix)
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
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

export const sequenced = typia.protobuf.message<Sequenced>();
`

// protobufSequenceDuplicatedSource is the negative twin: the same message shape
// whose two properties claim one `Sequence<1>` number, which typia must reject
// rather than auto-renumber.
const protobufSequenceDuplicatedSource = `import typia, { tags } from "typia";

interface Duplicated {
  id: string & tags.Sequence<1>;
  age: number & tags.Sequence<1>;
}

export const duplicated = typia.protobuf.message<Duplicated>();
`
