import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_parameters_claude_ArrayHierarchical =
  _test_llm_parameters({
    model: "claude",
    name: "ArrayHierarchical",
  })(typia.llm.parameters<ArrayHierarchicalParameters, "claude">());

interface ArrayHierarchicalParameters {
  regular: ArrayHierarchical;
  nullable: ArrayHierarchical | null;
  optional: ArrayHierarchical | undefined;
  faint: ArrayHierarchical | null | undefined;
  array: Array<ArrayHierarchical>;
}
