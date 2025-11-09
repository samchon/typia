import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_DynamicTree = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "DynamicTree",
  })(typia.llm.schema<DynamicTree, "claude">({}));