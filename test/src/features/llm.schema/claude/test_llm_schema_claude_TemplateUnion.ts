import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_schema_claude_TemplateUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TemplateUnion",
  })(typia.llm.schema<TemplateUnion, "claude">({}));
