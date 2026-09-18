import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies typia.llm.evaluation takes option descriptions from every source.
 *
 * TypeScript cannot attach JSDoc to a union member, so a literal option gets
 * its description only from `tags.Constant<V, { description }>` (or its `title`
 * when no description exists), an enum option from its member JSDoc (with
 * `@description` overriding the summary), and every other option sends its
 * label alone as `null`. A score level without a description is described by
 * its value. A property `@description` likewise overrides its summary.
 *
 * 1. Declare choices and scores mixing every description source with undocumented
 *    members.
 * 2. Generate the evaluation.
 * 3. Assert each question's instructions and criteria.
 */
export const test_llm_evaluation_option_descriptions = (): void => {
  const { questions } = typia.llm.evaluation<IDecision>();
  TestValidator.equals("literal", questions.literal, {
    type: "choice",
    instructions: "Which literal?",
    criteria: {
      described: "Described option",
      titled: "Titled option",
      bare: null,
    },
  });
  TestValidator.equals("enum", questions.enumerated, {
    type: "choice",
    instructions: "Overridden instructions",
    criteria: {
      summary: "Summary text",
      override: "Override text",
      bare: null,
    },
  });
  TestValidator.equals("score", questions.score, {
    type: "score",
    instructions: "Which score?",
    criteria: ["1", "Two", "3.5"],
  });
};

enum Enumerated {
  /** Summary text */
  summary = "summary",
  /**
   * Summary to be overridden
   *
   * Override text
   */
  override = "override",
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
   * Summary to be overridden
   *
   * Overridden instructions
   */
  enumerated: Enumerated;

  /** Which score? */
  score: 1 | tags.Constant<2, { description: "Two" }> | 3.5;
}
