import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_llm_application_chatgpt_DynamicArray = _test_llm_application({
  model: "chatgpt",
  name: "DynamicArray",
})(typia.llm.application<DynamicArrayApplication, "chatgpt">());

interface DynamicArrayApplication {
  insert(first: DynamicArray): Promise<void>;
  reduce(
    first: DynamicArray,
    second: DynamicArray | null,
  ): Promise<DynamicArray>;
  coalesce(
    first: DynamicArray | null,
    second: DynamicArray | null,
    third?: DynamicArray | null,
  ): Promise<DynamicArray | null>;
}
