import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies typia.llm.evaluation takes option descriptions from every source.
 *
 * TypeScript cannot attach JSDoc to a union member, so a literal option gets
 * its description only from `tags.Constant<V, { description }>`, never from its
 * `title`; an enum option gets its member JSDoc; every other option sends its
 * label alone as `null`. A score level without a description is described by
 * its value in JavaScript's own number formatting, so `1e-7` stays `1e-7`
 * instead of a Go-formatted `0.0000001`. Multi-paragraph JSDoc is forwarded
 * whole.
 *
 * 1. Declare choices and scores mixing every description source with undocumented
 *    members.
 * 2. Generate the evaluation.
 * 3. Assert each question's instructions and criteria.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated choice and score questions preserve Constant description, ignore title-only metadata, forward enum JSDoc paragraphs and spell undocumented numeric criteria with JavaScript number text.
 * @evidence contracts/testing.md#independent-expectations The expected full question objects are handwritten from source descriptions and Number string representations such as 1e-7 and 1e+21, rather than copied from emitted questions.
 * @evidence contracts/testing.md#distinguishing-cases Description versus title-only versus bare options, enum summary/body versus undocumented members, and small/large/fractional numeric levels cover independent metadata sources.
 * @evidence contracts/testing.md#execution-ownership test_llm_evaluation_option_descriptions is the matching exported DynamicExecutor entry under test-typia-schema start (ttsx src/index.ts). It executes typia.llm.evaluation through the configured native typia plugin. Private callbacks and schema projections stay part of this case; direct utility-only semantics are not relabeled as proof of the producer.
 * @evidence contracts/e2e.md#necessary-boundary The native analyzer must turn this decision type, its JSDoc and probability/configuration requirements into the question and decoding plan consumed by the runtime evaluation. Calling the runtime decoder with a handwritten plan cannot detect a missing rewrite or a mismatched emitted plan.
 * @evidence contracts/e2e.md#shared-execution This case joins the existing schema-suite ttsx invocation and DynamicExecutor population; it starts no per-case project, installation, native binary build or worker. The typia.llm.evaluation call sites use the same workspace/compiler configuration as their sibling cases. Compiler host and content-keyed artifact reuse are owned by ttsx, not asserted as a cold-cache transition here.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The source declarations, JSDoc, tags and generic configuration are part of the compilation input, so changed producer inputs require recompilation. Schema maps, payloads, callbacks and counters declared here are case-local; this file owns no process or persistent cache and shares no mutated result with another case. ttsx owns the compiler/host lifetime; cache invalidation is not this scenario.
 * @evidence contracts/e2e.md#preserved-coverage The original public calls, input declarations and assertions remain in this exported case. Description versus title-only versus bare options, enum summary/body versus undocumented members, and small/large/fractional numeric levels cover independent metadata sources. Added literal or shape controls strengthen those observations; no generated schema comparison replaces an existing independent expected value, and no case is removed from execution.
 */
export const test_llm_evaluation_option_descriptions = (): void => {
  const { questions } = typia.llm.evaluation<IDecision>();
  TestEquality.equals("literal", questions.literal, {
    type: "choice",
    instructions: "Which literal?",
    criteria: {
      described: "Described option",
      titled: null,
      bare: null,
    },
  });
  TestEquality.equals("enum", questions.enumerated, {
    type: "choice",
    instructions: "Which enum?\n\nSecond paragraph of the question.",
    criteria: {
      summary: "Summary text",
      multiple: "First line\n\nSecond paragraph",
      bare: null,
    },
  });
  TestEquality.equals("score", questions.score, {
    type: "score",
    instructions: "Which score?",
    criteria: ["1e-7", "1", "Two", "3.5", "1e+21"],
  });
};

enum Enumerated {
  /** Summary text */
  summary = "summary",
  /**
   * First line
   *
   * Second paragraph
   */
  multiple = "multiple",
  bare = "bare",
}

interface IDecision {
  /** Which literal? */
  literal:
    | tags.Constant<
        "described",
        { title: "Ignored title"; description: "Described option" }
      >
    | tags.Constant<"titled", { title: "Titled option" }>
    | "bare";

  /**
   * Which enum?
   *
   * Second paragraph of the question.
   */
  enumerated: Enumerated;

  /** Which score? */
  score: 1 | tags.Constant<2, { description: "Two" }> | 3.5 | 1e-7 | 1e21;
}
