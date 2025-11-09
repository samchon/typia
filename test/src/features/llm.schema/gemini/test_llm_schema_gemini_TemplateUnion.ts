import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_schema_gemini_TemplateUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TemplateUnion",
  })(typia.llm.schema<TemplateUnion, "gemini">({}));
