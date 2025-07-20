import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_llm_applicationEquals_3_1_DynamicArray = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "DynamicArray",
    factory: DynamicArray,
  })(typia.llm.application<DynamicArrayApplication, "3.1", { equals:; true }>());

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
