import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IBool {
  flag: boolean;
}

export const test_llm_coerce_triple_stringify_boolean = (): void => {
  const parameters = typia.llm.parameters<IBool>();
  const original: IBool = { flag: true };

  const corrupted = {
    flag: JSON.stringify(JSON.stringify(original.flag)) as unknown,
  };

  const result = LlmJson.parse<IBool>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("flag", result.data.flag, true);
  }
};
