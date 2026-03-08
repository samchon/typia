import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IBool {
  flag: boolean;
}

export const test_llm_coerce_boolean_string_no = (): void => {
  const parameters = typia.llm.parameters<IBool>();

  // Test "no" -> false
  const no = { flag: "no" as unknown };
  const result1 = LlmJson.coerce<IBool>(parameters, no);
  TestValidator.equals("no -> false", result1.flag, false);

  // Test "NO" -> false (case insensitive)
  const NO = { flag: "NO" as unknown };
  const result2 = LlmJson.coerce<IBool>(parameters, NO);
  TestValidator.equals("NO -> false", result2.flag, false);

  // Test "n" -> false (coerce handles this separately from lenient parser)
  const n = { flag: "n" as unknown };
  const result3 = LlmJson.coerce<IBool>(parameters, n);
  TestValidator.equals("n -> false", result3.flag, false);

  // Test "off" -> false
  const off = { flag: "off" as unknown };
  const result4 = LlmJson.coerce<IBool>(parameters, off);
  TestValidator.equals("off -> false", result4.flag, false);
};
