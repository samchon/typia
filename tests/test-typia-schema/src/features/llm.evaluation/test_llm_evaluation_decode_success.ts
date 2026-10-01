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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.validate is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (result; decoded value satisfies T). The case documents its purpose as: Verifies typia.llm.evaluation decode folds a neutral answer map into T.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The answer map is flat and keyed by the question keys, while the result must be the nested decision type. This pins the conversion of every question family from the AI SDK `EvaluationModelV4` answer shape: a boolean from its P(true), a choice from the selected option, a score from its fractional position, and a literal set from its per-member booleans in typia's canonical member order. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (result; decoded value satisfies T) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_decode_success is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
