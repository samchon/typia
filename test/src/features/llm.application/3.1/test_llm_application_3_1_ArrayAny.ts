import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_llm_application_3_1_ArrayAny = _test_llm_application({
  model: "3.1",
  name: "ArrayAny",
})(typia.llm.application<ArrayAnyApplication, "3.1">());

interface ArrayAnyApplication {
  insert(p: { first: ArrayAny }): Promise<void>;
  reduce(p: { first: ArrayAny; second: ArrayAny | null }): Promise<ArrayAny>;
  coalesce(p: {
    first: ArrayAny | null;
    second: ArrayAny | null;
    third?: ArrayAny | null;
  }): Promise<ArrayAny | null>;
}
