package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsImportedDeclarationProbability verifies the
// placement diagnostic crosses an imported source-file boundary.
//
// A local-only syntax scan would miss an alias declared in another file while
// the checker still resolves that alias at the evaluation decision.
//
//  1. Define an annotated primitive alias in an imported module.
//  2. Use it in a local evaluation call.
//  3. Require the imported declaration's diagnostic.
func TestLlmEvaluationRejectsImportedDeclarationProbability(t *testing.T) {
  dir := llmEvaluationProject(t, "imported-declaration-probability", `import typia from "typia";
import type { Urgency } from "./urgency";
typia.llm.evaluation<{ /** Urgent? */ urgent: Urgency }>();
`)
  source := `/** @probability 0.8 */
export type Urgency = boolean;
`
  if err := os.WriteFile(filepath.Join(dir, "src", "urgency.ts"), []byte(source), 0o644); err != nil {
    t.Fatal(err)
  }
  _, diagnostics, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{"--cwd", dir, "--tsconfig", "tsconfig.json", "--emit", "--outDir", filepath.Join(dir, "dist")})
  })
  if code != 3 || !strings.Contains(diagnostics, "type alias Urgency") {
    t.Fatalf("imported declaration tag must fail: code=%d\n%s", code, diagnostics)
  }
}
