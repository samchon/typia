import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IBooleanUnion {
  value: boolean | number;
}

interface INullUnion {
  value: null | number;
}

interface IBooleanNullUnion {
  value: boolean | null;
}

export const test_llm_coerce_boolean_string_n_anyof = (): void => {
  // "n" -> false when boolean in union, no null
  const boolParams = typia.llm.parameters<IBooleanUnion>();
  const boolResult = LlmJson.coerce<IBooleanUnion>(
    { value: "n" as unknown },
    boolParams,
  );
  TestValidator.equals("n -> false (boolean union)", boolResult.value, false);

  // "n" -> null when null in union, no boolean
  const nullParams = typia.llm.parameters<INullUnion>();
  const nullResult = LlmJson.coerce<INullUnion>(
    { value: "n" as unknown },
    nullParams,
  );
  TestValidator.equals("n -> null (null union)", nullResult.value, null);

  // "n" stays as "n" when both boolean and null in union (ambiguous)
  const bothParams = typia.llm.parameters<IBooleanNullUnion>();
  const bothResult = LlmJson.coerce<IBooleanNullUnion>(
    { value: "n" as unknown },
    bothParams,
  );
  TestValidator.equals(
    "n -> n (both union)",
    bothResult.value as unknown,
    "n",
  );
};
