import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_application_3_0_ArrayRecursive =
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ArrayRecursive",
    factory: ArrayRecursive,
  })(
    typia.llm.application<ArrayRecursiveApplication, "3.0", { equal: true }>(),
  );

interface ArrayRecursiveApplication {
  insert(p: { first: ArrayRecursive }): Promise<void>;
  reduce(p: {
    first: ArrayRecursive;
    second: ArrayRecursive | null;
  }): Promise<ArrayRecursive>;
  coalesce(p: {
    first: ArrayRecursive | null;
    second: ArrayRecursive | null;
    third?: ArrayRecursive | null;
  }): Promise<ArrayRecursive | null>;
}
