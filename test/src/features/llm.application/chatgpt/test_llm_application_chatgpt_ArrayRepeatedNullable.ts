import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_ArrayRepeatedNullable = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "ArrayRepeatedNullable",
    factory: ArrayRepeatedNullable
  })(
    typia.llm.application<ArrayRepeatedNullableApplication, "chatgpt">(),
  );

interface ArrayRepeatedNullableApplication {
  insert(p: { first: ArrayRepeatedNullable }): Promise<void>;
  reduce(p: { first: ArrayRepeatedNullable, second: ArrayRepeatedNullable | null }): Promise<ArrayRepeatedNullable>;
  coalesce(p: {
    first: ArrayRepeatedNullable | null,
    second: ArrayRepeatedNullable | null,
    third?: ArrayRepeatedNullable | null,
  }): Promise<ArrayRepeatedNullable | null>;
}