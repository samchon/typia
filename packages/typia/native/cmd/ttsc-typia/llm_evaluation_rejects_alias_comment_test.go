package main

import (
  "strings"
  "testing"
)

func TestLlmEvaluationRejectsDeclarationProbability(t *testing.T) {
  diagnostics := llmEvaluationDiagnosticsBuild(t, "declaration-probability", `import typia from "typia";

/** @probability 0.8 */
type Urgency = boolean;
/** @probability invalid */
type Unused = boolean;
/** @probability 0.6 */
interface Nested { /** Answer? */ answer: boolean }
/** @probability 0.7 */
enum Choice { yes = "yes", no = "no" }
/** @probability 0.4 */
class Container { /** Answer? */ answer = true; }
/** @probability 0.3 */
function unrelated(): boolean { return true; }

typia.llm.evaluation<{
  /** Urgent? */ urgent: Urgency;
  /** Nested? */ nested: Nested;
  /** Choice? */ choice: Choice;
}>();
`)
  for _, name := range []string{"type alias Urgency", "type alias Unused", "interface Nested", "enum Choice", "class Container", "declaration unrelated"} {
    if !strings.Contains(diagnostics, name) {
      t.Fatalf("misplaced declaration tag %q was not diagnosed:\n%s", name, diagnostics)
    }
  }
}
