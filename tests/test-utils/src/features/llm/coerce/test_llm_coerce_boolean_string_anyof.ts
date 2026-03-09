import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IUnion {
  value: boolean | number;
}

export const test_llm_coerce_boolean_string_anyof = (): void => {
  const parameters = typia.llm.parameters<IUnion>();

  // Test "yes" -> true in union
  const yes = { value: "yes" as unknown };
  const result1 = LlmJson.coerce<IUnion>(yes, parameters);
  TestValidator.equals("yes -> true in union", result1.value, true);

  // Test "no" -> false in union
  const no = { value: "no" as unknown };
  const result2 = LlmJson.coerce<IUnion>(no, parameters);
  TestValidator.equals("no -> false in union", result2.value, false);

  // Test "on" -> true in union
  const on = { value: "on" as unknown };
  const result3 = LlmJson.coerce<IUnion>(on, parameters);
  TestValidator.equals("on -> true in union", result3.value, true);

  // Test "off" -> false in union
  const off = { value: "off" as unknown };
  const result4 = LlmJson.coerce<IUnion>(off, parameters);
  TestValidator.equals("off -> false in union", result4.value, false);
};
