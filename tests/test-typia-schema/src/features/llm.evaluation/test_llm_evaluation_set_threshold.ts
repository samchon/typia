import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies typia.llm.evaluation includes set members at their thresholds.
 *
 * A literal-set array asks one independent boolean per member, so each member
 * is included iff its P(true) reaches its own threshold: the member's
 * `tags.Probability<N>` first, then the property's `@probability`, then `0.5`.
 * Inclusion follows the order the member questions are emitted in, typia's
 * canonical member order, never the key order of the answer map.
 *
 * 1. Declare a set with one tagged member under a property default, and a plain
 *    set.
 * 2. Validate probabilities around each threshold.
 * 3. Assert the included members.
 *
 * @evidence contracts/testing.md#behavioral-verification The generated decoder includes set members using tagged member, property-default and ordinary default thresholds, returning canonical member order despite reversed answer-key order.
 * @evidence contracts/testing.md#independent-expectations The authored 0.9/0.7/default-0.5 requirements and literal expected arrays independently determine inclusion. Expected member order is pinned directly rather than obtained by enumerating answer keys.
 * @evidence contracts/testing.md#distinguishing-cases Below-both, exactly-at-both and member-default-only inputs separate precedence, empty sets, opposite booleans and deterministic order.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_set_threshold is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Below-both, exactly-at-both and member-default-only inputs separate precedence, empty sets, opposite booleans and deterministic order. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_set_threshold = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const run = (p: { card: number; loan: number; plain: number }) => {
    const result = evaluation.decode({
      "products.loan": { type: "boolean", probability: p.loan },
      "products.card": { type: "boolean", probability: p.card },
      "channels.email": { type: "boolean", probability: p.plain },
      "channels.phone": { type: "boolean", probability: 1 - p.plain },
    });
    if (result.success === false) throw new Error("unexpected failure");
    return result.data;
  };

  TestEquality.equals(
    "below both",
    run({ card: 0.89, loan: 0.69, plain: 0.49 }),
    {
      products: [],
      channels: ["phone"],
    },
  );
  TestEquality.equals("at both", run({ card: 0.9, loan: 0.7, plain: 0.5 }), {
    products: ["card", "loan"],
    channels: ["email", "phone"],
  });
  TestEquality.equals("only default", run({ card: 0.8, loan: 0.8, plain: 1 }), {
    products: ["loan"],
    channels: ["email"],
  });
};

interface IDecision {
  /**
   * Which products does the customer mention?
   *
   * @probability 0.7
   */
  products: Array<("card" & tags.Probability<0.9>) | "loan">;

  /** Which channels does the customer accept? */
  channels: Array<"email" | "phone">;
}
