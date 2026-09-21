import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies each untrusted decision field is read once before validation.
 *
 * A getter may change its value on successive reads. The decoder must decide
 * from the same value it checked, including a selected choice and a score.
 *
 * 1. Make the choice and score getters return a valid first value.
 * 2. Change their values on later reads.
 * 3. Assert the first validated values drive the decoded result.
 */
export const test_llm_evaluation_decode_snapshots_accessors = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  let choiceReads = 0;
  let scoreReads = 0;
  const choice = Object.defineProperty({ type: "choice" }, "choice", {
    enumerable: true,
    get: () => (++choiceReads === 1 ? "technical" : "billing"),
  });
  const score = Object.defineProperty({ type: "score" }, "score", {
    enumerable: true,
    get: () => (++scoreReads === 1 ? 0 : 1),
  });
  const result = evaluation.decode({ team: choice, level: score });
  TestEquality.equals(
    "decoded snapshots",
    result.success ? result.data : result.errors,
    { team: "technical", level: 0 },
  );
  TestEquality.equals("choice read once", choiceReads, 1);
  TestEquality.equals("score read once", scoreReads, 1);
};

interface IDecision {
  /** Which team? */
  team: "billing" | "technical";

  /** Which level? */
  level: 0 | 1;
}
