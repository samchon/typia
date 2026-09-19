import { TypeSafeClient } from "@typesafe-ai/sdk";
import { Jev } from "@typia/jev";
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

  // Ask TypeSafe's Jev, and fold the answers back into ITicketTriage
  const { validation, answers } = await Jev.typesafe({
    client: new TypeSafeClient(), // reads TYPESAFE_API_KEY
    evaluation: triage,
    model: "jev-1.13.0", // pinned: thresholds are tuned per model version
    state: "I was charged twice this morning. Refund it now, or I leave.",
  });
  if (validation.success === false) {
    console.error("Evaluation failed:", validation.errors);
    return;
  }
  console.log("Triage:", validation.data);
  console.log("Department probabilities:", answers.department);
};
main().catch(console.error);
