import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation treats an array of a string enum as a set.
 *
 * A set's elements may be a string enum, whose members carry what a literal
 * union cannot: a JSDoc description, forwarded into that member's own boolean
 * question, and an `@probability` comment, which is the member's inclusion
 * threshold rather than a choice minimum. The literal-set tests cannot reach
 * either source.
 *
 * 1. Declare an array of an enum whose members have distinct thresholds and one
 *    documented description.
 * 2. Assert each member question carries its description.
 * 3. Validate probabilities around the member threshold and the 0.5 default.
 *
 * @evidence contracts/testing.md#behavioral-verification An enum-set evaluation emits member-specific instructions and includes email/phone at their separate 0.8/0.5 thresholds while excluding both below them.
 * @evidence contracts/testing.md#independent-expectations Enum JSDoc, Probability comments and the literal empty/full arrays independently determine the expected questions and decoded membership.
 * @evidence contracts/testing.md#distinguishing-cases Documented versus undocumented member instructions and below/at thresholds exercise enum-member metadata rather than only literal union sets.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_set_enum is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Documented versus undocumented member instructions and below/at thresholds exercise enum-member metadata rather than only literal union sets. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_set_enum = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  TestEquality.equals("questions", evaluation.questions, {
    "channels.email": {
      type: "boolean",
      instructions:
        'Which channels does the customer accept?\n\nDoes the option "email" apply?\nReply by email',
    },
    "channels.phone": {
      type: "boolean",
      instructions:
        'Which channels does the customer accept?\n\nDoes the option "phone" apply?',
    },
  });

  const run = (email: number, phone: number) => {
    const result = evaluation.decode({
      "channels.email": { type: "boolean", probability: email },
      "channels.phone": { type: "boolean", probability: phone },
    });
    if (result.success === false) throw new Error("unexpected failure");
    return result.data.channels;
  };
  TestEquality.equals("below", run(0.79, 0.49), []);
  TestEquality.equals("at", run(0.8, 0.5), [Channel.email, Channel.phone]);
};

enum Channel {
  /**
   * Reply by email
   *
   * @probability 0.8
   */
  email = "email",
  /** @probability 0.5 */
  phone = "phone",
}

interface IDecision {
  /** Which channels does the customer accept? */
  channels: Channel[];
}
