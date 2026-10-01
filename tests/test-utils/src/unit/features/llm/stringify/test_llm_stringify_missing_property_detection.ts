import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies feedback exposes missing direct properties.
 *
 * A missing direct child differs from a descendant whose parent exists and from
 * an indexed array element.
 *
 * 1. Author failure data and error paths for the stated scenarios.
 * 2. Call LlmJson.stringify and compare the declared fields and boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.stringify calls assert feedback exposes missing direct properties; authored failure objects reach the shared runtime renderer without a compiler-produced validator.
 * @evidence contracts/testing.md#independent-expectations Literal values, error paths and expected fields follow the documented annotated-feedback contract; native JSON spelling supplies the value meaning. These retained presence assertions do not establish complete-output equivalence.
 * @evidence contracts/testing.md#distinguishing-cases This case owns simple/multiple missing keys, bracket notation, grandchildren, array indexes and nested missing keys; the index scenario's assertion only checks the code fence. Complementary direct cases preserve their own assertion identity.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test and imports the plugin-free shared oracle; no native producer, installed consumer or host is needed to execute its authored failure objects.
 */
export const test_llm_stringify_missing_property_detection = (): void => {
  // Test case: getMissingProperties and extractDirectChildKey functions

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
  TestEquality.equals("simple-code-block", output1.includes("```json"), true);
  TestEquality.equals("simple-email", output1.includes("email"), true);
  TestEquality.equals("simple-undefined", output1.includes("undefined"), true);

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
  TestEquality.equals("multi-code-block", output2.includes("```json"), true);
  TestEquality.equals("multi-name", output2.includes("name"), true);
  TestEquality.equals("multi-age", output2.includes("age"), true);
  TestEquality.equals("multi-email", output2.includes("email"), true);

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
  TestEquality.equals("bracket-code-block", output3.includes("```json"), true);
  TestEquality.equals(
    "bracket-missing-key",
    output3.includes("missing-key"),
    true,
  );

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
  TestEquality.equals(
    "grandchild-code-block",
    output4.includes("```json"),
    true,
  );
  // "email" should show as missing property under "user", not under root
  TestEquality.equals("grandchild-email", output4.includes("email"), true);

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
  TestEquality.equals(
    "array-idx-code-block",
    output5.includes("```json"),
    true,
  );
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
  TestEquality.equals("nested-code-block", output6.includes("```json"), true);
  TestEquality.equals("nested-user", output6.includes("user"), true);
  TestEquality.equals("nested-age", output6.includes("age"), true);
  TestEquality.equals("nested-undefined", output6.includes("undefined"), true);
};
