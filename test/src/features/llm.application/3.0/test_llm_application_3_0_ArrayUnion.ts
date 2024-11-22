import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_application_3_0_ArrayUnion = _test_llm_application({
  model: "3.0",
  name: "ArrayUnion",
})(typia.llm.application<ArrayUnionApplication, "3.0">());

interface ArrayUnionApplication {
  insert(first: ArrayUnion): Promise<void>;
  reduce(first: ArrayUnion, second: ArrayUnion | null): Promise<ArrayUnion>;
  coalesce(
    first: ArrayUnion | null,
    second: ArrayUnion | null,
    third?: ArrayUnion | null,
  ): Promise<ArrayUnion | null>;
}
