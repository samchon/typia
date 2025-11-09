import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_application_3_1_ArrayHierarchicalPointer = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ArrayHierarchicalPointer",
    factory: ArrayHierarchicalPointer,
  })(typia.llm.application<ArrayHierarchicalPointerApplication, "3.1">());

interface ArrayHierarchicalPointerApplication {
  insert(p: { first: ArrayHierarchicalPointer }): Promise<void>;
  reduce(p: {
    first: ArrayHierarchicalPointer;
    second: ArrayHierarchicalPointer | null;
  }): Promise<ArrayHierarchicalPointer>;
  coalesce(p: {
    first: ArrayHierarchicalPointer | null;
    second: ArrayHierarchicalPointer | null;
    third?: ArrayHierarchicalPointer | null;
  }): Promise<ArrayHierarchicalPointer | null>;
}
