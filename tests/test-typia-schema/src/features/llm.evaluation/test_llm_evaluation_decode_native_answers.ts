import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation decode accepts TypeSafe's native answers.
 *
 * TypeSafe's own SDK and HTTP API answer a boolean question as `{ type: "noul",
 * noul }` and add `confidence` and `legend` to choice and score answers, while
 * the neutral AI SDK shape uses `{ type: "boolean", probability }`. Both must
 * decode without wire-format conversion, because the `type` discriminator makes
 * the two boolean spellings unambiguous.
 *
 * 1. Answer the questions exactly as TypeSafe's API documents its response.
 * 2. Decode the answers.
 * 3. Assert the converted value, including the distribution-backed score.
 *
 * @evidence contracts/testing.md#behavioral-verification A native evaluation factory decodes the local noul boolean plus distribution-backed choice and score records, comparing the complete successful ITicketTriage value.
 * @evidence contracts/testing.md#independent-expectations The supported ILlmEvaluation native-answer representation and authored probabilities independently give true, technical and numeric level 2. The supplied confidence/legend fields are present but their contents are not independently asserted.
 * @evidence contracts/testing.md#distinguishing-cases Native noul versus neutral boolean spelling is covered across this case and decode_success. The score uses its distribution maximum rather than only rounding 1.6; this case makes no HTTP/SDK call.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_decode_native_answers is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Native noul versus neutral boolean spelling is covered across this case and decode_success. The score uses its distribution maximum rather than only rounding 1.6; this case makes no HTTP/SDK call. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_decode_native_answers = (): void => {
  const result: IValidation<ITicketTriage> = typia.llm
    .evaluation<ITicketTriage>()
    .decode({
      is_urgent: { type: "noul", noul: 0.92 },
      department: {
        type: "choice",
        choice: "technical",
        probabilities: { billing: 0.08, technical: 0.85, sales: 0.07 },
        confidence: 0.82,
      },
      frustration: {
        type: "score",
        score: 1.6,
        legend: { "0": "Calm", "1": "Frustrated", "2": "Very angry" },
        probabilities: { "0": 0.05, "1": 0.3, "2": 0.65 },
        confidence: 0.78,
      },
    });
  TestEquality.equals("result", result, {
    success: true,
    data: {
      is_urgent: true,
      department: "technical",
      frustration: 2,
    },
  });
};

interface ITicketTriage {
  /** Does this convey urgency? */
  is_urgent: boolean;

  /** Which team should handle this? */
  department: "billing" | "technical" | "sales";

  /** How frustrated is the customer? */
  frustration: 0 | 1 | 2;
}
