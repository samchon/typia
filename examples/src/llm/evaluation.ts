import { LlmEvaluation } from "@typia/utils";
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

  // Ask TypeSafe's Jev directly, in its native wire format
  const response: Response = await fetch(
    "https://api.typesafe.ai/v1/systemone",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer <YOUR_TYPESAFE_API_KEY>",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "jev-1.13.0", // pinned: thresholds are tuned per model version
        state: "I was charged twice this morning. Refund it now, or I leave.",
        questions: LlmEvaluation.toTypeSafe(triage.questions),
      }),
    },
  );
  const { answers } = (await response.json()) as { answers: unknown };

  // Validate the answers and fold them back into ITicketTriage
  const result = triage.validate(answers);
  if (result.success === false) {
    console.error("Evaluation failed:", result.errors);
    return;
  }
  console.log("Triage:", result.data);
};
main().catch(console.error);
