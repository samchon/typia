import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_schema_gemini_TypeTagMatrix = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagMatrix",
  })(typia.llm.schema<TypeTagMatrix, "gemini">());
