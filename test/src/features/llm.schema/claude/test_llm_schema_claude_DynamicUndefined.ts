import typia from "typia";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_DynamicUndefined = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "DynamicUndefined",
  })(typia.llm.schema<DynamicUndefined, "claude">({}));