import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies each untrusted decision field is read once before validation.
 *
 * A getter may change its value on successive reads. The decoder must decide
 * from the same value it checked, including a selected choice and a score.
 *
 * 1. Make the choice and score getters return a valid first value.
 * 2. Change their values on later reads.
 * 3. Assert the first validated values drive the decoded result.
 *
 * @evidence contracts/testing.md#behavioral-verification The native decoder reads changing choice/score accessors once and converts their first valid values to technical and level 0.
 * @evidence contracts/testing.md#independent-expectations The explicitly authored getter first values and integer read counters independently fix the expected data and one-read count; the expectations do not call the getters again.
 * @evidence contracts/testing.md#distinguishing-cases Choice and score have distinct changing later values so repeated reads cannot accidentally agree. Malformed/throwing accessor failures are retained in decode_rejects_malformed_answers and decode_never_throws.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_decode_snapshots_accessors is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Choice and score have distinct changing later values so repeated reads cannot accidentally agree. Malformed/throwing accessor failures are retained in decode_rejects_malformed_answers and decode_never_throws. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_decode_snapshots_accessors = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  let choiceReads = 0;
  let scoreReads = 0;
  const choice = Object.defineProperty({ type: "choice" }, "choice", {
    enumerable: true,
    get: () => (++choiceReads === 1 ? "technical" : "billing"),
  });
  const score = Object.defineProperty({ type: "score" }, "score", {
    enumerable: true,
    get: () => (++scoreReads === 1 ? 0 : 1),
  });
  const result = evaluation.decode({ team: choice, level: score });
  TestEquality.equals(
    "decoded snapshots",
    result.success ? result.data : result.errors,
    { team: "technical", level: 0 },
  );
  TestEquality.equals("choice read once", choiceReads, 1);
  TestEquality.equals("score read once", scoreReads, 1);
};

interface IDecision {
  /** Which team? */
  team: "billing" | "technical";

  /** Which level? */
  level: 0 | 1;
}
