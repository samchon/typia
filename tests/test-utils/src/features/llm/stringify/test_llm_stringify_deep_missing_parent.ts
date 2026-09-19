import { IValidation } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_deep_missing_parent = (): void => {
  // Test: Error at a deeply nested path where intermediate parents don't exist
  // extractDirectChildKey only returns direct children, so grandchild+ errors
  // should become unmappable

  // Test 1: Empty object with deeply nested error path
  const failure1: IValidation.IFailure = {
    success: false,
    data: {},
    errors: [
      {
        path: "$input.user.profile.email",
        expected: "string & Format<email>",
        value: undefined,
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestEquality.equals("deep-code-block", output1.includes("```json"), true);
  // This error cannot be mapped because "user" is not a direct child error
  // (it's a grandchild path), so extractDirectChildKey returns null
  TestEquality.equals("deep-unmappable", output1.includes("Unmappable"), true);
  TestEquality.equals(
    "deep-path-in-unmappable",
    output1.includes("$input.user.profile.email"),
    true,
  );

  // Test 2: Object with some properties but missing intermediate parent
  const failure2: IValidation.IFailure = {
    success: false,
    data: { name: "John" },
    errors: [
      {
        path: "$input.address.city",
        expected: "string",
        value: undefined,
      },
      {
        path: "$input.name",
        expected: "number",
        value: "John",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestEquality.equals("mixed-code-block", output2.includes("```json"), true);
  // "name" error should be mappable (direct child)
  TestEquality.equals(
    "mixed-name-error",
    output2.includes("$input.name"),
    true,
  );
  // "address.city" should be unmappable (grandchild, no "address" in data)
  TestEquality.equals("mixed-unmappable", output2.includes("Unmappable"), true);
  TestEquality.equals(
    "mixed-address-city",
    output2.includes("$input.address.city"),
    true,
  );

  // Test 3: Error with array index on non-existent parent
  const failure3: IValidation.IFailure = {
    success: false,
    data: { title: "test" },
    errors: [
      {
        path: "$input.items[0].name",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestEquality.equals(
    "arr-parent-code-block",
    output3.includes("```json"),
    true,
  );
  TestEquality.equals(
    "arr-parent-unmappable",
    output3.includes("Unmappable"),
    true,
  );
};
