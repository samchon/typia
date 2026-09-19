import { TypeSafeClient } from "@typesafe-ai/sdk";
import { toJevQuestions } from "@typia/jev";
import typia, { tags } from "typia";

enum Department {
  /** Payments, invoicing, refunds */
  billing = "billing",
  /**
   * Bugs, outages, integrations
   *
   * @probability 0.75
   */
  technical = "technical",
  /** Pricing, upgrades, new accounts */
  sales = "sales",
}

interface ITicketTriage {
  /** Does the customer convey urgency? */
  urgent: boolean;

  /** Which team should handle this ticket? */
  department: Department;

  /** How frustrated is the customer? */
  frustration: 0 | 1 | 2;

  /** Which products does the customer mention? */
  products: Array<"card" | "loan" | "deposit">;

  refund: {
    /** Does the customer ask for a refund? */
    requested: boolean & tags.Probability<0.8>;
  };
}

const main = async (): Promise<void> => {
  // Generate the questions and the converting validator
  const triage = typia.llm.evaluation<ITicketTriage>();

  // Ask TypeSafe's Jev in its own wire format
  const client = new TypeSafeClient(); // reads TYPESAFE_API_KEY
  const { answers } = await client.systemOne({
    model: "jev-1.13.0", // pinned: thresholds are tuned per model version
    state: "I was charged twice this morning. Refund it now, or I leave.",
    questions: toJevQuestions(triage.questions),
  });

  // Validate the answers and fold them back into ITicketTriage
  const result = triage.validate(answers);
  if (result.success === false) {
    console.error("Evaluation failed:", result.errors);
    return;
  }
  console.log("Triage:", result.data);
  console.log("Department probabilities:", answers.department);
};
main().catch(console.error);
