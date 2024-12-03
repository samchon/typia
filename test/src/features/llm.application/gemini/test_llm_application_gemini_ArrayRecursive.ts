import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_application_gemini_ArrayRecursive = _test_llm_application(
  {
    model: "gemini",
    name: "ArrayRecursive",
  },
)(typia.llm.application<ArrayRecursiveApplication, "gemini">());

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
