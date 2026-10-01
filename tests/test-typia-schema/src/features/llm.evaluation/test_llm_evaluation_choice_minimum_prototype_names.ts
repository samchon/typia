import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (… omitted; … below; … at). The case documents its purpose as: Verifies a gated choice option named like an Object.prototype member keeps its gate.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The gate reads the selected option's probability from the answer's distribution. An option named `constructor`, `toString`, `valueOf`, or `hasOwnProperty` must read only an own probability: an inherited function compares as neither below nor at the minimum, which would silently accept a gated option whose probability the answer never gave. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (… omitted; … below; … at) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_choice_minimum_prototype_names is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_evaluation_choice_minimum_prototype_names = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const names = [
    "constructor",
    "toString",
    "valueOf",
    "hasOwnProperty",
    "other",
  ] as const;
  for (const name of names.slice(0, -1)) {
    const run = (probabilities: Record<string, number>) =>
      evaluation.decode({
        action: { type: "choice", choice: name, probabilities },
      }).success;
    const complete = (selected: number): Record<string, number> =>
      Object.fromEntries(
        names.map((key) => [
          key,
          key === name ? selected : (1 - selected) / (names.length - 1),
        ]),
      );
    const inherited: Record<string, number> = Object.create({ [name]: 0.9 });
    for (const key of names)
      if (key !== name) inherited[key] = 1 / (names.length - 1);
    TestEquality.equals(`${name} omitted`, run(inherited), false);
    TestEquality.equals(`${name} below`, run(complete(0.49)), false);
    TestEquality.equals(`${name} at`, run(complete(0.5)), true);
  }
};

interface IDecision {
  /** Which action? */
  action:
    | ("constructor" & tags.Probability<0.5>)
    | ("toString" & tags.Probability<0.5>)
    | ("valueOf" & tags.Probability<0.5>)
    | ("hasOwnProperty" & tags.Probability<0.5>)
    | ("other" & tags.Probability<0>);
}
