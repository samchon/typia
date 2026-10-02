package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyFieldCopyTransform verifies prototype-based field copying for instance class forms.
//
// The instance form describes data properties rather than a constructor call contract, so reconstruction attaches the class prototype without invoking an unspecified constructor.
//
// 1. A named class instance is the field-copy branch; constructor and static-factory positive counterparts are owned by from/new classification cases.
// 2. The generated instance-form classification contains Object.create.
//
// @evidence contracts/testing.md#behavioral-verification The generated instance-form classification contains Object.create.
// @evidence contracts/testing.md#independent-expectations The instance form describes data properties rather than a constructor call contract, so reconstruction attaches the class prototype without invoking an unspecified constructor.
// @evidence contracts/testing.md#distinguishing-cases A named class instance is the field-copy branch; constructor and static-factory positive counterparts are owned by from/new classification cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyFieldCopyTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyFieldCopyTransform(t *testing.T) {
  project := plainClassifyFieldCopyProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify field-copy transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, "Object.create") {
    t.Fatalf("classify of a named class should field-copy onto the prototype (Object.create):\n%s", out)
  }
}

func plainClassifyFieldCopyProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "plain-classify-fieldcopy-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainClassifyFieldCopyTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyFieldCopySource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const plainClassifyFieldCopyTSConfig = `{
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

const plainClassifyFieldCopySource = `import typia from "typia";

export class User {
  id!: number;
  name!: string;
  greet(): string {
    return "hi " + this.name;
  }
}

export class Team {
  lead!: User;
  members!: User[];
}

export class Node {
  value!: number;
  next?: Node;
}

export const classifyTeam = typia.plain.createClassify<Team>();
export const classifyNode = typia.plain.createClassify<Node>();
export const assertClassifyUser = typia.plain.createAssertClassify<User>();
export const validateClassifyUser = typia.plain.createValidateClassify<User>();
`
