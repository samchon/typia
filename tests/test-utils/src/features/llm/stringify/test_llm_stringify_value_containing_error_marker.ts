import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_value_containing_error_marker = (): void => {
  // Test: string values containing "// ❌" should not confuse comma insertion
  // insertCommaBeforeComment must use lastIndexOf to find the real error comment

  // Test 1: Array element with "// ❌" in its string value
  const failure1: IValidation.IFailure = {
    success: false,
    data: {
      items: ["test // ❌ fake marker", "normal"],
    },
    errors: [
      {
        path: "$input.items[0]",
        expected: "number",
        value: "test // ❌ fake marker",
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("arr-code-block", output1.includes("```json"), true);
  TestValidator.equals("arr-error-marker", output1.includes("// ❌"), true);
  // The string value should be intact (JSON-stringified with quotes)
  TestValidator.equals(
    "arr-value-intact",
    output1.includes("test // ❌ fake marker"),
    true,
  );
  // Should not have unmappable errors
  TestValidator.equals(
    "arr-no-unmappable",
    output1.includes("Unmappable"),
    false,
  );

  // Test 2: Object property value containing "// ❌"
  const failure2: IValidation.IFailure = {
    success: false,
    data: {
      message: "Error // ❌ occurred here",
      count: "wrong",
    },
    errors: [
      {
        path: "$input.count",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("obj-code-block", output2.includes("```json"), true);
  TestValidator.equals(
    "obj-message-intact",
    output2.includes("Error // ❌ occurred here"),
    true,
  );
  TestValidator.equals(
    "obj-count-error",
    output2.includes("$input.count"),
    true,
  );

  // Test 3: Nested object in array where inner value has "// ❌"
  const failure3: IValidation.IFailure = {
    success: false,
    data: {
      items: [
        { text: "line // ❌ [fake]", value: "wrong" },
        { text: "normal", value: 42 },
      ],
    },
    errors: [
      {
        path: "$input.items[0].value",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("nested-code-block", output3.includes("```json"), true);
  TestValidator.equals(
    "nested-fake-intact",
    output3.includes("line // ❌ [fake]"),
    true,
  );
  TestValidator.equals(
    "nested-real-error",
    output3.includes("$input.items[0].value"),
    true,
  );
  TestValidator.equals(
    "nested-no-unmappable",
    output3.includes("Unmappable"),
    false,
  );
};
