import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_schema_gemini_TypeTagDefault = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagDefault",
  })(typia.llm.schema<TypeTagDefault, "gemini">({}));
