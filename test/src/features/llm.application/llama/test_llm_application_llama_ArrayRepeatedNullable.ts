import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_application_llama_ArrayRepeatedNullable =
  _test_llm_application({
    model: "llama",
    name: "ArrayRepeatedNullable",
    factory: ArrayRepeatedNullable,
  })(typia.llm.application<ArrayRepeatedNullableApplication, "llama">());

interface ArrayRepeatedNullableApplication {
  insert(p: { first: ArrayRepeatedNullable }): Promise<void>;
  reduce(p: {
    first: ArrayRepeatedNullable;
    second: ArrayRepeatedNullable | null;
  }): Promise<ArrayRepeatedNullable>;
  coalesce(p: {
    first: ArrayRepeatedNullable | null;
    second: ArrayRepeatedNullable | null;
    third?: ArrayRepeatedNullable | null;
  }): Promise<ArrayRepeatedNullable | null>;
}
