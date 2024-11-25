import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_application_llama_ArrayRecursiveUnionExplicitPointer =
  _test_llm_application({
    model: "llama",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.llm.application<
      ArrayRecursiveUnionExplicitPointerApplication,
      "llama"
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
