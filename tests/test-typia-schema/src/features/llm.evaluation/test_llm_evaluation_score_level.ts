import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation selects a score level by distribution first.
 *
 * A score answer carries a fractional, probability-weighted position, and with
 * TypeSafe also a per-level distribution. The rounded position can land on the
 * least likely level when the distribution is bimodal, so the distribution's
 * most probable level wins whenever it exists; only providers without a
 * distribution fall back to the nearest level. The level maps back to the
 * numeric value of `T`, not to its index.
 *
 * 1. Declare a score whose values are not its indexes.
 * 2. Validate a bimodal distribution, a tied distribution, and positions without a
 *    distribution at and around the half-way boundary.
 * 3. Assert the selected values.
 */
export const test_llm_evaluation_score_level = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const level = (answer: object): unknown => {
    const result = evaluation.validate({ severity: answer });
    return result.success ? result.data.severity : result.errors;
  };

  // bimodal: position 1 is the rounded mean, yet level 1 is the least likely
  TestValidator.equals(
    "bimodal",
    level({
      type: "score",
      score: 1,
      probabilities: { "0": 0.45, "1": 0.1, "2": 0.45 },
    }),
    10,
  );
  TestValidator.equals(
    "argmax",
    level({
      type: "score",
      score: 0.9,
      probabilities: { "0": 0.2, "1": 0.1, "2": 0.7 },
    }),
    30,
  );
  TestValidator.equals(
    "nearest below half",
    level({ type: "score", score: 1.49 }),
    20,
  );
  TestValidator.equals(
    "nearest at half",
    level({ type: "score", score: 1.5 }),
    30,
  );
  TestValidator.equals("lowest", level({ type: "score", score: 0 }), 10);
  TestValidator.equals("highest", level({ type: "score", score: 2 }), 30);
  TestValidator.equals(
    "empty distribution",
    level({ type: "score", score: 0.4, probabilities: {} }),
    10,
  );
};

interface IDecision {
  /** How severe is the incident? */
  severity: 30 | 10 | 20;
}
