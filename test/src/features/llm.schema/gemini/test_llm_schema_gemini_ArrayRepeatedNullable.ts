import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_schema_gemini_ArrayRepeatedNullable = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayRepeatedNullable",
  })(typia.llm.schema<ArrayRepeatedNullable, "gemini">({}));
