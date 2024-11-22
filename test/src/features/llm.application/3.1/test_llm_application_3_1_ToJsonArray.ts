import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_llm_application_3_1_ToJsonArray = _test_llm_application({
  model: "3.1",
  name: "ToJsonArray",
})(typia.llm.application<ToJsonArrayApplication, "3.1">());

interface ToJsonArrayApplication {
  insert(first: ToJsonArray): Promise<void>;
  reduce(first: ToJsonArray, second: ToJsonArray | null): Promise<ToJsonArray>;
  coalesce(
    first: ToJsonArray | null,
    second: ToJsonArray | null,
    third?: ToJsonArray | null,
  ): Promise<ToJsonArray | null>;
}
