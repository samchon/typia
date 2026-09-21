import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation decode folds a neutral answer map into T.
 *
 * The answer map is flat and keyed by the question keys, while the result must
 * be the nested decision type. This pins the conversion of every question
 * family from the AI SDK `EvaluationModelV4` answer shape: a boolean from its
 * P(true), a choice from the selected option, a score from its fractional
 * position, and a literal set from its per-member booleans in typia's canonical
 * member order.
 *
 * 1. Answer every question in the neutral shape, as `experimental_evaluate`
 *    returns it for an LLM provider without distributions.
 * 2. Decode the answers.
 * 3. Assert the nested decision value also passes typia's general validator;
 *    callers do not need to run that second check themselves.
 */
export const test_llm_evaluation_decode_success = (): void => {
  const result: IValidation<ITicketTriage> = typia.llm
    .evaluation<ITicketTriage>()
    .decode({
      urgent: { type: "boolean", probability: 0.83 },
      department: { type: "choice", choice: "technical" },
      frustration: { type: "score", score: 1.4 },
      "products.card": { type: "boolean", probability: 0.9 },
      "products.loan": { type: "boolean", probability: 0.1 },
      "products.deposit": { type: "boolean", probability: 0.7 },
      "refund.requested": { type: "boolean", probability: 0.2 },
    });
  TestEquality.equals("result", result, {
    success: true,
    data: {
      urgent: true,
      department: "technical",
      frustration: 1,
      products: ["card", "deposit"],
      refund: { requested: false },
    },
  });
  TestEquality.equals(
    "decoded value satisfies T",
    result.success && typia.validate<ITicketTriage>(result.data).success,
    true,
  );
};

interface ITicketTriage {
  /** Does the customer convey urgency? */
  urgent: boolean;

  /** Which team should handle this ticket? */
  department: "billing" | "technical";

  /** How frustrated is the customer? */
  frustration: 0 | 1 | 2;

  /** Which products does the customer mention? */
  products: Array<"card" | "loan" | "deposit">;

  refund: {
    /** Does the customer ask for a refund? */
    requested: boolean;
  };
}
