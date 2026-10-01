import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies typia.llm.evaluation converts booleans at their thresholds.
 *
 * A boolean is `true` iff P(true) reaches its threshold: `0.5` by default, `N`
 * under `tags.Probability<N>` or a property `@probability N`. Each spelling
 * needs its exact boundary pinned from both sides, because an off-by-epsilon
 * comparison (`>` instead of `>=`) or a threshold read from the wrong place
 * stays invisible on values far from it.
 *
 * 1. Declare a default, a tagged, and a commented boolean.
 * 2. Validate probabilities at, just below, and just above each threshold.
 * 3. Assert the converted booleans.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 9 assertions (0.49; 0.5; 0.69; 0.7; 0.79; 0.8). The case documents its purpose as: Verifies typia.llm.evaluation converts booleans at their thresholds.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A boolean is `true` iff P(true) reaches its threshold: `0.5` by default, `N` under `tags.Probability<N>` or a property `@probability N`. Each spelling needs its exact boundary pinned from both sides, because an off-by-epsilon comparison (`>` instead of `>=`) or a threshold read from the wrong place stays invisible on values far from it. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (0.49; 0.5; 0.69; 0.7; 0.79; 0.8) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_boolean_threshold is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_evaluation_boolean_threshold = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const decide = (probability: number): IDecision => {
    const result = evaluation.decode({
      plain: { type: "boolean", probability },
      tagged: { type: "boolean", probability },
      commented: { type: "noul", noul: probability },
    });
    if (result.success === false) throw new Error("unexpected failure");
    return result.data;
  };

  TestEquality.equals("0.49", decide(0.49), {
    plain: false,
    tagged: false,
    commented: false,
  });
  TestEquality.equals("0.5", decide(0.5), {
    plain: true,
    tagged: false,
    commented: false,
  });
  TestEquality.equals("0.69", decide(0.69), {
    plain: true,
    tagged: false,
    commented: false,
  });
  TestEquality.equals("0.7", decide(0.7), {
    plain: true,
    tagged: false,
    commented: true,
  });
  TestEquality.equals("0.79", decide(0.79), {
    plain: true,
    tagged: false,
    commented: true,
  });
  TestEquality.equals("0.8", decide(0.8), {
    plain: true,
    tagged: true,
    commented: true,
  });
  TestEquality.equals("0", decide(0), {
    plain: false,
    tagged: false,
    commented: false,
  });
  TestEquality.equals("1", decide(1), {
    plain: true,
    tagged: true,
    commented: true,
  });
};

interface IDecision {
  /** Is it urgent? */
  plain: boolean;

  /** Is a refund requested? */
  tagged: boolean & tags.Probability<0.8>;

  /**
   * Is the customer leaving?
   *
   * @probability 0.7
   */
  commented: boolean;
}
