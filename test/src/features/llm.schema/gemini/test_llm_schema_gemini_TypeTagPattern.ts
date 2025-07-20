import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_schema_gemini_TypeTagPattern = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagPattern",
  })(typia.llm.schema<TypeTagPattern, "gemini">());
