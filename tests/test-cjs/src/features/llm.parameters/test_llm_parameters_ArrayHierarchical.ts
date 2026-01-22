import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_llm_parameters_ArrayHierarchical = (): void =>
  _test_llm_parameters("ArrayHierarchical")(
    typia.llm.parameters<ArrayHierarchicalParameters>(),
  );

interface ArrayHierarchicalParameters {
  regular: ArrayHierarchical;
  nullable: ArrayHierarchical | null;
  optional: ArrayHierarchical | undefined;
  faint: ArrayHierarchical | null | undefined;
  array: Array<ArrayHierarchical>;
}
