import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_DynamicArray = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "DynamicArray",
    factory: DynamicArray
  })(
    typia.llm.application<DynamicArrayApplication, "3.1">(),
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