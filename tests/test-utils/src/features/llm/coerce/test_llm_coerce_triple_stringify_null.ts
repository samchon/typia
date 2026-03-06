import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface INull {
  nothing: null;
}

export const test_llm_coerce_triple_stringify_null = (): void => {
  const parameters = typia.llm.parameters<INull>();
  const original: INull = { nothing: null };

  const corrupted = {
    nothing: JSON.stringify(JSON.stringify(original.nothing)) as unknown,
  };

  const result = LlmJson.parse<INull>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("nothing", result.data.nothing, null);
  }
};
