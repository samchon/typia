import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation validate accepts TypeSafe's native answers.
 *
 * TypeSafe's own SDK and HTTP API answer a boolean question as `{ type: "noul",
 * noul }` and add `confidence` and `legend` to choice and score answers, while
 * the neutral AI SDK shape uses `{ type: "boolean", probability }`. Both must
 * validate without conversion, because the `type` discriminator makes the two
 * boolean spellings unambiguous.
 *
 * 1. Answer the questions exactly as TypeSafe's API documents its response.
 * 2. Validate the answers.
 * 3. Assert the converted value, including the distribution-backed score.
 */
export const test_llm_evaluation_validate_native_answers = (): void => {
  const result: IValidation<ITicketTriage> = typia.llm
    .evaluation<ITicketTriage>()
    .decode({
      is_urgent: { type: "noul", noul: 0.92 },
      department: {
        type: "choice",
        choice: "technical",
        probabilities: { billing: 0.08, technical: 0.85, sales: 0.07 },
        confidence: 0.82,
      },
      frustration: {
        type: "score",
        score: 1.6,
        legend: { "0": "Calm", "1": "Frustrated", "2": "Very angry" },
        probabilities: { "0": 0.05, "1": 0.3, "2": 0.65 },
        confidence: 0.78,
      },
    });
  TestEquality.equals("result", result, {
    success: true,
    data: {
      is_urgent: true,
      department: "technical",
      frustration: 2,
    },
  });
};

interface ITicketTriage {
  /** Does this convey urgency? */
  is_urgent: boolean;

  /** Which team should handle this? */
  department: "billing" | "technical" | "sales";

  /** How frustrated is the customer? */
  frustration: 0 | 1 | 2;
}
