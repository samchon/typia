import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_applicationOfValidate_gemini_ArrayRecursive =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "ArrayRecursive",
    factory: ArrayRecursive,
  })(typia.llm.applicationOfValidate<ArrayRecursiveApplication, "gemini">());

interface ArrayRecursiveApplication {
  insert(p: { first: ArrayRecursive }): Promise<void>;
  reduce(p: {
    first: ArrayRecursive;
    second: ArrayRecursive | null;
  }): Promise<ArrayRecursive>;
  coalesce(p: {
    first: ArrayRecursive | null;
    second: ArrayRecursive | null;
    third?: ArrayRecursive | null;
  }): Promise<ArrayRecursive | null>;
}
