import { ILlmEvaluation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation emits one neutral question per decision leaf.
 *
 * The question map is the request body evaluation models consume, so its shape
 * is dictated by the provider-neutral AI SDK `EvaluationModelV4` question spec,
 * not by typia's implementation: a boolean asks `{ type: "boolean" }`, a string
 * enum asks a `choice` whose criteria map each option to its member description
 * (or `null`), a numeric enum asks a `score` whose criteria list the levels in
 * ascending value order, a literal-set array asks one boolean per member, and
 * nested objects flatten into readable path keys.
 *
 * 1. Declare a decision type covering every question family, with a numeric enum
 *    declared out of order and an undocumented choice option.
 * 2. Generate the evaluation.
 * 3. Assert the exact question map.
 */
export const test_llm_evaluation_questions = (): void => {
  const evaluation: ILlmEvaluation<ITicketTriage> =
    typia.llm.evaluation<ITicketTriage>();
  TestEquality.equals("questions", evaluation.questions, {
    urgent: {
      type: "boolean",
      instructions: "Does the customer convey urgency?",
    },
    department: {
      type: "choice",
      instructions: "Which team should handle this ticket?",
      criteria: {
        billing: "Payments, invoicing, refunds",
        technical: "Bugs, outages, integrations",
        sales: null,
      },
    },
    frustration: {
      type: "score",
      instructions: "How frustrated is the customer?",
      criteria: ["Calm", "Annoyed", "Angry"],
    },
    "products.card": {
      type: "boolean",
      instructions:
        'Which products does the customer mention?\n\nDoes the option "card" apply?',
    },
    "products.loan": {
      type: "boolean",
      instructions:
        'Which products does the customer mention?\n\nDoes the option "loan" apply?',
    },
    "refund.requested": {
      type: "boolean",
      instructions: "Does the customer ask for a refund?",
    },
  } satisfies Record<string, ILlmEvaluation.IQuestion>);
};

enum Department {
  /** Payments, invoicing, refunds */
  billing = "billing",
  /** Bugs, outages, integrations */
  technical = "technical",
  sales = "sales",
}

enum Frustration {
  /** Angry */
  angry = 2,
  /** Calm */
  calm = 0,
  /** Annoyed */
  annoyed = 1,
}

interface ITicketTriage {
  /** Does the customer convey urgency? */
  urgent: boolean;

  /** Which team should handle this ticket? */
  department: Department;

  /** How frustrated is the customer? */
  frustration: Frustration;

  /** Which products does the customer mention? */
  products: Array<"card" | "loan">;

  /** Refund details, not forwarded to the model. */
  refund: {
    /** Does the customer ask for a refund? */
    requested: boolean;
  };
}
