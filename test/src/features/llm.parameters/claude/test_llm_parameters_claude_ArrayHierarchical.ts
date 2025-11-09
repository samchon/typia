import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ArrayHierarchical = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ArrayHierarchical",
  })(
    typia.llm.parameters<ArrayHierarchicalParameters, "claude">(),
  );

interface ArrayHierarchicalParameters {
  regular: ArrayHierarchical;
  nullable: ArrayHierarchical | null;
  optional: ArrayHierarchical | undefined;
  faint: ArrayHierarchical | null | undefined;
  array: Array<ArrayHierarchical>;
}