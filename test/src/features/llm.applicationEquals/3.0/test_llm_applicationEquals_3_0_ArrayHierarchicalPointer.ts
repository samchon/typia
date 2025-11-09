import typia from "typia";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_0_ArrayHierarchicalPointer = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ArrayHierarchicalPointer",
    factory: ArrayHierarchicalPointer
  })(
    typia.llm.application<ArrayHierarchicalPointerApplication, "3.0", { equals: true }>(),
  );

interface ArrayHierarchicalPointerApplication {
  insert(p: { first: ArrayHierarchicalPointer }): Promise<void>;
  reduce(p: { first: ArrayHierarchicalPointer, second: ArrayHierarchicalPointer | null }): Promise<ArrayHierarchicalPointer>;
  coalesce(p: {
    first: ArrayHierarchicalPointer | null,
    second: ArrayHierarchicalPointer | null,
    third?: ArrayHierarchicalPointer | null,
  }): Promise<ArrayHierarchicalPointer | null>;
}