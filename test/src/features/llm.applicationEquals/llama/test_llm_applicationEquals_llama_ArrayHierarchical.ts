import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_applicationEquals_llama_ArrayHierarchical = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ArrayHierarchical",
    factory: ArrayHierarchical,
  })(
    typia.llm.application<
      ArrayHierarchicalApplication,
      "llama",
      { equals: true }
    >(),
  );

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
