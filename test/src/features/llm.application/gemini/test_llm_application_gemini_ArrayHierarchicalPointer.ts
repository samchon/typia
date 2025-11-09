import typia from "typia";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_ArrayHierarchicalPointer = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ArrayHierarchicalPointer",
    factory: ArrayHierarchicalPointer
  })(
    typia.llm.application<ArrayHierarchicalPointerApplication, "gemini">(),
  );

interface ArrayHierarchicalPointerApplication {
  insert(p: { first: ArrayHierarchicalPointer }): Promise<void>;
  reduce(p: { first: ArrayHierarchicalPointer, second: ArrayHierarchicalPointer | null }): Promise<ArrayHierarchicalPointer>;
  coalesce(p: {
    first: ArrayHierarchicalPointer | null,
    second: ArrayHierarchicalPointer | null,
    third?: ArrayHierarchicalPointer | null,
  }): Promise<ArrayHierarchicalPointer | null>;
}