import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_parameters_claude_ArrayHierarchicalPointer = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ArrayHierarchicalPointer",
  })(typia.llm.parameters<ArrayHierarchicalPointerParameters, "claude">());

interface ArrayHierarchicalPointerParameters {
  regular: ArrayHierarchicalPointer;
  nullable: ArrayHierarchicalPointer | null;
  optional: ArrayHierarchicalPointer | undefined;
  faint: ArrayHierarchicalPointer | null | undefined;
  array: Array<ArrayHierarchicalPointer>;
}
