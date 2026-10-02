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
 * @evidence contracts/testing.md#behavioral-verification The native evaluation decoder maps probability inputs to three boolean fields using default 0.5, tagged 0.8 and commented 0.7 thresholds.
 * @evidence contracts/testing.md#independent-expectations ILlmEvaluation and Probability specify inclusive threshold decisions. Literal boolean triples at 0/1, below and exactly at each authored threshold are independent of the decoder result.
 * @evidence contracts/testing.md#distinguishing-cases Default, type-tag and property-comment sources each have below/at controls, with probability endpoints. The local decide helper throws on decode failure before comparing complete literal data.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_boolean_threshold is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Default, type-tag and property-comment sources each have below/at controls, with probability endpoints. The local decide helper throws on decode failure before comparing complete literal data. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
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
