import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_schema_gemini_ArrayRepeatedRequired = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ArrayRepeatedRequired",
  })(typia.llm.schema<ArrayRepeatedRequired, "gemini">({}));
