import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_DynamicTemplate = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "DynamicTemplate",
  })(typia.llm.schema<DynamicTemplate, "gemini">({}));