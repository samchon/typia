import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ArrayRecursiveUnionExplicitPointer = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ArrayRecursiveUnionExplicitPointer",
    factory: ArrayRecursiveUnionExplicitPointer
  })(
    typia.llm.application<ArrayRecursiveUnionExplicitPointerApplication, "claude", { equals: true }>(),
  );

interface ArrayRecursiveUnionExplicitPointerApplication {
  insert(p: { first: ArrayRecursiveUnionExplicitPointer }): Promise<void>;
  reduce(p: { first: ArrayRecursiveUnionExplicitPointer, second: ArrayRecursiveUnionExplicitPointer | null }): Promise<ArrayRecursiveUnionExplicitPointer>;
  coalesce(p: {
    first: ArrayRecursiveUnionExplicitPointer | null,
    second: ArrayRecursiveUnionExplicitPointer | null,
    third?: ArrayRecursiveUnionExplicitPointer | null,
  }): Promise<ArrayRecursiveUnionExplicitPointer | null>;
}