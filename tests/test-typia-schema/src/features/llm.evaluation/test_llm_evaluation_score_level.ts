import typia from "typia";

import { _equalsExactly } from "../../internal/_equalsExactly";

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
  _equalsExactly(
    "bimodal",
    level({
      type: "score",
      score: 1,
      probabilities: { "0": 0.45, "1": 0.1, "2": 0.45 },
    }),
    10,
  );
  _equalsExactly(
    "argmax",
    level({
      type: "score",
      score: 0.9,
      probabilities: { "0": 0.2, "1": 0.1, "2": 0.7 },
    }),
    30,
  );
  _equalsExactly(
    "nearest below half",
    level({ type: "score", score: 1.49 }),
    20,
  );
  _equalsExactly("nearest at half", level({ type: "score", score: 1.5 }), 30);
  _equalsExactly("lowest", level({ type: "score", score: 0 }), 10);
  _equalsExactly("highest", level({ type: "score", score: 2 }), 30);
  _equalsExactly(
    "empty distribution",
    level({ type: "score", score: 0.4, probabilities: {} }),
    10,
  );
};

interface IDecision {
  /** How severe is the incident? */
  severity: 30 | 10 | 20;
}
