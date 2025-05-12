import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_application_llama_ArrayRecursive = _test_llm_application({
  model: "llama",
  name: "ArrayRecursive",
  factory: ArrayRecursive,
})(typia.llm.application<ArrayRecursiveApplication, "llama">());

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
