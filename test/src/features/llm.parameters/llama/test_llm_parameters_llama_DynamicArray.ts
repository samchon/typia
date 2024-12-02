import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_llm_parameters_llama_DynamicArray = _test_llm_parameters({
  model: "llama",
  name: "DynamicArray",
})(typia.llm.parameters<DynamicArrayParameters, "llama">());

interface DynamicArrayParameters {
  regular: DynamicArray;
  nullable: DynamicArray | null;
  optional: DynamicArray | undefined;
  faint: DynamicArray | null | undefined;
  array: Array<DynamicArray>;
}
