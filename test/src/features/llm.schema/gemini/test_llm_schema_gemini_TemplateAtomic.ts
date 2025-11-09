import typia from "typia";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_TemplateAtomic = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TemplateAtomic",
  })(typia.llm.schema<TemplateAtomic, "gemini">({}));