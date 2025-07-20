import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_llm_schema_gemini_TypeTagType = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagType",
  })(typia.llm.schema<TypeTagType, "gemini">());
