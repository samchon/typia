import typia from "typia";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_TemplateAtomic = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TemplateAtomic",
  })(typia.llm.schema<TemplateAtomic, "claude">({}));