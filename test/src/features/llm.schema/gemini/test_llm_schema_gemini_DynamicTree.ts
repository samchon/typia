import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_DynamicTree = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "DynamicTree",
  })(typia.llm.schema<DynamicTree, "gemini">({}));