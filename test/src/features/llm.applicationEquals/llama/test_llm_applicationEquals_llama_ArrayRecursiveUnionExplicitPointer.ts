import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_applicationEquals_llama_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_llm_applicationEquals({
      model: "llama",
      name: "ArrayRecursiveUnionExplicitPointer",
      factory: ArrayRecursiveUnionExplicitPointer,
    })(
      typia.llm.application<
        ArrayRecursiveUnionExplicitPointerApplication,
        "llama",
        { equals: true }
      >(),
    );

interface ArrayRecursiveUnionExplicitPointerApplication {
  insert(p: { first: ArrayRecursiveUnionExplicitPointer }): Promise<void>;
  reduce(p: {
    first: ArrayRecursiveUnionExplicitPointer;
    second: ArrayRecursiveUnionExplicitPointer | null;
  }): Promise<ArrayRecursiveUnionExplicitPointer>;
  coalesce(p: {
    first: ArrayRecursiveUnionExplicitPointer | null;
    second: ArrayRecursiveUnionExplicitPointer | null;
    third?: ArrayRecursiveUnionExplicitPointer | null;
  }): Promise<ArrayRecursiveUnionExplicitPointer | null>;
}
