import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_parameters_llama_ArrayHierarchicalPointer =
  _test_llm_parameters({
    model: "llama",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.parameters<ArrayHierarchicalPointerParameters, "llama">());

interface ArrayHierarchicalPointerParameters {
  regular: ArrayHierarchicalPointer;
  nullable: ArrayHierarchicalPointer | null;
  optional: ArrayHierarchicalPointer | undefined;
  faint: ArrayHierarchicalPointer | null | undefined;
  array: Array<ArrayHierarchicalPointer>;
}
