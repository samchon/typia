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
