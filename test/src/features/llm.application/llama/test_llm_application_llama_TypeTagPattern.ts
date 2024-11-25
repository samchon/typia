import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_application_llama_TypeTagPattern = _test_llm_application({
  model: "llama",
  name: "TypeTagPattern",
})(typia.llm.application<TypeTagPatternApplication, "llama">());

interface TypeTagPatternApplication {
  insert(first: TypeTagPattern): Promise<void>;
  reduce(
    first: TypeTagPattern,
    second: TypeTagPattern | null,
  ): Promise<TypeTagPattern>;
  coalesce(
    first: TypeTagPattern | null,
    second: TypeTagPattern | null,
    third?: TypeTagPattern | null,
  ): Promise<TypeTagPattern | null>;
}
