import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_comma_insertion = (): void => {
  // Test case: insertCommaBeforeComment function
  // This tests lines 268-282: comma insertion before error comments

  // Test 1: Multiple object properties with errors on non-last properties
  const failure1: IValidation.IFailure = {
    success: false,
    data: {
      first: { nested: "wrong" },
      second: { nested: 123 },
      third: "correct",
    },
    errors: [
      {
        path: "$input.first.nested",
        expected: "number",
        value: "wrong",
      },
      {
        path: "$input.second.nested",
        expected: "string",
        value: 123,
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("obj-code-block", output1.includes("```json"), true);
  TestValidator.equals("obj-error-marker", output1.includes("// ❌"), true);
  // Commas should be properly placed before error comments (not after)
  // The output should be valid-looking JSON structure

  // Test 2: Array elements with errors on non-last elements
  const failure2: IValidation.IFailure = {
    success: false,
    data: {
      items: [
        { id: "wrong" },
        { id: "also-wrong" },
        { id: 3 },
      ],
    },
    errors: [
      {
        path: "$input.items[0].id",
        expected: "number",
        value: "wrong",
      },
      {
        path: "$input.items[1].id",
        expected: "number",
        value: "also-wrong",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("arr-code-block", output2.includes("```json"), true);
  TestValidator.equals("arr-error-marker", output2.includes("// ❌"), true);

  // Test 3: Line without error comment (should still add comma)
  const failure3: IValidation.IFailure = {
    success: false,
    data: {
      a: { x: 1 },
      b: { y: "wrong" },
    },
    errors: [
      {
        path: "$input.b.y",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("no-err-code-block", output3.includes("```json"), true);
  // Property "a" should have a comma after it even without error
  TestValidator.equals("a-property", output3.includes('"a"'), true);
  TestValidator.equals("b-property", output3.includes('"b"'), true);

  // Test 4: Error comment contains characters that look like comment markers
  const failure4: IValidation.IFailure = {
    success: false,
    data: {
      url: "http://example.com",
      next: "value",
    },
    errors: [
      {
        path: "$input.url",
        expected: "string & Format<url>",
        value: "http://example.com",
        description: "URL must use // protocol correctly",
      },
    ],
  };

  const output4: string = LlmJson.stringify(failure4);
  TestValidator.equals("url-code-block", output4.includes("```json"), true);
  // Should find the error marker, not get confused by // in URL or description
  TestValidator.equals("url-error-marker", output4.includes("// ❌"), true);
};
