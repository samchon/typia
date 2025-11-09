import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_0_DynamicArray = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "DynamicArray",
    factory: DynamicArray
  })(
    typia.llm.application<DynamicArrayApplication, "3.0", { equals: true }>(),
  );

interface DynamicArrayApplication {
  insert(p: { first: DynamicArray }): Promise<void>;
  reduce(p: { first: DynamicArray, second: DynamicArray | null }): Promise<DynamicArray>;
  coalesce(p: {
    first: DynamicArray | null,
    second: DynamicArray | null,
    third?: DynamicArray | null,
  }): Promise<DynamicArray | null>;
}