import { TestValidator } from "@nestia/e2e";
import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";

export const test_llm_stringify_prefix_false_positive = (): void => {
  // Test: hasErrorsAtOrUnder must NOT match "$input.names" when prefix is "$input.name"
  // This guards against startsWith false positives with similar property names

  // Test 1: "name" (undefined, no error) vs "names" (has error)
  // "name" should NOT appear because it has no errors at or under it
  const data1: Record<string, unknown> = {
    name: undefined,
    names: "invalid",
  };
  const failure1: IValidation.IFailure = {
    success: false,
    data: data1,
    errors: [
      {
        path: "$input.names",
        expected: "Array<string>",
        value: "invalid",
      },
    ],
  };

  const output1: string = LlmJson.stringify(failure1);
  TestValidator.equals("names-has-error", output1.includes("names"), true);
  TestValidator.equals("names-error-marker", output1.includes("// ❌"), true);
  // Count occurrences of "undefined" — "name" should not show as undefined
  // Only "names" should appear (as a key with value "invalid"), not "name: undefined"
  const nameUndefinedMatch = output1.match(/"name":\s*undefined/g);
  TestValidator.equals(
    "name-should-not-show-as-undefined",
    nameUndefinedMatch,
    null,
  );

  // Test 2: "item" (undefined, no error) vs "items" (has nested error)
  const data2: Record<string, unknown> = {
    item: undefined,
    items: { count: "wrong" },
  };
  const failure2: IValidation.IFailure = {
    success: false,
    data: data2,
    errors: [
      {
        path: "$input.items.count",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output2: string = LlmJson.stringify(failure2);
  TestValidator.equals("items-has-error", output2.includes("items"), true);
  const itemUndefinedMatch = output2.match(/"item":\s*undefined/g);
  TestValidator.equals(
    "item-should-not-show-as-undefined",
    itemUndefinedMatch,
    null,
  );

  // Test 3: "a" (undefined) vs "ab" (has error) — single char prefix
  const data3: Record<string, unknown> = {
    a: undefined,
    ab: "wrong",
  };
  const failure3: IValidation.IFailure = {
    success: false,
    data: data3,
    errors: [
      {
        path: "$input.ab",
        expected: "number",
        value: "wrong",
      },
    ],
  };

  const output3: string = LlmJson.stringify(failure3);
  const aUndefinedMatch = output3.match(/"a":\s*undefined/g);
  TestValidator.equals("a-should-not-show-as-undefined", aUndefinedMatch, null);
};
