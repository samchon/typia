import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_llm_schema_gemini_TypeTagCustom = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagCustom",
  })(typia.llm.schema<TypeTagCustom, "gemini">({}));
