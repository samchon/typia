import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_application_3_0_ArrayRepeatedRequired =
  _test_llm_application({
    model: "3.0",
    name: "ArrayRepeatedRequired",
  })(typia.llm.application<ArrayRepeatedRequiredApplication, "3.0">());

interface ArrayRepeatedRequiredApplication {
  insert(first: ArrayRepeatedRequired): Promise<void>;
  reduce(
    first: ArrayRepeatedRequired,
    second: ArrayRepeatedRequired | null,
  ): Promise<ArrayRepeatedRequired>;
  coalesce(
    first: ArrayRepeatedRequired | null,
    second: ArrayRepeatedRequired | null,
    third?: ArrayRepeatedRequired | null,
  ): Promise<ArrayRepeatedRequired | null>;
}
