import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies typia.llm.evaluation enforces choice acceptance minimums.
 *
 * A member requirement (`tags.Probability<N>` on a literal, `@probability N` on
 * an enum member) gates only that member, a property `@probability` fills only
 * the members without their own, and a failed gate never falls back to a less
 * likely member. Gating needs the answer's distribution, so a gated selection
 * without one fails while an ungated one passes. Each rule is paired with the
 * one-axis twin that must not trigger it.
 *
 * 1. Declare a tagged literal union, a JSDoc-gated enum used by two properties,
 *    and a property default with one member override.
 * 2. Validate selections at, below, and around every requirement, with and without
 *    distributions.
 * 3. Assert which selections pass and which paths fail.
 */
export const test_llm_evaluation_choice_minimum = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const run = (patch: Record<string, unknown>) =>
    evaluation.validate({
      action: { type: "choice", choice: "reply" },
      team: { type: "choice", choice: "billing" },
      backup: { type: "choice", choice: "billing" },
      tone: {
        type: "choice",
        choice: "formal",
        probabilities: { formal: 0.9 },
      },
      ...patch,
    });
  const outcome = (patch: Record<string, unknown>): string[] | "ok" => {
    const result = run(patch);
    return result.success ? "ok" : result.errors.map((e) => e.path);
  };

  // tagged literal member
  TestValidator.equals(
    "tag at minimum",
    outcome({
      action: {
        type: "choice",
        choice: "escalate",
        probabilities: { escalate: 0.9, reply: 0.1 },
      },
    }),
    "ok",
  );
  TestValidator.equals(
    "tag below minimum",
    outcome({
      action: {
        type: "choice",
        choice: "escalate",
        probabilities: { escalate: 0.89, reply: 0.11 },
      },
    }),
    ["$input.action"],
  );
  TestValidator.equals(
    "tag without distribution",
    outcome({ action: { type: "choice", choice: "escalate" } }),
    ["$input.action"],
  );
  TestValidator.equals(
    "ungated without distribution",
    outcome({ action: { type: "choice", choice: "reply" } }),
    "ok",
  );
  TestValidator.equals(
    "ungated with low probability",
    outcome({
      action: {
        type: "choice",
        choice: "reply",
        probabilities: { reply: 0.2, escalate: 0.1 },
      },
    }),
    "ok",
  );

  // enum member JSDoc, reused by two properties
  for (const property of ["team", "backup"]) {
    TestValidator.equals(
      `${property} gated below`,
      outcome({
        [property]: {
          type: "choice",
          choice: "technical",
          probabilities: { technical: 0.74 },
        },
      }),
      [`$input.${property}`],
    );
    TestValidator.equals(
      `${property} gated at`,
      outcome({
        [property]: {
          type: "choice",
          choice: "technical",
          probabilities: { technical: 0.75 },
        },
      }),
      "ok",
    );
  }

  // property default fills only ungated members; the member override wins
  TestValidator.equals(
    "default below",
    outcome({
      tone: {
        type: "choice",
        choice: "formal",
        probabilities: { formal: 0.59 },
      },
    }),
    ["$input.tone"],
  );
  TestValidator.equals(
    "default at",
    outcome({
      tone: {
        type: "choice",
        choice: "formal",
        probabilities: { formal: 0.6 },
      },
    }),
    "ok",
  );
  TestValidator.equals(
    "override below default",
    outcome({
      tone: {
        type: "choice",
        choice: "casual",
        probabilities: { casual: 0.3 },
      },
    }),
    "ok",
  );
  TestValidator.equals(
    "override below itself",
    outcome({
      tone: {
        type: "choice",
        choice: "casual",
        probabilities: { casual: 0.29 },
      },
    }),
    ["$input.tone"],
  );
};

enum Team {
  /** Payments and refunds */
  billing = "billing",
  /**
   * Bugs and outages
   *
   * @probability 0.75
   */
  technical = "technical",
}

enum Tone {
  /** Formal wording */
  formal = "formal",
  /**
   * Casual wording
   *
   * @probability 0.3
   */
  casual = "casual",
}

interface IDecision {
  /** What should happen next? */
  action:
    | (tags.Constant<"escalate", { description: "Page the on-call" }> &
        tags.Probability<0.9>)
    | tags.Constant<"reply", { description: "Answer the customer" }>;

  /** Which team should handle this? */
  team: Team;

  /** Which team is the backup? */
  backup: Team;

  /**
   * Which tone should the reply use?
   *
   * @probability 0.6
   */
  tone: Tone;
}
