import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_parameters_3_0_ArrayHierarchicalPointer = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.parameters<ArrayHierarchicalPointerParameters, "3.0">());

interface ArrayHierarchicalPointerParameters {
  regular: ArrayHierarchicalPointer;
  nullable: ArrayHierarchicalPointer | null;
  optional: ArrayHierarchicalPointer | undefined;
  faint: ArrayHierarchicalPointer | null | undefined;
  array: Array<ArrayHierarchicalPointer>;
}
