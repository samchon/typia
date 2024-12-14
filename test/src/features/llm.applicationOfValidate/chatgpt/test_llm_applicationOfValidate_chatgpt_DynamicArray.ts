import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_llm_applicationOfValidate_chatgpt_DynamicArray =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "DynamicArray",
    factory: DynamicArray,
  })(typia.llm.applicationOfValidate<DynamicArrayApplication, "chatgpt">());

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
