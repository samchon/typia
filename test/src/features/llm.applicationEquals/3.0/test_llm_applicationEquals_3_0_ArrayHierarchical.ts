import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_applicationEquals_3_0_ArrayHierarchical = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ArrayHierarchical",
    factory: ArrayHierarchical,
  })(
    typia.llm.application<
      ArrayHierarchicalApplication,
      "3.0",
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
