import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_schema_gemini_TypeTagLength = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagLength",
  })(typia.llm.schema<TypeTagLength, "gemini">());
