import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_DynamicArray = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "DynamicArray",
    factory: DynamicArray
  })(
    typia.llm.application<DynamicArrayApplication, "gemini", { equals: true }>(),
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