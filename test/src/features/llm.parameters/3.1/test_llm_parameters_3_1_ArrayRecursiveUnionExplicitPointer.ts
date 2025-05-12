import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_parameters_3_1_ArrayRecursiveUnionExplicitPointer =
  _test_llm_parameters({
    model: "3.1",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.llm.parameters<ArrayRecursiveUnionExplicitPointerParameters, "3.1">(),
  );

interface ArrayRecursiveUnionExplicitPointerParameters {
  regular: ArrayRecursiveUnionExplicitPointer;
  nullable: ArrayRecursiveUnionExplicitPointer | null;
  optional: ArrayRecursiveUnionExplicitPointer | undefined;
  faint: ArrayRecursiveUnionExplicitPointer | null | undefined;
  array: Array<ArrayRecursiveUnionExplicitPointer>;
}
