import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_llm_parameters_3_1_DynamicArray = _test_llm_parameters({
  model: "3.1",
  name: "DynamicArray",
})(typia.llm.parameters<DynamicArrayParameters, "3.1">());

interface DynamicArrayParameters {
  regular: DynamicArray;
  nullable: DynamicArray | null;
  optional: DynamicArray | undefined;
  faint: DynamicArray | null | undefined;
  array: Array<DynamicArray>;
}
