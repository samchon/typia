import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_llm_applicationEquals_llama_ArrayAny = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ArrayAny",
    factory: ArrayAny,
  })(typia.llm.application<ArrayAnyApplication, "llama", { equals: true }>());

interface ArrayAnyApplication {
  insert(p: { first: ArrayAny }): Promise<void>;
  reduce(p: { first: ArrayAny; second: ArrayAny | null }): Promise<ArrayAny>;
  coalesce(p: {
    first: ArrayAny | null;
    second: ArrayAny | null;
    third?: ArrayAny | null;
  }): Promise<ArrayAny | null>;
}
