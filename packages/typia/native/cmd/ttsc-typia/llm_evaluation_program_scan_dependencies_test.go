package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "slices"
  "strings"
  "testing"
)

// TestLlmEvaluationProgramScanDependencies verifies a successful evaluation
// transform watches source files used by its program-wide placement check.
//
// An unrelated source has no tag today but may gain an illegal declaration
// tag tomorrow. A complete dependency list must then invalidate the old emit.
//
//  1. Transform a decision beside an unrelated, untagged source module.
//  2. Require the decision's complete dependency list to include that module.
//  3. Add an illegal tag in that module and require a new diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification A valid decision reports the unused source in its complete dependency set; adding an illegal tag there changes the next transform to status 3 with the Unused declaration diagnostic.
// @evidence contracts/testing.md#independent-expectations The program-wide annotation scan can change success when any scanned source gains a tag, so even currently unrelated modules are invalidating inputs.
// @evidence contracts/testing.md#distinguishing-cases The same source identity is first untagged and then tagged, pinning both dependency admission and the changed diagnostic outcome.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationProgramScanDependencies as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
func TestLlmEvaluationProgramScanDependencies(t *testing.T) {
  dir := llmEvaluationProject(t, "program-scan-dependencies", `import typia from "typia";
interface IDecision {
  /** Is it urgent? */
  urgent: boolean;
}
typia.llm.evaluation<IDecision>();
`)
  unused := `export type Unused = boolean;
`
  if err := os.WriteFile(filepath.Join(dir, "src", "unused.ts"), []byte(unused), 0o644); err != nil {
    t.Fatal(err)
  }
  output, diagnostics, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{"--cwd", dir, "--tsconfig", "tsconfig.json"})
  })
  var result transformProjectOutput
  if err := json.Unmarshal([]byte(output), &result); err != nil {
    t.Fatal(err)
  }
  if code != 0 {
    t.Fatalf("valid project must transform: code=%d\ndiagnostics=%+v\nstderr=%s", code, result.Diagnostics, diagnostics)
  }
  if !slices.Contains(result.DependenciesComplete, "src/main.ts") {
    t.Fatalf("decision transform unexpectedly lacks complete dependencies: %+v", result.DependenciesComplete)
  }
  if !slices.Contains(result.Dependencies["src/main.ts"], "src/unused.ts") {
    t.Fatalf("program-wide scan dependency is missing: %+v", result.Dependencies["src/main.ts"])
  }
  tagged := `/** @probability 0.8 */
export type Unused = boolean;
`
  if err := os.WriteFile(filepath.Join(dir, "src", "unused.ts"), []byte(tagged), 0o644); err != nil {
    t.Fatal(err)
  }
  output, diagnostics, code = ttscTypiaTestCapture(func() int {
    return runTransform([]string{"--cwd", dir, "--tsconfig", "tsconfig.json"})
  })
  if code != 3 {
    t.Fatalf("new invalid tag must fail: code=%d\nstderr=%s", code, diagnostics)
  }
  result = transformProjectOutput{}
  if err := json.Unmarshal([]byte(output), &result); err != nil {
    t.Fatal(err)
  }
  if len(result.Diagnostics) != 1 || !strings.Contains(result.Diagnostics[0].MessageText, "type alias Unused") {
    t.Fatalf("changed source must affect evaluation diagnostic: %+v", result.Diagnostics)
  }
}
