import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_application_gemini_ArrayHierarchical =
  _test_llm_application({
    model: "gemini",
    name: "ArrayHierarchical",
  })(typia.llm.application<ArrayHierarchicalApplication, "gemini">());

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
