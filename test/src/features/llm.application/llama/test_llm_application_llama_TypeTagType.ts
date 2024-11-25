import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_llm_application_llama_TypeTagType = _test_llm_application({
  model: "llama",
  name: "TypeTagType",
})(typia.llm.application<TypeTagTypeApplication, "llama">());

interface TypeTagTypeApplication {
  insert(first: TypeTagType): Promise<void>;
  reduce(first: TypeTagType, second: TypeTagType | null): Promise<TypeTagType>;
  coalesce(
    first: TypeTagType | null,
    second: TypeTagType | null,
    third?: TypeTagType | null,
  ): Promise<TypeTagType | null>;
}
