import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_application_claude_ArrayHierarchical =
  _test_llm_application({
    model: "claude",
    name: "ArrayHierarchical",
    factory: ArrayHierarchical,
  })(typia.llm.application<ArrayHierarchicalApplication, "claude">());

interface ArrayHierarchicalApplication {
  insert(p: { first: ArrayHierarchical }): Promise<void>;
  reduce(p: {
    first: ArrayHierarchical;
    second: ArrayHierarchical | null;
  }): Promise<ArrayHierarchical>;
  coalesce(p: {
    first: ArrayHierarchical | null;
    second: ArrayHierarchical | null;
    third?: ArrayHierarchical | null;
  }): Promise<ArrayHierarchical | null>;
}
