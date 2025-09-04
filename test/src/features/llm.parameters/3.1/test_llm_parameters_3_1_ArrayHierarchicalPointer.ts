import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_parameters_3_1_ArrayHierarchicalPointer = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.parameters<ArrayHierarchicalPointerParameters, "3.1">());

interface ArrayHierarchicalPointerParameters {
  regular: ArrayHierarchicalPointer;
  nullable: ArrayHierarchicalPointer | null;
  optional: ArrayHierarchicalPointer | undefined;
  faint: ArrayHierarchicalPointer | null | undefined;
  array: Array<ArrayHierarchicalPointer>;
}
