import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_applicationEquals_gemini_ArrayHierarchicalPointer =
  (): void =>
    _test_llm_applicationEquals({
      model: "gemini",
      name: "ArrayHierarchicalPointer",
      factory: ArrayHierarchicalPointer,
    })(
      typia.llm.application<
        ArrayHierarchicalPointerApplication,
        "gemini",
        { equals: true }
      >(),
    );

interface ArrayHierarchicalPointerApplication {
  insert(p: { first: ArrayHierarchicalPointer }): Promise<void>;
  reduce(p: {
    first: ArrayHierarchicalPointer;
    second: ArrayHierarchicalPointer | null;
  }): Promise<ArrayHierarchicalPointer>;
  coalesce(p: {
    first: ArrayHierarchicalPointer | null;
    second: ArrayHierarchicalPointer | null;
    third?: ArrayHierarchicalPointer | null;
  }): Promise<ArrayHierarchicalPointer | null>;
}
