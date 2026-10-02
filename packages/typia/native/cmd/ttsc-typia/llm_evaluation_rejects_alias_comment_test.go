package main

import (
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsDeclarationProbability verifies JSDoc on a type
// declaration cannot silently become a decision requirement.
//
// A primitive alias resolves to the same primitive as an unannotated alias,
// so the compiler must reject unsupported declaration-level placements.
//
//  1. Annotate several declaration kinds, including unused declarations.
//  2. Compile a neighboring evaluation call.
//  3. Require a normal diagnostic for every invalid placement.
//
// @evidence contracts/testing.md#behavioral-verification The diagnostic build names each illegally annotated alias, interface, enum, class and unrelated declaration.
// @evidence contracts/testing.md#independent-expectations Primitive aliases can lose their declaration identity during type resolution; unsupported declaration-level requirements must diagnose rather than silently supply or drop decision constraints.
// @evidence contracts/testing.md#distinguishing-cases Consumed and unused declarations of several syntax kinds carry illegal annotations, while valid property and enum-member placements are owned by the acceptance case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLlmEvaluationRejectsDeclarationProbability as a unit test. Its fixture helpers and captured Go command calls exercise the owning operation in process without a compiler subprocess. Named subcases retain their inputs and failure identities; temporary project cleanup belongs to the helper.
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
