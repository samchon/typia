import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation decode accepts TypeSafe's native answers.
 *
 * TypeSafe's own SDK and HTTP API answer a boolean question as `{ type: "noul",
 * noul }` and add `confidence` and `legend` to choice and score answers, while
 * the neutral AI SDK shape uses `{ type: "boolean", probability }`. Both must
 * decode without wire-format conversion, because the `type` discriminator makes
 * the two boolean spellings unambiguous.
 *
 * 1. Answer the questions exactly as TypeSafe's API documents its response.
 * 2. Decode the answers.
 * 3. Assert the converted value, including the distribution-backed score.
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 1 assertion (result). The case documents its purpose as: Verifies typia.llm.evaluation decode accepts TypeSafe's native answers.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: TypeSafe's own SDK and HTTP API answer a boolean question as `{ type: "noul", noul }` and add `confidence` and `legend` to choice and score answers, while the neutral AI SDK shape uses `{ type: "boolean", probability }`. Both must decode without wire-format conversion, because the `type` discriminator makes the two boolean spellings unambiguous. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (result) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_decode_native_answers is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
 */
export const test_llm_evaluation_decode_native_answers = (): void => {
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
