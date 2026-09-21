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
