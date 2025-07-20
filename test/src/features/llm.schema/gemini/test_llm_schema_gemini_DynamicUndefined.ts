import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_llm_schema_gemini_DynamicUndefined = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "DynamicUndefined",
  })(typia.llm.schema<DynamicUndefined, "gemini">());
