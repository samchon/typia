import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_ArrayHierarchical = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "ArrayHierarchical",
  })(
    typia.llm.parameters<ArrayHierarchicalParameters, "3.1">(),
  );

interface ArrayHierarchicalParameters {
  regular: ArrayHierarchical;
  nullable: ArrayHierarchical | null;
  optional: ArrayHierarchical | undefined;
  faint: ArrayHierarchical | null | undefined;
  array: Array<ArrayHierarchical>;
}