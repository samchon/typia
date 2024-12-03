import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_llm_application_3_0_DynamicArray = _test_llm_application({
  model: "3.0",
  name: "DynamicArray",
})(typia.llm.application<DynamicArrayApplication, "3.0">());

interface DynamicArrayApplication {
  insert(p: { first: DynamicArray }): Promise<void>;
  reduce(p: {
    first: DynamicArray;
    second: DynamicArray | null;
  }): Promise<DynamicArray>;
  coalesce(p: {
    first: DynamicArray | null;
    second: DynamicArray | null;
    third?: DynamicArray | null;
  }): Promise<DynamicArray | null>;
}
