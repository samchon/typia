import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_applicationEquals_llama_ArrayRepeatedNullable =
  (): void =>
    _test_llm_applicationEquals({
      model: "llama",
      name: "ArrayRepeatedNullable",
      factory: ArrayRepeatedNullable,
    })(
      typia.llm.application<
        ArrayRepeatedNullableApplication,
        "llama",
        { equals: true }
      >(),
    );

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
