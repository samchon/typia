import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_invalid_object_key = (): void => {
  // Object key starting with a number is invalid (not a valid identifier)
  const result = LlmJson.parse('{123key: "value"}');
  TestEquality.equals("success", result.success, false);
  if (!result.success)
    TestEquality.subset("errors", [{ expected: "string key" }], result.errors);

  // Key starting with special character (not $ or _) is invalid
  const result2 = LlmJson.parse('{@key: "value"}');
  TestEquality.equals("success2", result2.success, false);
  if (!result2.success)
    TestEquality.subset(
      "errors2",
      [{ expected: "string key" }],
      result2.errors,
    );

  // Pure number as key (0: "value")
  const result3 = LlmJson.parse('{0: "value"}');
  TestEquality.equals("num-key-success", result3.success, false);
  if (!result3.success)
    TestEquality.subset(
      "num-key-errors",
      [{ expected: "string key" }],
      result3.errors,
    );
};
