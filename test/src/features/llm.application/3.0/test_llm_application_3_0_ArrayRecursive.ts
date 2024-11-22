import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_application_3_0_ArrayRecursive = _test_llm_application({
  model: "3.0",
  name: "ArrayRecursive",
})(typia.llm.application<ArrayRecursiveApplication, "3.0">());

interface ArrayRecursiveApplication {
  insert(first: ArrayRecursive): Promise<void>;
  reduce(
    first: ArrayRecursive,
    second: ArrayRecursive | null,
  ): Promise<ArrayRecursive>;
  coalesce(
    first: ArrayRecursive | null,
    second: ArrayRecursive | null,
    third?: ArrayRecursive | null,
  ): Promise<ArrayRecursive | null>;
}
