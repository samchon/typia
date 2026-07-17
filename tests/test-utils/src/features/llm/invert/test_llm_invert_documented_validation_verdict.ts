import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies documenting a property does not change `LlmJson.validate`'s verdict.
 *
 * This is the soundness half of the `invert` constraint-erasure defect: invalid
 * data was reported valid, not merely described badly. `LlmJson.validate`
 * inverts the LLM schema before validating, so every constraint the inverter
 * erased stopped being enforced. Two properties that differ only by a JSDoc
 * comment must produce the same verdict — the model is told about both
 * constraints, so both must be checked.
 *
 * 1. Declare a member type whose documented and undocumented properties carry
 *    the same tags.
 * 2. Build the non-strict validator from its LLM parameters.
 * 3. Assert a value violating only the documented property is rejected.
 * 4. Assert the undocumented twin's violation is rejected identically, and that
 *    a conforming value still passes.
 */
export const test_llm_invert_documented_validation_verdict = (): void => {
  interface IMember {
    /** How old the member is. */
    documentedAge: number & tags.Minimum<0>;
    undocumentedAge: number & tags.Minimum<0>;
    /** Where to reach the member. */
    documentedEmail: string & tags.Format<"email">;
    undocumentedEmail: string & tags.Format<"email">;
  }
  const validate = LlmJson.validate(typia.llm.parameters<IMember>());
  const valid = {
    documentedAge: 5,
    undocumentedAge: 5,
    documentedEmail: "member@typia.io",
    undocumentedEmail: "member@typia.io",
  };

  TestValidator.equals("conforming value accepted", validate(valid).success, true);
  TestValidator.equals(
    "documented minimum enforced",
    validate({ ...valid, documentedAge: -5 }).success,
    false,
  );
  TestValidator.equals(
    "undocumented minimum enforced",
    validate({ ...valid, undocumentedAge: -5 }).success,
    false,
  );
  TestValidator.equals(
    "documented format enforced",
    validate({ ...valid, documentedEmail: "not-an-email" }).success,
    false,
  );
  TestValidator.equals(
    "undocumented format enforced",
    validate({ ...valid, undocumentedEmail: "not-an-email" }).success,
    false,
  );
};
