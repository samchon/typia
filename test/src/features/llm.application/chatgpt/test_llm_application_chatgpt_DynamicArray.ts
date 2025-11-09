import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_chatgpt_DynamicArray = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "DynamicArray",
    factory: DynamicArray
  })(
    typia.llm.application<DynamicArrayApplication, "chatgpt">(),
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