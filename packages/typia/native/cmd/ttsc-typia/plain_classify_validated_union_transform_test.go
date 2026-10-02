package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyValidatedUnionTransform verifies reconstruction of both validated union arms.
//
// Validation before classification cannot erase either accepted union member reconstruction strategy; static factories and seed constructors remain different contracts.
//
// 1. Checked direct/factory operations combine Ann and Bob arms, complementing the unchecked union strategy case.
// 2. The checked classify output retains Ann.from and new Bob.
//
// @evidence contracts/testing.md#behavioral-verification The checked classify output retains Ann.from and new Bob.
// @evidence contracts/testing.md#independent-expectations Validation before classification cannot erase either accepted union member reconstruction strategy; static factories and seed constructors remain different contracts.
// @evidence contracts/testing.md#distinguishing-cases Checked direct/factory operations combine Ann and Bob arms, complementing the unchecked union strategy case.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyValidatedUnionTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyValidatedUnionTransform(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-vunion-", plainClassifyValidatedUnionSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify validated-union transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, "Ann.from(") || !strings.Contains(out, "new Bob(") {
    t.Fatalf("the validated union should construct both from- (Ann.from) and new- (new Bob) members:\n%s", out)
  }
}

const plainClassifyValidatedUnionSource = `import typia from "typia";

// from-strategy member, seed { a }
export class Ann {
  a!: number;
  private constructor(a: number) {
    this.a = a;
  }
  static from(seed: { a: number }): Ann {
    return new Ann(seed.a);
  }
  tag(): string {
    return "ann:" + this.a;
  }
}

// new-strategy member, seed { b }
export class Bob {
  b!: string;
  constructor(seed: { b: string }) {
    this.b = seed.b;
  }
  tag(): string {
    return "bob:" + this.b;
  }
}

// new-strategy member, seed { c } — distinct required key
export class Cal {
  c!: boolean;
  constructor(seed: { c: boolean }) {
    this.c = seed.c;
  }
  tag(): string {
    return "cal:" + this.c;
  }
}

export const assertShape = typia.plain.createAssertClassify<typeof Ann | typeof Bob | typeof Cal | number>();
export const validateShape = typia.plain.createValidateClassify<typeof Ann | typeof Bob | typeof Cal>();
`
