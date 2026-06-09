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
// Date and whose right union branch is selected by another discriminator.
//
//  1. Transform the intersected-union fixture into JavaScript.
//  2. Execute `is`, `validate`, `assert`, and direct validate entrypoints.
//  3. Require the valid `partyRole: "other"` value to pass, and require an
//     invalid `other` value not to report the unrelated `"customer"` branch.
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
  root := objectCustomTagValidationRepoRoot(t)
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
  out, errText, code := objectCustomTagValidationCapture(func() int {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "typia-stub.cjs"), []byte("module.exports = {};\n"), 0o644); err != nil {
    t.Fatalf("write typia stub: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "validate-report-stub.cjs"), []byte(objectCustomTagValidationReportStub), 0o644); err != nil {
    t.Fatalf("write validate report stub: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "standard-schema-stub.cjs"), []byte(objectCustomTagValidationStandardSchemaStub), 0o644); err != nil {
    t.Fatalf("write standard schema stub: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "assert-guard-stub.cjs"), []byte(objectCustomTagValidationAssertGuardStub), 0o644); err != nil {
    t.Fatalf("write assert guard stub: %v", err)
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia")`, `require("./typia-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_validateReport")`, `require("./validate-report-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_createStandardSchema")`, `require("./standard-schema-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_assertGuard")`, `require("./assert-guard-stub.cjs")`)
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
`

const intersectionUnionValidationRuntimeRunner = `const mod = require("./main.cjs");

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
const invalidOtherMissingDetail = {
  type: "individual",
  birthDate: new Date("2025-06-10T10:43:59.087Z"),
  partyRole: "other",
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

const invalid = mod.validateParty(invalidOtherMissingDetail);
if (invalid.success !== false) {
  throw new Error("missing otherPartyRole unexpectedly passed");
}
if (invalid.errors.some((entry) => entry.path === "$input.partyRole" && entry.expected === '"customer"')) {
  throw new Error("invalid other branch reported unrelated customer branch: " + JSON.stringify(invalid));
}
`
