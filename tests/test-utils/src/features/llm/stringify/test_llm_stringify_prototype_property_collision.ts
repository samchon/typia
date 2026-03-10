import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_prototype_property_collision = (): void => {
  // Test: Error paths referencing prototype property names (toString, hasOwnProperty)
  // `in` operator returns true for inherited properties, which prevents
  // getMissingProperties from detecting them as missing.
  // These errors become unmappable because:
  //   - Object.entries only returns OWN properties (so no definedEntries match)
  //   - getMissingProperties uses `in` which sees inherited props (so no missingKeys match)

  // Test 1: "toString" — inherited from Object.prototype
  const failure1: IValidation.IFailure = {
    success: false,
    data: { name: "John" },
    errors: [
      {
        path: "$input.toString",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("ts-code-block", output1.includes("```json"), true);
  // Prototype property errors become unmappable
  TestValidator.equals("ts-unmappable", output1.includes("Unmappable"), true);
  TestValidator.equals(
    "ts-path-present",
    output1.includes("$input.toString"),
    true,
  );

  // Test 2: "constructor" — also inherited
  const failure2: IValidation.IFailure = {
    success: false,
    data: { id: 1 },
    errors: [
      {
        path: "$input.constructor",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("ctor-code-block", output2.includes("```json"), true);
  TestValidator.equals("ctor-unmappable", output2.includes("Unmappable"), true);

  // Test 3: "hasOwnProperty" — also inherited
  const failure3: IValidation.IFailure = {
    success: false,
    data: { value: "test" },
    errors: [
      {
        path: "$input.hasOwnProperty",
        expected: "string",
        value: undefined,
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  TestValidator.equals("hop-code-block", output3.includes("```json"), true);
  TestValidator.equals("hop-unmappable", output3.includes("Unmappable"), true);
};
