import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies tags.Probability stays inert outside typia.llm.evaluation.
 *
 * The tag constrains how an evaluation answer converts, not the value, so it
 * must add no runtime check to the validators and no keyword to JSON or LLM
 * schemas. A regression that turned it into a value constraint would reject
 * `false` for a thresholded boolean, or leak an unknown keyword into schemas
 * sent to LLM providers.
 *
 * 1. Declare a thresholded boolean and a gated literal member.
 * 2. Run `is`, `validate`, `json.schema`, and `llm.parameters` over it.
 * 3. Assert every value passes and no schema carries a probability keyword.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.is, typia.validate, typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (is; validate; json.schema; llm.parameters). The case documents its purpose as: Verifies tags.Probability stays inert outside typia.llm.evaluation.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The tag constrains how an evaluation answer converts, not the value, so it must add no runtime check to the validators and no keyword to JSON or LLM schemas. A regression that turned it into a value constraint would reject `false` for a thresholded boolean, or leak an unknown keyword into schemas sent to LLM providers. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is; validate; json.schema; llm.parameters) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_evaluation_probability_tag_inert is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_evaluation_probability_tag_inert = (): void => {
  for (const value of [
    { refund: false, action: "escalate" },
    { refund: true, action: "reply" },
  ] satisfies IDecision[]) {
    TestEquality.equals("is", typia.is<IDecision>(value), true);
    TestEquality.equals(
      "validate",
      typia.validate<IDecision>(value).success,
      true,
    );
  }
  TestEquality.equals(
    "json.schema",
    JSON.stringify(typia.json.schema<IDecision>()).includes("robability"),
    false,
  );
  TestEquality.equals(
    "llm.parameters",
    JSON.stringify(typia.llm.parameters<IDecision>()).includes("robability"),
    false,
  );
};

interface IDecision {
  /** Is a refund requested? */
  refund: boolean & tags.Probability<0.8>;

  /** What should happen next? */
  action: ("escalate" & tags.Probability<0.9>) | "reply";
}
