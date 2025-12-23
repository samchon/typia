import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_llm_application_DynamicArray = (): void =>
  _test_llm_application({
    name: "DynamicArray",
    factory: DynamicArray,
  })(typia.llm.application<DynamicArrayApplication>());

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
