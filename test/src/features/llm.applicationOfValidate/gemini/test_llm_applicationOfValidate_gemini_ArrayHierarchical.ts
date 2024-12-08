import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_applicationOfValidate_gemini_ArrayHierarchical =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "ArrayHierarchical",
    factory: ArrayHierarchical,
  })(typia.llm.applicationOfValidate<ArrayHierarchicalApplication, "gemini">());

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
