import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_application_3_1_ArrayRecursiveUnionExplicitPointer =
  _test_llm_application({
    model: "3.1",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.llm.application<
      ArrayRecursiveUnionExplicitPointerApplication,
      "3.1"
    >(),
  );

interface ArrayRecursiveUnionExplicitPointerApplication {
  insert(first: ArrayRecursiveUnionExplicitPointer): Promise<void>;
  reduce(
    first: ArrayRecursiveUnionExplicitPointer,
    second: ArrayRecursiveUnionExplicitPointer | null,
  ): Promise<ArrayRecursiveUnionExplicitPointer>;
  coalesce(
    first: ArrayRecursiveUnionExplicitPointer | null,
    second: ArrayRecursiveUnionExplicitPointer | null,
    third?: ArrayRecursiveUnionExplicitPointer | null,
  ): Promise<ArrayRecursiveUnionExplicitPointer | null>;
}
