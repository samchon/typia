import typia, { tags } from "typia";

import { _equalsExactly } from "../../internal/_equalsExactly";

/**
 * Verifies a gated choice option named like an Object.prototype member keeps
 * its gate.
 *
 * The gate reads the selected option's probability from the answer's
 * distribution. An option named `constructor`, `toString`, `valueOf`, or
 * `hasOwnProperty` must read only an own probability: an inherited function
 * compares as neither below nor at the minimum, which would silently accept a
 * gated option whose probability the answer never gave.
 *
 * 1. Gate options named after `Object.prototype` members.
 * 2. Select each one with a distribution that omits it, then with one below and at
 *    its minimum.
 * 3. Assert the missing and low probabilities fail and the sufficient one passes.
 */
export const test_llm_evaluation_choice_minimum_prototype_names = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  for (const name of [
    "constructor",
    "toString",
    "valueOf",
    "hasOwnProperty",
  ] as const) {
    const run = (probabilities: Record<string, number>) =>
      evaluation.validate({
        action: { type: "choice", choice: name, probabilities },
      }).success;
    _equalsExactly(`${name} omitted`, run({ other: 0.9 }), false);
    _equalsExactly(`${name} below`, run({ [name]: 0.49 }), false);
    _equalsExactly(`${name} at`, run({ [name]: 0.5 }), true);
  }
};

interface IDecision {
  /** Which action? */
  action:
    | ("constructor" & tags.Probability<0.5>)
    | ("toString" & tags.Probability<0.5>)
    | ("valueOf" & tags.Probability<0.5>)
    | ("hasOwnProperty" & tags.Probability<0.5>)
    | "other";
}
