import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_applicationEquals_3_0_ArrayUnion = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ArrayUnion",
    factory: ArrayUnion,
  })(typia.llm.application<ArrayUnionApplication, "3.0", { equals:; true }>());

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
