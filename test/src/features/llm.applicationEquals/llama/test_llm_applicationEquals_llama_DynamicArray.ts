import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_llm_applicationEquals_llama_DynamicArray = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "DynamicArray",
    factory: DynamicArray,
  })(
    typia.llm.application<DynamicArrayApplication, "llama", { equal: true }>(),
  );

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
