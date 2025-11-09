import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_TemplateConstant = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TemplateConstant",
  })(typia.llm.schema<TemplateConstant, "gemini">({}));