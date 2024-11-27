import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_application_3_1_ArrayUnion = _test_llm_application({
  model: "3.1",
  name: "ArrayUnion",
})(typia.llm.application<ArrayUnionApplication, "3.1">());

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
