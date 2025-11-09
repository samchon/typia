import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ArrayHierarchical = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ArrayHierarchical",
    factory: ArrayHierarchical
  })(
    typia.llm.application<ArrayHierarchicalApplication, "chatgpt", { equals: true }>(),
  );

interface ArrayHierarchicalApplication {
  insert(p: { first: ArrayHierarchical }): Promise<void>;
  reduce(p: { first: ArrayHierarchical, second: ArrayHierarchical | null }): Promise<ArrayHierarchical>;
  coalesce(p: {
    first: ArrayHierarchical | null,
    second: ArrayHierarchical | null,
    third?: ArrayHierarchical | null,
  }): Promise<ArrayHierarchical | null>;
}