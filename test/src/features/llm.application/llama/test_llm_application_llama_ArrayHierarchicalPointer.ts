import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_application_llama_ArrayHierarchicalPointer =
  _test_llm_application({
    model: "llama",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.application<ArrayHierarchicalPointerApplication, "llama">());

interface ArrayHierarchicalPointerApplication {
  insert(first: ArrayHierarchicalPointer): Promise<void>;
  reduce(
    first: ArrayHierarchicalPointer,
    second: ArrayHierarchicalPointer | null,
  ): Promise<ArrayHierarchicalPointer>;
  coalesce(
    first: ArrayHierarchicalPointer | null,
    second: ArrayHierarchicalPointer | null,
    third?: ArrayHierarchicalPointer | null,
  ): Promise<ArrayHierarchicalPointer | null>;
}
