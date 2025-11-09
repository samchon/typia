import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_schema_gemini_DynamicTree = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "DynamicTree",
  })(typia.llm.schema<DynamicTree, "gemini">({}));
