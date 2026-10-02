package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestRecursiveConditionalAliasNameTransform verifies stable recursive conditional alias emission.
//
// A recursive conditional alias requires an array helper and a stable identity
// across transforms; cycle-guard map order must not change generated names.
//
// 1. The recursive conditional alias exercises the cycle boundary and repeated transformation; ordinary anonymous display-name leakage is owned by the separate inline case.
// 2. The conditional alias emits a recursive array helper and a second transform of the same fixture produces identical complete bytes.
//
// @evidence contracts/testing.md#behavioral-verification The conditional alias emits a recursive array helper and a second transform of the same fixture produces identical complete bytes.
// @evidence contracts/testing.md#independent-expectations The authored recursive array type requires element validation; deterministic transform inputs must produce stable helper identities. Byte equality establishes stability only, so the explicit array-helper assertion separately pins the intended branch.
// @evidence contracts/testing.md#distinguishing-cases The recursive conditional alias exercises the cycle boundary and repeated transformation; ordinary anonymous display-name leakage is owned by the separate inline case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestRecursiveConditionalAliasNameTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestRecursiveConditionalAliasNameTransform(t *testing.T) {
  project := recursiveConditionalAliasNameProject(t)
  transform := func() (string, string, int) {
    return ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", "src/main.ts",
        "--output", "js",
      })
    })
  }

  out, errText, code := transform()
  if code != 0 {
    t.Fatalf("recursive conditional alias transform failed: code=%d stderr=\n%s", code, errText)
  }
  if strings.Contains(out, "_ia0") == false {
    t.Fatalf("expected a recursive array validator in the emit, got:\n%s", out)
  }

  // The cycle guard is a map, and the name it settles on becomes a helper
  // identifier and a schema component key. Map iteration order must not reach
  // either, so the same source has to emit the same bytes.
  repeat, repeatErr, repeatCode := transform()
  if repeatCode != 0 {
    t.Fatalf("recursive conditional alias repeat transform failed: code=%d stderr=\n%s", repeatCode, repeatErr)
  }
  if repeat != out {
    t.Fatalf("repeat transform emitted different bytes:\nfirst:\n%s\nsecond:\n%s", out, repeat)
  }

}

func recursiveConditionalAliasNameProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "recursive-conditional-alias-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(recursiveConditionalAliasNameTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(recursiveConditionalAliasNameSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const recursiveConditionalAliasNameTSConfig = `{
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

const recursiveConditionalAliasNameSource = `import typia, { Primitive, tags } from "typia";

// 1. the reported case: Primitive over a self-recursive union carrying Date.
//    Primitive rewrites the Date arm to a date-time string and keeps the array
//    arm pointing back at the whole union.
type Node = Date | Node[];
export const isPrimitiveNode = typia.createIs<Primitive<Node>>();
export const assertPrimitiveNode = typia.createAssert<Primitive<Node>>();
export const schemaPrimitiveNode = typia.json.schema<Primitive<Node>>();

// 2. the same graph without Primitive: any self-recursive conditional alias
//    instantiates to a union whose array member's type argument is that union
type Rec<T> = T extends Date
  ? string
  : T extends (infer U)[]
    ? Rec<U>[]
    : never;
export const isRec = typia.createIs<Rec<Node>>();

// 3. the second report: the recursion sits behind an object property
interface JsonObject {
  [key: string]: JsonValue;
}
type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface Output {
  at: Date;
  payload: JsonValue;
}
export const isOutput = typia.createIs<Primitive<Output>>();

// controls: recursions that already named themselves through an alias or a
// declaration must keep transforming and must not take the cycle placeholder
type Named = (string & tags.Format<"date-time">) | Named[];
export const isNamed = typia.createIs<Named>();
export const schemaNamed = typia.json.schema<Named>();

type SelfArray = SelfArray[];
export const isSelfArray = typia.createIs<SelfArray>();

interface ICategory {
  name: string;
  children: ICategory[];
}
export const isCategory = typia.createIs<ICategory>();
export const schemaCategory = typia.json.schema<ICategory>();
`
