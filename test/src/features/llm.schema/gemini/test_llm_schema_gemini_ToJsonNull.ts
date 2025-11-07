import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_schema_gemini_ToJsonNull = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ToJsonNull",
  })(typia.llm.schema<ToJsonNull, "gemini">({}));
