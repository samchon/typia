package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestIntersectionUnionValidationTransform verifies intersected unions co-operate.
//
// Issue #1590 combines two discriminated unions through an intersection:
// `(Individual | Corporation) & ({ partyRole: "customer" } | OtherRole)`.
// The validator must accept a value whose left union branch contains a native
// Date and whose right union branch is selected by another discriminator. The
// same fixture also pins shared-field union guards whose metadata may overlap.
//
//  1. Transform the intersected-union fixture into JavaScript.
//  2. Execute `is`, `validate`, `assert`, and direct validate entrypoints.
//  3. Require valid intersection branches to pass and invalid `Date` data to
//     fail without depending on exact error formatting.
//  4. Require invalid `other` data not to report the unrelated `"customer"`
//     branch, and require shared native/container fields not to misroute a
//     valid right-side branch.
func TestIntersectionUnionValidationTransform(t *testing.T) {
  project := intersectionUnionValidationProject(t)
  js := intersectionUnionValidationTransform(t, project)
  if !strings.Contains(js, "partyRole") || !strings.Contains(js, "Date") {
    t.Fatalf("intersected union validation fixture was not emitted:\n%s", js)
  }
  intersectionUnionValidationRunRuntimeCases(t, project, js)
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

func intersectionUnionValidationRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(intersectionUnionValidationRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("intersection union runtime cases failed: %v\n%s", err, output)
  }
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

export const validateDateShared = typia.createValidate<DateSharedUnion>();
export const validateBytesShared = typia.createValidate<BytesSharedUnion>();
export const validatePrimitiveWrapperShared = typia.createValidate<PrimitiveWrapperSharedUnion>();
export const validateSetShared = typia.createValidate<SetSharedUnion>();
export const validateMapShared = typia.createValidate<MapSharedUnion>();
export const validateArrayTupleShared = typia.createValidate<ArrayTupleSharedUnion>();
`

const intersectionUnionValidationRuntimeRunner = `const mod = require("./main.cjs");

const capture = (task) => {
  try {
    task();
    return null;
  } catch (error) {
    return error;
  }
};

const validIndividualOther = {
  type: "individual",
  birthDate: new Date("2025-06-10T10:43:59.087Z"),
  partyRole: "other",
  otherPartyRole: "some-valid-string",
};
const validCorporationCustomer = {
  type: "corporation",
  partyRole: "customer",
};
const validIndividualCustomer = {
  type: "individual",
  birthDate: new Date("2025-06-10T10:43:59.087Z"),
  partyRole: "customer",
};
const validCorporationOther = {
  type: "corporation",
  partyRole: "other",
  otherPartyRole: "some-valid-string",
};
const invalidOtherMissingDetail = {
  type: "individual",
  birthDate: new Date("2025-06-10T10:43:59.087Z"),
  partyRole: "other",
};
const invalidIndividualBirthDate = {
  type: "individual",
  birthDate: "2025-06-10T10:43:59.087Z",
  partyRole: "other",
  otherPartyRole: "some-valid-string",
};

const validate = mod.validateParty(validIndividualOther);
if (validate.success !== true) {
  throw new Error("valid individual/other intersection failed: " + JSON.stringify(validate));
}
const direct = mod.validateDirect(validIndividualOther);
if (direct.success !== true) {
  throw new Error("direct validate failed for individual/other intersection: " + JSON.stringify(direct));
}
if (mod.isParty(validIndividualOther) !== true) {
  throw new Error("is failed for valid individual/other intersection");
}
if (mod.assertParty(validIndividualOther) !== validIndividualOther) {
  throw new Error("assert did not return the valid individual/other value");
}
if (mod.validateParty(validCorporationCustomer).success !== true) {
  throw new Error("valid corporation/customer intersection failed");
}
for (const [name, input] of [
  ["individual/customer", validIndividualCustomer],
  ["corporation/other", validCorporationOther],
]) {
  if (mod.validateParty(input).success !== true) {
    throw new Error("valid " + name + " intersection failed validate");
  }
  if (mod.isParty(input) !== true) {
    throw new Error("valid " + name + " intersection failed is");
  }
  if (mod.assertParty(input) !== input) {
    throw new Error("valid " + name + " intersection failed assert");
  }
}

const invalid = mod.validateParty(invalidOtherMissingDetail);
if (invalid.success !== false) {
  throw new Error("missing otherPartyRole unexpectedly passed");
}
if (invalid.errors.some((entry) => entry.path === "$input.partyRole" && entry.expected === '"customer"')) {
  throw new Error("invalid other branch reported unrelated customer branch: " + JSON.stringify(invalid));
}
const invalidDirect = mod.validateDirect(invalidOtherMissingDetail);
if (invalidDirect.success !== false) {
  throw new Error("direct validate missing otherPartyRole unexpectedly passed");
}
if (invalidDirect.errors.some((entry) => entry.path === "$input.partyRole" && entry.expected === '"customer"')) {
  throw new Error("direct validate invalid other branch reported unrelated customer branch: " + JSON.stringify(invalidDirect));
}
const invalidAssert = capture(() => mod.assertParty(invalidOtherMissingDetail));
if (invalidAssert === null) {
  throw new Error("assert missing otherPartyRole unexpectedly passed");
}
if (invalidAssert.path === "$input.partyRole" && invalidAssert.expected === '"customer"') {
  throw new Error("assert invalid other branch reported unrelated customer branch: " + JSON.stringify(invalidAssert));
}
const invalidDate = mod.validateParty(invalidIndividualBirthDate);
if (invalidDate.success !== false) {
  throw new Error("invalid individual birthDate unexpectedly passed");
}
if (mod.isParty(invalidIndividualBirthDate) !== false) {
  throw new Error("is accepted invalid individual birthDate");
}
const invalidDateDirect = mod.validateDirect(invalidIndividualBirthDate);
if (invalidDateDirect.success !== false) {
  throw new Error("direct validate invalid individual birthDate unexpectedly passed");
}
const invalidDateAssert = capture(() => mod.assertParty(invalidIndividualBirthDate));
if (invalidDateAssert === null) {
  throw new Error("assert invalid individual birthDate unexpectedly passed");
}

const validDateRight = {
  stamp: new Date("2025-06-10T10:43:59.087Z"),
  right: "selected-right",
};
const dateRight = mod.validateDateShared(validDateRight);
if (dateRight.success !== true) {
  throw new Error("shared Date native union failed its right branch: " + JSON.stringify(dateRight));
}

const validBytesRight = {
  bytes: new Uint8Array([1, 2, 3]),
  right: "selected-right",
};
const bytesRight = mod.validateBytesShared(validBytesRight);
if (bytesRight.success !== true) {
  throw new Error("shared Uint8Array native union failed its right branch: " + JSON.stringify(bytesRight));
}

const primitiveWrapperRight = mod.validatePrimitiveWrapperShared({
  value: "x",
  right: "selected-right",
});
if (primitiveWrapperRight.success !== true) {
  throw new Error("shared primitive wrapper union failed its right branch: " + JSON.stringify(primitiveWrapperRight));
}

const setRight = mod.validateSetShared({
  items: new Set(),
  right: "selected-right",
});
if (setRight.success !== true) {
  throw new Error("shared empty Set union failed its right branch: " + JSON.stringify(setRight));
}

const mapRight = mod.validateMapShared({
  lookup: new Map(),
  right: "selected-right",
});
if (mapRight.success !== true) {
  throw new Error("shared empty Map union failed its right branch: " + JSON.stringify(mapRight));
}

const arrayTupleRight = mod.validateArrayTupleShared({
  items: [1],
  right: "selected-right",
});
if (arrayTupleRight.success !== true) {
  throw new Error("shared array/tuple union failed its right branch: " + JSON.stringify(arrayTupleRight));
}
`
