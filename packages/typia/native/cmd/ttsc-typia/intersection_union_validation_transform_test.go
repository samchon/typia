package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestIntersectionUnionValidationTransform verifies intersection-union member and native identity emission.
//
// An intersection applied to union variants must preserve the common member restriction and the variant native value type rather than flattening away one contribution.
//
// 1. The fixture intersects multiple union alternatives, including a Date-bearing variant; this case pins member/native emission rather than executing runtime union errors.
// 2. The transformed fixture retains partyRole and Date checks.
//
// @evidence contracts/testing.md#behavioral-verification The transformed fixture retains partyRole and Date checks.
// @evidence contracts/testing.md#independent-expectations An intersection applied to union variants must preserve the common member restriction and the variant native value type rather than flattening away one contribution.
// @evidence contracts/testing.md#distinguishing-cases The fixture intersects multiple union alternatives, including a Date-bearing variant; this case pins member/native emission rather than executing runtime union errors.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestIntersectionUnionValidationTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestIntersectionUnionValidationTransform(t *testing.T) {
  project := intersectionUnionValidationProject(t)
  js := intersectionUnionValidationTransform(t, project)
  if !strings.Contains(js, "partyRole") || !strings.Contains(js, "Date") {
    t.Fatalf("intersected union validation fixture was not emitted:\n%s", js)
  }
}

func intersectionUnionValidationProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "intersection-union-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(intersectionUnionValidationTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(intersectionUnionValidationSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func intersectionUnionValidationTransform(t *testing.T, project string) string {
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
    t.Fatalf("intersection union transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const intersectionUnionValidationTSConfig = `{
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

const intersectionUnionValidationSource = `import typia from "typia";

type PartyWithRole = Party & PartyRoleInfo;
type Party = Individual | Corporation;

interface Individual {
  type: "individual";
  birthDate: Date;
}

interface Corporation {
  type: "corporation";
}

type PartyRoleInfo =
  | {
      partyRole: "customer";
    }
  | {
      partyRole: "other";
      otherPartyRole: string;
    };

export const isParty = typia.createIs<PartyWithRole>();
export const validateParty = typia.createValidate<PartyWithRole>();
export const assertParty = typia.createAssert<PartyWithRole>();
export const validateDirect = (input: unknown) => typia.validate<PartyWithRole>(input);

type DateSharedUnion =
  | {
      stamp: Date;
      left: string;
    }
  | {
      stamp: Date;
      right: string;
    };

type BytesSharedUnion =
  | {
      bytes: Uint8Array;
      left: string;
    }
  | {
      bytes: Uint8Array;
      right: string;
    };

type PrimitiveWrapperSharedUnion =
  | {
      value: string;
      left: string;
    }
  | {
      value: String;
      right: string;
    };

type TemplateSharedUnion =
  | {
      code: ` + "`id-${number}`" + `;
      left: string;
    }
  | {
      code: ` + "`id-${string}`" + `;
      right: string;
    };

type SetSharedUnion =
  | {
      items: Set<string>;
      left: string;
    }
  | {
      items: Set<number>;
      right: string;
    };

type MapSharedUnion =
  | {
      lookup: Map<string, number>;
      left: string;
    }
  | {
      lookup: Map<number, string>;
      right: string;
    };

type ArrayTupleSharedUnion =
  | {
      items: number[];
      left: string;
    }
  | {
      items: [number];
      right: string;
    };

type BigIntPrimitiveOrInterface = bigint | BigInt;
type BigIntLiteralOrInterface = 1n | BigInt;
type BigIntInterfaceOnly = BigInt;

export const validateDateShared = typia.createValidate<DateSharedUnion>();
export const validateBytesShared = typia.createValidate<BytesSharedUnion>();
export const validatePrimitiveWrapperShared = typia.createValidate<PrimitiveWrapperSharedUnion>();
export const validateTemplateShared = typia.createValidate<TemplateSharedUnion>();
export const isTemplateShared = typia.createIs<TemplateSharedUnion>();
export const assertTemplateShared = typia.createAssert<TemplateSharedUnion>();
export const validateSetShared = typia.createValidate<SetSharedUnion>();
export const validateMapShared = typia.createValidate<MapSharedUnion>();
export const validateArrayTupleShared = typia.createValidate<ArrayTupleSharedUnion>();
export const validateBigIntPrimitiveOrInterface = typia.createValidate<BigIntPrimitiveOrInterface>();
export const validateBigIntLiteralOrInterface = typia.createValidate<BigIntLiteralOrInterface>();
export const validateBigIntInterfaceOnly = typia.createValidate<BigIntInterfaceOnly>();
export const isBigIntPrimitiveOrInterface = typia.createIs<BigIntPrimitiveOrInterface>();
export const isBigIntLiteralOrInterface = typia.createIs<BigIntLiteralOrInterface>();
export const isBigIntInterfaceOnly = typia.createIs<BigIntInterfaceOnly>();
export const assertBigIntPrimitiveOrInterface = typia.createAssert<BigIntPrimitiveOrInterface>();
export const assertBigIntLiteralOrInterface = typia.createAssert<BigIntLiteralOrInterface>();
export const assertBigIntInterfaceOnly = typia.createAssert<BigIntInterfaceOnly>();
`
