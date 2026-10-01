import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies feedback retains error-bearing undefined parents.
 *
 * An undefined parent can still own a descendant error whose information must
 * remain visible.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert feedback retains error-bearing undefined parents; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns exact, nested, unrelated and deeply nested error paths; the unrelated scenario's original assertions do not establish unused-key omission. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_has_errors_at_or_under = (): void => {
  // Test case: hasErrorsAtOrUnder function

  // Test 1: Error at exact path
  const failure1: IValidation.IFailure = {
    success: false,
    data: { user: undefined },
    errors: [
      {
        path: "$input.user",
        expected: "object",
        value: undefined,
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestEquality.equals("exact-code-block", output1.includes("```json"), true);
  TestEquality.equals("exact-user", output1.includes("user"), true);
  TestEquality.equals("exact-undefined", output1.includes("undefined"), true);

  // Test 2: Error under path (nested error makes parent undefined visible)
  const data2: Record<string, unknown> = {
    user: undefined,
  };
  const failure2: IValidation.IFailure = {
    success: false,
    data: data2,
    errors: [
      {
        path: "$input.user.email",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestEquality.equals("nested-code-block", output2.includes("```json"), true);
  // The "user" should appear because there's an error under it
  TestEquality.equals("nested-user", output2.includes("user"), true);

  // Test 3: Error not under path (undefined entry should not show)
  const data3: Record<string, unknown> = {
    name: "John",
    unused: undefined,
  };
  const failure3: IValidation.IFailure = {
    success: false,
    data: data3,
    errors: [
      {
        path: "$input.name",
        expected: "number",
        value: "John",
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestEquality.equals("no-match-code-block", output3.includes("```json"), true);
  TestEquality.equals("no-match-name", output3.includes("name"), true);
  // "unused" should NOT appear because it has no errors at or under it

  // Test 4: Deep nested error path
  const data4: Record<string, unknown> = {
    level1: undefined,
  };
  const failure4: IValidation.IFailure = {
    success: false,
    data: data4,
    errors: [
      {
        path: "$input.level1.level2.level3.value",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output4: string = LlmJson.stringify(failure4);
  TestEquality.equals("deep-code-block", output4.includes("```json"), true);
  TestEquality.equals("deep-level1", output4.includes("level1"), true);
};
