import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_llm_applicationOfValidate_claude_ArrayRecursiveUnionExplicitPointer =
  _test_llm_applicationOfValidate({
    model: "claude",
    name: "ArrayRecursiveUnionExplicitPointer",
    factory: ArrayRecursiveUnionExplicitPointer,
  })(
    typia.llm.applicationOfValidate<
      ArrayRecursiveUnionExplicitPointerApplication,
      "claude"
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
