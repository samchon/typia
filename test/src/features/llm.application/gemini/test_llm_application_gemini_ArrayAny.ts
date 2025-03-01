import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_llm_application_gemini_ArrayAny = _test_llm_application({
  model: "gemini",
  name: "ArrayAny",
  factory: ArrayAny,
})(typia.llm.application<ArrayAnyApplication, "gemini">());

interface ArrayAnyApplication {
  insert(p: { first: ArrayAny }): Promise<void>;
  reduce(p: { first: ArrayAny; second: ArrayAny | null }): Promise<ArrayAny>;
  coalesce(p: {
    first: ArrayAny | null;
    second: ArrayAny | null;
    third?: ArrayAny | null;
  }): Promise<ArrayAny | null>;
}
