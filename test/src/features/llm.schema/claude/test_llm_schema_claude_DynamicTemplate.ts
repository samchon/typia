import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_DynamicTemplate = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "DynamicTemplate",
  })(typia.llm.schema<DynamicTemplate, "claude">({}));