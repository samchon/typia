import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_schema_gemini_ArrayRepeatedUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayRepeatedUnion",
  })(typia.llm.schema<ArrayRepeatedUnion, "gemini">({}));
