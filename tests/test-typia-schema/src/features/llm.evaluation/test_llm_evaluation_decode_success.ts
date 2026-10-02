import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation decode folds a neutral answer map into T.
 *
 * The answer map is flat and keyed by the question keys, while the result must
 * be the nested decision type. This pins the conversion of every question
 * family from the AI SDK `EvaluationModelV4` answer shape: a boolean from its
 * P(true), a choice from the selected option, a score from its fractional
 * position, and a literal set from its per-member booleans in typia's canonical
 * member order.
 *
 * 1. Answer every question in the neutral shape, as `experimental_evaluate`
 *    returns it for an LLM provider without distributions.
 * 2. Decode the answers.
 * 3. Assert the nested decision value also passes typia's general validator;
 *    callers do not need to run that second check themselves.
 *
 * @evidence contracts/testing.md#behavioral-verification A generated evaluation decodes all neutral question families into complete nested ITicketTriage data, and a separately generated typia.validate accepts the result.
 * @evidence contracts/testing.md#independent-expectations The full expected decision is a handwritten literal derived from each supplied answer, thresholds, selected option and rounded score. The second typia.validate is a correlated generated check, not the independent oracle for the expected data.
 * @evidence contracts/testing.md#distinguishing-cases Boolean true/false, string choice, fractional score, selected/unselected set members and nested refund preserve the reconstruction distinctions. No evaluation provider or network is invoked.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_decode_success is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation, typia.validate through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation, typia.validate call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Boolean true/false, string choice, fractional score, selected/unselected set members and nested refund preserve the reconstruction distinctions. No evaluation provider or network is invoked. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_decode_success = (): void => {
  const result: IValidation<ITicketTriage> = typia.llm
    .evaluation<ITicketTriage>()
    .decode({
      urgent: { type: "boolean", probability: 0.83 },
      department: { type: "choice", choice: "technical" },
      frustration: { type: "score", score: 1.4 },
      "products.card": { type: "boolean", probability: 0.9 },
      "products.loan": { type: "boolean", probability: 0.1 },
      "products.deposit": { type: "boolean", probability: 0.7 },
      "refund.requested": { type: "boolean", probability: 0.2 },
    });
  TestEquality.equals("result", result, {
    success: true,
    data: {
      urgent: true,
      department: "technical",
      frustration: 1,
      products: ["card", "deposit"],
      refund: { requested: false },
    },
  });
  TestEquality.equals(
    "decoded value satisfies T",
    result.success && typia.validate<ITicketTriage>(result.data).success,
    true,
  );
};

interface ITicketTriage {
  /** Does the customer convey urgency? */
  urgent: boolean;

  /** Which team should handle this ticket? */
  department: "billing" | "technical";

  /** How frustrated is the customer? */
  frustration: 0 | 1 | 2;

  /** Which products does the customer mention? */
  products: Array<"card" | "loan" | "deposit">;

  refund: {
    /** Does the customer ask for a refund? */
    requested: boolean;
  };
}
