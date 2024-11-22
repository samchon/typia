import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_application_chatgpt_ArrayRecursiveUnionExplicitPointer =
  _test_llm_application({
    model: "chatgpt",
    name: "ArrayRecursiveUnionExplicitPointer",
  })(
    typia.llm.application<
      ArrayRecursiveUnionExplicitPointerApplication,
      "chatgpt"
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
