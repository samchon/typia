import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_parameters_chatgpt_ArrayHierarchical =
  _test_llm_parameters({
    model: "chatgpt",
    name: "ArrayHierarchical",
  })(typia.llm.parameters<ArrayHierarchicalParameters, "chatgpt">());

interface ArrayHierarchicalParameters {
  regular: ArrayHierarchical;
  nullable: ArrayHierarchical | null;
  optional: ArrayHierarchical | undefined;
  faint: ArrayHierarchical | null | undefined;
  array: Array<ArrayHierarchical>;
}
