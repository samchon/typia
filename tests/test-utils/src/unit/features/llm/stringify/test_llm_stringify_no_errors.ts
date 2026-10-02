import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies empty-error feedback retains data without annotations.
 *
 * Even an externally authored failure with no errors must preserve data and
 * avoid inventing an annotation.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert empty-error feedback retains data without annotations; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns an empty error list, both fence boundaries, preserved name/value and absent marker/fallback section. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_no_errors = (): void => {
  // Test case: Failure object with empty errors array
  // This is an edge case - normally failures have errors

  const failure: IValidation.IFailure = {
    success: false,
    data: { name: "John", age: 30 },
    errors: [],
  };

  const output: string = LlmJson.stringify(failure);

  TestEquality.equals("contains code block", output.includes("```json"), true);
  TestEquality.equals(
    "ends with code block",
    output.trim().endsWith("```"),
    true,
  );
  // Should have no error markers
  TestEquality.equals("no error markers", output.includes("// ❌"), false);
  // Should not have unmappable section
  TestEquality.equals(
    "no unmappable section",
    output.includes("Unmappable"),
    false,
  );
  // Data should still be present
  TestEquality.equals("contains name", output.includes('"name"'), true);
  TestEquality.equals("contains John", output.includes('"John"'), true);
};
