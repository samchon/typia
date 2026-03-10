import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_missing_property_detection = (): void => {
  // Test case: getMissingProperties and extractDirectChildKey functions
  // This tests lines 343-411: finding missing properties from error paths

  // Test 1: Simple missing property
  const failure1: IValidation.IFailure = {
    success: false,
    data: { name: "John" },
    errors: [
      {
        path: "$input.email",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("simple-code-block", output1.includes("```json"), true);
  TestValidator.equals("simple-email", output1.includes("email"), true);
  TestValidator.equals("simple-undefined", output1.includes("undefined"), true);

  // Test 2: Multiple missing properties
  const failure2: IValidation.IFailure = {
    success: false,
    data: {},
    errors: [
      {
        path: "$input.name",
        expected: "string",
        value: undefined,
      },
      {
        path: "$input.age",
        expected: "number",
        value: undefined,
      },
      {
        path: "$input.email",
        expected: "string & Format<email>",
        value: undefined,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("multi-code-block", output2.includes("```json"), true);
  TestValidator.equals("multi-name", output2.includes("name"), true);
  TestValidator.equals("multi-age", output2.includes("age"), true);
  TestValidator.equals("multi-email", output2.includes("email"), true);

  // Test 3: Missing property with bracket notation (special chars in key)
  const failure3: IValidation.IFailure = {
    success: false,
    data: { existing: "value" },
    errors: [
      {
        path: '$input["missing-key"]',
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("bracket-code-block", output3.includes("```json"), true);
  TestValidator.equals("bracket-missing-key", output3.includes("missing-key"), true);

  // Test 4: Grandchild path should NOT create missing property on parent
  // (extractDirectChildKey should return null for grandchildren)
  const failure4: IValidation.IFailure = {
    success: false,
    data: { user: {} },
    errors: [
      {
        path: "$input.user.email",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output4: string = LlmJson.stringify(failure4);
  TestValidator.equals("grandchild-code-block", output4.includes("```json"), true);
  // "email" should show as missing property under "user", not under root
  TestValidator.equals("grandchild-email", output4.includes("email"), true);

  // Test 5: Array index should NOT be treated as missing object property
  const failure5: IValidation.IFailure = {
    success: false,
    data: { items: [] },
    errors: [
      {
        path: "$input.items[0]",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output5: string = LlmJson.stringify(failure5);
  TestValidator.equals("array-idx-code-block", output5.includes("```json"), true);
  // Should not create a property named "0" on items

  // Test 6: Nested missing property
  const failure6: IValidation.IFailure = {
    success: false,
    data: { user: { name: "John" } },
    errors: [
      {
        path: "$input.user.age",
        expected: "number",
        value: undefined,
      },
    ],
  };

  const output6: string = LlmJson.stringify(failure6);
  TestValidator.equals("nested-code-block", output6.includes("```json"), true);
  TestValidator.equals("nested-user", output6.includes("user"), true);
  TestValidator.equals("nested-age", output6.includes("age"), true);
  TestValidator.equals("nested-undefined", output6.includes("undefined"), true);
};
