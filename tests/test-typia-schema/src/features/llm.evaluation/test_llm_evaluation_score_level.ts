import { TestEquality } from "@typia/template/equality";
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
 * 2. Validate a bimodal distribution, a complete distribution with a clear
 *    maximum, and positions without a distribution at and around the half-way
 *    boundary.
 * 3. Assert the selected values.
 *
 * @evidence contracts/testing.md#behavioral-verification A native score decoder selects the distribution maximum when present, maps it to declared values 10/20/30 and otherwise rounds the fractional position at the half boundary.
 * @evidence contracts/testing.md#independent-expectations The authored bimodal/argmax distributions and declared sorted numeric levels independently determine expected values. The explicit 1.49/1.5 positions use JavaScript nearest-level rounding, not values obtained from the decoder.
 * @evidence contracts/testing.md#distinguishing-cases Bimodal tied distribution, clear maximum, no-distribution below/at-half and endpoint positions preserve distribution-first versus rounding fallback paths.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_score_level is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Bimodal tied distribution, clear maximum, no-distribution below/at-half and endpoint positions preserve distribution-first versus rounding fallback paths. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_score_level = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const level = (answer: object): unknown => {
    const result = evaluation.decode({ severity: answer });
    return result.success ? result.data.severity : result.errors;
  };

  // bimodal: position 1 is the rounded mean, yet level 1 is the least likely
  TestEquality.equals(
    "bimodal",
    level({
      type: "score",
      score: 1,
      probabilities: { "0": 0.45, "1": 0.1, "2": 0.45 },
    }),
    10,
  );
  TestEquality.equals(
    "argmax",
    level({
      type: "score",
      score: 1.5,
      probabilities: { "0": 0.2, "1": 0.1, "2": 0.7 },
    }),
    30,
  );
  TestEquality.equals(
    "nearest below half",
    level({ type: "score", score: 1.49 }),
    20,
  );
  TestEquality.equals(
    "nearest at half",
    level({ type: "score", score: 1.5 }),
    30,
  );
  TestEquality.equals("lowest", level({ type: "score", score: 0 }), 10);
  TestEquality.equals("highest", level({ type: "score", score: 2 }), 30);
};

interface IDecision {
  /** How severe is the incident? */
  severity: 30 | 10 | 20;
}
