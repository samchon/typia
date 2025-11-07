import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_llm_schema_gemini_DynamicSimple = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "DynamicSimple",
  })(typia.llm.schema<DynamicSimple, "gemini">({}));
