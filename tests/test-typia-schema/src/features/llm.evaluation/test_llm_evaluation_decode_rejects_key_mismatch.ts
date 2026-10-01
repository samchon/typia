import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation decode rejects a mismatched answer key set.
 *
 * An evaluation model must answer exactly the questions it was asked. A missing
 * answer leaves a property of the decision type unset, and an extra answer
 * means the map belongs to different questions; both must fail instead of
 * producing a partial or silently widened result. Missing answers report the
 * decision path, and extra answers report their own key.
 *
 * 1. Decode a non-object input.
 * 2. Decode an answer map missing one question and carrying an unknown key.
 * 3. Assert the failure paths.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.evaluation is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (scalar; array; mismatch). The case documents its purpose as: Verifies typia.llm.evaluation decode rejects a mismatched answer key set.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: An evaluation model must answer exactly the questions it was asked. A missing answer leaves a property of the decision type unset, and an extra answer means the map belongs to different questions; both must fail instead of producing a partial or silently widened result. Missing answers report the decision path, and extra answers report their own key. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (scalar; array; mismatch) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_decode_rejects_key_mismatch is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_evaluation_decode_rejects_key_mismatch = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();

  const scalar: IValidation<IDecision> = evaluation.decode("nothing");
  TestEquality.equals("scalar", paths(scalar), ["$input"]);

  const array: IValidation<IDecision> = evaluation.decode([]);
  TestEquality.equals("array", paths(array), ["$input"]);

  const mismatch: IValidation<IDecision> = evaluation.decode({
    "refund.requested": { type: "boolean", probability: 0.6 },
    "refund.amount": { type: "boolean", probability: 0.6 },
  });
  TestEquality.equals("mismatch", paths(mismatch), [
    "$input.urgent",
    '$input["refund.amount"]',
  ]);
};

const paths = (result: IValidation<unknown>): string[] =>
  result.success ? [] : result.errors.map((e) => e.path);

interface IDecision {
  /** Is it urgent? */
  urgent: boolean;
  refund: {
    /** Is a refund requested? */
    requested: boolean;
  };
}
