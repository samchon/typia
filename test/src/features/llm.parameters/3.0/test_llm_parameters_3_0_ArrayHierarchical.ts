import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_parameters_3_0_ArrayHierarchical = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ArrayHierarchical",
  })(typia.llm.parameters<ArrayHierarchicalParameters, "3.0">());

interface ArrayHierarchicalParameters {
  regular: ArrayHierarchical;
  nullable: ArrayHierarchical | null;
  optional: ArrayHierarchical | undefined;
  faint: ArrayHierarchical | null | undefined;
  array: Array<ArrayHierarchical>;
}
