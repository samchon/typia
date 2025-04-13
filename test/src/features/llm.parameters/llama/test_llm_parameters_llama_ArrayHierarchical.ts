import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_llama_ArrayHierarchical = 
  _test_llm_parameters({
    model: "llama",
    name: "ArrayHierarchical",
  })(
    typia.llm.parameters<ArrayHierarchicalParameters, "llama">(),
  );

interface ArrayHierarchicalParameters {
  regular: ArrayHierarchical;
  nullable: ArrayHierarchical | null;
  optional: ArrayHierarchical | undefined;
  faint: ArrayHierarchical | null | undefined;
  array: Array<ArrayHierarchical>;
}