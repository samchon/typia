import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_llm_applicationOfValidate_chatgpt_ArrayHierarchicalPointer =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "ArrayHierarchicalPointer",
    factory: ArrayHierarchicalPointer,
  })(
    typia.llm.applicationOfValidate<
      ArrayHierarchicalPointerApplication,
      "chatgpt"
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
