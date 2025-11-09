import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_DynamicUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "DynamicUnion",
  })(typia.llm.schema<DynamicUnion, "claude">({}));