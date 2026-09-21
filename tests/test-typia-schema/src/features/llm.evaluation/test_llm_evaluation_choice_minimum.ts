import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation enforces choice acceptance minimums.
 *
 * Member requirements are all-or-none: every enum member declares `@probability
 * N`, or a property `@probability` fills the members without an override. A
 * failed gate never falls back to a less likely member. A requirement needs the
 * answer's distribution, including a zero requirement. Each rule is paired with
 * the one-axis twin that must not trigger it.
 *
 * 1. Declare JSDoc-gated enums, one reused by two properties, and a property
 *    default with one member override.
 * 2. Validate selections at, below, and around every requirement, with and without
 *    complete distributions.
 * 3. Assert which selections pass and which paths fail.
 */
export const test_llm_evaluation_choice_minimum = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const run = (patch: Record<string, unknown>) =>
    evaluation.decode({
      action: {
        type: "choice",
        choice: "reply",
        probabilities: { escalate: 0.4, reply: 0.6 },
      },
      team: {
        type: "choice",
        choice: "billing",
        probabilities: { billing: 0.6, technical: 0.4 },
      },
      backup: {
        type: "choice",
        choice: "billing",
        probabilities: { billing: 0.6, technical: 0.4 },
      },
      tone: {
        type: "choice",
        choice: "formal",
        probabilities: { formal: 0.9, casual: 0.05, neutral: 0.05 },
      },
      ...patch,
    });
  const outcome = (patch: Record<string, unknown>): string[] | "ok" => {
    const result = run(patch);
    return result.success ? "ok" : result.errors.map((e) => e.path);
  };

  // enum member requirement
  TestEquality.equals(
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
  TestEquality.equals(
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
  TestEquality.equals(
    "tag without distribution",
    outcome({ action: { type: "choice", choice: "escalate" } }),
    ["$input.action"],
  );
  TestEquality.equals(
    "required without distribution",
    outcome({ action: { type: "choice", choice: "reply" } }),
    ["$input.action"],
  );
  TestEquality.equals(
    "reply at minimum",
    outcome({
      action: {
        type: "choice",
        choice: "reply",
        probabilities: { reply: 0.5, escalate: 0.5 },
      },
    }),
    "ok",
  );

  // enum member JSDoc, reused by two properties
  for (const property of ["team", "backup"]) {
    TestEquality.equals(
      `${property} gated below`,
      outcome({
        [property]: {
          type: "choice",
          choice: "technical",
          probabilities: { technical: 0.74, billing: 0.26 },
        },
      }),
      [`$input.${property}`],
    );
    TestEquality.equals(
      `${property} gated at`,
      outcome({
        [property]: {
          type: "choice",
          choice: "technical",
          probabilities: { technical: 0.75, billing: 0.25 },
        },
      }),
      "ok",
    );
  }

  // property default fills only ungated members; the member override wins
  TestEquality.equals(
    "default below",
    outcome({
      tone: {
        type: "choice",
        choice: "formal",
        probabilities: { formal: 0.79, casual: 0.11, neutral: 0.1 },
      },
    }),
    ["$input.tone"],
  );
  TestEquality.equals(
    "default at",
    outcome({
      tone: {
        type: "choice",
        choice: "formal",
        probabilities: { formal: 0.8, casual: 0.1, neutral: 0.1 },
      },
    }),
    "ok",
  );
  TestEquality.equals(
    "override below default",
    outcome({
      tone: {
        type: "choice",
        choice: "casual",
        probabilities: { formal: 0.3, casual: 0.4, neutral: 0.3 },
      },
    }),
    "ok",
  );
  TestEquality.equals(
    "override below itself",
    outcome({
      tone: {
        type: "choice",
        choice: "casual",
        probabilities: { formal: 0.305, casual: 0.39, neutral: 0.305 },
      },
    }),
    ["$input.tone"],
  );
};

enum Team {
  /**
   * Payments and refunds
   *
   * @probability 0.5
   */
  billing = "billing",
  /**
   * Bugs and outages
   *
   * @probability 0.75
   */
  technical = "technical",
}

enum Action {
  /**
   * Page the on-call
   *
   * @probability 0.9
   */
  escalate = "escalate",
  /**
   * Answer the customer
   *
   * @probability 0.5
   */
  reply = "reply",
}

enum Tone {
  /** Formal wording */
  formal = "formal",
  /**
   * Casual wording
   *
   * @probability 0.4
   */
  casual = "casual",
  /** Neutral wording */
  neutral = "neutral",
}

interface IDecision {
  /** What should happen next? */
  action: Action;

  /** Which team should handle this? */
  team: Team;

  /** Which team is the backup? */
  backup: Team;

  /**
   * Which tone should the reply use?
   *
   * @probability 0.8
   */
  tone: Tone;
}
