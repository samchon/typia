import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_application_3_0_ArrayHierarchical = _test_llm_application(
  {
    model: "3.0",
    name: "ArrayHierarchical",
  },
)(typia.llm.application<ArrayHierarchicalApplication, "3.0">());

interface ArrayHierarchicalApplication {
  insert(first: ArrayHierarchical): Promise<void>;
  reduce(
    first: ArrayHierarchical,
    second: ArrayHierarchical | null,
  ): Promise<ArrayHierarchical>;
  coalesce(
    first: ArrayHierarchical | null,
    second: ArrayHierarchical | null,
    third?: ArrayHierarchical | null,
  ): Promise<ArrayHierarchical | null>;
}
