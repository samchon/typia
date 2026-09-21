package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

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
