package main

import "testing"

func TestLlmEvaluationAcceptsPropertyAndEnumMemberProbability(t *testing.T) {
  llmEvaluationAccepts(t, "property-probability-valid", `import typia from "typia";

type Urgency = boolean;
enum Choice {
  /** @probability 0.8 */ yes = "yes",
  /** @probability 0.2 */ no = "no",
}
typia.llm.evaluation<{
  /** Urgent? @probability 1 */ urgent: Urgency;
  /** Choice? */ choice: Choice;
}>();
`)
}
