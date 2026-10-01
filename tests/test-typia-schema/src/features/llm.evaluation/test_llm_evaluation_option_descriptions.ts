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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (literal; enum; score). The case documents its purpose as: Verifies typia.llm.evaluation takes option descriptions from every source.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: TypeScript cannot attach JSDoc to a union member, so a literal option gets its description only from `tags.Constant<V, { description }>`, never from its `title`; an enum option gets its member JSDoc; every other option sends its label alone as `null`. A score level without a description is described by its value in JavaScript's own number formatting, so `1e-7` stays `1e-7` instead of a Go-formatted `0.0000001`. Multi-paragraph JSDoc is forwarded whole. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (literal; enum; score) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_option_descriptions is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
