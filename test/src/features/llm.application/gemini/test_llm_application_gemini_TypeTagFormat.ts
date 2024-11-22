import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_application_gemini_TypeTagFormat = _test_llm_application({
  model: "gemini",
  name: "TypeTagFormat",
})(typia.llm.application<TypeTagFormatApplication, "gemini">());

interface TypeTagFormatApplication {
  insert(first: TypeTagFormat): Promise<void>;
  reduce(
    first: TypeTagFormat,
    second: TypeTagFormat | null,
  ): Promise<TypeTagFormat>;
  coalesce(
    first: TypeTagFormat | null,
    second: TypeTagFormat | null,
    third?: TypeTagFormat | null,
  ): Promise<TypeTagFormat | null>;
}
