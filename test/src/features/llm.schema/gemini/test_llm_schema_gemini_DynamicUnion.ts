import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_llm_schema_gemini_DynamicUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "DynamicUnion",
  })(typia.llm.schema<DynamicUnion, "gemini">({}));
