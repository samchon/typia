package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestMetadataTypeTagSoleMalformedDiagnostic checks the authored operation results described below.
//
// Tag metadata fields have distinct contracts; a wide argument can invalidate the value and derived validation expression without invalidating the target kind.
//
// 1. Wide tag arguments invalidate their value and derived validation fields, while their target kinds remain valid.
// 2. Wide arguments return status three, name the expected value/validate failures and do not misattribute them to typia.tag.target; a literal argument compiles.
//
// @evidence contracts/testing.md#behavioral-verification Wide arguments return status three, name the expected value/validate failures and do not misattribute them to typia.tag.target; a literal argument compiles.
// @evidence contracts/testing.md#independent-expectations Tag metadata fields have distinct contracts; a wide argument can invalidate the value and derived validation expression without invalidating the target kind.
// @evidence contracts/testing.md#distinguishing-cases Wide Minimum and Probability arguments contrast with a literal Minimum argument; a second valid Maximum tag must not hide the malformed fields or misattribute them to the valid target kind.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestMetadataTypeTagSoleMalformedDiagnostic as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestMetadataTypeTagSoleMalformedDiagnostic(t *testing.T) {
  dir := ttscTypiaTestFixtureDirectory(t, "sole-malformed-tag-")
  if err := os.MkdirAll(filepath.Join(dir, "src"), 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(llmEvaluationDiagnosticsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "src", "main.ts"), []byte(metadataTypeTagSoleMalformedSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", dir,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(dir, "dist"),
    })
  })
  if code != 3 {
    t.Fatalf("sole malformed tag build should fail with code 3, got %d\nstderr=%s", code, errText)
  }
  normalized := strings.ReplaceAll(filepath.ToSlash(errText), "\r\n", "\n")
  const value = "  - the property [\"typia.tag.value\"] must be a literal, literal tuple, object, or undefined type."
  const validate = "  - the property [\"typia.tag.validate\"] must be a string literal, or an object whose keys are 'boolean', 'bigint', 'number', 'string', 'array', or 'object'."
  for _, expected := range []string{
    "- number & Minimum<number>\n" + value + "\n" + validate,
    "- number & Minimum<number> & Maximum<10>\n" + value + "\n" + validate,
    "- Probe.flag: boolean & Probabilitynumber\n" + value,
  } {
    if !strings.Contains(normalized, expected) {
      t.Fatalf("sole malformed tag diagnostic missing %q:\n%s", expected, errText)
    }
  }
  if strings.Contains(normalized, "typia.tag.target") {
    t.Fatalf("a malformed validate must not be reported as target:\n%s", errText)
  }
  llmEvaluationAccepts(t, "sole-valid-tag", metadataTypeTagSoleValidSource)
}

const metadataTypeTagSoleValidSource = `import typia, { tags } from "typia";

typia.is<number & tags.Minimum<0>>(1);
`

const metadataTypeTagSoleMalformedSource = `import typia, { tags } from "typia";

type Probe = {
  /** Is it flagged? */
  flag: boolean & tags.Probability<number>;
};

typia.is<number & tags.Minimum<number>>(1);
typia.is<number & tags.Minimum<number> & tags.Maximum<10>>(1);
typia.llm.evaluation<Probe>();
`
