import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation decode rejects a mismatched answer key set.
 *
 * An evaluation model must answer exactly the questions it was asked. A missing
 * answer leaves a property of the decision type unset, and an extra answer
 * means the map belongs to different questions; both must fail instead of
 * producing a partial or silently widened result. Missing answers report the
 * decision path, and extra answers report their own key.
 *
 * 1. Decode a non-object input.
 * 2. Decode an answer map missing one question and carrying an unknown key.
 * 3. Assert the failure paths.
 *
 * @evidence contracts/testing.md#behavioral-verification The generated decoder rejects scalar and array answer maps at $input, and reports the missing urgent answer plus the surplus refund.amount key while accepting the known refund.requested key.
 * @evidence contracts/testing.md#independent-expectations ILlmEvaluation requires exactly the generated question keys. The declared nested refund.requested and urgent leaves independently fix missing/surplus paths and map-shape rejection.
 * @evidence contracts/testing.md#distinguishing-cases Nonrecord scalar/array inputs and a mixed missing-plus-surplus record preserve different boundary failures; the sibling decode_success supplies the complete-map positive control.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_decode_rejects_key_mismatch is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Nonrecord scalar/array inputs and a mixed missing-plus-surplus record preserve different boundary failures; the sibling decode_success supplies the complete-map positive control. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_decode_rejects_key_mismatch = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();

  const scalar: IValidation<IDecision> = evaluation.decode("nothing");
  TestEquality.equals("scalar", paths(scalar), ["$input"]);

  const array: IValidation<IDecision> = evaluation.decode([]);
  TestEquality.equals("array", paths(array), ["$input"]);

  const mismatch: IValidation<IDecision> = evaluation.decode({
    "refund.requested": { type: "boolean", probability: 0.6 },
    "refund.amount": { type: "boolean", probability: 0.6 },
  });
  TestEquality.equals("mismatch", paths(mismatch), [
    "$input.urgent",
    '$input["refund.amount"]',
  ]);
};

const paths = (result: IValidation<unknown>): string[] =>
  result.success ? [] : result.errors.map((e) => e.path);

interface IDecision {
  /** Is it urgent? */
  urgent: boolean;
  refund: {
    /** Is a refund requested? */
    requested: boolean;
  };
}
