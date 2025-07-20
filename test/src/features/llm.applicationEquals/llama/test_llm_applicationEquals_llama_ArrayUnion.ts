import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_applicationEquals_llama_ArrayUnion = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ArrayUnion",
    factory: ArrayUnion,
  })(typia.llm.application<ArrayUnionApplication, "llama", { equals: true }>());

interface ArrayUnionApplication {
  insert(p: { first: ArrayUnion }): Promise<void>;
  reduce(p: {
    first: ArrayUnion;
    second: ArrayUnion | null;
  }): Promise<ArrayUnion>;
  coalesce(p: {
    first: ArrayUnion | null;
    second: ArrayUnion | null;
    third?: ArrayUnion | null;
  }): Promise<ArrayUnion | null>;
}
